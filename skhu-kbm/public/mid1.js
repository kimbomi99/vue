let array=[];
let sum=0;
let average;
for(let i=0; i<100; i++){
    array[i]=Math.floor(Math.random()*100+1);
}

for(let i=0; i<array.length; i++){
    sum+=array[i];

}

average=(sum/100).toFixed(1);
console.log(average);