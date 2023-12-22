import { useForm } from "react-hook-form";
import loginImg from "../../assets/login/login.jpg";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import { NavLink, useNavigate } from "react-router-dom";
const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    console.log(email, password);
    // firebase login
    loginUser(email, password)
      .then((res) => {
        console.log(res.user);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Sign In Successful",
          showConfirmButton: true,
          timer: 1200,
        });
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="my-12">
      <div className="hero min-h-screen bg-gradient-to-r from-[#0F4C75] to-[#BBE1FA]">
        <div className="hero-content flex-col lg:gap-10 lg:flex-row">
          <div className="object-cover lg:w-6/12">
            <img src={loginImg} alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <h2 className="font-lora text-center text-2xl lg:text-4xl font-bold">
                Login Now
              </h2>
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
              <div className="form-control">
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
                <h6 className="mt-7 text-base font-medium text-center">
                  Or Sign In With
                </h6>
                <div className="text-center">
                  <SocialLogin></SocialLogin>
                </div>
                <h6  className="mt-4 text-center font-normal text-gray-700">
                New user?
                <NavLink
                  to="/register"
                  className=" underline text-red-500 font-bold ml-1"
                >
                  Register Here
                </NavLink>
              </h6>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary rounded-xl">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
