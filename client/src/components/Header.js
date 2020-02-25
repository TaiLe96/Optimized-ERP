import React from 'react';
import 'antd/dist/antd.css';
import { PageHeader } from 'antd';

<<<<<<< HEAD
import image from "../assets/images/header.jpg";

function Header() {
    return (
        <PageHeader
            style={{
                border: '1px solid rgb(235, 237, 240)',
                height: 100,
                // backgroundImage: `url(${image})`
                backgroundColor: "teal"
            }}
            title="Optimized-ERP"
        />
    )
=======
function Header() {
  return (
    <PageHeader
      style={{
        border: '1px solid rgb(235, 237, 240)',
        height: 100
      }}
      title='Optimized-ERP'
    />
  );
>>>>>>> e0f3a75174ff1535f86d85c1adf234e0d8693995
}

export default Header;
