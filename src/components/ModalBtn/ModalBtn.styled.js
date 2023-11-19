import styled from 'styled-components';

export const ModalBtn = styled.button`
  display: flex;
  width: 274px;
  height: 44px;
  padding: 12px 99px;
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

export const ModalBtnText = styled.span`
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;

  color: #fff;
`;
