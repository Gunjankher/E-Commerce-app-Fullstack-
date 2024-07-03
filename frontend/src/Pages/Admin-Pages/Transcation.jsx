import React from 'react'

import AdminSideBar from './../../components/Admin-components/AdminSideBar'
import { Column } from "react-table";
import { ReactElement, useState, useCallback } from "react";
import TableHOC from "../../components/Admin-components/TableHOC";
import { Link } from "react-router-dom";


const columns = [
  {
    Header: "Avatar",
    accessor: "user",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const arr = [
  {
    user: "Charas",
    amount: 4500,
    discount: 400,
    quantity: 3,
    status: <span className="red">Processing</span>,
    action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
  },
  {
    user: "Xavirors",
    amount: 6999,
    discount: 400,
    status: <span className="green">Shipped</span>,
    quantity: 6,
    action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
  },
  {
    user: "Xavirors",
    amount: 6999,
    discount: 400,
    status: <span className="purple">Delivered</span>,
    quantity: 6,
    action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
  },
];





function Transcation() {

const [data] = useState(arr)


const Table = useCallback(
TableHOC(
columns,
data,
"dashboard-product-box", 
"Transcation",
 true

)

)



  return (
    <div className='adminContainer'>
    <AdminSideBar/>
    <main>{Table()}</main>
    
        </div>
  )
}

export default Transcation