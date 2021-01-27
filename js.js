"use strict";

//1
for (let i = 0; i <= 10; i++){
    if (i === 0){
        console.log(i + " - это ноль");
    } else if (i % 2 == 0){
        console.log(i + " - четное число");
    }
    else if (i % 2 == 1){
        console.log(i + " - нечетное число");
    }
}

//2
const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [
    {
    userId: 10,
    userName: "Alex",
    text: "lorem ipsum",
    rating: {
    likes: 10,
    dislikes: 2 //вывести это число
    }
    },
    {
    userId: 5, //вывести это число
    userName: "Jane",
    text: "lorem ipsum 2", //вывести этот текст
    rating: {
    likes: 3,
    dislikes: 1
    }
    },
    ]
    };
 console.log(post.author);   
 console.log(post.comments[0].rating.dislikes);
 console.log(post.comments[1].userId);
 console.log(post.comments[1].text);

 //3
 const products = [
    {id: 3, price: 200},
    {id: 4, price: 900},
    {id: 1, price: 1000},
    ];
products.forEach(function(product) {
    product.price = product.price * 0.85; 
});   
console.log(products); 

//4
const productss = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

const productsWithImg =productss.filter(product => product.photos && product.photos.length > 0);
console.log(productsWithImg);

const productsSortedByPrice = productss.sort(function(product1, product2){
    return product1.price - product2.price;
});
console.log(productsSortedByPrice);

//5

for (let i = 0; i < 10; console.log(i++)) {  
}

//6
let arr = [];
for (let i = 0; i < 20; i++){
    arr.push('x');
    console.log(arr);
}
