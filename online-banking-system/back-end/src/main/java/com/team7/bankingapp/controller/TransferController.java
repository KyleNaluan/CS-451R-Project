package com.team7.bankingapp.controller;

import com.team7.bankingapp.model.Transfer;
import com.team7.bankingapp.service.TransferService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import java.math.BigDecimal;
import java.util.*;

@RestController
@RequestMapping("/api/transfer")
public class TransferController {

    @Autowired
    private TransferService transferService;

    @PostMapping
    public ResponseEntity<?> transferFunds(@RequestParam long sourceAccount,
                                           @RequestParam long receivingAccount,
                                           @RequestParam BigDecimal amount,
                                           @RequestParam(required = false) String comment) {
        try {
            Transfer result = transferService.executeTransfer(sourceAccount, receivingAccount, amount, comment);
            return ResponseEntity.ok(result);
        } catch (IllegalArgumentException e) {
            return ResponseEntity
                    .badRequest()
                    .body(Map.of("message", e.getMessage()));
        } catch (RuntimeException e) {
            return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body(Map.of("message", e.getMessage()));
        } catch (Exception e) {
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("message", "Unexpected error occurred."));
        }
    }
}

