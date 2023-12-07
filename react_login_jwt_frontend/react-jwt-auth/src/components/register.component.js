import React, {Component} from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from 'validator';
import AuthService from '../services/auth.service';

const required = (value) => {
    if(!value){
        return(
            <div className=" alert alert-danger" role="alert">
                This Field Is Required!
            </div>
        );
    }
};

const verifyEmail = (value) => {
    if(!isEmail(value)){
        return(
            <div className=" alert alert-danger" role="alert">
                Invalid Email!
            </div>
        );
    }
};

const verifyPass = (value) => {
    if(value.length < 6){
        return(
            <div className=" alert alert-danger" role="alert">
                Password must be at least 6 characters long!
            </div>
        );
    }else if(value.length > 40){
        return(
            <div className=" alert alert-danger" role="alert">
                Password must be no longer than 40 character!
            </div>
        );
    }
};

const verifyUser= (value) => {
    if(value.length < 3){
        return(
            <div className=" alert alert-danger" role="alert">
                UserName must be at least 3 characters long!
            </div>
        );
    }else if(value.length > 20){
        return(
            <div className=" alert alert-danger" role="alert">
                UserName must be no longer than 20 character!
            </div>
        );
    }
};

class Register extends Component {
    constructor(props) {
        super(props);
        this.registerCtl = this.registerCtl.bind(this);
        this.userChange = this.userChange.bind(this);
        this.passChange = this.passChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
        
        this.state = {
            user:"",
            pass:"",
            email:"",
            successful:false,
            message:"",
        };
    }

    userChange(data){
        this.setState({
            user:data.target.value
        });
    }

    passChange(data){
        this.setState({
            pass:data.target.value
        });
    }

    emailChange(data){
        this.setState({
            email:data.target.value
        });
    }

    registerCtl(data){
        data.preventDefault();
        
        this.setState({
            message:"",
            successful:false,
        });

        this.form.validateAll();

        if(this.checkBtn.context._errors.length === 0){
           
            AuthService.signup(
                this.state.user,
                this.state.email,
                this.state.pass
            )
            .then( (res) => {
                this.setState({
                    message:res.data.message,
                    successful:true,
                });
            },
            (err) => {
                const res = (
                    err.response &&
                    err.response.data &&
                    err.response.data.message ) ||
                    err.message ||
                    err.message.toString();
                
                this.setState({
                    successful:false,
                    message:res,
                });
            });
        }
    }


    render() {

        return (
            <div className="col-md-12">
                <div className="card card-container">
                    <img 
                        src=""
                        alt="profile-img"
                        className="profile-img-card"
                    />

                    <Form 
                        onSubmit={this.registerCtl} 
                        ref = {
                            (data) => {this.form=data;}
                        }
                    >
                        {
                            !this.state.successful && (
                            <div>
                                <div className="form-group">
                                  <label htmlFor="user">UserName</label>
                                  <Input 
                                    type="text"
                                    name="user"
                                    className="form-control"
                                    value={this.state.user}
                                    onChange={this.userChange}
                                    validations={[required,verifyUser]}
                                  />
                                </div>

                                <div className="form-group">
                                <label htmlFor="pass">PassWord</label>
                                <Input 
                                    type="text"
                                    name="pass"
                                    className="form-control"
                                    value={this.state.pass}
                                    onChange={this.passChange}
                                    validations={[required,verifyPass]}
                                />
                                </div>

                                <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <Input 
                                    type="text"
                                    name="email"
                                    className="form-control"
                                    value={this.state.email}
                                    onChange={this.emailChange}
                                    validations={[required,verifyEmail]}
                                />
                                </div>

                                <div className="form-group">
                                    <button className="btn btn-primary">Sign Up</button>
                                </div>
                            </div>
                            )
                        }

                        {
                            this.state.message && (
                                <div className="form-group">
                                    <div
                                     className={
                                        this.state.successful ? "alert alert-success" : "alert alert-danger"
                                     }
                                     role="alert" 
                                    >
                                        {this.state.message}
                                    </div>
                                </div>
                            )
                        }
                        <CheckButton
                         style={{display:"none"}}
                         ref={(data)=>{this.checkBtn = data;}}
                        />
                    </Form>
                </div>
            </div>
        );
    }
}

export default Register;