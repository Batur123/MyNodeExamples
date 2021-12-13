let IPAddress = 'localhost';
let Port = '1234';
let APIKey = 'ca093389-d6dc-4991-8b69-6695096213d5';

const socket = io.connect(IPAddress+":"+Port,
        {
            reconnect: true,
            extraHeaders: {
                Authorization: APIKey
            }
        });

socket.on('connect', function ()
{
    console.log('Connected');
});

socket.on("error", (err) =>
{   
    console.log(err);
});

socket.on('message', function (data)
{
    console.log(data);
});

exports.SocketConn = socket;
