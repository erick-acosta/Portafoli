import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech } from "lucide-react";

export const socialNetworks = [
  
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/erick-alexander-acosta-cavalieri-393986125/",
    },
   
  
   
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    {
        id: 5,
        title: "Home",
        icon: <Speech size={25} color="#fff" strokeWidth={1} />,
        link: "/testimonials",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Fullstack  Developer",
        subtitle: "ST DIGITAL COMPUTER",
        description: "Responsable de crear la apariencia y la funcionalidad de las interfaces de usuario de los productos. Para ello, diseño e implemento interfaces de usuario web y móviles, implemento animaciones y efectos visuales, colaboro con el equipo de desarrolladores back-end para crear nuevas API, integro diferentes tecnologías y bibliotecas, y trabajo con diseñadores y desarrolladores back-end..",
        date: "Enero 2023 ",
    },
    {
        id: 2,
        title: "Desarrollador de Fullstack",
        subtitle: "Profesional Independiente",
        description: "Como desarrollador web, soy responsable del desarrollo y mantenimiento de sitios y aplicaciones web. Para ello, diseño e implemento interfaces web y aplicaciones móviles utilizando HTML5, CSS, JavaScript y frameworks como React y Angular. También trabajo con diseñadores para crear interfaces de usuario atractivas y funcionales, y para crear prototipos y diseños.",
        date: "Nov  2020",
    },
    {
        id: 3,
        title: "Cordinador de ditribución TDC",
        subtitle: "BANCO PLAZA",
        description: "Encargado del funcionamiento y prestación de servicios de la red de agencias del banco, manejo de estadísticas del flujo de efectivo de las agencias para SUDEBAN y BCV, llevo a cabo el proceso de inducción del personal de las agencias de todos los cargos de la mismas, control y seguimiento del proceso de inducciones y capacitaciones mensualmente., control del envío de las proveedurías y materiales recibidas por las agencias.",
        date: "Mar 2018",
    },
  
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 3,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 10,
        text: "Tecnologias",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 20,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 10,
        text: "Certificaciones",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    
    {
        icon: <Pencil />,
        title: "Diseño web",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <Computer />,
        title: "Desarrollo web",
        description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
    },
    {
        icon: <Book />,
        title: "Copywriting",
        description: "Creación de contenido persuasivo y atractivo que capta la atención de tu audiencia",
    },
    {
        icon: <Rocket />,
        title: "SEO",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Congreso Médico",
        image: "/image-1.png",
        urlGithub: "https://github.com/erick-acosta",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Login Angular",
        image: "/image-2.png",
        urlGithub: "https://github.com/erick-acosta",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "Chat Bot",
        image: "/image-3.jpg",
        urlGithub: "https://github.com/erick-acosta",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "E-commerce",
        image: "/image-4.png",
        urlGithub: "https://github.com/erick-acosta",
        urlDemo: "#!",
    },
    {
        id: 5,
        title: "Webs Personales",
        image: "/image-5.jpg",
        urlGithub: "https://github.com/erick-acosta",
        urlDemo: "#!",
    },
    {
        id: 6,
        title: "Web Corporativa",
        image: "/image-6.png",
        urlGithub: "https://github.com/erick-acosta",
        urlDemo: "#!",
    },
    {
        id: 7,
        title: "Dark Web ",
        image: "/image-7.jpg",
        urlGithub: "https://github.com/erick-acosta",
        urlDemo: "#!",
    },
    {
        id: 8,
        title: "E-commerce web",
        image: "/image-8.png",
        urlGithub: "https://github.com/erick-acosta",
        urlDemo: "#!",
    }
];

export const dataTestimonials = [
    {
        id: 1,
        name: "",
        description:
            "CertiProf Remote Work Profesional",
        imageUrl: "/remote-work-professional-certification-rwpc.png",
    },
    {
        id: 2,
        name: "",
        description:
            "Scrum Foundation Professional Certification",
        imageUrl: "/scrum-foundation-professional-certification-sfpc.png",
    },
    {
        id: 3,
        name: "",
        description:
            "Cybersecurity Cisco Academy!",
        imageUrl: "/introduction-to-cybersecurity.png",
    },
    {
        id: 4,
        name: "",
        description:
            "Getting Javascript Essential Cisco",
        imageUrl: "/javascript-essentials-1.png",
    },
    {
        id: 5,
        name: "",
        description:
            "Data Analytics Essentials",
        imageUrl: "/data-analytics-essentials.png",
    },
    {
        id: 6,
        name: "",
        description:
            "Cloud Core",
        imageUrl: "/cloud-core.png",
    },
];