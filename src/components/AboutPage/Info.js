import React from "react";
import Title from "../Title";
import aboutBcg from "../../images/aboutBcg.jpeg";
export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <img
              src={aboutBcg}
              alt="about company"
              className="img-fluid img-thumbnail"
              style={{ background: "var(--darkGray)" }}
            />
          </div>
          <div className="col-10 mx-auto col-md-6">
            <Title title="about us" />
            <p className="text-lead text-muted my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              debitis cumque, obcaecati eum facilis tempore accusantium quisquam
              odit nobis dolores illo alias dolorem rerum, doloremque inventore
              quasi rem, quia assumenda.
            </p>
            <p className="text-lead text-muted my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              debitis cumque, obcaecati eum facilis tempore accusantium quisquam
              odit nobis dolores illo alias dolorem rerum, doloremque inventore
              quasi rem, quia assumenda.
            </p>
            <button className="main-link" style={{ marginTop: "2rem" }}>
              more info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
