function DigitalPal() {
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;
    this.feed = function () {
        if (this.hungry === true) {
            console.log("That was yummy!");
            this.hungry = false;
            this.sleepy = true;
        } else {
            console.log("No Thanks! I'm full.")
        };
    };
    this.sleep = function () {
        if (this.sleepy === true) {
            console.log("Zzzzzzzz");
            this.sleepy = false;
            this.bored = true;
            increaseAge();
        } else {
            console.log("No way! I'm not tired.");
        };
    };
    this.play = function () {
        if (this.bored === true) {
            console.log("Yay! Let's Play!");
            this.bored = false;
            this.hungry = true;
        } else {
            console.log("Not right now. Later?")
        };
    };
    this.increaseAge = function () {
        this.age++;
        console.log("Happy Birthday to me! I am " + this.age + " years old!");
    };
    this.Printstats = function () {
        console.log(this);
    }
};

var dog = new DigitalPal();
dog.outside = false;
dog.bark = function () {
    console.log("Woof! Woof!");
};
dog.goOutside = function () {
    if (dog.outside === false) {
        console.log("Yay! I love the outdoors!");
        dog.outside = true;
    } else {
        console.log("We are already outside though...");
    };
};
dog.goInside = function () {
    if (dog.outside === true) {
        console.log("Do we have to? Fine...");
        dog.outside = false;
    } else {
        console.log("I'm already inside...");
    };
};

var cat = new DigitalPal();
cat.houseCondition = 100;
cat.meow = function () {
    console.log("Meow! Meow!");
};
cat.destroyFurniture = function () {
    if (cat.houseCondition > 0) {
        cat.houseCondition -= 10;
        console.log("MUAHAHAHAHAHA TAKE THAT FURNITURE!");
        cat.bored = true;
        cat.sleepy = true;
    };
};
cat.buyNewFurniture = function () {
    cat.houseCondition += 50;
    console.log("You should get rid of that cat");
};

dog.Printstats();
cat.Printstats();