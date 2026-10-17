







// import axios from "axios";
// import { useState } from "react";
// import { useNavigate } from "react-router";

// const API_URL = import.meta.env.VITE_API_URL;

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post(
//         `${API_URL}/auth/login`,
//         {
//           email,
//           password,
//         },
//         {
//           withCredentials: true,
//         }
//       );

//       alert(res.data.message || "Login successful!");
//       navigate("/dashboard");
//     } catch (error) {
//       alert(
//         error.response?.data?.message ||
//           "Login failed. Please check your email and password."
//       );
//     }
//   };

//   return (
//     <div>
//       <h1>Login</h1>

//       <form onSubmit={handleLogin}>
//         <input
//           type="email"
//           placeholder="Email..."
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />

//         &nbsp;

//         <input
//           type="password"
//           placeholder="Password..."
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />

//         <br />
//         <br />

//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;





import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router";

const API_URL = import.meta.env.VITE_API_URL;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      setLoading(true);

      const res = await axios.post(
        `${API_URL}/auth/login`,
        {
          email: email.trim(),
          password,
        },
        {
          withCredentials: true,
        }
      );

      setSuccess(res.data.message || "Login successful!");

      setTimeout(() => {
        navigate("/dashboard", { replace: true });
      }, 500);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Login failed. Please check your email and password."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative flex min-h-[calc(100vh-80px)] items-center justify-center overflow-hidden bg-slate-50 px-4 py-12">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-violet-200/40 blur-3xl" />

      <div className="relative grid w-full max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-indigo-100/60 md:grid-cols-2">
        {/* Left panel */}
        <section className="relative hidden flex-col justify-between overflow-hidden bg-gradient-to-br from-indigo-700 via-indigo-600 to-violet-700 p-10 text-white md:flex lg:p-12">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border-[40px] border-white/10" />
          <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-white/5" />

          <div className="relative">
            <Link to="/" className="mb-10 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/15 text-2xl">
                ✎
              </div>
              <div>
                <h1 className="text-2xl font-extrabold tracking-tight">
                  NoteSpace
                </h1>
                <p className="text-sm text-indigo-100">
                  Your thoughts, organized.
                </p>
              </div>
            </Link>

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-200">
              Welcome back
            </p>

            <h2 className="mt-4 text-4xl font-extrabold leading-tight lg:text-5xl">
              Your ideas are waiting for you.
            </h2>

            <p className="mt-5 leading-7 text-indigo-100">
              Sign in to revisit your notes, continue your work and keep all
              your important thoughts in one place.
            </p>
          </div>

          <div className="relative mt-12 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
            <p className="text-lg font-semibold">
              “Stay organized. Keep creating.”
            </p>
            <p className="mt-2 text-sm text-indigo-200">
              Your personal space for every idea.
            </p>
          </div>
        </section>

        {/* Login form */}
        <section className="p-6 sm:p-10 lg:p-12">
          <div className="mb-8 md:hidden">
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-xl text-white">
                ✎
              </div>
              <span className="text-xl font-extrabold text-slate-900">
                Note<span className="text-indigo-600">Space</span>
              </span>
            </Link>
          </div>

          <div className="mb-8">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-indigo-600">
              Sign in to your account
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">
              Welcome back!
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-500">
              Enter your login details to access your notes.
            </p>
          </div>

          {error && (
            <div
              role="alert"
              className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
            >
              {error}
            </div>
          )}

          {success && (
            <div
              role="status"
              className="mb-5 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700"
            >
              ✓ {success}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label
                htmlFor="login-email"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Email address
              </label>
              <input
                id="login-email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
              />
            </div>

            <div>
              <label
                htmlFor="login-password"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Password
              </label>

              <div className="relative">
                <input
                  id="login-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 pr-20 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((previous) => !previous)}
                  className="absolute inset-y-0 right-3 my-auto h-9 rounded-lg px-2 text-sm font-semibold text-indigo-600 hover:bg-indigo-50"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-3.5 font-bold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5 hover:from-indigo-700 hover:to-violet-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Signing in..." : "Sign In"}
              {!loading && <span aria-hidden="true">→</span>}
            </button>
          </form>

          <p className="mt-7 text-center text-sm text-slate-500">
            Don't have an account?{" "}
            <Link
              to="/Register"
              className="font-bold text-indigo-600 hover:text-indigo-800"
            >
              Create account
            </Link>
          </p>

          <p className="mt-8 text-center text-xs text-slate-400">
            © {new Date().getFullYear()} NoteSpace. Made for your ideas.
          </p>
        </section>
      </div>
    </main>
  );
};

export default Login;

