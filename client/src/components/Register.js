import React, { Component } from 'react'
import {
    Form,
    Input,
    Card,
    Tooltip,
    Icon,
    Cascader,
    Col,
    Button
} from "antd";

import Profile from "./Profile"
import { Upload, message } from 'antd';

import { Layout } from 'antd';
import { render } from "react-dom";
const { Meta } = Card;
const { TextArea } = Input;

const { Header, Footer, Sider, Content } = Layout;

function Register() {
    const roles = [
        {
            value: "manager",
            label: "Manager"
        },
        {
            value: "sale",
            label: "Sale",
        },
        {
            value: "",
            label: "Sale",
        },
        {
            value: "sale",
            label: "Sale",
        },
    ];

    const departments = [
        {
            value: "business",
            label: "Business"
        },
        {
            value: "business",
            label: "Business"
        },
        {
            value: "business",
            label: "Business"
        },
        {
            value: "business",
            label: "Business"
        },
    ]

    const state = {
        firstName: "",
        lastName: "",
        preferredName: "",
        email: "",
        employeeID: "",
        password: "",
        desk: "",
        cellPhone: "",
        department: "",
        role: "",
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitted")
        document.getElementById("register-form")
    }

    const clearForm = () => {
        document.getElementById("register-form").reset();
    }

    return (
        <div>
            <Layout>
                <Content style={{}}>
                    <Form id="register-form">
                        <Col span={8} >
                            <Form.Item label="Profile Image">
                                <Profile />
                            </Form.Item>
                        </Col>

                        <Col span={8}>
                            <Form.Item label="First Name:" >
                                <Input name="firstName" />
                            </Form.Item>
                            <Form.Item label="Last Name:" >
                                <Input name="lastName" />
                            </Form.Item>
                            <Form.Item label="Preferred Name:" >
                                <Input name="preferredName" />
                            </Form.Item>
                            <Form.Item label="Email:" >
                                <Input name="email" />
                            </Form.Item>
                            <Form.Item label="Employee ID:" >
                                <Input name="employeeID" />
                            </Form.Item>
                            <Form.Item label="Password:" >
                                <Input name="password" />
                            </Form.Item>
                        </Col>

                        <Col span={8}>
                            <Form.Item label="Desk:">
                                <Input name="desk" />
                            </Form.Item>
                            <Form.Item label="Cell Phone:" >
                                <Input name="cellPhone" />
                            </Form.Item>
                            <Form.Item label="Department:" >
                                <Cascader options={departments} name="department" />
                            </Form.Item>
                            <Form.Item label="Role:" >
                                <Cascader options={roles} name="role" />
                            </Form.Item>
                            <Form.Item label="Location:" >
                                <Input name="location" />
                            </Form.Item>
                            <Form.Item label="Description:" >
                                <TextArea name="description" />
                            </Form.Item>
                        </Col>

                        <Col span={8} offset={8}>
                            <Form.Item>
                                <Button style={{ marginRight: 10 }} type="primary" htmlType="submit" onClick={clearForm}>Clear</Button>
                                <Button type="primary" htmlType="submit" onClick={handleSubmit}>Save</Button>
                            </Form.Item>
                        </Col>
                    </Form>

                </Content>
            </Layout>
        </div>
    )
}

export default Register;