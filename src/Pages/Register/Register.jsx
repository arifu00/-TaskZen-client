import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import registerImg from "../../assets/Register/register.gif";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import Swal from "sweetalert2";
const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;
    const photo = data.photo;
    console.log(name, email, password, photo);

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);

        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            const userInfo = {
              name: data.name,
              email: data.email,
              image: data.photo,
            };

            Swal.fire({
              position: "center",
              icon: "success",
              title: "Sign Up complete",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate(location?.state ? location?.state : "/");

            // User information updated successfully
            // console.log("User created with name and photo:",);
          })
          .catch((error) => {
            console.error("Error updating user information:", error.message);
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="my-12">
      <div className="hero min-h-screen bg-gradient-to-r from-[#0F4C75] to-[#BBE1FA]">
        <div className="hero-content flex-col py-12 lg:flex-row">
          <div className="card shrink-0 lg:w-[700px]  rounded-lg   shadow-2xl border">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <h2 className="font-lora text-center text-2xl lg:text-4xl font-bold">
                Register Now
              </h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Name"
                  className="input input-bordered"
                />
                {errors.name?.type === "required" && (
                  <p className="text-red-600">Name is required</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  {...register("photo", { required: true })}
                  placeholder="Photo URL"
                  className="input input-bordered"
                />
                {errors.name?.type === "required" && (
                  <p className="text-red-600">Photo URL is required</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Email"
                  className="input input-bordered"
                />
                {errors.email?.type === "required" && (
                  <p className="text-red-600">Email is required</p>
                )}
              </div>
              <div className="form-control text-black">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", { required: true })}
                  placeholder="Password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary rounded-xl">Register</button>
              </div>
            </form>
            <h6 className="mt-2 text-base font-medium text-center">
              Or Sign In With
            </h6>
            <div className="text-center">
              <SocialLogin></SocialLogin>
            </div>
            <h6 className="my-4 text-center font-normal text-gray-100">
              Already Have an account?
              <NavLink
                to="/login"
                className=" underline text-blue-900 font-bold ml-1"
              >
                Login Here
              </NavLink>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
