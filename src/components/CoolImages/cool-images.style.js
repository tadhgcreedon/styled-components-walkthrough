import styled from "styled-components";

export const CoolImagesContainer = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  padding: 16px;
  max-width: 1000px;
`;

export const CoolImageContainer = styled.div`
  flex: 1;
  display: flex;
`;

// TODO: add helper function for the background url
export const CoolImage = styled.div`
  flex: 1;
  background: 
    linear-gradient(
      rgba(0, 12, 158, 0.5), 
      rgba(0, 12, 158, 0.5)
    ), url("${props => props.imageUrl}");
    background-size: cover;
  width: 50%;
  padding: 32px;
`;

export const CoolImageTextContainer = styled.div`
  flex: 1;
  background-color: ${({ theme }) =>
    theme.colors.coolImages.backgroundColor.default};
  color: ${({ theme }) => theme.colors.coolImages.text.default};
  font-weight: 600;
  padding: 32px;
`;

export const CoolImageTextContainerAlternate = CoolImageTextContainer.extend`
  background-color: ${({ theme }) =>
    theme.colors.coolImages.backgroundColor.alternate};
  color: ${({ theme }) => theme.colors.coolImages.text.alternate};
`;
