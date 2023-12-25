import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import Container from "../../../Components/Container/Container";

const Profile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <Container>
      <div className="bg-[#fff] font-lora mt-12">
        {/* user info */}
        <h2 className="text-lg lg:text-4xl font-bold">MY PROFILE</h2>
        <div className="flex mt-10 pl-12 gap-8 items-center ">
            <div className="">
                <img className="rounded-full w-40 h-40" src={user?.photoURL} alt="" />
            </div>
            <div className="font-extrabold font-roboto">
                <h3 className="">Name</h3>
                <h3 className="mb-4">{user?.displayName}</h3>
                <h3 className="">Email</h3>
                <h3 className="">{user?.email}</h3>
            </div>
        </div>
       
      </div>
    </Container>
  );
};

export default Profile;
