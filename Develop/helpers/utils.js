const fs = require('fs');
const { parse } = require('path');
const util = require('util');

// Promisfy the fs.readfile so it becomes a promise object
const readFromFile = util.promisify(fs.readFile);

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
            console.error(err);
        } else {
            // parse the string data that is read from the file
            const parsedData = JSON.parse(data);
            parsedData.push(newNote);
            writeToFile(fileDest, parsedData);
        }
    });
};

// function to read and delete a note from the file 
const readAndDelete = (fileDest, idToDelete ) => {
    fs.readFile(fileDest, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            // parse the string data that is read from the file
            const parsedData = JSON.parse(data);
            console.log(parsedData);

            // Loop through the array to determine which object has the given id
            for (let i = 0; i < parsedData.length; i++) {
                if (parsedData[i].id == idToDelete ) {
                    // Use splice to get rid of the array at the index where the id matches and update the file
                    parsedData.splice( i, 1 );
                    console.log(parsedData);
                    writeToFile(fileDest, parsedData);
                }
            }
        }
    });
}

const uuid = () =>
Math.floor((1 + Math.random()) * 0x10000)
  .toString(16)
  .substring(1);

module.exports = { readFromFile, writeToFile, readAndAppend, readAndDelete, uuid }