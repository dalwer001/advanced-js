// scope,access outer scope, block access 

let bonus = 20 
function sum(a,b){
    let result = a+5*b+ bonus;
    console.log(result);
    if(result>9){
        
        var mood = "happy";
        mood = "unhappy";
        mood = "FeedUp"
       // console.log(mood);
    }
    console.log(mood);
    return result;
}

const output = sum(3,7);
console.log(`bonus is ${bonus}. we want update it ${bonus+20}`);
console.log(output);

//hoisting is scope er vitore var likhe kichu declear kori tahole tahole oi scope er baire giye parent class e scope k niye nibe  tar por kotha call or set korle oi value ta accessable hobe kintu  let ba const diye korle scope er baire oi cvariable ta catch kora jabe na .