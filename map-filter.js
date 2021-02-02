const numbers = [2,3,4,5,6,7,18]

// const output=[];
// for(let i=0; i<numbers.length;i++)
// {
//     const element = numbers[i];
//     const result =element *element;
//     output.push(result);
// }

// function square(element){
//     return element*element;
// }

// const square = element =>element*element;

// const square = x => x*x;
// numbers.map(square);
// const result = numbers.map((element,index,array)=>{
//     console.log(element,index,array);
// })

// const result = numbers.map((element)=>{
//     return element*element;
// })

// const result = numbers.map(x =>  x*x);

//map


// const result = numbers.map(x =>  x*x);

//filter
// const bigger = numbers.filter(x => x<5);
const bigger = numbers.filter(x => x<2);
//find
const isThere = numbers.find(x => x>5);
console.log(isThere);
console.log(bigger);
// console.log(output);

