import courseLightImage from './assets/images/onlineLearningLight.png';
import courseDarkImage from './assets/images/onlineLearningDark.png';
import customerServiceDark from './assets/images/customerServiceDark.png';
import customerServiceLight from './assets/images/customerservicewhite.png';
import quizDarkImage from './assets/images/quizDark.png';
import quizLightImage from './assets/images/quizLight.png';
import portfolioLightImage from './assets/images/portfolioLight.png';
import portfolioDarkImage from './assets/images/portfolioDark.png';
import gameDarkImage from './assets/images/gameDark.png';
import gameLightImage from './assets/images/gameLight.png';

const logotext = "SP";
const meta = {
    title: "Sai Praneeth Veerapalli",
    description: "I'm Sai Praneeth Veerapalli, a Data Analyst specializing in Python, SQL, and data visualization, pursuing my Master's in Data Analytics Engineering at Northeastern University.",
};


const introdata = {
    title: "I’m Sai Praneeth Veerapalli",
    animated: {
        first: "I'm a Data Analyst",
        second: "Graduate student at Northeastern Univerisity",
        third: "Certifited Microsoft Power BI Data Analyst Associate",
        fourth: "Certifited Alteryx Designer Core",
    },
    description: "I'm a Data Analyst graduate student at the Northeastern University, with around 2 years of experience in Python, SQL, Alteryx, Microsoft Excel and Tableau, delivering insights and optimizing workflows. Proven success in ETL pipelines and predictive models",
};


const dataabout = {
    title: "A bit about myself",
    aboutme: "I’m a Data Analyst with nearly 2 years of experience in Python, SQL, Alteryx, Microsoft Excel, and Tableau, specializing in delivering actionable insights and optimizing workflows. My background includes building automated ETL pipelines, predictive modeling, and extensive use of data visualization platforms such as PowerBI and Tableau. I'm proficient in Python, R, SQL, C#, and have experience with databases including MySQL, MongoDB, PySpark, DynamoDB, and Snowflake. Passionate about turning complex data into strategic business solutions, I continuously seek opportunities to expand my technical skill set."
};

const education = {
    title: "Education",
    description1: "Northeastern University, Boston, MA",
    major1: "Master of Science in Data Analytics Engineering",
    year1: "2023-2024",
    description2: "BML Munjal University, Haryana, India",
    major2: "Bachelor of Technology in Electronics and Communication Engineering",
    year2: "2018-2022",
};


const worktimeline = [
    {
        jobtitle: "Data Analyst",
        where: "SourceOne Technology Solution",
        date: " Jan 2022- Dec 2022",
    },
    {
        jobtitle: "Intern Data Analyst",
        where: "SourceOne Technology Solution",
        date: " Jul 2021- Dec 2021",
    },
    {
        jobtitle: "Summer Intern",
        where: "BATX Energies",
        date: "May 2020 – Jul 2020",
    },
];


const skills = [
    {
        category: "Programming Languages",
        items: [
            { name: "Python", value: 90 },
            { name: "SQL", value: 85 },
            { name: "R", value: 80 },
            { name: "C#", value: 75 }
        ]
    },
    {
        category: "Databases",
        items: [
            { name: "MySQL", value: 85 },
            { name: "MongoDB", value: 80 },
            { name: "PySpark", value: 75 },
            { name: "DynamoDB", value: 70 },
            { name: "Snowflake", value: 70 }
        ]
    },
    {
        category: "Platforms & Tools",
        items: [
            { name: "PowerBI", value: 90 },
            { name: "Tableau", value: 85 },
            { name: "Alteryx", value: 80 },
            { name: "Microsoft Excel", value: 85 },
            { name: "Google Data Studio", value: 75 },
            { name: "AWS", value: 75 }
        ]
    },
    {
        category: "Soft Skills",
        items: [
            { name: "Customer Relationship Management (CRM)", value: 80 },
            { name: "Communication", value: 85 },
            { name: "Problem Solving", value: 85 }
        ]

    }
];



const dataportfolio = [
    {
        imgLight:customerServiceLight,
        imgDark:customerServiceDark,
        description: "Customer Support Call Analysis",
        link: "https://github.com/pranee7th",
    },
    {
        imgLight:courseLightImage,
        imgDark:customerServiceDark,
        description: "Data Pipeline Development for Eviction Data Analysis",
        link: "https://github.com/pranee7th",
    },
    {
        imgLight:courseLightImage,
        imgDark:customerServiceDark,
        description: "Automated ETL Pipeline Project",
        link: "https://github.com/pranee7th",
    }
];

const contactConfig = {
    YOUR_EMAIL: "praneeth.vsp@gmail.com",
    YOUR_FONE: "+1 (617) 259-7635",
    description: "Have a project in mind or think I could add value to your team? Feel free to reach out to me via email or by using the form below. I'd be happy to connect!",
    YOUR_SERVICE_ID: "service_2gg06hk",
    AUTO_REPLY_TEMPLATE: "template_mxm9u9e",
    ADMIN_TEMPLATE: "template_j23vwha",
    YOUR_USER_ID: "J7BgEJudH26bjWd0l",
};


const socialprofils = {
    github: "https://github.com/pranee7th",
    linkedin: "https://www.linkedin.com/in/veerapallipraneeth",
    facebook: "https://www.linkedin.com/in/veerapallipraneeth"
};

export {
    meta,
    dataabout,
    education,
    worktimeline,
    dataportfolio,
    skills,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};