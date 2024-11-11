import React from "react";

const Card = (props) => {
  let options = props.options;
  let priceOptions = Object.keys(options);

  return (
    <div>
      <div className="card mt-3" style={{ width: "18rem" }}>
        <img
          data-chromatic="ignore"
          src={props.imgSrc}
          className="Dx12RubSbJ7ka4288okt"
          alt="recently viewed asset"
        />
        <div className="card-body">
          <h5 className="card-title">{props.foodName}</h5>
          <p className="card-text">This is important message</p>
          <div className="w-100">
            <select className="m-2 h-100 bg-success rounded">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select className="m-2 h-100 bg-success rounded">
              {priceOptions.map((data) => {
                return <option key={data} value={data}></option>;
              })}
            </select>
            <div className="d-inline h-100 fs-5">Total Price</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
