function Character(nameInput, profInput, genInput, ageInput, strengthInput, hpInput) {
    this.name = nameInput;
    this.profession = profInput;
    this.gender = genInput;
    this.age = ageInput;
    this.strength = strengthInput;
    this.hp = hpInput;
    this.PrintStats = function () {
        console.log(this);
    };
    this.IsAlive = function () {
        if (this.hp > 0) {
            console.log("Still Kickin' ");
        } else {
            console.log(this.name + "has died");
        };
    };
    this.attack = function () {
        character2.hp -= this.strength;
        console.log("Take that!")
    };
    this.LevelUp = function () {
        this.age += 1;
        this.strength += 5;
        this.hp += 25;
        this.PrintStats();
    };
};
var superman = new Character("superman", "journalist", "male", 33, 100, 100);
var batman = new Character("batman", "philanthropist", "male", 40, 25, 20);
superman.PrintStats();
batman.PrintStats();
superman.IsAlive();
batman.IsAlive();
superman.LevelUp();
batman.LevelUp();
batman.attack(superman);
