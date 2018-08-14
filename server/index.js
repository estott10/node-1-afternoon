const express= require('express');
const bodyParser= require('body-parser');
const cors= require('cors')

const app= express();
const messagesBaseUrl = `/api/messages`;
app.use( bodyParser.json() );
app.use(cors());

app.use( express.static( __dirname + '/../public/build' ) );

const mc= require( `./Controllers/messages_controller`);


app.get(messagesBaseUrl, mc.read);

app.post(messagesBaseUrl, mc.create);

app.put(`${messagesBaseUrl}/:id`, mc.update);

app.delete(`${messagesBaseUrl}/:id`, mc.delete);

const port= 3005;

app.listen(port, () => { console.log(`Server listening on port ${port}.`); } );