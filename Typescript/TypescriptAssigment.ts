
////1. Create an arrow function by which will take multiple strings and you have print each string along with length of each string.
let stringList = ["Typescript","Introduction of TypeScript","Installation","Variable declaration and function declaration","Array and Tuple","Arrow Function"];
    
stringList.map((string) => (console.log(string + " - ", string.length)));

console.log("=================================================================================");
////2. Create an arrow function by which you have to sort the given numbers.
const numbers = [100, 200, 400, 1000, 500, 300, 700, 600, 900];
numbers.sort((a, b) => a - b);
console.log(numbers);

console.log("=================================================================================");
////4. Create a class of item (itemid, itemname, itemprice, category) and create object of the class and print each detail of item. With arrow functions.
class Item{

    itemid:number;
    itemname:string;
    itemprice:number;
    category:string;
  
      constructor(itemid:number, itemname:string, itemprice:number,category:string)
      {
            this.itemid=itemid;
            this.itemname=itemname;
            this.itemprice=itemprice;
            this.category=category;
      }

      display=()=>{
        console.log("Item Id =" + this.itemid + ", Item Name = "+this.itemname + ", Item Price =" + this.itemprice + ", Item Category = "+this.category);
    }
  }

  let items = new Item(1001,'Laptop', 45000, "Touch Screen");

items.display();