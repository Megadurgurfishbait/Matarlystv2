export interface Food {
  title: string;
  foodDescription: string;
  price: string;
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
