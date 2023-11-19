import styled from 'styled-components';

export const Btn = styled.button`
  display: flex;
  padding: 14px 44px;
  justify-content: center;
  align-items: center;

  border-radius: 12px;
  border: none;
  cursor: pointer;
  transition: background 0.2s ease-in-out;
  background: #3470ff;

  &:hover,
  &:focus {
    background: #0b44cd;
  }
`;

export const BtnText = styled.span`
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;

  color: #fff;
`;

export const InputTo = styled.input`
  display: flex;
  width: 73px;
  height: 16px;
  padding: 16px 63px 16px 24px;
  align-items: center;

  border-radius: 0px 14px 14px 0px;

  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;

  background: #f7f7fb;
  color: #121417;

  border: none;
  outline: none;
`;

export const InputFrom = styled.input`
  display: flex;
  width: 73px;
  height: 16px;
  padding: 16px 41px 16px 24px;
  align-items: center;

  border-radius: 14px 0px 0px 14px;
  border: none;
  border-right: 1px solid rgba(138, 138, 137, 0.2);

  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;

  background: #f7f7fb;
  color: #121417;

  outline: none;
`;

export const MileageText = styled.span`
  position: absolute;
  top: -22px;

  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;

  color: #8a8a89;
`;

export const MileageLabel = styled.label`
  position: relative;
  display: flex;
`;

export const SelectPrice = styled.select`
  display: flex;
  width: 100px;
  padding: 14px 18px;
  align-items: flex-start;
  gap: 32px;

  border-radius: 14px;

  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;

  background: #f7f7fb;
  color: #121417;

  border: none;
  outline: none;
`;

export const PriceText = styled.span`
  position: absolute;
  top: -22px;

  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;

  color: #8a8a89;
`;

export const PriceLabel = styled.label`
  position: relative;
  display: flex;
`;

export const SelectCar = styled.select`
  display: flex;
  width: 206px;
  padding: 14px 0px 14px 18px;
  justify-content: center;
  align-items: center;
  gap: 32px;

  border-radius: 14px;

  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;

  background: #f7f7fb;
  color: #121417;

  border: none;
  outline: none;
`;

export const CarText = styled.span`
  position: absolute;
  top: -22px;

  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;

  color: #8a8a89;
`;

export const CarLabel = styled.label`
  position: relative;
  display: flex;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
`;

export const Option = styled.option`
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;

  color: rgba(18, 20, 23, 0.2);
`;
export const OptionBlack = styled.option`
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;

  color: #121417;
`;
