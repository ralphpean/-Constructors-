//static species counters
let tigerCount = 0, monkeyCount = 0, snakeCount = 0;

//Super Class
class Animal{
		constructor(){
	    
			this.energy = 0;
		}
		makeSound(){
			console.log('sound');
			this.energy -= 3;
		}
		eatFood(sustenance){
			console.log('eating '+sustenance.name);
			this.energy += 5;
		}
		sleep(){
			console.log('sleep');
			this.energy += 10;
		}
}

//Sub classes
//Tiger
class Tiger extends Animal{
	constructor(){
		super();
		tigerCount++;
	}
	sleep(){
		console.log('tiger');
		this.energy += 5;
	}
	eatFood(sustenance){
		if(sustenance.name == "grain"){
			console.log('cannot eat grain. sensitive stomach');
		}else{
			console.log('tiger');
			super.eatFood(sustenance);
		}
	}
	howManyTotalTigers(){
		return tigerCount;
	}
}





//Monkey
class Monkey extends Animal{
	constructor(){
		super();
		monkeyCount++;
	}
	makeSound(){
		console.log('monkey sound');
		this.energy -= 4;
		}
	eatFood(sustenance){
		console.log('monkey eating '+sustenance.name);
		this.energy += 2;
	}
	play(){
		console.log(this.energy>=8?'Oooo Oooo Oooo':"Monkey is too tired");
		this.energy -= 8;
	}

 	howManyTotalMonkeys(){
		return monkeyCount;
	}
}



//Snake
class Snake extends Animal{
	constructor(){
		super();
		snakeCount++;
	}
	howManyTotalSnakes(){
		return snakeCount;
	}
}


//Jungle declaration
class Jungle {
	constructor(animalArray){
		this.animals = animalArray==null?[]:animalArray; //set to empty, else prepopulate
		this.food = [];
	}
	soundOff(){
		this.animals.forEach(function(animal){
			animal.makeSound();
		});
	}
}


//Major food groups

class Food{
	constructor(name){
	   this.name = name;
	}
}

//Meat
class Meat extends Food{
	constructor(){
		super("meat");
	}
}


//Fish
class Fish extends Food{
	constructor(){
		super("fish");
	}
}

//Bugs
class Bugs extends Food{
	constructor(){
		super("bugs");
	}
}

//Grain
class Grain extends Food{
	constructor(){
		super("grain");
	}
}

//Testing out things
let tiger = new Tiger();
let tiger2 = new Tiger();
let tiger3 = new Tiger();
tiger.sleep();
let bugs = new Bugs();
let grain = new Grain();
tiger.eatFood(bugs);
tiger.eatFood(grain);
console.log("tiger count "+tigerCount);
console.log(tiger.energy);
let monkey = new Monkey();
console.log(monkeyCount);
monkey.sleep();
monkey.play();
monkey.play();
monkey.play();
let snake = new Snake();
let jungle = new Jungle([tiger, tiger2, tiger3, monkey, snake]);
jungle.soundOff();