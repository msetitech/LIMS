import React from "react";
import "./addBook.css";
import { Search } from "@mui/icons-material";
import AddBookTable from "./AddBookTable";

export default function AddBooks() {
	return (
		<div>
			<div className="addbookwrap">
				<div className="addBookForm">
					<div className="addbookheading">
						<h1>ADD BOOK</h1>
						<form action="">
							<div className="addbokinput">
								<input type="text" id="bookname" placeholder="" />
								<label htmlFor="bookname">Name of Book</label>
							</div>
							<div className="addbokinput">
								<input type="text" id="bookname" placeholder="" />
								<label htmlFor="bookname">Book Type</label>
							</div>
							<div className="addbokinput">
								<input type="text" id="bookname" placeholder="" />
								<label htmlFor="bookname">Author</label>
							</div>
							<div className="addbokinput">
								<input type="text" id="bookname" placeholder="" />
								<label htmlFor="bookname">Quantity</label>
							</div>
							<div className="addbokinput">
								<input type="text" id="bookname" placeholder="" />
								<label htmlFor="bookname">ISBN No</label>
							</div>
							<div className="editionandyeat">
								<div className="addbokinput">
									<input type="text" id="bookname" placeholder="" />
									<label htmlFor="bookname">Edition</label>
								</div>
								<div className="addbokinput">
									<input type="text" id="bookname" placeholder="" />
									<label htmlFor="bookname">Year</label>
								</div>
							</div>
							<button className="addbookButton">Add book</button>
						</form>
					</div>
				</div>
				<div className="addingbooktable">
					<div className="addedbooksearch">
						<div className="searchcontent">
							<input type="search" placeholder="Search . . . . ." />
							<div className="addbooksearchicon">
								<Search />
							</div>
						</div>
					</div>
					<div className="addedBooklist">
						<div className="divtable">
							<AddBookTable />
						</div>
						<div className="button">
							<button className="addbookcancelbutton">Cancel</button>
							<button className="addbooksavebutton">Save</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
