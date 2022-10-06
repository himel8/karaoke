import React from "react";
import Category from "../components/Home/Category/Category";
import Footer from "../components/Home/Footer/Footer";
import HeroSection from "../components/Home/HeroSection/HeroSection";
import ImageGallery from "../components/Home/ImageGallery/ImageGallery";
import Newslatter from "../components/Home/Newslatter/Newslatter";
import ProductCategory from "../components/Home/ProductCategory/ProductCategory";
import Products from "../components/Home/Products/Products";
import Testimonial from "../components/Home/Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <HeroSection />
      <main className="bg-main pb-20">
        <ProductCategory />
        <ImageGallery />
        {/* <TimeCard /> */}
        <Category />
        <Products />
        <Testimonial />
        <Newslatter />
      </main>
      <Footer />
    </>
  );
};

export default Home;
