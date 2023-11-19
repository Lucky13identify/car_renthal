import styled from 'styled-components';

export const Title = styled.h1`
  margin: 0;

  font-family: Manrope;
  font-size: 50px;
  font-weight: 600;
  line-height: 33px;
  letter-spacing: 0;

  color: white;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  align-items: center;
  justify-content: center;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p`
  padding-left: 200px;
  padding-right: 200px;
  margin-top: 60px;
  margin-bottom: 0;

  text-align: center;
  font-family: Manrope;
  font-size: 25px;
  font-weight: 400;

  color: white;
`;

export const Conteiner = styled.section`
  display: flex;
  flex-direction: column;
  height: 320px;
  max-width: 1600px;

  background-color: grey;
  background-image: linear-gradient(
      rgba(47, 48, 58, 0.6),
      rgba(47, 48, 58, 0.6)
    ),
    url(https://res.cloudinary.com/dici0468p/image/upload/v1700227075/Renthal_cars/599622a822870_lg1duf.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  margin: 0px auto;
  padding-top: 200px;
  padding-bottom: 200px;
`;

export const Img = styled.img`
  width: 120px;
  height: 120px;
`;

export const Wrap = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: center;
`;

export const TextForIcon = styled.p`
  margin: 0;
  align-items: center;

  font-family: Manrope;

  font-size: 20px;
  font-weight: 600;

  color: #121417;
`;

export const Button = styled.button`
  display: flex;
  width: 180px;
  height: 50px;
  padding: 14px 44px;
  justify-content: center;
  align-items: center;

  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;

  border-radius: 12px;
  border: none;
  cursor: pointer;
  transition: background 0.2s ease-in-out;

  color: white;
  background: #3470ff;

  &:hover,
  &:focus {
    background: #0b44cd;
  }
`;
