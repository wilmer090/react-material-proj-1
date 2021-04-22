import React from 'react'
import { Typography,AppBar,CssBaseline,Toolbar} from '@material-ui/core'
import { PhotoCamera } from '@material-ui/icons'
import useStyles from '../style'

const Nav = () => {
    const classes = useStyles()
    return(
    <>
    <CssBaseline />
    <AppBar position="relative">
        <Toolbar>
        <PhotoCamera className={classes.icon}/>
        <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
    </AppBar>
    </>
    )
}

export default Nav