import styled from '@emotion/styled';

export const ListItem = styled.li`
  border: 2px solid grey;
  border-radius: 5px;
  padding: 10px;
  width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: rgb(27, 113, 242);
    border: 2px solid rgb(27, 113, 242);
    box-shadow: 0 5px 5px -4px lightblue;
    transition: color, border, box-shadow, 1s;
  }
`;
export const Prompt = styled.span`
  /* margin-bottom: 10px;
  margin-right: 40px; */
  /* color: grey; */
`;
export const Button = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: transparent;
  border: 2px solid rgb(27, 113, 242);
  border-radius: 5px;
  color: rgb(27, 113, 242);
  padding: 2px;
  width: 100px;
  font-weight: 500;
  outline: none;
  cursor: pointer;

  &:hover {
    color: white;
    background-color: rgb(27, 113, 242);
    transition: color, background-color, 1s;
  }
`;
