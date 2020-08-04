const path = require('path')
const fs = require('fs')

const copyFilesToProd = () => {
    // Get all files in src folder
    const files = fs.readdirSync(path.join(__dirname, '../', 'src'))

    // Files to ignore
    const ignore = ['config.env']

    // Create Prod folder if it doesn't exist
    if(!fs.existsSync(path.join(__dirname, '../', 'prod'))) fs.mkdirSync(path.join(__dirname, '../', 'prod'));

    // Copy each file
    files.forEach(file => {
        if(!ignore.includes(file)){
            fs.copyFileSync(path.join(__dirname, '../', 'src', file), path.join(__dirname, '../', 'prod', file))
        }
    })

    console.log('Copied files into Prod')
}


copyFilesToProd()
