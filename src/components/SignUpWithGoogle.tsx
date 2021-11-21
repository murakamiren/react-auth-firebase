import { signInWithPopup } from "@firebase/auth";
import { doc, setDoc } from "@firebase/firestore";
import { auth, firestore, googleAuth } from "../firebase";

const SignUpWithGoogle: React.VFC = () => {
	const googleSignUp = (e: React.MouseEvent<HTMLInputElement>) => {
		signInWithPopup(auth, googleAuth)
			.then((result) => {
				console.log(result.user);
				return result.user;
			})
			.then((ud) => {
				setDoc(doc(firestore, "users", ud.uid), {
					userId: ud.uid,
					displayName: ud.displayName,
				});
			})
			.catch((err) => {
				console.log(err.message);
			});
	};

	return (
		<div>
			<p>or</p>
			<input type="button" value="sign up with google" onClick={googleSignUp} />
		</div>
	);
};

export default SignUpWithGoogle;
