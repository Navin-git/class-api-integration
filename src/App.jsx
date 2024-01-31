import React from "react";
import { Link, Outlet, useRoutes } from "react-router-dom";
import InvoiceList from "./components/invoice/InvoiceList";
import "./App.css";
import AddInvoice from "./components/invoice/AddInvoice";
import EditInvoice from "./components/invoice/EditInvoice";
import Home from "./components/Home";

const App = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Outlet />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "invoice",
          element: <Outlet />,
          children: [
            {
              index: true,
              element: <InvoiceList />,
            },
            {
              path: "add",
              element: <AddInvoice />,
            },
            {
              path: ":id",
              element: <EditInvoice />,
            },
          ],
        },
      ],
    },
  ]);
  return routes;
};

export default App;
