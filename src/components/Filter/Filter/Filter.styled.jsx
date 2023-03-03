import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* margin: 0 auto; */
  padding-left: 39px;
  padding-right: 20px;
`;
export const Prompt = styled.span`
  margin-bottom: 10px;
  margin-right: 40px;
  color: grey;
`;

export const Input= styled.input`
     border: 1px solid grey;
    outline: transparent;
    width: 250px;
    height: 25px;
    border-radius: 5px;
  
  &:hover,
  & focus{
    border: 1px solid rgb(27, 113, 242);
    box-shadow: 0 8px 8px -4px lightblue; }
`
