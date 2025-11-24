#!/bin/bash

# Kill any process using port 5000
fuser -k 5000/tcp 2>/dev/null || true
sleep 1

# Start the server
npm run dev
