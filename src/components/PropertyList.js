import React from "react";
import "./PropertyList.css";

const properties = [
  {
    id: 1,
    name: "NextGen Heights",
    location: "Nagpur",
    price: "₹25 Lakh",
    image: "/assets/property1.jpg",
  },
  {
    id: 2,
    name: "Green Valley Residency",
    location: "Pune",
    price: "₹45 Lakh",
    image: "/assets/property2.jpg",
  },
  {
    id: 3,
    name: "City Crown Apartments",
    location: "Mumbai",
    price: "₹95 Lakh",
    image: "/assets/property3.jpg",
  },
  {
    id: 4,
    name: "Harmony Enclave",
    location: "Nashik",
    price: "₹38 Lakh",
    image: "/assets/property4.jpg",
  },
  {
    id: 5,
    name: "Urban Nest",
    location: "Thane",
    price: "₹72 Lakh",
    image: "/assets/property5.jpg",
  },
  {
    id: 6,
    name: "Lakeview Meadows",
    location: "Aurangabad",
    price: "₹41 Lakh",
    image: "/assets/property6.jpg",
  },
  {
    id: 7,
    name: "Sunrise Park Villas",
    location: "Solapur",
    price: "₹32 Lakh",
    image: "/assets/property7.jpg",
  },
  {
    id: 8,
    name: "Silver Lake Towers",
    location: "Amravati",
    price: "₹28 Lakh",
    image: "/assets/property8.jpg",
  },
  {
    id: 9,
    name: "Orchid Greens",
    location: "Kolhapur",
    price: "₹36 Lakh",
    image: "/assets/property9.jpg",
  },
  {
    id: 10,
    name: "Palm Breeze Residency",
    location: "Jalgaon",
    price: "₹30 Lakh",
    image: "/assets/property10.jpg",
  },
  {
    id: 11,
    name: "Hilltop Horizon",
    location: "Chandrapur",
    price: "₹29 Lakh",
    image: "/assets/property11.jpg",
  },
  {
    id: 12,
    name: "Crystal Garden Homes",
    location: "Akola",
    price: "₹26 Lakh",
    image: "/assets/property12.jpg",
  },
  {
    id: 13,
    name: "Maple Residency",
    location: "Latur",
    price: "₹34 Lakh",
    image: "/assets/property13.jpg",
  },
  {
    id: 14,
    name: "Emerald Villas",
    location: "Sangli",
    price: "₹37 Lakh",
    image: "/assets/property14.jpg",
  },
  {
    id: 15,
    name: "Golden Brick Homes",
    location: "Dhule",
    price: "₹27 Lakh",
    image: "/assets/property15.jpg",
  },
  {
    id: 16,
    name: "Skyline Crest",
    location: "Nanded",
    price: "₹42 Lakh",
    image: "/assets/property16.jpg",
  },
  {
    id: 17,
    name: "Dream City Plots",
    location: "Beed",
    price: "₹22 Lakh",
    image: "/assets/property17.jpg",
  },
  {
    id: 18,
    name: "Luxury Aura",
    location: "Ratnagiri",
    price: "₹40 Lakh",
    image: "/assets/property18.jpg",
  },
  {
    id: 19,
    name: "Pearl County",
    location: "Satara",
    price: "₹33 Lakh",
    image: "/assets/property19.jpg",
  },
  {
    id: 20,
    name: "Zenith Enclave",
    location: "Bhandara",
    price: "₹24 Lakh",
    image: "/assets/property20.jpg",
  },
];

const PropertyList = () => {
  return (
    <div className="property-list-container">
      <h2>Featured Properties</h2>
      <div className="property-grid">
        {properties.map((property) => (
          <div key={property.id} className="property-card">
            <img src={property.image} alt={property.name} />
            <h3>{property.name}</h3>
            <p>{property.location}</p>
            <p className="price">{property.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
