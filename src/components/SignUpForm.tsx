import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { auth, firestore } from "../firebase";
import { setDoc, doc } from "@firebase/firestore";

const SignUpForm: React.VFC = () => {
	const [email, setEmail] = useState("");
	const [ps, setPs] = useState("");

	const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(() => e.target.value);
	};

	const handlePs = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPs(() => e.target.value);
	};

	const submitSignUp = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		createUserWithEmailAndPassword(auth, email, ps)
			.then((user) => {
				console.log("success");
				return user;
			})
			.then((u) => {
				setDoc(doc(firestore, "users", u.user.uid), {
					userId: u.user.uid,
					displayName: "unko-daisuki",
				});
			})
			.catch((err) => {
				console.log(err.message);
			});
	};

	return (
		<form onSubmit={submitSignUp}>
			<div>
				<label htmlFor="email">email</label>
				<input type="email" id="email" onChange={handleEmail} />
			</div>
			<div>
				<label htmlFor="ps">password</label>
				<input type="password" id="password" onChange={handlePs} />
			</div>
			<div>
				<button type="submit">sign up</button>
			</div>
		</form>
	);
};

export default SignUpForm;
