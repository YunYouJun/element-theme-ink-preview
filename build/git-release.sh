info=$1
git add -A
git commit -m "$info"
git push
build/git-theme.sh "$info"
