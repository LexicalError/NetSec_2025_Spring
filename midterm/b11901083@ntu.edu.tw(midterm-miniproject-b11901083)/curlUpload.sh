#!/bin/bash
curl -X POST "https://mjzanutknobvlaoaddal.supabase.co/storage/v1/object/avatars/ohno.svg" \
    -H "Host: mjzanutknobvlaoaddal.supabase.co" \
    -H "Accept: */*" \
    -H "Accept-Language: en-US,en;q=0.5" \
    -H "Accept-Encoding: gzip, deflate, br, zstd" \
    -H "Referer: https://midterm-miniproject-b11901083.vercel.app/" \
    -H "apikey: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qemFudXRrbm9idmxhb2FkZGFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ2MTQxNjUsImV4cCI6MjA2MDE5MDE2NX0.q9-9zzMEjT8W6DLA4zupOnCR0B4Iw8E7LYutZ5vF9YM" \
    -H "authorization: Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6IkdqTmdvMXBmRUo4c3lFWm8iLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL21qemFudXRrbm9idmxhb2FkZGFsLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiI3NmJjN2E0MC01MjhmLTQ2ZDUtYTA0MS0yMDcxMmUzMDFmZDIiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzQ0OTQ1NTc5LCJpYXQiOjE3NDQ5NDE5NzksImVtYWlsIjoieEB4LmNvbSIsInBob25lIjoiIiwiYXBwX21ldGFkYXRhIjp7InByb3ZpZGVyIjoiZW1haWwiLCJwcm92aWRlcnMiOlsiZW1haWwiXX0sInVzZXJfbWV0YWRhdGEiOnsiZW1haWwiOiJ4QHguY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBob25lX3ZlcmlmaWVkIjpmYWxzZSwic3ViIjoiNzZiYzdhNDAtNTI4Zi00NmQ1LWEwNDEtMjA3MTJlMzAxZmQyIiwidXNlcm5hbWUiOiJ4In0sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE3NDQ5NDE5Nzl9XSwic2Vzc2lvbl9pZCI6IjRmNTJhYzJhLWJlZGMtNDAxYy05NzA0LTg1ZWE4YzNmMjM2MSIsImlzX2Fub255bW91cyI6ZmFsc2V9.j-yxuViEVor5y55kHLStee5sw26r5W9Kjx-ibnMHetQ" \
    -H "x-client-info: supabase-js-web/2.49.4" \
    -H "x-upsert: true" \
    -H "Content-Type: multipart/form-data; boundary=----geckoformboundaryaacb8245795a993c31b1159a2a3d582" \
    -H "Origin: https://midterm-miniproject-b11901083.vercel.app" \
    -H "Connection: keep-alive" \
    -H "Sec-Fetch-Dest: empty" \
    -H "Sec-Fetch-Mode: cors" \
    -H "Sec-Fetch-Site: cross-site" \
    -H "Priority: u=4" \
    -H "TE: trailers" \
    --data-binary "@$1"

sleep 3

curl -X PATCH "https://mjzanutknobvlaoaddal.supabase.co/rest/v1/profiles?id=eq.76bc7a40-528f-46d5-a041-20712e301fd2" \
    -H "Host: mjzanutknobvlaoaddal.supabase.co" \
    -H "Accept: */*" \
    -H "Accept-Language: en-US,en;q=0.5" \
    -H "Accept-Encoding: gzip, deflate, br, zstd" \
    -H "Referer: https://midterm-miniproject-b11901083.vercel.app/" \
    -H "apikey: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qemFudXRrbm9idmxhb2FkZGFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ2MTQxNjUsImV4cCI6MjA2MDE5MDE2NX0.q9-9zzMEjT8W6DLA4zupOnCR0B4Iw8E7LYutZ5vF9YM" \
    -H "authorization: Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6IkdqTmdvMXBmRUo4c3lFWm8iLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL21qemFudXRrbm9idmxhb2FkZGFsLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiI3NmJjN2E0MC01MjhmLTQ2ZDUtYTA0MS0yMDcxMmUzMDFmZDIiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzQ0OTQ1NTc5LCJpYXQiOjE3NDQ5NDE5NzksImVtYWlsIjoieEB4LmNvbSIsInBob25lIjoiIiwiYXBwX21ldGFkYXRhIjp7InByb3ZpZGVyIjoiZW1haWwiLCJwcm92aWRlcnMiOlsiZW1haWwiXX0sInVzZXJfbWV0YWRhdGEiOnsiZW1haWwiOiJ4QHguY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBob25lX3ZlcmlmaWVkIjpmYWxzZSwic3ViIjoiNzZiYzdhNDAtNTI4Zi00NmQ1LWEwNDEtMjA3MTJlMzAxZmQyIiwidXNlcm5hbWUiOiJ4In0sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE3NDQ5NDE5Nzl9XSwic2Vzc2lvbl9pZCI6IjRmNTJhYzJhLWJlZGMtNDAxYy05NzA0LTg1ZWE4YzNmMjM2MSIsImlzX2Fub255bW91cyI6ZmFsc2V9.j-yxuViEVor5y55kHLStee5sw26r5W9Kjx-ibnMHetQ" \
    -H "content-profile: public" \
    -H "content-type: application/json" \
    -H "x-client-info: supabase-js-web/2.49.4" \
    -H "Origin: https://midterm-miniproject-b11901083.vercel.app" \
    -H "Connection: keep-alive" \
    -H "Sec-Fetch-Dest: empty" \
    -H "Sec-Fetch-Mode: cors" \
    -H "Sec-Fetch-Site: cross-site" \
    -H "Priority: u=4" \
    -H "TE: trailers \
    -d '{"username":"x@x.com","avatar_url":"https://mjzanutknobvlaoaddal.supabase.co/storage/v1/object/public/avatars/ohno.svg","updated_at":"2025-04-18T02:11:31.069Z"}'