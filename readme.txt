git-push.bat
--->just run this file, update will be automatically done.

link: https://sayed-shifat-ahmed.github.io/portfolio/index.html


or do it manually:
githow to reupload code in github from cmd??????????????????
To reupload your code to GitHub using CMD (Command Prompt) on Windows, follow these steps. This works when you have already created a GitHub repository and want to upload your latest code.

Step 1: Open CMD in your project folder
Navigate to your project folder, then click the address bar in File Explorer, type cmd, and press Enter.

Or use CMD directly:

cd /d "D:\Your\Project\Folder"
Replace the path with your actual project folder.

Step 2: Check your Git status
git status
This shows which files have changed.

Step 3: Add your code
git add .
This stages all changes in your project folder, except files excluded by .gitignore.

Step 4: Commit the changes
git commit -m "Update project code"
If Git says there is nothing to commit, your changes may already be committed.

Step 5: Upload to GitHub
git push origin main
If your branch is named master instead of main, use:

git push origin master
If this is your first upload from this folder
Check whether Git is already connected to a repository:

git remote -v
If no remote is listed, connect your GitHub repository:

git remote add origin https://github.com/sayed-shifat-ahmed/portfolio.git
git branch -M main
git push -u origin main
Replace the URL with your actual GitHub repository URL.

Important: If you want to reupload an existing project, do not run git init or add a new remote unnecessarily. First check git status and git remote -v.





! [rejected]        main -> main (fetch first)
error: failed to push some refs to 'https://github.com/Sayed-Shifat-Ahmed/portfolio.git'
hint: Updates were rejected because the remote contains work that you do not
hint: have locally. This is usually caused by another repository pushing to
hint: the same ref. If you want to integrate the remote changes, use
hint: 'git pull' before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
This error means your GitHub repository (portfolio) contains some commits that are missing from your local computer. You need to sync the changes before pushing your code.

Solution (run these commands in CMD)
Make sure CMD is open inside your portfolio project folder.

Step 1: Pull the GitHub changes

git pull origin main --allow-unrelated-histories
If Git opens a text editor for a merge message, save and close it. If there are merge conflicts, they must be resolved before continuing.

Step 2: Upload your code again

git add .
git commit -m "Update portfolio code"
git push origin main
If Git says nothing to commit, skip the commit command and run git push origin main.

If you get a merge conflict
Git will identify the files that conflict. Resolve those conflicts first, then run:

git add .
git commit -m "Resolve merge conflicts"
git push origin main
Important: Avoid git push --force for now, because it can overwrite commits already on GitHub.

If your intention is to completely replace the GitHub code with your local code, tell me before proceeding, because the commands are different.