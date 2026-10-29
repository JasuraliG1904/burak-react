// import React from "react";
// import { Box, Button, Container, Stack } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
// import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
// import Badge from "@mui/material/Badge";
// import Pagination from "@mui/material/Pagination";
// import PaginationItem from "@mui/material/PaginationItem";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// const products = [
//     { productName: "Cutlet", imagePath: "/img/cutlet.webp" },
//     { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
//     { productName: "Kebab", imagePath: "/img/kebab.webp" },
//     { productName: "Lavash", imagePath: "/img/lavash.webp" },
//     { productName: "Lavash", imagePath: "/img/lavash.webp" },
//     { productName: "Cutlet", imagePath: "/img/cutlet.webp" },
//     { productName: "Kebab", imagePath: "/img/kebab.webp" },
//     { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
// ];
// export default function Products() {
//     return (
//         <div className={"products"}>
//             <Container>
//                 <Stack flexDirection={"column"} alignItems={"center"}>
//                     <Stack className={"avatar-big-box"}>…
//                         </Stack>

//                     <Stack className={"dishes-filter-section"}>
//                         <Stack className={"dishes-filter-box"}>
//                             <Button
//                                 variant={"contained"}
//                                 color={"primary"}
//                                 className={"order"}
//                             >
//                                 New
//                             </Button>
//                             <Button
//                                 variant={"contained"}
//                                 color={"secondary"}
//                                 className={"order"}
//                             >
//                                 Price
//                             </Button>
//                             <Button
//                                 variant={"contained"}
//                                 color={"secondary"}
//                                 className={"order"}
//                             >
//                                 Views
//                             </Button>
//                         </Stack>
//                     </Stack>

//                     <Stack className={"list-category-section"}>
//                         <Stack className={"product-category"}>
//                             <div className={"category-main"}>
//                                 <Button variant={"contained"} color={"secondary"}>
//                                     Other
//                                 </Button>
//                                 <Button variant={"contained"} color={"secondary"}>
//                                     Dessert
//                                 </Button>
//                                 <Button variant={"contained"} color={"secondary"}>
//                                     Drink
//                                 </Button>
//                                 <Button variant={"contained"} color={"secondary"}>
//                                     Salad
//                                 </Button>
//                                 <Button variant={"contained"} color={"primary"}>
//                                     Dish
//                                 </Button>
//                             </div>
//                         </Stack>

//                         <Stack className={"product-wrapper"}>
//                             {products.length !== 0 ? (
//                                 products.map((product, index) => {
//                                     return (
//                                         <Stack key={index} className={"product-card"}>
//                                             <Stack
//                                                 className={"product-img"}
//                                                 sx={{ backgroundImage: `url(${product.imagePath})` }}
//                                             >
//                                                 <div className={"product-sale"}>Normal size</div>
//                                                 <Button className={"shop-btn"}>
//                                                     <img
//                                                         src={"/icons/shopping-cart.svg"}
//                                                         alt={"Savatga qo'shish"}
//                                                         style={{ display: "flex" }}
//                                                     />
//                                                 </Button>
//                                                 <Button className={"view-btn"} sx={{ right: "36px" }}>
//                                                     <Badge badgeContent={20} color="secondary">
//                                                         <RemoveRedEyeIcon
//                                                             sx={{
//                                                                 color: 20 ? "gray" : "white",
//                                                             }}
//                                                         />
//                                                     </Badge>
//                                                 </Button>
//                                             </Stack>
//                                             <Box className={"product-desc"}>
//                                                 <span className={"product-title"}>
//                                                     {product.productName}
//                                                 </span>
//                                                 <div className={"product-desc"}>
//                                                     <MonetizationOnIcon />
//                                                     {15}
//                                                 </div>
//                                             </Box>
//                                         </Stack>
//                                     );
//                                 })
//                             ) : (
//                                     <Box className={"no-data"}>Products are not available!</Box>
//                                 )}
//                         </Stack>

//                     </Stack>

//                     <Stack className={"pagination-section"}>
//                         <Pagination
//                             count={3}
//                             page={1}
//                             renderItem={(item) => (
//                                 <PaginationItem
//                                     components={{
//                                         previous: ArrowBackIcon,
//                                         next: ArrowForwardIcon,
//                                     }}
//                                     {...item}
//                                     color={"secondary"}
//                                 />
//                             )}
//                         />
//                     </Stack>
//                 </Stack>
//             </Container>

//             <div className={"brands-logo"}>
//                 <Container className="family-brands">
//                     <Box className="category-title">Our Family Brands</Box>
//                     <Stack className="brand-list">
//                         <Box className="review-box">
//                             <img src="/img/gurme.webp" alt="" />
//                         </Box>
//                         <Box className="review-box">
//                             <img src="/img/gurme.webp" alt="" />
//                         </Box>
//                         <Box className="review-box">
//                             <img src="/img/gurme.webp" alt="" />
//                         </Box>
//                         <Box className="review-box">
//                             <img src="/img/gurme.webp" alt="" />
//                         </Box>
//                     </Stack>
//                 </Container>
//             </div>

//             <div className={"address"}>
//                 <Container>
//                     <Stack className={"address-area"}>
//                         <Box className={"title"}>Our address</Box>
//                         <iframe
//                             style={{ marginTop: "60px" }}
//                             // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.363734762081!2d69.2267250514616!3d41.322703307863044!2m3!1f0!2f0!3f0!3m2!1i1024!2"
//                             width="1320"
//                             height="500"
//                             referrerPolicy="no-referrer-when-downgrade"
//                         ></iframe>
//                     </Stack>
//                 </Container>
//             </div>
//         </div>
//     );
// }


import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Box, Button, Container, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Badge from "@mui/material/Badge";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// ChosenProduct ham shu turdan foydalanadi (state orqali keladi)
export interface ProductItem {
  id: string;
  productName: string;
  imagePath: string;
  images: string[];
  price: number;
  views: number;
}

const products: ProductItem[] = [
  { id: "1", productName: "Cutlet", imagePath: "/img/cutlet.webp", images: ["/img/cutlet.webp", "/img/kebab-fresh.webp"], price: 12, views: 20 },
  { id: "2", productName: "Kebab", imagePath: "/img/kebab-fresh.webp", images: ["/img/kebab-fresh.webp", "/img/kebab.webp"], price: 12, views: 20 },
  { id: "3", productName: "Kebab", imagePath: "/img/kebab.webp", images: ["/img/kebab.webp", "/img/kebab-fresh.webp"], price: 12, views: 20 },
  { id: "4", productName: "Lavash", imagePath: "/img/lavash.webp", images: ["/img/lavash.webp", "/img/cutlet.webp"], price: 12, views: 20 },
  { id: "5", productName: "Lavash", imagePath: "/img/lavash.webp", images: ["/img/lavash.webp", "/img/kebab.webp"], price: 12, views: 20 },
  { id: "6", productName: "Cutlet", imagePath: "/img/cutlet.webp", images: ["/img/cutlet.webp", "/img/lavash.webp"], price: 12, views: 20 },
  { id: "7", productName: "Kebab", imagePath: "/img/kebab.webp", images: ["/img/kebab.webp", "/img/cutlet.webp"], price: 12, views: 20 },
  { id: "8", productName: "Kebab", imagePath: "/img/kebab-fresh.webp", images: ["/img/kebab-fresh.webp", "/img/lavash.webp"], price: 12, views: 20 },
];

const orders = ["New", "Price", "Views"];
// JSX tartibi Other → Dish; CSS dagi column-reverse tufayli Dish tepada chiqadi
const categories = ["Other", "Dessert", "Drink", "Salad", "Dish"];

const MAP_SRC =
  "https://www.google.com/maps?q=41.322703,69.226725&z=15&output=embed";

export default function Products() {
  const history = useHistory();
  const [order, setOrder] = useState<string>("New");
  const [category, setCategory] = useState<string>("Dish");
  const [page, setPage] = useState<number>(1);
  const [searchText, setSearchText] = useState<string>("");

  const chooseProductHandler = (product: ProductItem) => {
    history.push(`/products/${product.id}`);
  };

  return (
    <div className={"products"}>
      <Container>
        <Stack flexDirection={"column"} alignItems={"center"}>
          {/* ---------- Sarlavha + qidiruv ---------- */}
          <Stack className={"avatar-big-box"}>
            <Box className={"title"}>Burak Restaurant</Box>
            <Stack className={"single-search-big-box"}>
              <input
                className={"single-search-input"}
                type={"search"}
                placeholder={"Type here"}
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <Button
                className={"single-search-button"}
                variant={"contained"}
                color={"primary"}
                endIcon={<SearchIcon />}
              >
                Search
              </Button>
            </Stack>
          </Stack>

          {/* ---------- NEW / PRICE / VIEWS ---------- */}
          <Stack className={"dishes-filter-section"}>
            <Stack className={"dishes-filter-box"}>
              {orders.map((o) => (
                <Button
                  key={o}
                  variant={"contained"}
                  color={order === o ? "primary" : "secondary"}
                  className={"order"}
                  onClick={() => setOrder(o)}
                >
                  {o}
                </Button>
              ))}
            </Stack>
          </Stack>

          {/* ---------- Kategoriyalar + mahsulotlar ---------- */}
          <Stack className={"list-category-section"}>
            <Stack className={"product-category"}>
              <div className={"category-main"}>
                {categories.map((c) => (
                  <Button
                    key={c}
                    variant={"contained"}
                    color={category === c ? "primary" : "secondary"}
                    onClick={() => setCategory(c)}
                  >
                    {c}
                  </Button>
                ))}
              </div>
            </Stack>

            <Stack className={"product-wrapper"}>
              {products.length !== 0 ? (
                products.map((product) => (
                  <Stack key={product.id} className={"product-card"}>
                    <Stack
                      className={"product-img"}
                      sx={{
                        backgroundImage: `url(${product.imagePath})`,
                        cursor: "pointer",
                      }}
                      onClick={() => chooseProductHandler(product)}
                    >
                      <div className={"product-sale"}>Normal size</div>

                      {/* joylashuvi (right) CSS da berilgan */}
                      <Button
                        className={"shop-btn"}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <img
                          src={"/icons/shopping-cart.svg"}
                          alt={"Savatga qo'shish"}
                        />
                      </Button>

                      <Button
                        className={"view-btn"}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Badge badgeContent={product.views} color="secondary">
                          <RemoveRedEyeIcon
                            sx={{
                              color: product.views ? "gray" : "white",
                            }}
                          />
                        </Badge>
                      </Button>
                    </Stack>

                    <Box className={"product-desc"}>
                      <span className={"product-title"}>
                        {product.productName}
                      </span>
                      <div className={"product-price"}>
                        <MonetizationOnIcon />
                        {product.price}
                      </div>
                    </Box>
                  </Stack>
                ))
              ) : (
                <Box className={"no-data"}>Products are not available!</Box>
              )}
            </Stack>
          </Stack>

          {/* ---------- Pagination (ortada) ---------- */}
          <Stack className={"pagination-section"}>
            <Pagination
              count={3}
              page={page}
              onChange={(_, value) => setPage(value)}
              renderItem={(item) => (
                <PaginationItem
                  components={{
                    previous: ArrowBackIcon,
                    next: ArrowForwardIcon,
                  }}
                  {...item}
                  color={"secondary"}
                />
              )}
            />
          </Stack>
        </Stack>
      </Container>

      {/* ---------- Our Family Brands ---------- */}
      <div className={"brands-logo"}>
        <Container className="family-brands">
          <Box className="category-title">Our Family Brands</Box>
          <Stack className="brand-list">
            {[1, 2, 3, 4].map((n) => (
              <Box key={n} className="review-box">
                <img src="/img/gurme.webp" alt={`Family brand ${n}`} />
              </Box>
            ))}
          </Stack>
        </Container>
      </div>

      {/* ---------- Our address ---------- */}
      <div className={"address"}>
        <Container>
          <Stack className={"address-area"}>
            <Box className={"title"}>Our address</Box>
            <iframe
              title="Restoran joylashuvi xaritasi"
              style={{
                marginTop: "60px",
                width: "100%",
                maxWidth: "1320px",
                border: 0,
              }}
              src={MAP_SRC}
              height="500"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Stack>
        </Container>
      </div>
    </div>
  );
}

