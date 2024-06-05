import express from 'express'; //  gives error by default to remove the error go to package .json and  add "type": "module" or "commonjs"

const app = express();

const port = process.env.PORT || 3000;

// app.get('/',(req,res)=>{
//     res.send("server is ready")
// })


// get 5 jokes

app.get('/api/jokes',(req,res)=>{
    const jokes = [
        {
            id: 1,
            title:'A joke',
            content:'This is a joke'
        },
        {
            id: 2,
            title:'second joke',
            content:'This is a second joke'
        },
        {
            id: 3,
            title:'A third joke',
            content:'This is a third joke'
        },
        {
            id: 4,
            title:'A fourth joke',
            content:'This is a  fourth joke'
        },
        {
            id: 5,
            title:'A fifth joke',
            content:'This is a joke fifth'
        },
    ]
    res.send(jokes);
})

app.listen(port,()=>{
    console.log(`Server listening on at http://localhost:${port}`)
})