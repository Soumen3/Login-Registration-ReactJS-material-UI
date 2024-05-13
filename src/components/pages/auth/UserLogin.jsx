import React from "react";
import { TextField, Button, Box, Alert } from "@mui/material";
import { useState } from "react";
import { NavLink,useNavigate } from "react-router-dom";

function UserLogin() {
	const [error, setError] = useState({
		status: false,
		msg: "",
		type:""
	});
	
	const Navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		const data = new FormData(e.currentTarget);
		const actualData ={
			email: data.get('email'),
			password: data.get('password')
		}
		if(actualData.email && actualData.password){
			console.log(actualData);
			document.getElementById('login-form').reset();
			setError({
				status: true,
				msg: "Login Successful",
				type: "success"
			})
			Navigate('/dashboard');
		}

		else{
			setError({
				status: true,
				msg: "All fields are required",
				type: "error"
			})
		
		}
	}
	return <>
		<Box component='form' noValidate sx={{mt:2, p:5 }} id="login-form" onSubmit={handleSubmit}>
			<TextField margin="normal" required fullWidth name="email" id="email" label='Email Address' autoFocus/>
			<TextField margin="normal" required fullWidth name="password" id="password" label='Password' type="password" />
			<Box textAlign='center'>
				<Button type="submit" variant="contained" sx={{mt:3, mb:2}}>Login</Button>
			</Box>
			<NavLink to='/forgot-password'>Forgot Password ?</NavLink>
			{
				error.status && 
				<Alert severity={error.type}>
					{error.msg}
				</Alert>
			}
			
		</Box>
	</>;
}

export default UserLogin;
