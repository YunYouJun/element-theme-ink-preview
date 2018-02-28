info=$1
git add -A
git commit -m "$info"
git push
npm run deploy
bash/git-theme.sh "$info"
