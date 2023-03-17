// For this 20 will be execute after 3 seconds
const setTime = setTimeout(()=>{
    console.log(20);
}, 3000);

clearTimeout(setTime);  //for this 20 will not be executed



