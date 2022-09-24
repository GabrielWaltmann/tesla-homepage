import styled from "styled-components";

export const Container = styled.main`
.colored:nth-child(1) {
background: #f1ffe7;
}
.colored:nth-child(2) {
background: #dfffd9;
}
.colored:nth-child(3) {
background: #cdfeca;
}
.colored:nth-child(4) {
background: #bbfebb;
}
.colored:nth-child(5) {
background: #a9fdac;
}
.colored:nth-child(6) {
background: #90f29c;
}
.colored:nth-child(7) {
background: #77e68c;
}

.barWrapper {
    position: fixed;
    z-index: 10;
    background: #000000;
    width: 100%;
    top: 0;
    left: 0;
    content: '';
}
  
  
.bar {
    background: #8e8e8e;
    width: 25%;
}

.barWrapper,
.bar {
    height: 10px;
}
`
