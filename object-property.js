const students = [
  {id: 21 , name : 'dalwer shojib'},
  {id: 12 , name : 'dalwer Hossain'},
  {id: 14 , name : 'dalwer Tahasan'}
];


const names = students.map(s=> s.name);
const ids =students.map(s => s.id);
const bigger = students.filter(s => s.id>12);
const biggerOne = students.find(s => s.id>14);
console.log(names , ids, bigger, biggerOne);
