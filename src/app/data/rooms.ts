export interface RoomData {
  id: string;
  name: string;
  description: string;
  size: number;
  maxOccupancy: number;
  view: string;
  images: { src: string; alt?: string }[];
  amenities: { name: string; icon: string }[];
  checkIn: string;
  checkOut: string;
}

export const rooms: RoomData[] = [
  {
    id: "sea-view-suite",
    name: "Sea View Suite",
    description:
      "A luxurious suite with breathtaking sea views, modern amenities, and a touch of Cretan charm.",
    size: 45,
    maxOccupancy: 4,
    view: "Sea View",
    images: [
      { src: "/images/sea-view-suite-1.jpg", alt: "Sea view of the suite" },
      { src: "/images/sea-view-suite-2.jpg", alt: "Interior of the suite" },
      { src: "/images/sea-view-suite-3.jpg", alt: "Balcony view" },
    ],
    amenities: [
      { name: "WiFi", icon: "/icons/wifi.svg" },
      { name: "Air Conditioning", icon: "/icons/ac.svg" },
      { name: "Kitchenette", icon: "/icons/kitchen.svg" },
    ],
    checkIn: "3:00 PM",
    checkOut: "11:00 AM",
  },
  {
    id: "garden-retreat",
    name: "Garden Retreat",
    description:
      "A cozy room nestled among lush gardens, perfect for relaxation and a peaceful stay.",
    size: 35,
    maxOccupancy: 3,
    view: "Garden View",
    images: [
      {
        src: "/images/garden-retreat-1.jpg",
        alt: "Garden view of the retreat",
      },
      {
        src: "/images/garden-retreat-2.jpg",
        alt: "Interior with garden light",
      },
      {
        src: "/images/garden-retreat-3.jpg",
        alt: "Balcony overlooking the garden",
      },
    ],
    amenities: [
      { name: "WiFi", icon: "/icons/wifi.svg" },
      { name: "Heating", icon: "/icons/heating.svg" },
    ],
    checkIn: "3:00 PM",
    checkOut: "11:00 AM",
  },
  {
    id: "deluxe-studio",
    name: "Deluxe Studio",
    description:
      "A stylish, spacious studio with contemporary design and all the comforts for a memorable stay.",
    size: 40,
    maxOccupancy: 2,
    view: "City & Sea View",
    images: [
      {
        src: "/images/deluxe-studio-1.jpg",
        alt: "Exterior view of the studio",
      },
      { src: "/images/deluxe-studio-2.jpg", alt: "Interior of the studio" },
      { src: "/images/deluxe-studio-3.jpg", alt: "Studio with a view" },
    ],
    amenities: [
      { name: "WiFi", icon: "/icons/wifi.svg" },
      { name: "Air Conditioning", icon: "/icons/ac.svg" },
      { name: "TV", icon: "/icons/tv.svg" },
    ],
    checkIn: "3:00 PM",
    checkOut: "11:00 AM",
  },
  {
    id: "family-apartment",
    name: "Family Apartment",
    description:
      "A spacious apartment designed for families, offering comfort, privacy, and stunning views.",
    size: 60,
    maxOccupancy: 6,
    view: "Panoramic Sea View",
    images: [
      {
        src: "/images/family-apartment-1.jpg",
        alt: "Exterior view of the apartment",
      },
      {
        src: "/images/family-apartment-2.jpg",
        alt: "Living area with sea view",
      },
      { src: "/images/family-apartment-3.jpg", alt: "Family room interior" },
    ],
    amenities: [
      { name: "WiFi", icon: "/icons/wifi.svg" },
      { name: "Air Conditioning", icon: "/icons/ac.svg" },
      { name: "Kitchen", icon: "/icons/kitchen.svg" },
      { name: "Multiple Bedrooms", icon: "/icons/bed.svg" },
    ],
    checkIn: "3:00 PM",
    checkOut: "11:00 AM",
  },
];
