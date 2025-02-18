const express = require('express');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "randomharkiratilovekiara";
const app = new express();

let users = [];
let count = 0;

app.use(express.json());

app.post("/signup",function(req,res){
    const username = req.body.username;
    const password = req.body.password;
    users.push({
        username: username,
        password: password
    })
    res.send({
        username: username,
        password: password
    })
    console.log(users);
})

app.post("/signin",function(req,res){
    const username = req.body.username;
    const password = req.body.password;
    // let token = Date.now();
    // let token = jwt.sign({
    //     username
    // })
    let foundUser = null;
    for(let i = 0; i < users.length; i++){
        if(users[i].username == username && users[i].password == password){
            foundUser = users[i];
        }
    }

    if(foundUser){
        // res.json({
        //     username: foundUser.username,
        //     password: foundUser.password,
        //     token: token
        // })
        const token = jwt.sign({
            username:foundUser.username
        },JWT_SECRET);

        // foundUser.token = token;
        res.send({
            token: token
        })
        console.log(users);
    } else{
        res.status(401).json({
            message: "user not Found"
        })
    }
})

app.get("/me",function(req,res){
    const token = req.headers.token;
    const decodedUserdetails = jwt.verify(token,JWT_SECRET);

// const foundUser = null; //! i used const insted of let
    let foundUser = null;
    const username = decodedUserdetails.username;
    for(let i = 0; i < users.length; i++){
        if(users[i].username == username){
            foundUser = users[i];
        }
    }

    if(foundUser){
        res.json({
            username: foundUser.username,
            password: foundUser.password,
            message: "successful enter me"
        })
    } else{
        res.status(401).send({
            message: "invalid token"
        })
    }
})



// app.post("/",function(req,res){
    
// })

// app.get("/",function(req,res){
//     // addTodo(){

//     // }
//     res.send("Hello World");
// })

// app.delete("/",function(req,res){

// })

// app.get("/",function(req,res){
//     // res.send("Hello Harkirat Bhaiya");
//     res.send(
//     `<body>
//         <div>
//           <input type="text"><button>Add todo</button>
//         </div>
//     </body>` )
// })

app.listen(3000);
