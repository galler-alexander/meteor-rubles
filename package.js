Package.describe({
  name: 'ag2s:rubles',
  version: '0.1.5',
  // Brief, one-line summary of the package.
  summary: 'Write in russian words the amount in rubles',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/galler-alexander/meteor-rubles',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
	'rubles': "0.1.5"
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('rubles.js', 'server');
  api.export("rubles");
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ag2s:rubles');
  api.addFiles('rubles-tests.js', 'server');
});
