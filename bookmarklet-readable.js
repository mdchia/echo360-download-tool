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

getScript('http://code.jquery.com/jquery-1.11.2.min.js',function(){
  getScript('https://raw.githubusercontent.com/mdchia/echo360-download-tool/master/echo360-download-tool.js',function(){
    alert('Ready to download! Right click and choose "DownThemAll!..."')
  });
});
