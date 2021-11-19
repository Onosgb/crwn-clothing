import {Component} from 'react';
import FormInput from '../form-input/form-input.compnent';
import CustomButton from '../../components/custom-button/custom-button.component'
import {signInWithGoogle} from '../../firebase/firebase.utils';
import './sign-in.styles.scss';
class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state ={
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({email: '', password: ''})
    }

    handleChange = (event) => {
        const {value, name} = event.target;
        this.setState({[name]: value})
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form  onSubmit={this.handleSubmit}>
                    <FormInput
                     name="email"
                     type="email" 
                     value={this.state.email} 
                     label="Email"
                     required
                     handleChange={this.handleChange}/>

                    <FormInput
                    name="password" 
                    type="password" value={this.state.password} 
                    required
                    label="Password"
                    handleChange={this.handleChange}
                    />
                   <div className="buttons">
                   <CustomButton type="submit"> Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn={true}>Sign in with Google</CustomButton>
                   </div>

                </form>
            </div>
        )
    }
}

export default SignIn