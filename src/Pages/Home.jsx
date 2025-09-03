import React from "react";
import Hero from "../Components/Home/Hero";
import Home_Products from "../Components/Home/Home_Products";
import About from "../Components/Home/About";
import Features from "../Components/Home/Features";
import Counter from "../Components/Home/Counter";
import Quote from "../Components/Home/Quote";

export default function Home() {
  return (
    <div>
      <Hero />
      <Home_Products />
      <About />
      <Features />
      <Counter />
      <Quote />
    </div>
  );
}
