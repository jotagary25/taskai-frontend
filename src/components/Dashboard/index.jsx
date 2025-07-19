import { AuthProvider } from "../../context/AuthContext";
import AuthGuard from "../AuthGuard";
import DashboardContent from "./DashboardContent";

export default function Dashboard() {
  return (
    <AuthProvider>
      <AuthGuard>
        <DashboardContent />
      </AuthGuard>
    </AuthProvider>
  )
}