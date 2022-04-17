import './App.css';
import Button from '@material-ui/core/Button';
import { AppBar, Container, IconButton, Toolbar, Box, Paper, Typography, MenuItem } from '@material-ui/core';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import PersonIcon from '@mui/icons-material/Person';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import {makeStyles} from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Label } from '@material-ui/icons';

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
    marginBottom: theme.spacing(4),
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat",
    backgroundPosition: "center",
    padding: theme.spacing(5)
  },
  mainFeaturesPostContent:{
    position: "relative",
    padding: theme.spacing(34)
  }
}))


function CreateApplications(){
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
          <IconButton edge="start" color="inherit" aria-label='menu' className='App'>
            <PersonIcon fontSize='large' style={{color: "black"}}/>
          </IconButton>

        </Toolbar>
      </Container>
    </AppBar>
    
    <main>
        <Paper className={classes.mainFeaturesPost} style={{backgroundImage: "url(https://tradeforexblog.com/images/iqcent/1624320455263/original/how-to-contact-iqcent-support.jpg)"}}>
            <Container maxWidth="md" style={{position: "relative", backgroundColor:"rgba(164, 200, 236, 0.75)", width:"250px"}}>
                <label>Авторизация: </label>
                <div>
                <TextField id="filled-basic" label="Логин" variant="filled" />
                </div>
                <div>
                <TextField id="filled-basic" label="Пароль" variant="filled" />
                </div>
                <Button color="4c7bd9" variant='contained'>Войти</Button>  
            </Container>
        </Paper>
    </main>
    </>
    );
}

export default CreateApplications;