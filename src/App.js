/** @format */

import { componen } from "react";
import "./App.css";
import Car from "./componen/Car/Car.js";
import User from "./componen/User/User.js";
import Footer from "./componen/Footer/Footer.js";
import Main from "./componen/main/main.js";
// ini buat nampilin gambar
import imgProfile from "./componen/4vvs7x7kyqr81.jpg";
import { BrowserRouter, Routes, Router } from "react-router-dom";
import Home from "./pages/Home.js";
import Navbar from "./componen/Navbar/Navbar.js";
// proops itu atribut html tapi kalo di react jadi props namanya

function App() {
	return (
		<div className="container">
			<BrowserRouter>
			<Navbar/>
			<Routes>
				<Router path="/" element={<Home/>} />
			</Routes>
			</BrowserRouter>
			<Main />
			
			{/* kalo mau ngirim data boleean tergantung false atau true */}
			{/* <Car/> */}
			<Footer nama="Codingin" />
		</div>
	);
}

export default App;
