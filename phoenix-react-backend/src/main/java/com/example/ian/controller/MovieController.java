package com.example.ian.controller;

import java.util.List;

import org.hibernate.mapping.Map;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.ian.domain.model.Movie;
import com.example.ian.repository.MovieRepository;
import com.example.ian.service.TicketService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/ian")
public class MovieController {
	
	Logger log = LoggerFactory.getLogger(MovieController.class);
	
	@Autowired
	private MovieRepository movieRepository;	
	
	@Autowired
	private TicketService ticketService;
		
	@GetMapping("/movies")
	public List<Movie> getAllMovies(){
		return movieRepository.findAll();
	}	
	
	@PostMapping(value = "/movies" )
	@ResponseStatus(HttpStatus.CREATED)
	public void selectMovies(@RequestBody List<Movie> movies){
				
		for(int i = 0; i < movies.size(); i++) {
			log.info("Movie: "+movies.get(i).getMovieName());
		}		
	}	
}
