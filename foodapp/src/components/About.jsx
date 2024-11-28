import React from "react";
import "./About.css"; 

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-heading">
          About Eka – Your Ultimate Food Companion
        </h1>
        <p className="about-text">
          Welcome to Eka, your personal food app designed to bring culinary joy
          right to your kitchen. Whether you're an experienced chef or someone
          just beginning their cooking journey, Eka provides you with the tools
          and inspiration you need to create delicious and memorable meals.
        </p>
        <p className="about-text">
          Our app offers a wide variety of recipes, from traditional dishes to
          modern innovations, all tailored to suit your tastes and dietary
          preferences. We believe that food is more than just sustenance – it’s
          an experience, and we’re here to make that experience enjoyable and
          hassle-free.
        </p>
        <p className="about-text">
          With Eka, you can discover new flavors, learn new techniques, and
          enjoy the process of cooking as much as the meal itself. Whether
          you're looking for a quick snack or a gourmet feast, Eka has you
          covered. So, let's get cooking and make every meal a celebration!
        </p>
      </div>
      <div className="about-image">
        <img
          src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-craig-122861-376464.jpg&fm=jpg" 
          alt="Food App"
          className="about-img"
        />
      </div>
    </div>
  );
}

export default About;
