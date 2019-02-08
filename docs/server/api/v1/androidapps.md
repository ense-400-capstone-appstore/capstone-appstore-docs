---
id: androidapps
title: AndroidApps
---

> This page is still under construction!

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

## `GET /api/v1/android_apps`

Index all `AndroidApps`.

## `GET /api/v1/android_apps/{id}`

Get an `AndroidApp` by ID.

## `PATCH /api/v1/android_apps/{id}`

Update an existing `AndroidApp` by ID.

## `DELETE /api/v1/android_apps/{id}`

Delete an existing `AndroidApp` by ID.
