package com.example.ian.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.ian.domain.model.Date;

public interface DateRepository extends JpaRepository<Date, Long>  {

}
