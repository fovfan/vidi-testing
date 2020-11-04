import SignIn from '../../components/sign-in/sign-in.component';
import styled from 'styled-components';

const SignInLayout = styled.div`
	display:felx;
	justify-content:center;
	align-items:center;
`;
const SignInPage = () => {
	return ( 
		<SignInLayout>
			<SignIn/>
		</SignInLayout>
	 );
}
 
export default SignInPage;