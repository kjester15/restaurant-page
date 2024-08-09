import Tempura from '../tempura.jpg';
import Sushi from '../sushi.jpg';
import Ramen from '../ramen.jpg';

export function menu() {
  document.getElementById("content").innerHTML="";
  const title = document.createElement('h1')
  title.innerHTML = "Menu";
  document.getElementById("content").appendChild(title);

  const tempura = document.createElement('div');
  tempura.classList.add("menu-item")
  const tempuraTitle = document.createElement('h3');
  tempuraTitle.innerHTML = "Function-Fried Tempura";
  tempura.appendChild(tempuraTitle);
  const tempuraDesc = document.createElement('p');
  tempuraDesc.innerHTML = "Dive into a crispy array of seasonal vegetables and succulent shrimp, all expertly dipped in a light, JavaScript-inspired batter. Each piece is a symphony of crunch and flavor, served with our signature 'Callback' dipping sauce that brings a zesty finish to every bite. Perfectly designed to be as versatile and satisfying as a well-written function.";
  tempura.appendChild(tempuraDesc);
  const tempuraImage = document.createElement('img');
  tempuraImage.src = Tempura;
  tempuraImage.classList.add('menu-image');
  tempura.appendChild(tempuraImage);
  document.getElementById("content").appendChild(tempura);

  const sushi = document.createElement('div');
  sushi.classList.add("menu-item")
  const sushiTitle = document.createElement('h3');
  sushiTitle.innerHTML = "Asynchronous Sushi Rolls";
  sushi.appendChild(sushiTitle);
  const sushiDesc = document.createElement('p');
  sushiDesc.innerHTML = "Experience the art of sushi with our Asynchronous Rolls, where every bite is a delightfully unpredictable adventure. Featuring a blend of fresh, sushi-grade fish, vibrant vegetables, and a touch of soy sauce, these rolls are served with a side of pickles for a tangy, asynchronous twist. Just like JavaScript, you’ll never quite know what to expect next!";
  sushi.appendChild(sushiDesc);
  const sushiImage = document.createElement('img');
  sushiImage.src = Sushi;
  sushiImage.classList.add('menu-image');
  sushi.appendChild(sushiImage);
  document.getElementById("content").appendChild(sushi);

  const ramen = document.createElement('div');
  ramen.classList.add("menu-item")
  const ramenTitle = document.createElement('h3');
  ramenTitle.innerHTML = "Event-Driven Ramen Bowl";
  ramen.appendChild(ramenTitle);
  const ramenDesc = document.createElement('p');
  ramenDesc.innerHTML = "Indulge in our Event-Driven Ramen Bowl, a savory symphony of rich, umami broth, tender noodles, and a medley of crisp, fresh vegetables. Topped with succulent slices of marinated pork, a soft-boiled egg, and a sprinkle of scallions, this dish delivers layers of flavor and texture that evolve with every spoonful. A perfect representation of how great cuisine can respond dynamically to your taste buds!";
  ramen.appendChild(ramenDesc);
  const ramenImage = document.createElement('img');
  ramenImage.src = Ramen;
  ramenImage.classList.add('menu-image');
  ramen.appendChild(ramenImage);
  document.getElementById("content").appendChild(ramen);
}