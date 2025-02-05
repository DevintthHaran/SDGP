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
        String prompt = "Generate an interview question for a " + role + " role.";
        String requestBody = String.format(
                "{\"model\": \"gpt-4o-mini\", \"messages\": [{\"role\": \"system\", \"content\": \"You are a helpful assistant.\"}, {\"role\": \"user\", \"content\": \"%s\"}], \"max_tokens\": 100}",
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

