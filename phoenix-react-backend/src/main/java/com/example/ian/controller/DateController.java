package com.example.ian.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.ian.domain.model.Date;
import com.example.ian.repository.DateRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/ian")
public class DateController {
	
	Logger log = LoggerFactory.getLogger(DateController.class);
	
	@Autowired
	private DateRepository dateRepository;
	
	@GetMapping("/dates")
	public List<Date> getAllDates(){
		return dateRepository.findAll();
	}
	
	@PostMapping(value = "/dates")
	@ResponseStatus(HttpStatus.CREATED)
	public void selectedDates(@RequestBody List<Date> dates) {
		for(int i = 0;i < dates.size(); i++) {
			log.info("dates: "+dates.get(i).getDate());			
		}
	}

}
