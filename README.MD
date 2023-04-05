Complete News/Blog API using NodeJS (Express), MongoDB with Swagger

In this repo, we develop the REST API with the following features:

Authentication and authorization using PassportJS and JWT
Model validations using express-validator
Data modeling and schema construction using Mongoose
Categories, stories, videos and comments CRUD and authorized or protected routes
Swagger documentation with authentication and image uploading using swagger-autogen
Emails sending, data pagination, rate limiting, and image uploading.
In the four-part tutorial series, we will develop end-to-end news or blog application comprising of a REST API, an Admin panel, a frontend website, and Android and iOS mobile applications using NodeJS, Express, MongoDB, ReactJS and React Native as follows:

Part 1: Complete News/Blog API using NodeJS (Express), MongoDB with Swagger (this repo)
Part 2: Develop a complete Admin Dashboard for News and Blog Site using ReactJS and Ant Design (coming soon)
Part 3: Develop a complete News and Blog Mobile App for Android and iOS using React Native, UI Kitten, and Expo (coming soon)
Part 4: Develop a complete News and Blog Website using ReactJS and Bootstrap (coming soon)

Requirements

# clone it

git clone https://github.com/olaobey
cd ExpressNewsApi

# Make it your own

rm -rf .git && git init && npm init

# Install dependencies using Yarn

yarn

# Start development server & swagger

yarn start-gendoc

Swagger documentation (UI)

http://localhost:5000/doc
