module.exports = {
  '**/*.{ts,js,json,md,html,css,scss,ya?ml}': [
    'nx affected --target lint --uncommitted --fix true',
    'nx affected --target test --uncommitted',
    'nx format:write --uncommitted',
  ],
};
