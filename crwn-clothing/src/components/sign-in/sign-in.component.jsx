import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButtom from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';
class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email: '',
            password: ''
        }
    }

    handleSubmit =event=>{
        event.preventDefault();
        this.setState({email:'',password:''})
        
    }
    handleChange =event=>{
        const {value, name} =event.target;
        this.setState({[name]:value})
       
    }

    render(){
        return(
            <div className="sign-in">
                <h2>I ALREADY HAVE AN ACCOUNT</h2>
                <span>Sign In with your Email and Password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput label="EMAIL" name= "email" value={this.state.email} type="email" required handleChange={this.handleChange}/>
                    
                    <FormInput label="PASSWORD" name= "password" value={this.state.password} type="password" required handleChange={this.handleChange}/>
                    <div className="buttons">

                    <CustomButtom type="submit"> Sign In</CustomButtom>
                   <CustomButtom onClick={signInWithGoogle} isGoogleSignIn> {``}Sign In with Google {``}</CustomButtom>
                    </div>
                    
                   
                </form>
                
            </div>
        )
    }
}

export default SignIn;