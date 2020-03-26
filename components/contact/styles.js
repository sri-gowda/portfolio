import styled from "styled-components";

export const Button = styled.button`
  background: #e5f904;
  padding: 10px 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
`;

export const DownloadLink = styled.a`
  background: #e5f904;
  padding: 10px 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;

export const Input = styled.input`
  border: 2px solid #e5f904;
  border-radius: 5px;
  padding: 5px 10px;
  outline: none;
  font-size: 14px;
`;

export const TextArea = styled.textarea`
  border: 2px solid #e5f904;
  border-radius: 5px;
  padding: 5px 10px;
  outline: none;
  font-size: 14px;
  max-width: 100%;
  min-width: 100%;
`;

export const Modal = styled.div`
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding: 10px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
`;

/* Modal Content */
export const ModalContent = styled.div`
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 60%;
  border-radius: 5px;
`;
