function clock(){
    let count = 0;
    return function(){
        count ++ ;
        return count;
    }
}

const clock1 = clock();
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());

const clock2 =clock();

console.log(clock2());
console.log(clock2());
console.log(clock2());
console.log(clock2());
console.log(clock1());

//when i am called any function. from this if i return or call then it create  closed scope or environment  is called closure;
// its create external variable.