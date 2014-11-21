'use strict';

function importScripts(script) {
  if (document.querySelector('script[src="' + script + '"]')) {
    return;
  }

  var element = document.createElement('script');
  element.setAttribute('src', script);
  element.async = false;
  element.defer = false;
  document.head.appendChild(element);
}

importScripts('/calculator/app/js/protocols/protocol_helper.js');

window.addEventListener('load', function() {
  var implementation = {
    recvOpen: function(promise) {
      var key = promise.args.key;
      promise.resolve('shortbread');
    },

    recvMatch: function(promise) {
      var key = promise.args.key;
      promise.resolve('shortbread');
    }
  }

  var target = {
    addEventListener: function(type, callback) {
      addEventListener(type, callback);
    },

    postMessage: function(msg) {
      navigator.serviceWorker.controller.postMessage(msg);
    }
  };
  ProtocolHelper.newChildProtocol(target, 'cacheStorage', implementation);
});
