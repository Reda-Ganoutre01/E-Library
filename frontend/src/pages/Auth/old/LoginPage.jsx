// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { LockClosedIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
// import { Link } from "react-router-dom";
// import AuthService from "../../services/AuthService"; // Import AuthService

// export default function LoginPage() {
//   const []=use
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const [errorMessage, setErrorMessage] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const onSubmit = async (data) => {
//     setErrorMessage("");
//     setIsSubmitting(true);
    
//     try {
//       // Use AuthService.login to authenticate the user
//       const response = await AuthService.login(data.email, data.password);
//       console.log("Success:", response.data);
//       // Here you could store the token, redirect the user, etc.
//     } catch (error) {
//       setErrorMessage(
//         error.response?.data?.message || "Incorrect email or password."
//       );
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
//       <div className="w-full max-w-md space-y-6 bg-white p-8 rounded-2xl shadow-lg">
//         <h2 className="text-center text-2xl font-bold text-gray-900">Login</h2>

//         {errorMessage && (
//           <p className="text-sm text-red-500 bg-red-100 p-2 rounded-md">
//             {errorMessage}
//           </p>
//         )}

//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//           {/* Email */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Email
//             </label>
//             <div className="relative mt-1">
//               <EnvelopeIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
//               <input
//                 type="email"
//                 {...register("email", { required: "Email is required" })}
//                 className="w-full rounded-md border border-gray-300 px-10 py-2 focus:ring-2 focus:ring-blue-500"
//                 placeholder="example@email.com"
//               />
//             </div>
//             {errors.email && (
//               <p className="text-sm text-red-500">{errors.email.message}</p>
//             )}
//           </div>

//           {/* Password */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Password
//             </label>
//             <div className="relative mt-1">
//               <LockClosedIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
//               <input
//                 type="password"
//                 {...register("password", { required: "Password is required" })}
//                 className="w-full rounded-md border border-gray-300 px-10 py-2 focus:ring-2 focus:ring-blue-500"
//                 placeholder="••••••••"
//               />
//             </div>
//             {errors.password && (
//               <p className="text-sm text-red-500">{errors.password.message}</p>
//             )}
//           </div>

//           {/* Submit button */}
//           <button
//             type="submit"
//             className="w-full rounded-md bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700 transition disabled:bg-gray-400"
//             disabled={isSubmitting}
//           >
//             {isSubmitting ? "Logging in..." : "Login"}
//           </button>
//         </form>

//         {/* Link to register */}
//         <p className="text-center text-sm text-gray-600">
//           Don't have an account?{" "}
//           <Link to={"/register"} className="text-blue-600 hover:underline">
//             Sign up
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }
