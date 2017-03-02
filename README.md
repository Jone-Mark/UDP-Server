# UDP-Server
Server taking in h264 video feed as UDP and displaying it to a canvas element

# What its used for?
Taking a ffmpeg stream from a raspberry pi camera and piping it as UDP to a server. The server then passes it to another server that establishes a websocket with a client and takes the video stream and sends it to a canvas element.

# Still a work in progress
Working on this in spare free time.

# End goal:
To be used with cameras attached to a car using a cellular network sending UDP packets to the server.
