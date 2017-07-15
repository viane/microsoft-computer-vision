'use strict';

// common utility functions, such like content-type checking, etc.
var loadJsonFile = require('load-json-file');
var path = require('path');

// check content-type
exports.checkContentType = function (_opt) {
  return new Promise(function (resolve, reject) {
    loadJsonFile(path.join(__dirname, 'config.json')).then(function (config) {
      if (typeof _opt["content-type"] != "string" || !config["content-type"].includes(_opt["content-type"])) {

        var err = new Error("Unsupport content type, the content type must be either application/json, application/octet-stream or multipart/form-data");

        return reject(err);
      } else {
        return resolve("Past content type check");
      }
    }).catch(function (err) {
      return reject(err);
    });
  });
};

// check visual-features
exports.checkVisualFeature = function (_opt) {

  return new Promise(function (resolve, reject) {
    loadJsonFile(path.join(__dirname, 'config.json')).then(function (config) {
      if (_opt["visual-features"]) {
        if (typeof _opt["visual-features"] != "string") {

          var err = new Error("Invalid visual-features, must be a string");

          return reject(err);
        } else {

          var visualFeatures = _opt["visual-features"].split(/[\s,]+/);

          // cross cheking
          var ConfigVisualFeatures = config["visual-features"];
          var copyConfigVisualFeatures = [];
          for (var i = 0; i < ConfigVisualFeatures.length; i++) {
            copyConfigVisualFeatures.push(ConfigVisualFeatures[i].toLowerCase());
          }
          visualFeatures.map(function (feature) {
            if (!copyConfigVisualFeatures.includes(feature.toLowerCase())) {
              var _err = new Error("One or more specified visual-feature type is not valid");
              return reject(_err);
            }
          });

          return resolve("Past visual-features check");
        }
      }
    });
  });
};

// check details
exports.checkDetails = function (_opt) {
  return new Promise(function (resolve, reject) {
    loadJsonFile(path.join(__dirname, 'config.json')).then(function (config) {
      if (_opt.details) {
        var details = _opt.details.split(/[\s,]+/);
        // cross cheking
        var ConfigDetails = config["details"];
        var copyConfigDetails = [];
        for (var i = 0; i < ConfigDetails.length; i++) {
          copyConfigDetails.push(ConfigDetails[i].toLowerCase());
        }
        details.map(function (detail) {
          detail = detail.toLowerCase();
          if (!copyConfigDetails.includes(detail.toLowerCase())) {
            var err = new Error("One of more specified detail is not valid");
            return reject(err);
          }
        });
        return resolve('Past details checking');
      }
      return resolve("No specified detail decleared");
    });
  });
};

// check models
exports.checkModels = function (_opt) {
  return new Promise(function (resolve, reject) {
    loadJsonFile(path.join(__dirname, 'config.json')).then(function (config) {
      if (!_opt.model) {
        var err = new Error("Specified model is missing");
        return reject(err);
      }

      if (_opt.model) {
        var checkFlag = false;
        _opt.model = _opt.model.toLowerCase();
        var configModels = config["models"];
        for (var i = 0; i < configModels.length; i++) {
          if (configModels[i].toLowerCase() === _opt.model) {
            checkFlag = true;
          }
        }
        if (checkFlag) {
          return resolve("Past details check");
        } else {
          var _err2 = new Error("Specified model is not valid");
          return reject(_err2);
        }
      }

      return resolve("No specific model decleared");
    });
  });
};

// check language
exports.checkLanguage = function (_opt) {
  return new Promise(function (resolve, reject) {
    loadJsonFile(path.join(__dirname, 'config.json')).then(function (config) {
      if (_opt.language && !config.languages.includes(_opt.language)) {
        var err = new Error("Specified language is not valid");
        return reject(err);
      }
      return resolve("Past language check");
    });
  });
};

// check request origin
exports.checkRequestOrigin = function (_opt) {
  return new Promise(function (resolve, reject) {
    loadJsonFile(path.join(__dirname, 'config.json')).then(function (config) {
      if (!_opt["request-origin"]) {
        var err = new Error("Missing request origin");
        return reject(err);
      }
      if (_opt["request-origin"] && !config["origin"].includes(_opt["request-origin"])) {
        var _err3 = new Error("Specified request origin is not valid");
        return reject(_err3);
      }
      return resolve("Past request origin check");
    });
  });
};

// check thumbnail corp width and height
exports.checkThumbWidthHeight = function (_opt) {
  return new Promise(function (resolve, reject) {
    // params checking
    if (!_opt.width || !_opt.height) {
      var err = new Error("Missing specification of width or height");
      reject(err);
    }
    if (typeof _opt.width != 'string' || typeof _opt.height != 'string' || isNaN(Number(_opt.width)) || isNaN(Number(_opt.height))) {
      var _err4 = new Error("Invalid type of specification of width or height");
      reject(_err4);
    }
    if (Number(_opt.width) <= 0 || Number(_opt.height) <= 0) {
      var _err5 = new Error("Invalid value of specification of width or height");
      reject(_err5);
    }
    return resolve('Past thumbnail width and height check');
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91dGlsaXR5LmpzIl0sIm5hbWVzIjpbImxvYWRKc29uRmlsZSIsInJlcXVpcmUiLCJwYXRoIiwiZXhwb3J0cyIsImNoZWNrQ29udGVudFR5cGUiLCJfb3B0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJqb2luIiwiX19kaXJuYW1lIiwidGhlbiIsImNvbmZpZyIsImluY2x1ZGVzIiwiZXJyIiwiRXJyb3IiLCJjYXRjaCIsImNoZWNrVmlzdWFsRmVhdHVyZSIsInZpc3VhbEZlYXR1cmVzIiwic3BsaXQiLCJDb25maWdWaXN1YWxGZWF0dXJlcyIsImNvcHlDb25maWdWaXN1YWxGZWF0dXJlcyIsImkiLCJsZW5ndGgiLCJwdXNoIiwidG9Mb3dlckNhc2UiLCJtYXAiLCJmZWF0dXJlIiwiY2hlY2tEZXRhaWxzIiwiZGV0YWlscyIsIkNvbmZpZ0RldGFpbHMiLCJjb3B5Q29uZmlnRGV0YWlscyIsImRldGFpbCIsImNoZWNrTW9kZWxzIiwibW9kZWwiLCJjaGVja0ZsYWciLCJjb25maWdNb2RlbHMiLCJjaGVja0xhbmd1YWdlIiwibGFuZ3VhZ2UiLCJsYW5ndWFnZXMiLCJjaGVja1JlcXVlc3RPcmlnaW4iLCJjaGVja1RodW1iV2lkdGhIZWlnaHQiLCJ3aWR0aCIsImhlaWdodCIsImlzTmFOIiwiTnVtYmVyIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0EsSUFBTUEsZUFBZUMsUUFBUSxnQkFBUixDQUFyQjtBQUNBLElBQU1DLE9BQU9ELFFBQVEsTUFBUixDQUFiOztBQUVBO0FBQ0FFLFFBQVFDLGdCQUFSLEdBQTJCLFVBQUNDLElBQUQsRUFBVTtBQUNuQyxTQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdENSLGlCQUFhRSxLQUFLTyxJQUFMLENBQVVDLFNBQVYsRUFBcUIsYUFBckIsQ0FBYixFQUFrREMsSUFBbEQsQ0FBdUQsa0JBQVU7QUFDL0QsVUFBSSxPQUFPTixLQUFLLGNBQUwsQ0FBUCxJ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bnMsIHN1Y2ggbGlrZSBjb250ZW50LXR5cGUgY2hlY2tpbmcsIGV0Yy5cbmNvbnN0IGxvYWRKc29uRmlsZSA9IHJlcXVpcmUoJ2xvYWQtanNvbi1maWxlJyk7XG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuXG4vLyBjaGVjayBjb250ZW50LXR5cGVcbmV4cG9ydHMuY2hlY2tDb250ZW50VHlwZSA9IChfb3B0KSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgbG9hZEpzb25GaWxlKHBhdGguam9pbihfX2Rpcm5hbWUsICdjb25maWcuanNvbicpKS50aGVuKGNvbmZpZyA9PiB7XG4gICAgICBpZiAodHlwZW9mIF9vcHRbXCJjb250ZW50LXR5cGVcIl0gIT0gXCJzdHJpbmdcIiB8fCAhY29uZmlnW1wiY29udGVudC10eXBlXCJdLmluY2x1ZGVzKF9vcHRbXCJjb250ZW50LXR5cGVcIl0pKSB7XG5cbiAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKFwiVW5zdXBwb3J0IGNvbnRlbnQgdHlwZSwgdGhlIGNvbnRlbnQgdHlwZSBtdXN0IGJlIGVpdGhlciBhcHBsaWNhdGlvbi9qc29uLCBhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0gb3IgbXVsdGlwYXJ0L2Zvcm0tZGF0YVwiKVxuXG4gICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlKFwiUGFzdCBjb250ZW50IHR5cGUgY2hlY2tcIilcbiAgICAgIH1cbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgfSlcbiAgfSlcbn1cblxuLy8gY2hlY2sgdmlzdWFsLWZlYXR1cmVzXG5leHBvcnRzLmNoZWNrVmlzdWFsRmVhdHVyZSA9IChfb3B0KSA9PiB7XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGxvYWRKc29uRmlsZShwYXRoLmpvaW4oX19kaXJuYW1lLCAnY29uZmlnLmpzb24nKSkudGhlbihjb25maWcgPT4ge1xuICAgICAgaWYgKF9vcHRbXCJ2aXN1YWwtZmVhdHVyZXNcIl0pIHtcbiAgICAgICAgaWYgKHR5cGVvZiBfb3B0W1widmlzdWFsLWZlYXR1cmVzXCJdICE9IFwic3RyaW5nXCIpIHtcblxuICAgICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcihcIkludmFsaWQgdmlzdWFsLWZlYXR1cmVzLCBtdXN0IGJlIGEgc3RyaW5nXCIpXG5cbiAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgIGNvbnN0IHZpc3VhbEZlYXR1cmVzID0gX29wdFtcInZpc3VhbC1mZWF0dXJlc1wiXS5zcGxpdCgvW1xccyxdKy8pO1xuXG4gICAgICAgICAgLy8gY3Jvc3MgY2hla2luZ1xuICAgICAgICAgIGNvbnN0IENvbmZpZ1Zpc3VhbEZlYXR1cmVzID0gY29uZmlnW1widmlzdWFsLWZlYXR1cmVzXCJdO1xuICAgICAgICAgIGxldCBjb3B5Q29uZmlnVmlzdWFsRmVhdHVyZXMgPSBbXTtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IENvbmZpZ1Zpc3VhbEZlYXR1cmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb3B5Q29uZmlnVmlzdWFsRmVhdHVyZXMucHVzaChDb25maWdWaXN1YWxGZWF0dXJlc1tpXS50b0xvd2VyQ2FzZSgpKVxuICAgICAgICAgIH1cbiAgICAgICAgICB2aXN1YWxGZWF0dXJlcy5tYXAoKGZlYXR1cmUpID0+IHtcbiAgICAgICAgICAgIGlmICghY29weUNvbmZpZ1Zpc3VhbEZlYXR1cmVzLmluY2x1ZGVzKGZlYXR1cmUudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKFwiT25lIG9yIG1vcmUgc3BlY2lmaWVkIHZpc3VhbC1mZWF0dXJlIHR5cGUgaXMgbm90IHZhbGlkXCIpO1xuICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcblxuICAgICAgICAgIHJldHVybiByZXNvbHZlKFwiUGFzdCB2aXN1YWwtZmVhdHVyZXMgY2hlY2tcIilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59XG5cbi8vIGNoZWNrIGRldGFpbHNcbmV4cG9ydHMuY2hlY2tEZXRhaWxzID0gKF9vcHQpID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGxvYWRKc29uRmlsZShwYXRoLmpvaW4oX19kaXJuYW1lLCAnY29uZmlnLmpzb24nKSkudGhlbihjb25maWcgPT4ge1xuICAgICAgaWYgKF9vcHQuZGV0YWlscykge1xuICAgICAgICBjb25zdCBkZXRhaWxzID0gX29wdC5kZXRhaWxzLnNwbGl0KC9bXFxzLF0rLyk7XG4gICAgICAgIC8vIGNyb3NzIGNoZWtpbmdcbiAgICAgICAgY29uc3QgQ29uZmlnRGV0YWlscyA9IGNvbmZpZ1tcImRldGFpbHNcIl07XG4gICAgICAgIGxldCBjb3B5Q29uZmlnRGV0YWlscyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IENvbmZpZ0RldGFpbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb3B5Q29uZmlnRGV0YWlscy5wdXNoKENvbmZpZ0RldGFpbHNbaV0udG9Mb3dlckNhc2UoKSlcbiAgICAgICAgfVxuICAgICAgICBkZXRhaWxzLm1hcCgoZGV0YWlsKSA9PiB7XG4gICAgICAgICAgZGV0YWlsID0gZGV0YWlsLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgaWYgKCFjb3B5Q29uZmlnRGV0YWlscy5pbmNsdWRlcyhkZXRhaWwudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcihcIk9uZSBvZiBtb3JlIHNwZWNpZmllZCBkZXRhaWwgaXMgbm90IHZhbGlkXCIpO1xuICAgICAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHJlc29sdmUoJ1Bhc3QgZGV0YWlscyBjaGVja2luZycpXG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzb2x2ZShcIk5vIHNwZWNpZmllZCBkZXRhaWwgZGVjbGVhcmVkXCIpXG4gICAgfSlcbiAgfSlcbn1cblxuLy8gY2hlY2sgbW9kZWxzXG5leHBvcnRzLmNoZWNrTW9kZWxzID0gKF9vcHQpID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGxvYWRKc29uRmlsZShwYXRoLmpvaW4oX19kaXJuYW1lLCAnY29uZmlnLmpzb24nKSkudGhlbihjb25maWcgPT4ge1xuICAgICAgaWYgKCFfb3B0Lm1vZGVsKSB7XG4gICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcihcIlNwZWNpZmllZCBtb2RlbCBpcyBtaXNzaW5nXCIpO1xuICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICB9XG5cbiAgICAgIGlmIChfb3B0Lm1vZGVsKSB7XG4gICAgICAgIGxldCBjaGVja0ZsYWcgPSBmYWxzZTtcbiAgICAgICAgX29wdC5tb2RlbCA9IF9vcHQubW9kZWwudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgY29uZmlnTW9kZWxzID0gY29uZmlnW1wibW9kZWxzXCJdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbmZpZ01vZGVscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChjb25maWdNb2RlbHNbaV0udG9Mb3dlckNhc2UoKSA9PT0gX29wdC5tb2RlbCkge1xuICAgICAgICAgICAgY2hlY2tGbGFnID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoZWNrRmxhZykge1xuICAgICAgICAgIHJldHVybiByZXNvbHZlKFwiUGFzdCBkZXRhaWxzIGNoZWNrXCIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKFwiU3BlY2lmaWVkIG1vZGVsIGlzIG5vdCB2YWxpZFwiKTtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc29sdmUoXCJObyBzcGVjaWZpYyBtb2RlbCBkZWNsZWFyZWRcIilcbiAgICB9KVxuICB9KVxufVxuXG4vLyBjaGVjayBsYW5ndWFnZVxuZXhwb3J0cy5jaGVja0xhbmd1YWdlID0gKF9vcHQpID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGxvYWRKc29uRmlsZShwYXRoLmpvaW4oX19kaXJuYW1lLCAnY29uZmlnLmpzb24nKSkudGhlbihjb25maWcgPT4ge1xuICAgICAgaWYgKF9vcHQubGFuZ3VhZ2UgJiYgIWNvbmZpZy5sYW5ndWFnZXMuaW5jbHVkZXMoX29wdC5sYW5ndWFnZSkpIHtcbiAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKFwiU3BlY2lmaWVkIGxhbmd1YWdlIGlzIG5vdCB2YWxpZFwiKTtcbiAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc29sdmUoXCJQYXN0IGxhbmd1YWdlIGNoZWNrXCIpXG4gICAgfSlcbiAgfSlcbn1cblxuLy8gY2hlY2sgcmVxdWVzdCBvcmlnaW5cbmV4cG9ydHMuY2hlY2tSZXF1ZXN0T3JpZ2luID0gKF9vcHQpID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGxvYWRKc29uRmlsZShwYXRoLmpvaW4oX19kaXJuYW1lLCAnY29uZmlnLmpzb24nKSkudGhlbihjb25maWcgPT4ge1xuICAgICAgaWYgKCFfb3B0W1wicmVxdWVzdC1vcmlnaW5cIl0pIHtcbiAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKFwiTWlzc2luZyByZXF1ZXN0IG9yaWdpblwiKTtcbiAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgfVxuICAgICAgaWYgKF9vcHRbXCJyZXF1ZXN0LW9yaWdpblwiXSAmJiAhY29uZmlnW1wib3JpZ2luXCJdLmluY2x1ZGVzKF9vcHRbXCJyZXF1ZXN0LW9yaWdpblwiXSkpIHtcbiAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKFwiU3BlY2lmaWVkIHJlcXVlc3Qgb3JpZ2luIGlzIG5vdCB2YWxpZFwiKTtcbiAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc29sdmUoXCJQYXN0IHJlcXVlc3Qgb3JpZ2luIGNoZWNrXCIpXG4gICAgfSlcbiAgfSlcbn1cblxuLy8gY2hlY2sgdGh1bWJuYWlsIGNvcnAgd2lkdGggYW5kIGhlaWdodFxuZXhwb3J0cy5jaGVja1RodW1iV2lkdGhIZWlnaHQgPSAoX29wdCkgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgLy8gcGFyYW1zIGNoZWNraW5nXG4gICAgaWYgKCFfb3B0LndpZHRoIHx8ICFfb3B0LmhlaWdodCkge1xuICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKFwiTWlzc2luZyBzcGVjaWZpY2F0aW9uIG9mIHdpZHRoIG9yIGhlaWdodFwiKVxuICAgICAgcmVqZWN0KGVycik7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgX29wdC53aWR0aCAhPSAnc3RyaW5nJyB8fCB0eXBlb2YgX29wdC5oZWlnaHQgIT0gJ3N0cmluZycgfHwgaXNOYU4oTnVtYmVyKF9vcHQud2lkdGgpKSB8fCBpc05hTihOdW1iZXIoX29wdC5oZWlnaHQpKSkge1xuICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKFwiSW52YWxpZCB0eXBlIG9mIHNwZWNpZmljYXRpb24gb2Ygd2lkdGggb3IgaGVpZ2h0XCIpXG4gICAgICByZWplY3QoZXJyKTtcbiAgICB9XG4gICAgaWYgKE51bWJlcihfb3B0LndpZHRoKSA8PSAwIHx8IE51bWJlcihfb3B0LmhlaWdodCkgPD0gMCkge1xuICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBvZiBzcGVjaWZpY2F0aW9uIG9mIHdpZHRoIG9yIGhlaWdodFwiKVxuICAgICAgcmVqZWN0KGVycik7XG4gICAgfVxuICAgIHJldHVybiByZXNvbHZlKCdQYXN0IHRodW1ibmFpbCB3aWR0aCBhbmQgaGVpZ2h0IGNoZWNrJylcbiAgfSlcbn1cbiJdfQ==