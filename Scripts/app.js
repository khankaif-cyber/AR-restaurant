// async function loadMenu() {
//   const container = document.getElementById('menu');
//   const tpl = document.getElementById('dish-card-tpl');

//   const res = await fetch('./data/menu.json');
//   const items = await res.json();

//   for (const dish of items) {
//     const node = tpl.content.cloneNode(true);
//     const link = node.querySelector('.card-link');
//     const img = node.querySelector('.card-img');
//     const title = node.querySelector('.card-title');
//     const desc = node.querySelector('.card-desc');
//     const price = node.querySelector('.card-price');

//     link.href = `./dishes/dish.html?id=${encodeURIComponent(dish.id)}`;
//     img.src = dish.thumbnail;
//     img.alt = dish.name;
//     title.textContent = dish.name;
//     desc.textContent = dish.description;
//     price.textContent = dish.price;

//     container.appendChild(node);
//   }
// }

// loadMenu().catch(console.error);

// ./scripts/app.js
// fetch('./data/menu.json')
//   .then(res => res.json())
//   .then(menu => {
//     const menuGrid = document.getElementById('menu');
//     const tpl = document.getElementById('dish-card-tpl');

//     menu.forEach(dish => {
//       const card = tpl.content.cloneNode(true);

//       const link = card.querySelector('.card-link');
//       link.href = `./Dishes/dish.html?id=${dish.id}`;

//       const img = card.querySelector('.card-img');
//       img.src = dish.thumbnail;
//       img.alt = dish.name;

//       card.querySelector('.card-title').textContent = dish.name;
//       card.querySelector('.card-desc').textContent = dish.description;
//       card.querySelector('.card-price').textContent = dish.price;

//       menuGrid.appendChild(card);
//     });
//   })
//   .catch(console.error);

const menuContainer = document.getElementById("menu");
const template = document.getElementById("dish-card-tpl");

fetch("./data/menu.json")
  .then(res => res.json())
  .then(menu => {
    menu.forEach(dish => {
      const clone = template.content.cloneNode(true);
      const link = clone.querySelector(".card-link");
      const img = clone.querySelector(".card-img");
      const title = clone.querySelector(".card-title");
      const desc = clone.querySelector(".card-desc");
      const price = clone.querySelector(".card-price");

      // Fill in data
      img.src = dish.image;
      img.alt = dish.name;
      title.textContent = dish.name;
      desc.textContent = dish.description;
      price.textContent = dish.price;

      // Link to dish.html
      link.href = `./Dishes/dish.html?id=${dish.id}`;

      menuContainer.appendChild(clone);
    });
  })
  .catch(console.error);
