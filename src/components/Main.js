import React from 'react'
import { Typography, Button,Card, CardActions, CardContent, CardMedia, CssBaseline, Grid,Container } from '@material-ui/core'
import useStyles from '../style'

const Main = () =>{
    const classes = useStyles()
    const cards = [1,2,3,4,5,6,7,8,9]
    return(
        <>
        <main>
          <div className={classes.container}>
            <Container maxWidth="sm">
              <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                Photo Album
              </Typography>
              <Typography variant="h5" align="center" color="textSecondary" paragraph>Hello everyone this is an alubm and I am trying to make this sentence really long to see how it looks like on the screen</Typography>
              
              <div className={classes.button}>

              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">See my photos</Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">Secondary action</Button>
                </Grid>
              </Grid>
              </div>

            </Container>
          </div>
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
              
              {cards.map((card) => {
                return(
                   <Grid item key={card} xs={12} sm={6} md={4}>
                   <Card className={classes.card}>
                     <CardMedia className={classes.cardMedia} image="https://images.unsplash.com/photo-1617710817724-3aa1001c056e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max" title="Image title"/>
                     <CardContent className={classes.cardContent}>
                       <Typography gutterBottom>
                         Heading
                       </Typography>
                       <Typography>
                         This is a media card you can you this section to describe the content
                       </Typography>
                     </CardContent>
                     <CardActions>
                       <Button size="small" color="primary">View</Button>
                       <Button size="small" color="primary">Edit</Button>
                     </CardActions>
                   </Card>
                 </Grid>
                )
              })}
             
            </Grid>
          </Container>
        </main>
        </>
    )
}
export default Main