import styled from "styled-components";

export const Wrapper = styled.nav`
  background: #121417;

  display: flex;
  flex-direction: column;

  width: 250px;
  height: 90vh;
  padding-top: 2rem;
  transition: transform 0.2s ease-in;

  position: sticky;
  top: 10vh;
  left: 0;

  a {
    color: #b1bdb4;
    &:hover {
      color: #b1bdb4;
      text-decoration: none;
    }
  }

  li {
    display: flex;
    align-items: center;

    padding: 0.6rem 1.5rem;
    margin: 0.2rem 0;
    cursor: pointer;

    span {
      margin-left: 1rem;
      font-size: 14px;
      font-weight: 500;
      letter-spacing: 0.4px;
    }

    &:hover {
      background-color: #4c4c4c;
    }
  }

  hr {
    background-color: #4c4c4c;
  }

  &.open {
    transform: translateX(0);
  }
`;
