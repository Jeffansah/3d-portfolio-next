import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  materialui,
  chakraui,
  nodejs,
  nextjs,
  jquery,
  mongodb,
  firebase,
  wordpress,
  git,
  figma,
  docker,
  meta,
  starbucks,
  documatic,
  neocardinal,
  tesla,
  shopify,
  carrent,
  jobit,
  threejs,
  mediaverse,
  travel,
  urbanhub,
  crypto,
  nikeshoe,
  shope,
  prisma,
  polaroid,
  shadcn,
  globechat,
  asanka,
  resortbooking,
  cleaning,
  thelightveil,
  goldmansachs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React",
    icon: web,
  },
  {
    title: "Next.js",
    icon: backend,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "Typescript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next.js",
    icon: nextjs,
  },

  {
    name: "Node JS",
    icon: nodejs,
  },

  {
    name: "Git",
    icon: git,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Prisma",
    icon: prisma,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material UI",
    icon: materialui,
  },
  {
    name: "Shadcn-ui",
    icon: shadcn,
  },

  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Wordpress",
    icon: wordpress,
  },
];

const experiences = [
  {
    title: "Full Stack Engineer",
    company_name: "Goldman Sachs",
    icon: goldmansachs,
    iconBg: "#383E56",
    date: "September 2024 - Present",
    points: [
      "Designed, built, and maintained a centralized dashboard application leveraging React, a firm-specific UITK, Spring Boot, and MongoDB to monitor and track risk instances and vulnerabilities. Delivered real-time insights to stakeholders, reducing the average risk remediation time by 40%.",
      "Played a key role in migrating legacy product families to standardized project templates aligned with the firm’s security and development best practices, improving application maintainability, reducing release cycle times, and minimizing manual intervention in build processes by 30%.",
      "Collaborated with cross-functional teams across 25+ firmwide applications to implement advanced risk remediation strategies, such as refining vulnerability prioritization processes and enhancing incident response workflows. Achieved a 45% reduction in the allocated time for completing remediation tasks, enabling teams to focus on other affected applications and begin the next remediation cycle ahead of schedule.",
      "Partnered with the AppDev team to resolve complex issues with Ant build scripts, including diagnosing and fixing intricate classpath misconfigurations that caused critical build failures. Cleared over 250 findings by addressing missing dependencies, resolving conflicting library versions, and reworking build logic, restoring reliable deployment workflows.",
    ],
  },
  {
    title: "Front End Developer",
    company_name: "NeoCardinal Limited",
    icon: neocardinal,
    iconBg: "#E6DEDD",
    date: "April 2021 - December 2023",
    points: [
      "Built advanced data fetching and querying methods using React Query by Tanstack, optimizing API requests and data caching, resulting in a 50% reduction in network latency and an 85% increase in data loading speed.",
      "Implemented revamped UI strategy using Tailwind CSS and lightweight UI kits, reducing CSS bundle size by 60% and enhancing maintainability.",
      "Utilized Next.js’s server-side rendering (SSR) and static site generation (SSG) capabilities to improve SEO, resulting in a 3x increase in organic traffic.",
      "Collaborated on microservice architecture using Docker and Kubernetes, leading to a 30% reduction in release cycle durations and enabling faster releases and updates.",
    ],
  },
  {
    title: "Front End Engineer",
    company_name: "Documatic",
    icon: documatic,
    iconBg: "#383E56",
    date: "May 2022 - August 2022",
    points: [
      "Optimized bundle size and runtime performance of flagship landing page using Next.js server-side capabilities, resulting in a 60% improvement in load times and reduced churn.",
      "Built and maintained AI-powered engine using TypeScript to analyze and document over 30 codebases, enhancing software development team efficiency and boosting productivity.",
      "Utilized cloud-based technologies including S3, EC2, Lambda, and IAM, optimizing system performance by 25% and enhancing security measures.",
      "Designed and executed 40+ end-to-end Cypress tests, identifying critical performance bottlenecks and ensuring software reliability, resulting in a 20% increase in the software’s capacity to handle concurrent users without performance degradation.",
      "Contributed to agile development, delivering over 15 feature enhancements prioritizing improved user experiences, system performance, and overall software efficiency.",
    ],
  },
];

const projects = [
  {
    name: "The APT Stays",
    description:
      "The APT Stays is a luxurious hotel,resort, cabin and villa booking platform that offers a wide range of accommodations in exotic destinations worldwide. Our platform is designed to provide you with a seamless booking experience, featuring a user-friendly interface, secure payment options, and real-time availability updates. Whether you're planning a romantic getaway or a family vacation, The APT Stays ensures a hassle-free booking process, allowing you to discover and reserve your dream stay with ease.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "shadcn-ui",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "pink-text-gradient",
      },
    ],
    image: resortbooking,
    source_code_link: "https://github.com/Jeffansah/The_Apt_Stays.git",
    live_link: "https://apt-stays.vercel.app/",
  },
  {
    name: "The Light Veil",
    description:
      "Landing page of a premier lighting solutions company specializing in creating captivating visual experiences for events, concerts, weddings, and more. With cutting-edge technology and a passion for innovation, The Light Veil transforms venues into breathtaking spaces, ensuring unforgettable moments. From dynamic stage lighting to ambient designs, their team tailors solutions to meet the unique needs of every occasion.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "elementor",
        color: "green-text-gradient",
      },
      {
        name: "yoastseo",
        color: "pink-text-gradient",
      },
    ],
    image: thelightveil,
    source_code_link: "#",
    live_link: "https://thelightveil.info",
  },
  {
    name: "Mop Ventures",
    description:
      "Elevate your environment with our professional cleaning services. Our expertly crafted website, developed using WordPress and Elementor, seamlessly presents our range of services with precision and clarity. Navigate with ease to access comprehensive descriptions of our cleaning solutions, tailored to meet the needs of diverse spaces and clients. Our user-friendly interface ensures that all pertinent information is readily available, allowing you to make informed decisions about our services.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "elementor",
        color: "green-text-gradient",
      },
      {
        name: "yoastseo",
        color: "pink-text-gradient",
      },
    ],
    image: cleaning,
    source_code_link: "#",
    live_link: "https://mopventures.com",
  },
  {
    name: "Globe.chat",
    description:
      "Global.chat: Your passport to effortless global communication. Seamlessly connect with people worldwide using our multilingual Saas chat application, thanks to cutting-edge technology in Next.js13 and Shadcn-UI. Enjoy real-time language translation, user-friendly design, and robust security, leveraging the power of NextAuth and firebase rules. Plus, end-to-end data management with Firestore and exclusive pro features for subscribers through secure stripe payments!",
    tags: [
      {
        name: "nextjs13",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "zustand",
        color: "pink-text-gradient",
      },
    ],
    image: globechat,
    source_code_link: "https://github.com/Jeffansah/globe-chat-app",
    live_link: "https://globe-chat.vercel.app/",
  },
  {
    name: "AsankaSend",
    description:
      "A gateway to financial empowerment for the African diaspora. Our intuitive platform offers secure money transfers, comprehensive savings, and investment services, tailored for those supporting families in Africa. Embrace a world of financial possibilities with AsankaSend, where every transaction is a step towards community growth and prosperity.",
    tags: [
      {
        name: "elementor",
        color: "blue-text-gradient",
      },
      {
        name: "ui-core",
        color: "green-text-gradient",
      },
      {
        name: "element-pack",
        color: "pink-text-gradient",
      },
    ],
    image: asanka,
    source_code_link: "#",
    live_link: "https://asankasend.com/",
  },
  {
    name: "Shop-E",
    description:
      "Shop-E is your one-stop destination for online shopping, offering a vast selection of products and a seamless shopping experience. Powered by the cutting-edge Next.js 13, Shop-E demonstrates mastery in database management by harnessing the full potential of Prisma and Supabase. It seamlessly integrates Stripe for secure payments and leverages Vercel for effortless server deployment. Featuring user authentication, robust search capabilities, a convenient shopping cart, and a secure checkout process, Shop-E sets the standard for the future of e-commerce.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "prisma",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "pink-text-gradient",
      },
    ],
    image: shope,
    source_code_link: "https://github.com/Jeffansah/Shop-E",
    live_link: "https://shop-e-io.vercel.app/",
  },
  {
    name: "Urban Hub",
    description:
      "Urban Hub redefines your travel experience by offering a diverse selection of accommodations in cities across the globe. Our platform is designed to provide you with effortless booking and access to a wide range of stays. What sets us apart is our innovative RESTful API, meticulously crafted to manage, store, and display stays with precision. Whether you're seeking a cozy apartment or a luxurious hotel, Urban Hub simplifies your travel planning. Discover, book, and explore hassle-free, all within a single, user-friendly platform.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "tailwind-css",
        color: "pink-text-gradient",
      },
    ],
    image: urbanhub,
    source_code_link: "https://github.com/Jeffansah/urban-hub",
    live_link: "https://urban-hub.vercel.app/",
  },
  {
    name: "Pixibee",
    description:
      "Pixibee is a cutting-edge cloud image storing application built with Next.js and TypeScript. It leverages the power of Cloudinary for secure and efficient photo storage and updates. The user interface is crafted with the beautiful Shadcn UI library, providing a seamless and visually stunning experience. Pixibee goes beyond standard image storage by offering advanced image editing capabilities, including AI generative fill. With Pixibee, you can securely store, manage, and enhance your image collection with ease.",
    tags: [
      {
        name: "cloudinary",
        color: "blue-text-gradient",
      },
      {
        name: "shadcn-ui",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: polaroid,
    source_code_link: "https://github.com/Jeffansah/Pixibee",
    live_link: "https://pixibee.vercel.app/",
  },
  {
    name: "Travel Buddy",
    description:
      " This is a dynamic app that seamlessly combines the power of Google Maps API and geolocation technology to offer you an immersive experience in finding nearby attractions, restaurants, and hotels. With real-time updates and an intuitive interface, Travel Buddy empowers you to effortlessly explore your surroundings, whether you're in your hometown or traveling to new destinations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "google-maps-api",
        color: "green-text-gradient",
      },
      {
        name: "geolocation",
        color: "pink-text-gradient",
      },
    ],
    image: travel,
    source_code_link: "https://github.com/Jeffansah/Travel-buddy",
    live_link: "https://travel-buddy-o.netlify.app/",
  },
  {
    name: "Mediaverse",
    description:
      "Mediaverse is a cutting-edge app that harnesses the power of YouTube's API to offer a comprehensive collection of videos, carefully categorized for a seamless streaming experience. With Mediaverse, users can effortlessly explore and access a diverse range of content, thoughtfully organized into various genres and themes. From entertainment and education to niche interests, Mediaverse ensures a personalized streaming journey, enabling users to delve into their preferred media seamlessly. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
    ],
    image: mediaverse,
    source_code_link: "https://github.com/Jeffansah/Mediaverse-Streaming-App",
    live_link: "https://mediaverse.netlify.app",
  },
  {
    name: "NikeShop",
    description:
      "NikeShop is a sleek landing page featuring a collection of Nike shoe brands and captivating advertisements. With a clean, modern interface, users can effortlessly explore various shoe models and discover the latest offerings from Nike. Whether you're a sports enthusiast or a fashion-conscious individual, NikeShop provides a delightful browsing experience to satisfy your footwear cravings.",
    tags: [
      {
        name: "vite",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind-css",
        color: "green-text-gradient",
      },
      {
        name: "reactjs",
        color: "pink-text-gradient",
      },
    ],
    image: nikeshoe,
    source_code_link: "https://github.com/Jeffansah/nikeshop",
    live_link: "https://nikeshop-e.vercel.app",
  },
  {
    name: "Solaris",
    description:
      "Solaris is an advanced cryptocurrency platform that presents a comprehensive overview of various cryptocurrencies and their performance in the market. With a seamless interface, Solaris empowers users to filter through an array of digital currencies, accessing real-time stats and historical data across different timeframes, including years, months, weeks, and days. Whether you're tracking the trajectory of established tokens or exploring emerging coins, Solaris ensures a user-friendly experience that simplifies crypto analysis and aids informed decision-making.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "redux-toolkit",
        color: "green-text-gradient",
      },
      {
        name: "ant-design",
        color: "pink-text-gradient",
      },
    ],
    image: crypto,
    source_code_link: "https://github.com/Jeffansah/Solaris-Crypto-App",
    live_link: "https://solaris-o.netlify.app/",
  },
];

export { services, technologies, experiences, projects };
