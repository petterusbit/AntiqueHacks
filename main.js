

if (Meteor.isClient) {

    photos = new Mongo.Collection('ImageDB');

    
    Template.takePhoto.events({
            'click .capture': function () {
                MeteorCamera.getPicture({
                    width: 320,
                    height: 240
                }, function (error, data) {
                    Session.set('photo', data);
                    Router.go('/sendimage');
                    
                

                });
            }


    }); //end of template




        Template.takePhoto.helpers({
            'photo': function () {
                  photos.insert({images: photo, timestamp: "test"});
                img = Session.get('photo'); 
                console.log(img);
                return img;
                
                
            }

 });




    }

    if (Meteor.isServer) {
        photos = new Mongo.Collection('ImageDB');
    }

    /* var getPicture = function(opts) {
        MeteorCamera.getPicture(opts, function(err, data) {
          if (err) {
            console.log('error', err);
          }
          if (data) {
            Session.set('img', data)
          }
        });
      };

      Template.cameraEvent.events({
        'click button': function () {
          getPicture({
            width: 740,
            height: 150,
            quality: 75
          });
        }
      });

      Template.libraryEvent.events({
        'click button': function () {
          if (Meteor.isCordova) {
            getPicture({
              width: 350,
              height: 350,
              quality: 75
            });
          } else {
            alert('Cordova only feature.');
          }
        }
      }); 

      Template.img.helpers({
        img: function() {
          return Session.get('img');
        }
      });
    */