class CoffeeBean{
    constructor(name , flavor){
        this.name  = name;
        this.flavor = flavor;
    }
describe() {
    return `${this.name} tastes ${this.flavor}.`;
}
 }

 class Brand {
    constructor(name){
        this.name = name;
        this.coffeebeans = [];
    }

    addCoffeeBean(coffeebean) {
        if (coffeebean instanceof CoffeeBean) {
            this.coffeebeans.push(coffeebean);
        } else {
            throw new Error (`You can only add an instance of coffeebean. Argument is not a coffeebean: ${coffeebean}`);
        }
    }
    describe(){
        return `${this.name} has ${this.coffeebeans.length} coffeebeans.`;

    }
 }

 class Menu {
    constructor() {
        this.brands = [];
        this.selectedBrand = null;
    }

    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createBrand();
                    break;
                case '2':
                    this.viewBrand();
                    break ;
                case '3':
                    this.deleteBrand();
                    break;
                case '4':
                    this.displayBrands();
                    break;
                default:
                    selection = 0;

            }
            selection = this.showMainMenuOptions();
        }
        alert ('Goodbye!');
    }

showMainMenuOptions() {
    return prompt(`
    0) exit
    1) create new brand
    2) view brand
    3) delete brand
    4) display all brands
    `);
}

showBrandMenuOptions(brandInfo) {
    return prompt(`
    0) back
    1) create coffeebean
    2) delete coffeebean
    ----------------------
    ${brandInfo}
    `);
}

displayBrands (){
    let brandString ='';
    for (let i = 0; i < this.brands.length; i++) {
        brandString += i + ') ' + this.brands[i].name + '\n';
    }
    alert (brandString);
}11

createBrand(){
    let name = prompt('Enter name for new brand:');
    this.brands.push(new Brand (name));
}

viewBrand () {
    let index = prompt('Enter the index of the brand you wish to view:');
    if (index > -1 && index < this.brands.length) {
        this.selectedBrand = this.brands[index];
        let description = 'Brand Name: ' + this.selectedBrand.name + '\n';

        for (let i = 0; i < this.selectedBrand.coffeebeans.length; i++){
            description += i + ') ' + this.selectedBrand.coffeebeans[i].name + ' - ' +this.selectedBrand.coffeebeans[i].flavor + '\n';
        }
        let selection = this.showBrandMenuOptions(description);
        switch (selection) {
            case '1': 
                this.createCoffeeBean();
                break;
            case '2':
                this.deleteCoffeeBean();
            
        }
    }
}


deleteBrand() {
let index = prompt ('Enter the index of the brand you wish to delete:');
if (index > -1 && index <  this.brands.length){
    this.brands.splice(index, 1);
}
}


createCoffeeBean() {
    let name = prompt('Enter name for new player:');
    let flavor = prompt('Enter position for new coffee bean:');
    this.selectedBrand.coffeebeans.push(new CoffeeBean(name, flavor));
}

deleteCoffeeBean() {
    let index = prompt ('Enter the index of the coffeebean you wish to delete:');
    if (index > -1 && index < this.selectedBrand.coffeebeans.length){
this.selectedBrand.coffeebeans.splice(index, 1);

    }
}

}

 let menu = new Menu ();
 menu.start();


