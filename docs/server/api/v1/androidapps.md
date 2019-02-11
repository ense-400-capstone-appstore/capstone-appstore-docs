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
| `price`       | `number` | ✔️       | Price with two decimal points or `0` if free. |

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
        "id": 5,
        "name": "Lorem",
        "version": "1.0.0",
        "description": "My App 2",
        "price": 0,
        "created_at": {
            "date": "2019-02-11 04:00:43.000000",
            "timezone_type": 3,
            "timezone": "UTC"
        },
        "updated_at": {
            "date": "2019-02-11 04:00:43.000000",
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
      "name": "Schumm, Oberbrunner and Barrows",
      "version": "1.0.0",
      "description": "Quaerat voluptate quos rerum ut. At autem vel vero hic quis magnam odio ab. Expedita ut totam ipsam tempore qui sint vel. Ad voluptas quia amet rerum.",
      "price": 0,
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
      "name": "Harber LLC",
      "version": "1.0.0",
      "description": "Vero et autem tenetur recusandae sunt. Sed amet et qui quisquam dolores. At dignissimos exercitationem voluptas adipisci et.",
      "price": 0,
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
      "name": "Barrows Ltd",
      "version": "1.0.0",
      "description": "Error quod voluptate ducimus ex qui repellendus cupiditate beatae. Deleniti facere alias nobis. Qui molestias iste nam enim deserunt aut. Repudiandae impedit distinctio officiis deleniti qui.",
      "price": 34.33,
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
    "first": "http:\/\/127.0.0.1:8000\/api\/v1\/android_apps?page=1",
    "last": "http:\/\/127.0.0.1:8000\/api\/v1\/android_apps?page=1",
    "prev": null,
    "next": null
  },
  "meta": {
    "current_page": 1,
    "from": 1,
    "last_page": 1,
    "path": "http:\/\/127.0.0.1:8000\/api\/v1\/android_apps",
    "per_page": 15,
    "to": 5,
    "total": 5
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
    "id": 1,
    "name": "Veum LLC",
    "version": "1.0.0",
    "description": "Et reiciendis tenetur voluptas nesciunt pariatur quam. Expedita voluptas cupiditate assumenda assumenda consequuntur ad. Itaque qui inventore est itaque. Harum a soluta iure quae non harum maiores.",
    "price": 0,
    "avatar": "public\/android_apps\/default.png",
    "created_at": {
      "date": "2019-02-10 03:57:56.000000",
      "timezone_type": 3,
      "timezone": "UTC"
    },
    "updated_at": {
      "date": "2019-02-10 03:57:56.000000",
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

## `PATCH /api/v1/android_apps/{id}`

Update an existing `AndroidApp` by ID.

**Parameters:**

| Parameter     | Type     | Required | Description                                   |
| ------------- | -------- | -------- | --------------------------------------------- |
| `name`        | `string` |          | Display name.                                 |
| `description` | `string` |          | Long description text, supports Markdown.     |
| `version`     | `string` |          | Current version.                              |
| `price`       | `float`  |          | Price with two decimal points or `0` if free. |

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
    "id": 1,
    "name": "Ipsum",
    "version": "1.0.0",
    "description": "My App",
    "price": 0,
    "created_at": {
      "date": "2019-02-11 02:55:34.000000",
      "timezone_type": 3,
      "timezone": "UTC"
    },
    "updated_at": {
      "date": "2019-02-11 04:05:50.000000",
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
404 Not Found
```

## `POST /api/v1/android_apps/{id}/avatar`

Upload a new avatar for an `AndroidApp` by ID.

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

`POST /api/v1/android_apps/1/avatar`

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

## `GET /api/v1/android_apps/{id}/avatar`

Get the raw image for the `AndroidApp's` current avatar by ID.

**Parameters:**

N/A

**Authorization:**

N/A

**Example Request:**

`GET /api/v1/android_apps/1/avatar`


**Example Response:**

```http
200 OK
```

![avatar.jpg](assets/avatar.jpg)

**Error Responses:**

N/A

## `POST /api/v1/android_apps/{id}/file`

Upload a new Android `apk` file for an `AndroidApp` by ID.

**Parameters:**

| Parameter | Type   | Required | Description            |
| --------- | ------ | -------- | ---------------------- |
| `file`    | `file` | ✔️       | The `apk` file to set. |

> **NOTE:** Set HTTP header `Content-Type: multipart/form-data`.

> **NOTE:** There are some restrictions on `file`:
>  - Must be below `100MB` in size.
>  - Must be of filetype `apk`.
>  - Must be of MIME type `apk` or `jar`.

**Authorization:**

`admin`, current `user`

**Example Request:**

`POST /api/v1/android_apps/1/file`

```http
avatar: android_app.apk
```

**Example Response:**

```http
201 Created
```

**Error Responses:**

```http
422 Unprocessable Entity
```

## `GET /api/v1/android_apps/{id}/file`

Get the Android `apk` file for the `AndroidApp` by ID.

**Parameters:**

N/A

**Authorization:**

N/A

**Example Request:**

`GET /api/v1/android_apps/1/avatar`


**Example Response:**

```http
200 OK
```

```http
[ RAW APK FILE DATA ]
```

**Error Responses:**

N/A
