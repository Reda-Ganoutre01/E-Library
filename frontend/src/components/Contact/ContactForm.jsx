import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import FormInput from "../Form/FormInput";
import Btn from "../Form/Btn";
import SuccessMessage from "../Form/SuccessMessage";
import ErrorMessage from "../Form/ErrorMessage";
import TextArea from "../Form/TextArea"; // Import the TextArea component
import { EnvelopeIcon, UserIcon } from "@heroicons/react/24/solid";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setSuccessMessage("");
    setErrorMessage("");
    setIsSubmitting(true);

    try {
      const response = await axios.post("https://api.example.com/contact", data);
      setSuccessMessage("Your message has been sent successfully!");
    } catch (error) {
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md space-y-6 bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-center text-2xl font-bold text-gray-900">Contact Us</h2>

        {/* Display Success Message */}
        {successMessage && <SuccessMessage message={successMessage} />}

        {/* Display Error Message */}
        {errorMessage && <ErrorMessage message={errorMessage} />}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Username Field */}
          <FormInput
            label="Username"
            type="text"
            name="username"
            placeholder="Enter your username"
            register={register("username", { required: "Username is required" })}
            icon={UserIcon}
            error={errors.username?.message}
          />

          {/* Email Field */}
          <FormInput
            label="Email"
            type="email"
            name="email"
            placeholder="example@email.com"
            register={register("email", { required: "Email is required" })}
            icon={EnvelopeIcon}
            error={errors.email?.message}
          />

          {/* Message Field */}
          <TextArea
            label="Message"
            name="message"
            placeholder="Your message"
            register={register("message", { required: "Message is required" })}
            error={errors.message?.message}
          />

          {/* Submit Button */}
          <Btn
            type="submit"
            classname="w-full rounded-md bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700 transition disabled:bg-gray-400"
            text={isSubmitting ? "Sending..." : "Send Message"}
            disabled={isSubmitting}
          />
        </form>
      </div>
    </div>
  );
}
