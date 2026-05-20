# Removes accidental tsc output (*.js) from package src folders.
# Vite imports workspace src directly; .js files break ESM named exports.
$ErrorActionPreference = 'Stop'
$root = Split-Path $PSScriptRoot -Parent
$dirs = @(
    (Join-Path $root 'packages\core\src'),
    (Join-Path $root 'packages\uikit\src')
)
$removed = 0
foreach ($dir in $dirs) {
    if (-not (Test-Path $dir)) { continue }
    Get-ChildItem -Path $dir -Recurse -Filter '*.js' -File | ForEach-Object {
        Remove-Item -LiteralPath $_.FullName -Force
        $script:removed++
    }
}
Write-Host "Removed $removed .js files from packages/core/src and packages/uikit/src" -ForegroundColor Green
