Food Store App

Project Description
Food Store App is a modern food e-commerce platform built using **Next.js**, **React**, **Tailwind CSS**, and **DaisyUI** on the frontend.  
It fetches and manages data from a **Node.js + Express.js API** with **MongoDB** as the database.  
Users can browse food items ,view details and contact . The app includes mock authentication with cookies for enhanced user experience.


Install dependencies:
npm install

Run the development server:
npm run dev


Route Summary
| Route        | Description       | Access                           |
| ------------ | ----------------- | -------------------------------- |
| `/`          | Landing Page      | Public                           |
| `/login`     | Login Page        | Public                           |
| `/allFoods`  | Food List Page    | Public                           |
| `/foods/[id]`| Food Details Page | Public                           |
| `/dashboard` | Admin Page        | Protected (Logged-in admin Only) |
| `/contact`   | Contact Page      | Public                           |
| `/about`     | About Page        | Public                           |
| `/faq`       | FAQ Page          | Public                           |
| `/foods`     | Food List Page    | Public                           |



List of Implemented Features : 
Landing Page: Show featured foods, popular categories, and highlights.
Mock Authentication: Admin can log in using a hardcoded email & password stored in cookies.
Food List Page: Fetches food items from the backend API and displays them in cards with name, description, price, and image.
Food Details Page: Shows detailed information for a selected food item.
Protected : Admin dashboard
Responsive Design: Works on mobile, tablet, and desktop screens using Tailwind CSS & DaisyUI.
Contact & FAQ Pages: Users can read FAQs and reach support easily.
About Page: Displays company mission, values, and team members.



Brief Explanation of Features : 
Landing Page: Engaging UI with carousel, featured foods, categories, and CTA sections.
Authentication: Simple mock login system; cookies store login state.
Food List Page: Shows all foods fetched from backend with cards, including images, price, and description.
Food Details Page: Individual food detail view for users to read full info.
Responsive Design: Fully functional on different screen sizes.
Contact & FAQ: Helps users find answers and reach support.
About Page: Introduces company, mission, values, and team members.



Technologies Used :

Frontend:
Next.js 15/16
React.js
Tailwind CSS
DaisyUI
js-cookie
react-hot-toast

Backend:
API














This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
