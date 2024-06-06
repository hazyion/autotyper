Auto typer for monkeytype.com

Prerequisites:

- xautomation package on linux
- requirements.py, found in server/

Setup:

- Install linux package for virtual keypresses via 'apt install xautomation'
- Open chrome and navigate to 'chrome://extensions'
- Turn on developer mode at the top right corner
- Press load unpacked on top left corner and select the extension folder to add it
- Navigate to root folder
- Install python packages using 'pip install -r ./server/requirements.py'
- Run python server using 'flask --app server run --debug'
- Ensure it is running on port 5000 (default)
- Open monkeytype.com and click on the extension. Make sure the text on the page is focused by pressing on it right after. Typing starts after 2 seconds of clicking on the extension.

How it works:

- The word list is extracted from the DOM using Javascript by the extension
- The words are sent to a python server running on localhost via a HTTP request
- Each letter along with spaces are typed by virtual keypresses simulated by xte (xautomation package on linux)
- When the monkeytype timer ends, it is detected and another request is made to the python server which stops the typing

Notes:

- Press the slash key (in the browser) if you want to stop the typing.
- Note that the keypresses are system wide, not browser bound. So stay within the browser during typing to avoid mishaps

Limitations:

- Doesn't work with punctuation or uppercase letters
