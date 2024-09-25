import React from "react";
import "./topBar.css";
import {
	AccountCircle,
	Language,
	LightMode,
	Notifications,
	Search,
} from "@mui/icons-material";

export default function TopBar() {
	return (
		<div>
			<nav>
				<div className="logo">LIMS</div>
				<div className="Search">
					<input type="text" />
					<div className="searchIcon">
						<Search />
					</div>
				</div>
				<div className="topnavicon">
					<div className="navIcons">
						<div className="topiconLang">
							<Language />
							<select name="" id="">
								<option value="">English</option>
								<option value="">Swahili</option>
							</select>
						</div>
						<div className="topicon">
							<LightMode />
						</div>
						<div className="topicon">
							<Notifications />
						</div>
						<div className="topicon">
							<AccountCircle />
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}
