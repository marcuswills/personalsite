import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.95);
  height: 100vh;
  text-align: left;
  padding-top: 3rem;
  padding-left: 2rem;
  padding-right: 1rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  z-index: 100;
  
  @media only screen and (min-width: 768px) {
    width: 100%;
  }

  a {
    font-family: "Sora-Bold";
    font-size: 1rem;
    padding: 1rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: black;
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media only screen and (min-width: 768px) {
      font-size: 1rem;
    }

    &:hover {
        color: #FFFFFF;
    }
  }
`;