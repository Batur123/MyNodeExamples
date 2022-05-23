let ipAdress = 'localhost';
let port = '1234';
let apiKey = 'ca093389-d6dc-4991-8b69-6695096213d5';

const socket = io.connect(ipAdress+":"+port,{
            reconnect: true,
            extraHeaders: {
                Authorization: apiKey
            }
        });

socket.on('connect', function (){
    console.log('Connected');
});

socket.on("error", (err) =>{       
        console.log(err);
});

socket.on('message', function (data){
    console.log(data);
});

exports.socketconnection = socket;
