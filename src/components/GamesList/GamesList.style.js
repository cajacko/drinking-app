import styled from 'cj-pattern-library/lib/helpers/styledComponents';
import { GREY_LIGHT } from 'cj-pattern-library/lib/constants/colours';

const textarea = {
  flex: 1,
  fontFamily: 'helvetica, sans-serif',
  fontSize: 16,
  border: 0,
  lineHeight: 1.5,
};

export const Nav = styled.nav`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  background: ${GREY_LIGHT};
  padding: 10px;
  z-index: 2;
`;

export const Container = styled.section`
  flex-direction: column;
  flex: 1;
`;

export const Header = styled.header`
  margin-top: 60px;
  margin-bottom: 40px;
  flex-direction: column;
`;

export const ScrollTo = styled.div`
  top: -60px;
  position: absolute;
`;

export const Example = styled.div`
  flex-direction: column;
`;

export const NewGameContainer = styled.div`
  flex-direction: column;
`;

export const NewGameInputs = styled.div``;

export const newGame = {
  ...textarea,
  marginRight: 20,
};

export const List = styled.ul`
  flex-direction: column;
`;

export const Game = styled.li`
  margin-bottom: 20px;
  position: relative;
  border-bottom: 1px solid ${GREY_LIGHT};
  padding-bottom: 20px;
`;

export const gameText = textarea;

export const Buttons = styled.div`
  flex-direction: column;
  padding-left: 20px;
`;

export const Update = styled.div`
  margin-bottom: 10px;
`;

export const Remove = styled.div``;

export const Heading = styled.h2`
  font-family: helvetica, sans-serif;
  font-size: 20px;
  margin: 10px 0;
`;

export const Content = styled.div`
  flex-direction: column;
`;

export const Text = styled.p`
  margin-bottom: 10px;
  font-family: helvetica, sans-serif;
  font-size: 14px;
`;
