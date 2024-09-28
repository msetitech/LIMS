import Dashboard from "./Components/DashBoard/Dashboard";
import SideBar from "./Components/SideBar/SideBar";
import TopBar from "./Components/TopBar/TopBar";
import { Routes, Route } from "react-router-dom";
import "./app.css";
import AddBooks from "./Components/Pages/BOOKS/AddBooks";

function App() {
	return (
		<>
			<TopBar />
			<div className="homeView">
				<div className="homewrap">
					<div className="homeleft">
						<SideBar />
					</div>
					<div className="homeright">
						<div className="rootingView">
							<h4>Home</h4>
							<h4>Home - Dashboard</h4>
						</div>
						<Routes>
							<Route path="/" element={<Dashboard />}></Route>
							<Route path="/addBook" element={<AddBooks />}></Route>
						</Routes>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
