import React from "react";
import {AppBar, Toolbar, Typography, Box, Button} from "@mui/material";
import { NavLink } from "react-router-dom";

function Navbar() {
  return <>
	<Box sx={{flexGrow:1}}>
		<AppBar position="static" color="secondary">
			<Toolbar>
				<Typography variant ='h5' component="div" sx={{flexGrow:1}}>
					Geek-Shop
				</Typography>
				<Button component={NavLink} to='/' sx={{color:'white', }}  style={({isActive})=>{
					return isActive ? {
						color: 'white',
						backgroundColor: '#6d1b7b'
					} : {
						color: 'black',
					}
				}}>Home</Button>
				<Button component={NavLink} to='/contact' sx={{color:'white', }} style={({isActive})=>{
					return isActive ? {
						color: 'white',
						backgroundColor: '#6d1b7b'
					} : {
						color: 'black',
					}
				}}>Contact</Button>
				<Button component={NavLink} to='/login' sx={{color:'white', }} style={({isActive})=>{
					return isActive ? {
						color: 'white',
						backgroundColor: '#6d1b7b'
					} : {
						color: 'black',
					}
				}}>Login/Registration</Button>
			</Toolbar>
		</AppBar>
	</Box>
  </>;
}

export default Navbar;
