import React from 'react';
import 'antd/dist/antd.css';
import { PageHeader } from 'antd';

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
}

export default Header;
