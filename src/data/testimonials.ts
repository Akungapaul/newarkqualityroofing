export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Marcus Johnson',
    location: 'Newark, NJ',
    rating: 5.0,
    text: 'They replaced our entire roof after storm damage and handled everything with our insurance company. The crew was professional, on time, and left the property spotless. Could not be happier with the result.',
    service: 'Roof Replacement',
  },
  {
    name: 'Angela Morales',
    location: 'Montclair, NJ',
    rating: 5.0,
    text: 'We called for an emergency leak repair during a heavy rainstorm and they were at our door within two hours. Fast, honest, and fairly priced. They have a customer for life.',
    service: 'Emergency Roof Repair',
  },
  {
    name: 'David Chen',
    location: 'Bloomfield, NJ',
    rating: 4.5,
    text: 'Had new architectural shingles installed on our colonial home. The finished product looks incredible and they even helped us pick the right color to complement the siding. Very knowledgeable team.',
    service: 'Shingle Roof Installation',
  },
  {
    name: 'Patricia Williams',
    location: 'East Orange, NJ',
    rating: 5.0,
    text: 'After getting three estimates, Newark Quality Roofing offered the best value without cutting corners. Our flat roof had been leaking for years and now it is completely sealed. Outstanding workmanship.',
    service: 'Flat Roof Repair',
  },
  {
    name: 'Robert DeLuca',
    location: 'Belleville, NJ',
    rating: 5.0,
    text: 'They installed new gutters and downspouts along with a full gutter guard system. No more clogged gutters every fall. The install was clean and everything drains perfectly now.',
    service: 'Gutter Installation',
  },
  {
    name: 'Keisha Thompson',
    location: 'Irvington, NJ',
    rating: 4.5,
    text: 'We hired them for a roof inspection before buying our home. They found issues the home inspector missed and gave us the leverage we needed in negotiations. Thorough and honest assessment.',
    service: 'Roof Inspection',
  },
];
