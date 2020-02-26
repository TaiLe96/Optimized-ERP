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
        title: 'Item Name',
        dataIndex: 'itemName'
      },
      {
        title: 'Vendor',
        dataIndex: 'vendor'
      },
      {
        title: 'Request Date',
        dataIndex: 'requestDate'
      },
      {
        title: 'Requester',
        dataIndex: 'requester'
      },
      {
        title: 'Ordered Date',
        dataIndex: 'orderedDate'
      },
      {
        title: 'Ordered By',
        dataIndex: 'orderedBy'
      },
      {
        title: 'Received Date',
        dataIndex: 'receivedDate'
      },
      {
        title: 'Received By',
        dataIndex: 'receivedBy'
      },
      {
        title: 'Created By',
        dataIndex: 'createdBy'
      },
      {
        title: 'Created Date',
        dataIndex: 'createdDate',
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
        itemID: "3x4MP13",
        vendor: "TestVendor",
        requestDate: "TestRequestDate",
        requester: "TestRequester",
        orderedDate: "TestOrderedDate",
        orderedBy: "TestOrderedBy",
        receivedDate: "TestReceivedDate",
        receivedBy: "TestReceivedBy",
        createdBy: "TestCreatedBy",
        createdDate: "TestCreatedDate",
      },
    ];
    return(
      <Table columns={columns} dataSource={data} bordered />
    )
  }
  
  export default Inventory;