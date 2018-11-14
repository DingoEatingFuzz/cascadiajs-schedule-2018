/* eslint-env node */
'use strict';

module.exports = function(/* environment, appConfig */) {
  // See https://github.com/san650/ember-web-app#documentation for a list of
  // supported properties

  return {
    name: 'CascadiaJS',
    short_name: 'CascadiaJS',
    description: 'CascadiaJS 2018 Schedule',
    start_url: 'https://2018.cascadiajs.com/',
    display: 'standalone',
    background_color: '#149e51',
    theme_color: '#149e51',
    icons: [
      {
        src: '/icons/c192.png',
        sizes: '192x192',
      },
      {
        src: '/icons/c512.png',
        sizes: '512x512',
      },
      {
        src: '/icons/c280.png',
        sizes: '280x280',
        targets: ['apple'], // non-standard property
      },
      {
        src: '/icons/c192.png',
        sizes: '192x192',
        targets: ['favicon'],
      },
    ],
    apple: {
      statusBarStyle: 'black-translucent',
    },
    ms: {
      tileColor: '#149e51',
    },
  };
};
