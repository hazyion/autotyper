# Auto typer for monkeytype website

Automatically completes the lowercase words typing test on monkeytype.com. The default speed is set to 100 wpm. Requires linux and the chrome browser.

## Setup

- Install linux package for virtual keypresses via
`apt install xautomation`
- Open chrome and navigate to 
`chrome://extensions`
- Turn on developer mode at the top right corner.
- Press 'load unpacked' on the top left and select the extension folder to add it.
- Navigate to root folder.
- Install python packages via 
`pip install -r ./server/requirements.txt`
- Run python server using 
`flask --app server run`
- Ensure it is running on port 5000 (default).
- Open monkeytype.com and click on the extension. Make sure the text on the page is focused by pressing on it right after. Typing starts after 2 seconds of clicking on the extension.

## Working

- The word list is extracted from the DOM using Javascript by the extension.
- The words are sent to a python server running on localhost via a HTTP request.
- Each letter along with spaces are typed by virtual keypresses simulated by `xte` command (xautomation package on linux).
- When the monkeytype timer ends, it is detected and another request is made to the python server which stops the typing.

## Notes

- Press the slash key (in the browser) if you want to stop the typing.
- Note that the keypresses are system wide, not browser bound. So stay within the browser during typing to avoid mishaps.
- You need to refresh the page between tests.
- The keypresses can't be simulated within the browser itself, since the dispatchEvent method creates events with isTrusted set to false, which doesn't work.
- Change the speed variable in the server/__init\_\_.py file to adjust the speed.

## Limitations

- Doesn't work with punctuation or uppercase letters.
- The word list is extracted only once, so if the speed is set too fast or if the timer is set for too long, it might stop typing before the time is up.

