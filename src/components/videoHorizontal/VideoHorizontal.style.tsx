import styled from "styled-components";

export const Wrapper = styled.div`
  border-bottom: 0.3px solid #4c4c4c;
  cursor: pointer;
`;
export const Duration = styled.span`
  position: absolute;
  bottom: 0.6rem;
  right: 1.2rem;
  font-size: 0.9rem;
  padding: 0.2rem;
  background: #080808ec;
  border-radius: 3px;
`;
export const Details = styled.div`
  font-size: 0.9rem;
`;
export const Title = styled.p`
  font-size: 0.95rem;
  letter-spacing: 0.3px;
  overflow: hidden;
  display: -webkit-box;
`;
export const Desc = styled.p`
  overflow: hidden;
  display: -webkit-box;
  font-size: 0.9rem;
`;
export const Channel = styled.div`
  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    margin-right: 0.5rem;
    cursor: pointer;
  }
  p {
    font-size: 0.9rem;
    overflow: hidden;
    display: -webkit-box;
  }
`;
