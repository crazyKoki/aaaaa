import React from 'react'
import { ReactMediaRecorder } from 'react-media-recorder'
 
const Sample = () => {
  return (
    <div>
 
      <ReactMediaRecorder
      video
      render={({ status, startRecording, stopRecording }) => (
          <div>            
            <video src={'https://www.youtube.com/watch?v=-F5uffWaqRE'} controls autoplay loop />
          </div>
          )}
          />
      
    </div>
  );
}
 
export default Sample;