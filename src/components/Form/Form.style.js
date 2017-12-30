import styled from 'cj-pattern-library/lib/helpers/styledComponents';
import { GREY_LIGHT } from 'cj-pattern-library/lib/constants/colours';

export const Container = styled.section`
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const InnerContainer = styled.div`
  flex-direction: column;
  max-width: 400px;
  width: 100%;
  padding: 10px;
  align-items: center;
`;

export const List = styled.ul`
  margin-bottom: 40px;
  flex-direction: column;
  width: 100%;
`;

export const ListItem = styled.li`
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${GREY_LIGHT};
  padding: 20px 0;
`;

export const Name = styled.span`
  font-family: helvetica, sans-serif;
  font-size: 16px;
`;

export const Input = styled.input`
  flex: 1;
  margin-right: 20px;
`;

export const InputContainer = styled.form`
  margin-bottom: 40px;
  width: 100%;
`;

export const GameList = styled.div`
  margin-top: 30px;
`;

