package com.dhia.burgertracker.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dhia.burgertracker.models.Burger;
import com.dhia.burgertracker.repositories.BurgerRepository;

@Service
public class BurgerService {
	
	@Autowired
	private BurgerRepository burgerRepo;
	
	//Read All
	public List<Burger> getAll(){
		return burgerRepo.findAll();	
		}
	
	//Create
	public Burger create(Burger b) {
		return burgerRepo.save(b);
	}
	
	//Read One 
	public Burger getById(Long id) {
		Optional<Burger> selectedB = burgerRepo.findById(id);
		if (selectedB.isEmpty()) {
			return null;
		}else {
			return selectedB.get();
		}
	}
	
	//Update
	public Burger updateBurger(Burger b) {
		return burgerRepo.save(b);
	}
	
	
}
