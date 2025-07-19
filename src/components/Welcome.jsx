import { ClipboardList, LogIn, UserPlus } from "lucide-react";

export default function Welcome() {
  return (
    <div className="min-h-screen flex flex-col px-2 items-center justify-center bg-gradient-to-tr from-indigo-100 to-slate-100">
      <div className="bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center">
        <ClipboardList size={48} className="text-indigo-500 mb-4" />
        <h1 className="text-3xl font-bold mb-2">AI Task Agent</h1>
        <p className="text-gray-500 mb-8 text-center">
          Organiza y consulta tus tareas en segundos. Agenda, consulta y mantén tu productividad con ayuda de IA.
        </p>
        <div className="flex gap-4">
          <a href="/login">
            <button className="flex items-center gap-2 px-4 py-2 bg-indigo-500 text-white rounded-xl hover:bg-indigo-600 transition">
              <LogIn size={20} /> Iniciar sesión
            </button>
          </a>
          <a href="/register">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-indigo-500 text-indigo-600 rounded-xl hover:bg-indigo-50 transition">
              <UserPlus size={20} /> Registrarse
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
