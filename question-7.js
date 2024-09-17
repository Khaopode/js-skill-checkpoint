// Question #7: Array Merging

const firstProductList = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Smartphone", price: 700 },
];

const secondProductList = [
  { id: 3, name: "Tablet", price: 500 },
  { id: 4, name: "Headphones", price: 150 },
];

// เริ่มเขียนโค้ดตรงนี้
const newProductList = [];
  
  for (let i = 0 ; i < firstProductList.length ; i++) {
    newProductList.push(firstProductList[i]);
  }
  
  for (let i = 0 ; i < secondProductList.length ; i++) {
    newProductList.push(secondProductList[i]);
  }
  
  
  console.log(newProductList);