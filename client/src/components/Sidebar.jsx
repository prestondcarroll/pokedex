import React,  { useState, useEffect } from 'react';
import {
  ProSidebar, Menu, MenuItem, SubMenu,
} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FaGem, FaHeart, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = (props) => {
  const test = 1;
  const [expanded, setExpanded] = useState(true);

  const handleNavigationClick = () => {
    expanded ? setExpanded(false) : setExpanded(true);
  }

  let empty = [];
  for(let i = 0; i < 50; i++) {
    empty.push('');
  }


  return (
    <div>
      <ProSidebar collapsed={expanded}>
        <Menu iconShape="square">
          <MenuItem icon={<FaBars />} onClick={handleNavigationClick}>
            Navigation
          </MenuItem>
          <MenuItem icon={<FaGem />}>
            Main
            <Link to="/" />
          </MenuItem>
          <MenuItem icon={<FaHeart />}>
            Weakness
            <Link to="/weakness" />
          </MenuItem>
          {empty.map((element) => {
            return (<MenuItem />);
          })}
        </Menu>
      </ProSidebar>
    </div>
  );
};

export default Sidebar;
