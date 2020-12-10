// todo appot készítünk, alapértelmezésben 10 üres mező áll rendelkezésre,
// de hozzá tudunk adni újakat, minden mező előtt van 1 csekkbox, textimput mező,
// van egy törlés gomb, mivel ki tudjuk törölni a sort, ha nincs rá szükség

function pageLoad () {
  root = document.getElementById("root");
  
  //egy változóba eltárolni egy max értéket, amivel dolgozunk
  let maxLines = 10;
  //elmenteni egy sort a változóba: div, checkbox, 1 text input, 1 button
  let todoElement = `
  <div>
    <input type="checkbox">
    <input type ="text">
    <button class="removeButton">Remove</button>
  </div>`;
  //lesz egy for amivel hozzáadjuk a roothoz
  for (let i = 0; i < maxLines; i++) {
    root.insertAdjacentHTML("beforeend", todoElement);
    //TODO: itt kellene rátenni az eseményfigyelőt, remove-t
  }

  //kell egy gomb, amivel hozzáadunk a listán kívükre egy gombot - insertadjest: afterend
  let addButton = `<button class="addButton">Add new line!</button>`;
  root.insertAdjacentHTML("afterend", addButton);
  
  //klikk esemény a gombhoz, a változóban elárolt elemet hozzáadjuk a változóhoz
  document.querySelector(".addButton").addEventListener("click", function () {
    root.insertAdjacentHTML("beforeend", todoElement);
  });
  
  //classnév alapján kijelölöm az összes törlés gombot és elmentem egy változóba
  let todos = root.querySelectorAll("div button");
  //console.log(todos);
  
    function remove(e) {
  //  todos[i].parentElement.remove();
    e.target.parentElement.remove();
  };
  
  
  //for ciklus - ráadni egy klikk eseményt mindegyikre
  for (let i = 0; i < todos.length; i++) {
    todos[i].classList.add("removeButton");
    todos[i].addEventListener("click", remove);
  }
  //todos.addEventListener("click", function () {console.log("bree");});
  //hogyan jelölöm ki az elemet, amit ki szeretnék törölni?

}

window.addEventListener("load", pageLoad);