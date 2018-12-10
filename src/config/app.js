//FireBase
exports.firebaseConfig = {
  apiKey: "AIzaSyDZoo9UxKkkn1Mdswc6ryqyNgXnq_dVKMU",
  authDomain: "wedate-dev-tat.firebaseapp.com",
  databaseURL: "https://wedate-dev-tat.firebaseio.com",
  projectId: "wedate-dev-tat",
  storageBucket: "wedate-dev-tat.appspot.com",
  messagingSenderId: "893941971393"
};



//App setup
exports.adminConfig={
  "appName": "FireAdmin",
  "slogan":"made with love for a better firebase.",
  "design":{
    "sidebarBg":"sidebar-1.jpg", //sidebar-1, sidebar-2, sidebar-3
    "dataActiveColor":"orange", //"purple | blue | green | orange | red | rose"
    "dataBackgroundColor":"black", // "white | black"
  },
  "showItemIDs":false,
  "allowedUsers":["noven.purnellwebb@theappteam.com.au"], //If null, allow all users, else it should be array of allowd users
  "allowGoogleAuth":true, //Allowed users must contain list of allowed users in order to use google auth
  "fieldBoxName": "Fields",
  "maxNumberOfTableHeaders":5,
  "prefixForJoin":["-venue"],
  "showSearchInTables":true,
  "methodOfInsertingNewObjects":"timestamp", //timestamp (key+time) | push - use firebase keys
  "goDirectlyInTheInsertedNode":true,
  "urlSeparator":"+",
  "urlSeparatorFirestoreSubArray":"+",
  "googleMapsAPIKey":"YOUR_KEY",

  "fieldsTypes":{
    "photo":["photo","image"],
    "dateTime":["end","start"],
    "map":["map","latlng","location"],
    "textarea":["description"],
    "html":["content"],
    "radio":["radio","radiotf","featured"],
    "checkbox":["checkbox"],
    "dropdowns":["status","dropdowns"],
    "file":["video"],
    "rgbaColor":['rgba'],
    "hexColor":['color'],
    "relation":['type','creator'],
    "iconmd":['icon'],
    "iconfa":['iconfa'],
    "iconti":['iconti'],
    "iconio":['iconio'],
  },
  "optionsForDateTime":[
    {"key":"end", "dateFormat":"DD-MM-YY" ,"timeFormat":true, "saveAs":"x","locale":"en"},
    {"key":"start", "dateFormat":"X" ,"timeFormat":"HH:mm", "saveAs":"x"},
  ],
  "optionsForSelect":[
      {"key":"dropdowns","options":["new","processing","rejected","completed"]},
      {"key":"checkbox","options":["Skopje","Belgrade","New York"]},
      {"key":"status","options":["just_created","confirmed","canceled"]},
      {"key":"radio","options":["no","maybe","yes"]},
      {"key":"radiotf","options":["true","false"]},
      {"key":"featured","options":["true","false"]}
  ],
  "optionsForRelation":[
      {
        //Firestore - Native
        "display": "name",
        "isValuePath": true,
        "key": "creator",
        "path": "/users",
        "produceRelationKey": false,
        "relationJoiner": "-",
        "relationKey": "type_eventid",
        "value": "name"
      },
  ],
  "paging":{
    "pageSize": 20,
    "finite": true,
    "retainLastPage": false
  },
  "hiddenKeys":["keyToHide","anotherKeyToHide","email"],
  "previewOnlyKeys":["previewOnlyKey","anotherPreviewOnlyKey"]
}

//Navigation
exports.navigation=[
    {
      "link": "/",
      "name": "Dashboard",
      "schema":null,
      "icon":"home",
      "path": "",
       isIndex:true,
    },
    {
      "link": "firestoreadmin",
      "path": "venues",
      "name": "Venues",
      "icon":"event",
      "tableFields":["name","description", "website"],
    },
    {
      "link": "firestoreadmin",
      "path": "users/{useruuid}",
      "name": "My Profile",
      "icon": "perm_identity",
      "tableFields":[],
    },
    {
      "link": "push",
      "path": "",
      "name": "Push notification",
      "icon":"speaker_notes",
      "tableFields":[],
    }
  ];

  //From v 5.1.0 we suggest remoteSetup due to security
  //
exports.pushSettings={
  "remoteSetup":false,
  "remotePath":"pushSettings",
  "pushType":"firebase", //firebase -  onesignal - expo
  "Firebase_AuthorizationPushKey":"AAAA0CMX-cE:APA91bGfGV4ESD9oH8ySVh8ho4r4IUzFrkJlYlXB_3yJ1j0z85kH-YMJmE30bkZMvHeTcKaaZruV2ERKe-GAQT0nRMBeu46Ry6Ql4qynWCGp3C2vS-GQL4KuvAPWbFlz6GdhTYf120zcjq4WTYPP9DEf2UH2_JasLw", //Firebase push authorization ket
  "pushTopic":"news", //Only for firebase push
  "oneSignal_REST_API_KEY":"",
  "oneSignal_APP_KEY":"",
  "included_segments":"Active Users", //Only for onesignal push
  "firebasePathToTokens":"/expoPushTokens", //we save expo push tokens in firebase db
  "saveNotificationInFireStore":true, //Should we store the notification in firestore
}

exports.userDetails={

}

exports.remoteSetup=false;
exports.remotePath="admins/mobidonia";
exports.allowSubDomainControl=false;
exports.subDomainControlHolder="admins/";