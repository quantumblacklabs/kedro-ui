#!/usr/bin/env sh
set -e
DIR=$(dirname $0)
cd $DIR/../../

echo "==== Run 'Update version' task ==="

FE__VERSION=$(./tools/bin/config.sh version)
NEW_VERSION="$1"
NEW_BRANCH="update-version-to-$NEW_VERSION"
MAIN_BRANCH="master"

if [[ -z "$NEW_VERSION" ]]; then
    echo "You should eneter new version..."
    exit 2;
fi

echo "Current version is "$FE__VERSION". Version will be updated to: "$NEW_VERSION

git checkout -b $NEW_BRANCH
npm run build
git add -A
git commit -m "create new version $NEW_VERSION" || :
npm version v$NEW_VERSION
git push origin $NEW_BRANCH
git checkout $MAIN_BRANCH
git push --follow-tags

echo "Done."
