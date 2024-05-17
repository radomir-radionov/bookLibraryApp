import styled from 'styled-components';

export const ChatWindowStyled = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 100%;
  overflow: auto;
  padding: 16px;
  border: 2px solid orangered;
`;

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: flex-end;
`;

export const ContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const MessagesStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const MeesageStyled = styled.div`
  padding: 10px;
  background-color: #e1ff7d;
`;

export const TextStyled = styled.p``;

export const InfoStyled = styled.p`
  text-align: right;
`;

export const InputBoxStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const TypingStatusStyled = styled.p`
  display: flex;
  flex-direction: column;
  gap: 20px;
  animation: typingAnimation 1s infinite alternate;

  @keyframes typingAnimation {
    from {
      opacity: 1;
    }

    to {
      opacity: 0.5;
    }
  }
`;
