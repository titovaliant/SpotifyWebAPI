import React from "react";
import PropTypes from "prop-types";
import "./SideMenu.css";

const SideMenu = ({
  updateHeaderTitle,
  updateViewType,
  fetchSongs,
  fetchArtists,
  token,
  title,
  artistIds
}) => {
  const handleClick = name => {
    updateHeaderTitle(name);
    updateViewType(name);
  };

  const renderSideMenu = () => {
    const menu = [
  
      {
        name: "Songs",
        action: fetchSongs
      },
      {
        name: "Artists",
        action: fetchArtists,
        getArtists: true
      }
    ];

    return menu.map(item => {
      return (
        <li
          key={item.name}
          className={
            title === item.name ? "active side-menu-item" : "side-menu-item"
          }
          onClick={() => {
            item.getArtists
              ? item.action(token, artistIds)
              : item.action(token);
            handleClick(item.name);
          }}
        >
          {item.name}
        </li>
      );
    });
  };

  return (
    <ul className="side-menu-container">
      <h3 className="user-library-header">Your Library</h3>
      {renderSideMenu()}
    </ul>
  );
};

SideMenu.propTypes = {
  updateHeaderTitle: PropTypes.func,
  updateViewType: PropTypes.func,
  fetchFeatured: PropTypes.func,
  fetchSongs: PropTypes.func,
  fetchArtists: PropTypes.func,
  token: PropTypes.string,
  artistIds: PropTypes.string,
  title: PropTypes.string
};

export default SideMenu;
