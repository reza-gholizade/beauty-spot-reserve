
export type ServiceCategory = 'facial' | 'massage' | 'hair' | 'nails' | 'makeup' | 'body';

export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: number; // in minutes
  category: ServiceCategory;
  image: string;
}

export interface Specialist {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  services: string[]; // service ids
}

export interface Appointment {
  id: string;
  customerId: string;
  serviceId: string;
  specialistId: string;
  date: string; // ISO date string
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
}

export interface SalonLocation {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  imageUrl: string;
  openingHours: {
    day: string;
    hours: string;
  }[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role: 'customer' | 'admin' | 'staff';
  appointments?: string[]; // appointment ids
}
