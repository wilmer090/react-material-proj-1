import React from 'react'
import { Typography, Button,Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Container } from '@material-ui/core'
import useStyles from '../style'

const Footer = () =>{
    const classes = useStyles()
    return(
        <>
         <footer className={classes.footer}>
          <Typography align="center" variant="h6" gutterBottom>Footer</Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary">Footer description</Typography>
        </footer>
        </>
    )
}

export default Footer