import { auth } from "../firebase";

const SignOut: React.VFC = () => {
	const logOut = () => {
		auth
			.signOut()
			.then(() => {
				console.log("sign out");
			})
			.catch((err) => {
				console.log(err.message);
			});
	};

	return (
		<div>
			<button onClick={logOut}>sign out</button>
		</div>
	);
};

export default SignOut;
