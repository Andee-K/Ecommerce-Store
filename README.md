# Ecommerce Store

This project is an e-commerce store built with Next.js, TypeScript, and Zustand for state management. It uses Stripe for handling payments.

## Technologies Used

*   **Next.js:** A React framework for building web applications.
*   **TypeScript:** A superset of JavaScript that adds static typing.
*   **Zustand:** A minimalist state management library.
*   **Stripe:** A payment processing platform.
*   **Tailwind CSS:** An utility-first CSS framework.

## Features

*   **Product Listing:** Displays a list of products with images, names, descriptions, and prices.
*   **Product Details:** Shows detailed information about a specific product.
*   **Shopping Cart:** Allows users to add, remove, and manage items in their cart.
*   **Checkout:** Integrates with Stripe to process payments.
*   **State Management:** Uses Zustand to manage the cart state across the application.
*   **Search:** Allows users to search for products by name or description.
*   **Carousel:** Displays featured products in a carousel on the homepage.
*   **Responsive Design:** The application is designed to be responsive and work on different screen sizes.

## Setup Instructions

1.  **Clone the repository:**

    ```bash
    git clone <repository_url>
    ```

2.  **Install dependencies:**

    ```bash
    cd <project_directory>
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Set up environment variables:**

    Create a `.env.local` file in the root directory and add the following environment variables:

    ```
    NEXT_PUBLIC_BASE_URL=<your_base_url>
    STRIPE_SECRET_KEY=<your_stripe_secret_key>
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=<your_stripe_publishable_key>
    ```

    Replace the placeholder values with your actual values.

4.  **Run the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## File Structure

```
ecommerce-store/
├── app/
|   ├── success/
|   ├── checkout/
|   ├── products/
├── components/
├── store/
├── lib/
├── public/
├── styles/
├── README.md
```

*   `app/`: Contains the main application logic, including pages and routing.
*   `components/`: Contains reusable React components.
*   `store/`: Contains Zustand store for state management (`cart-store.ts`).
*   `lib/`: Contains utility functions, such as the Stripe integration (`stripe.ts`).
*   `public/`: Contains static assets such as images.
*   `styles/`: Contains CSS modules and global styles.
*   `README.md`: This file, providing an overview of the project.

## Stripe Integration

The project uses Stripe for payment processing. The `stripe.ts` file in the `lib` directory initializes the Stripe client.  The `checkoutAction.ts` file in the `app/checkout` directory handles the checkout process, creates a Stripe checkout session, and redirects the user to the Stripe checkout page.

## Key Components

*   **ProductCard:** Displays a product with its image, name, description, and price.
*   **ProductDetail:** Displays detailed information about a product.
*   **ProductList:** Lists all products with a search bar.
*   **Carousel:** Displays featured products in a carousel.
*   **NavBar:** The navigation bar with links to home, products, and checkout, and displays the cart count.
