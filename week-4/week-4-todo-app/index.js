const express = require('express');
const app = new express();

let todos = [];
let ctr = 0;

app.use(express.json());

app.post("/",function(req,res){
    let {title} = req.body;
    res.send(`Hello vit + ${title}`);
    // todos.push({
    //     title: `<body>
    //         <div>
    //             <input type="text"><button>Add todo</button>
    //         </div>
    //     </body>`,
    //     id: ctr
    // })
})

app.get("/",function(req,res){
    // addTodo(){

    // }
    res.send("Hello World");
})

app.delete("/",function(req,res){

})

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
