import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps, MdLock } from "react-icons/md";
import { useHistory } from "react-router-dom";

import * as S from "./Header.style";

type Props = {
  handleToggleSidebar: () => void;
};

/* For the logo, the search bar, and the top icons */

const Header = ({ handleToggleSidebar }: Props) => {
  const [input, setInput] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    history.push(`/search/${input}`);
  };

  return (
    <S.Header>
      <S.Menu>
        <FaBars size={26} onClick={() => handleToggleSidebar()} />
      </S.Menu>

      <S.Logo
        src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
        alt="logo youtube"
      />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>

      <S.Icons>
        <MdNotifications size={28} />
        <MdApps size={28} />
      </S.Icons>
    </S.Header>
  );
};

export default Header;
