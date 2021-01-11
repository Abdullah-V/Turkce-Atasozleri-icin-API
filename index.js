const app = require('express')()
const cors = require('cors')
const bodyParser = require("body-parser")
var DATA = require('./DATA.json').data

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

const PORT = process.env.PORT || 3000

Object.defineProperty(Array.prototype, 'flat', {
    value: function(depth = 1) {
      return this.reduce(function (flat, toFlatten) {
        return flat.concat((Array.isArray(toFlatten) && (depth>1)) ? toFlatten.flat(depth-1) : toFlatten);
      }, []);
    }
});





app.get("/",(req,res) => {
    res.send("<a href='https://github.com/Abdullah-V/Turkce-Atasozleri-icin-API'>Dokümantasyon için tıklayın</a>")
})





app.post('/',async (req,res) => {

    var splitted = await "splitted" in req.body ? req.body.splitted : true
    var letter = await req.body.letter || false
    // var random = await req.body.random || false
    var limit = await req.body.limit || false

    var willSended = await DATA

    if(letter){
        var willSended2 = []
        letter.forEach(elem => {
            willSended2.push(willSended[elem])
        })
        willSended = willSended2
    }

    if(!splitted && !letter){
        willSended =  await Object.values(willSended).flat(Infinity)
    }

    if(limit && Array.isArray(willSended)){
        willSended = willSended.flat(Infinity).slice(0,limit)
    }

    res.send(willSended)

});





app.listen(PORT,() => {
    console.log(`Main server running on port ${PORT}`);
})

