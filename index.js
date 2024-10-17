
const fs = require('fs')

fs.readFile("demo.text", 'utf8', (err, data)-->{
    if(err){
        console.log(err)
    }
    console.log(data)
})