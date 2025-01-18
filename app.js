// Dynamic Project Rendering
const projects = [
    {
        name: "Tab Time Tracker",
        description: "A lightweight Chrome extension to track time spent on browser tabs.",
        link: "https://github.com/Ashwin2708/Learning-JavaScript/tree/main/Tab%20Time%20Tracker"
    },
    {
        name: "FunDable",
        description: "A full-stack decentralized crowdfunding platform based on Ethereum blockchain.",
        link: "https://github.com/Ashwin2708/FunDable"
    },
    {
        name: "Stock Market Prediction",
        description: "Python project using LSTM models for stock price prediction.",
        link: "https://colab.research.google.com/drive/1P-e1e85Wk3m19tlvRg9qj7nU4Wz7RNk5?usp=sharing"
    }
];

const projectList = document.getElementById('project-list');
projects.forEach(project => {
    const projectDiv = document.createElement('div');
    projectDiv.innerHTML = `
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">View Project</a>
    `;
    projectList.appendChild(projectDiv);
});

// Smooth Scrolling
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Floating Icons for Contact Section
const contactIcons = [
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/kumarashwin27/",
        icon: "linkedin-icon.png" // Add the actual icon file path
    },
    {
        name: "Gmail",
        link: "mailto:ashwink0027@gmail.com",
        icon: "gmail-icon.png" // Add the actual icon file path
    },
    {
        name: "GitHub",
        link: "https://github.com/Ashwin2708",
        icon: "github-icon.png" // Add the actual icon file path
    }
];

const contactSection = document.getElementById('contact');
const iconContainer = document.createElement('div');
iconContainer.style.position = 'fixed';
iconContainer.style.bottom = '20px';
iconContainer.style.right = '20px';
iconContainer.style.display = 'flex';
iconContainer.style.flexDirection = 'column';
iconContainer.style.gap = '10px';

contactIcons.forEach(icon => {
    const iconLink = document.createElement('a');
    iconLink.href = icon.link;
    iconLink.target = '_blank';
    const iconImg = document.createElement('img');
    iconImg.src = icon.icon;
    iconImg.alt = icon.name;
    iconImg.style.width = '40px';
    iconImg.style.height = '40px';
    iconImg.style.borderRadius = '50%';
    iconImg.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.3)';
    iconImg.style.cursor = 'pointer';
    iconLink.appendChild(iconImg);
    iconContainer.appendChild(iconLink);
});

document.body.appendChild(iconContainer);

// Enhanced Contact Section
const contactDetails = `
    <div style="margin-top: 2rem;">
        <h3>Feel free to reach out to me!</h3>
        <p>Whether you have a question or just want to say hi, my inbox is always open. I look forward to connecting with you!</p>
        <div style="margin-top: 1rem;">
            <a href="https://www.linkedin.com/in/kumarashwin27/" target="_blank" style="margin-right: 10px;">LinkedIn</a>
            <a href="mailto:ashwink0027@gmail.com" style="margin-right: 10px;">Email Me</a>
            <a href="https://github.com/Ashwin2708" target="_blank">GitHub</a>
        </div>
        <form style="margin-top: 1rem;">
            <label for="name">Your Name:</label><br>
            <input type="text" id="name" name="name" style="width: 100%; margin-top: 5px; margin-bottom: 10px;"><br>
            <label for="message">Your Message:</label><br>
            <textarea id="message" name="message" style="width: 100%; height: 100px; margin-top: 5px;"></textarea><br>
            <button type="submit" style="margin-top: 10px; padding: 10px 20px; background-color: #007BFF; color: #fff; border: none; cursor: pointer;">Send</button>
        </form>
    </div>
`;
contactSection.innerHTML += contactDetails;

// Experience Section with Display Cards
const experiences = [
    {
        title: "Full Stack Blockchain Development Intern",
        company: "iSteer Technologies",
        duration: "June 2023 - Sep 2023",
        description: "Designed and implemented a secure blockchain platform, reducing transaction costs by 50%. Collaborated with a team using Agile methodologies."
    },
    {
        title: "Web Development Intern",
        company: "Code Clause",
        duration: "June 2023 - July 2023",
        description: "Developed and maintained web projects using React.js, HTML, and CSS. Improved mobile usability by 30% with responsive design."
    }
];

const experienceSection = document.getElementById('experience');
const experienceList = document.createElement('div');
experienceList.style.display = 'grid';
experienceList.style.gridTemplateColumns = 'repeat(auto-fill, minmax(300px, 1fr))';
experienceList.style.gap = '1rem';

experiences.forEach(exp => {
    const expCard = document.createElement('div');
    expCard.style.border = '1px solid #ccc';
    expCard.style.padding = '1rem';
    expCard.style.background = 'linear-gradient(135deg, #e4f0f5, #d9eaf7)';
    expCard.style.borderRadius = '5px';
    expCard.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    expCard.innerHTML = `
        <h3>${exp.title}</h3>
        <h4>${exp.company}</h4>
        <p><strong>${exp.duration}</strong></p>
        <p>${exp.description}</p>
    `;
    experienceList.appendChild(expCard);
});

experienceSection.appendChild(experienceList);

