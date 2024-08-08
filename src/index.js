import Restaurant from './image.jpg';
import './style.css';

function body() {
  const title = document.createElement('h1')
  title.innerHTML = "Byte Bistro";
  document.getElementById("content").appendChild(title);

  const text = document.createElement('p')
  text.innerHTML = "At Byte Bistro, we’ve redefined dining with our JavaScript-inspired menu, featuring dishes that are as dynamic and versatile as the code itself. Whether you're a tech enthusiast or simply hungry for something extraordinary, Byte Bistro is the place where every meal is a delightful piece of culinary code.";
  document.getElementById("content").appendChild(text);

  const image = document.createElement('img')
  image.src = Restaurant;
  image.classList.add('image');
  document.getElementById("content").appendChild(image);
}

// document.getElementById("content").appendChild(component());
body();