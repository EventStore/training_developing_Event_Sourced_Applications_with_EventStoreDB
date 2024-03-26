# Lab Folder Instructions

## OO_validate_Setup

Please validate that you have a working environment by switching to folder 00_Validate_Setup

## Overview

Here is a list of the files in the folder and the functions they perform

start_cluster.sh

This will start a docker container running eventstoredb in single node, unsecured mode

test_node.js

Verifies that you have a working node environment

test_append.js

Verifies that you can write an event to a stream into the esdb instance running in a docker container

test_read.js

Verifies that you can read back the events that were written in test_append.js

Note that ```test_read.js``` has no error handling code built in, the goal was to keep this code simple, if ```test_read.js``` returns an error it is most likely because you have to run ```test_append.js``` first


## Instructions

1. Run start_cluster.sh

Open a terminal in vscode and switch to the directory 
```labs/00_Validate_Setup```
Run this command ./start_cluster.sh

This will start a docker container running eventstoredb. 

clicking on the browser icon (a little globe) in the ports tab, will take you to the webui for eventstoredb. Note you want port 2113.

2. Verify that your node environment is working

```node test_node.js```

3. Verify that you can append to a stream

```node test_append.js```

Check the webui in the ```Stream Browser`` tab you should see the stream ```Test_Stream``` and the event you just wrote to the stream

```test_Stream```

4. Verify that you can read from the stream ```test_Stream```

```node test_read.js```

You should see a single event returned to you for each time you execute ```node test_append.js```

Note that there is no error handling in the ```test_read.js``` if it returns an error, the most likely cause is a failure to run ```node test_append.js```



4. Verify you can read 