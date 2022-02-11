## Nodejs Demo App

[![Node.js CI](https://github.com/adekoyadapo/nodeapp/actions/workflows/main.yml/badge.svg)](https://github.com/adekoyadapo/nodeapp/actions/workflows/main.yml)

A demo project to deploy a nodejs app with testing and azure pipeline.

## 2020-02
### Improvements
- Updated with /healthz endpoint to allow for testing on k8s platforms
- Updated with api endpoints that supports PUT, POST, DELETE, GET on path /api/courses

### Usage
- GET
```
curl http://localhost/api/courses
...
[{"id":1,"name":"course1"},{"id":2,"name":"course2"},{"id":3,"name":"course3"}]

curl http://localhost/healthz
...
Healthy
```
- POST
```
curl -X POST http://localhost:/api/courses \
   -H 'Content-Type: application/json' \
   -d '{"name":"course4"}'
...
{"id":4,"name":"course4"}
```
- PUT
```
curl -X PUT http://localhost:/api/courses/1 \
   -H 'Content-Type: application/json' \
   -d '{"name":"course-test"}'
...
{"id":1,"name":"course-test"}
```
- DELETE
```
curl -X DELETE http://localhost:/api/courses/1  
```