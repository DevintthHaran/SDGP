package com.devintth.sdgp.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document

public class User {

    @Id
    private String userId;

    private String userName;

    private String userEmailId;

    private String userPassword;

    private int accessible;

    public int getAccessible() {
        return this.accessible;
    }

    public void setAccessible(int accessible) {
        this.accessible = accessible;
    }

    public String getUserName() {
        return this.userName;
    }

    public String getUserEmailId() {
        return this.userEmailId;
    }

    public String getUserPassword() {
        return this.userPassword;
    }


}