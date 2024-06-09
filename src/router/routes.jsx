import GroupIcon from '@mui/icons-material/Group';
import LogoutIcon from '@mui/icons-material/Logout';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
const routes = [
    {
        path: "/main",
        content: "Products",
        icon: <GroupIcon/>
    },
    {
        path: "/main/todo",
        content: "Todo",
        icon: <FormatListBulletedIcon/>
    },
    {
        path: "/",
        content: "LogOut",
        icon: <LogoutIcon/>
    }
]

export default routes