import styled from "styled-components";

export const NewsletterContainer = styled.div`
  padding: 16px;
`;

export const NewsletterHeader = styled.div`
  font-weight: 400;
`;

export const NewsletterTextFieldInput = styled.input`
  width: 320px;
  margin: 4px 0;
  background-color: ${({ theme }) =>
    theme.colors.newsletterSignUp.input.background};

  &:focus {
    outline: none;
    border: 2px solid #000c9e;
  }
`;

export const NewsletterSubmitButton = styled.button`
  display: block;
  cursor: pointer;
  background-color: ${({ theme }) =>
    theme.colors.newsletterSignUp.button.background};
`;
