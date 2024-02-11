package com.dhia.dojos.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.dhia.dojos.models.Ninja;
@Repository
public interface NinjaRepositories extends CrudRepository<Ninja, Long> {
	List<Ninja> findAll();
}
