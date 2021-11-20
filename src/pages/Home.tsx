import { useContext } from "react";
import { AuthCtx } from "../components/Context/AuthCtx";

const Home: React.VFC = () => {
	const { currentUser } = useContext(AuthCtx);
	if (currentUser) {
		return (
			<div>
				<h2>Welcome to React auth</h2>
				<p>current status : online!</p>
			</div>
		);
	} else {
		return (
			<div>
				<h2>Welcome to React auth</h2>
				<p>current status : offline!</p>
			</div>
		);
	}
};

export default Home;
