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
          var copyConfigVisualFeatures = [];
          for (var i = 0; i < config["visual-features"].length; i++) {
            copyConfigVisualFeatures.push(config["visual-features"][i].toLowerCase());
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
        var copyConfigDetails = [];
        for (var i = 0; i < config["details"].length; i++) {
          copyConfigDetails.push(config["details"][i].toLowerCase());
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
        for (var i = 0; i < config["models"].length; i++) {
          if (config["models"][i].toLowerCase() === _opt.model) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91dGlsaXR5LmpzIl0sIm5hbWVzIjpbImxvYWRKc29uRmlsZSIsInJlcXVpcmUiLCJwYXRoIiwiZXhwb3J0cyIsImNoZWNrQ29udGVudFR5cGUiLCJfb3B0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJqb2luIiwiX19kaXJuYW1lIiwidGhlbiIsImNvbmZpZyIsImluY2x1ZGVzIiwiZXJyIiwiRXJyb3IiLCJjYXRjaCIsImNoZWNrVmlzdWFsRmVhdHVyZSIsInZpc3VhbEZlYXR1cmVzIiwic3BsaXQiLCJjb3B5Q29uZmlnVmlzdWFsRmVhdHVyZXMiLCJpIiwibGVuZ3RoIiwicHVzaCIsInRvTG93ZXJDYXNlIiwibWFwIiwiZmVhdHVyZSIsImNoZWNrRGV0YWlscyIsImRldGFpbHMiLCJjb3B5Q29uZmlnRGV0YWlscyIsImRldGFpbCIsImNoZWNrTW9kZWxzIiwibW9kZWwiLCJjaGVja0ZsYWciLCJjaGVja0xhbmd1YWdlIiwibGFuZ3VhZ2UiLCJsYW5ndWFnZXMiLCJjaGVja1JlcXVlc3RPcmlnaW4iLCJjaGVja1RodW1iV2lkdGhIZWlnaHQiLCJ3aWR0aCIsImhlaWdodCIsImlzTmFOIiwiTnVtYmVyIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0EsSUFBTUEsZUFBZUMsUUFBUSxnQkFBUixDQUFyQjtBQUNBLElBQU1DLE9BQU9ELFFBQVEsTUFBUixDQUFiOztBQUVBO0FBQ0FFLFFBQVFDLGdCQUFSLEdBQTJCLFVBQUNDLElBQUQsRUFBVTtBQUNuQyxTQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdENSLGlCQUFhRSxLQUFLTyxJQUFMLENBQVVDLFNBQVYsRUFBcUIsYUFBckIsQ0FBYixFQUFrREMsSUFBbEQsQ0FBdUQsa0JBQVU7QUFDL0QsVUFBSSxPQUFPTixLQUFLLGNBQUwsQ0FBUCxJQUErQixRQUEvQixJQUEyQyxDQUFDTyxPQUFPLGNBQVAsRUFBdUJDLFFBQXZCLENBQWdDUixL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LGFBQU9QLFFBQVEsMkJBQVIsQ0FBUDtBQUNELEtBVkQ7QUFXRCxHQVpNLENBQVA7QUFhRCxDQWREOztBQWdCQTtBQUNBSixRQUFRbUMscUJBQVIsR0FBZ0MsVUFBQ2pDLElBQUQsRUFBVTtBQUN4QyxTQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFTQyxPQUFULEVBQWtCQyxNQUFsQixFQUEwQjtBQUMzQztBQUNBLFFBQUksQ0FBQ0gsS0FBS2tDLEtBQU4sSUFBZSxDQUFDbEMsS0FBS21DLE1BQXpCLEVBQWlDO0FBQy9CLFVBQU0xQixNQUFNLElBQUlDLEtBQUosQ0FBVSwwQ0FBVixDQUFaO0FBQ0FQLGFBQU9NLEdBQVA7QUFDRDtBQUNELFFBQUksT0FBT1QsS0FBS2tDLEtBQVosSUFBcUIsUUFBckIsSUFBaUMsT0FBT2xDLEtBQUttQyxNQUFaLElBQXNCLFFBQXZELElBQW1FQyxNQUFNQyxPQUFPckMsS0FBS2tDLEtBQVosQ0FBTixDQUFuRSxJQUFnR0UsTUFBTUMsT0FBT3JDLEtBQUttQyxNQUFaLENBQU4sQ0FBcEcsRUFBZ0k7QUFDOUgsVUFBTTFCLFFBQU0sSUFBSUMsS0FBSixDQUFVLGtEQUFWLENBQVo7QUFDQVAsYUFBT00sS0FBUDtBQUNEO0FBQ0QsUUFBSTRCLE9BQU9yQyxLQUFLa0MsS0FBWixLQUFzQixDQUF0QixJQUEyQkcsT0FBT3JDLEtBQUttQyxNQUFaLEtBQXVCLENBQXRELEVBQXlEO0FBQ3ZELFVBQU0xQixRQUFNLElBQUlDLEtBQUosQ0FBVSxtREFBVixDQUFaO0FBQ0FQLGFBQU9NLEtBQVA7QUFDRDtBQUNELFdBQU9QLFFBQVEsdUNBQVIsQ0FBUDtBQUNELEdBZk0sQ0FBUDtBQWdCRCxDQWpCRCIsImZpbGUiOiJ1dGlsaXR5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tbW9uIHV0aWxpdHkgZnVuY3Rpb25zLCBzdWNoIGxpa2UgY29udGVudC10eXBlIGNoZWNraW5nLCBldGMuXG5jb25zdCBsb2FkSnNvbkZpbGUgPSByZXF1aXJlKCdsb2FkLWpzb24tZmlsZScpO1xuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcblxuLy8gY2hlY2sgY29udGVudC10eXBlXG5leHBvcnRzLmNoZWNrQ29udGVudFR5cGUgPSAoX29wdCkgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGxvYWRKc29uRmlsZShwYXRoLmpvaW4oX19kaXJuYW1lLCAnY29uZmlnLmpzb24nKSkudGhlbihjb25maWcgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBfb3B0W1wiY29udGVudC10eXBlXCJdICE9IFwic3RyaW5nXCIgfHwgIWNvbmZpZ1tcImNvbnRlbnQtdHlwZVwiXS5pbmNsdWRlcyhfb3B0W1wiY29udGVudC10eXBlXCJdKSkge1xuXG4gICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcihcIlVuc3VwcG9ydCBjb250ZW50IHR5cGUsIHRoZSBjb250ZW50IHR5cGUgbXVzdCBiZSBlaXRoZXIgYXBwbGljYXRpb24vanNvbiwgYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtIG9yIG11bHRpcGFydC9mb3JtLWRhdGFcIilcblxuICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZShcIlBhc3QgY29udGVudCB0eXBlIGNoZWNrXCIpXG4gICAgICB9XG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgIH0pXG4gIH0pXG59XG5cbi8vIGNoZWNrIHZpc3VhbC1mZWF0dXJlc1xuZXhwb3J0cy5jaGVja1Zpc3VhbEZlYXR1cmUgPSAoX29wdCkgPT4ge1xuXG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICBsb2FkSnNvbkZpbGUocGF0aC5qb2luKF9fZGlybmFtZSwgJ2NvbmZpZy5qc29uJykpLnRoZW4oY29uZmlnID0+IHtcbiAgICAgIGlmIChfb3B0W1widmlzdWFsLWZlYXR1cmVzXCJdKSB7XG4gICAgICAgIGlmICh0eXBlb2YgX29wdFtcInZpc3VhbC1mZWF0dXJlc1wiXSAhPSBcInN0cmluZ1wiKSB7XG5cbiAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoXCJJbnZhbGlkIHZpc3VhbC1mZWF0dXJlcywgbXVzdCBiZSBhIHN0cmluZ1wiKVxuXG4gICAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICBjb25zdCB2aXN1YWxGZWF0dXJlcyA9IF9vcHRbXCJ2aXN1YWwtZmVhdHVyZXNcIl0uc3BsaXQoL1tcXHMsXSsvKTtcblxuICAgICAgICAgIC8vIGNyb3NzIGNoZWtpbmdcbiAgICAgICAgICBsZXQgY29weUNvbmZpZ1Zpc3VhbEZlYXR1cmVzID0gW107XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb25maWdbXCJ2aXN1YWwtZmVhdHVyZXNcIl0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvcHlDb25maWdWaXN1YWxGZWF0dXJlcy5wdXNoKGNvbmZpZ1tcInZpc3VhbC1mZWF0dXJlc1wiXVtpXS50b0xvd2VyQ2FzZSgpKVxuICAgICAgICAgIH1cbiAgICAgICAgICB2aXN1YWxGZWF0dXJlcy5tYXAoKGZlYXR1cmUpID0+IHtcbiAgICAgICAgICAgIGlmICghY29weUNvbmZpZ1Zpc3VhbEZlYXR1cmVzLmluY2x1ZGVzKGZlYXR1cmUudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKFwiT25lIG9yIG1vcmUgc3BlY2lmaWVkIHZpc3VhbC1mZWF0dXJlIHR5cGUgaXMgbm90IHZhbGlkXCIpO1xuICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcblxuICAgICAgICAgIHJldHVybiByZXNvbHZlKFwiUGFzdCB2aXN1YWwtZmVhdHVyZXMgY2hlY2tcIilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59XG5cbi8vIGNoZWNrIGRldGFpbHNcbmV4cG9ydHMuY2hlY2tEZXRhaWxzID0gKF9vcHQpID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGxvYWRKc29uRmlsZShwYXRoLmpvaW4oX19kaXJuYW1lLCAnY29uZmlnLmpzb24nKSkudGhlbihjb25maWcgPT4ge1xuICAgICAgaWYgKF9vcHQuZGV0YWlscykge1xuICAgICAgICBjb25zdCBkZXRhaWxzID0gX29wdC5kZXRhaWxzLnNwbGl0KC9bXFxzLF0rLyk7XG4gICAgICAgIC8vIGNyb3NzIGNoZWtpbmdcbiAgICAgICAgbGV0IGNvcHlDb25maWdEZXRhaWxzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29uZmlnW1wiZGV0YWlsc1wiXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvcHlDb25maWdEZXRhaWxzLnB1c2goY29uZmlnW1wiZGV0YWlsc1wiXVtpXS50b0xvd2VyQ2FzZSgpKVxuICAgICAgICB9XG4gICAgICAgIGRldGFpbHMubWFwKChkZXRhaWwpID0+IHtcbiAgICAgICAgICBkZXRhaWwgPSBkZXRhaWwudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICBpZiAoIWNvcHlDb25maWdEZXRhaWxzLmluY2x1ZGVzKGRldGFpbC50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKFwiT25lIG9mIG1vcmUgc3BlY2lmaWVkIGRldGFpbCBpcyBub3QgdmFsaWRcIik7XG4gICAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gcmVzb2x2ZSgnUGFzdCBkZXRhaWxzIGNoZWNraW5nJylcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXNvbHZlKFwiTm8gc3BlY2lmaWVkIGRldGFpbCBkZWNsZWFyZWRcIilcbiAgICB9KVxuICB9KVxufVxuXG4vLyBjaGVjayBtb2RlbHNcbmV4cG9ydHMuY2hlY2tNb2RlbHMgPSAoX29wdCkgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgbG9hZEpzb25GaWxlKHBhdGguam9pbihfX2Rpcm5hbWUsICdjb25maWcuanNvbicpKS50aGVuKGNvbmZpZyA9PiB7XG4gICAgICBpZiAoIV9vcHQubW9kZWwpIHtcbiAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKFwiU3BlY2lmaWVkIG1vZGVsIGlzIG1pc3NpbmdcIik7XG4gICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgIH1cblxuICAgICAgaWYgKF9vcHQubW9kZWwpIHtcbiAgICAgICAgbGV0IGNoZWNrRmxhZyA9IGZhbHNlO1xuICAgICAgICBfb3B0Lm1vZGVsID0gX29wdC5tb2RlbC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbmZpZ1tcIm1vZGVsc1wiXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChjb25maWdbXCJtb2RlbHNcIl1baV0udG9Mb3dlckNhc2UoKSA9PT0gX29wdC5tb2RlbCkge1xuICAgICAgICAgICAgY2hlY2tGbGFnID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoZWNrRmxhZykge1xuICAgICAgICAgIHJldHVybiByZXNvbHZlKFwiUGFzdCBkZXRhaWxzIGNoZWNrXCIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKFwiU3BlY2lmaWVkIG1vZGVsIGlzIG5vdCB2YWxpZFwiKTtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc29sdmUoXCJObyBzcGVjaWZpYyBtb2RlbCBkZWNsZWFyZWRcIilcbiAgICB9KVxuICB9KVxufVxuXG4vLyBjaGVjayBsYW5ndWFnZVxuZXhwb3J0cy5jaGVja0xhbmd1YWdlID0gKF9vcHQpID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGxvYWRKc29uRmlsZShwYXRoLmpvaW4oX19kaXJuYW1lLCAnY29uZmlnLmpzb24nKSkudGhlbihjb25maWcgPT4ge1xuICAgICAgaWYgKF9vcHQubGFuZ3VhZ2UgJiYgIWNvbmZpZy5sYW5ndWFnZXMuaW5jbHVkZXMoX29wdC5sYW5ndWFnZSkpIHtcbiAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKFwiU3BlY2lmaWVkIGxhbmd1YWdlIGlzIG5vdCB2YWxpZFwiKTtcbiAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc29sdmUoXCJQYXN0IGxhbmd1YWdlIGNoZWNrXCIpXG4gICAgfSlcbiAgfSlcbn1cblxuLy8gY2hlY2sgcmVxdWVzdCBvcmlnaW5cbmV4cG9ydHMuY2hlY2tSZXF1ZXN0T3JpZ2luID0gKF9vcHQpID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGxvYWRKc29uRmlsZShwYXRoLmpvaW4oX19kaXJuYW1lLCAnY29uZmlnLmpzb24nKSkudGhlbihjb25maWcgPT4ge1xuICAgICAgaWYgKCFfb3B0W1wicmVxdWVzdC1vcmlnaW5cIl0pIHtcbiAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKFwiTWlzc2luZyByZXF1ZXN0IG9yaWdpblwiKTtcbiAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgfVxuICAgICAgaWYgKF9vcHRbXCJyZXF1ZXN0LW9yaWdpblwiXSAmJiAhY29uZmlnW1wib3JpZ2luXCJdLmluY2x1ZGVzKF9vcHRbXCJyZXF1ZXN0LW9yaWdpblwiXSkpIHtcbiAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKFwiU3BlY2lmaWVkIHJlcXVlc3Qgb3JpZ2luIGlzIG5vdCB2YWxpZFwiKTtcbiAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc29sdmUoXCJQYXN0IHJlcXVlc3Qgb3JpZ2luIGNoZWNrXCIpXG4gICAgfSlcbiAgfSlcbn1cblxuLy8gY2hlY2sgdGh1bWJuYWlsIGNvcnAgd2lkdGggYW5kIGhlaWdodFxuZXhwb3J0cy5jaGVja1RodW1iV2lkdGhIZWlnaHQgPSAoX29wdCkgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgLy8gcGFyYW1zIGNoZWNraW5nXG4gICAgaWYgKCFfb3B0LndpZHRoIHx8ICFfb3B0LmhlaWdodCkge1xuICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKFwiTWlzc2luZyBzcGVjaWZpY2F0aW9uIG9mIHdpZHRoIG9yIGhlaWdodFwiKVxuICAgICAgcmVqZWN0KGVycik7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgX29wdC53aWR0aCAhPSAnc3RyaW5nJyB8fCB0eXBlb2YgX29wdC5oZWlnaHQgIT0gJ3N0cmluZycgfHwgaXNOYU4oTnVtYmVyKF9vcHQud2lkdGgpKSB8fCBpc05hTihOdW1iZXIoX29wdC5oZWlnaHQpKSkge1xuICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKFwiSW52YWxpZCB0eXBlIG9mIHNwZWNpZmljYXRpb24gb2Ygd2lkdGggb3IgaGVpZ2h0XCIpXG4gICAgICByZWplY3QoZXJyKTtcbiAgICB9XG4gICAgaWYgKE51bWJlcihfb3B0LndpZHRoKSA8PSAwIHx8IE51bWJlcihfb3B0LmhlaWdodCkgPD0gMCkge1xuICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBvZiBzcGVjaWZpY2F0aW9uIG9mIHdpZHRoIG9yIGhlaWdodFwiKVxuICAgICAgcmVqZWN0KGVycik7XG4gICAgfVxuICAgIHJldHVybiByZXNvbHZlKCdQYXN0IHRodW1ibmFpbCB3aWR0aCBhbmQgaGVpZ2h0IGNoZWNrJylcbiAgfSlcbn1cbiJdfQ==