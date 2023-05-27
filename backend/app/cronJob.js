const cronJob = require('node-cron');

// Schedule a cron job to run every day at 9 AM
cronJob.schedule("*/3 * * * * *", () => {
    console.log("Console Message");
    newFunction();
    oldFunction();

});


const newFunction = () => {
    console.log("New Function")

}

const oldFunction = () => {
    console.log("Old Function")
}