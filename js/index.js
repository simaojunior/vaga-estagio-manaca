const users = document.querySelector("#users");
const posts = document.querySelector("#posts");
const page = document.querySelector(".js-users");
const page2 = document.querySelector(".js-posts");

users.addEventListener("click", () => {
  getUsers();
});

posts.addEventListener("click", () => {
  getPosts();
});

async function getUsers() {
  page.innerHTML = "";
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(data => data.json())
    .then(data =>
      data.forEach(user => {
        let item = document.createElement("li");
        item.classList.add("item");
        item.innerHTML = `<li>${user.name}</li>`;
        page.appendChild(item);
        console.log(user.name);
      })
    );
}

async function getPosts() {
  page2.innerHTML = "";
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(data => data.json())
    .then(data =>
      data.map(post => {
        let item2 = document.createElement("li");
        item2.classList.add("item2");

        item2.innerHTML = `<li>${post.title}</li>`;
        page2.appendChild(item2);
        console.log(post.title);
      })
    );
}