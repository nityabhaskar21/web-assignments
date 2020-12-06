import { Product } from './Product';

function displayProduct() {
  let obj = new Product();
  obj.setPid(1001);
  obj.setPname('Acer Laptop');
  obj.setPrice(45000);

  console.log(
    `Product ID: ${obj.getPid()}, Product Name: ${obj.getPname()}, Product Price: ${obj.getPrice()}`
  );
}

displayProduct();
