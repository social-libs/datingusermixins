function createMixins (execlib) {
  'use strict';

  return {
    mixins: {
      user: require('./usercreator')(execlib)
    }
  };
}
module.exports = createMixins;
