import { useContext } from "react";
import { AuthContext } from "../Provider/Authentic";
import { useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";

function Login() {
  const {signInWithPass, signInWithGoogle} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
const handleLogin=e=>{
  e.preventDefault();
  const email = e.target.email.value;
  const password= e.target.password.value;
  signInWithPass(email,password)
  .then()
  .catch(e=>{
    console.log(e);
    swal("Password dosen`t match",{
      icon:"error",
      buttons: "Try again"
    });
  })
}
const handleGooglePopup =()=>{
  signInWithGoogle()
  .then(()=>{
    navigate(location?.state? location.state:"/")
  })
}

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content w-full flex-col lg:justify-around lg:flex-row-reverse">
          <div className="text-center lg:w-[600px] lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
            We are corporate event management community. Managing every corporate event in better way. Connect with us.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter you email..."
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password..."
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <div className=" my-3 mx-auto">
              <button onClick={handleGooglePopup} className=" bg-teal-100 text-xl font-bold py-3 px-2 rounded-xl">LogIn With Google</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
