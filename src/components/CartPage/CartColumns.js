import React from "react";

export default function CartColumns() {
  return (
    <div className="container-fluid text-center d-none d-lg-block my-5">
      <div className="row">
        {/* single column product */}
        <div className="col-lg-2">
          <p className="text-uppercase">products</p>
        </div>
        {/* end of single column product*/}

        {/* single column product name*/}
        <div className="col-lg-2">
          <p className="text-uppercase">products name</p>
        </div>
        {/* end of single column product name*/}

        {/* single column price*/}
        <div className="col-lg-2">
          <p className="text-uppercase">price</p>
        </div>
        {/* end of single column price*/}

        {/* single column quantity */}
        <div className="col-lg-2">
          <p className="text-uppercase">quantity</p>
        </div>
        {/* end of single column quantity*/}

        {/* single column remove */}
        <div className="col-lg-2">
          <p className="text-uppercase">remove</p>
        </div>
        {/* end of single column remove*/}

        {/* single column total */}
        <div className="col-lg-2">
          <p className="text-uppercase">total</p>
        </div>
        {/* end of single column total*/}
      </div>
    </div>
  );
}
