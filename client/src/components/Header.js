import React from 'react';
import 'antd/dist/antd.css';
import { PageHeader } from 'antd';

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
}

export default Header;
