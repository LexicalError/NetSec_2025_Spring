#!/bin/bash
TEXT="$1"
USER_ID="$2"

curl -X POST "https://ia-midtermweb.onrender.com/api/comments" \
    -H "Content-Type: application/json" \
    -d "{\"text\":\"$TEXT\", \"user_id\":\"$USER_ID\"}"