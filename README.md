
# TastyTracks - A Delicious Journey in Culinary Exploration

Tasty Track is a powerful web application crafted with the MERN stack and powered by Sequelize with MySQL. This project is geared towards providing users with a streamlined experience in managing and discovering culinary delights. It excels in CRUD operations, allowing users to seamlessly Create, Read, Update, and Delete restaurant information.



### The project leveraged the following technologies and libraries:

- Frontend: React, Ant Design, Formik, Yup
- Backend: Node.js, Express, Sequelize, Cloudinary, Axios
- Database: MySQL
- Other tools: SweetAlert2, Tailwind CSS, Vite
- State management: React Context API
- Routing: React Router
- Form validation: Yup
- Image upload: Multer, Multer-storage-cloudinary.
## API Reference

###  Upload Restaurants

Upload a new restaurant.

```http
  POST /restaurants
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `data` | `object` | Required. Restaurant data to be uploaded. |
| `headers` | `object` |Required. Headers for the request. |

### Get All Restaurants

Get a list of all restaurants.

```http
 GET /restaurants
```

### Delete Restaurant

Delete a restaurant by ID.

```http
 DELETE /restaurants/${id}
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | Required. Id of restaurant. |

### Update Restaurant

Update a restaurant by ID.

```http
 PUT /restaurants/${id}
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | 	Required. Id of restaurant. |
| `data` | `object` | Required. Updated restaurant data. |


## Conclusion


Tasty Track, a dynamic MERN stack project, redefines restaurant management with seamless CRUD operations, cloud-based image uploads via Cloudinary, and responsive design. Leveraging technologies like React, Ant Design, and Sequelize, Tasty Track offers an intuitive user interface for efficient restaurant data handling. The project showcases a commitment to modern web development, providing a delightful user experience for restaurant enthusiasts.

