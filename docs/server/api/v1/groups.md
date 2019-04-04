---
id: groups
title: Groups
---

## `GET /api/v1/groups`

Index all `Groups`.

**Parameters:**

N/A

**Authorization:**

N/A

**Example Request:**

`GET /api/v1/groups`

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
        "first": "https://matryoshkadoll.me/api/v1/groups?page=1",
        "last": "https://matryoshkadoll.me/api/v1/groups?page=1",
        "prev": null,
        "next": null
    },
    "meta": {
        "current_page": 1,
        "from": 1,
        "last_page": 1,
        "path": "https://matryoshkadoll.me/api/v1/groups",
        "per_page": 15,
        "to": 2,
        "total": 2
    }
}
```

**Error Responses:**

N/A

## `GET /api/v1/groups/{id}`

Get a `Group` by ID.

**Parameters:**

N/A

**Authorization:**

`admin`, owner of group, members of group

**Example Request:**

`GET /api/v1/groups/1`

**Example Response:**

```http
200 OK
```

```json
{
    "data": {
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
}
```

**Error Responses:**

```http
401 Unauthorized
```

```http
404 Not Found
```

## `GET /api/v1/groups/{id}/android_apps`

Index all `AndroidApps` that belong to a `Group` by ID.

**Parameters:**

N/A

**Authorization:**

`admin`, owner of group, members of group

**Example Request:**

`GET /api/v1/groups/{id}/android_apps`

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
            "private": false,
            "approved": true,
            "creator_id": 1,
            "pivot": {
                "group_id": 1,
                "android_app_id": 4
            },
            "created_at": {
                "date": "2019-02-11 03:15:37.000000",
                "timezone_type": 3,
                "timezone": "UTC"
            },
            "updated_at": {
                "date": "2019-03-28 02:43:15.000000",
                "timezone_type": 3,
                "timezone": "UTC"
            }
        }
    ],
    "links": {
        "first": "https://matryoshkadoll.me/api/v1/groups/1/android_apps?page=1",
        "last": "https://matryoshkadoll.me/api/v1/groups/1/android_apps?page=1",
        "prev": null,
        "next": null
    },
    "meta": {
        "current_page": 1,
        "from": 1,
        "last_page": 1,
        "path": "https://matryoshkadoll.me/api/v1/groups/1/android_apps",
        "per_page": 15,
        "to": 1,
        "total": 1
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

## `GET /api/v1/groups/{id}/users`

Index all `Users` that belong to a `Group` by ID.

**Parameters:**

N/A

**Authorization:**

`admin`, owner of group

**Example Request:**

`GET /api/v1/groups/1/users`

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
    ],
    "links": {
        "first": "https://matryoshkadoll.me/api/v1/groups/1/users?page=1",
        "last": "https://matryoshkadoll.me/api/v1/groups/1/users?page=1",
        "prev": null,
        "next": null
    },
    "meta": {
        "current_page": 1,
        "from": 1,
        "last_page": 1,
        "path": "https://matryoshkadoll.me/api/v1/groups/1/users",
        "per_page": 15,
        "to": 1,
        "total": 1
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
