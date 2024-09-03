import React from 'react';

const CardList = () => {
  // Sample data for the cards
  const cards = [
    {
      id: 1,
      title: 'Card Title 1',
      description: 'This is a description for card 1.',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      title: 'Card Title 2',
      description: 'This is a description for card 2.',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      title: 'Card Title 3',
      description: 'This is a description for card 3.',
      imageUrl: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl">
        {cards.map((card) => (
          <div key={card.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={card.imageUrl}
              alt={card.title}
              className="w-full h-32 sm:h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-700">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;
