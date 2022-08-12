package com.example.ian.domain.model;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.ian.service.TicketService;

@Service
public class Ticket implements TicketService {
	
	private String ticketName;
	
	private List<Movie> selectedMovies;
	
	private List<Date> selectedDates;	
		
	public Ticket() {}

	public Ticket(String ticketName) {
		super();
		this.ticketName = ticketName;
	}

	public String getTicketName() {
		return ticketName;
	}

	public void setTicketName(String ticketName) {
		this.ticketName = ticketName;
	}

	@Override
	public List<Movie> setSelectedMovies(List<Movie> selectedMoviesList) {
		return selectedMoviesList;
		
	}
	
	

}
