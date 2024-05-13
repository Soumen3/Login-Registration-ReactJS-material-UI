import React from "react";
import { TextField, Button, Box, Alert, FormControlLabel } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Registration() {
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
			name: data.get('name'),
			email: data.get('email'),
			password: data.get('password'),
			password_confirmation: data.get('password_confirmation'),
			tc : data.get('tc')
		}
		if(actualData.email && actualData.password && actualData.name && actualData.password_confirmation && actualData.tc ){
			if(actualData.password !== actualData.password_confirmation){
				setError({
					status: true,
					msg: "Password and Confirm Password do not match",
					type: "error"
				})
				return;
			}
			else{
				console.log(actualData);
				document.getElementById('registration-form').reset();
				setError({
					status: true,
					msg: "Registration Successful",
					type: "success"
				})
				Navigate('/dashboard');
			}
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
		<Box component='form' noValidate sx={{mt:2, p:5 }} id="registration-form" onSubmit={handleSubmit}>
			<TextField margin="normal" required fullWidth name="name" id="name" label='Name' autoFocus/>
			<TextField margin="normal" required fullWidth name="email" id="email" label='Email Address' autoFocus/>
			<TextField margin="normal" required fullWidth name="password" id="password" label='Password' type="password" />
			<TextField margin="normal" required fullWidth name="password_confirmation" id="password_confirmation" label='Confirm Password' type="password" />
			<FormControlLabel control={<input type='checkbox' value='agree' color="primary" name="tc" id="tc" />} label="I agree to the terms and conditions"/>
			<Box textAlign='center'>
				<Button type="submit" variant="contained" sx={{mt:3, mb:2}}>Register</Button>
			</Box>
			{
				error.status && 
				<Alert severity={error.type}>
					{error.msg}
				</Alert>
			}
			
		</Box>
  	</>;
}

export default Registration;
