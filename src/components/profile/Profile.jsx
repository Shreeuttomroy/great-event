import { useContext } from "react";
import { AuthContext } from "../../Provider/Authentic";

function Profile() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <div className="w-full">
        <div className=" my-20 text-center w-4/5 mx-auto">
          <div className=" w-fit mx-auto">
            <img className=" w-44 h-44 rounded-full" src={user?.photoURL} />
          </div>
          <h1 className=" w-fit my-4 mx-auto text-2xl font-bold">{user?.displayName}</h1>
          <p>{user?.email}</p>
        </div>
      </div>
    </>
  );
}

export default Profile;
