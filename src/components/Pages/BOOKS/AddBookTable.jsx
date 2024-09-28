import React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { BookColumns } from "../BOOKDATA/BookData";
import { BookRows } from "../BOOKDATA/BookData";

export default function AddBookTable() {
	return (
		<div>
			<Box sx={{ height: 400, width: "auto" }}>
				<DataGrid
					rows={BookRows}
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
