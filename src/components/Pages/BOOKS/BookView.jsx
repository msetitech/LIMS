import React from "react";
import "./bookView.css";
import { Link } from "react-router-dom";

export default function BookView() {
    
	return (
		<div>
			<div className="bookciewconteiner">
				<div className="topBookView">
					<h1>Book View</h1>
					<Link to="/addBook">
						<button>Add book</button>
					</Link>
				</div>
                <div className="bookdetails">
                    
                </div>
			</div>
		</div>
	);
}
