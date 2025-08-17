import styled from "styled-components";
import { colors } from "../../shared/constants/colors";

export const CatalogueWrapper = styled.div`
  .ant-card-body {
    padding: 0 !important;
  }

  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: ${colors["light"].accent_green} !important;
    border-color: ${colors["light"].accent_green} !important;
  }

  .ant-btn-variant-outlined:not(:disabled):not(.ant-btn-disabled):hover {
    border-color: ${colors["light"].accent_green} !important;
    color: ${colors["light"].accent_green} !important;
  }

  .filter-main {
    font-size: 16px;
    color: ${colors["light"].main_blue};
    margin-bottom: 15px;
  }

  .card-text {
    font-size: 12px;

    &-main {
      font-size: 16px;
    }
  }

  .category {
    &:hover {
      cursor: pointer;
      color: ${colors["light"].accent_green};
    }

    &-active {
      color: ${colors["light"].accent_green};
      font-weight: 600;
    }
  }

  .badge {
    background-color: ${colors["light"].accent_green};
    color: ${colors["light"].white};
    padding: 10px 15px;
    border-radius: 100px;

    display: flex;
    flex-direction: row;
    gap: 2.5px;
    align-items: center;
    justify-content: center;

    &:hover {
      cursor: pointer;
    }
  }
`;
