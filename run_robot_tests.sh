#!/bin/bash

sudo docker-compose -f test.yml up -d

## Wait for the docker containers to spin up
## When status code is 200 we are ready
while [[ "$(curl -s -o /dev/null -w ''%{http_code}'' localhost:5000/data/forecast)" != "200" ]];
  do sleep 1; 
done

function clean_up {
  sudo docker-compose -f test.yml down
}

# suoritetaan clean_up-funktio, kun prosessi lopettaa suorituksen
trap clean_up EXIT

# suoritetaan testit

robot tests