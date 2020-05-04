
let array=[];
let array2;
let sum=0;
for(let i=0; i<100; i++){
    array[i]=Math.floor(Math.random()*100+1);
    array2=array.pop();
    if(array2%2==0)
        sum+=array2;
}
console.log(sum);