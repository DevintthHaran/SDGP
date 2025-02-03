package com.devintth.sdgp.services;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;

@Service
public class QuestionService {

    @Value("${openai.api.key}")
    private String apiKey;  // Use Spring's property injection to store your API Key

    private static final String API_URL = "https://api.openai.com/v1/completions";

    // RestTemplate to make the API request
    private final RestTemplate restTemplate;

    public QuestionService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public String fetchQuestion(String role) {
        String prompt = "Generate an interview question for a " + role + " role.";

        // Request body for OpenAI API
        String requestBody = String.format(
                "{\"model\": \"text-davinci-003\", \"prompt\": \"%s\", \"max_tokens\": 100}",
                prompt
        );

        // Set up the headers
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + apiKey);
        headers.set("Content-Type", "application/json");

        // Make the HTTP request
        HttpEntity<String> entity = new HttpEntity<>(requestBody, headers);
        ResponseEntity<String> response = restTemplate.exchange(API_URL, HttpMethod.POST, entity, String.class);

        // Parse the response (You may need to add JSON parsing)
        String result = response.getBody();

        // Extract the question from the JSON response (simple extraction for demo)
        // For a more structured solution, you could use a JSON parser like Jackson
        return result != null ? result.split("\"text\":\"")[1].split("\"")[0] : "No question found.";
    }
}

