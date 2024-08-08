import Restaurant from './image.jpg';
import './style.css';

function body() {
  const title = document.createElement('h1')
  title.innerHTML = "Kyle's Amazing Restaurant";
  document.getElementById("content").appendChild(title);

  const text = document.createElement('p')
  text.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa hic, eius minus rem sapiente obcaecati nulla!";
  document.getElementById("content").appendChild(text);

  const image = document.createElement('img')
  image.src = Restaurant;
  image.classList.add('image');
  document.getElementById("content").appendChild(image);
}

// document.getElementById("content").appendChild(component());
body();