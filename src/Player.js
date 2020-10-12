import React, { useState } from "react";
import ReactPlayer from "react-player";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

export default function Player({ url, icon }) {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);

  const handleClick = () => setPlaying(!playing);
  const handleChange = (value) => setVolume(value);

  return (
    <div>
      <div
        className={playing ? "button-active" : "button"}
        onClick={handleClick}
      >
        <div className="icon-btn">
          <img
            alt="alt"
            src={process.env.PUBLIC_URL + `${icon}`}
            className={playing ? "icon-active" : "icon"}
          />
        </div>
        <ReactPlayer
          url={url}
          playing={playing}
          loop={true}
          volume={volume}
          height={0}
          width={0}
        />
      </div>
      <div className="slider">
        <Slider
          min={0}
          max={1}
          step={0.1}
          defaultValue={volume}
          onChange={handleChange}
          handleStyle={styles.handleStyle}
          trackStyle={styles.trackStyle}
          railStyle={styles.railStyle}
        />
      </div>
    </div>
  );
}

const styles = {
  handleStyle: {
    backgroundColor: "gray",
    borderColor: "white",
  },
  trackStyle: {
    backgroundColor: "#9B5A4F",
  },
  railStyle: {
    backgroundColor: "#D0CDCD",
  },
};
