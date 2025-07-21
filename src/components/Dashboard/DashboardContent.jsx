import { LogOut, ClipboardList } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import TaskBoard from "./TaskBoard";
import ChatBoard from "./ChatBoard";

export default function DashboardContent() {
  const { logout, user, tasks } = useAuth();
  const user_email = user?.email || "usuario@mail.com"
  const user_id = user?.id || "123456789"

  return (
    <div className="w-full relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-200 via-white to-cyan-100 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[480px] h-[480px] bg-white/40 rounded-full blur-3xl shadow-2xl" />
      </div>
      <div className="fixed top-0 left-0 w-full flex items-center justify-end px-10 py-5 z-20">
        <button
          onClick={() => {
            logout();
            window.location.href = "/login";
          }}
          className="flex items-center gap-2 px-4 py-2 bg-white/70 border border-indigo-100 text-indigo-700 rounded-xl font-medium shadow hover:bg-indigo-50 transition"
        >
          <LogOut size={20} /> Cerrar sesión
        </button>
      </div>

      <div
        className="w-full max-w-md rounded-3xl shadow-xl px-12 py-14 flex flex-col items-center backdrop-blur-2xl border border-white/60 bg-white/80"
        style={{
          boxShadow:
            "0 10px 32px 0 rgba(31,38,135,0.15), 0 2px 8px 0 rgba(60,60,60,0.09)",
        }}
      >
        <div className="mb-8 flex flex-col items-center">
          <span className="inline-block bg-gradient-to-tr from-indigo-400 via-blue-400 to-cyan-300 p-3 rounded-full mb-2 shadow-md">
            <ClipboardList size={36} className="text-indigo-600" />
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2 tracking-tight">
            ¡Bienvenido!
          </h2>
          <p className="text-gray-500 text-base text-center max-w-[90%] mb-4">
            Has iniciado sesión como <span className="font-bold text-indigo-600">{user_email}</span>
            Tu sessionID es: <span className="font-bold text-indigo-600">{user_id}</span>
          </p>
        </div>

        {/* Aquí va el contenido de tu dashboard */}
        <div className="w-full flex flex-col gap-4">
          <div className="w-full mt-6">
            <ChatBoard />
            <TaskBoard />
          </div>
        </div>
      </div>
    </div>
  );
}
