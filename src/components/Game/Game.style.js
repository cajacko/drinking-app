import styled from 'cj-pattern-library/lib/helpers/styledComponents';
import Button from 'components/Button';

export const Container = styled.div`
  flex: 1;
  flex-direction: column;
`;

export const Background = styled.div`
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;

export const Heading = styled.h1`
  font-size: 40px;
  font-family: helvetica, sans-serif;
`;

export const Text = styled.p`
  font-size: 30px;
  margin-bottom: 30px;
  font-family: helvetica, sans-serif;
  width: 800px;
  text-align: center;
  display: block;
  line-height: 1.5;
`;

export const Stop = Button.extend`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 2;
`;
