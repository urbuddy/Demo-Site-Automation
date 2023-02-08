module.exports = {    
    timeout: 20000,   
    retries: Number(process.env.RETRIES),
    reporter: "good-mocha-html-reporter",
    filename: "test-report.html"
}