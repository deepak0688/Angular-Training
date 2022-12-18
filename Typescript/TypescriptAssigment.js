////1. Create an arrow function by which will take multiple strings and you have print each string along with length of each string.
var stringList = ["Typescript", "Introduction of TypeScript", "Installation", "Variable declaration and function declaration", "Array and Tuple", "Arrow Function"];
stringList.map(function (string) { return (console.log(string + " - ", string.length)); });
console.log("==================================================================================");
////2. Create an arrow function by which you have to sort the given numbers.
var numbers = [100, 200, 400, 1000, 500, 300, 700, 600, 900];
numbers.sort(function (a, b) { return a - b; });
console.log(numbers);
console.log("=================================================================================");
////4. Create a class of item (itemid, itemname, itemprice, category) and create object of the class and print each detail of item. With arrow functions.
var Item = /** @class */ (function () {
    function Item(itemid, itemname, itemprice, category) {
        var _this = this;
        this.display = function () {
            console.log("Item Id =" + _this.itemid + ", Item Name = " + _this.itemname + ", Item Price =" + _this.itemprice + ", Item Category = " + _this.category);
        };
        this.itemid = itemid;
        this.itemname = itemname;
        this.itemprice = itemprice;
        this.category = category;
    }
    return Item;
}());
var items = new Item(1001, 'Laptop', 45000, "Touch Screen");
items.display();
