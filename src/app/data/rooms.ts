import { IconType } from "react-icons";
import { FaWifi, FaRegSnowflake, FaTv } from "react-icons/fa";
import { TbToolsKitchen2 } from "react-icons/tb";
export interface RoomData {
  id: string;
  name: string;
  description: string;
  size: number;
  maxOccupancy: number;
  view: string;
  images: { src: string; alt?: string }[];
  amenities: { name: string; icon: IconType }[];
  checkIn: string;
  checkOut: string;
}

export const rooms: RoomData[] = [
  {
    id: "apartment-a",
    name: "Apartment A",
    description:
      "A luxurious suite with breathtaking sea views, modern amenities, and a touch of Cretan charm.",
    size: 35,
    maxOccupancy: 3,
    view: "Mountain View and Sea View",
    images: [
      {
        src: "/images/MEN_5231.jpg",
        alt: "Garden view of the retreat",
      },
      {
        src: "/images/MEN_5230.jpg",
        alt: "Interior with garden light",
      },
      {
        src: "/images/MEN_5228.jpg",
        alt: "Balcony overlooking the garden",
      },
      {
        src: "/images/MEN_5241-HDR.jpg",
        alt: "Balcony overlooking the garden",
      },
      {
        src: "/images/MEN_5228.jpg",
        alt: "Balcony overlooking the garden",
      },
      {
        src: "/images/MPP_9878.jpg",
        alt: "Balcony overlooking the garden",
      },
    ],
    amenities: [
      { name: "WiFi", icon: FaWifi },
      { name: "Air Conditioning", icon: FaRegSnowflake },
      { name: "Kitchen", icon: TbToolsKitchen2 },
      { name: "TV", icon: FaTv },
    ],
    checkIn: "01:00 PM",
    checkOut: "11:00 AM",
  },
  {
    id: "apartment-d",
    name: "Apartment D",
    description:
      "A cozy room nestled among lush gardens, perfect for relaxation and a peaceful stay.",
    size: 42,
    maxOccupancy: 4,
    view: "Mountain View and Sea View",
    images: [
      {
        src: "/images/MEN_4252.jpg",
        alt: "Garden view of the retreat",
      },
      {
        src: "/images/MEN_4285.jpg",
        alt: "Interior with garden light",
      },
      {
        src: "/images/MEN_4250.jpg",
        alt: "Balcony overlooking the garden",
      },

      {
        src: "/images/MEN_4242.jpg",
        alt: "Balcony overlooking the garden",
      },
      {
        src: "/images/MEN_4239.jpg",
        alt: "Balcony overlooking the garden",
      },
    ],
    amenities: [
      { name: "WiFi", icon: FaWifi },
      { name: "Air Conditioning", icon: FaRegSnowflake },
      { name: "Kitchen", icon: TbToolsKitchen2 },
      { name: "TV", icon: FaTv },
    ],
    checkIn: "01:00 PM",
    checkOut: "11:00 AM",
  },
  {
    id: "studio-b",
    name: "Studio B",
    description:
      "A stylish, spacious studio with contemporary design and all the comforts for a memorable stay.",
    size: 25,
    maxOccupancy: 2,
    view: "Mountain View and Sea View",
    images: [
      {
        src: "/images/MEN_5216.jpg",
        alt: "Garden view of the retreat",
      },
      {
        src: "/images/MEN_4282.jpg",
        alt: "Interior with garden light",
      },
      {
        src: "/images/MEN_4285.jpg",
        alt: "Balcony overlooking the garden",
      },

      {
        src: "/images/MEN_4242.jpg",
        alt: "Balcony overlooking the garden",
      },
      {
        src: "/images/MPP_9946.jpg",
        alt: "Balcony overlooking the garden",
      },
    ],
    amenities: [
      { name: "WiFi", icon: FaWifi },
      { name: "Air Conditioning", icon: FaRegSnowflake },
      { name: "Kitchen", icon: TbToolsKitchen2 },
      { name: "TV", icon: FaTv },
    ],
    checkIn: "01:00 PM",
    checkOut: "11:00 AM",
  },
  {
    id: "studio-c",
    name: "Studio C",
    description:
      "A spacious apartment designed for families, offering comfort, privacy, and stunning views.",
    size: 20,
    maxOccupancy: 2,
    view: "Mountain View and Sea View",
    images: [
      {
        src: "/images/MEN_4273.jpg",
        alt: "Garden view of the retreat",
      },
      {
        src: "/images/MEN_4277.jpg",
        alt: "Interior with garden light",
      },
      {
        src: "/images/MEN_4272.jpg",
        alt: "Balcony overlooking the garden",
      },

      {
        src: "/images/MPP_9932.jpg",
        alt: "Balcony overlooking the garden",
      },
    ],
    amenities: [
      { name: "WiFi", icon: FaWifi },
      { name: "Air Conditioning", icon: FaRegSnowflake },
      { name: "Kitchen", icon: TbToolsKitchen2 },
      { name: "TV", icon: FaTv },
    ],
    checkIn: "01:00 PM",
    checkOut: "11:00 AM",
  },
];
