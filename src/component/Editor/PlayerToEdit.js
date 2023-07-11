
/* New correcttion 1/07/2023 */ 
import {Toolbar} from "./Toolbar";

import ReactPlayer from "react-player";
import "../PlayerComponent.css";
 import './PlayerToEdit.css'
 import {BsFillStopFill} from 'react-icons/bs'
 import {FaPlay} from 'react-icons/fa';
 import { useState, useRef,useEffect } from 'react';
 import imagesmain from '../images/images main.jpg'
 import image1 from '../images/images (1).jpg'
 import image2 from '../images/images (2).jpg'
 import image3 from '../images/images (3).jpg'
 import image4 from '../images/images (4).jpg'

 
 import image7 from '../images/images (7).jpg'
 import image8 from '../images/images (8).jpg'
 import image9 from '../images/images (9).jpg'
 import { VolumeMenuButton } from 'video-react';
 import React, { Component } from 'react';
 import {ImVolumeIncrease} from 'react-icons/im'
 import { ImVolumeDecrease } from 'react-icons/im';
 import {AiOutlineZoomIn} from 'react-icons/ai'
 import { AiOutlineZoomOut } from 'react-icons/ai';
import Properties from "./properties";
 

  /*const VideoEditor*/export function PlayerToEdit (){
    
         const videoRef = useRef(null);
         const timelineRef = useRef(null);
         const [isPlaying, setIsPlaying] = useState(false);
         const [currentTime, setCurrentTime] = useState(0);
         const [timelineWidth, setTimelineWidth] = useState(0);
         const [timelineThumbnails, setTimelineThumbnails] = useState([]);
    
      // const handleBrowseFile = (event) => {
      //   const file = event.target.files[0];
      //   videoRef.current.src = URL.createObjectURL(file);
      // };
    
       const handlePlay = () => {
         setIsPlaying(true);
         videoRef.current.play();
       };
    
       const handlePause = () => {
        setIsPlaying(false);
         videoRef.current.pause();
       };
    
       const handleStop = () => {
         setIsPlaying(false);
         videoRef.current.pause();
         videoRef.current.currentTime = 0;
         setCurrentTime(0);
       };
    
       const handleTimeUpdate = () => {
        setCurrentTime(videoRef.current.currentTime);
       };
    
      const handleTimelineClick = (event) => {
        const timelineRect = timelineRef.current.getBoundingClientRect();
        const clickPosition = event.clientX - timelineRect.left;
        const timelineWidth = timelineRect.width;
        const duration = videoRef.current.duration;
    
        if (timelineWidth && duration && isFinite(duration)) {
          const time = (clickPosition / timelineWidth) * duration;
          if (isFinite(time)) {
            videoRef.current.currentTime = time;
            setCurrentTime(time);
          }
        }
      };
    
      const generateTimelineThumbnails = () => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
    
        const interval = videoRef.current.duration / 10; // Generate 10 thumbnails
        const thumbnails = [];
    
        for (let i = 0; i <= 13; i++) {
          const time = interval * i;
          videoRef.current.currentTime = time;
    
          canvas.width = videoRef.current.videoWidth;
          canvas.height = videoRef.current.videoHeight;
          context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    
          const thumbnailUrl = imagesmain;
          thumbnails.push(thumbnailUrl);
        }
    
        setTimelineThumbnails(thumbnails);
      };
    
      // useEffect(() => {
      //   setTimelineWidth(timelineRef.current.offsetWidth);
      // }, []);
    
      // useEffect(() => {
      //   if (videoRef.current.readyState >= 2) {
      //     generateTimelineThumbnails();
      //   }       
      // }, [videoRef.current?.duration]);
    
      return (
        <div className="player">
         
          {/* <div className='New-editorpage'>
          <img src={imagesmain} alt="Girl in a jacket" width="700" height="400"></img>
          </div> */}
          <div className='New-editorpage'>
            
         <ReactPlayer
        className='react-player'
        url=' https://youtu.be/bjxTIcuzB6k'
        controls={true}
        width="900px"
        height="550px"
        border-radius="5px"
        marginBottom="10px"
        padding="10px"
        /><Properties className="properties"/>
      </div>
            <Toolbar />
            <div style={{marginTop:"35px"}}>
              
            <button className='play-button' /*onClick={handlePlay}*/ disabled={isPlaying}>
              <FaPlay />
              Play
            </button>
            <button className='pause-button' /*onClick={handlePause}*/ disabled={isPlaying}>
              Pause
            </button>
            <button className='stop-button' /*onClick={handleStop}*/ disabled={isPlaying} >
              < BsFillStopFill />
              Stop
            </button>

            <ImVolumeIncrease style={{fontSize:"2em",marginLeft:"2em"}} />  <ImVolumeDecrease style={{fontSize:"2em",marginLeft:"2em"}}/>
            <AiOutlineZoomIn style={{fontSize:"2em",marginLeft:"2em"}}/><AiOutlineZoomOut style={{fontSize:"2em",marginLeft:"2em"}}/>
            {/* <VolumeMenuButton /> */}

            {/* <View style={styles.container}>
            <VolumeSlider
           thumbSize={{
            width: 8,
            height: 8
          }}
          thumbTintColor="rgb(146,146,157)"
          minimumTrackTintColor="rgb(146,146,157)"
          maximumTrackTintColor="rgba(255,255,255, 0.1)"
          showsRouteButton
        />
      </View> */}

          </div>
          <h1>Your timeline </h1>
          <div
            className="timeline"
            ref={timelineRef}
            onClick={handleTimelineClick} style={{padding:'px',backgroundColor:'black', marginLeft:"-100px",marginBottom:"20px"}}
            
          >
            {timelineThumbnails.map((thumbnail, index) => (
              <img
                key={index}
                src={thumbnail}
                alt="thumbnail"
                style={{ width: `${timelineWidth / 15}px` , backgroundColor:"black"}}
              />
            ))}
            <div>
            <img src={imagesmain} alt="" width="20" height="70px" ></img>
            <img src={imagesmain} alt="" width="20" height="70px" ></img>
            <img src={imagesmain} alt="" width="20" height="70px" ></img>
            <img src={imagesmain} alt="" width="20" height="70px" ></img>
            <img src={imagesmain} alt="" width="20" height="70px" ></img>
            <img src={imagesmain} alt="" width="20" height="70px" ></img>
            <img src={imagesmain} alt="" width="20" height="70px" ></img>
            <img src={imagesmain} alt="" width="20" height="70px" ></img>
            <img src={imagesmain} alt="" width="20" height="70px" ></img>
            <img src={imagesmain} alt="" width="20" height="70px" ></img>
            <img src={imagesmain} alt="" width="20" height="70px" ></img>
            <img src={imagesmain} alt="" width="20" height="70px" ></img>
            <img src={imagesmain} alt="" width="20" height="70px" ></img>
            <img src={imagesmain} alt="" width="20" height="70px" ></img>
            <img src={imagesmain} alt="" width="20" height="70px" ></img>
            <img src={imagesmain} alt="" width="20" height="70px" ></img>
            <img src={imagesmain} alt="" width="20" height="70px" ></img>
            <img src={imagesmain} alt="" width="20" height="70px" ></img>
            <img src={imagesmain} alt="" width="20" height="70px" ></img>
            <img src={imagesmain} alt="" width="20" height="70px" ></img>
            <img src={imagesmain} alt="" width="20" height="70px" ></img>
            <img src={imagesmain} alt="" width="20" height="70px" ></img>
            <img src={imagesmain} alt="" width="20" height="70px" ></img>
            <img src={imagesmain} alt="" width="20" height="70px" ></img>
            <img src={imagesmain} alt="" width="20" height="70px" ></img>
            <img src={imagesmain} alt="" width="20" height="70px" ></img>
            <img src={imagesmain} alt="" width="20" height="70px" ></img>
            <img src={imagesmain} alt="" width="20" height="70px" ></img>
            <img src={imagesmain} alt="" width="20" height="70px" ></img>
            <img src={imagesmain} alt="" width="20" height="70px" ></img>
            <img src={imagesmain} alt="" width="20" height="70px" ></img>
            <img src={imagesmain} alt="" width="20" height="70px" ></img>
            <img src={imagesmain} alt="" width="20" height="70px" ></img>
            <img src={imagesmain} alt="" width="20" height="70px" ></img>
            <img src={imagesmain} alt="" width="20" height="70px" ></img>
            <img src={imagesmain} alt="" width="20" height="70px" ></img>
            <img src={imagesmain} alt="" width="20" height="70px" ></img>
            <img src={imagesmain} alt="" width="20" height="70px" ></img>
            <img src={imagesmain} alt="" width="20" height="70px" ></img>
            <img src={imagesmain} alt="" width="20" height="70px" ></img>
            <img src={imagesmain} alt="" width="20" height="70px" ></img>
            <img src={imagesmain} alt="" width="20" height="70px" ></img>
            <img src={imagesmain} alt="" width="20" height="70px" ></img>
            <img src={imagesmain} alt="" width="20" height="70px" ></img>
            <img src={imagesmain} alt="" width="20" height="70px" ></img>
            <img src={imagesmain} alt="" width="20" height="70px" ></img>
            <img src={imagesmain} alt="" width="20" height="70px" ></img>
            <img src={imagesmain} alt="" width="20" height="70px" ></img>
            <img src={imagesmain} alt="" width="20" height="70px" ></img>
            
            

            </div>
            <div
              className="progress"
              style={{ width: `${(currentTime / videoRef.current?.duration) * 1000}%` }}
            ></div>
            
          </div>


          <div class="grid-container">
          <div><img src={image1} alt="" width="500" height="600" class="grid-item">
          </img>
          <h3>Project 1</h3>
          </div> 
          <div><img src={image2}  alt="Girl in a jacket" width="500" height="600" class="grid-item">
          </img>
          <h3>Project 2</h3>
          </div>
          <div><img src={image3} alt="Girl in a jacket" width="500" height="600" class="grid-item">
          </img>
          <h3>Project 3</h3>
          </div>  
          <div><img src={image4}  alt="Girl in a jacket" width="500" height="600" class="grid-item">
          </img>
          <h3>Project 4</h3>
          </div>
          <div><img src={image9}  alt="Girl in a jacket" width="500" height="600" class="grid-item">
          </img>
          <h3>Project 5</h3>
          </div>
          <div><img src={image1}  alt="Girl in a jacket" width="500" height="600" class="grid-item">
          </img>
          <h3>Project 6</h3>
          </div>
          <div><img src={image7}  alt="Girl in a jacket" width="500" height="600" class="grid-item">
          </img>
          <h3>Project 7</h3>
          </div>
          <div><img src={image8}  alt="Girl in a jacket" width="500" height="600" class="grid-item">
         </img>
         <h3>Project 8</h3>
         </div>
         <div><img src={image9}  alt="Girl in a jacket" width="500" height="600" class="grid-item">
         </img>
         <h3>Project 9</h3></div>
         </div>


        </div>
      );
    };
    
  
    
   
    
    
    
    



    
  
    
    
    
    
    
   
    






























// import ReactPlayer from "react-player";

//  class PlayerComponent extends Component {
//   render () {
//     return (
//       <div className='player-wrapper'>
//         <ReactPlayer
//           className='react-player'
//           url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
//           width='100%'
//           height='100%'
//         />
//       </div>
//     )
//   }
// }

