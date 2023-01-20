import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  }

.app {
  display: grid;
  grid-template-rows: 100px 50px 100vh;
  padding: 0 6%;
}

.header {
  background-color: lightblue;
  display: flex;
  justify-content: center;
  align-items: center;
}

.search {
  background-color: lightgreen;
}

.main {
  display: grid;
  grid-gap: 3.6%;
  grid-template-columns: repeat(3, 1fr);
  background-color: grey;
}


@media screen and (max-width: 1150px) {
  .main {
  grid-template-columns: repeat(3, 1fr);
}
}

@media screen and (max-width: 870px) {
  .main {
  grid-template-columns: repeat(2, 1fr);
}
}

@media screen and (max-width: 580px) {
  .main {
  grid-template-columns: repeat(1, 1fr);
}
}

.section1 {
  background-color: mediumpurple;
}

.section2 {
  background-color: lightgoldenrodyellow;
}

.section3 {
  background-color: lightpink;
}

//Setting Page 스타일링 
.app-setting {
  width: 100vw;
  height: 100vh;
  padding: 3% 6%;
  display: grid; 
  grid-template-rows: 5fr 1fr;
}

.setting-options-container {
  display: grid;
  grid-template-rows: 0.8fr 1fr 2.5fr;
  grid-row-gap: 5%;
  padding-left: 250px;
}

.buttons-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

//Drag-and-Drop을 위한 css
.draggable {
  cursor: move;
}

// list속성의 bullet point 제거
.to-do-list, .status-bar {
  list-style: none;
}
`

export default GlobalStyle 