package com.dashboard.happy.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dashboard.happy.entities.Dice;
import com.dashboard.happy.services.DiceService;

@RestController
@RequestMapping("/dashboard")
public class DiceController {
	
	@Autowired
	private DiceService service;
	
	@GetMapping("/dices")
	public Optional<Dice> findSales() {
		return service.findDice();
	}
}
