#bash.js
###A bash proxy for your browser
bash.js provides a proxy server to execute commands on your local machine issued via the web interface. Currently, bash.js only supports stateless commands, eg. 'ls' and 'cat' -- commands requiring a notion of state or tty connection are not yet supported, e.g. 'cd' or 'emacs <file>'. If you would like to contribute towards these features, please submit a pull request.

#WARNING: THIS IS NOT READY FOR PRODUCTION USE!

Currently there is no notion of authentication so use at your own risk if you like to live on the edge/are okay with someone doing sudo rm -rf on your server.

![Here there be dragons](http://lair2000.net/Dragon_Poetry/poems/sign.gif)