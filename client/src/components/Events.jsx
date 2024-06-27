import React from 'react';
import cyberbreach from "../assets/event/cyberbreach.webp"
import defEvent from "../assets/event/default.jpeg"

const Events = () => {
  const events = [
    { id: 1, image: cyberbreach, title: 'Cyberbreach', subtitle: 'Navigating the Cyber Frontier', date: 'March 2024' },
    { id: 2, image: defEvent, title: 'C-O-D-E Beginner 1', subtitle: 'Improve overall algorithmic knowledge', date: 'August 2023' },
    { id: 3, image: defEvent, title: 'Mastering Tech with a Microsoft Insider', subtitle: 'Learn Data Structures & Algorithms (DSA) for a tech career with a Microsoft expert.', date: 'August 2023' },
    { id: 4, image: defEvent, title: 'Code Ninja Challenge: KIIT Edition', subtitle: 'Code & Conquer', date: 'July 2023' },
  ];

  return (
    <div id="events" className="bg-black text-white py-16 px-4">
      <h1 className="text-8xl md:text-10xl font-light text-center my-8 text-gray-400">Events</h1>
      <p className="text-center mb-12 max-w-2xl mx-auto">
        
      </p>
      
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
        {events.map((event) => (
          <div key={event.id} className="w-full md:w-1/3 max-w-sm relative group">
            <img 
              src={event.image} 
              alt={`Event ${event.id}`} 
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 rounded-lg">
              <h3 className="text-xl font-semibold">{event.title}</h3>
              <p className="text-sm">{event.subtitle}</p>
              <p className="text-sm mt-2">{event.date}</p>
              <div className="w-full h-1 bg-orange-500 mt-2"></div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center">
      {/* <button className="bg-orange-500 text-white py-2 px-16 rounded-full hover:bg-orange-600 transform hover:scale-105 glow-on-hover w-48">
          Explore
        </button> */}
      </div>
    </div>
  );
};

export default Events;