import React, { useState } from "react";
import { Link } from "react-router-dom";

const InvoiceList = () => {
  const [invoiceList, setInvoiceList] = useState([
    {
      title: "nabin",
      dec: "this is nabin",
      id: 1,
      price: 200,
      qty: "4",
      image:
        "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
    },
    {
      title: "jubin",
      dec: "this is jubin",
      id: 2,
      price: 400,
      qty: 8,
      image:
        "https://slp-statics.astockcdn.net/static_assets/staging/24winter/home/curated-collections/card-2.jpg?width=580",
    },
    {
      title: "Saroj",
      dec: "this is saroj",
      id: 3,
      price: 100,
      qty: 3,
      image:
        "https://media.istockphoto.com/id/1225173869/photo/house-boat-anchored-in-lake-with-jungle-background-backwaters-kerala-india.jpg?s=612x612&w=0&k=20&c=uo-bsRQjhlT9AgeWBs_pkSvHQwStCelMC75EUpzwjHU=",
    },
    {
      title: "Suraj",
      dec: "this is Suraj",
      id: 4,
      price: 300,
      qty: 400,
    },
  ]);
  return (
    <div className="bg-slate-700 min-h-screen w-full text-white p-6">
      <div className="flex gap-2 justify-between">
        <h1 className="text-xl">Inovice List</h1>
        <Link
          to={"/invoice/add"}
          className="bg-blue-500 rounded-full px-6 py-1"
        >
          Add
        </Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>sn</th>
            <th>name</th>
            <th>qty</th>
            <th>price</th>
            <th>amount</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {invoiceList?.map((item, index) => {
            return (
              <tr className="even:bg-slate-500" key={item.id}>
                <td>{index + 1}</td>
                <td>{item?.title}</td>
                <td>{item?.qty}</td>
                <td>{item?.price}</td>
                <td>{item?.qty * item?.price}</td>
                <td className="flex gap-6 justify-center">
                  <button className="py-0.5 flex items-center px-4 rounded-md bg-red-400">
                    del
                  </button>
                  <Link
                    to={`/invoice/${item?.id}`}
                    className="py-0.5 flex items-center px-4 rounded-md bg-green-400"
                  >
                    edit
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default InvoiceList;
