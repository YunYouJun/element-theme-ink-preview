info=$1
git add -A
git commit -m "$info"
git push
bash/git-theme.sh "$info"
gh-pages -d dist