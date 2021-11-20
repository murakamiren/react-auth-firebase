import React, { useState } from "react";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../firebase";

const SignInForm: React.VFC = () => {
	const [email, setEmail] = useState("");
	const [ps, setPs] = useState("");

	const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(() => e.target.value);
	};

	const handlePs = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPs(() => e.target.value);
	};

	const submitSignIn = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		signInWithEmailAndPassword(auth, email, ps)
			.then((user) => {
				console.log("sign in");
			})
			.catch((err) => {
				console.log(err.message);
			});
	};

	return (
		<form onSubmit={submitSignIn}>
			<div>
				<label htmlFor="email">email</label>
				<input type="email" id="email" onChange={handleEmail} />
			</div>
			<div>
				<label htmlFor="ps">password</label>
				<input type="password" id="password" onChange={handlePs} />
			</div>
			<div>
				<button type="submit">sign in</button>
			</div>
		</form>
	);
};

export default SignInForm;
