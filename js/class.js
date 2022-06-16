class Dress {
    constructor(type, color, useFor){
        this.type = type;
        this.color = color;
        this.useFor = useFor;
    }
    genPrice(price){
        console.log(this);
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

class Shirt{
    constructor(size,color,paint){
        this.size = size;
        this.color = color;
        this.paint = paint;
    }
}



const pant = new Dress('pant','black','adult');
// console.log(pant);
pant.genPrice(100);

const tShirt = new Shirt('small','grey', 'check');
tShirt.genPrice = pant.genPrice
tShirt.genPrice(150);
hello();

function hello(){
    console.log('hi ki obostha?')
    console.log(this);
}
console.log(tShirt);

const monkeyHat = new Hat('headWear','yellow','child','250cm');
console.log(monkeyHat);
monkeyHat.genPrice(180);
const sumy = monkeyHat.sum(180,120);
console.log(sumy);



setTimeout(()=>console.log('hi'),3000)
setTimeout(()=>console.log('hiFast'),2009)


for(let i = 0; i<100;i++){
    console.log(i);
}