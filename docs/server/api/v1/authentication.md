---
id: authentication
title: Authentication
---

## About authentication

Authentication is handled using `Bearer` tokens. All endpoints apart from `POST /api/v1/login` require an `access_token` to be passed in the `Authorization` HTTP header.

Call `POST /api/v1/login` with your user credentials and you will retrieve an `access_token` that grants you access to restricted resources.

When making requests to other endpoints, include your `access_token` in the `Authroization` header like so:

```http
Authorization: Bearer YOUR_BEARER_TOKEN_HERE
```

> **NOTE:** Even with a token, you will only be able to access resources that you are authorized to access based on your role, i.e., `admin`, `vendor`, or `user`.

> **NOTE:** For every request to the API, be sure to set the HTTP header `Accept: application/json`. If you are submitting a JSON payload in your request, set `Content-Type: application/json` as well.

## `POST /api/v1/login`

Authenticate and retrieve an `access_token` to access application resources.

**Parameters:**

| Parameter  | Type     | Required | Description                       |
| ---------- | -------- | -------- | --------------------------------- |
| `email`    | `string` | ✔️       | Your email address used to login. |
| `password` | `string` | ✔️       | Your password used to login.      |

**Authorization:**

N/A

**Example Request:**

`POST /api/v1/login`

```json
{
    "email": "user@domain.com",
    "password": "password"
}
```

**Example Response:**

```http
200 OK
```

```json
{
  "data": {
    "user_id": 1,
    "access_token": "YOUR_BEARER_TOKEN_HERE"
  }
}
```

**Error Responses:**

```http
401 Unauthorized
```
