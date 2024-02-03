package com.dhia.zookeeper;

public class Bat extends Mammal {
	
	public Bat () {
		this.setEnergy(300);
	}
	
	public void fly() {
		this.setEnergy(getEnergy()-50);
		System.out.println("The bat is airborne");
	}
	
	public void eatHumans() {
		this.setEnergy(getEnergy()+25);
		System.out.println("Tasty!");
	}
	
	public void attackTown() {
		this.setEnergy(getEnergy()-100);
		System.out.println("AAAAAAAAA");
	}
	
}
