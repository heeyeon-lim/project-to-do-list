import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  }

#root {
  height: 100%;
}

.app {
  height: 100%;
  display: grid;
  grid-template-rows: 100px 50px minmax(100vh, auto);
  padding: 0 6%;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
}

.search {
}

.main {
  display: grid;
  grid-gap: 3.6%;
  grid-template-columns: repeat(3, 1fr);
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

//Setting Page 스타일링 
.setting {
  width: 100vw;
  height: 100vh;
  padding: 3% 6%;
  display: grid; 
  grid-template-rows: 5fr 1fr;
  background-color: #fff;
}

.darkmode {
  background-color: #404040;
}

.darkmode-greeting-bar {
  background-color: #C9F2FF;
}

.greeting-bar {
  background-color: #E8DCC7
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
.to-do-list {
  list-style: none;
}
`

export default GlobalStyle 