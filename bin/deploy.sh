#!/bin/bash
gatsby build
aws s3 sync --acl public-read --sse --delete ./public/ s3://galaxy.learngala.com
aws configure set preview.cloudfront true
aws cloudfront create-invalidation --distribution-id EFG3KMY34LDY6 --paths '/*'
