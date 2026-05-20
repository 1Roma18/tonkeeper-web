# Full dev reset after accidental tsc in src/ (Windows)
$ErrorActionPreference = "Stop"
$root = Split-Path $PSScriptRoot -Parent
Set-Location $root

Write-Host "1. Remove stray .js in core/uikit src..." -ForegroundColor Cyan
node scripts\clean-compiled-js-in-src.mjs

Write-Host "2. Clear Vite cache..." -ForegroundColor Cyan
$viteCache = Join-Path $root "apps\web\node_modules\.vite"
if (Test-Path $viteCache) { Remove-Item -Recurse -Force $viteCache }

Write-Host "3. Build @tonkeeper/core..." -ForegroundColor Cyan
Push-Location packages\core
yarn build
Pop-Location

Write-Host "4. Copy locales to web..." -ForegroundColor Cyan
Push-Location apps\web
yarn locales
Pop-Location

Write-Host ""
Write-Host "Done. Now run:  yarn workspace @tonkeeper/web dev" -ForegroundColor Green
