interface Food {
  title: string;
  food_description: string;
  price: string;
}

interface Carousel {
  images: string[];
  seconds: number;
  fill?: boolean;
}

interface Layout {
  PhotoContainer?: JSX.Element;
  TextContainer?: JSX.Element;
}

interface FoodList {
  List: Food[];
}
