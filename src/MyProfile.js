import './App.css';
import Button from '@material-ui/core/Button';
import { AppBar, Container, IconButton, Toolbar, Box, Paper, Grid } from '@material-ui/core';
import { mergeClasses } from '@material-ui/styles';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import PersonIcon from '@mui/icons-material/Person';
import {makeStyles} from '@material-ui/core/styles';
import React from 'react';
import ButtonBase from '@mui/material/ButtonBase';
import { styled } from '@mui/material/styles';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });

const useStyles = makeStyles((theme) =>({
  root:{
    flexGrow:1
  },
  menuButton:{
    marginRight: theme.spacing(1)
  },
  title:{
    flexGrow:1
  },
  mainFeaturesPost:{
    position: "relative",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat",
    backgroundPosition: "center",
    padding: theme.spacing(20)
  },
  mainFeaturesPostContent:{
    position: "relative",
    padding: theme.spacing(34)
  }
}))


function MyProfile(){
    const classes = useStyles();

    const [group, setGroup] = React.useState('');
  
    const Groups = (event) => {
      setGroup(event.target.value);
    };
  
    const [specifically, setSpecifically] = React.useState('');
  
    const Specificallys = (event) => {
      setSpecifically(event.target.value);
    };
  
    return(
      <>
      <AppBar position="static" style={{backgroundColor:"#A4C8EC", background:"rgba(164, 200, 236, 0.75)" }}>
        <Container fixed>
            <Toolbar>
                <MiscellaneousServicesIcon fontSize='large' style={{color: "black"}}/>
            <Box mr={3}>
                <Button color="inherit" variant='outlined' style={{color: "black"}}>Каталог</Button>
            </Box>
            <Box mr={3}>
                <Button color="inherit" variant='outlined' style={{color: "black"}}>Мои заявки</Button>
            </Box>
            <Box mr={3}>
                <Button color="4c7bd9" variant='outlined'>Биржа заявок</Button>
            </Box>
            <Box mr={3}>
                <Button color="inherit" variant='outlined' style={{color: "black"}}>Выполняемые задачи</Button> 
            </Box>       
            <IconButton edge="start" color="inherit" aria-label='menu' className='App'>
                <PersonIcon fontSize='large' style={{color: "black"}}/>
            </IconButton>
        </Toolbar>
        </Container>
      </AppBar>
      
      <main>
        <Paper className={classes.mainFeaturesPost} style={{backgroundImage: "url(https://tradeforexblog.com/images/iqcent/1624320455263/original/how-to-contact-iqcent-support.jpg)"}}>
        <Container maxWidth="md" style={{position: "relative", backgroundColor:"rgba(164, 200, 236, 0.75)", width:"880px"}}>
        <Grid container spacing={2}>
            <Grid item xs={5}>
                    <label>Личный кабинет</label>
                    <div>
                    <ButtonBase sx={{ width: 128, height: 128 }}>
                        <Img alt="complex" src="https://www.dlf.pt/dfpng/middlepng/133-1335341_clip-art-anime-girl-outline-yandere-ahegao-face.png" />
                    </ButtonBase>
                    </div>
                    <Button color="4c7bd9" variant='contained'>Изменить</Button>
            </Grid>
            <Grid item xs={5}>
                <div><label>Фамилия Имя Отчество</label></div>
                <div><label>Должность</label></div>
                <div><label>Номер телефона</label></div>
                <div><label>Отдел</label></div>           
            </Grid>
        </Grid> 
        </Container>   
        </Paper>
      </main>
      </>
      );
  }

export default MyProfile;