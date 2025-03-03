import { Search } from "@mui/icons-material"
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { DarkModeContext } from "../../data/contexts/DarkMode.context";
import { useContext } from "react";
interface HeaderProps{
    title:string
    onLogoClick?:()=>void
}

export default function Header({title, onLogoClick}: HeaderProps) {
  const {darkMode}=useContext(DarkModeContext)
    return <AppBar position="sticky" style={{ backgroundColor: darkMode ? "#222" : undefined }}>
    <Toolbar>
      <IconButton onClick={onLogoClick}>
        <WbSunnyIcon sx={{ color:'white' }}/>
      </IconButton>
      <Typography
        variant="h6"
        noWrap
        component="div"
      >
        {title}
      </Typography>
     
    </Toolbar>
  </AppBar>
}