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

import React, { ChangeEvent, useEffect, useState } from "react";
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

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { setProducts } from "./slice";
import { retrieveProducts } from "./selector";
import { Product, ProductInquiry } from "../../../lib/types/product";

import "../../../css/home.css";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../lib/enums/product.enum";
import { serverApi } from "../../../lib/config";
import { CartItem } from "../../../lib/types/search";

/** REDUX SLICE & SELECTOR **/
const actionDispatch = (dispatch: Dispatch) => ({
  // setRestaurant: (data: Product[]) => dispatch(setRestaurant(data)),
  setProducts: (data: Product[]) => dispatch(setProducts(data)),
});

const productsRetriver = createSelector(retrieveProducts, (products) => ({
  products,
}));

interface ProductsProps {
  onAdd: (item: CartItem) => void;
}

// ChosenProduct ham shu turdan foydalanadi (state orqali keladi)
export interface ProductItem {
  id: string;
  productName: string;
  imagePath: string;
  images: string[];
  price: number;
  views: number;
}

// const products: ProductItem[] = [
//   {
//     id: "1",
//     productName: "Cutlet",
//     imagePath: "/img/cutlet.webp",
//     images: ["/img/cutlet.webp", "/img/kebab-fresh.webp"],
//     price: 12,
//     views: 20,
//   },
//   {
//     id: "2",
//     productName: "Kebab",
//     imagePath: "/img/kebab-fresh.webp",
//     images: ["/img/kebab-fresh.webp", "/img/kebab.webp"],
//     price: 12,
//     views: 20,
//   },
//   {
//     id: "3",
//     productName: "Kebab",
//     imagePath: "/img/kebab.webp",
//     images: ["/img/kebab.webp", "/img/kebab-fresh.webp"],
//     price: 12,
//     views: 20,
//   },
//   {
//     id: "4",
//     productName: "Lavash",
//     imagePath: "/img/lavash.webp",
//     images: ["/img/lavash.webp", "/img/cutlet.webp"],
//     price: 12,
//     views: 20,
//   },
//   {
//     id: "5",
//     productName: "Lavash",
//     imagePath: "/img/lavash.webp",
//     images: ["/img/lavash.webp", "/img/kebab.webp"],
//     price: 12,
//     views: 20,
//   },
//   {
//     id: "6",
//     productName: "Cutlet",
//     imagePath: "/img/cutlet.webp",
//     images: ["/img/cutlet.webp", "/img/lavash.webp"],
//     price: 12,
//     views: 20,
//   },
//   {
//     id: "7",
//     productName: "Kebab",
//     imagePath: "/img/kebab.webp",
//     images: ["/img/kebab.webp", "/img/cutlet.webp"],
//     price: 12,
//     views: 20,
//   },
//   {
//     id: "8",
//     productName: "Kebab",
//     imagePath: "/img/kebab-fresh.webp",
//     images: ["/img/kebab-fresh.webp", "/img/lavash.webp"],
//     price: 12,
//     views: 20,
//   },
// ];

const orders = ["New", "Price", "Views"];
// JSX tartibi Other → Dish; CSS dagi column-reverse tufayli Dish tepada chiqadi
const categories = ["Other", "Dessert", "Drink", "Salad", "Dish"];

const MAP_SRC =
  "https://www.google.com/maps?q=41.322703,69.226725&z=15&output=embed";

export default function Products(props:ProductsProps) {
  const {onAdd} =props;
  const history = useHistory();
  const [order, setOrder] = useState<string>("New");
  const [category, setCategory] = useState<string>("Dish");
  const [page, setPage] = useState<number>(1);
  const [searchText, setSearchText] = useState<string>("");

  const chooseProductHandler = (product: ProductItem) => {
    history.push(`/products/${product.id}`);
  };
  const { setProducts } = actionDispatch(useDispatch());
  const { products } = useSelector(productsRetriver);
  const [productSearch, setProductSearch] = useState<ProductInquiry>({
    page: 1,
    limit: 2,
    order: "createdAt",
    productCollection: ProductCollection.DISH,
    search: "",
  });

  useEffect(() => {
    const product = new ProductService();
    product
      .getProducts(productSearch)
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, [productSearch]);

  useEffect(() => {
    if (searchText === "") {
      productSearch.search = "";
      setProductSearch({ ...productSearch });
    }
  }, [searchText]);

  /** HANDLERS **/
  const searchCollectionHandler = (collection: ProductCollection) => {
    productSearch.page = 1;
    productSearch.productCollection = collection;
    setProductSearch({ ...productSearch });
  };

  const searchOrderHandler = (order: string) => {
    productSearch.page = 1;
    productSearch.order = order;
    setProductSearch({ ...productSearch });
  };

  const searchProductHandler = () => {
    productSearch.page = 1;
    productSearch.search = searchText;
    setProductSearch({ ...productSearch });
  };

  const paginationHandler = (e: ChangeEvent<any>, value: number) => {
    productSearch.page = value;
    setProductSearch({ ...productSearch });
  };
  const chooseDishHandler = (id: string) => {
    console.log("productId:", id);
    history.push(`/products/${id}`);
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
                onKeyDown={(e) => {
                  if (e.key === "Enter") searchProductHandler();
                }}
              />
              <Button
                className={"single-search-button"}
                variant={"contained"}
                color={"primary"}
                endIcon={<SearchIcon />}
                onClick={searchProductHandler}
              >
                Search
              </Button>
            </Stack>
          </Stack>

          {/* ---------- NEW / PRICE / VIEWS ---------- */}
          <Stack className={"dishes-filter-section"}>
            <Stack className={"dishes-filter-box"}>
              <Button
                variant={"contained"}
                className={"order"}
                color={
                  productSearch.order === "createdAt" ? "primary" : "secondary"
                }
                onClick={() => searchOrderHandler("createdAt")}
              >
                New
              </Button>
              <Button
                variant={"contained"}
                className={"order"}
                color={
                  productSearch.order === "productPrice"
                    ? "primary"
                    : "secondary"
                }
                onClick={() => searchOrderHandler("productPrice")}
              >
                Price
              </Button>
              <Button
                variant={"contained"}
                className={"order"}
                color={
                  productSearch.order === "productViews"
                    ? "primary"
                    : "secondary"
                }
                onClick={() => searchOrderHandler("productViews")}
              >
                Views
              </Button>
            </Stack>
          </Stack>

          {/* ---------- Kategoriyalar + mahsulotlar ---------- */}
          <Stack className={"list-category-section"}>
            <Stack className={"product-category"}>
              <div className={"category-main"}>
                <Button
                  variant={"contained"}
                  color={
                    productSearch.productCollection === ProductCollection.OTHER
                      ? "primary"
                      : "secondary"
                  }
                  onClick={() =>
                    searchCollectionHandler(ProductCollection.OTHER)
                  }
                >
                  Other
                </Button>
                <Button
                  variant={"contained"}
                  color={
                    productSearch.productCollection ===
                    ProductCollection.DESSERT
                      ? "primary"
                      : "secondary"
                  }
                  onClick={() =>
                    searchCollectionHandler(ProductCollection.DESSERT)
                  }
                >
                  Dessert
                </Button>
                <Button
                  variant={"contained"}
                  color={
                    productSearch.productCollection === ProductCollection.DRINK
                      ? "primary"
                      : "secondary"
                  }
                  onClick={() =>
                    searchCollectionHandler(ProductCollection.DRINK)
                  }
                >
                  Drink
                </Button>
                <Button
                  variant={"contained"}
                  color={
                    productSearch.productCollection === ProductCollection.SALAD
                      ? "primary"
                      : "secondary"
                  }
                  onClick={() =>
                    searchCollectionHandler(ProductCollection.SALAD)
                  }
                >
                  Salad
                </Button>
                <Button
                  variant={"contained"}
                  color={
                    productSearch.productCollection === ProductCollection.DISH
                      ? "primary"
                      : "secondary"
                  }
                  onClick={() =>
                    searchCollectionHandler(ProductCollection.DISH)
                  }
                >
                  Dish
                </Button>
              </div>
            </Stack>

            <Stack className="product-wrapper">
              {products.length !== 0 ? (
                products.map((product: Product) => {
                  const imagePath = `${serverApi}/${product.productImages[0]}`;
                  const sizeVolume =
                    product.productCollection === ProductCollection.DRINK
                      ? product.productVolume + " litre"
                      : product.productSize + " size";
                  return (
                    <Stack
                      key={product._id}
                      className="product-card"
                      onClick={() => chooseDishHandler(product._id)}
                    >
                      <Stack
                        className="product-img"
                        sx={{ backgroundImage: `url(${imagePath})` }}
                      >
                        <div className="product-sale">{sizeVolume}</div>
                        <Button className="shop-btn"
                        onClick={(e)=>{
                          console.log("BUTTON PRESSED");
                          onAdd({
                            _id:product._id,
                            quantity:1,
                            name:product.productName,
                            price:product.productPrice,
                            image:product.productImages[0],
                          })
                          e.stopPropagation()
                        }}
                        >
                          <img
                            src="/icons/shopping-cart.svg"
                            alt=""
                            style={{ display: "flex" }}
                          />
                        </Button>
                        <Button className="view-btn">
                          <Badge
                            badgeContent={product.productViews}
                            color="primary"
                          >
                            <RemoveRedEyeIcon
                              sx={{
                                color:
                                  product.productViews === 0 ? "gray" : "white",
                              }}
                            />
                          </Badge>
                        </Button>
                      </Stack>
                      <Box className="product-desc">
                        <span className="product-title">
                          {product.productName}
                        </span>
                        <div className="product-price">
                          <MonetizationOnIcon />
                          {product.productPrice.toFixed(2)} $
                        </div>
                      </Box>
                    </Stack>
                  );
                })
              ) : (
                <Box className="no-data">Products are not available!</Box>
              )}
            </Stack>
          </Stack>

          {/* ---------- Pagination (ortada) ---------- */}
          <Stack className={"pagination-section"}>
            <Pagination
              count={
                products.length !== 0
                  ? productSearch.page + 1
                  : productSearch.page
              }
              page={productSearch.page}
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
              onChange={paginationHandler}
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
