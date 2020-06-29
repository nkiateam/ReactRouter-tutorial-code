const del = require('del')

del.sync([
    'public/js/**',
    'public/fonts/**',
    'pubic/sw.js',
    'public/precache-manifest.*',
    'public/index.html',
    'public/color.less',
])
