package com.dhia.counter.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import jakarta.servlet.http.HttpSession;

@Controller
public class CounterController {
	
	@GetMapping("")
	public String index(HttpSession session) {
    	// If the count is not already in session
		if (session.getAttribute("count") == null) {
		// Use setAttribute to initialize the count in session
			session.setAttribute("count", 0);
		}
		else {
		// increment the count by 1 using getAttribute and setAttribute
			int newCount = (int) session.getAttribute("count")+1;
			session.setAttribute("count",newCount);
		}
		return "index.jsp";
		
	
	}
	
	@GetMapping("/counter")
	public String counter() {
		
		return "counter.jsp";
	}
	

}
