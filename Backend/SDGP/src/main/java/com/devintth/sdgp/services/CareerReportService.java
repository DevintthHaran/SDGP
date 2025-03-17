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
public class CareerReportService {
    @Value("${openai.api.key}")
    private String apiKey;  // Use Spring's property injection to store your API Key

    private static final String API_URL = "https://api.openai.com/v1/chat/completions";

    // RestTemplate to make the API request
    private final RestTemplate restTemplate;

    public CareerReportService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }
    public String generateCareerReport(List<String> questions, List<String> answers) {
        // Validate lists
        if (questions == null || answers == null || questions.size() != answers.size()) {
            return "Error: Mismatch in question and answer list sizes.";
        }

        // Prepare input for OpenAI
        StringBuilder userContent = new StringBuilder();
        userContent.append("Summarize the user's career/skill assessment test responses based on the following questions and answers in a clear and concise manner, in a way that directly addresses the user:    ");

        for (int i = 0; i < questions.size(); i++) {
            userContent.append("Q").append(i + 1).append(": ").append(questions.get(i)).append(" ");
            userContent.append("Answer: ").append(answers.get(i)).append("    ");
        }

        // Construct JSON request body
        String requestBody = String.format(
                "{ \"model\": \"gpt-4o-mini\", \"messages\": [" +
                        "{\"role\": \"system\", \"content\": \"You are an AI career advisor providing a direct, concise, and fully complete summary of the user's career/skill assessment. Speak directly to the user using 'you'. Ensure all sentences are complete and do not get cut off. Keep the response brief, informative, and focused on the user's strengths, improvement areas, and career recommendations. Avoid unnecessary formatting or excessive details.\"}," +
                        "{\"role\": \"user\", \"content\": \"%s\"} " +
                        "], \"max_tokens\": 100 }",
                userContent.toString()
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

            // Extract AI-generated career report
            return message.getString("content");

        } catch (Exception e) {
            e.printStackTrace();
            return "Error generating report.";
        }
    }

    public String careerKeyResponse(List<String> questions, List<String> answers) {
        // Validate lists
        if (questions == null || answers == null || questions.size() != answers.size()) {
            return "Error: Mismatch in question and answer list sizes.";
        }

        // Prepare input for OpenAI
        StringBuilder userContent = new StringBuilder();
        userContent.append("Based on the user's skill and career assessment test responses, generate a concise list of key responsibilities they are suited for. Output only the key responsibilities as a comma-separated list without any extra text:    ");

        for (int i = 0; i < questions.size(); i++) {
            userContent.append("Q").append(i + 1).append(": ").append(questions.get(i)).append(" ");
            userContent.append("Answer: ").append(answers.get(i)).append("    ");
        }

        // Construct JSON request body
        String requestBody = String.format(
                "{ \"model\": \"gpt-4o-mini\", \"messages\": [" +
                        "{\"role\": \"system\", \"content\": \"You are an AI career advisor. Your task is to extract the key responsibilities the user is suited for based on their career/skill assessment responses. Only return a comma-separated list of responsibilities without any introduction, extra text, or formatting. Example: Software Development, Code Review, Unit Testing, Collaboration.\"}," +
                        "{\"role\": \"user\", \"content\": \"%s\"} " +
                        "], \"max_tokens\": 50 }",
                userContent.toString()
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

            // Extract AI-generated career report
            return message.getString("content");

        } catch (Exception e) {
            e.printStackTrace();
            return "Error generating report.";
        }
    }
    public String potentialGrowth(List<String> questions, List<String> answers) {
        // Validate lists
        if (questions == null || answers == null || questions.size() != answers.size()) {
            return "Error: Mismatch in question and answer list sizes.";
        }

        // Prepare input for OpenAI
        StringBuilder userContent = new StringBuilder();
        userContent.append("Based on the user's skill and career assessment test responses, generate a concise list of potential career growth they are suited for. Output only the potential career growth as a comma-separated list without any extra text:    ");

        for (int i = 0; i < questions.size(); i++) {
            userContent.append("Q").append(i + 1).append(": ").append(questions.get(i)).append(" ");
            userContent.append("Answer: ").append(answers.get(i)).append("    ");
        }

        // Construct JSON request body
        String requestBody = String.format(
                "{ \"model\": \"gpt-4o-mini\", \"messages\": [" +
                        "{\"role\": \"system\", \"content\": \"You are an AI career advisor. Your task is to extract the potential career growth the user is suited for based on their career/skill assessment responses. Only return a comma-separated list of responsibilities without any introduction, extra text, or formatting. Example: Senior Software Engineer, Software Architect, Engineering Manager.\"}," +
                        "{\"role\": \"user\", \"content\": \"%s\"} " +
                        "], \"max_tokens\": 50 }",
                userContent.toString()
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

            // Extract AI-generated career report
            return message.getString("content");

        } catch (Exception e) {
            e.printStackTrace();
            return "Error generating report.";
        }
    }
    public List<Integer> careerRate(List<String> questions, List<String> answers) {
        // Validate lists
        if (questions == null || answers == null || questions.size() != answers.size()) {
            throw new IllegalArgumentException("Mismatch in question and answer list sizes.");
        }

        // Prepare input for OpenAI
        StringBuilder userContent = new StringBuilder();
        userContent.append("Based on the user's skill and career assessment test responses, provide a percentage rating (0-100) for the following categories: Skill, Strength, Weakness, Values, Interests, and Personality Traits. Output only six integers in order, separated by commas, without any extra text. ");

        for (int i = 0; i < questions.size(); i++) {
            userContent.append("Q").append(i + 1).append(": ").append(questions.get(i)).append(" ");
            userContent.append("Answer: ").append(answers.get(i)).append("    ");
        }

        // Construct JSON request body
        String requestBody = String.format(
                "{ \"model\": \"gpt-4o-mini\", \"messages\": [" +
                        "{\"role\": \"system\", \"content\": \"You are an AI career advisor. Your task is to analyze the user's skill and career assessment responses and generate percentage ratings (0-100) for the following categories: Skill, Strength, Weakness, Values, Interests, and Personality Traits. Only return six comma-separated integers in order without any explanation, extra text, or formatting. Example output: 90,50,30,80,70,75.\"}," +
                        "{\"role\": \"user\", \"content\": \"%s\"} " +
                        "], \"max_tokens\": 20 }", // Ensuring a short response to avoid extra text
                userContent.toString()
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

            // Extract AI-generated numeric ratings
            String content = message.getString("content").trim();

            // Convert response into a List of Integers
            List<Integer> ratings = new ArrayList<>();
            for (String num : content.split(",")) {
                ratings.add(Integer.parseInt(num.trim()));
            }

            return ratings;

        } catch (Exception e) {
            e.printStackTrace();
            return List.of(0, 0, 0, 0, 0, 0); // Return default values in case of an error
        }
    }

}
