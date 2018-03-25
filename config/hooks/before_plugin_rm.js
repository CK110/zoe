#!/usr/bin/env node
var fs = require('fs');
var path = require('path');

console.log('before_plugin_rm');

var ROOT_DIR = path.resolve(__dirname, '../../')

var FILES = {
  SRC: "config/hooks/config.tpl.xml",
  DEST: "config.xml"
};

var srcFileFull = path.join(ROOT_DIR, FILES.SRC);
var destFileFull = path.join(ROOT_DIR, FILES.DEST);

var templateData = fs.readFileSync(srcFileFull, 'utf8');
fs.writeFileSync(destFileFull, templateData);
