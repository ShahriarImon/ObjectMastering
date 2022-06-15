const car = {
    company : '',
    companyLocation : '',
    since : 1913,
    setCompanyName: function(name){
        this.company = name;
    },
    setCompanyLocationName: function(name){
        this.companyLocation = name;
    }
}

const bike = {
    company : '',
    companyLocation : '',
    since : 1943,
    
}

const cycle = {
    company : '',
    companyLocation : '',
    since : 1933,
    
}
car.setCompanyName('Lambo');
car.setCompanyLocationName('canada');
console.log(car.company);

const bikeLocation = car.setCompanyLocationName.bind(bike);
const bikeCompany = car.setCompanyName.bind(bike);
bikeCompany('Toyota');
bikeLocation('Japan')
console.log(bike.companyLocation)


car.setCompanyLocationName.call(bike, 'korea');
console.log(bike.companyLocation)

const cycleLocation = car.setCompanyLocationName.bind(cycle);
const cycleCompany = car.setCompanyName.bind(cycle);
cycleCompany('Duronto');
cycleLocation('Bangladesh');
console.log(cycle, car, bike); 