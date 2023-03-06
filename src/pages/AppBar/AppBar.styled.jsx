import styled from '@emotion/styled';

export const Header =styled.header`
  border-bottom: 2px solid  rgb(27, 113, 242);
  margin-bottom:20px;

`

export const AppBarList= styled.ul`
    display: flex;
    /* justify-content: space-between; */
    padding: 7px;
    list-style: none; 
    align-items: center; 
 

  
`
export const AppBarListItem= styled.li`
    padding: 5px 15px;
    border-radius: 5px;
    height: 25px;
   
   
    font-size:20px;
    cursor: pointer; 
   
    background-color: white;
    color: rgb(27, 113, 242);
    border: 2px solid rgb(27, 113, 242);
    transition: color, border, background-color 0.25s ease-out;;
/* 
   &:first-child {
    display: flex;
    align-items: center;
  } */

  &:hover {
    background-color: rgb(27, 113, 242);
    color:white;
    border:  2px solid transparent;
  }
  &:active {
    background-color:rgb(32, 78, 147);
  }
  
  & a {
    text-decoration: none;
    color: inherit;
  }

  &:not(:last-child){
      margin-right: 10px;
    }

`
  

  
