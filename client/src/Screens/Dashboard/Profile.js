import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import Uploader from "../../Components/Uploader";
import { Input } from "../../Components/Usedinputs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ProfileValidation } from "../../Components/Validation/UserValidation";
import { InlineError } from "../../Components/Notfications/Error";
import { Imagepreview } from "../../Components/Imagepreview";
import { updateProfileAction } from "../../Redux/Actions/userActions";
import toast from "react-hot-toast";

function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.userLogin);
  const [imageUrl, setImageUrl] = useState(userInfo ? userInfo?.image : "");
  const { isLoading, isError, isSuccess } = useSelector(
    (state) => state.userUpdateProfile
  );
  // validate user
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ProfileValidation),
  });

  // on submit
  const onSubmit = (data) => {
    dispatch(updateProfileAction({ ...data, image: imageUrl }));
  };

  // useEffect
  useEffect(() => {
    if (userInfo) {
      setValue("fullName", userInfo?.fullName);
      setValue("email", userInfo?.email);
    }
    if (isSuccess) {
      dispatch({ type: "USER_UPDATE_PROFILE_RESET" });
    }
    if (isError) {
      toast.error(isError);
    }
  }, [userInfo, setValue, isSuccess, isError, dispatch]);

  return (
    <SideBar>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <h2 className="text-xl font-bold">Profile</h2>
        <div className="w-full grid lg:grid-cols-12 gap-6">
          <div className="col-span-10">
            <Uploader setImageUrl={setImageUrl} />
          </div>
          {/* image preview */}
          <div className="col-span-2">
            <Imagepreview
              image={imageUrl}
              name={userInfo ? userInfo?.fullName : "Netflixo React Tailwind"}
            />
          </div>
        </div>

        <div className="w-full">
          <Input
            label="FullName"
            placeholder="Netflixo React Tailwind"
            type="text"
            bg={true}
            name="fullName"
            register={register("fullName")}
          />
          {errors.fullName && <InlineError text={errors.fullName.message} />}
        </div>
        <div className="w-full">
          <Input
            label="Email"
            placeholder="netflixo@gmail.com"
            type="email"
            name="email"
            register={register("email")}
            bg={true}
          />
          {errors.email && <InlineError text={errors.email.message} />}
        </div>
        <div className="flex gap-2 flex-wrap flex-col-reverse sm:flex-row justify-between items-center my-4">
          <button className="bg-subMain font-medium transitions hover:bg-main border border-subMain text-white py-3 px-6 rounded w-full sm:w-auto">
            Delete Account
          </button>
          <button className="bg-main font-medium transitions hover:bg-subMain border border-subMain text-white py-3 px-6 rounded w-full sm:w-auto">
            {isLoading ? "Updating..." : "Update Profile"}
          </button>
        </div>
      </form>
    </SideBar>
  );
}

export default Profile;
