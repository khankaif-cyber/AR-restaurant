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

// ./scripts/app.js
// const menu = document.getElementById('menu');
// const template = document.getElementById('dish-card-tpl').content;

// // Your JSON data
// const dishes = [
//   {
//     "id": "pizza1",
//     "name": "Nothing But Cheese Pizza",
//     "description": "Classic pepperoni pizza with mozzarella and tomato sauce.",
//     "price": "$12",
//     "image": "./Assets/Images/Pepperoni pizza.png",
//     "modelGlb": "./Assets/Models/gib/Pepperoni-pizza.glb",
//     "poster": "",
//     "thumbnail": "./Assets/Images/Pepperonipizza.png"
//   },
//   {
//     "id": "Burger",
//     "name": "Burger",
//     "description": "A delightful mix of fresh vegetables on a crispy crust.",
//     "price": "$15",
//     "image": "./Assets/Images/Burger.png",
//     "modelGlb": "./Assets/Models/gib/Burger.glb",
//     "poster": "",
//     "thumbnail": "./Assets/Images/Burger.png"
//   },
//   {
//     "id": "Fries",
//     "name": "Fries",
//     "description": "Creamy Alfredo pasta with and parmesan.",
//     "price": "$18",
//     "image": "./Assets/Images/Fries.png",
//     "modelGlb": "./Assets/Models/gib/Fries.glb",
//     "poster": "",
//     "thumbnail": "./Assets/Images/Fries.png"
//   }
// ];

// dishes.forEach(dish => {
//   const clone = template.cloneNode(true);

//   const cardLink = clone.querySelector('.card-link');
//   const cardImg = clone.querySelector('.card-img');
//   const cardTitle = clone.querySelector('.card-title');
//   const cardDesc = clone.querySelector('.card-desc');
//   const cardPrice = clone.querySelector('.card-price');
//   const cardCTA = clone.querySelector('.card-cta');

//   // Set card content
//   cardImg.src = dish.image;
//   cardImg.alt = dish.name;
//   cardTitle.textContent = dish.name;
//   cardDesc.textContent = dish.description;
//   cardPrice.textContent = dish.price;
//   cardCTA.textContent = "View in your space";

//   // Create AR model viewer
//   const modelViewer = document.createElement('model-viewer');
//   modelViewer.src = dish.modelGlb;
//   modelViewer.alt = `3D model of ${dish.name}`;
//   modelViewer.ar = true;
//   modelViewer.autoRotate = true;
//   modelViewer.cameraControls = true;
//   modelViewer.style.width = '100%';
//   modelViewer.style.height = '300px';
//   modelViewer.style.display = 'none'; // Hidden initially
//   modelViewer.style.marginTop = '10px';

//   // Show model-viewer when "View in your space" is clicked
//   cardCTA.addEventListener('click', (e) => {
//     e.preventDefault();
//     modelViewer.style.display = 'block';
//     modelViewer.scrollIntoView({ behavior: "smooth" });
//   });

//   // Append model viewer to card
//   clone.querySelector('.card-body').appendChild(modelViewer);

//   // Append card to menu
//   menu.appendChild(clone);
// });

// dishes.forEach(dish => {
//   const clone = template.cloneNode(true);

//   const cardImg = clone.querySelector('.card-img');
//   const cardTitle = clone.querySelector('.card-title');
//   const cardDesc = clone.querySelector('.card-desc');
//   const cardPrice = clone.querySelector('.card-price');
//   const cardCTA = clone.querySelector('.card-cta');

//   cardImg.src = dish.image;
//   cardImg.alt = dish.name;
//   cardTitle.textContent = dish.name;
//   cardDesc.textContent = dish.description;
//   cardPrice.textContent = dish.price;

//   const modelViewer = document.createElement('model-viewer');
//   modelViewer.src = dish.modelGlb;
//   modelViewer.alt = `3D model of ${dish.name}`;
//   modelViewer.ar = true;
//   modelViewer.setAttribute('ar-modes', 'webxr scene-viewer quick-look');
//   modelViewer.autoRotate = true;
//   modelViewer.cameraControls = true;
//   modelViewer.style.width = '100%';
//   modelViewer.style.height = '300px';
//   modelViewer.style.display = 'none';
//   modelViewer.style.marginTop = '10px';

//   cardCTA.addEventListener('click', (e) => {
//     e.preventDefault();
//     modelViewer.style.display = 'block';
//     modelViewer.scrollIntoView({ behavior: "smooth" });
//   });

//   clone.querySelector('.card-body').appendChild(modelViewer);
//   menu.appendChild(clone);
// });


const menu = document.getElementById('menu');
const template = document.getElementById('dish-card-tpl').content;

// Your JSON data
const dishes = [
  {
    "id": "pizza1",
    "name": "Nothing But Cheese Pizza",
    "description": "Classic pepperoni pizza with mozzarella and tomato sauce.",
    "price": "$12",
    "image": "./Assets/Images/Pepperoni pizza.png",
    "modelGlb": "./Assets/Models/gib/Pepperoni-pizza.glb",
    "poster": "",
    "thumbnail": "./Assets/Images/Pepperonipizza.png"
  },
  {
    "id": "Burger",
    "name": "Burger",
    "description": "A delightful mix of fresh vegetables on a crispy crust.",
    "price": "$15",
    "image": "./Assets/Images/Burger.png",
    "modelGlb": "./Assets/Models/gib/Burger.glb",
    "poster": "",
    "thumbnail": "./Assets/Images/Burger.png"
  },
  {
    "id": "Fries",
    "name": "Fries",
    "description": "Creamy Alfredo pasta with parmesan.",
    "price": "$18",
    "image": "./Assets/Images/Fries.png",
    "modelGlb": "./Assets/Models/gib/Fries.glb",
    "poster": "",
    "thumbnail": "./Assets/Images/Fries.png"
  }
];

dishes.forEach(dish => {
  const clone = template.cloneNode(true);

  const cardImg = clone.querySelector('.card-img');
  const cardTitle = clone.querySelector('.card-title');
  const cardDesc = clone.querySelector('.card-desc');
  const cardPrice = clone.querySelector('.card-price');
  const cardCTA = clone.querySelector('.card-cta');

  // Set card content
  cardImg.src = dish.image;
  cardImg.alt = dish.name;
  cardTitle.textContent = dish.name;
  cardDesc.textContent = dish.description;
  cardPrice.textContent = dish.price;
  cardCTA.textContent = "View in your space";

  // Create AR model viewer
  const modelViewer = document.createElement('model-viewer');
  modelViewer.src = dish.modelGlb;
  modelViewer.alt = `3D model of ${dish.name}`;
  modelViewer.ar = true;
  modelViewer.setAttribute('ar-modes', 'webxr scene-viewer quick-look');
  modelViewer.autoRotate = true;
  modelViewer.cameraControls = true;
  modelViewer.style.width = '100%';
  modelViewer.style.height = '300px';
  modelViewer.style.display = 'none'; // Hidden initially
  modelViewer.style.marginTop = '10px';

  // Show model-viewer when "View in your space" is clicked
  cardCTA.addEventListener('click', (e) => {
    e.preventDefault();
    modelViewer.style.display = 'block';
    modelViewer.scrollIntoView({ behavior: "smooth" });
  });

  // Append model viewer to card
  clone.querySelector('.card-body').appendChild(modelViewer);

  // Append card to menu
  menu.appendChild(clone);
});
