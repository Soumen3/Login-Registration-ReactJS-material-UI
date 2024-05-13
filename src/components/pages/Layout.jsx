import React from "react";
import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";
import { CssBaseline } from "@mui/material";

function Layout() {
  return <>
	<CssBaseline />
	<Navbar />
	<Outlet />
  </>;
}

export default Layout;
