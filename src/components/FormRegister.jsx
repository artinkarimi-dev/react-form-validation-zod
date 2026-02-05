import React, { useId, useState } from "react";
import toast from "react-hot-toast";
import swal from "sweetalert";
import loginSchema from "../../Validators/loginValidators";

function FormRegister() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const id = useId(); // Prevent label/input id collisions

  const commandMessage = (e) => {
    e.preventDefault();

    const newUser = { username, email, password };

    // Zod is the single source of validation truth
    const result = loginSchema.safeParse(newUser);

    // Clear any previous toasts before starting a new flow
    toast.dismiss();
    toast.loading("Under review...");

    setTimeout(() => {
      // Always clean loading state before showing result
      toast.dismiss();

      if (!result.success) {
        toast.error(result.error.issues[0].message);
        return;
      }

      swal({
        title: "You have successfully registered",
        icon: "success",
        className: "glass-swal",
        timer: 2000,
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-black via-gray-900 to-black">
      <form
        onSubmit={commandMessage}
        className="
					w-full max-w-md
					p-6 sm:p-8
					space-y-5
					rounded-2xl
					border border-white/10
					bg-white/5 backdrop-blur-xl
					text-gray-100
					shadow-2xl
					transition-all duration-500
					hover:scale-[1.02]
				"
      >
        <h2 className="text-center text-2xl font-bold tracking-wide">
          Create Account
        </h2>

        <div className="space-y-1">
          <label htmlFor={`${id}-username`} className="text-sm text-gray-300">
            Username
          </label>
          <input
            type="text"
            id={`${id}-username`}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="
							w-full px-4 py-2.5
							rounded-lg
							bg-gray-900/70
							border border-gray-700
							focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30
							transition-all duration-300
							outline-none
						"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor={`${id}-email`} className="text-sm text-gray-300">
            Email
          </label>
          <input
            type="email"
            id={`${id}-email`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="
							w-full px-4 py-2.5
							rounded-lg
							bg-gray-900/70
							border border-gray-700
							focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30
							transition-all duration-300
							outline-none
						"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor={`${id}-password`} className="text-sm text-gray-300">
            Password
          </label>
          <input
            type="password"
            id={`${id}-password`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="
							w-full px-4 py-2.5
							rounded-lg
							bg-gray-900/70
							border border-gray-700
							focus:border-pink-500 focus:ring-2 focus:ring-pink-500/30
							transition-all duration-300
							outline-none
						"
          />
        </div>

        <button
          type="submit"
          className="
						w-full py-3
						rounded-xl
						bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600
						font-semibold
						tracking-wide
						transition-all duration-300
						hover:brightness-110 hover:scale-[1.03]
						active:scale-95
					"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default FormRegister;
