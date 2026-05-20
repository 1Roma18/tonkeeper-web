# Commit and push Qazaq Wallet rebrand to GitHub (1Roma18/tonkeeper-web)
$ErrorActionPreference = 'Stop'
Set-Location $PSScriptRoot\..

Write-Host "=== Git status ===" -ForegroundColor Cyan
git status

Write-Host "`n=== Remote ===" -ForegroundColor Cyan
git remote -v
$origin = git remote get-url origin 2>$null
if ($origin -notmatch '1Roma18/tonkeeper-web') {
    if ($origin) {
        git remote set-url origin https://github.com/1Roma18/tonkeeper-web.git
    } else {
        git remote add origin https://github.com/1Roma18/tonkeeper-web.git
    }
}

$secrets = git ls-files --others --exclude-standard 2>$null | Select-String -Pattern '\.env|secret|credential|\.pem|id_rsa' -CaseSensitive:$false
if ($secrets) {
    Write-Warning "Possible secret files detected (review before add):"
    $secrets
}

git add -A
$msg = @"
Rebrand UI to Qazaq Wallet while preserving Apache 2.0 attribution.

- User-facing Tonkeeper -> Qazaq Wallet in locales and HTML manifests
- About screen with KK/RU honest Tonkeeper open-source credit
- Root package name qazaq-wallet; kk/ru/en locales polish
- Add vercel.json for web deployment
"@

git commit -m $msg
if ($LASTEXITCODE -ne 0) {
    Write-Host "Nothing to commit or commit failed (exit $LASTEXITCODE)" -ForegroundColor Yellow
} else {
    Write-Host "Committed: $(git rev-parse --short HEAD)" -ForegroundColor Green
}

$branch = git branch --show-current
Write-Host "Pushing branch: $branch" -ForegroundColor Cyan
git push -u origin $branch

Write-Host "Done." -ForegroundColor Green
