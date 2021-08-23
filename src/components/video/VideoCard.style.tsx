import styled from "styled-components";

export const Wrapper = styled.div`
  margin-bottom: 1rem;
  padding: 0.7rem;
  font-weight: 500;
  font-size: 0.9rem;
  cursor: pointer;
`;
export const Top = styled.div`
  margin-bottom: 0.5rem;
  position: relative;
  .lazy-load-image-background {
    width: 100%;
  }
  img {
    width: 100%;
  }
`;
export const Duration = styled.span`
  position: absolute;
  bottom: 0.3rem;
  right: 0.3rem;
  padding: 0.2rem;
  background: #080808ec;
  border-radius: 3px;
`;
export const Title = styled.div`
  margin-bottom: 0.1rem;
  color: #fff;
  overflow: hidden;
  display: -webkit-box;
`;
export const Details = styled.div`
  display: flex;
  align-items: center;
`;
export const Channel = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    margin-right: 0.5rem;
    cursor: pointer;
  }
  p {
    margin-bottom: 0;
  }
`;
