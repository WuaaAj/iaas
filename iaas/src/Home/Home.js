import styles from './Home.module.css';
import {Grid, Divider} from '@mui/material';
import * as React from 'react';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {useState} from "react";
import image2 from '../img/image 2.png';
import image3 from '../img/image 3.png';
import image4 from '../img/image 4.png';
import image5 from '../img/image 5.png';
import image6 from '../img/image 6.png';
import image7 from '../img/image 7.png';
import image8 from '../img/image 8.png';
import image9 from '../img/image 9.png';
import image10 from '../img/image 10.png';
import image11 from '../img/image 11.png';
import image12 from '../img/image 12.png';
import image13 from '../img/image 13.png';
import image14 from '../img/image 14.png';
import image15 from '../img/image 15.png';

function Home() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return(
        <div>
            <head>
            <style>
            @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@700;800&family=Open+Sans&display=swap');
            </style>
            </head>
            <div style={{backgroundColor:"#ffffff"}}>
                <TabContext value={value}>
                    <Box
                     sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Overview" value="1"></Tab>
                        <Tab label="Material" value="2" />
                        <Tab label="Survey" value="3" />
                    </TabList>
                    </Box>
                    <img src={image2} style={{width:"100%"}}></img>
                    <TabPanel value="3">
                    <div className={styles.title}>
                        <p> Survey: </p>
                        <p style={{fontSize:"30px", marginTop:"-20px"}}>
                            We need your feedback.  </p>
                        </div>
                    </TabPanel>
                    <TabPanel value="1">
                        <div className={styles.title}>
                        <p> Our Focus: </p>
                        <p style={{fontSize:"30px", marginTop:"-20px"}}>
                            Help adult learners understand how their brain work  </p>
                        </div>
                        <Divider variant="middle" style={{width:"40%", marginLeft:"30%",marginTop:"5%"}} />
                        <Grid container 
                         style={{marginTop:"4%", marginLeft:"8%"}}>
                            <Grid item xs={5} >
                                <img src={image3} style={{width:"84%"}}></img>
                            </Grid>
                            <Grid item xs={5}>
                                <p className={styles.text}>Time and money aside, one of the biggest barriers for adult learners is self-doubt – that feeling of “am I really cut out for this?”  This might because they hold the fixed mindset.</p>
                                <p className={styles.text}>Based on the observation and researches, this program is an intervention for adult learner to believe their brain can grow after aulthood through practicing and learning. Which means to delvelop a growth mindset.</p>
                                <p className={styles.text}>When students develop a growth mindset, they gain confidence in their ability to learn, and will be more resilent when encounter difficulties, which leading to higher achivement in school.</p>
                            </Grid>
                        </Grid>
                    </TabPanel>
                    <TabPanel value="2">
                        <div className={styles.title} style={{marginTop:"-10px"}}>
                          How does our brain work and develop?
                        </div>
                        <Divider variant="middle" style={{width:"40%", marginLeft:"30%",marginTop:"5%"}} />
                        <Grid container 
                         style={{marginTop:"4%", marginLeft:"8%"}}>
                            <Grid item xs={5} >
                                <img src={image7} style={{width:"80%"}}></img>
                            </Grid>
                            <Grid item xs={5}>
                                <p className={styles.text}>While some people have an illution that brain will never change. The structure of brain, ability and functions of brain, together with intelligent and talent that closely related with brain are fixed once we born.  However, it is not correct. It's actually constructed for change. It's all about change. </p>
                                <p className={styles.text}>When we were an infant, we don’t respond a lot, and can only control their movement in a very primitive and limited way; but as an adult today, we can do much much more than what we can do as an infant. That is because our brain is always growing.</p>
                            </Grid>
                        </Grid>
                    </TabPanel>
                    <TabPanel value="3">Item Three</TabPanel>
                    <img src={image4} style={{width:"100%"}}></img>
                    <TabPanel value="1" style={{backgroundColor:"#E1DCD5", marginTop:"-10px"}}>
                        <div style={{marginBottom:"2%"}}>
                            <h3 className={styles.sub1}>Who Benefits</h3>
                            <p className={styles.sub1text} style={{textAlign:"center"}}>Students enrolling in part-time educational programs with full-time job with typical features below:</p>
                            <li className={styles.sub1text} style={{marginLeft:"20%"}}><b>Aged</b></li>
                            <li className={styles.sub1text} style={{marginLeft:"20%"}}><b>Part-time Students</b></li>
                            <li className={styles.sub1text} style={{marginLeft:"20%"}}><b>Underachivement Experience</b></li>
                        </div>
                    </TabPanel>
                    <TabPanel value="2" style={{backgroundColor:"#DFD6CD", marginTop:"-10px"}}>
                        <div style={{marginBottom:"2%"}}>
                            <h3 className={styles.sub1}>Two great ephocs for brain development</h3>
                            <Grid container spacing={1}
                             style={{width:"80%", marginLeft:"10%", marginBottom:"5%"}}>
                                 <Grid item xs={4}>
                                     <p
                                      style={{fontFamily:"Open Sans", textAlign:"center", color:"#274F6E", fontSize:"20px", marginTop:"9%"}}
                                     ><b>The infant “Critical Period” Brain set up basic process machinery</b></p>
                                 </Grid>
                                 <Grid item xs={0.1}></Grid>
                                 <Grid item xs={3}>
                                     <img src={image8} style={{width:"120%", marginTop:"-20px"}}></img>
                                 </Grid>
                                 <Grid item xs={0.7}></Grid>
                                 <Grid item xs={4.2}>
                                     <p
                                      style={{fontFamily:"Open Sans", textAlign:"center", color:"#274F6E", fontSize:"20px"}}
                                     ><b>The “Adult Plasticity” Brain refines machinery by learning abilities and skills</b></p>
                                 </Grid>
                             </Grid>
                        </div>
                    </TabPanel>
                    <TabPanel value="1">
                        <h3 className={styles.sub2} >General Flow</h3>
                        <Grid container 
                         style={{marginTop:"-20px", marginLeft:"7%"}}>
                            <Grid item xs={4} >
                                <p className={styles.sub2text}>The growth mindset intervention communicates a metaphor: that the brain is like a muscle that grows stronger and smarter when it undergoes rigorous learning experiences. </p>
                                <p className={styles.sub2text}>Participants hear the metaphor in the context of the neuroscience of learning, reflect and internalize them by teaching it to others.</p>
                            </Grid>
                            <Grid item xs>
                                <img src={image5} style={{width:"75%", marginLeft:"7%", marginTop:"1%"}}></img>
                            </Grid>
                        </Grid>
                        <Divider variant="middle" style={{width:"40%", marginLeft:"30%",marginTop:"5%"}} />
                        <h2 className={styles.sub3}>What to expect after the internvention?</h2>
                        
                    </TabPanel>
                    <TabPanel value="2" style={{marginBottom:"5%"}}>
                        <h3 className={styles.sub2} > What will happen when learn new things?</h3>
                        <p className={styles.sub2text} style={{marginLeft:"7%", width:"86%"}}>Neurons (also called neurones or nerve cells) are the fundamental units of the brain and nervous system. While you are learning:</p>
                        <Grid container
                         style={{marginLeft:"7%", marginTop:"3%", width:"86%"}}>
                             <Grid item xs={6}>
                                 <img src={image9} style={{width:"80%"}}></img>
                             </Grid>
                             <Grid item xs={6}>
                                 <p className={styles.sub2text} style={{width:"80%",marginTop:"10%"}}>Neurons in your brain pass instructions to other neurons to pass the instructions to their destination.</p>        
                             </Grid>
                             <Grid item xs={4.5}>
                                 <p className={styles.sub2text} style={{width:"100%", marginTop:"120px"}}>The creation of new connections between your  neurons occurs while you are learning.The more you practice, the stronger these connections become.</p>        
                             </Grid>
                             <Grid item xs={0.2}></Grid>
                             <Grid item xs={7}>
                                 <img src={image10} style={{width:"100%"}}></img>
                             </Grid>
                         </Grid>
                         <p className={styles.sub2text} style={{marginLeft:"7%", width:"86%", marginTop:"5%"}}>As your connections strengthen, the messages (nerve impulses) are transmitted increasingly faster, making them more efficient. That is how you become better at anything you learn whether it is playing football, reading, drawing, etc.</p>
                         <Divider variant="middle" style={{width:"40%", marginLeft:"30%",marginTop:"5%"}} />
                         <h3 className={styles.sub2} > You can regard your neuron network as a forest.</h3>
                         <Grid container
                         style={{marginLeft:"7%", marginTop:"3%", width:"86%"}}>
                             <Grid item xs={4.5}>
                                 <img src={image11} style={{width:"70%"}}></img>
                             </Grid>
                             <Grid item xs={3}>
                                 <img src={image13} style={{width:"70%", marginTop:"6%"}}></img>
                             </Grid>
                             <Grid item xs={4.5}>
                                 <img src={image12} style={{width:"70%", marginLeft:"20px"}}></img>
                             </Grid>
                         </Grid>
                         <p className={styles.sub2text} style={{marginLeft:"7%", width:"86%", marginTop:"5%"}}>
                         When you first learn, your brain is like a forest full of trees and dense foliage with no clear pathway. As you accept the knowledge, you create a trail through the forest, but you may not be very familiar with it, because it is so new. 
                         </p>
                         <p className={styles.sub2text} style={{marginLeft:"7%", width:"85%"}}>
                         But the more you use the same trail, the easier and more practicable it comes. In contrast, if you stop using it, the vegetation will grow back again. Which means “wires” that once connected to the memory have been degraded.
                         </p>

                    </TabPanel>
                    <TabPanel value="2" style={{backgroundColor:"#E1DCD5", marginBottom:"10%"}}>
                        <h3 className={styles.sub2} > Can only grow in childhood?</h3>
                        <img src={image14} style={{width:"30%", marginLeft:"35%"}}></img>
                        <p className={styles.sub2text} style={{fontSize:"22px",marginLeft:"10%", width:"80%", marginTop:"3%", textAlign:"center"}}>While people often think of childhood and young adulthood as a time of brain growth, and  older adulthood as a time of brain decline. Research shows that the old brain can grow as well. 
                        </p>
                        <Divider variant="middle" style={{width:"40%", marginLeft:"30%",marginTop:"5%"}} />
                        <h3 className={styles.sub2} style={{marginLeft:"10%",fontSize:"30px"}}> Some Evidence</h3>
                        <Grid container 
                         style={{marginTop:"3%", marginLeft:"10%"}}>
                            <Grid item xs={4} >
                                <img src={image15} style={{width:"80%"}}></img>
                            </Grid>
                            <Grid item xs={5}>
                                <p className={styles.sub2text} style={{marginTop:"9%"}}>Mahncke et al. (2006) used a computer training program with older adults with memory impairment and found a significant improvement compared to the control group.
</p>
                            </Grid>
                        </Grid>
                    </TabPanel>
                    {
                      value=="1" ? <img src={image6} style={{width:"100%", marginTop:"15%"}}></img>
                                 : <div></div>
                    }
                </TabContext>
            </div>
        </div>
    );
    
}

export default Home;