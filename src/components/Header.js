import React, { useState } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import Logo from "../images/animone.png";

const { SubMenu, Item } = Menu;

const Header = () => {
  const [current, setCurrent] = useState("home");

  const handleClick = (e) => {
    console.log(e.key);
    setCurrent(e.key);
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Item key="home">
        <Link to="/">
          <img
            src={Logo}
            style={{
              height: "30px",
              width: "150px",
              objectFit: "contain",
            }}
            className="mb-2"
          />
        </Link>
      </Item>
      <Item key="about">
        <Link to="/about">
          <span className="mt-2">About</span>
        </Link>
      </Item>
    </Menu>
  );
};

export default Header;
