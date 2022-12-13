const express = require('express');
const app = express();

const employeesArr= [
    {name: "Revan Memmedli", id: "1", age: "19"},
    {name: "Yusif Memmedli", id: "2", age: "20"},
    {name: "Revan Huseynov", id: "3", age: "19"}
]

app.get('/employees',function(res,req){
    req.send(employeesArr)
})

let PORT = 4000;

app.listen(PORT,function(){
    console.log(`Example app listening on port ${PORT}`);
});