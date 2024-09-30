
# Savory Heladeria & Cafeteria Website

This project showcases the beauty and offerings of our heladeria through an engaging and interactive web experience. Explore images of our location and delicious food, detailed information about our heladeria, and a comprehensive menu displaying various desserts and other dishes, each accompanied by images, descriptions, and prices.

## Features

- Framework: Built with Next.js 14, ensuring performance, scalability, and server-side rendering.
- Styling: Styled with Tailwind CSS for utility-first, responsive design.
- Animations: Integrated with Framer Motion for smooth, professional animations across the site.
- Sliders: Uses Swiper JS for responsive and interactive image sliders.
- Cart System: The site includes a cart system managed globally using Zustand, allowing users to add, remove, and update products in their cart.
- Authentication: The dashboard is protected with Auth.js (formerly NextAuth.js), restricting access only to logged-in users via middleware.
- Dashboard: The dashboard allows the admin to add, edit, and delete menu items directly using server functions. This eliminates the need for API requests, leveraging Next.js's built-in server capabilities.
- Database: The project is backed by MongoDB, and database queries are managed with Mongoose.
- Form Validation: The dashboard uses Zod for validating data in forms for adding, editing, and deleting menu items.
- Checkout Page: A checkout page that allows users to send their cart and personal information directly to the pizzeria via WhatsApp for placing orders. Users can fill in their name, phone number, and address, and the system generates a message summarizing their cart for easy ordering.

## Pages and Sections

1. **Home**: Introduction and general overview of the business.
2. **Menu**: Dynamic menu section where users can view products and add items to their cart.
3. **Contact**: Contact information for the business.
4. **About Us**: Information about Las Palmas, its history, and values.
5. **Gallery**: An image gallery showcasing the shop and its products.

## Technologies Used

- Next.js 14: A React-based framework with server-side rendering and static generation.
- TypeScript: Ensures type safety and reduces runtime errors.
- Tailwind CSS: Utility-first CSS framework for fast UI development.
- Framer Motion: For adding animations and transitions.
- Swiper JS: For creating responsive and customizable sliders.
- Zustand: A minimal, fast global state management solution for the cart.
- Auth.js: Authentication handling with middleware protection for secure routes.
- MongoDB: NoSQL database management.
- Mongoose: An ODM for MongoDB that provides a schema-based solution to model application data.
- Zod: A schema declaration and validation library for ensuring correct data in forms.

## Cart Functionality

The cart system allows users to:
- Add, remove, and update products.
- Keep track of the total price.
- Store and display items dynamically across the app via Zustand's global state management.

## Admin Dashboard

The dashboard provides the following features:
- Add, edit, and delete menu items.
- Access is restricted to authenticated users using Auth.js middleware.
- All server functions are handled directly within Next.js, avoiding the need for API requests.

## Lessons Learned

Building this project for Las Palmas Pizzeria was a valuable learning experience that helped me enhance my skills in several key areas of web development. Here are the primary lessons I learned and the challenges I faced during the project:

1. Framer Motion:

- **Entrance and Exit Animations:** I practiced creating smooth entrance and exit animations, which significantly improved the user experience by making transitions more engaging.

- **Variants:** Implementing variants in Framer Motion allowed me to manage complex animations in a more organized and reusable way. This approach made it easier to maintain consistency across different components.

- **useInView Hook:** Using the useInView hook helped me trigger animations when elements entered the viewport. This was particularly useful for animating content as users scrolled through the page.

- **useScroll and useMotionValue Hooks:** These hooks enabled me to create scroll-based animations and track scroll positions. They added an interactive layer to the site, making the browsing experience more dynamic.

2. Swiper JS:

- **Module Integration:** I gained hands-on experience with integrating various Swiper JS modules such as Autoplay, EffectFade, and Parallax. This allowed me to create an engaging and visually appealing image slider for the gallery and menu sections.

- **Customization:** Customizing the Swiper components to fit the design and functionality requirements of the project was a valuable exercise in adapting third-party libraries to meet specific needs.

3. Responsive Design:

- **Tailwind CSS:** Tailwind CSS was instrumental in rapidly developing a responsive design. Its utility-first approach made it straightforward to adjust styles for different screen sizes.

- **Responsive Layouts:** Ensuring the site looked good on various devices and screen sizes was a significant part of the project. I practiced creating flexible layouts that adapt to different viewports.

4. Web Application Development:

- **Next.js and TypeScript:** Using Next.js as the framework helped me understand server-side rendering and static generation, improving the performance and scalability of the application. TypeScript enhanced my code quality by providing type safety.

- **Component-Based Architecture:** Leveraging the built-in components provided by Next.js, such as Link, Image, useRouter, and usePathname, reinforced the importance of a component-based architecture for building scalable applications. I also learned to utilize client and server components effectively.

- **Data Management:** Using MongoDB with Mongoose to manage data from the database taught me how to perform queries and handle data effectively. Additionally, I learned how to use Zod for data validation in forms.

- **Authentication:** Implementing authentication with Auth.js and middleware ensured that only logged-in users could access the dashboard, enhancing the security of the application.



## Authors

- [@JjuliSanz](https://github.com/JjuliSanz)


<p>
  <img src="public/title.svg" alt="Savory heladeria" width="400"/> 
</p>

