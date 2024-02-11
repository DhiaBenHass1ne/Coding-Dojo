package com.dhia.dojos.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.dhia.dojos.models.Dojo;
import com.dhia.dojos.services.DojoService;

import jakarta.validation.Valid;

@Controller
public class DojoController {
	
	@Autowired
	private DojoService dojoServ;
	
	
	@GetMapping("/dojos/new")
	public String newDojo(@ModelAttribute("dojo") Dojo dojo, BindingResult result) {
		return "newDojo.jsp";
	}
	
	@PostMapping("/newDojo")
	public String addDojo(@Valid @ModelAttribute("dojo") Dojo dojo, BindingResult result) {
		if (result.hasErrors()) {
			return "newDojo.jsp";
		}else {
			dojoServ.create(dojo);
			return "redirect:/dojos/new";
		}
	}
	
	@GetMapping("/dojos/{id}")
	public String oneDojo(Model model, @PathVariable("id") Long id) {
		Dojo selectedDojo = dojoServ.getOne(id);
		model.addAttribute("dojo",selectedDojo);
		return "oneDojo.jsp";
	}
}
