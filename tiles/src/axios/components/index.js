import React from "react";
import { Card } from "antd";
//const { Meta } = Card;
import { Button, Row, Col } from "antd";
import {LikeOutlined, ShareAltOutlined} from '@ant-design/icons';



export default function Tiles({ profileData }) {
    return (
        <div style={{ width: "300",textAlign:"center" }}>
            <div style={{ width: 350, height: 500, margin: "10px", backgroundColor: "#B6EDEA", textAlign: "left" }}>
                <img style={{ borderRadius: "50%", backgroundColor: "green" }}
                    width="70"
                    height="70"
                    alt="example"
                    src={profileData.suburl}

                />

                <span style={{ color: "red", fontSize: "16px" }}>
                    {profileData.uname}
                </span>


                <Card
                    hoverable
                    style={{ width: 330, margin: "10px",borderRadius:"25px" }}
                    cover={
                        <img
                            border="2px solid #73AD21"
                            padding="20px"
                            width="300"
                            height="300"
                            alt="example"
                            src={profileData.url}
                        />
                    }
                >

                    {/* <Meta
                    //title={profileData.uname}
                    //description={profileData.url}
                    //description={`Age: ${profileData.employee_age} - Salary: ${profileData.employee_salary}`}
                /> */}
                </Card>
                <div>
                    <Row>
                    
                        <Col span={8}><Button type="link"><LikeOutlined />Like</Button></Col>
                        <Col span={8}><Button type="link"><ShareAltOutlined />Share</Button></Col>
                        <Col span={8}><Button type="link">Comment</Button></Col>
                    </Row>  
                </div>
            </div>

        </div>
    );
}
