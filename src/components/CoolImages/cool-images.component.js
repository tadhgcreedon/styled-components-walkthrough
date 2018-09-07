import React from "react";

import {
  CoolImage,
  CoolImageContainer,
  CoolImagesContainer,
  CoolImageTextContainer,
  CoolImageTextContainerAlternate
} from "./cool-images.style";

import { imageUrls } from "./cool-images.constants";

export const CoolImages = () => (
  <CoolImagesContainer>
    <CoolImageContainer>
      <CoolImageTextContainer>
        Cutting edge technical solutions
      </CoolImageTextContainer>
      <CoolImage imageUrl={imageUrls.code} />
    </CoolImageContainer>
    <CoolImageContainer>
      <CoolImage imageUrl={imageUrls.toronto} />
      <CoolImageTextContainerAlternate>
        Located in the heart of Toronto
      </CoolImageTextContainerAlternate>
    </CoolImageContainer>
    <CoolImageContainer>
      <CoolImageTextContainer>
        Working with you to ensure success
      </CoolImageTextContainer>
      <CoolImage imageUrl={imageUrls.collaboration} />
    </CoolImageContainer>
  </CoolImagesContainer>
);
