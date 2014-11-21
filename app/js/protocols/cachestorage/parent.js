'use strict';

var PCacheStorageParent = {
  'child': {
    sendOpen: function(key) {
      return this._call(
        'Open',
        {
          'key': key
        }
      );
    },

    sendMatch: function(key) {
      return this._call(
        'Match',
        {
          'key': key
        }
      );
    }

  },

  'parent': {
  }
};
