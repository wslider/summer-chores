# summer-chores

## callbackVersion.js
- call back hell method for chores
- fallAsleep function with random number generation for time to setTimeout
- if fallAsleep function setTimeout runs out, sleep status is set to "asleep" with sleep message displayed. 

## promiseVersion.js
- promises to chain chores in sequence
- intoduced increased sleepy chance via random number generation (instead of fallAsleep function) to each promise. 



AI use: 
 
callbackVersion.js 
 - used Grok 3 to search possible solutions for fallAsleep function to stop chore functions from execuiting. 
 
promiseVersion.js
 - Encountered issue with all completion messages not logging. Only the last message displayed. 
 - Grok 3 reccomended adding console.log(value) to each .then() 

