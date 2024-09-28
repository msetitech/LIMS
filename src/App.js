import Dashboard from "./Components/DashBoard/Dashboard";
import SideBar from "./Components/SideBar/SideBar";
import TopBar from "./Components/TopBar/TopBar";
import { Routes, Route } from "react-router-dom";
import "./app.css";
import AddBooks from "./Components/Pages/BOOKS/AddBooks";
import BookList from "./Components/Pages/BOOKS/BookList";
import { useState } from "react";
import { BookRows } from "./Components/Pages/BOOKDATA/BookData";

function App() {
	const [bookList, setBookList] = useState([BookRows]);
	const book = (book) => {
		setBookList(...bookList, book);
	};
	return (
		<>
			<TopBar />
			<div className="homeView">
				<div className="homewrap">
					<div className="homeleft">
						<SideBar />
					</div>
					<div className="homeright">
						<div className="rootingView">
							<h4>Home</h4>
							<h4>Home - Dashboard</h4>
						</div>
						<Routes>
							<Route path="/" element={<Dashboard />}></Route>
							<Route path="/addBook" element={<AddBooks book={book} />}></Route>
							<Route path="/bookList" element={<BookList />}></Route>
						</Routes>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
