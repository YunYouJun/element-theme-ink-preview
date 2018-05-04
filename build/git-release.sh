info=$1
git add -A
git commit -m "$info"
git push
npm run deploy
build/git-theme.sh "$info"
