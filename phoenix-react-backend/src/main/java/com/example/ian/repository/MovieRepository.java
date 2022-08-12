package com.example.ian.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.ian.domain.model.Movie;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {

}
