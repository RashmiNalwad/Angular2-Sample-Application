describe('Places factory', function(){ //Test suite
    
    var Places;

    var singlePlace =  {
      id: '2',
      name: 'San Deigo',
      touristAttraction: 'La Jolla'
    };

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

    beforeEach(angular.mock.module('api.places'));

    beforeEach(inject(function(_Places_){
        Places = _Places_;
    }));

    it('should exist' , function(){
        expect(Places).toBeDefined;
    });

    // A set of tests for our Users.all() method
     describe('.all()', function() {
        it('should exist', function() {   // A simple test to verify the method all exists
            expect(Places.all).toBeDefined();
        });

        it('should return a hard-coded list of places', function() {
            expect(Places.all()).toEqual(placeList);
        });
     });

    describe('.findById()', function() {
      it('should exist', function() {
        expect(Places.findById).toBeDefined();
      });

      it('should return one place object if it exists', function() {
        expect(Places.findById('2')).toEqual(singlePlace);
      });

      it('should return undefined if the place cannot be found', function() {
        expect(Places.findById('ABC')).not.toBeDefined();
      });
  });
});