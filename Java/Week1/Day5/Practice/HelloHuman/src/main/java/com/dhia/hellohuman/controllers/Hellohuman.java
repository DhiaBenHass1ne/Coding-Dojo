package com.dhia.hellohuman.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Hellohuman {
	@RequestMapping("/human")
	public String human() {
		return "Hello Human!";
	}
	@RequestMapping("")
	public String named(@RequestParam(value="name") String firstName) {
		return "Hello "+ firstName + "!";
	}

	
}
