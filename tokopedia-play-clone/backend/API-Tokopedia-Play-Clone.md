# Video
* Video object
```json
{
  id: objectId
  urlImageThumbnail: string
  products: array
}
```
**GET /videos**
----
  Returns all videos in the system.
* **URL Params**  
  None
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
  "videos": [
    {
      "urlImageThumbnail": "https://example.com/thumbnail.jpg",
      "products": [
        {
          "linkProduct": "https://example.com/product1",
          "title": "Product 1",
          "price": 19.99
        },
        {
          "linkProduct": "https://example.com/product2",
          "title": "Product 2",
          "price": 29.99
        }
      ]
    },
    // More videos...
  ]
}

```

**GET /video/:id**
----
  Returns the specified video.
* **URL Params**  
  *Required:* `id=[string]`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
* **Code:** 200  
  **Content:**  `{ <video_object> }` 
* **Error Response:**  
  **Code:** 404  
  **Content:** `{ message: error.message }`  

**POST /video**
----
  Creates a new Video and returns the new object.
* **URL Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Data Params**  
```
 {
  "urlImageThumbnail": "https://example.com/thumbnail.jpg",
  "products": [
    {
      "linkProduct": "https://example.com/product1",
      "title": "Product 1",
      "price": 19.99
    },
    // More products...
  ]
}

```
* **Success Response:**  
* **Code:** 200  
  **Content:**
```
{
  "urlImageThumbnail": "https://example.com/thumbnail.jpg",
  "products": [
    {
      "linkProduct": "https://example.com/product1",
      "title": "Product 1",
      "price": 19.99
    },
    // More products...
  ]
}

```

**PATCH /video/:id**
----
  Updates fields on the specified video and returns the updated object.
* **URL Params**  
  *Required:* `id=[string]`
* **Data Params**  
```
{
  "urlImageThumbnail": "https://example.com/new_thumbnail.jpg",
  "products": [
    {
      "linkProduct": "https://example.com/new_product1",
      "title": "New Product 1",
      "price": 24.99
    },
    // More products...
  ]
}

```
* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
* **Code:** 200  
  **Content:**  
```
{
  "urlImageThumbnail": "https://example.com/new_thumbnail.jpg",
  "products": [
    {
      "linkProduct": "https://example.com/new_product1",
      "title": "New Product 1",
      "price": 24.99
    },
    // More products...
  ]
}
```
* **Error Response:**  
  * **Code:** 404
  **Content:** `{ message: error.message }`  

**DELETE /video/:id**
----
  Deletes the specified video.
* **URL Params**  
  *Required:* `id=[string]`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
  * **Code:** 204 
* **Error Response:**  
  * **Code:** 404  
  **Content:** `{ message: error.message }`  

# Products
* Product object
```json
{
  id: objectId
  title: string
  price: float
}
```
**GET /products/videoId**
----
  Returns all products in the specified video.
* **URL Params**  
  *Required:* `videoId=[string]`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
* **Code:** 200  
  **Content:**  
```
{
    "products": [
        {
            "_id": "64c1264d49a4811254a59f41",
            "linkProduct": "xxxx",
            "title": "yyyyyyy",
            "price": 2133123
        }
    ]
}
``` 
# Comments
* Comment object
```json
{
  id: objectId
  username: string
  comment: string
  videoId: objectId
}
```

**POST /comment/:videoId**
----
  Adds a new comment to a specific video.
* **URL Params**  
  *Required:* `videoId=[string]`
* **Headers**  
  Content-Type: application/json  
* **Data Params**  
```
 {
  "username": "john_doe",
  "comment": "Great video! Thanks for sharing."
 }
```
* **Success Response:**  
* **Code:** 200  
  **Content:** `{ message : "Success" }`
* **Error Response:**  
  **Code:** 404  
  **Content:** `{ message : "Fail" }` 

**GET /comments/:videoId**
----
  Returns all comments for a specific video
* **URL Params**  
  *Required:* `videoId=[string]`
* **Headers**  
  Content-Type: application/json  
* **Data Params**  
  None
* **Success Response:**  
* **Code:** 200  
  **Content:**
```
{
  "comments": [
    {
      "username": "john_doe",
      "comment": "Great video! Thanks for sharing.",
      "createdAt": "2023-07-26T12:34:56.789Z",
      "updatedAt": "2023-07-26T12:34:56.789Z"
    },
    // More comments...
  ]
}

```