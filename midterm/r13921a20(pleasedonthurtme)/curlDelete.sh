#!/bin/bash
curl -X DELETE "https://ia-midtermweb.onrender.com/api/comments/$1" \
    -H "Content-Type: application/json" \
    -d '{"user_id":"'"$2"'"}'