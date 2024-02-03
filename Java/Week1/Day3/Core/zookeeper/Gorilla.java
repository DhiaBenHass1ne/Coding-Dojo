package com.dhia.zookeeper;

public class Gorilla extends Mammal {
	
	public void throwSomething() {
		System.out.println("the gorilla has thrown something");	
		this.setEnergy(getEnergy()-5);
	}
	
	public void eatBananas() {
		this.setEnergy(getEnergy()+10);
		System.out.println("Mmmmmmmm");
	}
	
	public void climb() {
		this.setEnergy(getEnergy()-10);
		System.out.println("the gorilla climbed a tree");
	}
}
