import { useAuth } from "../../context/AuthContext";
import { startOfWeek, addDays, format, isSameDay } from "date-fns";

export default function TaskBoard() {
  const { tasks } = useAuth();

  const today = new Date();
  const weekStart = startOfWeek(today, { weekStartsOn: 1 });
  const daysOfWeek = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i));

  const getTasksForDay = (date) => {
    return tasks.filter((task) => {
      if (!task.fecha_limite_tarea) return false;
      const taskDate = new Date(task.fecha_limite_tarea);
      return isSameDay(taskDate, date);
    });
  };

  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[850px] grid grid-cols-7 gap-4 px-4">
        {daysOfWeek.map((day, idx) => (
          <div
            key={idx}
            className="bg-white/80 border border-indigo-100 rounded-2xl p-3 shadow-md backdrop-blur-md flex flex-col items-center"
          >
            <h3 className="text-center text-indigo-700 font-semibold mb-2">
              {format(day, "EEEE", { locale: undefined }).slice(0, 3)}
              <br />
              <span className="text-xs text-gray-500">
                {format(day, "dd/MM")}
              </span>
            </h3>
            <div className="flex flex-col gap-2 w-full">
              {getTasksForDay(day).length > 0 ? (
                getTasksForDay(day).map((task, i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-r from-indigo-100 via-blue-100 to-cyan-100 p-2 rounded-xl shadow text-sm overflow-hidden"
                  >
                    <p className="font-semibold text-indigo-900 leading-snug break-words">
                      {task.nombre_tarea}
                    </p>
                    <p className="text-xs text-gray-500">
                      {task.fecha_limite_tarea &&
                        format(new Date(task.fecha_limite_tarea), "HH:mm")}{" "}
                      hrs
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-center text-xs text-gray-400">Sin tareas</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
