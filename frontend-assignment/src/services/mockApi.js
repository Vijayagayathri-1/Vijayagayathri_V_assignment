const servicesData = [
  {
    id: 1,
    name: 'Vibrant Vibes DJ',
    category: 'DJ',
    price: 500,
    rating: 4.8,
    location: 'New York',
    availability: true,
    description: 'Expert DJ for all types of events. Specializes in pop, rock, and electronic music. Professional equipment and a massive music library.',
    images: [
      'src/assets/Dj/img1.jpg',
      'src/assets/Dj/img2.avif',
      'src/assets/Dj/img3.avif',
    ],
    reviews: [
      { id: 1, author: 'Alice M.', rating: 5, comment: 'Amazing performance! Kept the energy high all night.' },
    ],
  },
  {
    id: 2,
    name: 'Rhythm Masters',
    category: 'DJ',
    price: 750,
    rating: 4.5,
    location: 'Los Angeles',
    availability: false,
    description: 'Experienced DJs for weddings and corporate events. We create custom playlists to match your event\'s unique vibe.',
    images: [
      'src/assets/Dj/img2.avif',
      'src/assets/Dj/img1.jpg',
      'src/assets/Dj/img3.avif',
    ],
    reviews: [
      { id: 1, author: 'Mark T.', rating: 4, comment: 'Great sound system and very professional.' },
    ],
  },
  {
    id: 3,
    name: 'Beat Drop Events',
    category: 'DJ',
    price: 600,
    rating: 4.9,
    location: 'Chicago',
    availability: true,
    description: 'Specializing in EDM and house music. Our sets are guaranteed to get the party started and keep it going all night long!',
    images: [
      'src/assets/Dj/img3.avif',
      'src/assets/Dj/img1.jpg',
      'src/assets/Dj/img2.avif',
    ],
    reviews: [
      { id: 1, author: 'Sarah K.', rating: 5, comment: 'The DJ was amazing! Highly recommend.' },
      { id: 2, author: 'Tom V.', rating: 5, comment: 'Exceeded all expectations. The energy was incredible.' },
    ],
  },

  {
    id: 4,
    name: 'Lens & Light Photography',
    category: 'Photographer',
    price: 800,
    rating: 4.9,
    location: 'Los Angeles',
    availability: true,
    description: 'Capturing life\'s special moments with a unique artistic vision. Offers a range of packages from weddings to corporate events.',
    images: [
      'src/assets/Photo/img1.avif',
      'src/assets/Photo/img2.avif',
      'src/assets/Photo/img3.avif',
    ],
    reviews: [
      { id: 1, author: 'Charlie S.', rating: 5, comment: 'The photos turned out beautifully. Highly recommend!' },
      { id: 2, author: 'Diana K.', rating: 5, comment: 'Incredibly skilled photographer, very friendly and easy to work with.' },
    ],
  },
  {
    id: 5,
    name: 'Artisan Angles Studios',
    category: 'Photographer',
    price: 950,
    rating: 4.7,
    location: 'New York',
    availability: true,
    description: 'Bespoke photography services for corporate events and personal portraits. We focus on natural light and candid moments.',
    images: [
      'src/assets/Photo/img2.avif',
      'src/assets/Photo/img1.avif',
      'src/assets/Photo/img3.avif',
    ],
    reviews: [
      { id: 1, author: 'John G.', rating: 5, comment: 'Fantastic photos and a pleasure to work with.' },
    ],
  },
  {
    id: 6,
    name: 'Moment Makers Photography',
    category: 'Photographer',
    price: 700,
    rating: 4.6,
    location: 'Miami',
    availability: false,
    description: 'Capturing candid moments and vibrant emotions. We specialize in engagement and family photo shoots.',
    images: [
      'src/assets/Photo/img3.avif',
      'src/assets/Photo/img1.avif',
      'src/assets/Photo/img2.avif',
    ],
    reviews: [
      { id: 1, author: 'Fiona G.', rating: 4, comment: 'Good quality photos. A few were a little out of focus.' },
      { id: 2, author: 'David S.', rating: 5, comment: 'Very happy with the results. They truly captured the magic of the day.' },
    ],
  },

  {
    id: 7,
    name: 'Catering by Gourmet Guru',
    category: 'Caterer',
    price: 1200,
    rating: 4.5,
    location: 'Chicago',
    availability: false,
    description: 'A culinary experience like no other. We provide bespoke catering services for small gatherings and large galas. Menus are fully customizable.',
    images: [
      'src/assets/Catering/img1.avif',
      'src/assets/Catering/img2.avif',
      'src/assets/Catering/img3.avif',
    ],
    reviews: [
      { id: 1, author: 'Ethan H.', rating: 4, comment: 'The food was excellent, though the service was a bit slow.' },
    ],
  },
  {
    id: 8,
    name: 'The Flavor Foundry',
    category: 'Caterer',
    price: 1500,
    rating: 4.9,
    location: 'Houston',
    availability: true,
    description: 'We craft unique menus with fresh, locally sourced ingredients. Specializing in themed events and dietary accommodations.',
    images: [
      'src/assets/Catering/img2.avif',
      'src/assets/Catering/img1.avif',
      'src/assets/Catering/img3.avif',
    ],
    reviews: [
      { id: 1, author: 'Jane D.', rating: 5, comment: 'Absolutely delicious! The food was a highlight of the event.' },
      { id: 2, author: 'Paul A.', rating: 5, comment: 'They were able to accommodate our vegan and gluten-free guests with no problem.' },
    ],
  },
  {
    id: 9,
    name: 'Aromatic Eats',
    category: 'Caterer',
    price: 900,
    rating: 4.2,
    location: 'Austin',
    availability: true,
    description: 'Affordable and delicious catering for parties and casual events. Our specialties include barbecues and finger foods.',
    images: [
      'src/assets/Catering/img3.avif',
      'src/assets/Catering/img1.avif',
      'src/assets/Catering/img2.avif',
    ],
    reviews: [
      { id: 1, author: 'Mike G.', rating: 4, comment: 'Good value for the price. The pulled pork was amazing.' },
    ],
  },

  {
    id: 10,
    name: 'Floral Fantasy Decorators',
    category: 'Decorator',
    price: 950,
    rating: 5.0,
    location: 'Miami',
    availability: true,
    description: 'From elegant centerpieces to breathtaking backdrops, we transform any space into a floral wonderland. Our designs are unique to every client.',
    images: [
      'src/assets/Decorator/img1.avif',
      'src/assets/Decorator/img2.avif',
      'src/assets/Decorator/img.avif',
    ],
    reviews: [
      { id: 1, author: 'Fiona R.', rating: 5, comment: 'Absolutely stunning! The flowers were fresh and the arrangement was perfect.' },
      { id: 2, author: 'George L.', rating: 5, comment: 'Truly talented decorators. They made my vision a reality.' },
    ],
  },
  {
    id: 11,
    name: 'Dreamscape Designs',
    category: 'Decorator',
    price: 1100,
    rating: 4.7,
    location: 'New York',
    availability: true,
    description: 'We specialize in modern and minimalist event design. Our team creates sophisticated and elegant spaces for any occasion.',
    images: [
      'src/assets/Decorator/img2.avif',
      'src/assets/Decorator/img1.avif',
      'src/assets/Decorator/img.avif',
    ],
    reviews: [
      { id: 1, author: 'Jessica L.', rating: 5, comment: 'The design was breathtaking. They have an amazing eye for detail.' },
    ],
  },
  {
    id: 12,
    name: 'Party Perfection Decor',
    category: 'Decorator',
    price: 850,
    rating: 4.3,
    location: 'Chicago',
    availability: false,
    description: 'Fun and festive decor for birthday parties, showers, and holiday events. We work with any theme to bring your party to life.',
   images: [
      'src/assets/Decorator/img.avif',
      'src/assets/Decorator/img1.avif',
      'src/assets/Decorator/img2.avif',
    ],
    reviews: [
      { id: 1, author: 'Chris T.', rating: 4, comment: 'The balloons were a little deflated by the end of the night, but otherwise great work.' },
    ],
  },
];

// Helper function to simulate network delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Fetches all services.
 * @returns {Promise<Array>} A promise that resolves with an array of all services.
 */
export const fetchServices = async () => {
  await delay(500); // Simulate network delay
  return servicesData;
};

/**
 * Fetches a single service by its ID.
 * @param {number} id The ID of the service to fetch.
 * @returns {Promise<Object|null>} A promise that resolves with the service object or null if not found.
 */
export const fetchServiceById = async (id) => {
  await delay(300); // Simulate network delay
  const service = servicesData.find(s => s.id === id);
  return service || null;
};

/**
 * Fetches all services that are currently available.
 * @returns {Promise<Array>} A promise that resolves with an array of available services.
 */
export const fetchAvailableServices = async () => {
  await delay(400); // Simulate network delay
  const availableServices = servicesData.filter(s => s.availability);
  return availableServices;
};