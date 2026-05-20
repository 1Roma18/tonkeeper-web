# One-time: create Kazakh locale files from Russian (translate kk.json to Kazakh over time).
$root = Split-Path $PSScriptRoot -Parent
$tonkeeper = Join-Path $root "packages\locales\src\tonkeeper"
$web = Join-Path $root "packages\locales\src\tonkeeper-web"

Copy-Item (Join-Path $tonkeeper "ru-RU.json") (Join-Path $tonkeeper "kk.json") -Force
Copy-Item (Join-Path $web "ru-RU.json") (Join-Path $web "kk.json") -Force

Write-Host "Created kk.json in tonkeeper and tonkeeper-web (Russian text as starting point)."
