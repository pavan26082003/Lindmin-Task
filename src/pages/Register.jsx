import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Anchor, Mail, Lock, Eye, EyeOff, User, Phone } from "lucide-react";
import Button from "../components/common/Button";

const Register = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({ mode: "onBlur" });
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [strength, setStrength] = useState({ label: "Too short", color: "bg-red-500", width: "w-0" });

  const passwordValue = watch("password", "");

  useEffect(() => {
    if (!passwordValue) {
      setStrength({ label: "", color: "bg-transparent", width: "w-0" });
    } else if (passwordValue.length < 6) {
      setStrength({ label: "Weak", color: "bg-red-500", width: "w-1/3" });
    } else if (passwordValue.length >= 6 && passwordValue.length < 10 && !/[A-Z!@#$%^&*]/.test(passwordValue)) {
      setStrength({ label: "Medium", color: "bg-yellow-500", width: "w-2/3" });
    } else {
      setStrength({ label: "Strong", color: "bg-green-500", width: "w-full" });
    }
  }, [passwordValue]);

  const onSubmit = (data) => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Registration successful! (Simulated)");
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-24 pb-16 flex items-center justify-center bg-navy relative overflow-hidden px-4">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0A2540] via-[#061829] to-[#0E3460] animate-pulse"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-brand/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-brand/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 w-full max-w-md my-auto">
        <div className="glass p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl">
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-2 mb-6">
              <Anchor className="text-cyan-brand w-8 h-8" />
            </Link>
            <h1 className="text-2xl font-bold text-white mb-2 font-heading">Create an Account</h1>
            <p className="text-gray-400 text-sm">Join Landmine Soft's client portal</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  {...register("name", { required: "Full Name is required" })}
                  type="text"
                  className={`block w-full pl-10 pr-3 py-3 border ${errors.name ? "border-red-500 bg-red-500/10" : "border-white/20 bg-navy/50"} rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-brand focus:border-transparent transition-colors`}
                  placeholder="Full Name"
                />
              </div>
              {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
            </div>

            <div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  {...register("email", { 
                    required: "Email is required",
                    pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email format" }
                  })}
                  type="email"
                  className={`block w-full pl-10 pr-3 py-3 border ${errors.email ? "border-red-500 bg-red-500/10" : "border-white/20 bg-navy/50"} rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-brand focus:border-transparent transition-colors`}
                  placeholder="name@company.com"
                />
              </div>
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
            </div>

            <div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  {...register("phone")}
                  type="tel"
                  className="block w-full pl-10 pr-3 py-3 border border-white/20 bg-navy/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-brand focus:border-transparent transition-colors"
                  placeholder="Phone Number (Optional)"
                />
              </div>
            </div>

            <div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  {...register("password", { 
                    required: "Password is required",
                    minLength: { value: 6, message: "Minimum 6 characters required" }
                  })}
                  type={showPassword ? "text" : "password"}
                  className={`block w-full pl-10 pr-10 py-3 border ${errors.password ? "border-red-500 bg-red-500/10" : "border-white/20 bg-navy/50"} rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-brand focus:border-transparent transition-colors`}
                  placeholder="Password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              {/* Strength Indicator */}
              <div className="mt-2 h-1 w-full bg-gray-700 rounded-full overflow-hidden flex">
                <div className={`h-full transition-all duration-300 ${strength.width} ${strength.color}`}></div>
              </div>
              {strength.label && <div className="mt-1 text-xs text-right text-gray-400">{strength.label}</div>}
              {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>}
            </div>

            <div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  {...register("confirmPassword", { 
                    required: "Confirm Password is required",
                    validate: val => {
                      if (watch('password') !== val) {
                        return "Your passwords do not match";
                      }
                    }
                   })}
                  type={showPassword ? "text" : "password"}
                  className={`block w-full pl-10 pr-3 py-3 border ${errors.confirmPassword ? "border-red-500 bg-red-500/10" : "border-white/20 bg-navy/50"} rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-brand focus:border-transparent transition-colors`}
                  placeholder="Confirm Password"
                />
              </div>
              {errors.confirmPassword && <p className="mt-1 text-sm text-red-500">{errors.confirmPassword.message}</p>}
            </div>

            <div className="flex items-center text-sm">
              <label className="flex items-start text-gray-400 cursor-pointer">
                <input 
                  type="checkbox" 
                  {...register("terms", { required: "You must agree to the Terms of Service" })}
                  className="mt-1 mr-2 rounded bg-navy-light text-cyan-brand focus:ring-cyan-brand focus:ring-offset-navy border-white/20 cursor-pointer" 
                />
                <span className="leading-snug">
                  I agree to the <a href="#" className="text-cyan-brand hover:underline">Terms of Service</a> and <a href="#" className="text-cyan-brand hover:underline">Privacy Policy</a>
                </span>
              </label>
            </div>
            {errors.terms && <p className="mt-1 text-sm text-red-500">{errors.terms.message}</p>}

            <Button type="submit" variant="primary" size="lg" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                 <span className="flex items-center justify-center gap-2">
                   <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path></svg>
                   Creating account...
                 </span>
              ) : "Register"}
            </Button>
          </form>

          <div className="mt-8 space-y-4">
            <p className="text-center text-sm text-gray-400">
              Already have an account? <Link to="/login" className="text-cyan-brand font-medium hover:text-white transition-colors">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
