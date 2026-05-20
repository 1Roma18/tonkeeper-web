# Optional: download staking provider icons into uikit (for offline / yarn build)
$ErrorActionPreference = "Stop"
$root = Split-Path $PSScriptRoot -Parent
$srcAssets = Join-Path $root "packages\uikit\src\components\staking\assets"
$distAssets = Join-Path $root "packages\uikit\dist\components\staking\assets"
New-Item -ItemType Directory -Force -Path $srcAssets, $distAssets | Out-Null
$base = "https://raw.githubusercontent.com/tonkeeper/tonkeeper-web/main/packages/uikit/src/components/staking/assets"
foreach ($name in @("tonkeeper", "tonnominators", "tonstakers", "tonwhales")) {
    $out = Join-Path $srcAssets "$name.png"
    Write-Host "Downloading $name.png ..."
    Invoke-WebRequest -Uri "$base/$name.png" -OutFile $out -UseBasicParsing
    Copy-Item $out (Join-Path $distAssets "$name.png") -Force
}
Write-Host "Done. Icons in $srcAssets"
