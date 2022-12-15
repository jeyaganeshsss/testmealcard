import { React, useState, useEffect } from "react";
import { Button, Descriptions, Space, Row, Card, Divider,Col } from "antd";
import { ShoppingCartOutlined, LeftOutlined } from "@ant-design/icons";
import { useNavigate as UseNavigate,useLocation as UseLocation } from "react-router-dom";
import "./StyleShipping.css";
const { Meta } = Card;
function Shipping() {

  const Navigate = UseNavigate();
  const location = UseLocation();
  const [size, setSize] = useState("default");
  const [mealsData, setMealsData] = useState(location.state);

  const onChange = (e) => {
    console.log("size checked", e.target.value);
    setSize(e.target.value);
  };
  const onBackClick=(e)=>{
    Navigate("/MealCard");
  }

  const onBuyClick = (e) => {
    // let index=e.currentTarget.getAttribute('ival')
    // // e.stopPropagation();
    
    //  let arrMeal=mealsData[index];
    //  console.log(arrMeal);
    Navigate("/CheckOut",{state:mealsData});
  };
  return (
    <Row
      type="flex"
      justify="center"
      align="middle"
      style={{ minHeight: "100vh" }}
    >
      <Card>
        <Row>
          <Col span={12}>
          <Card
          hoverable
          style={{
            width: 240,
            border:"none"
          }}
          cover={
            <img
              alt="example"
              src={mealsData.strMealThumb}
            />
          }
        >
          <Meta title={mealsData.strMeal} />
          <Divider />
          <Space wrap>
            <Button icon={<LeftOutlined />} id="btnBack" type="primary" onClick={onBackClick}>
              Back
            </Button>
            <Button icon={<ShoppingCartOutlined />} id="btnBuy" type="primary" onClick={onBuyClick}>
              Buy
            </Button>
          </Space>
          
        </Card>
          </Col>
          <Col span={12}>
          
          <p style={{width:"300px"}}>
          {mealsData.strInstructions}
          </p>
       

          </Col>
        </Row>
       
      </Card>
    </Row>
  );
}

export default Shipping;
