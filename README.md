# mini-ecommerce-store
A responsive mini e-commerce storefront built with HTML, CSS, and JavaScript, featuring API-based products, search, category filtering, shopping cart, localStorage persistence, product details, and checkout.

# ShopEase — Mini E-Commerce Store

A polished, responsive mini e-commerce storefront built as a portfolio project to demonstrate modern front-end development fundamentals.

## Overview

ShopEase is a fully responsive e-commerce web application where users can browse products, search and filter the catalog, view product details, manage their shopping cart, and complete a simulated checkout process.

The project focuses on combining multiple front-end concepts into one complete application, including API integration, DOM manipulation, routing through URL parameters, reusable JavaScript functions, form handling, animations, and browser storage.

## Features

* Product listing from the Fake Store API
* Search products by name
* Filter products by category
* Sort products by price and rating
* Product detail page
* Add products to cart
* Increase and decrease product quantities
* Remove products from cart
* Live cart count
* Automatic order total calculation
* Cart persistence using `localStorage`
* Checkout form with validation
* Simulated order placement
* Responsive desktop, tablet, and mobile layouts
* Smooth hover and entrance animations
* Toast notifications for cart actions
* Reusable shared JavaScript functionality

## Tech Stack

* HTML5
* CSS3
* JavaScript (ES6+)
* Fake Store API
* LocalStorage
* Responsive CSS
* Google Fonts

## Project Structure

```text
mini-ecommerce-store/
│
├── index.html
├── product.html
├── cart.html
├── checkout.html
│
├── css/
│   └── style.css
│
└── js/
    ├── api.js
    ├── products.js
    ├── product-detail.js
    ├── cart.js
    ├── checkout.js
    └── shared.js
```

## How It Works

### Product API

Products are fetched dynamically from the Fake Store API using JavaScript's `fetch()` method.

### Search & Filtering

The product listing can be searched by title and filtered by category. Products can also be sorted by price or rating.

### Shopping Cart

Users can add products to their cart, update quantities, and remove items. The cart total is recalculated whenever the cart changes.

### Persistence

The cart is stored in the browser's `localStorage`, allowing it to remain available after refreshing the page.

### Product Details

Each product has its own detail view using a URL query parameter such as:

```text
product.html?id=1
```

### Checkout

The checkout page displays the selected products and total price and includes a customer information form. No real payment processing is implemented.

## Case Study

ShopEase was built as a mini e-commerce project to bring together the front-end skills developed throughout the internship into one complete application. I built the storefront with HTML, CSS, and vanilla JavaScript to strengthen my understanding of core web development without relying on a large framework. Products are fetched from the Fake Store API, while search, category filtering, sorting, product details, and cart interactions are handled through JavaScript and DOM manipulation. I used localStorage to persist cart data so users do not lose their cart when refreshing the page. The interface was designed with a premium, minimal visual style and responsive layouts for desktop, tablet, and mobile screens. I also added reusable functions, toast notifications, hover effects, entrance animations, and a checkout flow to make the application feel more like a complete product rather than a basic demo. With more time, I would improve accessibility, add stronger form validation, implement a backend for real orders and authentication, and introduce a more advanced state-management approach.

## Future Improvements

* Add user authentication
* Add a backend and database
* Implement real order management
* Add wishlist functionality
* Add product reviews
* Improve accessibility and keyboard navigation
* Add advanced form validation
* Add loading skeletons
* Add pagination
* Add real payment integration
* Add automated testing

## Disclaimer

This project is a front-end portfolio/internship project. The checkout process is simulated and does not process real payments.

## Author

**Maliha Shahzad**

Front-End Developer | SQA Intern

---

Built with HTML, CSS & JavaScript.
