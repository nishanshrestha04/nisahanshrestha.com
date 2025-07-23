export const myProjects = [
    {
        id: 1,
        title: "BanRakshak",
        description:
            "Built an AI-powered system that analyzes forest audio to detect and classify sounds like chainsaws, gunshots, and animal calls using spectrograms and deep learning models. Helps in real-time deforestation threat monitoring through acoustic surveillance.",
        subDescription: [
            "Developed a deep learning model to classify forest sounds such as chainsaws, gunshots, and animal calls for deforestation monitoring.",
            "Converted audio data into spectrograms and applied preprocessing techniques to enhance model accuracy.",
            "Trained CNN-based models using TensorFlow and Keras for real-time acoustic event classification.",
            "Built a responsive UI with React and Tailwind CSS to visualize detected sounds and classification results.",
            "Integrated sound recording and playback features for testing and validation in a forest-like environment.",
        ],
        href: "https://github.com/nishanshrestha04/BanRakshak",
        logo: "",
        image: "/assets/projects/accesories.png",
        tags: [
            {
                id: 1,
                name: "React",
                path: "/assets/logos/react.svg",
            },
            {
                id: 2,
                name: "Python",
                path: "/assets/logos/python.svg",
            },
            {
                id: 3,
                name: "TensorFlow",
                path: "/assets/logos/tensorflow.svg",
            },
            {
                id: 4,
                name: "TailwindCSS",
                path: "/assets/logos/tailwindcss.svg",
            },
        ],
    },
    {
        id: 2,
        title: "Stroke Prediction System",
        description:
            "An end-to-end MLOps project that predicts the risk of stroke using logistic regression. The system integrates data engineering, model training, experiment tracking, and deployment to ensure scalable and reliable stroke prediction.",
        subDescription: [
            "Built a logistic regression model to predict stroke risk using health-related features like age, hypertension, and BMI.",
            "Performed data preprocessing and feature engineering, addressing missing values and class imbalance.",
            "Implemented experiment tracking and model registry using MLflow for reproducibility and lifecycle management.",
            "Deployed the trained model using FastAPI, enabling real-time prediction through RESTful endpoints.",
            "Orchestrated the pipeline with Apache Airflow and used Docker to containerize services for portability.",
        ],
        href: "https://github.com/nishanshrestha04/MLOps_Project",
        logo: "",
        image: "/assets/projects/stroke.png",
        tags: [
            {
                id: 1,
                name: "Airflow",
                path: "/assets/logos/airflow.svg",
            },
            {
                id: 2,
                name: "Python",
                path: "/assets/logos/python.svg",
            },
            {
                id: 3,
                name: "MariaDB",
                path: "/assets/logos/maria.svg",
            },
            {
                id: 4,
                name: "FastAPI",
                path: "/assets/logos/fast.svg",
            },
            {
                id: 5,
                name: "Scikit-learn",
                path: "/assets/logos/sci.svg",
            },
            {
                id: 5,
                name: "Jupyter Notebook",
                path: "/assets/logos/jupyter.svg",
            },
            {
                id: 6,
                name: "Redis",
                path: "/assets/logos/redis.svg",
            },
        ],
    },
    {
        id: 3,
        title: "AI News",
        description:
            "A fully responsive static website built with HTML and CSS to deliver the latest news and articles on artificial intelligence, designed with a clean, modern interface for optimal user experience across all devices.",
        subDescription: [
            "Developed a static website using HTML and CSS to share news and articles related to artificial intelligence.",
            "Designed a clean, modern user interface focused on readability and intuitive navigation.",
            "Ensured full responsiveness across desktops, tablets, and smartphones using flexible layouts and media queries.",
            "Optimized website performance and accessibility for a smooth user experience.",
            "Curated and organized AI-related content to keep users informed and engaged with the latest trends.",
        ],
        href: "https://github.com/nishanshrestha04/Web-Development",
        logo: "",
        image: "/assets/projects/ai.png",
        tags: [
            {
                id: 1,
                name: "HTML",
                path: "/assets/logos/html5.svg",
            },
            {
                id: 2,
                name: "CSS",
                path: "/assets/logos/css3.svg",
            },
        ],
    },
    {
        id: 5,
        title: "PDF Reading Chatbot",
        description:
            "An intelligent chatbot built with LangChain that reads and understands PDF documents, enabling users to ask questions and receive accurate, context-aware answers directly from the document content.",
        subDescription: [
            "Developed a chatbot using LangChain to parse and interact with PDF documents in natural language.",
            "Integrated document loaders and text splitters to efficiently extract and manage PDF content.",
            "Implemented embedding and vector store (e.g., FAISS or Chroma) for semantic search and context retrieval.",
            "Used OpenAI or Hugging Face models to generate accurate responses based on document queries.",
            "Built a user-friendly interface for uploading PDFs and chatting with the bot in real-time.",
        ],
        href: "https://github.com/nishanshrestha04/pdf_reading_chatbot",
        logo: "",
        image: "/assets/projects/chat.png",
        tags: [
            {
                id: 1,
                name: "Python",
                path: "/assets/logos/python.svg",
            },
            {
                id: 2,
                name: "FastAPI",
                path: "/assets/logos/fast.svg",
            },
            {
                id: 3,
                name: "React",
                path: "/assets/logos/react.svg",
            },
            {
                id: 4,
                name: "LangChain",
                path: "/assets/logos/lang.svg",
            },
        ],
    },
];

export const mySocials = [
    {
        name: "Devfolio",
        href: "https://devfolio.co/@nishanshrestha",
        icon: "/assets/socials/devfolio.svg",
    },
    {
        name: "Linkedin",
        href: "https://www.linkedin.com/in/shresthanishan/",
        icon: "/assets/socials/linkedIn.svg",
    },
    {
        name: "GitHub",
        href: "https://github.com/nishanshrestha04",
        icon: "/assets/socials/github.svg",
    },
];

export const experiences = [
    {
        title: "Event Executive",
        job: "Sunway Student Representative Council",
        date: "May 2024 - Jan 2025",
        contents: [
            "Planned, organized, and executed diverse student club events, ensuring smooth operations from start to finish.",
            "Negotiated with vendors and managed logistics for venues, equipment, and catering.",
            "Collaborated with club members to align event execution with the club’s vision and goals.",
            "Handled multiple events simultaneously while resolving issues promptly under pressure.",
            "Used event management tools and creative strategies to deliver engaging, high-quality experiences.",
        ],
    },
    {
        title: "General Member",
        job: "Rotaract Club of Budhanilkantha",
        date: "2024 - Present",
        contents: [
            "Actively participated in club meetings, events, and service projects focused on community impact and personal growth.",
            "Contributed to planning and executing initiatives like community service drives, fundraisers, and skill-building events.",
            "Supported leadership teams by volunteering for activities and promoting club causes and campaigns.",
            "Fostered fellowship among members while collaborating with local organizations for greater outreach.",
            "Helped create a positive impact through consistent involvement and a commitment to service.",
        ],
    },
];
