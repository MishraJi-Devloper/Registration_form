# Registration Form Project

This project implements a simple registration form using HTML, CSS, JavaScript, and Node.js with Express framework. Users can register by providing their full name, username, email, and password.

## Overview

The registration form allows users to register by providing their full name, username, email, and password. Upon successful registration, users are redirected to a success page. If registration fails due to a duplicate email, an error message is displayed.

## Technologies Used

- HTML
- CSS
- JavaScript
- Node.js
- Express.js
- MongoDB (for database)

## Setup

1. Clone the repository to your local machine:

    ```
    git clone https://github.com/MishraJi-Devloper/Registration_form.git
    ```

2. Install dependencies:

    ```
    npm install
    ```

3. Set up environment variables:

    Create a `.env` file in the root directory and add the following:

    ```
    PORT=3000
    MONGODB_USERNAME=your_mongodb_username
    MONGODB_PASSWORD=your_mongodb_password
    ```

    Replace `your_mongodb_username` and `your_mongodb_password` with your MongoDB Atlas username and password.

4. Start the server:

    ```
    npm start
    ```

## Usage

1. Navigate to `http://localhost:3000` in your web browser.
2. Fill out the registration form with your details.
3. Click the "Register" button.
4. Upon successful registration, you will be redirected to a success page.
5. If registration fails due to a duplicate email, an error message will be displayed.

## Contributing

Contributions are welcome! Please feel free to submit a pull request.

## License

This project is licensed under the MIT License.
