import React, { useState } from 'react';

import classNames from "classnames/bind";
import style from "./Register.css"
import {
    Form,
    Input,
    Card,
    Tooltip,
    Icon,
    Cascader,
    Col,
    Button,
} from "antd";

import Profile from "../../components/Profile"
import { Upload, message } from 'antd';
import { Layout } from 'antd';
import { render } from "react-dom";
import "../Register/Register.css"

const { Meta } = Card;
const { TextArea } = Input;

const { Header, Footer, Sider, Content } = Layout;
const cx = classNames.bind(style)

function Register() {
    const roles = [
        {
            value: "manager",
            label: "Manager"
        }
    ];

    const departments = [
        {
            value: "business",
            label: "Business"
        }
    ]

    const [values, setValues] = useState ({
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
        location: "",
        description: ""
    });

    const { firstName, lastName, preferredName, email, employeeID, password, desk, cellPhone, department, role, location, description } = values;

    const handleChange = name => event => {
        setValues({...values, error: false, [name]: event.target.value})
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setValues({...values, error: false});

        console.log("Submitted")
        document.getElementById("register-form")
    }

    const clearForm = () => {
        document.getElementsByID("register-form").reset();
        console.log(document.getElementById())
    }

    return (
        <div className={cx('Resgister')}>
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
                            <Form.Item id="register-form" label="First Name:" >
                                <Input name="firstName"
                                // value={this.state.firstName}
                                onChange={handleChange('firstName')} 
                                value={firstName}
                                />
                            </Form.Item>
                            <Form.Item label="Last Name:" >
                                <Input name="lastName" 
                                onChange={handleChange('lastName')} 
                                value={lastName}/>
                            </Form.Item>
                            <Form.Item label="Preferred Name:" >
                                <Input name="preferredName" 
                                onChange={handleChange('preferredName')} 
                                value={preferredName}
                                />
                            </Form.Item>
                            <Form.Item label="Email:" >
                                <Input name="email" 
                                onChange={handleChange('email')} 
                                value={email}
                                />
                            </Form.Item>
                            <Form.Item label="Employee ID:" >
                                <Input name="employeeID" 
                                onChange={handleChange('employeeID')} 
                                value={employeeID}
                                />
                            </Form.Item>
                            <Form.Item label="Password:" >
                                <Input name="password" 
                                onChange={handleChange('password')} 
                                value={password}
                                />
                            </Form.Item>
                        </Col>

                        <Col span={8}>
                            <Form.Item label="Desk:">
                                <Input name="desk"
                                onChange={handleChange('desk')} 
                                value={desk}
                                />
                            </Form.Item>
                            <Form.Item label="Cell Phone:" >
                                <Input name="cellPhone" 
                                onChange={handleChange('cellPhone')} 
                                value={cellPhone}
                                />
                            </Form.Item>
                            <Form.Item label="Department:" >
                                <Cascader options={departments} name="department" />
                            </Form.Item>
                            <Form.Item label="Role:" >
                                <Cascader options={roles} name="role" />
                            </Form.Item>
                            <Form.Item label="Location:" >
                                <Input name="location" 
                                onChange={handleChange('location')} 
                                value={location}
                                />
                            </Form.Item>
                            <Form.Item label="Description:" >
                                <TextArea name="description" 
                                value={description}
                                />
                            </Form.Item>
                        </Col>

                        <Col span={8} offset={16}>
                            <Form.Item>
                                <Button style={{ marginRight: 10 }} type="primary" htmlType="submit" onClick={clearForm}>Clear</Button>
                                <Button type="primary" htmlType="submit" onClick={handleSubmit}>Save</Button>
                            </Form.Item>
                        </Col>
                    </Form>

                </Content>
            </Layout>
        </div>
        </div>
    )
}

export default Register;