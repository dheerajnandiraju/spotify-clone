import React, { useState } from "react";
import "./navbar.css";
import { MdHomeFilled } from "react-icons/md";
import { IoCloseSharp, IoSearch } from "react-icons/io5";
import { LuLibrary } from "react-icons/lu";
import { FaPlus } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
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
import { Link } from "react-router-dom";

function Navbar({ send, sAlbum }) {
  //data

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
      type: "Album",
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
  ];

  // const buttons = document.getElementsByTagName("button");
  const [active, setActive] = useState(false);
  const [activeid, setActiveid] = useState(undefined);
  const [expandAlive, setExpand] = useState(false);
  const [libclick, setlibclick] = useState(false);

  const libactive = () => {
    setlibclick(!libclick);
  };

  const alive = (e) => {
    // const element = document.getElementById("type");
    setActive(!active);
    setActiveid(e.target.id);
  };

  const deselect = () => {
    setActive(!active);
    const lib = document.getElementById("library");
    lib.style.height = "21rem";
    setActiveid(undefined);
  };

  const expand = () => {
    const elements = document.getElementsByClassName("box");
    const lib = document.getElementById("library");
    if (!expandAlive) {
      for (let element of elements) {
        element.style.width = "30vw";
        lib.style.height = "21rem";
      }
    }
    if (expandAlive) {
      for (let element of elements) {
        element.style.width = "21vw";
        lib.style.height = "21rem";
      }
    }
    setExpand(!expandAlive);
    send(expandAlive);
  };

  let filtered = data.filter((element) => {
    return element.type === activeid;
  });

  if (activeid && libclick) {
    let h = document.getElementById("library");
    h.style.height = "17rem";
  }

  const selectAlbum = (e) => {
    sAlbum(e.target.id);
  };

  return (
    <div>
      {libclick && (
        <div>
          <div className="smallbox">
            <button className="textline">
              <MdHomeFilled size={30} />
            </button>
            <button style={{ marginBottom: "0" }} className="textline">
              <IoSearch size={30} />
            </button>
          </div>
          <div className="smallbox" style={{ height: "27.9rem" }}>
            <button onClick={libactive} className="textline">
              <LuLibrary size={30} />
            </button>

            <div id="smalllib">
              <table style={{ width: "100%" }}>
                {!active &&
                  data.map((each) => (
                    <tr>
                      <td>
                        <button
                          style={{
                            padding: 0,
                            color: "white",
                            background: "#121212",
                          }}
                        >
                          <img
                            className="cover"
                            style={{ margin: 0 }}
                            src={each.image}
                            alt=""
                          />
                        </button>
                      </td>
                    </tr>
                  ))}
                {active &&
                  filtered.map((each) => (
                    <tr>
                      <td>
                        <Link
                          to="/songs"
                          id={each.name}
                          onClick={selectAlbum}
                          className="lib"
                          style={{ background: "#121212" }}
                        >
                          <img
                            id={each.name}
                            className="cover"
                            style={{ margin: 0 }}
                            src={each.image}
                            alt=""
                          />
                        </Link>
                      </td>
                    </tr>
                  ))}
              </table>
            </div>
          </div>
        </div>
      )}
      <div>
        <div>
          {!libclick && (
            <div>
              <div className="box">
                <Link to="/" className="textline">
                  <MdHomeFilled size={30} style={{ marginRight: ".5rem" }} />
                  Home
                </Link>
                <button style={{ marginBottom: "0" }} className="textline">
                  <IoSearch size={30} style={{ marginRight: ".5rem" }} /> Search
                </button>
              </div>
              <div className="box" style={{ height: "27rem" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <button onClick={libactive} className="textline">
                    <LuLibrary size={30} style={{ marginRight: ".5rem" }} />{" "}
                    Library
                  </button>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <button className="textline2">
                      <FaPlus />
                    </button>

                    <button onClick={expand} className="textline2">
                      {!expandAlive && <FaArrowRight />}
                      {expandAlive && <FaArrowLeft />}
                    </button>
                  </div>
                </div>
                {!active && (
                  <div
                    id="type"
                    style={{ display: "inline-block", rowGap: "5rem" }}
                  >
                    <button
                      style={{ borderRadius: "1rem" }}
                      onClick={alive}
                      id="Playlist"
                      className="type"
                    >
                      Playlists
                    </button>
                    <button
                      style={{ borderRadius: "1rem" }}
                      onClick={alive}
                      id="Artist"
                      className="type"
                    >
                      Artists
                    </button>
                    <button
                      style={{ borderRadius: "1rem" }}
                      onClick={alive}
                      id="Albums"
                      className="type"
                    >
                      Albums
                    </button>
                    <button
                      style={{ borderRadius: "1rem" }}
                      onClick={alive}
                      id="Podcast & shows"
                      className="type"
                    >
                      Podcasts & Shows
                    </button>
                  </div>
                )}
                {active && (
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <button
                      style={{
                        width: "auto",
                        height: "2rem",
                        marginBottom: "0rem",
                        marginRight: "0.5rem",
                        border: "0.1rem solid white",
                      }}
                      onClick={deselect}
                      className="textline2"
                    >
                      <IoCloseSharp size={15} />
                    </button>
                    <button
                      style={{ borderRadius: "1rem" }}
                      id={activeid}
                      className="typeActive"
                    >
                      {activeid}
                    </button>
                  </div>
                )}

                <div id="library">
                  <table style={{ width: "100%" }}>
                    <thead>
                      <tr style={{ color: "white", paddingLeft: "8rem" }}>
                        <th style={{ width: "5rem" }}>cover</th>
                        <th style={{ width: "5rem" }}>Title</th>
                        {expandAlive && <th style={{ width: "5rem" }}>date</th>}
                        {expandAlive && (
                          <th style={{ width: "5rem" }}>last played</th>
                        )}
                      </tr>
                    </thead>

                    {!active &&
                      data.map((each) => (
                        <tr>
                          <td>
                            <img className="cover" src={each.image} alt="" />
                          </td>
                          <Link
                            to="/songs"
                            id={each.name}
                            onClick={selectAlbum}
                            style={{ color: "white", background: "#121212" }}
                          >
                            <td
                              id={each.name}
                              className="lib"
                              style={{ paddingLeft: "1rem" }}
                            >
                              {each.name}
                            </td>
                          </Link>
                          {expandAlive && (
                            <td
                              style={{
                                color: "white",
                                textAlign: "end",
                                paddingRight: "1rem",
                              }}
                            >
                              {each.date}
                            </td>
                          )}
                          {expandAlive && (
                            <td style={{ color: "white", paddingLeft: "1rem" }}>
                              {each.played}
                            </td>
                          )}
                        </tr>
                      ))}
                    {active &&
                      filtered.map((each) => (
                        <tr>
                          <td>
                            <img className="cover" src={each.image} alt="" />
                          </td>
                          <Link
                          to="/songs"
                            id={each.name}
                            onClick={selectAlbum} ///////////////////
                            className="lib"
                            style={{ background: "#121212" }}
                          >
                            <td id={each.name} style={{ paddingLeft: "1rem" }}>
                              {each.name}
                            </td>
                          </Link>
                          {expandAlive && (
                            <td style={{ color: "white", textAlign: "end" }}>
                              {each.date}
                            </td>
                          )}
                          {expandAlive && (
                            <td style={{ color: "white", paddingLeft: "1rem" }}>
                              {each.played}
                            </td>
                          )}
                        </tr>
                      ))}
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
