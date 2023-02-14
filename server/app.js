const express = require('express')
const app = express()
const port = 4001;

// 모든 Origin, 경로에 대해 CORS 요청을 허용하게 미들웨어를 적용한다.
const cors = require('cors');
app.use(cors())

// POST 요청 등에 포함된 body(payload)를 구조화하기 위한 미들웨어인 express.json()을 적용한다.
const jsonParser = express.json({strict: false})
app.use(jsonParser)


const homeRouter = require('./routes/homeRouter');
app.use('/home', homeRouter);

const settingRouter = require('./routes/settingRouter');
app.use('/setting', settingRouter);

// 서버 상태 확인을 위해 GET / 에서 상태 코드 200으로 응답한다.
app.get('/', (req, res) => {
  res.send('Welcome to To Do List App!');
});

app.listen(port, () => {
  console.log(`[RUN] To Do List server... | http://localhost:${port}`);
});

module.exports = app;