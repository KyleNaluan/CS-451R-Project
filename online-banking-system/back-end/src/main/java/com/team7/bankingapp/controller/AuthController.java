package com.team7.bankingapp.controller;

import com.team7.bankingapp.model.Customer;
import com.team7.bankingapp.service.CustomerService;
import com.team7.bankingapp.dto.LoginRequestDto;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@CrossOrigin(origins = "http://localhost:5174")
@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private CustomerService customerService;

    @PostMapping("/register")
    public String registerUser(@RequestBody Customer customer) {
        System.out
                .println("Received: " + customer.getFName() + ", " + customer.getLName() + ", " + customer.getEmail());
        return customerService.registerUser(customer);
    }

    @PostMapping("/login")
    public ResponseEntity<Map<String, String>> loginUser(@RequestBody LoginRequestDto request) {
        Optional<Customer> authenticatedUser = customerService.authenticateUser(request.getUsername(),
                request.getPassword());

        Map<String, String> response = new HashMap<>();
        if (authenticatedUser.isPresent()) {
            response.put("message", "Login Successful!");
            return ResponseEntity.ok(response);
        } else {
            response.put("message", "Invalid Credentials");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
        }
    }

}
