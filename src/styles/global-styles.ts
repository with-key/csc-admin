import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
${normalize}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    height: 200vh;
    display: flex;
    justify-content: center;
}
li {
      list-style: none;
    }
a {
    text-decoration: none;
}
button {
    border:none;
}
`;

export default GlobalStyle;
