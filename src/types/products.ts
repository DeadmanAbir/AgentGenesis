export interface Product {
  id: string;
  name: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl: string;
  featured: boolean;
  details?: {
    overview: string;
    features: string[];
    techStack: string[];
    createdBy: string;
    createdAt: string;
  };
}
