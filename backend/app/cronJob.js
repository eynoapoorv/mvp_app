const cronJob = require('node-cron');

// Schedule a cron job to run every day at 9 AM
cronJob.schedule("*/3 * * * * *", () => {

    newFunction();
    oldFunction();

});


const newFunction = () => {
    console.log("")

}

const oldFunction = () => {
    console.log("")
}