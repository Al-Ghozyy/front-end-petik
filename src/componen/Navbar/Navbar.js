/** @format */
import { Navlink } from "reaxt-router-dom";
import "./Navbar.css";

const Navbar = () => {
	return (
		<nav className="navbar">
			<ul>
				<li>
					<Navlink to={"/"}>Home</Navlink>
				</li>
				<li>
					<Navlink to={"/popular"}>Populer</Navlink>
				</li>
				<li>
					<Navlink to={"/"}>Top rated</Navlink>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
