let array=[];
for(let i=0; i<100; i++){
    array[i]=Math.floor(Math.random()*100+1);
}
array.sort((a, b)=>b-a);
console.log(array);