
*** Settings ***
Resource  resource.robot
Suite Setup  Run Keywords  Open And Configure Browser
Suite Teardown  Close Browser

*** Test Cases ***
Data Should Be Correctly Shown
    Go To Main Page
    Page Should Contain  light rain
    Page Should Contain  broken clouds