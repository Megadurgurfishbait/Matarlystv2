export interface Food {
  title?: string;
  Ingred?: string;
  price?: string;
  numero?: string;
}

export interface CarouselProps {
  images: string[];
  seconds: number;
  fill?: boolean;
}

export interface LayoutProps {
  PhotoContainer?: JSX.Element;
  TextContainer?: JSX.Element;
}

export interface FoodListProps {
  List: Food[];
}

export interface Matsedill {
  [key: string]: Food[];
}
