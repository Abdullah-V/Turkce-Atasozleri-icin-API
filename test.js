const app = require("express")()
const axios = require('axios')

const PORT = process.env.PORT || 3001



app.get("/",(req,res) => {
    // axios.post("https://turkce-atasozleri-api.herokuapp.com/",{limit:15}) // calismaz letter:["a","b","e"],splitted:false
    // .then(result => {
    //     console.log(result.data);
    //     res.send(result.data)
    // })

    // axios.post("https://turkce-atasozleri-api.herokuapp.com/",{letter:["a","b","e"],splitted:false}) 
    // .then(result => {
    //     console.log(result.data);
    //     res.send(result.data)
    // })

    // axios.post("https://turkce-atasozleri-api.herokuapp.com/",{letter:["a"],limit:13})
    // .then(result => {
    //     console.log(result.data);
    //     res.send(result.data)
    // })

    // axios.post("https://turkce-atasozleri-api.herokuapp.com/",{letter:["a","b","e"],limit:200})
    // .then(result => {
    //     console.log(result.data);
    //     res.send(result.data)
    // })

    // axios.post("https://turkce-atasozleri-api.herokuapp.com/",{letter:["a","b","e"],splitted:false}) // Yanlis parametre fakat calisir
    // .then(result => {
    //     console.log(result.data);
    //     res.send(result.data)
    // })

    // axios.post("https://turkce-atasozleri-api.herokuapp.com/",{letter:["a","b","e"],splitted:false})
    // .then(result => {
    //     console.log(result.data);
    //     res.send(result.data)
    // })

    res.send("test")

})



app.listen(PORT,() => {
    console.log(`Test server running on port ${PORT}`);
})

