# Fix blank screen (Symbol/buffer): clear Vite cache and restart dev
$ErrorActionPreference = "Stop"
$root = Split-Path $PSScriptRoot -Parent
$cache = Join-Path $root "apps\web\node_modules\.vite"
if (Test-Path $cache) {
    Remove-Item -Recurse -Force $cache
    Write-Host "Removed $cache" -ForegroundColor Green
} else {
    Write-Host "No Vite cache found." -ForegroundColor Yellow
}
Write-Host ""
Write-Host "Now run:  yarn workspace @tonkeeper/web dev" -ForegroundColor Cyan
