'use strict';

//1.1
//ES5

function Product(name, price){
    this.name = name;
    this.price = price;
};

Product.prototype.make25PercentDiscount = function() {
    alert(`Цена ${this.name} со скидкой 25% равна ${this.price * 0.75}`);
};

let obj1 = new Product("product", 100);
obj1.make25PercentDiscount();

//ES6
class Product1 {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    make25PercentDiscount() {
        alert(`Цена ${this.name} со скидкой 25% равна ${this.price * 0.75}`);
    }
}

let obj2 = new Product1("product", 100);
obj2.make25PercentDiscount();

//1.2 
//ES5

function Post(author, text, date){
    this.author = author;
    this.text = text;
    this.date = date;
};

Post.prototype.edit = function() {
    console.log(this.text);
};

function AttachedPost(author, text, date){
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlifted = function(){
    this.highlighted = true;
    console.log(this.highlighted);
};

let AttachedPostObj = new AttachedPost("author1", "text1", "date1");
AttachedPostObj.edit();
AttachedPostObj.makeTextHighlifted();

//ES6
class Post1{
    constructor(author, text, data){
        this.author = author;
        this. text = text;
        this.data = data;
    }
    edit() {
        console.log(this.text);
    }
}

class AttachedPost1 extends Post1{
    constructor(author, text, data){
        super(author, text, data);
        this.highlighted = false;
    }
    makeTextHighlifted(){
        this.highlighted = true;
        console.log(this.highlighted); 
    }
}

let AttachedPost1Obj = new AttachedPost("author2", "text2", "date2");
AttachedPost1Obj.edit();
AttachedPost1Obj.makeTextHighlifted();
