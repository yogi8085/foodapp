import React from "react";
import "./Service.css";
import { FaTruck, FaConciergeBell, FaClipboardList } from "react-icons/fa"; // Service icons

const Service = () => {
  return (
    <div className="service-page">
      <section className="services">
        <div className="container">
          <h2 className="section-heading">Our Premium Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <FaTruck className="service-icon" />
              <h3>Fast Delivery</h3>
              <p>
                Get your food delivered quickly without compromising quality.
                Speed and freshness guaranteed.
              </p>
            </div>
            <div className="service-card">
              <FaConciergeBell className="service-icon" />
              <h3>Premium Meals</h3>
              <p>
                We offer a variety of delicious, chef-made meals that satisfy
                every craving.
              </p>
            </div>
            <div className="service-card">
              <FaClipboardList className="service-icon" />
              <h3>Subscription Plans</h3>
              <p>
                Sign up for our subscription service to get exclusive deals and
                meals delivered regularly.
              </p>
            </div>
          </div>
        </div>
      </section>

    
      <section className="menu-highlights">
        <div className="container">
          <h2 className="section-heading">Menu Highlights</h2>
          <div className="menu-grid">
            <div className="menu-item">
              <img
                src="https://media.istockphoto.com/id/179085494/photo/indian-biryani.jpg?s=612x612&w=0&k=20&c=VJAUfiuavFYB7PXwisvUhLqWFJ20-9m087-czUJp9Fs="
                alt="Dish 1"
              />
              <h4>veg Biriyani</h4>
              <p>Best quality rice and fress masala</p>
            </div>
            <div className="menu-item">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL9OQtcrVw008g09nazD3hsedG7PT8cYRlNg&s"
                alt="Dish 2"
              />
              <h4>veg Salad</h4>
              <p>
                Fresh greens with perfectly grilled and creamy Caesar dressing.
              </p>
            </div>
            <div className="menu-item">
              <img
                src="https://img.freepik.com/free-photo/delicious-burger-with-fresh-ingredients_23-2150857908.jpg?semt=ais_hybrid"
                alt="Dish 3"
              />
              <h4>Veggie Burger</h4>
              <p>
                A healthy and tasty plant-based burger with all the fixings.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2 className="cta-heading">Order Now and Taste the Difference</h2>
          <a href="/order" className="cta-button">
            Order Now
          </a>
        </div>
      </section>


      <footer>
        <div className="footer-container">
          <p>&copy; 2024 FoodHub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Service;
