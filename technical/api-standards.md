---
title: "REST API Design Guidelines"
description: "HTTP verbs, status codes, and error payloads"
---

# REST API Design Guidelines

## Status Code Mappings
- `200 OK`: Successful GET, PUT, PATCH.
- `201 Created`: Successful POST creating a new resource.
- `400 Bad Request`: Schema validation failure or malformed payload.
- `401 Unauthorized`: Missing or invalid authentication token.
- `403 Forbidden`: Authenticated user lacks permission.
- `404 Not Found`: Target resource does not exist.
- `500 Internal Error`: Unhandled server exception.

## Error Response Payload
All APIs must return uniform JSON errors:
```json
{
  "error": {
    "code": "BAD_REQUEST",
    "message": "Student registration number is invalid."
  }
}
```
