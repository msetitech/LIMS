import Dashboard from "./Components/DashBoard/Dashboard";
import SideBar from "./Components/SideBar/SideBar";
import TopBar from "./Components/TopBar/TopBar";
import "./app.css";

function App() {
	return (
		<div>
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
						<div className="homeRoutedDetails">
							<Dashboard />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
