let item = [
  {
    id: 1,
    productName: "milk",
    price: 9000,
  },
  {
    id: 2,
    productName: "water",
    price: 8000,
  },
  {
    id: 3,
    productName: "yogurt",
    price: 19000,
  },
];
item.sort((a, b) => a.price - b.price);
for (const key in item) {
  console.log(item);
}
