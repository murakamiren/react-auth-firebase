import SignUpForm from "../components/SignUpForm";
import SignUpWithGoogle from "../components/SignUpWithGoogle";

const SignUp: React.VFC = () => {
	return (
		<div>
			<h2>SignUp</h2>
			<SignUpForm />
			<SignUpWithGoogle />
		</div>
	);
};

export default SignUp;
