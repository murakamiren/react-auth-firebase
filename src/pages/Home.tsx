import { useContext } from "react";
import { AuthCtx } from "../components/Context/AuthCtx";

const Home: React.VFC = () => {
	const { currentUser } = useContext(AuthCtx);
	if (currentUser) {
		return (
			<div>
				<h2>Welcome to React auth</h2>
				<p>{currentUser.uid}</p>
			</div>
		);
	} else {
		return (
			<div>
				<h2>Welcome to React auth</h2>
			</div>
		);
	}
};

export default Home;
