let userBlock = document.querySelector(".user-block")
export function fet(e){ fetch("https://reqres.in/api/users?page=1")
.then((response) => response.json())
.then((b) => {
  b.data.forEach((element) => {
    let a = document.createElement("div");
    a.classList.add("block-a")
    a.innerHTML = `<img src=${element.avatar} /><h1>${element.first_name}</h1>`;
    userBlock.append(a);
  });
})
.catch((err) => {
  console.log(err);
});
}

