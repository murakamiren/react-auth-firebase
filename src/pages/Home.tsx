import { useContext, useEffect, useState } from "react";
import { AuthCtx } from "../components/Context/AuthCtx";
import { getDoc, doc } from "@firebase/firestore";
import { firestore } from "../firebase";

type userdataProps = {
	username: string;
	userId: string;
};

const Home: React.VFC = () => {
	const { currentUser } = useContext(AuthCtx);
	const [userdata, setUserdata] = useState<userdataProps>({
		username: "",
		userId: "",
	});

	useEffect(() => {
		if (currentUser) {
			const docRef = doc(firestore, "users", currentUser.uid);
			const docSnap = getDoc(docRef);
			docSnap
				.then((d) => {
					console.log(d.data());
					return d.data();
				})
				.then((ud: any) => {
					setUserdata({
						username: ud.displayName,
						userId: ud.userId,
					});
				});
		}
	}, [currentUser]);

	if (currentUser) {
		return (
			<div>
				<h2>Welcome to React auth</h2>
				<p>Hello {userdata.username}</p>
				<p>current status : online!</p>
			</div>
		);
	} else {
		return (
			<div>
				<h2>Welcome to React auth</h2>
				<p>current status : offline</p>
			</div>
		);
	}
};

export default Home;
