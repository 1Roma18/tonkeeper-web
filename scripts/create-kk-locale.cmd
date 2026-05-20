@echo off
cd /d "%~dp0.."
node scripts\create-kk-locale.mjs
if errorlevel 1 (
  echo Failed. Is Node.js installed?
  exit /b 1
)
echo.
echo Next:
echo   yarn workspace @tonkeeper/locales build
echo   cd packages\core ^& yarn exec tsc
echo   cd apps\web ^& yarn locales
pause
