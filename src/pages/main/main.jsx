import { Outlet } from "react-router-dom"
// import Sidebar from "../../components/ui/sidebar/sidebar"
// import Header from "../../components/ui/header/header"
import ResponsiveDrawer from "../../components/layout"
import './main.css'
const Main = () => {
  return (
    <div>
      <ResponsiveDrawer/>
    </div>
  )
}

export default Main