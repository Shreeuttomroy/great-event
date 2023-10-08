import { useContext, useState } from "react";
import { AuthContext } from "../Provider/Authentic";
import { updateProfile } from "firebase/auth";
import auth from "../firebase.config/firebase.config";
import { Link } from "react-router-dom";
import swal from "sweetalert";

function Register() {
  const { createUserWithPass } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const [passcheck, setPasscheck] = useState("");
  const [check,setCheck]= useState(false);
  const handleInput = (e) => {
    const pass = e.target.value;
    console.log(pass);
    if (!/^(?=.*[a-zA-Z])(?=.*[^a-zA-Z]).{7,}$/.test(pass)) {
      setPasscheck(
        "Enter more then 6 characters, at least 1 letter and 1 special characters"
      );
    } else {
      setPasscheck("");
    }
  };
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const checked = e.target.accept.checked;
    console.log(checked)
    if (!/^(?=.*[a-zA-Z])(?=.*[^a-zA-Z]).{7,}$/.test(password)) {
      return;
    }
    if (!checked) {
      setCheck("Please accept terms & conditions")
      return;
    }else{
      setCheck("")
    }
    createUserWithPass(email, password)
      .then(() => {

        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL:"https://i.ibb.co/P5rxYp3/favpng-user-iconfinder-symbol.png"
        })
        .then()
        .catch((e) => console.log(e));
        swal({
          title: "Good job!",
          text: "You clicked the button!",
          icon: "success",
          button: "Aww yiss!",
        });
      })
      .catch((e) => console.log(e));
    console.log(name);
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content w-full flex-col lg:justify-around lg:flex-row-reverse">
        <div className="text-center lg:w-[600px] lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up!</h1>
          <p className="py-6">
            We are corporate event management community. Managing every
            corporate event in better way. Connect with us.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name..."
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter You Email..."
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className=" relative">
                <input
                  onChange={(e) => handleInput(e)}
                  type={show ? "text" : "password"}
                  placeholder="Enter Your Password..."
                  name="password"
                  className="input w-full input-bordered"
                  required
                />
                <input
                  onClick={() => setShow(!show)}
                  className=" absolute h-fit my-3 font-bold right-2"
                  type="button"
                  value={!show ? "Show" : "Hide"}
                />
              </div>
              <p className=" text-red-400">{passcheck}</p>
              <label className="label justify-normal">
                <input type="checkbox" className="mr-3 " name="accept" id="" />
                <a href="#" className="label-text-alt link link-hover">
                  Accept our terms and conditions
                </a>
              </label>
              <p className=" text-red-400">{check}</p>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign up</button>
            </div>
            <div>
              <Link className="label-text-alt link link-hover" to={"/login"}>
                Already have a acoount!
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
