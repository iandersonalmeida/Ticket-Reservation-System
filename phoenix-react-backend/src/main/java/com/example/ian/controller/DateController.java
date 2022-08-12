package com.example.ian.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.ian.domain.model.Date;
import com.example.ian.repository.DateRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/ian")
public class DateController {
	
	@Autowired
	private DateRepository dateRepository;
	
	@GetMapping("/dates")
	public List<Date> getAllDates(){
		return dateRepository.findAll();
	}

}
