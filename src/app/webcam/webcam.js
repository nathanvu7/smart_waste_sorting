'use client'
import React from "react";
import { useRef, useEffect, useState } from "react";
//<Webcam height={600} width={600} />


export default function Webcam() {
    const videoRef = useRef(null);

    const getVideo = () => {
        navigator.mediaDevices
        .getUserMedia( { video: 
            {width: 1920, height: 1080} } )
        .then(stream => {
            let video = videoRef.current;
            video.srcObject = stream;
            video.play();
        })
        .catch(err => {
            console.error(err); 
        })
    }

    useEffect(() => {
        getVideo();
    }, [videoRef]
    )

    return (
        <div>
            <video ref={videoRef}>
            </video>
        </div>
    );
}
  