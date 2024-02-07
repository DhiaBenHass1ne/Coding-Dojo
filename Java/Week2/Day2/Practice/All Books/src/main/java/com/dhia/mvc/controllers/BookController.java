package com.dhia.mvc.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.dhia.mvc.models.Book;
import com.dhia.mvc.services.BookService;


@Controller
public class BookController {
	@Autowired
	BookService bookService;
	
	@GetMapping("/books/{id}")
	public String show (Model model, @PathVariable("id") Long bookId ) {
		Book selectedBook = bookService.findBook(bookId);
		model.addAttribute("book",selectedBook);
		
		return "show.jsp";
	}
	
    @GetMapping("/books")
    public String index(Model model) {
        List<Book> books = bookService.allBooks();
        model.addAttribute("books", books);
        return "index.jsp";
    }

}
