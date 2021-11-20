import { createContext, useEffect, useState, ReactNode } from "react";
import { auth } from "../../firebase";
import { User } from "firebase/auth";

type AuthCtxProps = {
	currentUser: User | null | undefined;
};

type AuthProviderProps = { children: ReactNode };

const AuthCtx = createContext<AuthCtxProps>({ currentUser: undefined });

const AuthProvider: React.VFC<AuthProviderProps> = ({ children }) => {
	const [currentUser, setCurrentUser] = useState<User | null | undefined>(undefined);

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			setCurrentUser(user);
			console.log(user);
		});
	}, []);

	return <AuthCtx.Provider value={{ currentUser }}>{children}</AuthCtx.Provider>;
};

export { AuthCtx, AuthProvider };
