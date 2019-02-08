---
id: androidapps
title: AndroidApps
---

## `POST /api/v1/android_apps`

Create a new `AndroidApp`.

**Parameters:**

| Parameter     | Type     | Required | Description                                   |
| ------------- | -------- | -------- | --------------------------------------------- |
| `name`        | `string` | ✔️       | Display name.                                 |
| `description` | `string` | ✔️       | Long description text, supports Markdown.     |
| `version`     | `string` | ✔️       | Current version.                              |
| `price`       | `double` | ✔️       | Price with two decimal points or `0` if free. |

**Authorization:**

`admin`

**Example Request:**

`POST /api/v1/android_apps`

```json
{
    "name": "Lorem",
    "description": "My App 2",
    "version": "1.0.0",
    "price": 0.0,
}
```

**Example Response:**

```http
201 Created
```

```json
{
    "data": {
        "name": "Lorem",
        "description": "My App 2",
        "version": "1.0.0",
        "price": 0,
        "updated_at": "2019-02-08 03:35:14",
        "created_at": "2019-02-08 03:35:14",
        "id": 17
    }
}
```

**Error Responses:**

```http
401 Unauthorized
```

```http
403 Forbidden
```


## `GET /api/v1/android_apps`

Index all `AndroidApps`.

**Parameters:**

N/A

**Authorization:**

N/A

**Example Request:**

`GET /api/v1/android_apps`

**Example Response:**

```http
200 OK
```

```json
{
  "data": [
    {
      "id": 1,
      "name": "Lorem",
      "version": "1.0.0",
      "description": "My App 2",
      "price": 0,
      "avatar": "android-apps\/default.png",
      "created_at": "2019-02-08 16:38:20",
      "updated_at": "2019-02-08 16:38:20",
      "file": null
    }
  ],
  "links": {
    "first": "https:\/\/matryoshkadoll.me\/api\/v1\/android_apps?page=1",
    "last": "https:\/\/matryoshkadoll.me\/api\/v1\/android_apps?page=1",
    "prev": null,
    "next": null
  },
  "meta": {
    "current_page": 1,
    "from": 1,
    "last_page": 1,
    "path": "https:\/\/matryoshkadoll.me\/api\/v1\/android_apps",
    "per_page": 15,
    "to": 1,
    "total": 1
  }
}
```

## `GET /api/v1/android_apps/{id}`

Get an `AndroidApp` by ID.

**Parameters:**

N/A

**Authorization:**

N/A

**Example Request:**

`GET /api/v1/android_apps/1`

**Example Response:**

```http
200 OK
```

```json
{
  "data": {
    "id": 2,
    "name": "Lorem",
    "version": "1.0.0",
    "description": "My App 2",
    "price": 0,
    "avatar": "android-apps\/default.png",
    "created_at": "2019-02-08 16:38:20",
    "updated_at": "2019-02-08 16:38:20",
    "file": null
  }
}
```

**Error Responses:**

```http
404 Not Found
```

## `PATCH /api/v1/android_apps/{id}`

Update an existing `AndroidApp` by ID.

**Parameters:**

| Parameter     | Type     | Required | Description                                   |
| ------------- | -------- | -------- | --------------------------------------------- |
| `name`        | `string` | ✔️       | Display name.                                 |
| `description` | `string` | ✔️       | Long description text, supports Markdown.     |
| `version`     | `string` | ✔️       | Current version.                              |
| `price`       | `double` | ✔️       | Price with two decimal points or `0` if free. |

**Authorization:**

`admin`

**Example Request:**

`PATCH /api/v1/android_apps/1`

```json
{
    "name": "Ipsum",
    "description": "My App",
    "version": "1.0.0",
    "price": 0.00
}
```

**Example Response:**

```http
200 OK
```

```json
{
  "data": {
    "id": 3,
    "name": "Ipsum",
    "version": "1.0.0",
    "description": "My App",
    "price": 0,
    "avatar": "android-apps\/default.png",
    "created_at": "2019-02-08 16:49:43",
    "updated_at": "2019-02-08 16:50:21",
    "file": null
  }
}
```

**Error Responses:**

```http
401 Unauthorized
```

```http
405 Method Not Allowed
```


## `DELETE /api/v1/android_apps/{id}`

Delete an existing `AndroidApp` by ID.

**Parameters:**

N/A

**Authorization:**

`admin`

**Example Request:**

`DELETE /api/v1/android_apps/1`

**Example Response:**

```http
204 No Content
```

**Error Responses:**

```http
405 Method Not Allowed
```
