# Temporary public URL while dev server runs on port 5173
$ErrorActionPreference = "Stop"
Write-Host "Start dev server first:  yarn workspace @tonkeeper/web dev" -ForegroundColor Yellow
Write-Host "Then this script opens a public tunnel to localhost:5173" -ForegroundColor Cyan
Write-Host ""
npx --yes localtunnel --port 5173
