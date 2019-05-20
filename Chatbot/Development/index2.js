const brain = require('brain.js');
const data = require("./JS/data.json");

const network = new brain.recurrent.LSTM();

const trainingData = data.map(item => ({
    input: item.text,
    output: item.category
}));

network.train(trainingData, {
    interations: 20000
});

const output = network.run('Agenda delen');
const output = network.run('Postvak Openen');
const output = network.run('Sharepoint Synchroniseren');
const output = network.run('Handtekening in Word');
const output = network.run('Email adres Yammer');

console.log('category: ${output}');



