import styled from 'styled-components';

export const ImgContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 14px;

  background-color: grey;
`;

export const Text = styled.p`
  margin-top: 14px;
  margin-bottom: 8px;
  align-items: center;

  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;

  color: #121417;
`;

export const ColorText = styled.span`
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;

  color: #3470ff;
`;

export const TagText = styled.p`
  margin: 0;

  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;

  color: rgba(18, 20, 23, 0.5);
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 14px;

  object-fit: cover;

  background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    ),
    #f3f3f2;
`;

export const Box = styled.div`
  width: 274px;
  height: 268px;
  position: relative;
`;

export const Li = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 274px;
  height: 426px;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Icon = styled.svg`
  width: 18px;
  height: 18px;

  fill: none;
  stroke: #fff;
`;

export const FavoriteIcon = styled.svg`
  width: 18px;
  height: 18px;

  fill: #3470ff;
  stroke: #3470ff;
`;

export const IconButton = styled.button`
  top: 14px;
  right: 14px;
  position: absolute;

  width: 18px;
  height: 18px;
  padding: 0;

  font-family: Manrope;

  cursor: pointer;
  border: none;
  background: none;
  color: #fff;
  transition: color 0.2s ease-in-out;

  &:hover,
  &:focus {
    color: #3470ff;
  }
`;
