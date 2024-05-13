import { Button, CssBaseline, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import ChangePassword from "./auth/ChangePassword";

function Dashboard() {

	const Navigate = useNavigate();
	const handleLogout = () => {
		console.log("Logout");
		Navigate('/login');
	}
	return <>
		<CssBaseline />
		<Grid container sx={{p:5}}>
			<Grid item sm={4} sx={{backgroundColor:'gray', p:5, color:'white'}}>
				<Typography variant="h5" > Email: soumen@gmail.com</Typography>
				<Typography variant="h6" > Name: Soumen Samanta</Typography>
				<Button variant="contained" color="warning" size='large' onClick={handleLogout}>Logout</Button>
			</Grid>
			<Grid item sm={8}>
				<ChangePassword />
			</Grid>
		</Grid>
	</>;
}

export default Dashboard;
