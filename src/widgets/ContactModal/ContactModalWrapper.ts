import styled from "styled-components";
import { colors } from "../../shared/constants/colors";

export const ContactModalWrapper = styled.div`
  .send {
    background-color: ${colors["light"].accent_green};
    width: 100%;

    &:hover {
      background-color: ${colors["light"].accent_green_hover};
    }
  }

  .s12 {
    font-size: 12px;
  }
`;
