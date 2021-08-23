import styled from "styled-components";

export const Top = styled.div`
  span {
    cursor: pointer;
  }
`;
export const Channel = styled.div`
  border-top: 0.2px solid #4c4c4c;
  border-bottom: 0.2px solid #4c4c4c;
  img {
    width: 50px;
    height: 50px;
  }

  button {
    background-color: red;
    color: #fff;
    border-radius: 0;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    &.btn-gray {
      background-color: gray;
    }
    &:hover {
      color: #fff;
    }
    &:focus {
      border: none;
      outline: none;
    }
  }
`;
