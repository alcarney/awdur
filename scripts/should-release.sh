#!/bin/bash
# Script to check if we should trigger a release or not.
# If we are releasing, it also sets some configuration used
# later on in the build.

RELEASE_KIND=
SNAP_CHANNEL=
DEPLOY_URL=

echo "GITHUB_REF: ${GITHUB_REF}"

if [ "${GITHUB_REF}" = 'refs/heads/release' ]; then
    RELEASE_KIND='release'
    SNAP_CHANNEL='stable'
    DEPLOY_URL='stable'
    echo "::set-output name=release::true"
fi

if [ "${GITHUB_REF}" = 'refs/heads/develop' ]; then

    SNAP_CHANNEL='candidate'
    DEPLOY_URL='latest'

    message=$(git log HEAD --pretty=format:'%s' | head -n 1 | tr '[:upper:]' '[:lower:]')
    echo "Commit message: ${message}"

    case $message in
        major*)
            RELEASE_KIND="major";;
        minor*)
            RELEASE_KIND="minor";;
        patch*)
            RELEASE_KIND="patch";;
        *)
            RELEASE_KIND="beta";;
    esac

    echo "::set-output name=develop::true"
fi

if [ -z "${RELEASE_KIND}" ]; then
    echo "No need to release."
    exit 0
fi

echo "Release type: ${RELEASE_KIND}"

GIT_BRANCH=$(echo ${GITHUB_REF} | sed 's.refs/head/..')

echo "::set-output name=yes::true"
echo "::set-env name=RELEASE_KIND::${RELEASE_KIND}"
echo "::set-env name=GIT_BRANCH::${GIT_BRANCH}"
echo "::set-output name=deploy_url::${DEPLOY_URL}"
echo "::set-output name=snap_channel::${SNAP_CHANNEL}"