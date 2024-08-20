// reduce()

const scores =[ 3,5,6,7];
// scores.reduce((accumulator,currentValue) => accumulator + currentValue)  

const total  = scores.reduce((totalScore, score) => totalScore + score)
console.log(total);



const score =[ 30,50,55,60];

const total1 =score.reduce((x,y) => x + y);
console.log(total1);