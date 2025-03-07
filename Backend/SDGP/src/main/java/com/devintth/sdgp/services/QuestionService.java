package com.devintth.sdgp.services;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.json.JSONObject;
import org.json.JSONArray;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.util.Random;


@Service
public class QuestionService {

    @Value("${openai.api.key}")
    private String apiKey;  // Use Spring's property injection to store your API Key

    private static final String API_URL = "https://api.openai.com/v1/chat/completions";

    // RestTemplate to make the API request
    private final RestTemplate restTemplate;

    public QuestionService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public String fetchQuestion(String role) {
        String prompt = "Ask a direct interview question for a " + role + " role, without any extra text or formatting.";
        String requestBody = String.format(
                "{\"model\": \"gpt-4o-mini\", \"messages\": [{\"role\": \"system\", \"content\": \"You are a professional interviewer.\"}, {\"role\": \"user\", \"content\": \"%s\"}], \"max_tokens\": 100}",
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

    public String alternateQuestion(String role) {
        String[] categories = {"Technical Skills", "IQ Test", "Soft Skills", "Project Experience", "Industry Knowledge"};
        Random random = new Random();
        String randomCategory = categories[random.nextInt(categories.length)];
        String prompt = "Generate a different interview question for a "+ role + "role from the" +randomCategory+ "category. Keep the question direct without extra text.";
        String requestBody = String.format(
                "{\"model\": \"gpt-4o-mini\", \"messages\": [{\"role\": \"system\", \"content\": \"You are a professional interviewer conducting realistic job interviews. Your task is to generate **one interview question at a time** based on the following categories:" +
                        " " +
                        "1. Technical Skills  " +
                        "2. IQ Test  " +
                        "3. Soft Skills  " +
                        "4. Project Experience  " +
                        "5. Industry Knowledge  " +
                        " " +
                        "**Rules to Follow Strictly:**" +
                        "- Ask only one question without extra text or greetings." +
                        "- Randomly select one category at a time." +
                        "- Never ask the same category twice in a row." +
                        "- Maintain balance: 50%% Technical + 50%% Non-Technical." +
                        "- Alternate between technical and non-technical categories in every question." +
                        "- If the user's role is IT-related, prioritize Technical Skills + Project Experience more." +
                        "- If the user's role is Business-related, prioritize Soft Skills + Industry Knowledge more." +
                        "- Questions must feel **human-like** without robotic repetition.\"}, {\"role\": \"user\", \"content\": \"%s\"}], \"max_tokens\": 100}",
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

    public String fetchfeedback(String question,String answer) {
        String prompt = "Evaluate the following answer based on the given interview question. Provide a short, professional feedback without any extra text or formatting."
                + "Question: " + question
                + ", Answer: " + answer;
        String requestBody = String.format(
                "{\"model\": \"gpt-4o-mini\", \"messages\": [{\"role\": \"system\", \"content\": \"You are an experienced interviewer providing concise feedback on candidates' answers.\"}, {\"role\": \"user\", \"content\": \"%s\"}], \"max_tokens\": 100}",
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


}

