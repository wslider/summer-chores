# summer-chores
- Asynchronous JavaScript project simulating a human doing a list of summer chores - each of them taking a set ammount of time to complete. 

## callbackVersion.js
- call back hell method for chores
- fallAsleep function with random number generation for time to setTimeout
- if fallAsleep function setTimeout runs out, sleep status is set to "asleep" with sleep message displayed. 

## promiseVersion.js
- promises to chain chores in sequence
- intoduced increased sleepy chance via random number generation (instead of fallAsleep function) to each promise. 

## asyncAwaitVersion.js
- new, improved and cleaner version using async / await
- finishedSummerChores function added at the end 



AI use:
 
callbackVersion.js 
 - used Grok 3 to search possible solutions for fallAsleep function to stop chore functions from execuiting. 
 
promiseVersion.js
 - Encountered issue with all completion messages not logging. Only the last message displayed. 
 - Grok 3 reccomended adding console.log(value) to each .then() 

