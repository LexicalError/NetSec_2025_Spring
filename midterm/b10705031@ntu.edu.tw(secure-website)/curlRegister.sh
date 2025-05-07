#!/bin/bash
curl -X POST "https://secure-website-production.up.railway.app/api/auth/register" \
  -F "user=$1" \
  -F "password=$1" \
  -F "avatar=@$2"
