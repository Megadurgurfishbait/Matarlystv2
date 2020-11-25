export interface Food {
  title?: string;
  Ingred?: string;
  price?: string;
  numero?: string;
}

export interface Drink {
  title: string;
  price?: string;
  price2?: string;
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

export interface Map {
  [key: string]: Food[] | Drink[];
}

export type Type = Food & Drink;

export interface MenuTabProps {
  Map: Map;
  MapType: 'Drykkir' | 'Matur';
}
