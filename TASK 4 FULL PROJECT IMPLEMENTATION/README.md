# 🛍️ StyleNest — Product Showcase Web App

Welcome to **StyleNest**, a responsive and interactive frontend project built with **HTML**, **CSS**, and **JavaScript**. This app is designed to help users explore products with features like filtering, sorting, live search, and more — all without any frameworks or external libraries.

---

## 🎯 Project Goal

Enhance your skills in **responsive layouts**, **DOM manipulation**, and **user experience design** by creating a fully functional, client-side product browser.

---

## 🧩 1. Dynamic Product Rendering

**Goal:** Load and display a list of products dynamically using JavaScript.

**Highlights:**
- Product cards generated from a JS array
- Each card includes: image, name, price, rating, and sale badge
- Grid layout adjusts to screen size

🔧 _Tech Used:_ HTML5, CSS Grid, JavaScript DOM APIs

---

## 🗂️ 2. Filtering by Category

**Goal:** Allow users to browse specific product types with one click.

**Categories:**
- Tech
- Apparel
- Home
- All (default view)

**Functionality:**
- Active filter button highlighted
- Real-time filtering without page reloads

🔧 _Tech Used:_ `dataset` attributes, event listeners, `Array.filter()`

---

## 🔍 3. Live Search Functionality

**Goal:** Instantly filter visible products based on text input.

**Features:**
- Real-time product search
- Case-insensitive matching
- Works in combination with category and sort filters

🔧 _Tech Used:_ `input` event, `String.includes()`, `toLowerCase()`

---

## 🔃 4. Sorting Options

**Goal:** Let users control the product order by value.

**Sort Options:**
- 💰 Price (Low → High)
- 💸 Price (High → Low)
- ⭐ Rating (High → Low)

**Functionality:**
- Dropdown triggers sorted re-render
- Can be combined with search and category filters

🔧 _Tech Used:_ `select` element, `Array.sort()`

---

## 📦 5. Product Data Structure

Products are defined in `script.js` as JavaScript objects:
```js
{
  name: "Smartwatch",
  category: "tech",
  price: 199,
  rating: 4.8,
  image: "smartwatch.webp",
  sale: false
}
