import { Member } from "./member";
import { Product } from "./product";

// React App State
export interface AppRootState {
  homePage: HomePageState;
  productsPage: ProductsPageState;
  //   memberPage: MemberPageState;
  //   orderPage: OrderPageState;
}
// Home Page State
export interface HomePageState {
  popularDishes: Product[];
  newDishes: Product[];
  topUsers: Member[];
}
// Product Page State
export interface ProductsPageState {
  restaurant: Member | null;
  chosenProduct: Product | null;
  products: Product[];
}

// Order Page State
