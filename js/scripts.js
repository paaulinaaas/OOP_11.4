function phone(brand, price, color, discount) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.discount = discount;
}
phone.prototype.printInfo = function() {
    console.log("The phone brand is " + this.brand +", color is " + this.color + " the price is " + this.price + " and it has " + this.discount + ".");
}

var SamsungGalaxyS6 = new phone("Samsung", 2000, "white", "10% discount");
var iPhone6s = new phone("Apple", 2500, "silver", "20% discount");
var OnePlusOne = new phone(" One Plus", 2200, "black", "no discount");
var MotorolaXPlay = new phone("Motorola", 1000, "white", "15% discount");

SamsungGalaxyS6.printInfo();
iPhone6s.printInfo();
OnePlusOne.printInfo();
MotorolaXPlay.printInfo();