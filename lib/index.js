'use strict';

var _tagImage = require('./tag-image');

var _tagImage2 = _interopRequireDefault(_tagImage);

var _analyzeImage = require('./analyze-image');

var _analyzeImage2 = _interopRequireDefault(_analyzeImage);

var _describeImage = require('./describe-image');

var _describeImage2 = _interopRequireDefault(_describeImage);

var _getThumbnail = require('./get-thumbnail');

var _getThumbnail2 = _interopRequireDefault(_getThumbnail);

var _orc = require('./orc');

var _orc2 = _interopRequireDefault(_orc);

var _recognizeDomainSpecificContent = require('./recognize-domain-specific-content');

var _recognizeDomainSpecificContent2 = _interopRequireDefault(_recognizeDomainSpecificContent);

var _listDomainSpecificModels = require('./list-domain-specific-models');

var _listDomainSpecificModels2 = _interopRequireDefault(_listDomainSpecificModels);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.analyzeImage = function (_opt) {
    if (_opt) {
        return (0, _analyzeImage2.default)(_opt);
    } else {
        return new Promise(function (resolve, reject) {
            var err = new Error("Require basic options, please reference: https://github.com/viane/microsoft-computer-vision/blob/master/README.md#analyze-image");
            reject(err);
        });
    }
};

exports.describeImage = function (_opt) {
    if (_opt) {
        return (0, _describeImage2.default)(_opt);
    } else {
        return new Promise(function (resolve, reject) {
            var err = new Error("Require basic options, please reference: https://github.com/viane/microsoft-computer-vision/blob/master/README.md#tag-image");
            reject(err);
        });
    }
};

exports.imageThumbnail = function (_opt) {
    if (_opt) {
        return (0, _getThumbnail2.default)(_opt);
    } else {
        return new Promise(function (resolve, reject) {
            var err = new Error("Require basic options, please reference: https://github.com/viane/microsoft-computer-vision/blob/master/README.md#image-thumbnail");
            reject(err);
        });
    }
};

exports.orcImage = function (_opt) {
    if (_opt) {
        return (0, _orc2.default)(_opt);
    } else {
        return new Promise(function (resolve, reject) {
            var err = new Error("Require basic options, please reference: https://github.com/viane/microsoft-computer-vision/blob/master/README.md#orc-image");
            reject(err);
        });
    }
};

exports.listDomainSpecificModels = function (_opt) {
    if (_opt) {
        return (0, _listDomainSpecificModels2.default)(_opt);
    } else {
        return new Promise(function (resolve, reject) {
            var err = new Error("Require basic options, please reference: https://github.com/viane/microsoft-computer-vision#list-domain-specific-models");
            reject(err);
        });
    }
};

exports.recognizeDomainSpecificContent = function (_opt) {
    if (_opt) {
        return (0, _recognizeDomainSpecificContent2.default)(_opt);
    } else {
        return new Promise(function (resolve, reject) {
            var err = new Error("Require basic options, please reference: https://github.com/viane/microsoft-computer-vision#recognize-domain-specific-content");
            reject(err);
        });
    }
};

exports.tagImage = function (_opt) {
    if (_opt) {
        return (0, _tagImage2.default)(_opt);
    } else {
        return new Promise(function (resolve, reject) {
            var err = new Error("Require basic options, please reference: https://github.com/viane/microsoft-computer-vision/blob/master/README.md#describe-image");
            reject(err);
        });
    }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJleHBvcnRzIiwiYW5hbHl6ZUltYWdlIiwiX29wdCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZXJyIiwiRXJyb3IiLCJkZXNjcmliZUltYWdlIiwiaW1hZ2VUaHVtYm5haWwiLCJvcmNJbWFnZSIsImxpc3REb21haW5TcGVjaWZpY01vZGVscyIsInJlY29nbml6ZURvbWFpblNwZWNpZmljQ29udGVudCIsInRhZ0ltYWdlIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQUEsUUFBUUMsWUFBUixHQUF1QixVQUFDQyxJQUFELEVBQVU7QUFDN0IsUUFBSUEsSUFBSixFQUFVO0FBQ04sZUFBTyw0QkFBcUJBLElBQXJCLENBQVA7QUFDSCxLQUZELE1BRU87QUFDSCxlQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFTQyxPQUFULEVBQWtCQyxNQUFsQixFQUEwQjtBQUN6QyxnQkFBTUMsTUFBTSxJQUFJQyxLQUFKLENBQVUsaUlBQVYsQ0FBWjtBQUNBRixtQkFBT0MsR0FBUDtBQUNILFNBSE0sQ0FBUDtBQUlIO0FBQ0osQ0FURDs7QUFXQU4sUUFBUVEsYUFBUixHQUF3QixVQUFDTixJQUFELEVBQVU7QUFDOUIsUUFBSUEsSUFBSixFQUFVO0FBQ04sZUFBTyw2QkFBd0JBLElBQXhCLENBQVA7QUFDSCxLQUZELE1BRU87QUFDSCxlQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFTQyxPQUFULEVBQWtCQyxNQUFsQixFQUEwQjtBQUN6QyxnQkFBTUMsTUFBTSxJQUFJQyxLQUFKLENBQVUsNkhBQVYsQ0FBWjtBQUNBRixtQkFBT0MsR0FBUDtBQUNILFNBSE0sQ0FBUDtBQUlIO0FBQ0osQ0FURDs7QUFXQU4sUUFBUVMsY0FBUixHQUF5QixVQUFDUCxJQUFELEVBQVU7QUFDL0IsUUFBSUEsSUFBSixFQUFVO0FBQ04sZUFBTyw0QkFBc0JBLElBQXRCLENBQVA7QUFDSCxLQUZELE1BRU87QUFDSCxlQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFTQyxPQUFULEVBQWtCQyxNQUFsQixFQUEwQjtBQUN6QyxnQkFBTUMsTUFBTSxJQUFJQyxLQUFKLENBQVUsbUlBQVYsQ0FBWjtBQUNBRixtQkFBT0MsR0FBUDtBQUNILFNBSE0sQ0FBUDtBQUlIO0FBQ0osQ0FURDs7QUFXQU4sUUFBUVUsUUFBUixHQUFtQixVQUFDUixJQUFELEVBQVU7QUFDekIsUUFBSUEsSUFBSixFQUFVO0FBQ04sZUFBTyxtQkFBZ0JBLElBQWhCLENBQVA7QUFDSCxLQUZELE1BRU87QUFDSCxlQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFTQyxPQUFULEVBQWtCQyxNQUFsQixFQUEwQjtBQUN6QyxnQkFBTUMsTUFBTSxJQUFJQyxLQUFKLENBQVUsNkhBQVYsQ0FBWjtBQUNBRixtQkFBT0MsR0FBUDtBQUNILFNBSE0sQ0FBUDtBQUlIO0FBQ0osQ0FURDs7QUFXQU4sUUFBUVcsd0JBQVIsR0FBbUMsVUFBQ1QsSUFBRCxFQUFVO0FBQ3pDLFFBQUlBLElBQUosRUFBVTtBQUNOLGVBQU8sd0NBQVFBLElBQVIsQ0FBUDtBQUNILEtBRkQsTUFFTztBQUNILGVBQU8sSUFBSUMsT0FBSixDQUFZLFVBQVNDLE9BQVQsRUFBa0JDLE1BQWxCLEVBQTBCO0FBQ3pDLGdCQUFNQyxNQUFNLElBQUlDLEtBQUosQ0FBVSx5SEFBVixDQUFaO0FBQ0FGLG1CQUFPQyxHQUFQO0FBQ0gsU0FITSxDQUFQO0FBSUg7QUFDSixDQVREOztBQVdBTixRQUFRWSw4QkFBUixHQUF5QyxVQUFDVixJQUFELEVBQVU7QUFDL0MsUUFBSUEsSUFBSixFQUFVO0FBQ04sZUFBTyw4Q0FBUUEsSUFBUixDQUFQO0FBQ0gsS0FGRCxNQUVPO0FBQ0gsZUFBTyxJQUFJQyxPQUFKLENBQVksVUFBU0MsT0FBVCxFQUFrQkMsTUFBbEIsRUFBMEI7QUFDekMsZ0JBQU1DLE1BQU0sSUFBSUMsS0FBSixDQUFVLCtIQUFWLENBQVo7QUFDQUYsbUJBQU9DLEdBQVA7QUFDSCxTQUhNLENBQVA7QUFJSDtBQUNKLENBVEQ7O0FBV0FOLFFBQVFhLFFBQVIsR0FBbUIsVUFBQ1gsSUFBRCxFQUFVO0FBQ3pCLFFBQUlBLElBQUosRUFBVTtBQUNOLGVBQU8sd0JBQWdCQSxJQUFoQixDQUFQO0FBQ0gsS0FGRCxNQUVPO0FBQ0gsZUFBTyxJQUFJQyxPQUFKLENBQVksVUFBU0MsT0FBVCxFQUFrQkMsTUFBbEIsRUFBMEI7QUFDekMsZ0JBQU1DLE1BQU0sSUFBSUMsS0FBSixDQUFVLGtJQUFWLENBQVo7QUFDQUYsbUJBQU9DLEdBQVA7QUFDSCxTQUhNLENBQVA7QUFJSDtBQUNKLENBVEQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2V0VGFnRnJvbUltYWdlIGZyb20gJy4vdGFnLWltYWdlJztcbmltcG9ydCBnZXRBbmFseXNpc0Zyb21JbWFnZSBmcm9tICcuL2FuYWx5emUtaW1hZ2UnO1xuaW1wb3J0IGdldERlc2NyaXB0aW9uRnJvbUltYWdlIGZyb20gJy4vZGVzY3JpYmUtaW1hZ2UnO1xuaW1wb3J0IGdldFRodW1ibmFpbEZyb21JbWFnZSBmcm9tICcuL2dldC10aHVtYm5haWwnO1xuaW1wb3J0IGdldE9SQ0Zyb21JbWFnZSBmcm9tICcuL29yYyc7XG5pbXBvcnQgZ2V0UkRTQyBmcm9tICcuL3JlY29nbml6ZS1kb21haW4tc3BlY2lmaWMtY29udGVudCc7XG5pbXBvcnQgZ2V0TERTTSBmcm9tICcuL2xpc3QtZG9tYWluLXNwZWNpZmljLW1vZGVscyc7XG5cbmV4cG9ydHMuYW5hbHl6ZUltYWdlID0gKF9vcHQpID0+IHtcbiAgICBpZiAoX29wdCkge1xuICAgICAgICByZXR1cm4gZ2V0QW5hbHlzaXNGcm9tSW1hZ2UoX29wdClcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoXCJSZXF1aXJlIGJhc2ljIG9wdGlvbnMsIHBsZWFzZSByZWZlcmVuY2U6IGh0dHBzOi8vZ2l0aHViLmNvbS92aWFuZS9taWNyb3NvZnQtY29tcHV0ZXItdmlzaW9uL2Jsb2IvbWFzdGVyL1JFQURNRS5tZCNhbmFseXplLWltYWdlXCIpO1xuICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbmV4cG9ydHMuZGVzY3JpYmVJbWFnZSA9IChfb3B0KSA9PiB7XG4gICAgaWYgKF9vcHQpIHtcbiAgICAgICAgcmV0dXJuIGdldERlc2NyaXB0aW9uRnJvbUltYWdlKF9vcHQpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKFwiUmVxdWlyZSBiYXNpYyBvcHRpb25zLCBwbGVhc2UgcmVmZXJlbmNlOiBodHRwczovL2dpdGh1Yi5jb20vdmlhbmUvbWljcm9zb2Z0LWNvbXB1dGVyLXZpc2lvbi9ibG9iL21hc3Rlci9SRUFETUUubWQjdGFnLWltYWdlXCIpO1xuICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbmV4cG9ydHMuaW1hZ2VUaHVtYm5haWwgPSAoX29wdCkgPT4ge1xuICAgIGlmIChfb3B0KSB7XG4gICAgICAgIHJldHVybiBnZXRUaHVtYm5haWxGcm9tSW1hZ2UoX29wdClcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoXCJSZXF1aXJlIGJhc2ljIG9wdGlvbnMsIHBsZWFzZSByZWZlcmVuY2U6IGh0dHBzOi8vZ2l0aHViLmNvbS92aWFuZS9taWNyb3NvZnQtY29tcHV0ZXItdmlzaW9uL2Jsb2IvbWFzdGVyL1JFQURNRS5tZCNpbWFnZS10aHVtYm5haWxcIik7XG4gICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxuZXhwb3J0cy5vcmNJbWFnZSA9IChfb3B0KSA9PiB7XG4gICAgaWYgKF9vcHQpIHtcbiAgICAgICAgcmV0dXJuIGdldE9SQ0Zyb21JbWFnZShfb3B0KVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcihcIlJlcXVpcmUgYmFzaWMgb3B0aW9ucywgcGxlYXNlIHJlZmVyZW5jZTogaHR0cHM6Ly9naXRodWIuY29tL3ZpYW5lL21pY3Jvc29mdC1jb21wdXRlci12aXNpb24vYmxvYi9tYXN0ZXIvUkVBRE1FLm1kI29yYy1pbWFnZVwiKTtcbiAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG5leHBvcnRzLmxpc3REb21haW5TcGVjaWZpY01vZGVscyA9IChfb3B0KSA9PiB7XG4gICAgaWYgKF9vcHQpIHtcbiAgICAgICAgcmV0dXJuIGdldExEU00oX29wdClcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoXCJSZXF1aXJlIGJhc2ljIG9wdGlvbnMsIHBsZWFzZSByZWZlcmVuY2U6IGh0dHBzOi8vZ2l0aHViLmNvbS92aWFuZS9taWNyb3NvZnQtY29tcHV0ZXItdmlzaW9uI2xpc3QtZG9tYWluLXNwZWNpZmljLW1vZGVsc1wiKTtcbiAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG5leHBvcnRzLnJlY29nbml6ZURvbWFpblNwZWNpZmljQ29udGVudCA9IChfb3B0KSA9PiB7XG4gICAgaWYgKF9vcHQpIHtcbiAgICAgICAgcmV0dXJuIGdldFJEU0MoX29wdClcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoXCJSZXF1aXJlIGJhc2ljIG9wdGlvbnMsIHBsZWFzZSByZWZlcmVuY2U6IGh0dHBzOi8vZ2l0aHViLmNvbS92aWFuZS9taWNyb3NvZnQtY29tcHV0ZXItdmlzaW9uI3JlY29nbml6ZS1kb21haW4tc3BlY2lmaWMtY29udGVudFwiKTtcbiAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG5leHBvcnRzLnRhZ0ltYWdlID0gKF9vcHQpID0+IHtcbiAgICBpZiAoX29wdCkge1xuICAgICAgICByZXR1cm4gZ2V0VGFnRnJvbUltYWdlKF9vcHQpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKFwiUmVxdWlyZSBiYXNpYyBvcHRpb25zLCBwbGVhc2UgcmVmZXJlbmNlOiBodHRwczovL2dpdGh1Yi5jb20vdmlhbmUvbWljcm9zb2Z0LWNvbXB1dGVyLXZpc2lvbi9ibG9iL21hc3Rlci9SRUFETUUubWQjZGVzY3JpYmUtaW1hZ2VcIik7XG4gICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcbiJdfQ==