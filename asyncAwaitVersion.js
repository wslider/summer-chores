async function mowYard() {
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

async function weedEat() {
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

async function trimHedges() {
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

async function collectWood() {
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

async function waterGarden() {
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

async function finishedSummerChores() {
    return "Bill finished his chores!";
}



async function doSummerChores() { 
    try {
        const mowYardResult = await mowYard();
        console.log(mowYardResult);
        const weedEatResult = await weedEat();
        console.log(weedEatResult);
        const trimHedgesResult = await trimHedges();
        console.log(trimHedgesResult); 
        const collectWoodResult = await collectWood();
        console.log(collectWoodResult);
        const waterGardenResult = await waterGarden();
        console.log(waterGardenResult);
        const finishedSummerChoresResult = await finishedSummerChores();
        console.log(finishedSummerChoresResult);
    }
    catch(error) {
        console.error(error)
    }
}

doSummerChores(); 