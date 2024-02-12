package com.dhia.booksclub.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

import com.dhia.booksclub.models.Book;
import com.dhia.booksclub.models.User;
import com.dhia.booksclub.services.BookService;
import com.dhia.booksclub.services.UserService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@Controller
public class BookController {
	@Autowired
	private BookService bookServ;
	
	@Autowired
	private UserService userServ;
	
	@GetMapping("/books")
	public String books(Model model,HttpSession s) {
		// ROUTE GUARD
				Long userId = (Long) s.getAttribute("user_id");
				if(userId == null) {
					return "redirect:/";
				}else {
					List<Book> allBooks=bookServ.getAll();
					model.addAttribute("books",allBooks);
					return "books.jsp";
				}
	}
	
	@GetMapping("/books/new")
	public String newBook(@ModelAttribute("book")Book book, HttpSession s) {
		// ROUTE GUARD
		Long userId = (Long) s.getAttribute("user_id");
		if(userId == null) {
			return "redirect:/";
		}else {
		
		return "newBook.jsp";}
	}
	
	@PostMapping("/books/new")
	public String create(@Valid @ModelAttribute("book")Book book, BindingResult result, HttpSession s) {
		if ( result.hasErrors()) {
			return "newBook.jsp";
		}else {
		Long userId = (Long) s.getAttribute("user_id");
		User user = userServ.findUserById(userId);
		book.setPostedBy(user);
		bookServ.createBook(book);
		return "redirect:/books";
		}
	}
	
	@GetMapping("/books/{id}")
	public String showOne (@PathVariable("id") Long id, HttpSession s, Model model){
		// ROUTE GUARD
		Long userId = (Long) s.getAttribute("user_id");
		if(userId == null) {
			return "redirect:/";
		}else {
			Book book = bookServ.getOne(id);
			model.addAttribute("book",book);
			return "oneBook.jsp";
		}
	}
	
	@GetMapping("/books/edit/{id}")
	public String edit(Model model, HttpSession s, @PathVariable("id") Long id) {
		// ROUTE GUARD
				Long userId = (Long) s.getAttribute("user_id");
				if(userId == null) {
					return "redirect:/";
				}else {
					Book selectedBook = bookServ.getOne(id);
					model.addAttribute("book", selectedBook);
					return "edit.jsp";
				}
	}
	
	@PutMapping("/books/{id}")
	public String update(@Valid @ModelAttribute("book")Book book, BindingResult result, HttpSession s) {
		if ( result.hasErrors()) {
			return "edit.jsp";
		}else {
		Long userId = (Long) s.getAttribute("user_id");
		User user = userServ.findUserById(userId);
		book.setPostedBy(user);
		bookServ.createBook(book);
		return "redirect:/books";
		}
	}
	
	@DeleteMapping("/books/{id}")
	public String delete(@PathVariable("id")Long id) {
		bookServ.deleteBook(id);
		return "redirect:/books";
	}
	
}
