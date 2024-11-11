import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Card from "../component/Card";
import Footer from "../component/Footer";
import Between from "../component/Between";

const Home = () => {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    try {
      let response = await fetch("http://localhost:4000/api/foodData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      response = await response.json();
      console.log("Response from server:", response);
      setFoodItem(response[1]);
      setFoodCat(response[1]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  console.log("Food Categories:", foodCat);
  console.log("Food Items:", foodItem);

  return (
    <div>
      <Navbar />
      <Between />

      <div className="container">
        {foodCat.length !== 0 ? (
          foodCat.map((data) => {
            console.log("Category Name:", data.CategoryName);
            return (
              <div className="row mb-3" key={data._id}>
                <div className="fs-3 m-3">{data.CategoryName}</div>
                <hr />
                {foodItem.length !== 0 ? (
                  foodItem
                    .filter((item) => {
                      console.log("Filtering by category:", item.CategoryName);
                      return item.CategoryName === data.CategoryName;
                    })
                    .map((filterItems) => {
                      console.log("Filtered Item:", filterItems);
                      return (
                        <div
                          key={filterItems._id}
                          className="col-12 col-md-6 col-lg-3"
                        >
                          <Card
                            foodName={filterItems.name}
                            options={filterItems.options}
                            imgSrc={filterItems.img}
                          />
                        </div>
                      );
                    })
                ) : (
                  <div>No Data Found</div>
                )}
              </div>
            );
          })
        ) : (
          <div>Loading Categories...</div>
        )}
      </div>
    </div>
  );
};

export default Home;
