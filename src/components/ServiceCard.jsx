// src/components/ServiceCard.jsx
import React from 'react';

const ServiceCard = ({ service }) => {
  return (
    <div className="service-card bg-gray-800 p-6 rounded-lg shadow-md">
      <img src={service.icon} alt={service.title} className="w-16 h-16 mb-4 mx-auto" />
      <h3 className="text-xl font-semibold mb-2 text-center">{service.title}</h3>
    </div>
  );
};

export default ServiceCard;
