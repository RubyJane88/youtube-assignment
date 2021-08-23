import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  background-color: #16181b;
  height: 10vh;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 999;
  form {
    flex: 0.6;
    display: flex;
    padding: 0.1rem;
    margin: 0 1rem;
    border-radius: 3px;
    border: 1.2px solid;
    background-color: #121417;

    input {
      width: 100%;
      border: none;
      font-weight: 500;
      background: transparent;
      padding: 0.3rem;
      color: #b1bdb4;

      &:focus {
        outline: none;
      }
    }

    button {
      padding: 0 1.25rem;
      color: #b1bdb4;
      background: transparent;
      border: none;
      &:focus {
        border: none;
      }
    }
  }
`;
export const Menu = styled.div`
  display: none;
`;
export const Logo = styled.img`
  width: 30px;
  height: 30px;
  object-fit: contain;
  display: block;
`;
export const Icons = styled.div`
  flex: 0.15;
  display: flex;
  justify-content: space-around;
  align-items: center;
  img {
    border-radius: 50%;
    width: 40px;
    object-fit: contain;
    margin-left: 5px;
  }
`;
