import React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
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
];

const rows = [
	{
		id: 1,
		type: "Programming",
		name: "Eloquent",
		Author: "Marijn H",
		Qty: 10,
		Edition: 2,
		Year: "2023",
	},
	{
		id: 2,
		type: "Agriculture",
		name: "Kilimo Bora",
		Author: "Marijn H",
		Qty: 10,
		Edition: 2,
		Year: "2023",
	},
	{
		id: 3,
		type: "Proramming",
		name: "Kilimo Bora",
		Author: "Marijn H",
		Qty: 10,
		Edition: 2,
		Year: "2023",
	},
	{
		id: 4,
		type: "Agriculture",
		name: "Kilimo Bora",
		Author: "Marijn H",
		Qty: 10,
		Edition: 2,
		Year: "2023",
	},
	{
		id: 5,
		type: "Enclish",
		name: "Kilimo Bora",
		Author: "Marijn H",
		Qty: 10,
		Edition: 2,
		Year: "2023",
	},
	{
		id: 6,
		type: "Archtech",
		name: "Kilimo Bora",
		Author: "Marijn H",
		Qty: 10,
		Edition: 2,
		Year: "2023",
	},
	{
		id: 7,
		type: "Agriculture",
		name: "Kilimo Bora",
		Author: "Marijn H",
		Qty: 10,
		Edition: 2,
		Year: "2023",
	},
];

export default function AddBookTable() {
	return (
		<div>
			<Box sx={{ height: 400, width: "auto" }}>
				<DataGrid
					rows={rows}
					columns={columns}
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
