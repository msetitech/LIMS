import React, { useState } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import {
	Analytics,
	AssignmentTurnedIn,
	Attribution,
	AutoStories,
	Dashboard,
	GroupAdd,
	LibraryBooks,
	LocalMall,
	LocalShipping,
	More,
	People,
	Settings,
	ShoppingCart,
	Style,
	Task,
} from "@mui/icons-material";

export default function SideBar() {
	const [activeMenu, setActiveMenu] = useState("");
	const handleActive = (item) => {
		setActiveMenu(item);
	};

	return (
		<div>
			<div className="sidebarConteiner">
				<div className="sidebar">
					<div className="sidebarMenu">
						<h3>MAIN</h3>
						<ul>
							<Link to="/" className="link">
								<li
									onClick={() => handleActive("Dashboarrd")}
									className={activeMenu === "Dashboarrd" ? "active" : ""}>
									<span>
										<Dashboard />
									</span>
									Dashboarrd
								</li>
							</Link>
							<li
								onClick={() => handleActive("Report")}
								className={activeMenu === "Report" ? "active" : ""}>
								<span>
									<Analytics />
								</span>
								Report
							</li>
						</ul>
					</div>
					<div className="sidebarMenu">
						<h3>BOOKS</h3>
						<ul>
							<Link to="/addBook" className="link">
								<li
									onClick={() => handleActive("Add Book")}
									className={activeMenu === "Add Book" ? "active" : ""}>
									<span>
										<AutoStories />
									</span>
									Add Book
								</li>
							</Link>
							<li
								onClick={() => handleActive("Book List")}
								className={activeMenu === "Book List" ? "active" : ""}>
								<span>
									<LibraryBooks />
								</span>
								Book List
							</li>
							<li
								onClick={() => handleActive("Book Lent")}
								className={activeMenu === "Book Lent" ? "active" : ""}>
								<span>
									<Style />
								</span>
								Book Lent
							</li>
							<li
								onClick={() => handleActive("Book Return")}
								className={activeMenu === "Book Return" ? "active" : ""}>
								<span>
									<More />
								</span>
								Book Return
							</li>
						</ul>
					</div>
					<div className="sidebarMenu">
						<h3>STUSENTS</h3>
						<ul>
							<li
								onClick={() => handleActive("Add Students")}
								className={activeMenu === "Add Students" ? "active" : ""}>
								<span>
									<GroupAdd />
								</span>
								Add Students
							</li>
							<li>
								<span>
									<People />
								</span>
								Student List
							</li>
							<li>
								<span>
									<Attribution />
								</span>
								Deleted STudents
							</li>
						</ul>
					</div>
					<div className="sidebarMenu">
						<h3>ORDER</h3>
						<ul>
							<li>
								<span>
									<ShoppingCart />
								</span>
								Create Order
							</li>
							<li>
								<span>
									<LocalMall />
								</span>
								Order List
							</li>
							<li>
								<span>
									<LocalShipping />
								</span>
								Receive Order
							</li>
						</ul>
					</div>
					<div className="sidebarMenu">
						<h3>TASK</h3>
						<ul>
							<li>
								<span>
									<Task />
								</span>
								Create Task
							</li>
							<li>
								<span>
									<AssignmentTurnedIn />
								</span>
								Task List
							</li>
						</ul>
					</div>
					<div className="sidebarMenu">
						<h3>SETTING</h3>
						<ul>
							<li>
								<span>
									<Settings />
								</span>
								Setting
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
