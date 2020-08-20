

var fs = require('fs')
var readline = require('readline')


//

// the raw input file needs to have the first line and the last few lines removed
//
// console.log("process.argv-->", process.argv, process.argv.length)
if (process.argv.length < 3) {
    console.log("usage: convert fileName")
    return
}
let fileIn = process.argv[2]
let j = 0
// console.log("file in-->", fileIn)

const readInterface = readline.createInterface({
    input: fs.createReadStream(fileIn),

    console: false
})


readInterface.on('line', function (line) {
    
    // let args = line.split(' ')
    args = line.slice(20)
    console.log(`on line ${j}`)
    let js = JSON.parse(args)
    console.log(JSON.stringify(js[0], null, 2), JSON.stringify(js[1], null, 2))
        j++

})