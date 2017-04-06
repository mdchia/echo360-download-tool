// Function from http://pastie.org/462639
// Adapted from jquery core by Paul Irish
function getScript(url,success){
  var head = document.getElementsByTagName("head")[0], done = false;
  var script = document.createElement("script");
  script.src = url;
  // Attach handlers for all browsers
  script.onload = script.onreadystatechange = function(){
  	if ( !done && (!this.readyState ||
  			this.readyState == "loaded" || this.readyState == "complete") ) {
  		done = true;
  		success();
  	}
  };
  head.appendChild(script);
}

getScript('https://code.jquery.com/jquery-1.11.2.min.js',function(){
  getScript('https://cdn.rawgit.com/mdchia/echo360-download-tool/573d7667/echo360-download-tool.js',function(){
  });
});

// https://github.com/mishoo/UglifyJS2 used to minify for bookmarklet-min
