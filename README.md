# web-server
web server written in JavaScript.

To run the server: "node webserver.js"

To connect to the server once it's running: "telnet localhost 9999"
    You should see the server log "Listening"

Back on the terminal running telnet: "GET /test.txt HTTP/1.1" 
    This returns a 200 ok because the file "test.txt" exists in the server's directory.
    "GET /testing.txt HTTP/1.1"
    This returns a 404 Not Found because "testing.txt" does not exist in the server's directory.
