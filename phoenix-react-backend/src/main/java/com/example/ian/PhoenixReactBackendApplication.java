package com.example.ian;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.ian.domain.model.Date;
import com.example.ian.domain.model.Movie;
import com.example.ian.repository.DateRepository;
import com.example.ian.repository.MovieRepository;

//@SpringBootApplication
//public class PhoenixReactBackendApplication implements CommandLineRunner {

@SpringBootApplication
public class PhoenixReactBackendApplication {
	
/*	@Autowired
	private MovieRepository movieRepository;
	
	@Autowired
	private DateRepository dateRepository; */

	public static void main(String[] args) {
		SpringApplication.run(PhoenixReactBackendApplication.class, args);
	}  

	
	/* 	@Override
	public void run(String... args) throws Exception {
		
		//------------create movies and save them to the database----------------------------------------	
		
			Movie movie1 = new Movie("Ip Man");		
			
			Movie movie2 = new Movie("Ong bak");
			
			movieRepository.saveAll(Arrays.asList(movie1,movie2));
			
			//--------create dates and save them in database-------------------------------------------------------		
			
			Date date1 = new Date("June 22 - 14:00");
			Date date2 = new Date("June 24 - 17:00");
			Date date3 = new Date("June 26 - 20:00");			
			
			dateRepository.saveAll(Arrays.asList(date1,date2,date3));
			
			//------add dates to the movie and save the movie in database------------------------------------------------------------------
				
		
	} */

}
