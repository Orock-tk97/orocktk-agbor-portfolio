export const site = {
  name: "Orocktakang Agbor",
  role: "Software Engineer & Machine Learning / AI Engineer",
  shortRole: "Software Engineer & ML / AI Engineer",
  title: "Orocktakang Agbor — Software Engineer & ML / AI Engineer",
  description:
    "Orocktakang Agbor is a software engineer and machine learning / AI engineer in Buea, Cameroon, building interpretable ML models, REST APIs and full-stack web apps.",
  email: "orocktkagbor3@gmail.com",
  location: "Buea, Cameroon",
  linkedin: "https://linkedin.com/in/orocktakang-agbor/",
  github: "#", // TODO: add real URL
  twitter: "#", // TODO: add real URL
  demo: "https://huggingface.co/spaces/orocktk-agbor/ecg-multimodel-dx",
  ogImage: "/og.png", // 1200x630 image in /public
};

export const nav = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
];

export const projects = [
  {
    title: "ECG Heart Disease Detection",
    tag: "Deep Learning",
    icon: "fa-heart-pulse",
    img: "ecg_detection.png",
    text: "PyTorch models that detect heart disease from ECG signals. Best model: Macro AUROC 0.9118.",
    href: site.demo,
  },
  {
    title: "Full-Stack MERN Apps",
    tag: "Web Development",
    icon: "fa-layer-group",
    img: "mern2.jpg",
    text: "Web apps and REST APIs built with an Agile team at Summit Tech.",
    progress: 90,
  },
  {
    title: "Credit Scoring Model",
    tag: "Fintech ML",
    icon: "fa-credit-card",
    img: "credit_score.jpg",
    text: "Explainable credit-risk scoring with XGBoost and SHAP.",
    progress: 69,
  },
  {
    title: "Fraud Detection Engine",
    tag: "Fintech ML",
    icon: "fa-shield-halved",
    img: "fraud_detection.jpg",
    text: "Flags suspicious transactions using imbalanced-data techniques.",
    progress: 60,
  },
  {
    title: "Risk Modelling Dashboard",
    tag: "Data Analysis",
    icon: "fa-chart-line",
    img: "risk_modelling.jpg",
    text: "Interactive risk views built on predictive models.",
    progress: 78,
  },
  {
    title: "ML Model Serving API",
    tag: "ML Deployment",
    icon: "fa-server",
    img: "model_serving.jpg",
    text: "A FastAPI service that serves trained models over REST.",
    progress: 84,
  },
] as {
  title: string;
  tag: string;
  icon: string;
  img: string;
  text: string;
  href?: string;
  progress?: number;
}[];

// icon = simpleicons slug, fa = Font Awesome icon (no logo available)
export const skills = [
  { n: "Python", icon: "python" },
  { n: "TensorFlow", icon: "tensorflow" },
  { n: "PyTorch", icon: "pytorch" },
  { n: "Power BI", icon: "powerbi" },
  { n: "Google Cloud", icon: "googlecloud" },
  { n: "Scikit-learn", icon: "scikitlearn" },
  { n: "XGBoost", fa: "fa-tree" },
  { n: "SHAP", fa: "fa-chart-simple" },
  { n: "NumPy", icon: "numpy" },
  { n: "Pandas", icon: "pandas" },
  { n: "Java", icon: "openjdk" },
  { n: "C / C++", icon: "cplusplus" },
  { n: "JavaScript", icon: "javascript" },
  { n: "TypeScript", icon: "typescript" },
  { n: "React", icon: "react" },
  { n: "Node.js", icon: "nodedotjs" },
  { n: "FastAPI", icon: "fastapi" },
  { n: "REST APIs", fa: "fa-plug" },
  { n: "Git", icon: "git" },
  { n: "GitHub", icon: "github", invert: true },
  { n: "Google Colab", icon: "googlecolab" },
  { n: "VS Code", fa: "fa-terminal" },
  { n: "Hugging Face", icon: "huggingface" },
  { n: "Gradio", icon: "gradio" },
] as { n: string; icon?: string; fa?: string; invert?: boolean }[];

export const timeline = [
  {
    years: "2025 – 2026",
    role: "Master's Researcher",
    org: "University of Buea",
    text: "Deep-learning research on ECG-based diagnostics.",
  },
  {
    years: "2025 – 2026",
    role: "Organiser",
    org: "Hustler Engineering",
    text: "Ran engineering events and workshops, and mentored developers.",
  },
  {
    years: "2023 – 2024",
    role: "Software Developer Intern",
    org: "Summit Tech",
    text: "Built MERN apps and REST APIs in an Agile team.",
  },
  {
    years: "2022 – 2026",
    role: "International Broadcaster",
    org: "AGCOM",
    text: "Deliver commentary to international audiences.",
  },
];

export const education = [
  {
    name: "M.Sc. Software Engineering, University of Buea",
    years: "2024 – 2026",
  },
  {
    name: "B.Eng. Software Engineering, University of Buea",
    years: "2020 – 2024",
  },
];

export const stats = [
  { v: "3+", l: "Years Exp." },
  { v: "7", l: "Projects" },
  { v: "20+", l: "Tools & Tech" },
  { v: "2", l: "Languages" },
];

export const services = [
  {
    icon: "fa-brain",
    title: "Machine Learning Models",
    text: "Predictive models from data preprocessing to evaluation, using Scikit-learn, XGBoost and SHAP for clear, explainable results.",
  },
  {
    icon: "fa-microchip",
    title: "Deep Learning",
    text: "PyTorch and TensorFlow/Keras models for signals and other complex data, including noisy and imbalanced datasets.",
  },
  {
    icon: "fa-code",
    title: "Web & API Development",
    text: "Full-stack applications with React, Node.js and FastAPI, plus RESTful APIs built to scale.",
  },
  {
    icon: "fa-chart-column",
    title: "Data Analysis",
    text: "Exploratory analysis, cleaning and visualisation with NumPy and Pandas that turn raw data into decisions.",
  },
];
