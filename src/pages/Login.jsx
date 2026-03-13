import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Anchor, Mail, Lock, Eye, EyeOff } from "lucide-react";
import Button from "../components/common/Button";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = (data) => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Login successful! (Simulated)");
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-20 flex items-center justify-center bg-navy relative overflow-hidden px-4">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0A2540] via-[#061829] to-[#0E3460] animate-pulse"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-brand/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-brand/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 w-full max-w-md">
        <div className="glass p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl">
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-2 mb-6">
              <Anchor className="text-cyan-brand w-8 h-8" />
              <span className="text-white text-xl font-bold font-heading tracking-wide border-b-2 border-transparent hover:border-cyan-brand transition-colors">
                Landmine Soft
              </span>
            </Link>
            <h1 className="text-2xl font-bold text-white mb-2 font-heading">Welcome Back</h1>
            <p className="text-gray-400 text-sm">Sign in to your account</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
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
                  <Lock className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  {...register("password", { 
                    required: "Password is required",
                    minLength: { value: 6, message: "Minimum 6 characters required" }
                  })}
                  type={showPassword ? "text" : "password"}
                  className={`block w-full pl-10 pr-10 py-3 border ${errors.password ? "border-red-500 bg-red-500/10" : "border-white/20 bg-navy/50"} rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-brand focus:border-transparent transition-colors`}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>}
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center text-gray-400 hover:text-white cursor-pointer transition-colors">
                <input type="checkbox" className="mr-2 rounded bg-navy-light text-cyan-brand focus:ring-cyan-brand focus:ring-offset-navy border-white/20 cursor-pointer" />
                Remember me
              </label>
              <a href="#" className="text-cyan-brand hover:text-white transition-colors">Forgot Password?</a>
            </div>

            <Button type="submit" variant="primary" size="lg" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                 <span className="flex items-center justify-center gap-2">
                   <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path></svg>
                   Signing in...
                 </span>
              ) : "Sign In"}
            </Button>
          </form>

          <div className="mt-8 relative flex items-center justify-center">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/20"></div></div>
            <span className="relative bg-navy px-4 text-xs tracking-widest text-gray-400 uppercase">OR</span>
          </div>

          <div className="mt-8 space-y-4">
            <button className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-white/5 border border-white/20 hover:bg-white/10 rounded-xl text-white font-medium transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </button>
            <p className="text-center text-sm text-gray-400">
              Don't have an account? <Link to="/register" className="text-cyan-brand font-medium hover:text-white transition-colors">Register</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
