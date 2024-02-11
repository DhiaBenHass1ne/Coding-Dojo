package com.dhia.dojos.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dhia.dojos.models.Dojo;
import com.dhia.dojos.repositories.DojoRepository;

@Service
public class DojoService {
		
	@Autowired
	private DojoRepository dojoRepo;
	
	public List<Dojo> getAll(){
		return dojoRepo.findAll();
	}
	
	public Dojo getOne(Long id) {
		Optional<Dojo> selected = dojoRepo.findById(id);
		if (selected.isEmpty()) {
			return null;
		}
		else {return selected.get();}
		
	}
	
	public Dojo create(Dojo d) {
		return dojoRepo.save(d);
	}
}
