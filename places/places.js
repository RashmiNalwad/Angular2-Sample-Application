(function() {
  'use strict';

  // Creating the module and factory we referenced in the beforeEach blocks in our test file
  angular.module('api.places', [])
  .factory('Places', function() {
    var Places = {};

    var placeList = [
    {
      id: '1',
      name: 'San Francisco',
      touristAttraction: 'Golden Gate Bridge'
    },
    {
      id: '2',
      name: 'San Deigo',
      touristAttraction: 'La Jolla'
    },
    {
      id: '3',
      name: 'Santa Cruz',
      touristAttraction: 'Beach'
    },
    {
      id: '4',
      name: 'Lake Tahoe',
      touristAttraction: 'Eagle Trails'
    }
  ];

    Places.all = function() {
        return placeList;
    };

    Places.findById = function(id) {
        return placeList.find(function(place){
            return place.id === id;
        });
    };

    return Places;
  });
})();