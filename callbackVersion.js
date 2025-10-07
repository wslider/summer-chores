
// energy time = random number between 2500 and 10000 
    // ensure mowing the yard at least happens
// time starts (energy timer runs while chores fuctions execute)
// each function has a setTimeout before going to the next one 
    // if energy timer runs out .. log to console name fell asleep
    // if not, execute next function 

const randomEnergyTime = Math.floor(Math.random() * (10000 - 2500)) + 2500;

const name = ""; 


function mowYard (name, callback) {
    setTimeout(()=> {
        console.log(`${name} mowed the yard.`);
        callback(); 
    }, 2000);
}


function weedEat (name, callback) {}

function trimHedges (name, callback) {}

function collectWood (name, callback) {} 

function waterGarden (name, callback) {} 

function doSummerChores(name, callback) {}


// callback hell 

mowYard(()=> {
    weedEat(()=>{
        collectWood(()=>{
            waterGarden(()=>{
                doSummerChores(()=>{
                    console.log(`${name} finished all their chores!`);
                });
            });
        });
    });
});