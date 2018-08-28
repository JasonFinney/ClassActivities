var dogs = {
    raining: true,
    noise: 'woof!',
    makeNoise: function () {
        if (dogs.raining === true) {
            console.log(dogs.noise);
        }
    }
}

var cats = {
    raining: true,
    noise: 'Meow',
    makeNoise: function () {
        if (cats.raining === true) {
            console.log(cats.noise);
        }
    }
}

function massHysteria() {
    if (dogs.raining === true && cats.raining === true) {
        console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
    }
}

dogs.makeNoise();
cats.makeNoise();
massHysteria();