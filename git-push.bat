@echo off
cd /d "%~dp0"

git status
git add .
git commit -m "Update project code"
git push origin main
git remote -v
git branch -M main
git push -u origin main

pause