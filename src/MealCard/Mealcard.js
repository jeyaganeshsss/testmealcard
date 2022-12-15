import { React, useState, useEffect } from "react";
import axiosInstance from "../api/axiosConfig";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Avatar, Card, Button, Input, Empty } from "antd";
import { useNavigate as UseNavigate,useLocation as UseLocation } from "react-router-dom";
import "./StyleMealCard.css";
import Item from "antd/es/list/Item";

const { Meta } = Card;
const { Search } = Input;


const MealCard = () => {
  const Navigate = UseNavigate();
  
  const [mealsData, setMealsData] = useState([{}]);
  const [mealText, setMealText] = useState("");

  const onSearch = (value) => {
    setMealText(value);
  };
  useEffect(() => {
    fetchData();
  }, [mealText]);

  const fetchData = async (val) => {
    try {
      await axiosInstance.get("/search.php?s=" + mealText).then((response) => {
        setMealsData(
          response.data.meals ? response.data.meals.slice(0, 10) : null
        );
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  const onCardClick=(e)=>{
    let index=e.currentTarget.getAttribute('ival')
    e.stopPropagation();
    
     let arrMeal=mealsData[index];
     console.log(arrMeal);
    Navigate("/Shipping",{state:arrMeal});
  }

  const onBuyClick = (e) => {
    let index=e.currentTarget.getAttribute('ival')
    e.stopPropagation();
    
     let arrMeal=mealsData[index];
     console.log(arrMeal);
    Navigate("/CheckOut",{state:arrMeal});
  };
  

  const EmptyElement = <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;
  const CardElement = mealsData
    ? mealsData.map((Item, i) => {
      // console.log(Item.idMeal,i)
        return (
          <Card
            hoverable
            ival={i}
            className="containerStyle"
            cover={
              <img key={Item.idMeal} alt="example" src={Item.strMealThumb} />
            }
            
            actions={[
              
              <Button
                ival={i}
                type="primary"
                shape="round"
                icon={<ShoppingCartOutlined />}
                size="middle"
                onClick={onBuyClick}
              >
                Buy
              </Button>,
            ]}
            onClick={onCardClick}
          >
            <Meta
              key={Item.idMeal}
              avatar={
                <Avatar src="https://img.freepik.com/premium-vector/chef-restaurant-avatar-cartoon-illustration_1951-375.jpg?w=2000" />
              }
              title={Item.strMeal}
              description={Item.strCategory}
            />
          </Card>
        );
      })
    : EmptyElement;

  return (
    <>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Search
          id="txtSearch"
          style={{ width: "400px" }}
          className="CommentBox"
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={onSearch}
        />
      </div>
      <div className="mainContainer">{CardElement}</div>
    </>
  );
};

export default MealCard;
