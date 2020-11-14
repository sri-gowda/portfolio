import styled from "styled-components";

export const NavStyles = styled.ul`
  margin: 0;
  padding: 20px 0;
  display: flex;
  width: 100%;
  justify-content: center;

  a,
  button {
    padding: 1rem 3rem;
    display: flex;
    align-items: center;
    position: relative;
    text-transform: Capitalize;
    font-size: 1em;
    font-weight: 500;
    letter-spacing: 1px;
    background: none;
    border: 0;
    cursor: pointer;
    color: ${props => props.theme.black};

    @media (max-width: 700px) {
      font-size: 10px;
      padding: 0 10px;
    }

    &:after {
      height: 4px;
      background: #fff;
      border-radius: 12px;
      content: "";
      width: 0;
      position: absolute;
      transform: translateX(-50%);
      transition: width 0.4s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
      left: 50%;
      margin-top: 3rem;
    }
    &:hover,
    &.active,
    &:focus {
      outline: none;
      &:after {
        width: calc(100% - 80px);
      }
    }
  }
`;
