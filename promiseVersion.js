function mowYard() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 100);
            const sleepyChance = 0;
            if (randomNumber > sleepyChance) {
                resolve("Bill finished mowing the yard");
            } else {
                reject("Oh NO! Bill is getting tired. This never happens.");
            }
        }, 2000);
    });
}

function weedEat() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 100);
            const sleepyChance = 20;
            if (randomNumber > sleepyChance) {
                resolve("Bill finished weed eating.");
            } else {
                reject("Bill fell asleep after mowing the lawn.");
            }
        }, 1500);
    });
}

function trimHedges() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 100);
            const sleepyChance = 25;
            if (randomNumber > sleepyChance) {
                resolve("Bill finished trimming the hedges.");
            } else {
                reject("Bill fell asleep after weed eating.");
            }
        }, 1000);
    });
}

function collectWood() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 100);
            const sleepyChance = 30;
            if (randomNumber > sleepyChance) {
                resolve("Bill finished collecting wood.");
            } else {
                reject("Bill fell asleep after trimming the hedges.");
            }
        }, 2500);
    });
}

function waterGarden() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 100);
            const sleepyChance = 35;
            if (randomNumber > sleepyChance) {
                resolve("Bill finished watering the garden.");
            } else {
                reject("Bill fell asleep after collecting wood.");
            }
        }, 500);
    });
}

function doSummerChores() {
    return Promise.resolve("Bill finished his chores!");
}

mowYard()
    .then(value => {
        console.log(value); 
        return weedEat();
    })
    .then(value => {
        console.log(value); 
        return trimHedges();
    })
    .then(value => {
        console.log(value); 
        return collectWood();
    })
    .then(value => {
        console.log(value); 
        return waterGarden();
    })
    .then(value => {
        console.log(value); 
        return doSummerChores();
    })
    .then(value => {
        console.log(value); 
    })
    .catch(error => {
        console.error(error); 
    });




