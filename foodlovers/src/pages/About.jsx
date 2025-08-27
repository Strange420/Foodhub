import React from "react";
import "../css/About.css";

const About = () => (
  <div className="about">
    <h2>About Our Food Delivery App</h2>
    <p>
      Our app provides a seamless food ordering experience, connecting customers with a variety of local vendors. 
      With a focus on simplicity, speed, and reliability, users can browse, search, and order meals with ease.
    </p>

    <h3>Key Features</h3>
    <ul>
      <li>Browse featured foods and popular vendors.</li>
      <li>Search and filter food items quickly.</li>
      <li>Add items to a shopping cart and proceed to secure checkout.</li>
      <li>Responsive design optimized for mobile and desktop devices.</li>
      <li>Interactive UI elements including carousels, hover effects, and animations.</li>
    </ul>

    <h3>Our Mission</h3>
    <p>
      We aim to make food ordering simple and enjoyable for everyone. Our platform ensures fast access to 
      a wide selection of meals while supporting local vendors and restaurants.
    </p>

    <h3>Technologies Behind the App</h3>
    <p>
      Built with React (Vite) for a fast frontend, CSS for responsive styling, and JSON for data handling. 
      Our infrastructure is designed to scale as the app grows.
    </p>
  </div>
);

export default About;
