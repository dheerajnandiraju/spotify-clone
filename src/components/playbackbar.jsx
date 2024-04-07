import React, { useState } from "react";
import "./playbackbar.css";
import song1 from "../images/song1.jpg";
import song2 from "../images/song2.jpg";
import song3 from "../images/song3.jpg";
import song4 from "../images/song4.jpg";
import song5 from "../images/song5.jpg";
import song6 from "../images/song6.jpg";
import song7 from "../images/song7.jpg";
import song8 from "../images/song8.jpg";
import song9 from "../images/song9.jpg";
import song10 from "../images/song10.jpg";
import { LuShuffle } from "react-icons/lu";
import {
  TbPlayerSkipBackFilled,
  TbPlayerSkipForwardFilled,
} from "react-icons/tb";
import { FaPlay, FaVolumeUp } from "react-icons/fa";
import { BiRepeat } from "react-icons/bi";

function Playbackbar({ song }) {
  const [suffle, setshuffle] = useState("false");
  const [loop, setloop] = useState("false");
  const music = [
    {
      sno: 1,
      name: "song 1",
      Scover: song1,
      artist: "artist A",
      date: "11-2-11",
      time: "3:10",
    },
    {
      sno: 2,
      name: "song 2",
      artist: "artist B",
      Scover: song2,
      date: "31-7-22",
      time: "2:28",
    },
    {
      sno: 3,
      artist: "artist c",
      name: "song 3",
      Scover: song3,
      date: "28-2-14",
      time: "3:11",
    },
    {
      sno: 4,
      artist: "artist D",
      name: "song 4",
      Scover: song4,
      date: "8-9-19",
      time: "4:10",
    },
    {
      sno: 5,
      artist: "artist F",
      name: "song 5",
      Scover: song5,
      date: "21-5-18",
      time: "1:08",
    },
    {
      sno: 6,
      artist: "artist G",
      name: "song 6",
      Scover: song6,
      date: "12-2-10",
      time: "4:08",
    },
    {
      sno: 7,
      artist: "artist H",
      name: "song 7",
      Scover: song7,
      date: "1-7-22",
      time: "2:31",
    },
    {
      sno: 8,
      artist: "artist I",
      name: "song 8",
      Scover: song8,
      date: "22-6-21",
      time: "2:28",
    },
    {
      sno: 9,
      artist: "artist J",
      name: "song 9",
      Scover: song9,
      date: "20-9-20",
      time: "1:31",
    },
    {
      sno: 10,
      artist: "artist K",
      name: "song 10",
      Scover: song10,
      date: "12-3-12",
      time: "2:51",
    },
  ];
  let img = music.find((element) => {
    return element.name === song;
  });

  const shufflefuc = (e) => {
    let element = document.getElementById("suffle");
    if (suffle) {
      element.style.color = "#1db954";
    } else {
      element.style.color = "grey";
    }
    setshuffle(!suffle);
  };
  const loopfuc = (e) => {
    let element = document.getElementById("loop");
    if (loop) {
      element.style.color = "#1db954";
    } else {
      element.style.color = "grey";
    }
    setloop(!loop);
  };

  return (
    <div className="visible">
      <div className="rowplay">
        <div className="rowplay">
          <div>
            <img className="scover" src={img.Scover} alt="" />
          </div>
          <div>
            <h4 style={{ margin: "0rem 0rem 0.5rem 0rem" }}>{img.name}</h4>
            <div style={{ fontSize: "0.8rem", color: "grey" }}>
              {" "}
              {img.artist}
            </div>
          </div>
        </div>
        <div
          style={{
            width: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="icons"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <button
              id="suffle"
              onClick={shufflefuc}
              style={{ background: "black", color: "white" }}
            >
              <LuShuffle
                style={{ margin: "0.2rem 0rem 0rem 0rem" }}
                size={20}
              />
            </button>
            <button style={{ background: "black", color: "white" }}>
              <TbPlayerSkipBackFilled size={25} />
            </button>
            <button className="play">
              <FaPlay size={15} color="black" />
            </button>
            <button style={{ background: "black", color: "white" }}>
              <TbPlayerSkipForwardFilled size={25} />
            </button>
            <button
              id="loop"
              onClick={loopfuc}
              style={{ background: "black", color: "white" }}
            >
              <BiRepeat style={{ margin: "0.2rem 0rem 0rem 0rem" }} size={20} />
            </button>
          </div>
          <div className="songbar">
            <h5>00:00</h5>
            <hr className="hr" />
            <h5>{img.time}</h5>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div>
            {" "}
            <FaVolumeUp size={20} />
          </div>{" "}
          <hr className="volume" />
        </div>
      </div>
    </div>
  );
}

export default Playbackbar;
