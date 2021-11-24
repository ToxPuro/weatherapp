*** Settings ***
Library  SeleniumLibrary


*** Variables ***
${SERVER}  localhost:8000
${BROWSER}  %{BROWSER=chrome}
${DELAY}  %{DELAY=1 seconds}
${HOME URL}  http://${SERVER}

*** Keywords ***
Open And Configure Browser
    Open Browser  browser=${BROWSER}
    Set Window Size  1400  600
    Set Selenium Speed  ${DELAY}

Go To Main Page
    Go To  ${HOME URL}

