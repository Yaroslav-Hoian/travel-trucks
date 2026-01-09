export interface GalleryRV {
  thumb: string;
  original: string;
}

export interface ReviewsRV {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
}

export type RVForm = "panelTruck" | "fullyIntegrated" | "alcove";

export interface RV {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;
  form: RVForm;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: string;
  engine: string;
  AC: boolean;
  bathroom: boolean;
  kitchen: boolean;
  TV: boolean;
  radio: boolean;
  refrigerator: boolean;
  microwave: boolean;
  gas: boolean;
  water: boolean;
  gallery: GalleryRV[];
  reviews: ReviewsRV[];
}

export interface RVFilterParams {
  page?: number;
  limit?: number;
  location?: string;
  form?: RVForm;
  AC?: boolean;
  bathroom?: boolean;
  kitchen?: boolean;
  TV?: boolean;
  radio?: boolean;
  refrigerator?: boolean;
  microwave?: boolean;
}

export interface IconProps {
  width: number;
  height: number;
  icon: string;
}
