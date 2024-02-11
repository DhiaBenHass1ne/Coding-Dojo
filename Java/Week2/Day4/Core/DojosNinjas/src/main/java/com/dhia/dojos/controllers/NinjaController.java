package com.dhia.dojos.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.dhia.dojos.models.Dojo;
import com.dhia.dojos.models.Ninja;
import com.dhia.dojos.services.DojoService;
import com.dhia.dojos.services.NinjaService;

import jakarta.validation.Valid;

@Controller
public class NinjaController {
	
	@Autowired
	private NinjaService ninjaServ;
	
	@Autowired
	private DojoService dojoServ;
	
	@GetMapping("/ninjas/new")
	public String newDojo(@ModelAttribute("ninja") Ninja ninja, BindingResult result, Model model) {
		List<Dojo> dojos = dojoServ.getAll();
		
		model.addAttribute("dojos",dojos);
		return "newNinja.jsp";
	}
	
	@PostMapping("/newNinja")
	public String addDojo(@Valid @ModelAttribute("ninja") Ninja ninja, BindingResult result) {
		if (result.hasErrors()) {
			return "newNinja.jsp";
		}else {
			ninjaServ.create(ninja);
			return "redirect:/ninjas/new";
		}
	}
}
