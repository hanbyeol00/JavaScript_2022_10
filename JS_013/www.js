/**
 * express 도구를 install
 * http 서버를 생성하면
 * GET / 로 요청하면 "반갑습니다"
 * GET /user 로 요청하면 "안녕하세요"
 * 로 보이도록
 */
import http from "http";
import express from "express";

const host = "127.0.0.1";
const port = 4000;

const app = express();

const server = http.createServer(app);

server.listen(port, host);

app.get("/", (req, res) => {
  /**
   * 여러번 text 를 보내고 싶을때는 write() 로 보내고
   * 제일 마지막에 end() 로 마감한다
   */
  res.setHeader("Content-Type", "text/html;charset=UTF-8");
  res.write("안녕하세요<hr/>");
  res.write("오늘은 목요일<hr/>");
  res.end("금요일이면 좋겠네<hr/>");
});

app.get("/user", (req, res) => {
  // 한번만 보낼수 있다
  res.send("안녕하세요");
});

/**
 * 콘솔 명령어
 * npm init : package 파일생성
 * md : 폴더생성
 * cd ~~ : 폴더이동
 * cd .. : 아래폴더로 이동
 */
