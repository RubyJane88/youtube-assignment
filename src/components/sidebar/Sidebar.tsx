import React from "react";
import { Link } from "react-router-dom";
import {
  MdSubscriptions,
  MdThumbUp,
  MdHistory,
  MdLibraryBooks,
  MdHome,
  MdSentimentDissatisfied,
  MdComputer,
} from "react-icons/md";

import * as S from "./Sidebar.style";

type Props = {
  sidebar: boolean;
  handleToggleSidebar: (val: boolean) => void;
};

/* Left sidebar menus but only the home icon has link or navigation
 *  The rest of the icons have no links */

const Sidebar = ({ sidebar, handleToggleSidebar }: Props) => {
  return (
    <S.Wrapper
      className={sidebar ? "open" : ""}
      onClick={() => handleToggleSidebar(false)}
    >
      <Link to="/">
        <li>
          <MdHome size={23} />
          <span>Home</span>
        </li>
      </Link>
      <li>
        <MdSubscriptions size={23} />
        <span>Subscriptions</span>
      </li>

      <li>
        <MdThumbUp size={23} />
        <span>Liked Video</span>
      </li>

      <li>
        <MdHistory size={23} />
        <span>History</span>
      </li>

      <li>
        <MdLibraryBooks size={23} />
        <span>Library</span>
      </li>
      <li>
        <MdSentimentDissatisfied size={23} />
        <span>I don't Know</span>
      </li>
      <hr />
      <a href="https://github.com/" target="_blank">
        <li>
          <MdComputer size={23} />
          <span style={{ color: "gold" }}>Ruby Jane Cabagnot</span>
        </li>
      </a>
    </S.Wrapper>
  );
};

export default Sidebar;
