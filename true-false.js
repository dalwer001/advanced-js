//falsy
// 0
// ""
//undefined
//null
//NaN
//false

//Truthy
//'0', ' '
const name = 0;

if(name || name==0)
{
    console.log("right");
}

else{
    console.log("wrong");
}