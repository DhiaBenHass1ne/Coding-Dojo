package com.dhia.dojos.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dhia.dojos.models.Ninja;
import com.dhia.dojos.repositories.NinjaRepositories;

@Service
public class NinjaService {
		
	@Autowired
	private NinjaRepositories ninjaRepo;
	
	public List<Ninja> getAll(){
		return ninjaRepo.findAll();
	}
	
	public Ninja getOne(Long id) {
		Optional<Ninja> selected = ninjaRepo.findById(id);
		if (selected.isEmpty()) {
			return null;
		}
		else {return selected.get();}
		
	}
	
	public Ninja create(Ninja n) {
		return ninjaRepo.save(n);
	}
}
