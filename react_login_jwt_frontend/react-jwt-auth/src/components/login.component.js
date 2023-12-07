import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button"; 
import Auth from "../services/auth.service";
import { withRouter } from "../common/with-router";


const required = (value) => {
    if(!value){
        return (
            <div className="alert alert-danger" role="alert">
                This Field is Required!
            </div>
        );
    }
};

class Login extends Component {
    constructor(props){
        super(props);
        this.loginCtl = this.loginCtl.bind(this);
        this.userChange = this.userChange.bind(this);
        this.passChange = this.passChange.bind(this);

        this.state = {
            user:"",
            pass:"",
            load:false,
            message:""
        }

    }
    
    userChange(data){
        this.setState({
            user: data.target.value
        });
    }

    passChange(data){
        this.setState({
            pass: data.target.value
        });
    }

    loginCtl(data){
        data.preventDefault();
        this.setState({
            message: "",
            load:true
        });

        this.form.validateAll();

        if(this.checkBtn.context._errors.length === 0){
            Auth.login(this.state.user, this.state.pass)
            .then(()=>{
                this.props.router.navigator("/profile");
                window.location.reload();
            },
            (err)=>{
                const response = (
                    err.response && 
                    err.response.data &&
                    err.response.data.message) ||
                    err.message ||
                    err.toString();

                this.setState({
                    load:false,
                    message:response
                });
            });
        }else{
            this.setState({
                load:false
            });
        }
    }

    render(){
        return(
            <div className="col-md-12">
                <div className="card card-container">
                    <img src="" alt="profile-img" className="profile-img-card" />
                    <Form 
                        onSubmit={this.loginCtl} 
                        ref={(c)=>{
                            this.form = c;
                        }}
                    >
                    <div className="form-group">
                        <label htmlFor="user">UserName</label>
                        <Input 
                            type="text" 
                            name="user" 
                            className="form-control" 
                            value={this.state.name} 
                            onChange={this.userChange} 
                            validations={[required]} 
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
                            validations={[required]} 
                        />
                    </div>
                    <div className="form-group">
                        <button 
                            className="btn btn-primary btn-black"
                            disabled={this.state.loading}
                        >
                          {
                            this.state.load &&
                            (<span className="spinner-boarder spinner-boarder-sm"></span>)
                          } 
                          <span>Login</span> 
                        </button>
                    </div>
                          
                    {
                        this.state.message &&
                        (
                            <div className="form-group">
                                <div className="alert alert-danger" role="alert">
                                    {this.state.message}
                                </div>
                            </div>
                        )
                    }

                    <CheckButton 
                        style={{display: "none"}}
                        ref={(data)=>{
                                this.checkBtn = data;
                            }
                        }
                    />
                    </Form>        
                </div>
            </div>
        )
    }
}

export default withRouter(Login);