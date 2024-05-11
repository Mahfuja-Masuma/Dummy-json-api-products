import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

export const LayoutOne = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}
