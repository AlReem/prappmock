(function(window, undefined) {
  var dictionary = {
    "720b1535-3f32-4394-93c6-e5354c045b67": "Main Page",
    "a6b50c07-6a49-4aa3-89b8-ec8f7bfa8978": "Updates News",
    "59d6f0c3-15da-409c-9cd1-ba24117848be": "Recently Played",
    "6f6abf62-283f-46fa-97b6-5e9886fac7b6": "Recently Played-old",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Splash Screen",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);