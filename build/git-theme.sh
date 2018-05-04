cd packages/element-theme-ink
info=$1
npm run build
git add -A
git commit -m "$info"
git push