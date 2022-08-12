package com.example.ian.domain.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.example.ian.domain.model.Movie;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name="dates")
public class Date {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long dateId ;
	
	@Column(name="date")
	private String date;	
		
	public Date() {}

	public Date(String date) {
		super();
		this.date = date;
	}

	public long getDateId() {
		return dateId;
	}

	public void setDateId(long dateId) {
		this.dateId = dateId;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}
}
