import React from 'react';
import 'antd/dist/antd.css';
import { Upload, Icon, message } from 'antd';

function Customer(){

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
//FULL NAME
    const columns = [
      {
        title: 'Company Name',
        dataIndex: 'companyName',
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
        dataIndex: 'telephone',
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
        dataIndex: 'billingAddress',
        render: renderContent,
      },
      {
        title: 'Action',
        dataIndex: 'delete',
        key: 'x',
        render: () => <a>Delete</a>,
      },
    ];


    
    const data = [
      {
        key: "1",
        companyName: "Import Export Co.",
        phone: "555-666-7777",
        email: "import@export.com",
        billingAddress: "The Fucking Moon"
      },
      {
        key: "2",
        companyName: "Telecom",
        phone: "111-222-3333",
        email: "sales@gtelecom.com",
        billingAddress: "The Goddamn Sun"
      }
    ];
    return(
      <Table columns={columns} dataSource={data} bordered />
    )
  }
  
  export default Customer;