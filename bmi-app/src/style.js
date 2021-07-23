import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.main`
  max-width: 1200px;
  margin: auto;
`;

export const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #181818;
`;

export const NavbarItem = styled.div`
  padding: 1.5rem;
`;

export const NavbarLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
`;

export const BMIWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 5rem;
`;

export const BMIForm = styled.form`
  width: 450px;
`;

export const BMIInput = styled.input`
  outline: none;
  border: 1px solid #181818;
  border-radius: 5px;
  padding: 0.7rem 0;
  display: inline-block;
  margin: 1rem 0;
  width: 100%;

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const BMIButton = styled.button`
  padding: 0.9rem 0;
  margin: 1rem 0;
  border: 2px solid #181818;
  text-align: center;
  background-color: #181818;
  color: #ffffff;
  transition: all 0.3s;
  border-radius: 10px;
  width: 100%;
  cursor: pointer;

  &:hover {
    background-color: #ffffff;
    color: #181818;
  }
`;

export const BMIList = styled.ul`
  list-style-type: none;
  margin-top: 3rem;
`;

export const BMIListItem = styled.li``;
