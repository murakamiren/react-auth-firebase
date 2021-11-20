import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import SignOut from "./components/SignOut";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SingIn from "./pages/SingIn";

const App: React.VFC = () => {
	return (
		<BrowserRouter>
			<h1>hello world</h1>
			<Link to="/">
				<input type="button" value="home" />
			</Link>
			<Link to="/signup">
				<input type="button" value="sign up" />
			</Link>
			<Link to="/signin">
				<input type="button" value="sing in" />
			</Link>
			<SignOut />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/signin" element={<SingIn />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
