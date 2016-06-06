# Echo360 Download Tool

A modification of [Brendan Weibrecht's](https://github.com/ZimbiX) Echo360 JS download tool.

## Setup

1. Install the [DownThemAll](http://www.downthemall.net) file downloader addon in **Firefox**.
2. Copy and paste the code below into the "Location" of a new bookmark.

```
javascript:function getScript(url,success){var head=document.getElementsByTagName('head')[0],done=!1,script=document.createElement('script');script.src=url,script.onload=script.onreadystatechange=function(){done||this.readyState&&'loaded'!=this.readyState&&'complete'!=this.readyState||(done=!0,success())},head.appendChild(script)}getScript('https://code.jquery.com/jquery-1.11.2.min.js',function(){getScript('https://raw.githubusercontent.com/mdchia/echo360-download-tool/master/echo360-download-tool.js',function(){})});
```

![Make a bookmark](/setup-img/step2a.jpg)

![Add code to location field](/setup-img/step2b.jpg)

## Usage

1. Access the Echo360 page for your course.
2. Right-click the center of the page and click "This Frame" > "Show only this frame"

1. Click the bookmark you made and wait until it gives you an alert.

The basic idea is as follows:

1. Use this utility to generate a webpage with a list of named links to the video files, opened in Firefox
2. Use DownThemAll! with renaming mask `*text*.*ext*` to download the videos with the correct filenames

## Notes

- If you close the Echo360 page or click on a link in that tab that takes you to a new page, you'll have to start again
- You may have to scroll all the way to the bottom of the course list if you want to download the earliest echoes
- If you want to run this again to download only new videos, set the destination in DownThemAll! to that which contains the first set of videos, and when it starts, will prompt you what to do -- just choose to automatically skip all existing files for the current session

### Usage

- Open Firefox and browse to the course's **Echo360 page**
- **Right-click** in the middle of the page, and select **This Frame** -> **Show Only This Frame**
- **Right-click** in the middle of the page, and select **Inspect Element**
- In the panel that appears, click the **Console** tab at the top
- Now we need to load jQuery:

  - In a new tab, browse to: <http://code.jquery.com/jquery-1.11.2.min.js>
  - **Right-click** in the middle of the page, and select **Select All**
  - **Right-click** in the middle of the page, and select **Copy**
  - Return to the **Echo360** tab
  - **Right-click** in the **thin box** at the bottom, select **Paste**, then press the **Enter** key
  - The word `true` should appear at the bottom if it worked

- Now we need to run this utility script:

  - Repeat the previous instructions, but with this page: <https://raw.githubusercontent.com/ZimbiX/echo360-download-tool/master/echo360-download-tool.js>

- After the script has finished clicking on the videos collecting information, the page should be replaced with a list of named links to the video files

  - You can now use DownThemAll! as per the instructions in the _Notes_ section above the _JavaScript version_ section
