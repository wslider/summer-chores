function mowYard() {
  return new Promise ((resolve, reject) => {
    setTimeout(()=> {
        const randomNumber = Math.floor(Math.random()*100)
        const sleepyChance = 0; 
        if (randomNumber > sleepyChance) {
            resolve("Bill finshed mowing the yard");
        }
        else {
            reject ("Oh NO! Bill is getting tired. This never happens.");
        }
  }, 2000);
  }
);
}





function weedEat(name, callback) {
  setTimeout(() => {}, 1500);
}

function trimHedges(name, callback) {
  setTimeout(() => {}, 1000);
}


function collectWood(name, callback) {
  setTimeout(() => {}, 2500);
}

function waterGarden(name, callback) {
  setTimeout(() => {
  }, 500);
}


// chain with .then and .catch



   /* if (sleepstatus === "asleep") return;
    console.log(`${name} mowed the yard.`);
    sleepMessage = `${name} fell asleep after mowing the yard.`;
    callback(); */