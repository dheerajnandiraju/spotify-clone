import React from "react";
import "./display.css";
import { Link } from "react-router-dom";
import profile from "../images/artist1.png";
import { FaAngleLeft, FaAngleRight, FaRegBell } from "react-icons/fa6";
import liked from "../images/liked.jpg";
import cover1 from "../images/cover1.jpg";
import cover2 from "../images/cover2.jpg";
import cover3 from "../images/cover3.jpg";
import cover4 from "../images/cover4.jpg";
import cover5 from "../images/cover5.jpg";
import cover6 from "../images/cover6.jpg";
import cover7 from "../images/cover7.jpg";
import cover8 from "../images/cover8.jpg";
import cover9 from "../images/cover9.jpg";
import cover10 from "../images/cover10.jpg";
import song1 from "../images/song1.jpg"
import song2 from "../images/song1.jpg"
import song3 from "../images/song1.jpg"
import song4 from "../images/song1.jpg"
import song5 from "../images/song1.jpg"
import song6 from "../images/song1.jpg"
import song7 from "../images/song1.jpg"
import song8 from "../images/song1.jpg"
import song9 from "../images/song1.jpg"

import album1 from "../images/album1.jpg";
import album2 from "../images/album2.jpg";
import album3 from "../images/album3.jpg";
import album4 from "../images/album4.jpg";
import album5 from "../images/album5.jpg";
import podcast1 from "../images/podcast1.jpg";
import podcast2 from "../images/podcast2.jpg";
import podcast3 from "../images/podcast3.jpg";
import podcast4 from "../images/podcast4.jpg";
import podcast5 from "../images/podcast5.jpg";
import podcast6 from "../images/podcast6.jpg";
import Display from "./display";

function Songs({ albumname }) {
  const data = [
    {
      image: liked,
      name: "Liked",
      type: "Playlist",
      date: "11-02-21",
      played: "1 week ago",
    },
    {
      image: cover1,
      name: "playlist 1",
      type: "Playlist",
      date: "11-02-22",
      played: "2 week ago",
    },
    {
      image: cover2,
      name: "playlist 2",
      type: "Playlist",
      date: "11-03-22",
      played: "3 week ago",
    },
    {
      image: cover3,
      name: "playlist 3",
      type: "Playlist",
      date: "12-02-22",
      played: "1 week ago",
    },
    {
      image: cover4,
      name: "playlist 4",
      type: "Playlist",
      date: "12-11-22",
      played: "10 week ago",
    },
    {
      image: cover5,
      name: "playlist 5",
      type: "Playlist",
      date: "12-12-22",
      played: "1 week ago",
    },
    {
      image: cover6,
      name: "playlist 6",
      type: "Playlist",
      date: "1-02-21",
      played: "1 year ago",
    },
    {
      image: cover7,
      name: "playlist 7",
      type: "Playlist",
      date: "12-08-22",
      played: "11 months ago",
    },
    {
      image: cover8,
      name: "playlist 8",
      type: "Playlist",
      date: "12-04-24",
      played: "1 day ago",
    },
    {
      image: cover9,
      name: "playlist 9",
      type: "Playlist",
      date: "12-12-20",
      played: "4 week ago",
    },
    {
      image: cover10,
      name: "playlist 10",
      type: "Playlist",
      date: "12-02-23",
      played: "10 week ago",
    },
    {
      image: album1,
      name: "album 1",
      type: "Albums",
      date: "11-4-99",
      played: "",
    },
    {
      image: album2,
      name: "album 2",
      type: "Albums",
      date: "21-12-10",
      played: "",
    },
    {
      image: album3,
      name: "album 3",
      type: "Albums",
      date: "04-01-15",
      played: "",
    },
    {
      image: album4,
      name: "album 4",
      type: "Albums",
      date: "10-12-19",
      played: "",
    },
    {
      image: album5,
      name: "album 5",
      type: "Albums",
      date: "17-07-12",
      played: "",
    },
    {
      image: podcast1,
      name: "podcast 1",
      type: "Podcast & shows",
      date: "11-07-22",
      played: "",
    },
    {
      image: podcast2,
      name: "podcast 2",
      type: "Podcast & shows",
      date: "17-02-20",
      played: "",
    },
    {
      image: podcast3,
      name: "podcast 3",
      type: "Podcast & shows",
      date: "27-11-12",
      played: "",
    },
    {
      image: podcast4,
      name: "podcast 4",
      type: "Podcast & shows",
      date: "04-07-21",
      played: "",
    },
    {
      image: podcast5,
      name: "podcast 5",
      type: "Podcast & shows",
      date: "01-09-24",
      played: "",
    },
    {
      image: podcast6,
      name: "podcast 6",
      type: "Podcast & shows",
      date: "01-09-24",
      played: "",
    },
  ];

const Songs=[

]




  let img = data.find((element) => {
    return element.name === albumname;
  });
  return (
    <div className="display">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <Link to="/" className="landr">
            <FaAngleLeft size={20} />
          </Link>
          <Link className="landr">
            <FaAngleRight size={20} />
          </Link>
        </div>
        <div className="row">
          <button style={{ height: "2rem" }} className="exploreP">
            Explore Premium
          </button>
          <button
            className="landr"
            style={{
              marginLeft: "1rem",
              paddingLeft: "0.5rem",
              marginRight: "0.5rem",
            }}
          >
            <FaRegBell size={20} />
          </button>
          <button className="landr" style={{}}>
            <img className="profile" src={profile} alt="" />
          </button>
        </div>
      </div>

      <div className="title">
        <img className="titleimage" src={img.image} alt="" />
        <div>
          {img.type}
          <h1 style={{ fontSize: "5rem", margin: "0rem" }}>{albumname}</h1>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <img className="profile" src={profile} alt="" />
            <div style={{ marginLeft: "1rem" }}> Username</div>
          </div>
        </div>
      </div>
      <hr />
      <div></div>
    </div>
  );
}

export default Songs;
