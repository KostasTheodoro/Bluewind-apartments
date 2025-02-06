import { IconType } from "react-icons";
import { FaWifi, FaRegSnowflake, FaTv, FaCar, FaCoffee } from "react-icons/fa";
import { TbToolsKitchen2, TbIroningSteam } from "react-icons/tb";
import { GiWashingMachine } from "react-icons/gi";
import { MdBalcony } from "react-icons/md";
export interface RoomData {
  id: string;
  name: string;
  description: string;
  size: number;
  maxOccupancy: number;
  view: string;
  images: { src: string; alt: string }[];
  amenities: { name: string; icon: IconType }[];
  checkIn: string;
  checkOut: string;
}

export const rooms: RoomData[] = [
  {
    id: "apartment-a",
    name: "Apartment A",
    description:
      "A bright and inviting apartment with stunning views, perfect for a peaceful escape in Crete.",
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
      { name: "Washing Machine", icon: GiWashingMachine },
      { name: "Steam Iron", icon: TbIroningSteam },
      { name: "Free parking on the road", icon: FaCar },
      { name: "Coffee machine", icon: FaCoffee },
      { name: "Balcony", icon: MdBalcony },
    ],
    checkIn: "01:00 PM",
    checkOut: "11:00 AM",
  },
  {
    id: "apartment-d",
    name: "Apartment D",
    description:
      "A comfortable and scenic home base in Kissamos, ideal for unwinding after a day of adventure.",
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
      { name: "Washing Machine", icon: GiWashingMachine },
      { name: "Steam Iron", icon: TbIroningSteam },
      { name: "Free parking on the road", icon: FaCar },
      { name: "Coffee machine", icon: FaCoffee },
      { name: "Balcony", icon: MdBalcony },
    ],
    checkIn: "01:00 PM",
    checkOut: "11:00 AM",
  },
  {
    id: "studio-b",
    name: "Studio B",
    description:
      "A charming, sunlit studio, perfect for couples looking for a relaxing island retreat.",
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
      { name: "Washing Machine", icon: GiWashingMachine },
      { name: "Steam Iron", icon: TbIroningSteam },
      { name: "Free parking on the road", icon: FaCar },
      { name: "Coffee machine", icon: FaCoffee },
      { name: "Balcony", icon: MdBalcony },
    ],
    checkIn: "01:00 PM",
    checkOut: "11:00 AM",
  },
  {
    id: "studio-c",
    name: "Studio C",
    description:
      "A simple yet comfortable retreat, perfect for a quiet stay near Crete's best beaches.",
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
      { name: "Washing Machine", icon: GiWashingMachine },
      { name: "Steam Iron", icon: TbIroningSteam },
      { name: "Free parking on the road", icon: FaCar },
      { name: "Coffee machine", icon: FaCoffee },
      { name: "Balcony", icon: MdBalcony },
    ],
    checkIn: "01:00 PM",
    checkOut: "11:00 AM",
  },
];
