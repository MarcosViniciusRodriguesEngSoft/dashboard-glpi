package com.dashboard.happy.entities;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "glpi_dashboard")
public class Dice {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private LocalDate dtAbertura;
	private LocalDate dtFechamento;
	private Integer abertos;
	private Integer fechados;
	private Integer pendentes;
	private Integer solucionados;
	private Integer atribuidos;
	private Integer atrasados;
	private Integer critico;
	private Integer alto;
	private Integer medio;
	private Integer baixo;
	private Integer muitoBaixo;
	
	public Dice() {
	}
	
	public Integer getId() {
		return id;
	}
	
	public void setId(Integer id) {
		this.id = id;
	}
	
	public LocalDate getDtAbertura() {
		return dtAbertura;
	}
	
	public void setDtAbertura(LocalDate dtAbertura) {
		this.dtAbertura = dtAbertura;
	}

	public LocalDate getDtFechamento() {
		return dtFechamento;
	}

	public void setDtFechamento(LocalDate dtFechamento) {
		this.dtFechamento = dtFechamento;
	}

	public Integer getAbertos() {
		return abertos;
	}

	public void setAbertos(Integer abertos) {
		this.abertos = abertos;
	}

	public Integer getFechados() {
		return fechados;
	}

	public void setFechados(Integer fechados) {
		this.fechados = fechados;
	}

	public Integer getPendentes() {
		return pendentes;
	}

	public void setPendentes(Integer pendentes) {
		this.pendentes = pendentes;
	}

	public Integer getSolucionados() {
		return solucionados;
	}

	public void setSolucionados(Integer solucionados) {
		this.solucionados = solucionados;
	}

	public Integer getAtribuidos() {
		return atribuidos;
	}

	public void setAtribuidos(Integer atribuidos) {
		this.atribuidos = atribuidos;
	}

	public Integer getAtrasados() {
		return atrasados;
	}

	public void setAtrasados(Integer atrasados) {
		this.atrasados = atrasados;
	}

	public Integer getCritico() {
		return critico;
	}

	public void setCritico(Integer critico) {
		this.critico = critico;
	}

	public Integer getAlto() {
		return alto;
	}

	public void setAlto(Integer alto) {
		this.alto = alto;
	}

	public Integer getMedio() {
		return medio;
	}

	public void setMedio(Integer medio) {
		this.medio = medio;
	}

	public Integer getBaixo() {
		return baixo;
	}

	public void setBaixo(Integer baixo) {
		this.baixo = baixo;
	}

	public Integer getMuitoBaixo() {
		return muitoBaixo;
	}

	public void setMuitoBaixo(Integer muitoBaixo) {
		this.muitoBaixo = muitoBaixo;
	}
}
