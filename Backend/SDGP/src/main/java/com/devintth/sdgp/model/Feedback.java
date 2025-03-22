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
//@Entity
//@Table(name="customer_feedback")
@Document(collection="customer_feedback")



public class Feedback {
    @Id
   // @GeneratedValue(strategy= GenerationType.IDENTITY)
    private String id;
    private String feedbackType;
    private String name;
    private String email;
    private String message;
    private int rating;



}
