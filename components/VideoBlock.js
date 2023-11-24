import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";

const optsDesktop = {
    height: '390',
    width: '640',
  playerVars: {
    autoplay: 1,
  },
};

const optsMobile = {
    height: "220",
    width: "300",
    playerVars: {
      autoplay: 1,
    },
}

const VideoBlock = ({videoId}) => {
    const [screenWidth, setScreen] = useState(0)
    useEffect(()=>{
        setScreen(screen.width)
    },[])
  return (<Box
    sx={{
      mb: { xs: 2, md: 5 },
      mt: { xs: 2, md: 5 },
    }}
    textAlign={"center"}
  >
    {screenWidth && <YouTube
      videoId={videoId}
      opts={screenWidth > 768 ? optsDesktop : optsMobile}
      onReady={({ target }) => target.pauseVideo()}
    />}
  </Box>
)};

export default VideoBlock;
