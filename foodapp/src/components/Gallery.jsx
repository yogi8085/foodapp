import React from "react";
import "./Gallery.css"; 

function Gallery() {
  const foodItems = [
    {
      id: 1,
      title: "Vegetarian Pizza",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4WJzJXvTu1cOOrKCiILLlDj-SOt8ZrvRQ5Q&s", 
    },
    {
      id: 2,
      title: "Chocolate Cake",
      imageUrl:
        "https://mrbrownbakery.com/image/images/GJ7uCwGiteTF24HTWBclkziVTdhpQeZWH23MvQfq.jpeg?p=full",
    },
    {
      id: 3,
      title: "Pasta Alfredo",
      imageUrl:
        "https://media.istockphoto.com/id/612246764/photo/pasta-with-chicken.jpg?s=612x612&w=0&k=20&c=c_gZbA4DXcLGWLng58D2B9Od_do4xpGe1JXyUjstz0A=",
    },
    {
      id: 4,
      title: "Caesar Salad",
      imageUrl:
        "https://t4.ftcdn.net/jpg/02/02/48/35/360_F_202483549_3cDh8uaQ5OJG9GUDsp9YKSQNt69rjucc.jpg",
    },
  ];

  return (
    <div className="gallery-container">
      <h1 className="gallery-heading">Explore Our Food Gallery</h1>
      <div className="gallery-grid">
        {foodItems.map((item) => (
          <div key={item.id} className="food-card">
            <img src={item.imageUrl} alt={item.title} className="food-image" />
            <div className="food-overlay">
              <h3 className="food-title">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
