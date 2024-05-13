import React from "react";
import { Grid, TextField, Button, Box, Alert } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ResetPassword() {
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
			password: data.get('password'),
			password_confirmation: data.get('password-confirmation')
		}
		
		if(actualData.password && actualData.password_confirmation){
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
				document.getElementById('paswword-reset-form').reset();
				setError({
					status: true,
					msg: "Password change Successful. Redirecting to login page.",
					type: "success"
				})
				setTimeout(() => {
					Navigate('/login');
				},3000)
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
		<Grid container justifyContent="center">
			<Grid item sm={6} xs={12}>
				<h1>Reset Password</h1>
				<Box component='form' noValidate sx={{mt:2, p:5 }} id="paswword-reset-form" onSubmit={handleSubmit}>
					<TextField margin="normal" required fullWidth name="password" id="password" label='New Password' type="password" />
					<TextField margin="normal" required  fullWidth name="password-confirmation" id="password_confirmation" label='Confirm New Password' type="password" />
			
					<Box textAlign='center'>
						<Button type="submit" variant="contained" sx={{mt:3, mb:2}}>Save</Button>
					</Box>
					{
						error.status && 
						<Alert severity={error.type}>
							{error.msg}
						</Alert>
					}	
				</Box>
			</Grid>
		</Grid>
	</>;
}

export default ResetPassword;
