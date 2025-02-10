import { useState } from "react";
import { useForm } from "react-hook-form";
import { LockClosedIcon, EnvelopeIcon } from "@heroicons/react/24/solid"; // Correct imports
import axios from "axios";

export default function AuthForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setErrorMessage("");
    setIsSubmitting(true);
    
    try {
      const response = await axios.post("https://api.example.com/login", data);
      console.log("Success:", response.data);
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Email ou mot de passe incorrect.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md space-y-6 bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-center text-2xl font-bold text-gray-900">Connexion</h2>

        {errorMessage && (
          <p className="text-sm text-red-500 bg-red-100 p-2 rounded-md">{errorMessage}</p>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <div className="relative mt-1">
              <EnvelopeIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input
                type="email"
                {...register("email", { required: "Email requis" })}
                className="w-full rounded-md border border-gray-300 px-10 py-2 focus:ring-2 focus:ring-blue-500"
                placeholder="exemple@email.com"
              />
            </div>
            {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
          </div>

          {/* Mot de passe */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Mot de passe</label>
            <div className="relative mt-1">
              <LockClosedIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input
                type="password"
                {...register("password", { required: "Mot de passe requis" })}
                className="w-full rounded-md border border-gray-300 px-10 py-2 focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
              />
            </div>
            {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
          </div>

          {/* Bouton */}
          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700 transition disabled:bg-gray-400"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Connexion..." : "Se connecter"}
          </button>
        </form>

        {/* Lien vers l'inscription */}
        <p className="text-center text-sm text-gray-600">
          Pas de compte ? <a href="/register" className="text-blue-600 hover:underline">Inscrivez-vous</a>
        </p>
      </div>
    </div>
  );
}
