console.log(this === window);

function foo() {
    console.log(this === window);
};

foo();

var poodle = {
    bark: function () {
        console.log(this === window);
        console.log(this === poodle);
        console.log("Woof!");
    },
    walk: function () {
        console.log(this);
        console.log("Skip!");
    },
    all: function () {
        this.walk();
        this.bark();
    },
    bounce: foo
};

poodle.bark();
poodle.walk();
poodle.all();
poodle.bounce();