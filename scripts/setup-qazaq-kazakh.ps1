# Qazaq Wallet: Kazakh (kk) locale + default language — run once from repo root.
# Usage: powershell -ExecutionPolicy Bypass -File scripts\setup-qazaq-kazakh.ps1

$ErrorActionPreference = "Stop"
$root = Split-Path $PSScriptRoot -Parent
Set-Location $root

Write-Host "=== 0/5 Remove accidental .js from src (fixes blue screen) ===" -ForegroundColor Cyan
& "$PSScriptRoot\clean-compiled-js-in-src.ps1"

Write-Host "=== 1/5 Create kk.json translation files ===" -ForegroundColor Cyan
node scripts\create-kk-locale.mjs

Write-Host "=== 2/5 Build locales package ===" -ForegroundColor Cyan
yarn workspace @tonkeeper/locales build

Write-Host "=== 3/5 Build core package (output: dist/, NOT src/) ===" -ForegroundColor Cyan
Push-Location packages\core
yarn build
Pop-Location

Write-Host "=== 4/5 Copy locales to web app ===" -ForegroundColor Cyan
Push-Location apps\web
yarn locales
Pop-Location

Write-Host ""
Write-Host "Done. Start the wallet:" -ForegroundColor Green
Write-Host "  yarn workspace @tonkeeper/web dev"
Write-Host "Open http://localhost:5173/ (use Incognito if language stays English)"
Write-Host ""
