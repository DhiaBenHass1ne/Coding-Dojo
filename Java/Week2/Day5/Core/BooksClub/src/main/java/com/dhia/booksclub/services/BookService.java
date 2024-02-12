package com.dhia.booksclub.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dhia.booksclub.models.Book;
import com.dhia.booksclub.repositories.BookRepository;

@Service
public class BookService {
	
	@Autowired
	private BookRepository bookRepo;
	
	public List<Book> getAll(){
		return bookRepo.findAll();
	}
	
	public Book getOne(Long id) {
		Optional<Book> selected = bookRepo.findById(id);
		if (selected.isEmpty()) {
			return null;
		}else {
			return selected.get();
		}
	}
	
	public Book createBook (Book b) {
		return bookRepo.save(b);
	}
	
	public Book updateBook (Book b) {
		return bookRepo.save(b);
	}
	
	public void deleteBook(Long id) {
		bookRepo.deleteById(id);
	}
}
