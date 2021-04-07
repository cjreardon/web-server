const net = require('net');
const fs = require('fs');

const server = net.createServer((socket) => {
    socket.on("data", (buffer) => {
        const requestString = buffer.toString('utf-8')

        const request = parseRequest(requestString)

        console.log(request.method, request.path, request.protocol);

        if (request.method == "GET"){
            if (fs.existsSync(`.${request.path}`)){
                socket.write("HTTP/1.1 200 OK\n")
            } else {
                socket.write("HTTP/1.1 404 Not Found\n")
            }
        }
    })
})

const parseRequest = (requestString) => {
    const [method, path, protocol] = requestString.split(" ");

    return {
        method,
        path,
        protocol
    }
}

server.listen(9999, () => console.log("Listening"))