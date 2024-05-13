import React from "react";
import { Grid, TextField, Button, Box, Alert } from "@mui/material";
import { useState } from "react";

function SendPasswordResetEmail() {
	const [error, setError] = useState({
		status: false,
		msg: "",
		type:""
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		const data = new FormData(e.currentTarget);
		const actualData ={
			email: data.get('email')
		}
		if(actualData.email){
			console.log(actualData);
			document.getElementById('paswword-reset-email-form').reset();
			setError({
				status: true,
				msg: "Email Send Successful",
				type: "success"
			})
		}
		else{
			setError({
				status: true,
				msg: "Email is required",
				type: "error"
			})
		
		}
	}
	return <>
		<Grid container justifyContent="center">
			<Grid item sm={6} xs={12}>
				<h1>Send Password Reset Email</h1>
				<Box component='form' noValidate sx={{mt:2, p:5 }} id="paswword-reset-email-form" onSubmit={handleSubmit}>
					<TextField margin="normal" required fullWidth name="email" id="email" label='Email Address' autoFocus/>
					<Box textAlign='center'>
						<Button type="submit" variant="contained" sx={{mt:3, mb:2}}>Send</Button>
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

export default SendPasswordResetEmail;
