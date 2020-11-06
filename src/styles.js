import styled, { createGlobalStyle } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2da661;
  height: 100vh;
`;

export const FormContainer = styled.div`
  background-color: #fff;
  width: 450px;
  padding: 50px;
  border: 1px solid #ddd;
  border-radius: 20px;
  padding: 30px;

  h2 {
    margin-bottom: 20px;
  }

  h3 {
    margin-bottom: 30px;
  }
`;

export const Options = styled.div`
  button {
    padding: 20px;
    background-color: #fff;
    border: 1px solid #ddd;
    margin-left: 10px;

    img {
      width: 70px;
    }
  }
`;
