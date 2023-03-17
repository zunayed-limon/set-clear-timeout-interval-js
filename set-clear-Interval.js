// Syntax of setInterval
setInterval(()=>{
    // console.log(2);
}, 1000);


// More - for this code below : start with 1 and gradually increase 1 and continue it. 
let num = 1;
const intervalID = setInterval(()=>{
    // console.log(num++);
}, 1000);


// more
let count = 1;
const secondInterval = setInterval(()=>{
    // console.log(count++);
    if(count===10){
        clearInterval(secondInterval);
    }
}, 1000);
