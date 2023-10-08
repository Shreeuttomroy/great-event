import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/Authentic";

function Navbar() {
  const { user, userSignOut } = useContext(AuthContext);
  const handleSignOut=()=>{
    userSignOut()
    .then()
    .catch(e=> console.log(e))
  }
  const navList = (
    <>
      <li>
        <NavLink to="">Home</NavLink>
      </li>
      {!user ? (
        <>
          <li>
            <NavLink to="login">Login</NavLink>
          </li>
          <li>
            <NavLink to="register">Register</NavLink>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink to="profile">Profile</NavLink>
          </li>
          <li>
            <NavLink to="order">Order</NavLink>
          </li>
        </>
      )}
    </>
  );
  const navList2 = (
    <>
      <li>
        <NavLink to="">Home</NavLink>
      </li>
      {!user ? (
        <>
          <li>
            <NavLink to="login">Login</NavLink>
          </li>
          <li>
            <NavLink to="register">Register</NavLink>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink to="profile">Profile</NavLink>
          </li>
          <li>
            <NavLink to="order">Order</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <>
      <div className="navbar bg-[#0000000d]">
        <div className="navbar-start">
          <NavLink
            to=""
            className=" normal-case text-orange-400 text-3xl font-bold">
            GreatEvent
          </NavLink>
        </div>
        <div className="navbar-end">
          <div className=" hidden md:flex">
            <ul className="menu menu-horizontal px-1 text-lg font-medium">
              {navList}
            </ul>
          </div>
          {user ? (
            <a onClick={handleSignOut} className="btn bg-slate-500 ml-8 hidden lg:flex">Sign Out</a>
          ) : (
            <Link to={"/login"} className="btn bg-slate-500 ml-8 hidden lg:flex">Sign In</Link>
          )}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navList2}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
