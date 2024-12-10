import React, { useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { BookRows } from "../BOOKDATA/BookData";
import { Delete, Edit } from "@mui/icons-material";
import { Link } from "react-router-dom";
export default function AddBookTable() {
	const [bookList, setBookList] = useState(BookRows);

	const handleDeleteBook = (id) => {
		setBookList(bookList.filter((book) => book.id !== id));
	};

	const BookColumns = [
		{ field: "id", headerName: "ID", width: 40 },
		{
			field: "name",
			headerName: "Book Name",
			width: 130,
			editable: true,
		},
		{
			field: "type",
			headerName: "Type",
			width: 120,
			editable: true,
		},
		{
			field: "Author",
			headerName: "Author",
			type: "number",
			width: 120,
			editable: true,
		},
		{
			field: "Qty",
			headerName: "Qty",
			type: "number",
			width: 60,
			editable: true,
		},
		{
			field: "Edition",
			headerName: "Edition",
			type: "number",
			width: 80,
			editable: true,
		},
		{
			field: "Year",
			headerName: "Year",
			type: "number",
			width: 110,
			editable: true,
		},

		{
			field: "Action",
			headerName: "Action",
			width: 150,
			renderCell: (params) => {
				return (
					<div>
						<Link to="/bookView ">
							<button>View</button>
						</Link>
						<Edit />
						<Delete onClick={() => handleDeleteBook(params.row.id)} />
					</div>
				);
			},
		},
	];

	return (
		<div>
			<Box sx={{ height: 400, width: "auto" }}>
				<DataGrid
					rows={bookList}
					columns={BookColumns}
					initialState={{
						pagination: {
							paginationModel: {
								pageSize: 5,
							},
						},
					}}
					pageSizeOptions={[5]}
					checkboxSelection
					disableRowSelectionOnClick
				/>
			</Box>
		</div>
	);
}
