import web from "../assets/web.svg";
import mobile from "../assets/mobile.svg";
import privacy from "../assets/privacy.svg";
import scalability from "../assets/scalability.svg";
import database from "../assets/database.svg";
import cloud from "../assets/cloud.svg";
import maintenance from "../assets/maintenance.svg";
import api from "../assets/api.svg";

export const features = [
  {
    name: "Custom Web Development",
    description:
      "Building web applications tailored to your specific requirements. Full-stack development involving both front-end (client-side) and back-end (server-side) technologies.",
    icon: web.src,
  },
  {
    name: "Responsive Design",
    description:
      "Ensuring that your web application is designed to be responsive, providing an optimal viewing and interaction experience across a wide range of devices (desktops, tablets, and mobile phones).",
    icon: mobile.src,
  },
  {
    name: "Security",
    description:
      "Implementing robust security measures to protect your web application from potential threats. Conducting security audits and implementing best practices to ensure data integrity and user privacy.",
    icon: privacy.src,
  },
  {
    name: "Scalability",
    description:
      "Designing your web application to scale efficiently as your user base and data grow. Implementing strategies to handle increased traffic and load balancing.",
    icon: scalability.src,
  },
  {
    name: "Database Design and Management",
    description:
      "Designing and implementing an efficient database structure. Managing databases to ensure data consistency, integrity, and performance.",
    icon: database.src,
  },
  {
    name: "API Development",
    description:
      "Creating APIs to enable communication between different components of your web application. Integrating third-party APIs when necessary.",
    icon: api.src,
  },
  {
    name: "Cloud Integration",
    description:
      "Deploying web applications on cloud platforms such as AWS or Google Cloud for scalability and flexibility. Utilizing cloud services for storage, computing, and other infrastructure needs.",
    icon: cloud.src,
  },
  {
    name: "Maintenance and Support",
    description:
      "Providing ongoing support and maintenance for your web application. Addressing bugs, updates, and enhancements as needed.",
    icon: maintenance.src,
  },
];
