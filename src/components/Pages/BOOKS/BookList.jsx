import React from "react";
import "./booklist.css";
import AddBookTable from "./AddBookTable";

export default function BookList() {
	return (
		<div className="booklistTable">
			<div className="booklistholder">
				<AddBookTable />
			</div>
		</div>
	);
}
