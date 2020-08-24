import React from "react";
import "./App.scss";
import Header from "./features/header/Header.js";
import Splash from "./features/splash/Splash.js";
import Footer from "./features/footer/Footer.js";
import { Switch, Route } from "react-router-dom";
import Products from "./features/products/Products";
import SignIn from "./features/sign_in_sign_up/SignIn";
import SignUp from "./features/sign_in_sign_up/SignUp";

function App() {
	return (
		<div>
			<Header />

			<Switch>
				<Route exact path="/" component={Splash} />
				<Route path="/Products" component={Products} />
				<Route path="/SignIn" component={SignIn} />
				<Route path="/SignUp" component={SignUp} />
				<Route path="/Checkout" />
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
