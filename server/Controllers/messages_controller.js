const messages=[];

const id= 0;

module.exports= {
    create: (req, res) => {
        const { text, time} = req.body;
        messages.push({ text, time, id });
        id++;
        res.status(200).send( messages );
    },
    //post

    read: (req, res) => {
        res.status(200).send( messages )
    },
    //get

    update: (req, res) => {
        const { text } = req.body;
        const updateID = req.params.id;
        const messageIndex = messages.findIndex( message => message.id == updateID );
        let message = messages[ messageIndex ];

        messages[ messageIndex ] = {
            id: message.id,
            text: text || message.text,
            time: message.time
        };
        res.status(200).send(messages);
    //put
    // axios.put(http, (req, res) => {.... .res.status(200).sent(messages)}
    },

    delete: (req, res) => {
        const removeId = req.params.id 

        const indexToDelete= messages.findIndex( message => message.id === removeId);
        messages.splice(indexToDelete, 1);
        res.status(200).send( messages );
    }
    //delete
}