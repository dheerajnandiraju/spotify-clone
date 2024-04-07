import React, { useState } from "react";
import expandAlive from "./navbar";
import "./display.css";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import profile from "../images/artist1.png";
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
import artist1 from "../images/artist1.png";
import artist2 from "../images/artist2.png";
import artist3 from "../images/artist3.png";
import artist4 from "../images/artist4.png";
import artist5 from "../images/artist5.png";
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
import { Link } from "react-router-dom";

function Display({ display, ex }) {
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
      image: artist1,
      name: "artist 1",
      type: "Artist",
      date: "",
      played: "",
    },
    {
      image: artist2,
      name: "artist 2",
      type: "Artist",
      date: "",
      played: "",
    },
    {
      image: artist3,
      name: "artist 3",
      type: "Artist",
      date: "",
      played: "",
    },
    {
      image: artist4,
      name: "artist 4",
      type: "Artist",
      date: "",
      played: "",
    },
    {
      image: artist5,
      name: "artist 5",
      type: "Artist",
      date: "",
      played: "",
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

  let last = data.slice(0, 8);

  const [content, setcontent] = useState("All");
  const [play, setplay] = useState(false);

  const [hoverid, sethoverid] = useState(undefined);

  const show = (e) => {
    const a = document.getElementById("All");
    const b = document.getElementById("playlist");
    const c = document.getElementById("Podcast");
    const element = document.getElementById(e.target.id);
    setcontent(e.target.id);
    a.style.color = "#b3b3b3";
    a.style.backgroundColor = "#121212";
    b.style.color = "#b3b3b3";
    b.style.backgroundColor = "#121212";
    c.style.color = "#b3b3b3";
    c.style.backgroundColor = "#121212";

    if (content === e.target.id) {
      element.style.backgroundColor = "white";
      element.style.color = "black";
    }
    display(content);
  };
  let playlist = data.filter((element) => {
    return element.type === "Playlist";
  });

  let album = data.filter((element) => {
    return element.type === "Albums";
  });

  let podcast = data.filter((element) => {
    return element.type === "Podcast & shows";
  });

  let allpodcast = data.filter((element) => {
    return element.type === "Podcast & shows";
  });

  if (ex) {
    playlist = playlist.slice(0, 5);
    last = last.slice(0, 6);
    podcast = podcast.slice(0, 5);
    let w = document.getElementsByClassName("display");
    for (let w1 of w) {
      w1.style.width = "64vw";
    }
  }
  if (!ex) {
    podcast = podcast.slice(0, 6);
    playlist = playlist.slice(0, 6);
    last = last.slice(0, 8);
    let w = document.getElementsByClassName("display");
    for (let w1 of w) {
      w1.style.width = "73vw";
    }
  }
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
      <div id="view" className="row">
        <Link to="/" onClick={show} id="All" className="content">
          All
        </Link>
        <Link to="/playlist" onClick={show} id="playlist" className="content">
          Playlist
        </Link>
        <Link t="/podcast" onClick={show} id="Podcast" className="content">
          Podcast
        </Link>
      </div>

      {content == "Podcast" && (
        <div>
          <div style={{ marginRight: "0.9rem" }}>
            <div>
              <h1 style={{ color: "white" }}>Podcast & shows</h1>
            </div>
            {allpodcast.map((each) => (
              <div className="row cards">
                <button
                  style={{
                    color: "white",
                    padding: "0rem",
                    backgroundColor: "rgb(0 0 0 / 0%)",
                  }}
                >
                  <img className="cardimg" src={each.image} alt="" />
                  <h3>{each.name}</h3>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {content == "All" && (
        <div>
          <div style={{ marginTop: "1rem" }}>
            {last.map((each) => (
              <div
                style={{
                  display: "inline-flex",
                  justifyContent: "center",
                }}
              >
                <button
                  onMouseEnter={() => {
                    setplay(true);
                    sethoverid(each.name);
                  }}
                  onMouseLeave={() => {
                    setplay(false);
                    sethoverid(false);
                  }}
                  style={{ backgroundColor: "rgb(0 0 0 / 0%)" }}
                  id={each.name}
                >
                  <div className="last spacebetween">
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <img
                        className="img"
                        style={{ margin: 0 }}
                        src={each.image}
                        alt=""
                      />
                      <div className="text">{each.name}</div>
                    </div>
                    <div>
                      {play && hoverid === each.name && (
                        <div className="play">
                          <FaPlay size={15} style={{ margin: "0.2rem" }} />
                        </div>
                      )}
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>
          <div>
            <div>
              <h1 style={{ color: "white" }}>Playlists</h1>
            </div>
            {playlist.map((each) => (
              <div className="row cards">
                <button
                  style={{
                    color: "white",
                    padding: "0rem",
                    backgroundColor: "rgb(0 0 0 / 0%)",
                  }}
                >
                  <img className="cardimg" src={each.image} alt="" />
                  <h3>{each.name}</h3>
                </button>
              </div>
            ))}
          </div>

          <div>
            <div>
              <h1 style={{ color: "white" }}>Albums</h1>
            </div>
            {album.map((each) => (
              <div className="row cards">
                <button
                  style={{
                    color: "white",
                    padding: "0rem",
                    backgroundColor: "rgb(0 0 0 / 0%)",
                  }}
                >
                  <img className="cardimg" src={each.image} alt="" />
                  <h3>{each.name}</h3>
                </button>
              </div>
            ))}
          </div>

          <div>
            <div>
              <h1 style={{ color: "white" }}>Podcast & Shows</h1>
            </div>
            {podcast.map((each) => (
              <div className="row cards">
                <button
                  style={{
                    color: "white",
                    padding: "0rem",
                    backgroundColor: "rgb(0 0 0 / 0%)",
                  }}
                >
                  <img className="cardimg" src={each.image} alt="" />
                  <h3>{each.name}</h3>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Display;
