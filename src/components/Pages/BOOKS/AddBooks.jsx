import React, { useState } from "react";
import "./addBook.css";
import { Search } from "@mui/icons-material";
import AddBookTable from "./AddBookTable";

export default function AddBooks({ book }) {
	const [dookId, setBookId] = useState("");
	const [bookType, setbookType] = useState("");
	const [bookName, setbookName] = useState("");
	const [bookAuthor, setbookAuthor] = useState("");
	const [bookQty, setbookQty] = useState("");
	const [bookEdition, setbookEdition] = useState("");
	const [bookYear, setbookYear] = useState("");

	const handleAddstudent = (e) => {
		e.preventDefault();
		book({
			id: dookId,
			type: bookType,
			name: bookName,
			Author: bookAuthor,
			Qty: bookQty,
			Edition: bookEdition,
			Year: bookYear,
		});
	};

	return (
		<div>
			<div className="addbookwrap">
				<div className="addBookForm">
					<div className="addbookheading">
						<h1>ADD BOOK</h1>
						<form onSubmit={handleAddstudent}>
							<div className="addbokinput">
								<input
									type="text"
									id="bookname"
									placeholder=""
									value={bookName}
									onChange={(e) => setbookName(e.target.value)}
								/>
								<label htmlFor="bookname">Name of Book</label>
							</div>
							<div className="addbokinput">
								<input
									type="text"
									id="bookname"
									placeholder=""
									value={bookType}
									onChange={(e) => setbookType(e.target.value)}
								/>
								<label htmlFor="bookname">Book Type</label>
							</div>
							<div className="addbokinput">
								<input
									type="text"
									id="bookname"
									placeholder=""
									value={bookAuthor}
									onChange={(e) => setbookAuthor(e.target.value)}
								/>
								<label htmlFor="bookname">Author</label>
							</div>
							<div className="addbokinput">
								<input
									type="text"
									id="bookname"
									placeholder=""
									value={bookQty}
									onChange={(e) => setbookQty(e.target.value)}
								/>
								<label htmlFor="bookname">Quantity</label>
							</div>
							<div className="addbokinput">
								<input type="text" id="bookname" placeholder="" />
								<label htmlFor="bookname">ISBN No</label>
							</div>
							<div className="editionandyeat">
								<div className="addbokinput">
									<input
										type="text"
										id="bookname"
										placeholder=""
										value={bookEdition}
										onChange={(e) => setbookEdition(e.target.value)}
									/>
									<label htmlFor="bookname">Edition</label>
								</div>
								<div className="addbokinput">
									<input
										type="text"
										id="bookname"
										placeholder=""
										value={bookYear}
										onChange={(e) => setbookYear(e.target.value)}
									/>
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
