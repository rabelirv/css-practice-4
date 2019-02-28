import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <head>
<title>Davie JR's Menu</title>
</head>

<body>

// Navigation Section

<nav>
  <img src="https://s3.amazonaws.com/codecademy-content/courses/web-101/unit-6/htmlcss1-img_burger-logo.svg" />
  <span><a href="#">MENU</a></span>
  <span><a href="#">NUTRITION</a></span>
  <span><a href="#">ORDER</a></span>
  <span><a href="#">LOCATIONS</a></span>
</nav>

//  Content Section -->

<div class="content">

  // Content Header -->

  <div class="header">
    <h1>BBQ BACON BURGER</h1>
  </div>

  // Content Body -->

  <div class="body">
    <p>
      Our BBQ Bacon Burger features our special house ground blend of wagyu and sirloin, spiced perfectly, and finished off with just a drop of white truffle oil. A butter grilled brioche bun layered with roasted red onion, perfectly crispy pork belly, and our hickory smoked BBQ sauce.
    </p>

    // Order Button -->

    <a href="#" class="button">ORDER NOW</a>

    // Nutrition Information -->

    <ul class="nutrition">
      <li>
        <span class="category">CALORIES</span>
        <span class="value">678</span>
      </li>
      <li>
        <span class="category">FAT</span>
        <span class="value">32</span>
      </li>
      <li>
        <span class="category">PROTEIN</span>
        <span class="value">8</span>
      </li>
      <li>
        <span class="category">CARBOHYDRATES</span>
        <span class="value">34</span>
      </li>
      <li>
        <span class="category">SODIUM</span>
        <span class="value">112</span>
      </li>
    </ul>
  </div>
</div>

</body>
      </div>
    );
  }
}

export default App;
