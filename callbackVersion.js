const randomEnergyTime = Math.floor(Math.random() * (10000 - 2500)) + 2500;
const name = "Bill";
let sleepMessage = "";
let sleepstatus = "awake";
let sleepTimer;

function fallAsleep() {
  sleepstatus = "asleep";
  if (sleepMessage) {
    console.log(sleepMessage);
  }
}

function mowYard(name, callback) {
  setTimeout(() => {
    if (sleepstatus === "asleep") return;
    console.log(`${name} mowed the yard.`);
    sleepMessage = `${name} fell asleep after mowing the yard.`;
    callback();
  }, 2000);
}

function weedEat(name, callback) {
  setTimeout(() => {
    if (sleepstatus === "asleep") return;
    console.log(`${name} finished using the weed eater.`);
    sleepMessage = `${name} fell asleep after using the weed eater.`;
    callback();
  }, 1500);
}

function trimHedges(name, callback) {
  setTimeout(() => {
    if (sleepstatus === "asleep") return;
    console.log(`${name} has finished trimming the hedges.`);
    sleepMessage = `${name} fell asleep after trimming the hedges.`;
    callback();
  }, 1000);
}

function collectWood(name, callback) {
  setTimeout(() => {
    if (sleepstatus === "asleep") return;
    console.log(`${name} has finished collecting wood.`);
    sleepMessage = `${name} fell asleep after collecting wood.`;
    callback();
  }, 2500);
}

function waterGarden(name, callback) {
  setTimeout(() => {
    if (sleepstatus === "asleep") return;
    console.log(`${name} has finished watering the garden.`);
    sleepMessage = `${name} fell asleep after watering the garden.`;
    callback();
  }, 500);
}

function doSummerChores(name) {
  // Start sleep timer
  sleepTimer = setTimeout(() => {
    fallAsleep();
  }, randomEnergyTime);

  // Callback hell
  mowYard(name, () => {
    if (sleepstatus === "asleep") return;
    weedEat(name, () => {
      if (sleepstatus === "asleep") return;
      trimHedges(name, () => {
        if (sleepstatus === "asleep") return;
        collectWood(name, () => {
          if (sleepstatus === "asleep") return;
          waterGarden(name, () => {
            if (sleepstatus === "asleep") return;
            clearTimeout(sleepTimer);
            console.log(`${name} finished all their chores!`);
          });
        });
      });
    });
  });
}

// Run the chores
doSummerChores(name);