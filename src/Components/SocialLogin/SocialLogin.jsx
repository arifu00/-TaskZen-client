// import { useContext } from "react";
// import { AuthContext } from "../../Providers/AuthProviders";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

import Swal from "sweetalert2";
// import useAxiosPublic from "../../hooks/useAxiosPublic";
const SocialLogin = () => {
  // const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  // const axiosPublic = useAxiosPublic();

  const handleGoogleSignIn = () => {
    console.log('clicked');
    // googleSignIn()
    //   .then((res) => {
    //     console.log(res.user);
    //     const userInfo = {
    //       email: res.user.email,
    //       name: res.user.displayName,
    //       image: res.user.photoURL,
    //     };
    //     // axiosPublic.post("/user", userInfo).then((res) => {
    //     //   console.log(res.data);
    //     //   navigate(`${location.state ? location.state : "/"}`);
    //     // });
    //     Swal.fire({
    //       position: "center",
    //       icon: "success",
    //       title: "Login Successful",
    //       showConfirmButton: true,
    //       timer: 1200,
    //     });
    //   })
    //   .catch((error) => {
    //     console.log(error.message);
    //   });
  };

  return (
    <div className="mt-4 flex justify-center">
      <button onClick={handleGoogleSignIn} className="btn btn-outline">
      <FcGoogle />

        Continue with Google
      </button>
    </div>
  );
};

export default SocialLogin;
