'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (app) {
  app.context.error = error;
  app.context.data = data;
  return app;
};

var error = function error(code, message, errors) {
  this.status = code;
  this.body = {
    error: { code: code, message: message, meta: errors }
  };
  this.set('Content-Type', 'application/vnd.api+json');
}; /**
    *
    *  Extend the context namepsace to format JSON API reponses
    *  according to specs: http://jsonapi.org/format
    *
    */

var data = function data(code, _data) {
  this.status = code;
  this.body = {
    data: _data
  };
  this.set('Content-Type', 'application/vnd.api+json');
};