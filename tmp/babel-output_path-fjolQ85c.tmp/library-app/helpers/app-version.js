define('library-app/helpers/app-version', ['exports', 'ember', 'library-app/config/environment'], function (exports, _ember, _libraryAppConfigEnvironment) {
  exports.appVersion = appVersion;
  var version = _libraryAppConfigEnvironment['default'].APP.version;

  function appVersion() {
    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});