import styled from 'cj-pattern-library/lib/helpers/styledComponents';
import { GREY, WHITE } from 'cj-pattern-library/lib/constants/colours';

const Button = styled.button`
  appearance: none;
  background: none;
  cursor: pointer;
  padding: 5px 10px;
  width: 120px;
  font-size: 20px;
  text-align: center;
  border: 1px solid ${WHITE};
  outline: none;
  display: block;
  color: ${WHITE};
  font-family: helvetica, sans-serif;

  :hover {
    border: 1px solid ${GREY};
    color: ${GREY};
    text-decoration: underline;
  }
`;

export const Container = styled.div`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background: ${({ colour }) => colour};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`;

export const Background = styled.div`
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  padding: 0 20px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

export const Heading = styled.h1`
  font-size: 40px;
  font-family: helvetica, sans-serif;
`;

export const Text = styled.p`
  margin-bottom: 30px;
  font-family: helvetica, sans-serif;
  max-width: 800px;
  width: 100%;
  text-align: center;
  display: block;
  line-height: 1.5;
  font-size: 30px;
  color: ${WHITE};

  @media (max-width: 800px) {
    font-size: 26px;
  }

  @media (max-width: 600px) {
    font-size: 22px;
  }

  @media (max-width: 500px) {
    font-size: 18px;
  }
`;

export const Stop = Button.extend`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 2;
`;

export const Edit = Button.extend`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 2;
`;

export const Footer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 20px;
  align-items: center;
  justify-content: center;
`;

export const Next = Button.extend``;
