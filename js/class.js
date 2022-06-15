class Dress {
    constructor(type, color, useFor){
        this.type = type;
        this.color = color;
        this.useFor = useFor;
    }
    genPrice(price){
        console.log(price)
    }
    sum=(n1,n2) => n1+n2
}

class Hat extends Dress{
    constructor(type, color, useFor,radius){
        super(type, color, useFor);
        this.size = radius;
    }
}


const pant = new Dress('pant','black','adult');
console.log(pant);
pant.genPrice(100);

const monkeyHat = new Hat('headWear','yellow','child','250cm');
console.log(monkeyHat);
monkeyHat.genPrice(180);
const sumy = monkeyHat.sum(180,120);
console.log(sumy);



setTimeout(()=>console.log('hi'),900)


for(let i = 0; i<10000;i++){
    console.log(i);
}