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

exports.analyzeImage = _opt => {
    if (_opt) {
        return (0, _analyzeImage2.default)(_opt);
    } else {
        return new Promise(function (resolve, reject) {
            const err = new Error("Require basic options, please reference: https://github.com/viane/microsoft-computer-vision/blob/master/README.md#analyze-image");
            reject(err);
        });
    }
};

exports.describeImage = _opt => {
    if (_opt) {
        return (0, _describeImage2.default)(_opt);
    } else {
        return new Promise(function (resolve, reject) {
            const err = new Error("Require basic options, please reference: https://github.com/viane/microsoft-computer-vision/blob/master/README.md#tag-image");
            reject(err);
        });
    }
};

exports.imageThumbnail = _opt => {
    if (_opt) {
        return (0, _getThumbnail2.default)(_opt);
    } else {
        return new Promise(function (resolve, reject) {
            const err = new Error("Require basic options, please reference: https://github.com/viane/microsoft-computer-vision/blob/master/README.md#image-thumbnail");
            reject(err);
        });
    }
};

exports.orcImage = _opt => {
    if (_opt) {
        return (0, _orc2.default)(_opt);
    } else {
        return new Promise(function (resolve, reject) {
            const err = new Error("Require basic options, please reference: https://github.com/viane/microsoft-computer-vision/blob/master/README.md#orc-image");
            reject(err);
        });
    }
};

exports.listDomainSpecificModels = _opt => {
    if (_opt) {
        return (0, _listDomainSpecificModels2.default)(_opt);
    } else {
        return new Promise(function (resolve, reject) {
            const err = new Error("Require basic options, please reference: https://github.com/viane/microsoft-computer-vision#list-domain-specific-models");
            reject(err);
        });
    }
};

exports.recognizeDomainSpecificContent = _opt => {
    if (_opt) {
        return (0, _recognizeDomainSpecificContent2.default)(_opt);
    } else {
        return new Promise(function (resolve, reject) {
            const err = new Error("Require basic options, please reference: https://github.com/viane/microsoft-computer-vision#recognize-domain-specific-content");
            reject(err);
        });
    }
};

exports.tagImage = _opt => {
    if (_opt) {
        return (0, _tagImage2.default)(_opt);
    } else {
        return new Promise(function (resolve, reject) {
            const err = new Error("Require basic options, please reference: https://github.com/viane/microsoft-computer-vision/blob/master/README.md#describe-image");
            reject(err);
        });
    }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJleHBvcnRzIiwiYW5hbHl6ZUltYWdlIiwiX29wdCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZXJyIiwiRXJyb3IiLCJkZXNjcmliZUltYWdlIiwiaW1hZ2VUaHVtYm5haWwiLCJvcmNJbWFnZSIsImxpc3REb21haW5TcGVjaWZpY01vZGVscyIsInJlY29nbml6ZURvbWFpblNwZWNpZmljQ29udGVudCIsInRhZ0ltYWdlIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQUEsUUFBUUMsWUFBUixHQUF3QkMsSUFBRCxJQUFVO0FBQzdCLFFBQUlBLElBQUosRUFBVTtBQUNOLGVBQU8sNEJBQXFCQSxJQUFyQixDQUFQO0FBQ0gsS0FGRCxNQUVPO0FBQ0gsZUFBTyxJQUFJQyxPQUFKLENBQVksVUFBU0MsT0FBVCxFQUFrQkMsTUFBbEIsRUFBMEI7QUFDekMsa0JBQU1DLE1BQU0sSUFBSUMsS0FBSixDQUFVLGlJQUFWLENBQVo7QUFDQUYsbUJBQU9DLEdBQVA7QUFDSCxTQUhNLENBQVA7QUFJSDtBQUNKLENBVEQ7O0FBV0FOLFFBQVFRLGFBQVIsR0FBeUJOLElBQUQsSUFBVTtBQUM5QixRQUFJQSxJQUFKLEVBQVU7QUFDTixlQUFPLDZCQUF3QkEsSUFBeEIsQ0FBUDtBQUNILEtBRkQsTUFFTztBQUNILGVBQU8sSUFBSUMsT0FBSixDQUFZLFVBQVNDLE9BQVQsRUFBa0JDLE1BQWxCLEVBQTBCO0FBQ3pDLGtCQUFNQyxNQUFNLElBQUlDLEtBQUosQ0FBVSw2SEFBVixDQUFaO0FBQ0FGLG1CQUFPQyxHQUFQO0FBQ0gsU0FITSxDQUFQO0FBSUg7QUFDSixDQVREOztBQVdBTixRQUFRUyxjQUFSLEdBQTBCUCxJQUFELElBQVU7QUFDL0IsUUFBSUEsSUFBSixFQUFVO0FBQ04sZUFBTyw0QkFBc0JBLElBQXRCLENBQVA7QUFDSCxLQUZELE1BRU87QUFDSCxlQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFTQyxPQUFULEVBQWtCQyxNQUFsQixFQUEwQjtBQUN6QyxrQkFBTUMsTUFBTSxJQUFJQyxLQUFKLENBQVUsbUlBQVYsQ0FBWjtBQUNBRixtQkFBT0MsR0FBUDtBQUNILFNBSE0sQ0FBUDtBQUlIO0FBQ0osQ0FURDs7QUFXQU4sUUFBUVUsUUFBUixHQUFvQlIsSUFBRCxJQUFVO0FBQ3pCLFFBQUlBLElBQUosRUFBVTtBQUNOLGVBQU8sbUJBQWdCQSxJQUFoQixDQUFQO0FBQ0gsS0FGRCxNQUVPO0FBQ0gsZUFBTyxJQUFJQyxPQUFKLENBQVksVUFBU0MsT0FBVCxFQUFrQkMsTUFBbEIsRUFBMEI7QUFDekMsa0JBQU1DLE1BQU0sSUFBSUMsS0FBSixDQUFVLDZIQUFWLENBQVo7QUFDQUYsbUJBQU9DLEdBQVA7QUFDSCxTQUhNLENBQVA7QUFJSDtBQUNKLENBVEQ7O0FBV0FOLFFBQVFXLHdCQUFSLEdBQW9DVCxJQUFELElBQVU7QUFDekMsUUFBSUEsSUFBSixFQUFVO0FBQ04sZUFBTyx3Q0FBUUEsSUFBUixDQUFQO0FBQ0gsS0FGRCxNQUVPO0FBQ0gsZUFBTyxJQUFJQyxPQUFKLENBQVksVUFBU0MsT0FBVCxFQUFrQkMsTUFBbEIsRUFBMEI7QUFDekMsa0JBQU1DLE1BQU0sSUFBSUMsS0FBSixDQUFVLHlIQUFWLENBQVo7QUFDQUYsbUJBQU9DLEdBQVA7QUFDSCxTQUhNLENBQVA7QUFJSDtBQUNKLENBVEQ7O0FBV0FOLFFBQVFZLDhCQUFSLEdBQTBDVixJQUFELElBQVU7QUFDL0MsUUFBSUEsSUFBSixFQUFVO0FBQ04sZUFBTyw4Q0FBUUEsSUFBUixDQUFQO0FBQ0gsS0FGRCxNQUVPO0FBQ0gsZUFBTyxJQUFJQyxPQUFKLENBQVksVUFBU0MsT0FBVCxFQUFrQkMsTUFBbEIsRUFBMEI7QUFDekMsa0JBQU1DLE1BQU0sSUFBSUMsS0FBSixDQUFVLCtIQUFWLENBQVo7QUFDQUYsbUJBQU9DLEdBQVA7QUFDSCxTQUhNLENBQVA7QUFJSDtBQUNKLENBVEQ7O0FBV0FOLFFBQVFhLFFBQVIsR0FBb0JYLElBQUQsSUFBVTtBQUN6QixRQUFJQSxJQUFKLEVBQVU7QUFDTixlQUFPLHdCQUFnQkEsSUFBaEIsQ0FBUDtBQUNILEtBRkQsTUFFTztBQUNILGVBQU8sSUFBSUMsT0FBSixDQUFZLFVBQVNDLE9BQVQsRUFBa0JDLE1BQWxCLEVBQTBCO0FBQ3pDLGtCQUFNQyxNQUFNLElBQUlDLEtBQUosQ0FBVSxrSUFBVixDQUFaO0FBQ0FGLG1CQUFPQyxHQUFQO0FBQ0gsU0FITSxDQUFQO0FBSUg7QUFDSixDQVREIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdldFRhZ0Zyb21JbWFnZSBmcm9tICcuL3RhZy1pbWFnZSc7XG5pbXBvcnQgZ2V0QW5hbHlzaXNGcm9tSW1hZ2UgZnJvbSAnLi9hbmFseXplLWltYWdlJztcbmltcG9ydCBnZXREZXNjcmlwdGlvbkZyb21JbWFnZSBmcm9tICcuL2Rlc2NyaWJlLWltYWdlJztcbmltcG9ydCBnZXRUaHVtYm5haWxGcm9tSW1hZ2UgZnJvbSAnLi9nZXQtdGh1bWJuYWlsJztcbmltcG9ydCBnZXRPUkNGcm9tSW1hZ2UgZnJvbSAnLi9vcmMnO1xuaW1wb3J0IGdldFJEU0MgZnJvbSAnLi9yZWNvZ25pemUtZG9tYWluLXNwZWNpZmljLWNvbnRlbnQnO1xuaW1wb3J0IGdldExEU00gZnJvbSAnLi9saXN0LWRvbWFpbi1zcGVjaWZpYy1tb2RlbHMnO1xuXG5leHBvcnRzLmFuYWx5emVJbWFnZSA9IChfb3B0KSA9PiB7XG4gICAgaWYgKF9vcHQpIHtcbiAgICAgICAgcmV0dXJuIGdldEFuYWx5c2lzRnJvbUltYWdlKF9vcHQpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKFwiUmVxdWlyZSBiYXNpYyBvcHRpb25zLCBwbGVhc2UgcmVmZXJlbmNlOiBodHRwczovL2dpdGh1Yi5jb20vdmlhbmUvbWljcm9zb2Z0LWNvbXB1dGVyLXZpc2lvbi9ibG9iL21hc3Rlci9SRUFETUUubWQjYW5hbHl6ZS1pbWFnZVwiKTtcbiAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG5leHBvcnRzLmRlc2NyaWJlSW1hZ2UgPSAoX29wdCkgPT4ge1xuICAgIGlmIChfb3B0KSB7XG4gICAgICAgIHJldHVybiBnZXREZXNjcmlwdGlvbkZyb21JbWFnZShfb3B0KVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcihcIlJlcXVpcmUgYmFzaWMgb3B0aW9ucywgcGxlYXNlIHJlZmVyZW5jZTogaHR0cHM6Ly9naXRodWIuY29tL3ZpYW5lL21pY3Jvc29mdC1jb21wdXRlci12aXNpb24vYmxvYi9tYXN0ZXIvUkVBRE1FLm1kI3RhZy1pbWFnZVwiKTtcbiAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG5leHBvcnRzLmltYWdlVGh1bWJuYWlsID0gKF9vcHQpID0+IHtcbiAgICBpZiAoX29wdCkge1xuICAgICAgICByZXR1cm4gZ2V0VGh1bWJuYWlsRnJvbUltYWdlKF9vcHQpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKFwiUmVxdWlyZSBiYXNpYyBvcHRpb25zLCBwbGVhc2UgcmVmZXJlbmNlOiBodHRwczovL2dpdGh1Yi5jb20vdmlhbmUvbWljcm9zb2Z0LWNvbXB1dGVyLXZpc2lvbi9ibG9iL21hc3Rlci9SRUFETUUubWQjaW1hZ2UtdGh1bWJuYWlsXCIpO1xuICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbmV4cG9ydHMub3JjSW1hZ2UgPSAoX29wdCkgPT4ge1xuICAgIGlmIChfb3B0KSB7XG4gICAgICAgIHJldHVybiBnZXRPUkNGcm9tSW1hZ2UoX29wdClcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoXCJSZXF1aXJlIGJhc2ljIG9wdGlvbnMsIHBsZWFzZSByZWZlcmVuY2U6IGh0dHBzOi8vZ2l0aHViLmNvbS92aWFuZS9taWNyb3NvZnQtY29tcHV0ZXItdmlzaW9uL2Jsb2IvbWFzdGVyL1JFQURNRS5tZCNvcmMtaW1hZ2VcIik7XG4gICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxuZXhwb3J0cy5saXN0RG9tYWluU3BlY2lmaWNNb2RlbHMgPSAoX29wdCkgPT4ge1xuICAgIGlmIChfb3B0KSB7XG4gICAgICAgIHJldHVybiBnZXRMRFNNKF9vcHQpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKFwiUmVxdWlyZSBiYXNpYyBvcHRpb25zLCBwbGVhc2UgcmVmZXJlbmNlOiBodHRwczovL2dpdGh1Yi5jb20vdmlhbmUvbWljcm9zb2Z0LWNvbXB1dGVyLXZpc2lvbiNsaXN0LWRvbWFpbi1zcGVjaWZpYy1tb2RlbHNcIik7XG4gICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxuZXhwb3J0cy5yZWNvZ25pemVEb21haW5TcGVjaWZpY0NvbnRlbnQgPSAoX29wdCkgPT4ge1xuICAgIGlmIChfb3B0KSB7XG4gICAgICAgIHJldHVybiBnZXRSRFNDKF9vcHQpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKFwiUmVxdWlyZSBiYXNpYyBvcHRpb25zLCBwbGVhc2UgcmVmZXJlbmNlOiBodHRwczovL2dpdGh1Yi5jb20vdmlhbmUvbWljcm9zb2Z0LWNvbXB1dGVyLXZpc2lvbiNyZWNvZ25pemUtZG9tYWluLXNwZWNpZmljLWNvbnRlbnRcIik7XG4gICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxuZXhwb3J0cy50YWdJbWFnZSA9IChfb3B0KSA9PiB7XG4gICAgaWYgKF9vcHQpIHtcbiAgICAgICAgcmV0dXJuIGdldFRhZ0Zyb21JbWFnZShfb3B0KVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcihcIlJlcXVpcmUgYmFzaWMgb3B0aW9ucywgcGxlYXNlIHJlZmVyZW5jZTogaHR0cHM6Ly9naXRodWIuY29tL3ZpYW5lL21pY3Jvc29mdC1jb21wdXRlci12aXNpb24vYmxvYi9tYXN0ZXIvUkVBRE1FLm1kI2Rlc2NyaWJlLWltYWdlXCIpO1xuICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG4iXX0=