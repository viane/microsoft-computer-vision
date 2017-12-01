'use strict';

// common utility functions, such like content-type checking, etc.
const loadJsonFile = require('load-json-file');
const path = require('path');

// check content-type
exports.checkContentType = _opt => {
  return new Promise((resolve, reject) => {
    loadJsonFile(path.join(__dirname, 'config.json')).then(config => {
      if (typeof _opt["content-type"] != "string" || !config["content-type"].includes(_opt["content-type"])) {

        const err = new Error("Unsupport content type, the content type must be either application/json, application/octet-stream or multipart/form-data");

        return reject(err);
      } else {
        return resolve("Past content type check");
      }
    }).catch(err => {
      return reject(err);
    });
  });
};

// check visual-features
exports.checkVisualFeature = _opt => {

  return new Promise(function (resolve, reject) {
    loadJsonFile(path.join(__dirname, 'config.json')).then(config => {
      if (_opt["visual-features"]) {
        if (typeof _opt["visual-features"] != "string") {

          const err = new Error("Invalid visual-features, must be a string");

          return reject(err);
        } else {

          const visualFeatures = _opt["visual-features"].split(/[\s,]+/);

          // cross cheking
          const ConfigVisualFeatures = config["visual-features"];
          let copyConfigVisualFeatures = [];
          for (let i = 0; i < ConfigVisualFeatures.length; i++) {
            copyConfigVisualFeatures.push(ConfigVisualFeatures[i].toLowerCase());
          }
          visualFeatures.map(feature => {
            if (!copyConfigVisualFeatures.includes(feature.toLowerCase())) {
              const err = new Error("One or more specified visual-feature type is not valid");
              return reject(err);
            }
          });

          return resolve("Past visual-features check");
        }
      }
    });
  });
};

// check details
exports.checkDetails = _opt => {
  return new Promise(function (resolve, reject) {
    loadJsonFile(path.join(__dirname, 'config.json')).then(config => {
      if (_opt.details) {
        const details = _opt.details.split(/[\s,]+/);
        // cross cheking
        const ConfigDetails = config["details"];
        let copyConfigDetails = [];
        for (let i = 0; i < ConfigDetails.length; i++) {
          copyConfigDetails.push(ConfigDetails[i].toLowerCase());
        }
        details.map(detail => {
          detail = detail.toLowerCase();
          if (!copyConfigDetails.includes(detail.toLowerCase())) {
            const err = new Error("One of more specified detail is not valid");
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
exports.checkModels = _opt => {
  return new Promise(function (resolve, reject) {
    loadJsonFile(path.join(__dirname, 'config.json')).then(config => {
      if (!_opt.model) {
        const err = new Error("Specified model is missing");
        return reject(err);
      }

      if (_opt.model) {
        let checkFlag = false;
        _opt.model = _opt.model.toLowerCase();
        const configModels = config["models"];
        for (let i = 0; i < configModels.length; i++) {
          if (configModels[i].toLowerCase() === _opt.model) {
            checkFlag = true;
          }
        }
        if (checkFlag) {
          return resolve("Past details check");
        } else {
          const err = new Error("Specified model is not valid");
          return reject(err);
        }
      }

      return resolve("No specific model decleared");
    });
  });
};

// check language
exports.checkLanguage = _opt => {
  return new Promise(function (resolve, reject) {
    loadJsonFile(path.join(__dirname, 'config.json')).then(config => {
      if (_opt.language && !config.languages.includes(_opt.language)) {
        const err = new Error("Specified language is not valid");
        return reject(err);
      }
      return resolve("Past language check");
    });
  });
};

// check request origin
exports.checkRequestOrigin = _opt => {
  return new Promise(function (resolve, reject) {
    loadJsonFile(path.join(__dirname, 'config.json')).then(config => {
      if (!_opt["request-origin"]) {
        const err = new Error("Missing request origin");
        return reject(err);
      }
      if (_opt["request-origin"] && !config["origin"].includes(_opt["request-origin"])) {
        const err = new Error("Specified request origin is not valid");
        return reject(err);
      }
      return resolve("Past request origin check");
    });
  });
};

// check thumbnail corp width and height
exports.checkThumbWidthHeight = _opt => {
  return new Promise(function (resolve, reject) {
    // params checking
    if (!_opt.width || !_opt.height) {
      const err = new Error("Missing specification of width or height");
      reject(err);
    }
    if (typeof _opt.width != 'string' || typeof _opt.height != 'string' || isNaN(Number(_opt.width)) || isNaN(Number(_opt.height))) {
      const err = new Error("Invalid type of specification of width or height");
      reject(err);
    }
    if (Number(_opt.width) <= 0 || Number(_opt.height) <= 0) {
      const err = new Error("Invalid value of specification of width or height");
      reject(err);
    }
    return resolve('Past thumbnail width and height check');
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91dGlsaXR5LmpzIl0sIm5hbWVzIjpbImxvYWRKc29uRmlsZSIsInJlcXVpcmUiLCJwYXRoIiwiZXhwb3J0cyIsImNoZWNrQ29udGVudFR5cGUiLCJfb3B0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJqb2luIiwiX19kaXJuYW1lIiwidGhlbiIsImNvbmZpZyIsImluY2x1ZGVzIiwiZXJyIiwiRXJyb3IiLCJjYXRjaCIsImNoZWNrVmlzdWFsRmVhdHVyZSIsInZpc3VhbEZlYXR1cmVzIiwic3BsaXQiLCJDb25maWdWaXN1YWxGZWF0dXJlcyIsImNvcHlDb25maWdWaXN1YWxGZWF0dXJlcyIsImkiLCJsZW5ndGgiLCJwdXNoIiwidG9Mb3dlckNhc2UiLCJtYXAiLCJmZWF0dXJlIiwiY2hlY2tEZXRhaWxzIiwiZGV0YWlscyIsIkNvbmZpZ0RldGFpbHMiLCJjb3B5Q29uZmlnRGV0YWlscyIsImRldGFpbCIsImNoZWNrTW9kZWxzIiwibW9kZWwiLCJjaGVja0ZsYWciLCJjb25maWdNb2RlbHMiLCJjaGVja0xhbmd1YWdlIiwibGFuZ3VhZ2UiLCJsYW5ndWFnZXMiLCJjaGVja1JlcXVlc3RPcmlnaW4iLCJjaGVja1RodW1iV2lkdGhIZWlnaHQiLCJ3aWR0aCIsImhlaWdodCIsImlzTmFOIiwiTnVtYmVyIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0EsTUFBTUEsZUFBZUMsUUFBUSxnQkFBUixDQUFyQjtBQUNBLE1BQU1DLE9BQU9ELFFBQVEsTUFBUixDQUFiOztBQUVBO0FBQ0FFLFFBQVFDLGdCQUFSLEdBQTRCQyxJQUFELElBQVU7QUFDbkMsU0FBTyxJQUFJQyxPQUFKLENBQVksQ0FBQ0MsT0FBRCxFQUFVQyxNQUFWLEtBQXFCO0FBQ3RDUixpQkFBYUUsS0FBS08sSUFBTCxDQUFVQyxTQUFWLEVBQXFCLGFBQXJCLENBQWIsRUFBa0RDLElBQWxELENBQXVEQyxVQUFVO0FBQy9ELFVBQUksT0FBT1AsS0FBSyxjQUFMLENBQVAsSUFBK0Is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SixDQUFVLHVDQUFWLENBQVo7QUFDQSxlQUFPUCxPQUFPTSxHQUFQLENBQVA7QUFDRDtBQUNELGFBQU9QLFFBQVEsMkJBQVIsQ0FBUDtBQUNELEtBVkQ7QUFXRCxHQVpNLENBQVA7QUFhRCxDQWREOztBQWdCQTtBQUNBSixRQUFRc0MscUJBQVIsR0FBaUNwQyxJQUFELElBQVU7QUFDeEMsU0FBTyxJQUFJQyxPQUFKLENBQVksVUFBU0MsT0FBVCxFQUFrQkMsTUFBbEIsRUFBMEI7QUFDM0M7QUFDQSxRQUFJLENBQUNILEtBQUtxQyxLQUFOLElBQWUsQ0FBQ3JDLEtBQUtzQyxNQUF6QixFQUFpQztBQUMvQixZQUFNN0IsTUFBTSxJQUFJQyxLQUFKLENBQVUsMENBQVYsQ0FBWjtBQUNBUCxhQUFPTSxHQUFQO0FBQ0Q7QUFDRCxRQUFJLE9BQU9ULEtBQUtxQyxLQUFaLElBQXFCLFFBQXJCLElBQWlDLE9BQU9yQyxLQUFLc0MsTUFBWixJQUFzQixRQUF2RCxJQUFtRUMsTUFBTUMsT0FBT3hDLEtBQUtxQyxLQUFaLENBQU4sQ0FBbkUsSUFBZ0dFLE1BQU1DLE9BQU94QyxLQUFLc0MsTUFBWixDQUFOLENBQXBHLEVBQWdJO0FBQzlILFlBQU03QixNQUFNLElBQUlDLEtBQUosQ0FBVSxrREFBVixDQUFaO0FBQ0FQLGFBQU9NLEdBQVA7QUFDRDtBQUNELFFBQUkrQixPQUFPeEMsS0FBS3FDLEtBQVosS0FBc0IsQ0FBdEIsSUFBMkJHLE9BQU94QyxLQUFLc0MsTUFBWixLQUF1QixDQUF0RCxFQUF5RDtBQUN2RCxZQUFNN0IsTUFBTSxJQUFJQyxLQUFKLENBQVUsbURBQVYsQ0FBWjtBQUNBUCxhQUFPTSxHQUFQO0FBQ0Q7QUFDRCxXQUFPUCxRQUFRLHVDQUFSLENBQVA7QUFDRCxHQWZNLENBQVA7QUFnQkQsQ0FqQkQiLCJmaWxlIjoidXRpbGl0eS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbW1vbiB1dGlsaXR5IGZ1bmN0aW9ucywgc3VjaCBsaWtlIGNvbnRlbnQtdHlwZSBjaGVja2luZywgZXRjLlxuY29uc3QgbG9hZEpzb25GaWxlID0gcmVxdWlyZSgnbG9hZC1qc29uLWZpbGUnKTtcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5cbi8vIGNoZWNrIGNvbnRlbnQtdHlwZVxuZXhwb3J0cy5jaGVja0NvbnRlbnRUeXBlID0gKF9vcHQpID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBsb2FkSnNvbkZpbGUocGF0aC5qb2luKF9fZGlybmFtZSwgJ2NvbmZpZy5qc29uJykpLnRoZW4oY29uZmlnID0+IHtcbiAgICAgIGlmICh0eXBlb2YgX29wdFtcImNvbnRlbnQtdHlwZVwiXSAhPSBcInN0cmluZ1wiIHx8ICFjb25maWdbXCJjb250ZW50LXR5cGVcIl0uaW5jbHVkZXMoX29wdFtcImNvbnRlbnQtdHlwZVwiXSkpIHtcblxuICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoXCJVbnN1cHBvcnQgY29udGVudCB0eXBlLCB0aGUgY29udGVudCB0eXBlIG11c3QgYmUgZWl0aGVyIGFwcGxpY2F0aW9uL2pzb24sIGFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbSBvciBtdWx0aXBhcnQvZm9ybS1kYXRhXCIpXG5cbiAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmUoXCJQYXN0IGNvbnRlbnQgdHlwZSBjaGVja1wiKVxuICAgICAgfVxuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIHJldHVybiByZWplY3QoZXJyKTtcbiAgICB9KVxuICB9KVxufVxuXG4vLyBjaGVjayB2aXN1YWwtZmVhdHVyZXNcbmV4cG9ydHMuY2hlY2tWaXN1YWxGZWF0dXJlID0gKF9vcHQpID0+IHtcblxuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgbG9hZEpzb25GaWxlKHBhdGguam9pbihfX2Rpcm5hbWUsICdjb25maWcuanNvbicpKS50aGVuKGNvbmZpZyA9PiB7XG4gICAgICBpZiAoX29wdFtcInZpc3VhbC1mZWF0dXJlc1wiXSkge1xuICAgICAgICBpZiAodHlwZW9mIF9vcHRbXCJ2aXN1YWwtZmVhdHVyZXNcIl0gIT0gXCJzdHJpbmdcIikge1xuXG4gICAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKFwiSW52YWxpZCB2aXN1YWwtZmVhdHVyZXMsIG11c3QgYmUgYSBzdHJpbmdcIilcblxuICAgICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgY29uc3QgdmlzdWFsRmVhdHVyZXMgPSBfb3B0W1widmlzdWFsLWZlYXR1cmVzXCJdLnNwbGl0KC9bXFxzLF0rLyk7XG5cbiAgICAgICAgICAvLyBjcm9zcyBjaGVraW5nXG4gICAgICAgICAgY29uc3QgQ29uZmlnVmlzdWFsRmVhdHVyZXMgPSBjb25maWdbXCJ2aXN1YWwtZmVhdHVyZXNcIl07XG4gICAgICAgICAgbGV0IGNvcHlDb25maWdWaXN1YWxGZWF0dXJlcyA9IFtdO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQ29uZmlnVmlzdWFsRmVhdHVyZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvcHlDb25maWdWaXN1YWxGZWF0dXJlcy5wdXNoKENvbmZpZ1Zpc3VhbEZlYXR1cmVzW2ldLnRvTG93ZXJDYXNlKCkpXG4gICAgICAgICAgfVxuICAgICAgICAgIHZpc3VhbEZlYXR1cmVzLm1hcCgoZmVhdHVyZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFjb3B5Q29uZmlnVmlzdWFsRmVhdHVyZXMuaW5jbHVkZXMoZmVhdHVyZS50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoXCJPbmUgb3IgbW9yZSBzcGVjaWZpZWQgdmlzdWFsLWZlYXR1cmUgdHlwZSBpcyBub3QgdmFsaWRcIik7XG4gICAgICAgICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUoXCJQYXN0IHZpc3VhbC1mZWF0dXJlcyBjaGVja1wiKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn1cblxuLy8gY2hlY2sgZGV0YWlsc1xuZXhwb3J0cy5jaGVja0RldGFpbHMgPSAoX29wdCkgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgbG9hZEpzb25GaWxlKHBhdGguam9pbihfX2Rpcm5hbWUsICdjb25maWcuanNvbicpKS50aGVuKGNvbmZpZyA9PiB7XG4gICAgICBpZiAoX29wdC5kZXRhaWxzKSB7XG4gICAgICAgIGNvbnN0IGRldGFpbHMgPSBfb3B0LmRldGFpbHMuc3BsaXQoL1tcXHMsXSsvKTtcbiAgICAgICAgLy8gY3Jvc3MgY2hla2luZ1xuICAgICAgICBjb25zdCBDb25maWdEZXRhaWxzID0gY29uZmlnW1wiZGV0YWlsc1wiXTtcbiAgICAgICAgbGV0IGNvcHlDb25maWdEZXRhaWxzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQ29uZmlnRGV0YWlscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvcHlDb25maWdEZXRhaWxzLnB1c2goQ29uZmlnRGV0YWlsc1tpXS50b0xvd2VyQ2FzZSgpKVxuICAgICAgICB9XG4gICAgICAgIGRldGFpbHMubWFwKChkZXRhaWwpID0+IHtcbiAgICAgICAgICBkZXRhaWwgPSBkZXRhaWwudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICBpZiAoIWNvcHlDb25maWdEZXRhaWxzLmluY2x1ZGVzKGRldGFpbC50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKFwiT25lIG9mIG1vcmUgc3BlY2lmaWVkIGRldGFpbCBpcyBub3QgdmFsaWRcIik7XG4gICAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gcmVzb2x2ZSgnUGFzdCBkZXRhaWxzIGNoZWNraW5nJylcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXNvbHZlKFwiTm8gc3BlY2lmaWVkIGRldGFpbCBkZWNsZWFyZWRcIilcbiAgICB9KVxuICB9KVxufVxuXG4vLyBjaGVjayBtb2RlbHNcbmV4cG9ydHMuY2hlY2tNb2RlbHMgPSAoX29wdCkgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgbG9hZEpzb25GaWxlKHBhdGguam9pbihfX2Rpcm5hbWUsICdjb25maWcuanNvbicpKS50aGVuKGNvbmZpZyA9PiB7XG4gICAgICBpZiAoIV9vcHQubW9kZWwpIHtcbiAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKFwiU3BlY2lmaWVkIG1vZGVsIGlzIG1pc3NpbmdcIik7XG4gICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgIH1cblxuICAgICAgaWYgKF9vcHQubW9kZWwpIHtcbiAgICAgICAgbGV0IGNoZWNrRmxhZyA9IGZhbHNlO1xuICAgICAgICBfb3B0Lm1vZGVsID0gX29wdC5tb2RlbC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBjb25maWdNb2RlbHMgPSBjb25maWdbXCJtb2RlbHNcIl07XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29uZmlnTW9kZWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKGNvbmZpZ01vZGVsc1tpXS50b0xvd2VyQ2FzZSgpID09PSBfb3B0Lm1vZGVsKSB7XG4gICAgICAgICAgICBjaGVja0ZsYWcgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hlY2tGbGFnKSB7XG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUoXCJQYXN0IGRldGFpbHMgY2hlY2tcIilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoXCJTcGVjaWZpZWQgbW9kZWwgaXMgbm90IHZhbGlkXCIpO1xuICAgICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzb2x2ZShcIk5vIHNwZWNpZmljIG1vZGVsIGRlY2xlYXJlZFwiKVxuICAgIH0pXG4gIH0pXG59XG5cbi8vIGNoZWNrIGxhbmd1YWdlXG5leHBvcnRzLmNoZWNrTGFuZ3VhZ2UgPSAoX29wdCkgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgbG9hZEpzb25GaWxlKHBhdGguam9pbihfX2Rpcm5hbWUsICdjb25maWcuanNvbicpKS50aGVuKGNvbmZpZyA9PiB7XG4gICAgICBpZiAoX29wdC5sYW5ndWFnZSAmJiAhY29uZmlnLmxhbmd1YWdlcy5pbmNsdWRlcyhfb3B0Lmxhbmd1YWdlKSkge1xuICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoXCJTcGVjaWZpZWQgbGFuZ3VhZ2UgaXMgbm90IHZhbGlkXCIpO1xuICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzb2x2ZShcIlBhc3QgbGFuZ3VhZ2UgY2hlY2tcIilcbiAgICB9KVxuICB9KVxufVxuXG4vLyBjaGVjayByZXF1ZXN0IG9yaWdpblxuZXhwb3J0cy5jaGVja1JlcXVlc3RPcmlnaW4gPSAoX29wdCkgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgbG9hZEpzb25GaWxlKHBhdGguam9pbihfX2Rpcm5hbWUsICdjb25maWcuanNvbicpKS50aGVuKGNvbmZpZyA9PiB7XG4gICAgICBpZiAoIV9vcHRbXCJyZXF1ZXN0LW9yaWdpblwiXSkge1xuICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoXCJNaXNzaW5nIHJlcXVlc3Qgb3JpZ2luXCIpO1xuICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICB9XG4gICAgICBpZiAoX29wdFtcInJlcXVlc3Qtb3JpZ2luXCJdICYmICFjb25maWdbXCJvcmlnaW5cIl0uaW5jbHVkZXMoX29wdFtcInJlcXVlc3Qtb3JpZ2luXCJdKSkge1xuICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoXCJTcGVjaWZpZWQgcmVxdWVzdCBvcmlnaW4gaXMgbm90IHZhbGlkXCIpO1xuICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzb2x2ZShcIlBhc3QgcmVxdWVzdCBvcmlnaW4gY2hlY2tcIilcbiAgICB9KVxuICB9KVxufVxuXG4vLyBjaGVjayB0aHVtYm5haWwgY29ycCB3aWR0aCBhbmQgaGVpZ2h0XG5leHBvcnRzLmNoZWNrVGh1bWJXaWR0aEhlaWdodCA9IChfb3B0KSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAvLyBwYXJhbXMgY2hlY2tpbmdcbiAgICBpZiAoIV9vcHQud2lkdGggfHwgIV9vcHQuaGVpZ2h0KSB7XG4gICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoXCJNaXNzaW5nIHNwZWNpZmljYXRpb24gb2Ygd2lkdGggb3IgaGVpZ2h0XCIpXG4gICAgICByZWplY3QoZXJyKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBfb3B0LndpZHRoICE9ICdzdHJpbmcnIHx8IHR5cGVvZiBfb3B0LmhlaWdodCAhPSAnc3RyaW5nJyB8fCBpc05hTihOdW1iZXIoX29wdC53aWR0aCkpIHx8IGlzTmFOKE51bWJlcihfb3B0LmhlaWdodCkpKSB7XG4gICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoXCJJbnZhbGlkIHR5cGUgb2Ygc3BlY2lmaWNhdGlvbiBvZiB3aWR0aCBvciBoZWlnaHRcIilcbiAgICAgIHJlamVjdChlcnIpO1xuICAgIH1cbiAgICBpZiAoTnVtYmVyKF9vcHQud2lkdGgpIDw9IDAgfHwgTnVtYmVyKF9vcHQuaGVpZ2h0KSA8PSAwKSB7XG4gICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoXCJJbnZhbGlkIHZhbHVlIG9mIHNwZWNpZmljYXRpb24gb2Ygd2lkdGggb3IgaGVpZ2h0XCIpXG4gICAgICByZWplY3QoZXJyKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc29sdmUoJ1Bhc3QgdGh1bWJuYWlsIHdpZHRoIGFuZCBoZWlnaHQgY2hlY2snKVxuICB9KVxufVxuIl19