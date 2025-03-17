package com.devintth.sdgp.services;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;
import org.json.JSONObject;
import org.json.JSONArray;

import java.util.ArrayList;
import java.util.List;


@Service
public class SkillService {

    @Value("${openai.api.key}")
    private String apiKey;  // Use Spring's property injection to store your API Key

    private static final String API_URL = "https://api.openai.com/v1/chat/completions";

    // RestTemplate to make the API request
    private final RestTemplate restTemplate;

    public SkillService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }
    public String nextSkillQuestion(String Category,String question,String answer) {
        String prompt = "Category:"+ Category
                + "Previous Question:"+ question
                + " User Answer:" + answer
                + "Generate the next follow-up question in the format: How would you rate your proficiency in [Skill]? or How comfortable are you with [Skill/Concept]?";
        String requestBody = String.format(
                "{\"model\": \"gpt-4o-mini\", \"messages\": [{\"role\": \"system\", \"content\": \"You are an intelligent career assessment interviewer. Your job is to conduct personalized skill assessments by asking questions in a conversational style. Start with general questions and gradually ask more specific or deeper follow-up questions based on the user's previous answer. Always generate questions that are:" +
                        "- Clear and professional" +
                        "- Context-aware" +
                        "- Personalized to the user's previous answer" +
                        "- Balanced between technical knowledge and interpersonal skills" +
                        "- No more than one question at a time" +
                        "- In the format: How would you rate your proficiency in [Skill]? or How comfortable are you with [Skill/Concept]?" +
                        "Do not include any greetings or extra text — only the question.\"}, {\"role\": \"user\", \"content\": \"%s\"}], \"max_tokens\": 100}",
                prompt
        );

        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + apiKey);
        headers.set("Content-Type", "application/json");

        HttpEntity<String> entity = new HttpEntity<>(requestBody, headers);

        try {
            ResponseEntity<String> response = restTemplate.exchange(API_URL, HttpMethod.POST, entity, String.class);
            String result = response.getBody();

            System.out.println("API Response: " + result); // Debugging

            if (result != null) {
                JSONObject jsonResponse = new JSONObject(result);
                JSONArray choicesArray = jsonResponse.getJSONArray("choices");
                JSONObject firstChoice = choicesArray.getJSONObject(0);
                JSONObject messageObject = firstChoice.getJSONObject("message");

                return messageObject.getString("content"); // Extract the question
            }
        } catch (HttpClientErrorException e) {
            System.err.println("Error fetching from OpenAI: " + e.getMessage());
            return "Error fetching question.";
        } catch (Exception e) {
            System.err.println("Unexpected error: " + e.getMessage());
            return "Error parsing response.";
        }

        return "No question found.";
    }
    public List<String> skillMCQChoices(String question) {
        // System role guiding OpenAI
        String systemRole = "You are an AI that generates multiple-choice options for skill assessments. " +
                "Your response must be a valid JSON array. No extra text, only the JSON array.";

        // Prompt to ensure JSON output
        String prompt = "Generate MCQ answer choices for this question: " + question + ". " +
                "Return only a JSON array like this: [Option 1, Option 2, Option 3]. " +
                "No extra text or explanation.";

        // Construct JSON request body
        String requestBody = String.format(
                "{\"model\": \"gpt-4o-mini\", \"messages\": [" +
                        "{\"role\": \"system\", \"content\": \"%s\"}, " +
                        "{\"role\": \"user\", \"content\": \"%s\"}" +
                        "], \"max_tokens\": 50}",
                systemRole, prompt
        );

        // Prepare HTTP headers
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + apiKey);
        headers.set("Content-Type", "application/json");

        // Send HTTP request
        HttpEntity<String> entity = new HttpEntity<>(requestBody, headers);
        ResponseEntity<String> response = restTemplate.exchange(API_URL, HttpMethod.POST, entity, String.class);

        // Parse response JSON manually
        try {
            JSONObject root = new JSONObject(response.getBody());
            JSONArray choicesArray = root.getJSONArray("choices");
            JSONObject firstChoice = choicesArray.getJSONObject(0);
            JSONObject message = firstChoice.getJSONObject("message");

            // Print raw OpenAI response for debugging
            String content = message.getString("content").trim();
            System.out.println("Raw OpenAI Response: " + content);

            // Ensure JSON format
            if (!content.startsWith("[")) {
                throw new Exception("Invalid JSON format: " + content);
            }

            JSONArray mcqOptions = new JSONArray(content);

            // Convert JSONArray to List<String>
            List<String> choicesList = new ArrayList<>();
            for (int i = 0; i < mcqOptions.length(); i++) {
                choicesList.add(mcqOptions.getString(i));
            }
            return choicesList;
        } catch (Exception e) {
            e.printStackTrace();
            return new ArrayList<>();
        }
    }
}
