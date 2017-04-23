# Echo360 Download Tool

A modification of [Brendan Weibrecht's](https://github.com/ZimbiX) Echo360 JS download tool.

## Setup

1. Install the [DownThemAll](http://www.downthemall.net) file downloader addon in **Firefox**.
2. Copy and paste the code below into the "Location" of a new bookmark.

```
javascript:function getScript(t,e){var o=document.getElementsByTagName("head")[0],a=!1,c=document.createElement("script");c.src=t,c.onload=c.onreadystatechange=function(){a||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(a=!0,e())},o.appendChild(c)}getScript("https://code.jquery.com/jquery-1.11.2.min.js",function(){getScript("https://cdn.rawgit.com/mdchia/echo360-download-tool/573d7667/echo360-download-tool.js",function(){})});
```

![Make a bookmark screenshot](/setup-img/step2a.jpg)

![Add code to location field screenshot](/setup-img/step2b.jpg)

## Usage

1. Access the Echo360 page for your course.
2. Right-click the center of the page and click "This Frame" > "Show only this frame" ![Show only this frame screenshot](/setup-img/step3a.jpg)
3. Click the bookmark you made and wait until it gives you an alert. ![Ready to download screenshot](/setup-img/step3b.jpg)
4. Right-click the page and select "DownThemAll!..." ![DTA screenshot](/setup-img/step4.jpg)
5. Use DownThemAll! with renaming mask `*text*.*ext*` to download the videos with the correct filenames (see screenshot below)

![DTA config screenshot](/setup-img/step5.jpg)

## Notes

- If you close the Echo360 page or click on a link in that tab that takes you to a new page, you'll have to start again

- You may have to scroll all the way to the bottom of the course list if you want to download the earliest echoes

- If you want to run this again to download only new videos, set the destination in DownThemAll! to that which contains the first set of videos, and when it starts, will prompt you what to do -- just choose to automatically skip all existing files for the current session
