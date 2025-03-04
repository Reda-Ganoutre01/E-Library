import FormInput from "../Form/FormInput";
import Btn from "../Form/Btn";
import TextArea from "../Form/TextArea";
import { EnvelopeIcon, UserIcon } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import fetchUser from "../../features/user/actions/fetchUser";

export default function ContactForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);
  const { userInfo, loadingUser, errorUser } = useSelector((state) => state.users);
  useEffect(() => {
    if (user?.sub) {
      dispatch(fetchUser(user.sub));
    }
  }, [dispatch, user?.sub]);

  const handleSubmit = async (e) => {
 
    
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md space-y-6 bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-center text-2xl font-bold text-gray-900">Contact Us</h2>

       

        <form onSubmit={handleSubmit} className="space-y-4">
          <FormInput
            label="Username"
            type="text"
            name="username"
            value={userInfo?.username || ""}
            placeholder="Enter your username"
            icon={UserIcon}
          />

          {/* Email Field */}
          <FormInput
            label="Email"
            type="email"
            name="email"
            value={userInfo?.email || ""}
            placeholder="example@email.com"
            icon={EnvelopeIcon}
          />

          {/* Message Field */}
          <TextArea
            label="Message"
            name="message"
            placeholder="Your message"
          />

          {/* Submit Button */}
          <Btn
            type="submit"
            classname="w-full rounded-md bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700 transition disabled:bg-gray-400"
            text={"Send"}
          />
        </form>
      </div>
    </div>
  );
}
