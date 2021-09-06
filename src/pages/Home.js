import React from "react";

import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import Services from "../components/Homepage/Services";
import Featured from "../components/Homepage/Featured";
export default function Home() {
  return (
    <>
      <Hero title="ang pogi mo" max="false">
        <Link to="/products" className="main-link" style={{ margin: "2rem" }}>
          our products
        </Link>
      </Hero>
      <Services />
      <Featured />
    </>
  );
}
