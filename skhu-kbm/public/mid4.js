function sum(a){
    let sum=0;
    for(let i=0; i<a.length; i++)
        sum+=a[i];
    
    return sum;
}

function test_sum(f){
    let s=[];
    for(let i=0; i<5; i++){
        s[i]=Math.floor(Math.random()*11);
    }
    let result=f(s);
    console.log(result);
}
for(let i=0; i<5; i++)
    test_sum(sum);