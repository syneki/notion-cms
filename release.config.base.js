module.exports = {
  extends: 'semantic-release-npm-github-publish',
  branches: [{ name: 'dev', channel: 'pre/rc', prerelease: 'rc' }],
};
