const express = require('express')
const bodyParser = require('body-parser')
const CircularJSON = require('circular-json')
const request = require('request')
const mysql = require("sync-mysql")
const env = require("dotenv").config({ path:"../../.env" });
const path = require("path")

var connection = new mysql({
		host : process.env.host,
		user : process.env.user,
		password : process.env.password,
		database : process.env.database
});

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : false }))
app.use(express.json())
app.use(express.urlencoded({ extended : true }))
app.use('/node_modules', express.static(path.join(__dirname, '/node_modules')));

// Select all rows from st_info table
app.get("/list", (req, res) => {
    const { workflow_num } = req.body;
  const result = connection.query("SELECT * FROM workflow");

    // let data = JSON.parse(JSON.stringify({ok:true, works:result}))
    // res.send(data);
  console.log(result);
  res.writeHead(200);
  var template = `
  <!doctype html>
  <html>
  <head>
    <title>Result</title>
    <meta charset="utf-8">
    <script type="text/script" src="node_modules/jquery/dist/jquery.js"></script>
    <style>
        .modal {
            position: absolute;
            top: 0;
            left: 0;
    
            width: 100%;
            height: 100%;
    
            display: none;
    
            background-color: rgba(0, 0, 0, 0.4);
        }
    </style>
    <script defer>
        window.onload = function() {

            function init(num) {
                    const modal = document.querySelector(".modal${i}");
                    console.log(modal);
                    modal.style.display='block';
                    
                    console.log('You are on the browser');
            }
    
            const upt = document.querySelector(".uptBtn");
            const close = document.querySelector(".closeBtn");
            
            upt.addEventListener("click", function() {
                modal.style.display='none';
            })
            
            close.addEventListener("click", function() {
                modal.style.display='none';
            });
        };    
    </script>
  </head>
  <body>
  <table border="1" margin:auto; text-align:center; overflow:scroll>
     <tr>
      <th>번호</th>
      <th>제목</th>
      <th>내용</th>
      <th>등록날짜</th>
      <th>수정기록</th>
      <th>제작자</th>
      <th>시작날짜</th>
      <th>예측시간</th>
      <th>경과시간</th>
      <th>실행주기</th>
      <th>실행상태</th>
      <th>수정</th>
      <th>삭제</th>
     </tr>
  `;
  for(var i=0; i<result.length; i++) {
      if(!result[i]['on_off'] ) {
          result[i]['on_off'] = 'OFF';
      } else {
          result[i]['on_off'] = 'ON';
      }
    template += `
    <tr>
    <form method="post" name='uptForm' target='targetURL'>
      <th>${result[i]['workflow_num']}</th>
      <th><input type="text" value=${result[i]['workflow_title']} name="workflow_title"></input></th>
      <th><input type="text" value=${result[i]['workflow_text']} name="workflow_text"></input></th>
      <th>${result[i]['regist_date']}</th>
      <th>${result[i]['update_date']}</th>
      <th>${result[i]['producer']}</th>
      <th><input type="date" value=${result[i]['start_date']} name="start_date"></input></th>
      <th><input type="float" value=${result[i]['time_predic']} size="5" name="time_predic"></input></th>
      <th><input type="float" value=${result[i]['time_lapse']} name="time_lapse"></input></th>
      <th><input type="float" value=${result[i]['crontab']} size="5" name="crontab"></input></th>
      <th>${result[i]['on_off']}</th>
       
<!--
        <th>${result[i]['workflow_num']}</th>
      <th>${result[i]['workflow_title']}</th>
      <th>${result[i]['workflow_text']}</th>
      <th>${result[i]['regist_date']}</th>
      <th>${result[i]['update_date']}</th>
      <th>${result[i]['producer']}</th>
      <th>${result[i]['start_date']}</th>
      <th>${result[i]['time_predic']}</th>
      <th>${result[i]['time_lapse']}</th>
      <th>${result[i]['crontab']}</th>
      <th>${result[i]['on_off']}</th>
-->
       
       

        <th>
            <!-- <button class="openBtn" type="button" value=${result[i]['workflow_num']} onclick='init(${i})'>수정</button> -->
            <div class="modal${i} a">
                <div class="bg"></div>
                <div class="modalBox" style="background-color:white">
                    
                    <!--
                    제목 <input type="text" value="${result[i]['workflow_title']}" size="50"><br>
                    내용 <input type="text" value="${result[i]['workflow_text']}" size="50"><br>
                    시작날짜 <input type="date" value="${result[i]['start_date']}" size="30"><br>
                    예측시간 <input type="number" value="${result[i]['time_predic']}" size="30"><br>
                    실행주기 <input type="number" value="${result[i]['crontab']}"  size="30"><br><br>
                    -->
                    <button class="uptBtn" type="submit" name='uptPost' value=${result[i]['workflow_num']} formaction="/update" onclick="location.href='http://15.164.184.253:3000/list'">수정</button>
                    <!-- <button class="closeBtn" onclick="location.href='http://15.164.184.253:3000/list'">닫기</button> -->
                </div>
            </div>
        </th>
    </form>
    
    <form method="post" name='delForm' target='targetURL'>
        <th>
            <button type="submit" name='delPost' value=${result[i]['workflow_num']} formaction="/delete">삭제</button>
        </th>
    </form>
    </tr>
    `
  }
  template += `
    </table>
    </body>
    </html>
 `;
  res.end(template);
  
});

// insert post
app.post("/insert", (req,res) => {
    // var today = new Date();
    // var seconds = today.getDate();
    // var st_date = new Date().toISOString().substr(0, 10).replace('T', ' ');
    // console.log(st_date);
    // console.log(today);
    // console.log(seconds);
    
    const { 
        workflow_num,
        workflow_title, 
        workflow_text,
        regist_date,
        start_date,
        time_predic,
        crontab } = req.body;
        
    const compare = connection.query(
            "select * from workflow where workflow_title = '"
            + workflow_title + "' and workflow_text = '" + workflow_text + "'"
        )
        console.log(compare);
        
        if(compare[0]!=null) {
            console.log("중복등록");
            res.send(
                    `<script>
                        alert('이미 등록된 글입니다.');
                        location.href='http://15.164.184.253:3000/list';
                    </script>`
                )
                
        } else {
            connection.query(
            "INSERT INTO workflow(workflow_title, workflow_text, start_date, time_predic, crontab) values (?, ?, ?, ?, ?)", [
            workflow_title, 
            workflow_text,
            start_date,
            time_predic,
            crontab ]);

        
        
        
        res.send(                    
                    `<script>
                        alert('등록되었습니다.');
                        location.href='http://15.164.184.253:3000/list';
                    </script>`
        )
            
        // const select = connection.query(
        //     "select * from workflow where workflow_title = '" + workflow_title + "'"
        //     );
        
        // res.send(JSON.stringify({ok:true, works:select}));
        
        }
});

app.post("/update", (req,res) => {
    
    
    const {
        workflow_title,
        workflow_text,
        update_date,
        start_date,
        time_predic,
        crontab } = req.body;
        
    var today = new Date().toISOString().slice(0, 19).replace('T', ' ');
        // console.log(today);
                
        // console.log(workflow_title);
        // console.log(workflow_text);
        // console.log(update_date);
        // console.log(start_date);
        // console.log(time_predic);
        // console.log(crontab);
        // console.log(req.body.uptPost);
                
    const result = connection.query(
            "update workflow set workflow_title = ?, workflow_text = ?, update_date = ?, start_date = ?, time_predic = ?, crontab = ? where workflow_num = ?", [
                workflow_title,
                workflow_text,
                today,
                start_date,
                time_predic,
                crontab,
                req.body.uptPost
            ]);
            
        console.log(result);
        
        const select = connection.query(
            "select * from workflow where workflow_num = ?", [
                req.body.uptPost
                ]
            );
            
            // res.send(JSON.parse(JSON.stringify({ok:true, works:select})));
            
            res.send(                    
                `<script>
                    alert('수정되었습니다.');
                    location.href='http://15.164.184.253:3000/list';
                </script>`
            )
});

app.post("/delete", (req,res) => {
        console.log(req.body);

        
        const { workflow_num } = req.body;
        
        const select = connection.query(
            "select * from workflow where workflow_num = ?", [
                req.body.delPost
                ]
            );
        
        // res.send(JSON.parse(JSON.stringify({ok:true, works:select})));
        
        
        const result = connection.query(
            "delete from workflow where workflow_num = ?", [
                req.body.delPost
                ]);
                
                
        res.send(
                    `<script>
                        alert('삭제되었습니다.');
                        location.href='http://15.164.184.253:3000/list';
                    </script>`
            );
});

module.exports = app;