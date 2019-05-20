//  Filmpje: gebruikt voor tutorial:
//  https://youtu.be/hQcLd-T30g4?t=895

var restify = require('restify');
var builder = require('botbuilder');

//  =========================================================================================
//  Bot Setup
//  =========================================================================================

//  Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.port || 3978, function () {
    console.log('$s listening to %s', server.name, server.url);
});

//  Create Chat Bot
var connector = new builder.ChatConnector({
    appId: 'nog te bepalen',
    appPassword: 'Password nog invoeren'
});
var bot = new.builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());

//  =========================================================================================

