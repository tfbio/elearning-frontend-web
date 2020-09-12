import styled from 'styled-components';

export const Container = styled.div`
  padding: 78px 260px;
  display: flex;
  justify-content: center;
  align-items: center;

  > img {
    margin-right: auto;
    width: 400px;
    height: 400px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 500px;

  h1 {
    color: #ff6680;
    font-size: 48px;
  }

  p {
    color: #edebf5;
  }

  button {
    margin-top: 32px;
    width: 280px;
    height: 56px;
    left: 36px;
    top: 716px;

    background: #ff6680;
    border-radius: 16px;
    border: 0;
  }
`;

export const Button = styled.button``;
