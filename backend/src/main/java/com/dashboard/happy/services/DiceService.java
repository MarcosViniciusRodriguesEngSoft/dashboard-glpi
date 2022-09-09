package com.dashboard.happy.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dashboard.happy.entities.Dice;
import com.dashboard.happy.repositories.DiceRepository;

@Service
public class DiceService {
	@Autowired
	private DiceRepository repository;
	public Optional<Dice>findDice() {
		return repository.findById(1);
	}
}
