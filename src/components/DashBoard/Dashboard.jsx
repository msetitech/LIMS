import React from "react";
import "./dashboard.css";
import { AutoStories, Face2, People, Style } from "@mui/icons-material";
export default function Dashboard() {
	return (
		<div>
			<div className="dashboardSummary">
				<div className="summaryBox">
					<div className="icons">
						<AutoStories />
					</div>
					<div className="summarydetails">
						<h5>Books</h5>
						<h1>16000</h1>
					</div>
				</div>
				<div className="summaryBox">
					<div className="icons">
						<People />
					</div>
					<div className="summarydetails">
						<h5>User</h5>
						<h1>16</h1>
					</div>
				</div>
				<div className="summaryBox">
					<div className="icons">
						<Face2 />
					</div>
					<div className="summarydetails">
						<h5>Students</h5>
						<h1>4600</h1>
					</div>
				</div>
				<div className="summaryBox">
					<div className="icons">
						<Style />
					</div>
					<div className="summarydetails">
						<h5>Borrowed</h5>
						<h1>16000</h1>
					</div>
				</div>
			</div>
			<div className="dashboardGraph">
                <div className="barChart">BardCahrt</div>
                <div className="piChart">Pi Chart</div>
			</div>
		</div>
	);
}
