const sampleListings = [
  {
    title: "Cozy Lake House",
    description: "Peaceful retreat with beautiful lake views.",
    image: {
      url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      filename: "listingimage"
    },
    price: 3200,
    location: "Nainital",
    country: "India",
    categories: ["Lakefront", "Countryside"]
  },
  {
    title: "Modern Flat",
    description: "Located in the heart of the city.",
    image: {
      url: "https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting-room.jpg?auto=compress&cs=tinysrgb&w=800",
      filename: "listingimage"
    },
    price: 4000,
    location: "Mumbai",
    country: "India",
    categories: ["City"]
  },
  {
    title: "Historic Home",
    description: "Traditional architecture with modern comfort.",
    image: {
      url: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800",
      filename: "listingimage"
    },
    price: 3900,
    location: "Rome",
    country: "Italy",
    categories: ["City", "Luxury"]
  },
  {
    title: "Seaside Apartment",
    description: "Stunning views of the ocean.",
    image: {
      url: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800",
      filename: "listingimage"
    },
    price: 4500,
    location: "Lisbon",
    country: "Portugal",
    categories: ["Beach", "Luxury"]
  },
  {
    title: "Jungle Treehouse",
    description: "Live among the trees with full comfort.",
    image: {
      url: "https://images.pexels.com/photos/236048/pexels-photo-236048.jpeg?auto=compress&cs=tinysrgb&w=800",
      filename: "listingimage"
    },
    price: 2500,
    location: "Chiang Mai",
    country: "Thailand",
    categories: ["Treehouses", "Countryside"]
  },
  {
    title: "Ski Lodge",
    description: "Perfect for your next snow adventure.",
    image: {
      url: "https://images.pexels.com/photos/1834399/pexels-photo-1834399.jpeg?auto=compress&cs=tinysrgb&w=800",
      filename: "listingimage"
    },
    price: 6000,
    location: "Zermatt",
    country: "Switzerland",
    categories: ["Mountains", "Luxury"]
  },
  // 20 New Listings
  {
    title: "Coastal Villa",
    description: "Panoramic sea views and private beach access.",
    image: {
      url: "https://images.pexels.com/photos/210557/pexels-photo-210557.jpeg?auto=compress&cs=tinysrgb&w=800",
      filename: "listingimage"
    },
    price: 5200,
    location: "Goa",
    country: "India",
    categories: ["Beach", "Luxury"]
  },
  {
    title: "Skyline Loft",
    description: "Modern loft with city skyline view.",
    image: {
      url: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800",
      filename: "listingimage"
    },
    price: 4300,
    location: "New York",
    country: "USA",
    categories: ["City", "Luxury"]
  },
  {
    title: "Alpine Chalet",
    description: "Wooden chalet in the snowy Alps.",
    image: {
      url: "https://images.pexels.com/photos/1834399/pexels-photo-1834399.jpeg?auto=compress&cs=tinysrgb&w=800",
      filename: "listingimage"
    },
    price: 5900,
    location: "Innsbruck",
    country: "Austria",
    categories: ["Mountains", "Luxury"]
  },
  {
    title: "Tea Estate Cottage",
    description: "Serene cottage in lush tea estate.",
    image: {
      url: "https://images.pexels.com/photos/1721935/pexels-photo-1721935.jpeg?auto=compress&cs=tinysrgb&w=800",
      filename: "listingimage"
    },
    price: 2700,
    location: "Munnar",
    country: "India",
    categories: ["Countryside"]
  },
  {
    title: "Lakeside Tent",
    description: "Luxury tent with lakefront view.",
    image: {
      url: "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&w=800",
      filename: "listingimage"
    },
    price: 1800,
    location: "Pushkar",
    country: "India",
    categories: ["Camping", "Lakefront"]
  },
  {
    title: "Safari Lodge",
    description: "Wildlife retreat with modern amenities.",
    image: {
      url: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800",
      filename: "listingimage"
    },
    price: 3000,
    location: "Masai Mara",
    country: "Kenya",
    categories: ["Countryside", "Luxury"]
  },
  {
    title: "Beachfront Paradise",
    description: "Experience luxury at this stunning beachfront resort.",
    image: {
      url: "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&w=800",
      filename: "listingimage"
    },
    price: 5000,
    location: "Maldives",
    country: "Maldives",
    categories: ["Beach", "Luxury"]
  },
  {
    title: "Mountain Retreat",
    description: "A serene escape nestled in the mountains.",
    image: {
      url: "https://images.pexels.com/photos/1834399/pexels-photo-1834399.jpeg?auto=compress&cs=tinysrgb&w=800",
      filename: "listingimage"
    },
    price: 4500,
    location: "Aspen",
    country: "USA",
    categories: ["Mountains", "Luxury"]
  },
  {
    title: "Urban Luxury Hotel",
    description: "Stay in the heart of the city with top-notch amenities.",
    image: {
      url: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800",
      filename: "listingimage"
    },
    price: 4000,
    location: "Tokyo",
    country: "Japan",
    categories: ["City", "Luxury"]
  },
  {
    title: "Desert Oasis Resort",
    description: "An exclusive resort offering tranquility in the desert.",
    image: {
      url: "https://images.pexels.com/photos/210557/pexels-photo-210557.jpeg?auto=compress&cs=tinysrgb&w=800",
      filename: "listingimage"
    },
    price: 4800,
    location: "Dubai",
    country: "UAE",
    categories: ["Luxury"]
  },
  {
    title: "Countryside Inn",
    description: "Charming inn surrounded by picturesque countryside.",
    image: {
      url: "https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&w=800",
      filename: "listingimage"
    },
    price: 3500,
    location: "Provence",
    country: "France",
    categories: ["Countryside"]
  },
  {
    title: "Island Bungalow",
    description: "Private bungalow with direct beach access.",
    image: {
      url: "https://images.pexels.com/photos/236048/pexels-photo-236048.jpeg?auto=compress&cs=tinysrgb&w=800",
      filename: "listingimage"
    },
    price: 5200,
    location: "Bora Bora",
    country: "French Polynesia",
    categories: ["Beach", "Luxury"]
  },
  {
    title: "Historic City Hotel",
    description: "Elegant hotel located in the historic city center.",
    image: {
      url: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800",
      filename: "listingimage"
    },
    price: 3900,
    location: "Rome",
    country: "Italy",
    categories: ["City", "Luxury"]
  },
  {
    title: "Lakeside Cabin",
    description: "Cozy cabin with breathtaking lake views.",
    image: {
      url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      filename: "listingimage"
    },
    price: 3000,
    location: "Queenstown",
    country: "New Zealand",
    categories: ["Cabins", "Lakefront"]
  },
  {
    title: "Jungle Treehouse",
    description: "Unique stay amidst lush jungle canopy.",
    image: {
      url: "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=800",
      filename: "listingimage"
    },
    price: 2700,
    location: "Chiang Mai",
    country: "Thailand",
    categories: ["Treehouses"]
  },
  {
    title: "Ski Lodge",
    description: "Perfect base for your alpine adventures.",
    image: {
      url: "https://images.pexels.com/photos/1834399/pexels-photo-1834399.jpeg?auto=compress&cs=tinysrgb&w=800",
      filename: "listingimage"
    },
    price: 6000,
    location: "Zermatt",
    country: "Switzerland",
    categories: ["Mountains", "Luxury"]
  }
];

module.exports = { data : sampleListings };