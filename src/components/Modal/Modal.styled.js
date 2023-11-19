import styled from 'styled-components';

export const ImgContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 14px;

  background-color: grey;
`;

export const Overlay = styled.div`
  position: fixed;
  overflow-y: auto;

  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  z-index: 100;
  background: rgba(18, 20, 23, 0.5);
`;

export const ModalDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 469px;
  min-height: 698px;
  border-radius: 24px;
  background: #fff;
  padding: 15px 37px 40px 35px;
  overflow: auto;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 14px;
  object-fit: cover;
`;

export const Box = styled.div`
  width: 461px;
  height: 242px;
  padding: 25px 3px 40px 5px;
`;

export const Text = styled.p`
  margin-top: 15px;
  margin-bottom: 0;
  align-items: center;

  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;

  color: #121417;
`;

export const ColorText = styled.span`
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;

  color: #3470ff;
`;

export const TagText = styled.p`
  margin: 0;
  margin-top: 8px;
  width: 277px;

  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;

  color: rgba(18, 20, 23, 0.5);
`;

export const Wrap = styled.div`
  padding-left: 3px;
  padding-right: 5px;
`;

export const Description = styled.p`
  margin: 0;
  margin-top: 14px;
  width: 461px;

  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;

  color: #121417;
`;

export const TitleText = styled.p`
  margin: 0;
  margin-top: 24px;

  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;

  color: #121417;
`;

export const AccessoriesTagText = styled.p`
  margin: 0;
  margin-top: 8px;
  width: 461px;

  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;

  color: rgba(18, 20, 23, 0.5);
`;

export const RentalConditions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  row-gap: 0px;
  width: 461px;
  margin: 0;
  margin-top: 8px;

  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;

  color: #363535;
`;

export const RentalText = styled.p`
  display: block;
  margin: 0;
  padding: 7px 14px;
  border-radius: 35px;
  background: #f9f9f9;
`;

export const RentalTextColor = styled.span`
  margin: 0;

  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -0.24px;

  color: #3470ff;
`;

export const Button = styled.a`
  display: block;
  width: 68px;
  height: 20px;
  padding: 12px 50px;
  margin-top: 31px;

  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;

  border-radius: 12px;
  border: none;

  cursor: pointer;
  text-decoration: none;
  background: #3470ff;
  color: #fff;
  transition: background 0.2s ease-in-out;

  &:hover,
  &:focus {
    background: #0b44cd;
  }
`;

export const Icon = styled.svg`
  width: 24px;
  height: 24px;

  fill: currentColor;
  stroke: currentColor;
`;

export const IconButton = styled.button`
  top: 16px;
  right: 16px;
  position: absolute;
  width: 24px;
  height: 24px;

  border: none;
  padding: 0;
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  background: none;
  color: black;

  &:hover,
  &:focus {
    color: #3470ff;
  }
`;
