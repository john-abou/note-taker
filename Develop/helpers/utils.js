const fs = require('fs');
const util = require('util');

// Promisfy the fs.readfile so it becomes a promise object
const readFromFile = util.promisify(fs.readFile);
const readDBFile = util.promisify(readDB);

// Function to read file
const readDB = (fileDest) => {
    return fs.readFile(fileDest, 'utf8', (err) => err ? console.error(err) : console.log('read the file'));
} 

// Function to write to file
const writeToFile = (fileDest, fileContent) => {
    // stringify parameters adding for proper formatting 
    fs.writeFile(fileDest, JSON.stringify(fileContent, null, 4), (err) => err ? 
        console.error(err) : console.info(`\nData written to ${fileDest}`))
}

// function to read and append to a file
const readAndAppend = (fileDest, newNote) => {
    fs.readFile(fileDest, 'utf8', (err, data) => {
        if (err) {
            console.error(err)
        } else {
            // parse the string data that is read from the file
            const parsedDated = JSON.parse(data);
            parsedData.push(newNote);
            writeToFile(fileDest, parsedData);
        }
    });
};

module.exports = {readDBFile, readFromFile, writeToFile, readAndAppend }