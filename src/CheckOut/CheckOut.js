import React, { useState } from "react";
import { Button, Card, Form, Input, Col, Row,Divider,message } from "antd";
import { CheckOutlined,CheckCircleOutlined,UndoOutlined } from "@ant-design/icons";
import { useNavigate as UseNavigate,useLocation as UseLocation } from "react-router-dom";
import "./StyleCheckOut.css";
const { TextArea } = Input;

const CheckOut = () => {

  const Navigate = UseNavigate();
  const location = UseLocation();
  const [orderPlaced,setOrderPlaced]=useState(true);
  const [mealsData, setMealsData] = useState(location.state);

  const onOrderClick=()=>{
    message.success('ORDER PLACED!');
    setOrderPlaced(false);
  }

  const onFinish = (values) => {
    console.log('Success:', values);
    message.success('ORDER PLACED!');
    setOrderPlaced(false);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Row
      type="flex"
      justify="center"
      align="middle"
      style={{ minHeight: "100vh" }}
    >
      <Card style={{ width: "400px", height: "600px", borderWidth: "2px"}}>
        <Form layout="vertical">
          <Form.Item>
            <div style={{ textAlign: "center" }}>
              <img
                src={mealsData.strMealThumb}
                style={{
                  height: "250px",
                  width: "250px",
                  borderRadius: "10px",
                }}
              ></img>
            </div>
          </Form.Item>
          <Divider />
          <Form.Item>
            <label className="Headerlabel">PRICE DETAILS</label>
          </Form.Item>
          <Divider />
          <Form.Item>
            <Row>
              <Col span={12}>
                <label className="Titlelabel">Price</label>
              </Col>

              <Col span={12}>
                <label className="Datalabel">₹100.00</label>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item>
            <Row>
              <Col span={12}>
                <label className="Titlelabel">Discount</label>
              </Col>

              <Col span={12}>
                <label className="Datalabel" style={{ color: "green" }}>
                  -₹0.00
                </label>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item>
            <Row>
              <Col span={12}>
                <label className="Totallabel">Total Amount</label>
              </Col>

              <Col span={12}>
                <label className="Totallabel">₹100.00</label>
              </Col>
            </Row>
          </Form.Item>
        </Form>
      </Card>
      <Card
        style={{
          width: "400px",
          textAlign: "center",
          height: "600px",
          borderWidth: "2px",
        }}
      >
        <Form layout="vertical" style={{ display: orderPlaced?"block":"none"}}  onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off">
          <Form.Item>
            <label className="Headerlabel">SHIPPING ADDRESS</label>
          </Form.Item>
          <Divider />
          <Form.Item label="Name" name="Name" rules={[{ required: true, message: 'Please input your name!' }]}>
            <Input placeholder="Name" />
          </Form.Item>
          <Form.Item label="Mobile No" name="Mobile No" rules={[{ required: true, message: 'Please input your mobile number!' }]}>
            <Input placeholder="Mobile No" />
          </Form.Item>
          <Form.Item label="Address" name="Address" rules={[{ required: true, message: 'Please input your address!' }]}>
            <TextArea placeholder="Address" rows={4} />
          </Form.Item>
          <Form.Item>
            <Button icon={<CheckOutlined />} type="primary" danger htmlType="submit">
              PLACE ORDER
            </Button>
          </Form.Item>
        </Form>
        <Form layout="vertical" style={{display:!orderPlaced?"block":"none"}}>
          <Form.Item>
            <img
              className="successimg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgyobPWtA8sK4FUdJ7v2mVN1k1XYUwsy1q8A&usqp=CAU"
            ></img>
          </Form.Item>
          <Form.Item>
            <label className="Headerlabel">ORDER PLACED</label>
          </Form.Item>
          <Form.Item>
            <Button icon={<UndoOutlined />} type="primary" onClick={()=>{Navigate("/MealCard")}}>
              Redirect to Home
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Row>
  );
};

export default CheckOut;
