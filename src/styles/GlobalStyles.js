import { createGlobalStyle } from "styled-components";

import reset from "./reset";

const GlobalStyles = createGlobalStyle`
  ${reset}
  .Toastify__toast-body { 
    font-size: 1.6rem;
  }
`;

export default GlobalStyles;
