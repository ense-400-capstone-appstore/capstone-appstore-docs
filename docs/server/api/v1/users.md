---
id: users
title: Users
---

## `POST /api/v1/users`

Create a new `User`.

**Parameters:**

| Parameter  | Type     | Required | Description                       |
| ---------- | -------- | -------- | --------------------------------- |
| `name`     | `string` | ✔️       | Your full name (e.g., `John Doe`) |
| `email`    | `string` | ✔️       | Your email address used to login. |
| `password` | `string` | ✔️       | Your password used to login.      |

**Authorization:**

`admin`

**Example Request:**

`POST /api/v1/users`

```json
{
    "name": "User",
    "email": "user@test.com",
    "password": "123456"
}
```

**Example Response:**

```http
201 Created
```

```json
{
  "data": {
    "id": 2,
    "name": "User",
    "email": "user@test.com",
    "avatar": "public\/users\/default.png",
    "created_at": {
      "date": "2019-02-11 01:32:30.000000",
      "timezone_type": 3,
      "timezone": "UTC"
    },
    "updated_at": {
      "date": "2019-02-11 01:32:30.000000",
      "timezone_type": 3,
      "timezone": "UTC"
    }
  }
}
```

**Error Responses:**

```
422 Unprocessable Entity
```

## `GET /api/v1/users`

Index all `Users`.

**Parameters:**

N/A

**Authorization:**

N/A

**Example Request:**

`GET /api/v1/users`

**Example Response:**

```http
200 OK
```

```json
{
  "data": [
    {
      "id": 1,
      "name": "Administrator",
      "email": "admin@matryoshkadoll.me",
      "created_at": {
        "date": "2019-02-11 02:55:34.000000",
        "timezone_type": 3,
        "timezone": "UTC"
      },
      "updated_at": {
        "date": "2019-02-11 02:55:34.000000",
        "timezone_type": 3,
        "timezone": "UTC"
      }
    },
    {
      "id": 2,
      "name": "Vendor",
      "email": "vendor@matryoshkadoll.me",
      "created_at": {
        "date": "2019-02-11 02:55:34.000000",
        "timezone_type": 3,
        "timezone": "UTC"
      },
      "updated_at": {
        "date": "2019-02-11 02:55:34.000000",
        "timezone_type": 3,
        "timezone": "UTC"
      }
    },
    {
      "id": 3,
      "name": "User",
      "email": "user@matryoshkadoll.me",
      "created_at": {
        "date": "2019-02-11 02:55:34.000000",
        "timezone_type": 3,
        "timezone": "UTC"
      },
      "updated_at": {
        "date": "2019-02-11 02:55:34.000000",
        "timezone_type": 3,
        "timezone": "UTC"
      }
    }
  ],
  "links": {
    "first": "http:\/\/127.0.0.1:8000\/api\/v1\/users?page=1",
    "last": "http:\/\/127.0.0.1:8000\/api\/v1\/users?page=1",
    "prev": null,
    "next": null
  },
  "meta": {
    "current_page": 1,
    "from": 1,
    "last_page": 1,
    "path": "http:\/\/127.0.0.1:8000\/api\/v1\/users",
    "per_page": 15,
    "to": 3,
    "total": 3
  }
}
```

**Error Responses:**

N/A

## `GET /api/v1/users/{id}`

Get a `User` by ID.

**Parameters:**

N/A

**Authorization:**

N/A

**Example Request:**

`GET /api/v1/users/1`

**Example Response:**

```http
200 OK
```

```json
{
  "data": {
    "id": 1,
    "name": "Administrator",
    "email": "admin@matryoshkadoll.me",
    "created_at": {
      "date": "2019-02-11 02:55:34.000000",
      "timezone_type": 3,
      "timezone": "UTC"
    },
    "updated_at": {
      "date": "2019-02-11 02:55:34.000000",
      "timezone_type": 3,
      "timezone": "UTC"
    }
  }
}
```

**Error Responses:**

```http
404 Not Found
```

## `PATCH /api/v1/users/{id}`

Update an existing `User` by ID.

**Parameters:**

| Parameter  | Type     | Required | Description                       |
| ---------- | -------- | -------- | --------------------------------- |
| `name`     | `string` |          | Your full name (e.g., `John Doe`) |
| `email`    | `string` |          | Your email address used to login. |
| `password` | `string` |          | Your password used to login.      |

**Authorization:**

`admin`

**Example Request:**

`PATCH /api/v1/users/1`

```json
{
    "name": "John Doe",
    "password": "123123"
}
```

**Example Response:**

```http
200 OK
```

```json
{
  "data": {
    "id": 1,
    "name": "John Doe",
    "email": "user@test.com",
    "created_at": {
      "date": "2019-02-11 03:57:03.000000",
      "timezone_type": 3,
      "timezone": "UTC"
    },
    "updated_at": {
      "date": "2019-02-11 03:57:15.000000",
      "timezone_type": 3,
      "timezone": "UTC"
    }
  }
}
```

**Error Responses:**

```http
404 Not Found
```

```http
422 Unprocessable Entity
```

## `DELETE /api/v1/users/{id}`

Delete an existing `User` by ID.

**Parameters:**

N/A

**Authorization:**

`admin`

**Example Request:**

`DELETE /api/v1/users/1`

**Example Response:**

```http
204 No Content
```

**Error Responses:**

```http
404 Not Found
```

## `GET /api/v1/users/current`

Get the current `User` (you).

**Parameters:**

N/A

**Authorization:**

N/A

**Example Request:**

`GET /api/v1/users/current`

**Example Response:**

```http
200 OK
```

```json
{
  "data": {
    "id": 1,
    "name": "Administrator",
    "email": "admin@matryoshkadoll.me",
    "created_at": {
      "date": "2019-02-06 23:33:46.000000",
      "timezone_type": 3,
      "timezone": "UTC"
    },
    "updated_at": {
      "date": "2019-02-07 04:37:14.000000",
      "timezone_type": 3,
      "timezone": "UTC"
    }
  }
}
```

**Error Responses:**

N/A


## `POST /api/v1/users/{id}/avatar`

Upload a new avatar for a `User` by ID.

**Parameters:**

| Parameter | Type   | Required | Description                         |
| --------- | ------ | -------- | ----------------------------------- |
| `avatar`  | `file` | ✔️       | The image file to set as an avatar. |

> **NOTE:** Set HTTP header `Content-Type: multipart/form-data`.

> **NOTE:** There are some restrictions on `avatar`:
>  - Must be below `5MB` in size.
>  - Must be of filetype `jpg`, `bmp`, or `png`.
>  - The server converts it to a `256x256` `jpg` image after upload.

**Authorization:**

`admin`, current `user`

**Example Request:**

`POST /api/v1/users/1/avatar`

```http
avatar: my_image.png
```

**Example Response:**

```http
201 Created
```

**Error Responses:**

```http
422 Unprocessable Entity
```

## `GET /api/v1/users/{id}/avatar`

Get the raw image for the `User's` current avatar by ID.

**Parameters:**

N/A

**Authorization:**

N/A

**Example Request:**

`GET /api/v1/users/1/avatar`


**Example Response:**

```http
200 OK
```

![avatar.jpg](assets/avatar.jpg)

**Error Responses:**

N/A

## `GET /api/v1/users/{id}/android_apps`

Get all owned `AndroidApps` for a `User` by ID.

**Parameters:**

N/A

**Authorization:**

`admin`, current `user`

**Example Request:**

`GET /api/v1/users/{id}/android_apps`

**Example Response:**

```http
200 OK
```

```json
{
  "data": [
    {
      "id": 1,
      "name": "Farrell-Dicki",
      "version": "1.0.0",
      "description": "Et fugiat praesentium fugit sed. Ex atque iure hic. Quas qui sunt adipisci accusamus incidunt consequatur saepe corporis.",
      "price": 0,
      "package_name": null,
      "creator_id": null,
      "pivot": {
        "user_id": 1,
        "android_app_id": 1
      },
      "created_at": {
        "date": "2019-03-14 01:35:15.000000",
        "timezone_type": 3,
        "timezone": "UTC"
      },
      "updated_at": {
        "date": "2019-03-14 02:32:15.000000",
        "timezone_type": 3,
        "timezone": "UTC"
      }
    }
  ],
  "links": {
    "first": "http:\/\/127.0.0.1:8000\/api\/v1\/users\/1\/android_apps?page=1",
    "last": "http:\/\/127.0.0.1:8000\/api\/v1\/users\/1\/android_apps?page=1",
    "prev": null,
    "next": null
  },
  "meta": {
    "current_page": 1,
    "from": 1,
    "last_page": 1,
    "path": "http:\/\/127.0.0.1:8000\/api\/v1\/users\/1\/android_apps",
    "per_page": 15,
    "to": 1,
    "total": 1
  }
}
```

**Error Responses:**

```http
404 Not Found
```

## `GET /api/v1/users/{id}/created_android_apps`

Get all owned `AndroidApps` for a `User` by ID.

> **NOTE:** *Owned* `AndroidApps` means `AndroidApps` that a user has purchased from other users.

**Parameters:**

N/A

**Authorization:**

`admin`, current `vendor`

**Example Request:**

`GET /api/v1/users/1/created_android_apps`

**Example Response:**

```http
200 OK
```

```json
{
  "data": [
    {
      "id": 4,
      "name": "Firefox Browser fast & private",
      "version": "65.0",
      "description": "Experience a fast, smart and personal Web. Firefox is the independent, people-first browser made by Mozilla, voted the Most Trusted Internet Company for Privacy. Upgrade today and join hundreds of millions who depend on Firefox for a more personal browsing experience.",
      "price": 0,
      "package_name": null,
      "creator_id": 1,
      "created_at": {
        "date": "2019-02-11 03:15:37.000000",
        "timezone_type": 3,
        "timezone": "UTC"
      },
      "updated_at": {
        "date": "2019-03-14 04:46:30.000000",
        "timezone_type": 3,
        "timezone": "UTC"
      }
    }
  ],
  "links": {
    "first": "https:\/\/matryoshkadoll.me\/api\/v1\/users\/1\/created_android_apps?page=1",
    "last": "https:\/\/matryoshkadoll.me\/api\/v1\/users\/1\/created_android_apps?page=1",
    "prev": null,
    "next": null
  },
  "meta": {
    "current_page": 1,
    "from": 1,
    "last_page": 1,
    "path": "https:\/\/matryoshkadoll.me\/api\/v1\/users\/1\/created_android_apps",
    "per_page": 15,
    "to": 5,
    "total": 5
  }
}
```

**Error Responses:**

```http
404 Not Found
```

## `GET /api/v1/users/{id}/groups`

Get an index of `Groups` that a `User` by ID is a member of.

**Parameters:**

N/A

**Authorization:**

`admin`, current `user`

**Example Request:**

`GET /api/v1/users/1/groups`

**Example Response:**

```http
200 OK
```

```json
{
  "data": [
    {
      "id": 1,
      "name": "Administrator's Group",
      "created_at": {
        "date": "2019-03-28 02:42:53.000000",
        "timezone_type": 3,
        "timezone": "UTC"
      },
      "updated_at": {
        "date": "2019-04-02 16:28:48.000000",
        "timezone_type": 3,
        "timezone": "UTC"
      }
    },
    {
      "id": 2,
      "name": "test",
      "created_at": {
        "date": "2019-03-30 11:45:02.000000",
        "timezone_type": 3,
        "timezone": "UTC"
      },
      "updated_at": {
        "date": "2019-03-30 11:45:02.000000",
        "timezone_type": 3,
        "timezone": "UTC"
      }
    }
  ],
  "links": {
    "first": "https:\/\/matryoshkadoll.me\/api\/v1\/users\/2\/groups?page=1",
    "last": "https:\/\/matryoshkadoll.me\/api\/v1\/users\/2\/groups?page=1",
    "prev": null,
    "next": null
  },
  "meta": {
    "current_page": 1,
    "from": 1,
    "last_page": 1,
    "path": "https:\/\/matryoshkadoll.me\/api\/v1\/users\/2\/groups",
    "per_page": 15,
    "to": 2,
    "total": 2
  }
}
```

**Error Responses:**

```http
401 Unauthorized
```

```http
404 Not Found
```

## `GET /api/v1/users/{id}/created_groups`

Get an index of `Groups` that a `User` by ID created.

**Parameters:**

N/A

**Authorization:**

N/A

**Example Request:**

`GET /api/v1/users/1/created_groups`

**Example Response:**

```http
200 OK
```

```json
{
  "data": [
    {
      "id": 1,
      "name": "Administrator's Group",
      "created_at": {
        "date": "2019-03-28 02:42:53.000000",
        "timezone_type": 3,
        "timezone": "UTC"
      },
      "updated_at": {
        "date": "2019-04-02 16:28:48.000000",
        "timezone_type": 3,
        "timezone": "UTC"
      }
    }
  ],
  "links": {
    "first": "https:\/\/matryoshkadoll.me\/api\/v1\/users\/1\/created_groups?page=1",
    "last": "https:\/\/matryoshkadoll.me\/api\/v1\/users\/1\/created_groups?page=1",
    "prev": null,
    "next": null
  },
  "meta": {
    "current_page": 1,
    "from": 1,
    "last_page": 1,
    "path": "https:\/\/matryoshkadoll.me\/api\/v1\/users\/1\/created_groups",
    "per_page": 15,
    "to": 1,
    "total": 1
  }
}
```

**Error Responses:**

```http
404 Not Found
```
