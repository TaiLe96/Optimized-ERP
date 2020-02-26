import React from 'react';
import 'antd/dist/antd.css';
import { Upload, Icon, message } from 'antd';

import React from 'react';
import 'antd/dist/antd.css';
import { Upload, Icon, message } from 'antd';

//No.
//ItemID
//ItemName
//Vendor
//RequestDate
//RequestDate
//Requester
//OrderedDate
//OrderedBy
//ReceivedBy
//CreatedBy
//CreatedDate


function Inventory(){

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
        title: 'Item ID',
        dataIndex: 'itemID',
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
        dataIndex: 'address',
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
        fullName: "Import Export Co.",
        phone: "555-666-7777",
        email: "import@export.com",
        address: "The Fucking Moon"
      },
      {
        key: "2",
        fullName: "Telecom",
        phone: "111-222-3333",
        email: "sales@gtelecom.com",
        address: "The Goddamn Sun"
      }
    ];
    return(
      <Table columns={columns} dataSource={data} bordered />
    )
  }
  
  export default Inventory;