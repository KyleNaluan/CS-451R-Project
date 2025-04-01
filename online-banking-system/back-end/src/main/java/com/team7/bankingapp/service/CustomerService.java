package com.team7.bankingapp.service;

import com.team7.bankingapp.model.Customer;
import com.team7.bankingapp.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.Random;

@Service
public class CustomerService {
    
    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    public String registerUser(Customer customer) {
        if (customerRepository.findByUsername(customer.getUsername()).isPresent()) {
            return "Username already exists!";
        }

        if (customerRepository.findByEmail(customer.getEmail()).isPresent()) {
            return "Email already registered!";
        }

        customer.setCustomerID(generateUniqueID());
        customer.setPassword(passwordEncoder.encode(customer.getPassword()));
        
        customerRepository.save(customer);
        return "User registered successfully!";
    }

    private Long generateUniqueID() {
        Random random = new Random();
        long id;
        do {
          id = 1000000000L + (long) (random.nextDouble() * 9000000000L);
        } while (customerRepository.existsById(id));
        return id;
    }

    public Optional<Customer> authenticateUser(String identifier, String password) {
        Optional<Customer> customer = customerRepository.findByUsernameOrEmail(identifier, identifier);
        if (customer.isPresent() && passwordEncoder.matches(password, customer.get().getPassword())) {
            return customer;
        }
        return Optional.empty();
    }
}
