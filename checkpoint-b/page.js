// Checkpoint B — your behaviour. Build it to checkpoint-b/spec.md.
//
// The data is given to you:
import { items } from "./items.js";

/**
 * Draws an array of items into #list, replacing whatever was there.
 * Each item becomes an <li> with class "tile" and text "{name}".
 *
 * @param {Array<{id: number, name: string, category: string, price: number, inStock: boolean}>} list
 */
export function renderItems(list) {
  const listElement = document.querySelector("#list");
  if (!listElement) return;

  listElement.innerHTML = "";

  list.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("tile");
    li.textContent = item.name;
    listElement.append(li);
  });
}

/**
 * Returns only the kitchen items, as an array of item objects from items.
 *
 * @returns {Array<object>}
 */
export function matching() {
  return items.filter((item) => item.category === "kitchen");
}

/**
 * Sets the page up:
 * 1. Draws all items straight away using renderItems.
 * 2. Listens for a click on #select to redraw with only matching items.
 */
export function start() {
  renderItems(items);

  const selectButton = document.querySelector("#select");
  if (selectButton) {
    selectButton.addEventListener("click", () => {
      renderItems(matching());
    });
  }
}
