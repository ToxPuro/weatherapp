### Docker

There are three docker-compose.yml files:
  * dev.yml, this one is for development
  * test.yml this is an environment for robot integration tests
  * deploy.yml this is for deploying to AWS

### Node and React development

The current version uses geolocation data, falls back on Helsinki if no geolocation data.
Shows current weather and weather 3 hours from now

### Testing

run unit tests in frontend by: npm i && npm run test
run robot test: bash run_robot_tests.sh

### Cloud

Application is deployed to AWS [here](http://ec2-18-118-136-134.us-east-2.compute.amazonaws.com:8000)

### Ansible

ansible playbooks: docker.yml and app.yml

