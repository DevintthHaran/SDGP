package com.devintth.sdgp.repository;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonPropertyOrder({"firstName", "lastName", "link"}) // Explicit order
public interface CounselorProjection {
    String getFirstName();
    String getLastName();
    String getLink();
}
