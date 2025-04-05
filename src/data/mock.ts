
import { Service, Specialist, SalonLocation } from '../types';

export const services: Service[] = [
  {
    id: '1',
    name: 'Signature Facial',
    description: 'Our customized facial treats specific skin concerns using premium products tailored to your skin type.',
    price: 120,
    duration: 60,
    category: 'facial',
    image: '/placeholder.svg',
  },
  {
    id: '2',
    name: 'Deep Tissue Massage',
    description: 'Targets the deeper layers of muscle tissue to release chronic patterns of tension.',
    price: 140,
    duration: 75,
    category: 'massage',
    image: '/placeholder.svg',
  },
  {
    id: '3',
    name: 'Hair Styling & Cut',
    description: 'Professional styling and precision cut to enhance your natural beauty.',
    price: 85,
    duration: 45,
    category: 'hair',
    image: '/placeholder.svg',
  },
  {
    id: '4',
    name: 'Luxury Manicure',
    description: 'Includes nail shaping, cuticle care, hand massage, and premium polish application.',
    price: 65,
    duration: 45,
    category: 'nails',
    image: '/placeholder.svg',
  },
  {
    id: '5',
    name: 'Event Makeup',
    description: 'Professional makeup application for special events and occasions.',
    price: 95,
    duration: 60,
    category: 'makeup',
    image: '/placeholder.svg',
  },
  {
    id: '6',
    name: 'Body Scrub & Wrap',
    description: 'Exfoliating scrub followed by a hydrating body wrap for silky smooth skin.',
    price: 150,
    duration: 90,
    category: 'body',
    image: '/placeholder.svg',
  },
];

export const specialists: Specialist[] = [
  {
    id: '1',
    name: 'Emma Thompson',
    role: 'Senior Esthetician',
    image: '/placeholder.svg',
    bio: 'With over 10 years of experience, Emma specializes in advanced facial treatments and skin rejuvenation.',
    services: ['1', '6'],
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Massage Therapist',
    image: '/placeholder.svg',
    bio: 'Certified in various massage techniques, Michael is known for his therapeutic approach to relieve tension.',
    services: ['2'],
  },
  {
    id: '3',
    name: 'Sofia Rodriguez',
    role: 'Hair Stylist',
    image: '/placeholder.svg',
    bio: 'Award-winning stylist with expertise in cutting-edge techniques and color treatments.',
    services: ['3'],
  },
  {
    id: '4',
    name: 'Olivia Parker',
    role: 'Nail Technician',
    image: '/placeholder.svg',
    bio: 'Specialized in nail art and nail health, Olivia brings creativity and precision to every service.',
    services: ['4'],
  },
];

export const locations: SalonLocation[] = [
  {
    id: '1',
    name: 'Serenity Spa - Downtown',
    address: '123 Beauty Lane, Downtown, City 10001',
    phone: '(555) 123-4567',
    email: 'downtown@serenityspa.com',
    imageUrl: '/placeholder.svg',
    openingHours: [
      { day: 'Monday-Friday', hours: '9:00 AM - 8:00 PM' },
      { day: 'Saturday', hours: '10:00 AM - 6:00 PM' },
      { day: 'Sunday', hours: '11:00 AM - 5:00 PM' },
    ],
  },
  {
    id: '2',
    name: 'Serenity Spa - Westside',
    address: '456 Wellness Avenue, Westside, City 10002',
    phone: '(555) 987-6543',
    email: 'westside@serenityspa.com',
    imageUrl: '/placeholder.svg',
    openingHours: [
      { day: 'Monday-Friday', hours: '9:00 AM - 8:00 PM' },
      { day: 'Saturday', hours: '10:00 AM - 6:00 PM' },
      { day: 'Sunday', hours: 'Closed' },
    ],
  },
];
