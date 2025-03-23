//package com.feedback.model;
package com.devintth.sdgp.model;

//import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Document(collection="customer_feedback")
public class Feedback {
    @Id
    private String id;
    private String feedbackType;
    private String name;
    private String email;
    private String message;
    private int rating;

    // Getter for message
    public String getMessage() {
        return this.message;
    }

    // Getter for feedbackType
    public String getFeedbackType() {
        return this.feedbackType;
    }

    // Getter for name
    public String getName() {
        return this.name;
    }

    // Getter for email
    public String getEmail() {
        return this.email;
    }

    // Getter for rating
    public int getRating() {
        return this.rating;
    }
}

