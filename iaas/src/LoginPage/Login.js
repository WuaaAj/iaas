import styles from './Login.module.css';
import pic from '../img/image 1.png';
import { Grid } from '@mui/material';


function Login(props) {
  const {setPage} = props;
  return (
    <div>
      <head>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@800&family=Open+Sans&display=swap');
      </style>
      </head>
      <Grid container spacing = {1} style={{marginLeft:"9%", marginTop:"3%"}}>
      <Grid item xs={5}>
      <div className={styles.box}>
        <h1 className = {styles.title}>Welcome,</h1>
        <p className = {styles.text}>
          We are [ ]. We aim to build a technology-based intervention to help adult learners be more prepared to go back to school.
        </p>
        <button className={styles.button} onClick = {()=>setPage("home")}><b>Get Started</b> ➜</button>
      </div>
      </Grid>
      <Grid item xs>
        <img src={pic} className={styles.pic}></img>
      </Grid>
      </Grid>
    </div>
  );
}

export default Login;