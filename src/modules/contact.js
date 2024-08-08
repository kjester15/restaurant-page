export function contact() {
  document.getElementById("content").innerHTML="";
  const title = document.createElement('h1')
  title.innerHTML = "Contact";
  document.getElementById("content").appendChild(title);

  const name = document.createElement('h3')
  name.innerHTML = "Kyle - Head Chef";
  document.getElementById("content").appendChild(name);

  const number = document.createElement('h4')
  number.innerHTML = "111-222-3333";
  document.getElementById("content").appendChild(number);
  
  const email = document.createElement('h4')
  email.innerHTML = "chefemail@bytebistro.com";
  document.getElementById("content").appendChild(email);
}