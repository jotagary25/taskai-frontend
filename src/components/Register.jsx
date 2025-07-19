  import { ArrowLeft } from "lucide-react";
  import { useState } from "react";
  import { API_URL } from "../config/config";

  export default function RegisterForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState(""); // Nuevo estado
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
      e.preventDefault();
      setError("");
      setSuccess(false);
      if (password !== repeatPassword) {
        setError("Las contraseñas no coinciden.");
        return;
      }

      const res = await fetch(API_URL + "/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        setSuccess(true);
        setTimeout(() => window.location.href = "/login", 1200);
      } else {
        setError("Error al registrar usuario");
      }
      setLoading(false);
    }

    return (
      <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-200 via-white to-cyan-100 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center -z-10">
          <div className="w-[480px] h-[480px] bg-white/40 rounded-full blur-3xl shadow-2xl" />
        </div>
        <a
          href="/"
          className="fixed top-10 left-10 flex items-center text-gray-600 hover:text-indigo-500 font-medium transition-colors z-10"
        >
          <ArrowLeft className="mr-2" size={22} /> Volver
        </a>
        <div
          className="w-full max-w-md rounded-3xl shadow-xl px-12 py-12 flex flex-col items-center backdrop-blur-2xl border border-white/60 bg-white/80"
          style={{
            boxShadow:
              "0 10px 32px 0 rgba(31,38,135,0.15), 0 2px 8px 0 rgba(60,60,60,0.09)",
          }}
        >
          <div className="mb-8 flex flex-col items-center">
            <span className="inline-block bg-gradient-to-tr from-indigo-400 via-blue-400 to-cyan-300 p-3 rounded-full mb-2 shadow-md">
              <svg width={40} height={40} fill="none" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" fill="#fff" />
                <rect x="8" y="8" width="8" height="8" rx="2" fill="#6366F1" />
              </svg>
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-1 tracking-tight">
              Registrarse
            </h2>
            <p className="text-gray-500 text-base text-center max-w-[90%]">
              Crea tu cuenta para comenzar a organizar tus tareas con IA
            </p>
          </div>
          {error && (
            <div className="mb-4 w-full text-center text-red-600 bg-red-50 p-2 rounded-xl border border-red-200">
              {error}
            </div>
          )}
          {success && (
            <div className="mb-4 w-full text-center text-indigo-700 bg-indigo-50 p-2 rounded-xl border border-indigo-200">
              ¡Registro exitoso! Redirigiendo...
            </div>
          )}
          <form className="w-full flex flex-col gap-6" onSubmit={handleSubmit} autoComplete="on">
            <input
              className="border-0 bg-white/80 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-300 transition text-lg placeholder-gray-400 shadow-inner"
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <input
              className="border-0 bg-white/80 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-300 transition text-lg placeholder-gray-400 shadow-inner"
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            <input
              className="border-0 bg-white/80 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-300 transition text-lg placeholder-gray-400 shadow-inner"
              type="password"
              placeholder="Repite la contraseña"
              value={repeatPassword}
              onChange={e => setRepeatPassword(e.target.value)}
              required
            />
            <button
              className="bg-gradient-to-tr from-indigo-500 via-blue-500 to-cyan-400 hover:from-indigo-600 hover:to-blue-500 text-white font-bold py-3 rounded-xl shadow-lg transition text-lg mt-2"
              type="submit"
              disabled={loading}
            >
              {loading ? "Registrando..." : "Registrarse"}
            </button>
          </form>
          <div className="mt-8 text-gray-500 text-base">
            ¿Ya tienes cuenta?{" "}
            <a
              href="/login"
              className="text-indigo-600 hover:underline font-medium"
            >
              Inicia sesión aquí
            </a>
          </div>
        </div>
      </div>
    );
  }
