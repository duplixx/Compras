![Compras Logo](./assets/compras.png)

# Compras - Fullstack Ecommerce Platform

Compras is a powerful fullstack ecommerce platform built using modern technologies such as GraphQL, Strapi, Stripe for payment processing, JavaScript, and Tailwind CSS. It provides a robust and customizable solution for launching and managing online stores. This repository contains all the necessary code and configurations to set up and run Compras on your local machine or deploy it to a live server.

## Features

- **GraphQL**: Compras leverages GraphQL, a powerful query language for APIs, to provide flexible and efficient data fetching capabilities.
- **Strapi**: The backend of Compras is built using Strapi, an open-source headless CMS (Content Management System) that allows you to easily manage your products, categories, and other essential ecommerce data.
- **Stripe Integration**: Compras integrates with Stripe, a popular payment processing platform, enabling secure and seamless transactions for your customers.
- **JavaScript**: Compras is developed primarily using JavaScript, making it highly extensible and easy to work with for developers.
- **Tailwind CSS**: The frontend of Compras is styled using Tailwind CSS, a utility-first CSS framework that offers a comprehensive set of pre-built components and styling options.

## Installation

To install and run Compras locally, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/compras.git
   ```

2. Navigate to the project directory:

   ```bash
   cd compras
   ```

3. Install the dependencies using npm or yarn:

   ```bash
   npm install
   ```

4. Set up the required environment variables. Create a `.env` file in the root directory and provide the following variables:

   ```
   STRIPE_SECRET_KEY=your_stripe_secret_key
   ```

   Note: Obtain your Stripe secret key by signing up at [stripe.com](https://stripe.com) and creating a new project.

5. Start the development server:

   ```bash
   npm run dev
   ```

   This will launch both the backend and frontend servers concurrently.

6. Access the Compras platform in your browser:

   ```
   http://localhost:3000
   ```

   You should see the Compras homepage, and you can start exploring the features and customizing the platform according to your requirements.

## Deployment

To deploy Compras to a live server, you can follow these general steps:

1. Choose a hosting provider that supports Node.js applications, such as Heroku, AWS, or DigitalOcean.

2. Set up the required environment variables in your hosting provider's configuration panel, similar to the `.env` file used during local development.

3. Build the application for production:

   ```bash
   npm run build
   ```

4. Start the production server:

   ```bash
   npm start
   ```

5. Ensure that your hosting provider is configured to listen on the appropriate port (usually port 3000 by default).

6. Access your deployed Compras platform by visiting the provided domain or IP address.

For more detailed deployment instructions, refer to the documentation specific to your chosen hosting provider.

## Contributing

Contributions are welcome! If you encounter any issues, have suggestions, or want to contribute to Compras, please feel free to submit a pull request or open an issue on this repository.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

Compras was developed with the help of various open-source libraries and resources. We would like to thank the following projects:

- [GraphQL](https://graphql.org/)
- [Strapi](https://strapi.io/)
- [Stripe](https://stripe.com/)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Tailwind CSS](https://tailwindcss.com/)

We appreciate the efforts of the entire open-source community for making these technologies available.





