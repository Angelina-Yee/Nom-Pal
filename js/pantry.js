const ingredientForm  = document.getElementById("ingredient-form");
const ingredientInput = document.getElementById("ingredient-input");
const ingredientList  = document.getElementById("ingredient-list"); 
const itemsStored     = document.getElementById("items-stored");

const MAX_CHARS = 30;
const charCount = document.getElementById("char-count");

charCount.textContent = `${MAX_CHARS} characters remaining`;

window.addEventListener("DOMContentLoaded", renderPantry);

ingredientInput.addEventListener("input", () => {
  const remaining = MAX_CHARS - ingredientInput.value.length;
  charCount.textContent = `${remaining} characters remaining`;
})

ingredientForm.addEventListener("submit", e => {
  e.preventDefault();
  const item = ingredientInput.value.trim();
  if (!item) return;

  const li = document.createElement("li");
  li.textContent = item;
  ingredientList.appendChild(li);


  updatePantryCount(item, +1);

  ingredientInput.value = "";
});

function updatePantryCount(item, delta) {
  const pantry = JSON.parse(localStorage.getItem("itemsStored")) || {};

  if (!pantry[item] && delta < 0) return;

  pantry[item] = (pantry[item] || 0) + delta;

  if (pantry[item] <= 0) {
    delete pantry[item];
  }

  localStorage.setItem("itemsStored", JSON.stringify(pantry));
  renderPantry();
}

function renderPantry() {
  const pantry = JSON.parse(localStorage.getItem("itemsStored")) || {};
  itemsStored.innerHTML = "";

  for (const [item, count] of Object.entries(pantry)) {
    const li = document.createElement("li");

    const label = document.createElement("span");
    label.textContent = `${item} (${count})`;

    const btnMinus = document.createElement("button");
    btnMinus.textContent = "−";
    btnMinus.className = "pantry-btn";
    btnMinus.addEventListener("click", () => updatePantryCount(item, -1));

    const btnPlus = document.createElement("button");
    btnPlus.textContent = "+";
    btnPlus.className = "pantry-btn";
    btnPlus.addEventListener("click", () => updatePantryCount(item, +1));

    li.append(label, btnMinus, btnPlus);
    itemsStored.appendChild(li);
  }
}
