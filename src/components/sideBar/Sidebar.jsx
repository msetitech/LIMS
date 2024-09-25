import React from "react";
import "./sidebar.css";
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
	return (
		<div>
			<div className="sidebar">
				<div className="sidebarMenu">
					<h3>MAIN</h3>
					<ul>
						<li className="active">
							<span>
								<Dashboard />
							</span>
							Dashboarrd
						</li>
						<li>
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
						<li>
							<span>
								<AutoStories />
							</span>
							Add Book
						</li>
						<li>
							<span>
								<LibraryBooks />
							</span>
							Book List
						</li>
						<li>
							<span>
								<Style />
							</span>
							Book Lent
						</li>
						<li>
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
						<li>
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
	);
}
