import { Member } from "./member";
import { Product } from "./product";

// React App State
export interface AppRootState {
  homePage: HomePageState;
//   productPage: ProductPageState;
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

// Order Page State