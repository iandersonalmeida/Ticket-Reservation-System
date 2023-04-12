package com.example.ian.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/ian")
public class TicketController {
	
	Logger log = LoggerFactory.getLogger(TicketController.class);
	
	public void chooseTicketName(@RequestBody String TicketName) {
		
	}

}
