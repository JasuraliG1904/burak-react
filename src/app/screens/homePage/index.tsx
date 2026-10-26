import React from "react";
import { Container } from "@mui/material";
import "../../../css/home.css";

// export function HomePage() {
//   return <Container>HomePage</Container>;
// }
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";

export function HomePage() {
  return <div className="homepage">
    <Statistics />
    <PopularDishes />
    <NewDishes />
    <Advertisement />
    <ActiveUsers />
    <Events />
  </div>;
}