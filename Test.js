// Test 1
class SmallestIntegerFinder {
    findSmallestInt(args) {
        return Math.min.apply(Math,args);
    }
}

//Test 2
function solution(number){
    let sum=0;
    for(let i=0;i<number;i++){
        sum+=((i%3===0||i%5===0)?i:0);
    }
    return sum;
}

//Test 3
function fizzbuzz(n)
{
    //
    if(n<1) return [];
    let res=[];
    for(let i=1;i<=n;i++){
        let conv=(i%3===0 && i%5===0)?'FizzBuzz':i%3===0?'Fizz':i%5===0?'Buzz':i;
        res.push(conv);
    }
    return res;
}

//Test 4
function createPhoneNumber(numbers){
    numbers.splice(0,0,'(')
    numbers.splice(4,0,') ')
    numbers.splice(8,0,'-')
    return numbers.join('')
}

//Test 5
function rgb(r, g, b) {
    let h1=r<0?'00':r>255?'FF':r.toString(16).length===1?'0'+r.toString(16):r.toString(16);
    let h2=g<0?'00':g>255?'FF':g.toString(16).length===1?'0'+g.toString(16):g.toString(16);
    let h3=b<0?'00':b>255?'FF':b.toString(16).length===1?'0'+b.toString(16):b.toString(16);
    return h1.toUpperCase()+h2.toUpperCase()+h3.toUpperCase();
}