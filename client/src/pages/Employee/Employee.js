import React from 'react';
import 'antd/dist/antd.css';
import { Table } from 'antd';

function Employee(){

  const renderContent = (value, row, index) => {
    const obj = {
      children: value,
      props: {},
    };
    if (index === 4) {
      obj.props.colSpan = 0;
    }
    return obj;
  };

  const columns = [
    {
      title: 'Full Name',
      dataIndex: 'fullName',
      render: (text, row, index) => {
        if (index < 4) {
          return <a>{text}</a>;
        }
        return {
          children: <a>{text}</a>,
          props: {
            colSpan: 5,
          },
        };
      },
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      render: (value, row, index) => {
        const obj = {
          children: value,
          props: {},
        };
        if (index === 2) {
          obj.props.rowSpan = 2;
        }
        // These two are merged into above cell
        if (index === 3) {
          obj.props.rowSpan = 0;
        }
        if (index === 4) {
          obj.props.colSpan = 0;
        }
        return obj;
      },
    },
    {
      title: 'Email',
      dataIndex: 'email'
    },
    {
      title: 'Address',
      dataIndex: 'address',
      render: renderContent,
    },
  ];
  
  const data = [
    {
      key: "1",
      fullName: "Michael J",
      phone: "415-111-2222",
      email: "michael@gmail.com",
      address: "San Francisco"
    },
    {
      key: "2",
      fullName: "Black Pink",
      phone: "123-456-7890",
      email: "blackpink@gmail.com",
      address: "Korea"
    }
  ];
  return(
    <Table columns={columns} dataSource={data} bordered />
  )
}

export default Employee;