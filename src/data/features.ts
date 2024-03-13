import web from "../assets/web.svg";
import mobile from "../assets/mobile.svg";
import privacy from "../assets/privacy.svg";
import scalability from "../assets/scalability.svg";
import database from "../assets/database.svg";
import cloud from "../assets/cloud.svg";
import maintenance from "../assets/maintenance.svg";
import api from "../assets/api.svg";

export const features = {
  it: [
    {
      name: "Sviluppo Web Personalizzato",
      description:
        "Realizzazione di applicazioni web su misura per le tue esigenze specifiche. Sviluppo full-stack che coinvolge sia tecnologie front-end (lato client) che back-end (lato server).",
      icon: web.src,
    },
    {
      name: "Responsive Design",
      description:
        "La tua applicazione web viene progettata per essere responsiva, fornendo un'esperienza di visualizzazione e interazione ottimale su un'ampia gamma di dispositivi (desktop, tablet e telefoni cellulari).",
      icon: mobile.src,
    },
    {
      name: "Sicurezza",
      description:
        "Implementazione di solide misure di sicurezza per proteggere la tua applicazione web da potenziali minacce. Vengono condotti controlli di sicurezza e implementate le migliori pratiche per garantire l'integrità dei dati e la privacy degli utenti.",
      icon: privacy.src,
    },
    {
      name: "Scalabilità",
      description:
        "La tua applicazione web viene progettata per scalare in modo efficiente man mano che la base utenti e i dati crescono. Implementazione di strategie per gestire l'aumento del traffico e il bilanciamento del carico.",
      icon: scalability.src,
    },
    {
      name: "Progettazione e gestione di database",
      description:
        "Progettazione e implementazione di strutture di database efficienti. Gestiione dei database per garantire coerenza, integrità e prestazioni dei dati.",
      icon: database.src,
    },
    {
      name: "Sviluppo API",
      description:
        "Creazione di API per consentire la comunicazione tra diversi componenti della tua applicazione web. Integrazione di API di terze parti quando necessario.",
      icon: api.src,
    },
    {
      name: "Integrazione Cloud",
      description:
        "Distribuzione di applicazioni web su piattaforme cloud come AWS o Google Cloud per scalabilità e flessibilità. Utilizzo di servizi cloud per esigenze di archiviazione, elaborazione e altre infrastrutture.",
      icon: cloud.src,
    },
    {
      name: "Manutenzione e supporto",
      description:
        "Supporto e manutenzione continui per la tua applicazione web. Risoluzione di bug e sviluppo di aggiornamenti e miglioramenti secondo necessità.",
      icon: maintenance.src,
    },
  ],
  en: [
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
  ],
};
