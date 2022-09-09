package com.dashboard.happy.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dashboard.happy.entities.Dice;

public interface DiceRepository extends JpaRepository<Dice, Integer>{

}
