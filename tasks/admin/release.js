var
  runSequence = require('run-sequence')
;

/* Release All */
module.exports = function(callback) {

  runSequence(
    //'build', // build Chromini
    'init distributions', // sync with current github version
    'create distributions', // update each repo with changes from master repo
    'init components', // sync with current github version
    'create components', // update each repo
    callback
  );

};