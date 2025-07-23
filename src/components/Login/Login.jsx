// src/components/LoginForm.jsx
import React from "react";
import "./Login.css";
import loginBg from"../../../public/images/bg-1.png"

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-form">
          <h3>Hello ! Welcome Back</h3>
          <input type="email" placeholder="Enter Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Recover Password ?</a>
          <button>Sign In</button>

          <div className="separator">Or continue with</div>
          <div className="social-icons">
            <button className="google"><img className="google-icon w-full h-full bg-contain" src="https://www.gstatic.com/marketing-cms/assets/images/d5/dc/cfe9ce8b4425b410b49b7f2dd3f3/g.webp=s48-fcrop64=1,00000000ffffffff-rw" alt="" /></button>
            <button className="apple"><img className="apple-icon w-full h-full bg-contain" src="https://img.icons8.com/ios-filled/50/mac-os.png" alt="" /></button>
            <button className="facebook"><img className="facebook-icon w-full h-full bg-contain" src="https://img.icons8.com/ios-filled/50/facebook-new.png" alt="" /></button>
          </div>

          <p className="create-account text-xl text-center flex gap-3">
            Don’t Have an account? <span href="#" className="text-white">Create Account</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
