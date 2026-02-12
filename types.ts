
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Technology {
  id: string;
  name: string;
  description: string;
  benefits: string[];
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
}
