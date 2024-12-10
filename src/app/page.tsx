import Image from "next/image";

import React from "react";
import TopHeader from "./components/topHeader";
import Header from "./components/header";
import Hero from "./components/Hero" ;
import ShopCard from "./components/shopCard";
import ProductCard from "./components/card";
import CardText from "./components/card";
import Uni from "./components/cart";
import Universe from "./components/shop";
import Blog from "./components/featuredPost";
import Footer from "./components/footer";
export default function Home(){
  return(
    <div>
      <TopHeader />
      <Header />
     <Hero/>
     <ShopCard/>
<ProductCard/>
<Uni/>
     <Universe/>
<Blog/>
<Footer/>
  </div>
  )
}