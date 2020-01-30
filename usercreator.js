function createDatingUserMixin (execlib) {
  'use strict';

  var lib = execlib.lib,
    qlib = lib.qlib;

  function DatingUserServiceUserMixin () {
  }
  DatingUserServiceUserMixin.prototype.destroy = function () {
  };

  DatingUserServiceUserMixin.addMethods = function (klass_ignored) {
  };

  DatingUserServiceUserMixin.visiblefields = ['profile_gender', 'profile_orientation', 'profile_birthdaytimestamp', 'profile_bio'];

  return DatingUserServiceUserMixin;
}
module.exports = createDatingUserMixin;
