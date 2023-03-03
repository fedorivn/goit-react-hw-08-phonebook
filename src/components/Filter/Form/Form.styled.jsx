import styled from '@emotion/styled';

export const Contacts = styled.form`
  /* width: 400px; */
  padding-left: 40px;
  padding-right: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 25px;
  color: grey;
`;

export const Input = styled.input`
  border: 1px solid grey;
  outline: transparent;
  width: 250px;
  height: 25px;
  border-radius: 5px;

  &:hover,
  & focus {
    border: 1px solid rgb(27, 113, 242);
    box-shadow: 0 8px 8px -4px lightblue;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: 2px solid rgb(27, 113, 242);
  border-radius: 5px;
  color: rgb(27, 113, 242);
  padding: 7px;
  width: 100px;
  font-weight: 500;

  &:hover {
    color: white;
    background-color: rgb(27, 113, 242);
    transition: color, background-color, 1s;
    box-shadow: 0 6px 6px -4px lightblue;
  }
`;
