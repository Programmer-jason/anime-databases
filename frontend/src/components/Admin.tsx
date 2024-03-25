import { Outlet } from "react-router-dom"
import AdminNav from "./AdminNav"

function Admin() {
  return (
    <main className="w-screen bg-teal-950 h-screen overflow-auto overflow-x-hidden">
        <AdminNav />
        <Outlet />
    </main>
  )
}

export default Admin