# Full Kazakh locale rebuild
Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'
Set-Location $PSScriptRoot\..

Write-Host 'Running rebuild-kk-locale.mjs...'
node scripts/rebuild-kk-locale.mjs
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

Write-Host 'Building locales package...'
Push-Location packages\locales
yarn build
Pop-Location

Write-Host 'Copying locales to web app...'
Push-Location apps\web
yarn locales
Pop-Location

Write-Host 'Done. Restart dev server and hard-refresh browser (Ctrl+Shift+R).'
