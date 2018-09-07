import React from "react";

import {
  NewsletterContainer,
  NewsletterHeader,
  NewsletterTextFieldInput,
  NewsletterSubmitButton
} from "./newsletter-sign-up.style";

export const NewsletterSignUp = () => (
  <NewsletterContainer>
    <form>
      <NewsletterHeader>
        Subscribe to our newsletter for the latest updates.
      </NewsletterHeader>
      <NewsletterTextFieldInput type="text" placeholder="Name" />
      <NewsletterTextFieldInput type="text" placeholder="Email" />
      <NewsletterSubmitButton>Submit</NewsletterSubmitButton>
    </form>
  </NewsletterContainer>
);
