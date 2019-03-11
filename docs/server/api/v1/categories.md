---
id: categories
title: Categories
---

## `GET /api/v1/categories`

Index all `Categories`.

**Parameters:**

N/A

**Authorization:**

N/A

**Example Request:**

`GET /api/v1/categories`

**Example Response:**

```http
200 OK
```

```json
{
    "data": [
        {
            "id": 1,
            "name": "Education",
            "created_at": "2019-03-10 04:03:36",
            "updated_at": "2019-03-10 04:03:36"
        },
        {
            "id": 2,
            "name": "Business",
            "created_at": "2019-03-10 04:03:36",
            "updated_at": "2019-03-10 04:03:36"
        },
        {
            "id": 3,
            "name": "Dating",
            "created_at": "2019-03-10 04:03:36",
            "updated_at": "2019-03-10 04:03:36"
        },
        {
            "id": 4,
            "name": "Entertainment",
            "created_at": "2019-03-10 04:03:36",
            "updated_at": "2019-03-10 04:03:36"
        }
    ],
    "links": {
        "first": "http://127.0.0.1:8000/api/v1/categories?page=1",
        "last": "http://127.0.0.1:8000/api/v1/categories?page=1",
        "prev": null,
        "next": null
    },
    "meta": {
        "current_page": 1,
        "from": 1,
        "last_page": 1,
        "path": "http://127.0.0.1:8000/api/v1/categories",
        "per_page": 15,
        "to": 4,
        "total": 4
    }
}
```

**Error Responses:**

N/A

## `GET /api/v1/categories/{id}`

Get a `Category` by ID.

**Parameters:**

N/A

**Authorization:**

N/A

**Example Request:**

`GET /api/v1/categories/1`

**Example Response:**

```http
200 OK
```

```json
{
    "data": {
        "id": 1,
        "name": "Education",
        "created_at": "2019-03-10 04:03:36",
        "updated_at": "2019-03-10 04:03:36"
    }
}
```

**Error Responses:**

```http
404 Not Found
```

## `GET /api/v1/categories/{id}/android_apps`

Get all `AndroidApps` that belong to a `Category` by ID.

**Parameters:**

N/A

**Authorization:**

N/A

**Example Request:**

`GET /api/v1/categories/1/android_apps`

**Example Response:**

```http
200 OK
```

```json
{
    "data": [
        {
            "id": 2,
            "name": "Nolan, Weber and Kuphal",
            "version": "1.0.0",
            "description": "Non ut a ut labore et minus voluptate. Facere eligendi consequuntur voluptatem illo. Dolores eum harum aut et quo et voluptas perspiciatis.",
            "price": 0,
            "package_name": null,
            "creator_id": null,
            "pivot": {
                "category_id": 1,
                "android_app_id": 2
            },
            "created_at": {
                "date": "2019-03-11 02:20:54.000000",
                "timezone_type": 3,
                "timezone": "UTC"
            },
            "updated_at": {
                "date": "2019-03-11 02:20:54.000000",
                "timezone_type": 3,
                "timezone": "UTC"
            }
        },
        {
            "id": 4,
            "name": "Smith LLC",
            "version": "1.0.0",
            "description": "Quidem esse voluptate id officiis voluptatum magnam. Id vel iusto explicabo sint delectus ipsam. Magnam adipisci sit accusantium doloribus ut et rerum omnis.",
            "price": 42.14,
            "package_name": null,
            "creator_id": null,
            "pivot": {
                "category_id": 1,
                "android_app_id": 4
            },
            "created_at": {
                "date": "2019-03-11 02:20:54.000000",
                "timezone_type": 3,
                "timezone": "UTC"
            },
            "updated_at": {
                "date": "2019-03-11 02:20:54.000000",
                "timezone_type": 3,
                "timezone": "UTC"
            }
        }
    ],
    "links": {
        "first": "http://127.0.0.1:8000/api/v1/categories/1/android_apps?page=1",
        "last": "http://127.0.0.1:8000/api/v1/categories/1/android_apps?page=1",
        "prev": null,
        "next": null
    },
    "meta": {
        "current_page": 1,
        "from": 1,
        "last_page": 1,
        "path": "http://127.0.0.1:8000/api/v1/categories/1/android_apps",
        "per_page": 15,
        "to": 2,
        "total": 2
    }
}
```

**Error Responses:**

```http
404 Not Found
```
