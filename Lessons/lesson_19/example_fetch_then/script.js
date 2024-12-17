// ! fetch запрос на .then()

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    data.map((product) => {
      const item = document.createElement("p");
      item.textContent = product.title;
      document.body.append(item);
    });
  });






