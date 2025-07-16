#Linguaggi 

L'astrazione ci permette di interagire con degli "oggetti" tramite una interfaccia.

Implementare l'esempio di una bicicletta tramite java:

class Bicycle {

	int cadence = 0;
	int speed = 0;
	int gear = 1;

	void changeCadence(int newValue) {
		cadence = newValue;
	}

	void changeGear(int newValue) {
		gear = newValue;
	}

	void speedUp(int newValue) {
		speed = speed - increment;
	}
	
	void applyBrakets(int decrement) {
		speed = speed - decrement;
	}

	void printStates() {
		System.out.println("cadence:" +
			cadence + " speed:" +
			speed + " gear:" + gear);
	}
}


class BicycleDemo {
    public static void main(String[] args) {

        // Create two different 
        // Bicycle objects
        Bicycle bike1 = new Bicycle();
        Bicycle bike2 = new Bicycle();

        // Invoke methods on 
        // those objects
        bike1.changeCadence(50);
        bike1.speedUp(10);
        bike1.changeGear(2);
        bike1.printStates();

        bike2.changeCadence(50);
        bike2.speedUp(10);
        bike2.changeGear(2);
        bike2.changeCadence(40);
        bike2.speedUp(10);
        bike2.changeGear(3);
        bike2.printStates();
    }
}


Estensione di una classe (per evitare la ridondanza) 

class MountainBike extend Bicycle{
	// new fields and method defining
	// a mountain bike would go here
}


Definizione di [[Interfacce]].
Definizione di [[Package]] 





