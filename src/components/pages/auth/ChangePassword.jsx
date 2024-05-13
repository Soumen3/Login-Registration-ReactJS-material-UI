import { TextField, Button, Box, Alert } from "@mui/material";
import { useState } from "react";
import React from "react";

function ChangePassword() {
	const [error, setError] = useState({
		status: false,
		msg: "",
		type:""
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		const data = new FormData(e.currentTarget);
		const actualData ={
			current_password: data.get('current_password'),
			new_password: data.get('new_password'),
			new_password_confirmation: data.get('new_password_confirmation')
		}
		if(actualData.current_password && actualData.new_password && actualData.new_password_confirmation){
			if(actualData.new_password !== actualData.new_password_confirmation){
				setError({
					status: true,
					msg: "New Password and Confirm New Password do not match",
					type: "error"
				})
				return;
			}
			else{
				console.log(actualData);
				document.getElementById('password-change-form').reset();
				setError({
					status: true,
					msg: "Password Change Successful",
					type: "success"
				})
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
		<Box sx={{display:'flex', flexDirection:'coloum', flexWrap: 'wrap', maxWidth:600, mx:4}}>
			<h1>Change Password</h1>
			<Box  component='form' onSubmit={handleSubmit} noValidate sx={{mt:1}} id='password-change-form' >
				<TextField margin="normal" required fullWidth name="current_password" id="current_password" label='Current Password' type="password" />
				<TextField margin="normal" required fullWidth name="new_password" id="new_password" label='New Password' type="password" />
				<TextField margin="normal" required fullWidth name="new_password_confirmation" id="new_password_confirmation" label='Confirm New Password' type="password" />
				<Box textAlign='center'>
					<Button type="submit" variant="contained" sx={{mt:3, mb:2}}>Change Password</Button>
				</Box>
				{
					error.status && 
					<Alert severity={error.type}>
						{error.msg}
					</Alert>
				}
			</Box>
		</Box>
	</>;
}

export default ChangePassword;
