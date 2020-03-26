import styled from "styled-components";

export const StyledWelcomeText = styled.h1`
  font-size: 2.5em;
  text-align: left;
  line-height: 2em;
  margin: 100px;
  animation: slideUp 0.75s 0.5s cubic-bezier(0.17, 0.88, 0.32, 1.27) both,
    fadeIn 0.25s 0.5s ease-in both;
  @keyframes slideUp {
    from {
      transform: translateY(200%);
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
