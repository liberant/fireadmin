import * as firebase from 'firebase';
require("firebase/firestore");

var collectionMeta={
	"venues": {
		"fields": {
			"name": "Venue name",
			"address": "Venue address ",
			"description": "Venue description", // Free test description
			"facebookId": "Venue facebook", // link to facebook ID
			"heroImage": "Venue image ", // Route to main venue image (in firebase storage)
			"phone": "Venue Phone",
			"tags": "Venue tags",
			"website": "Venue website"
		},
	}
}
module.exports = collectionMeta;