# Dynamic Portfolio - Phase 1

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/risalshahed/mern-15-ostad.git
```

### Go to the Project Directory

```bash
cd mern-15-ostad
```

### Switch to the Branch

```bash
git switch 24.3.1-dynamic-portfolio-1
```

### Install Dependencies

```bash
npm install
```

### Start the Development Server

```bash
npm run dev
```

Final Professional Structure

src/
│
├── components/
│   │
│   ├── common/
│   │   ├── Container.jsx
│   │   └── SearchInput.jsx
│   │
│   ├── layout/
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   │
│   ├── home/
│   │   ├── Hero.jsx
│   │   ├── Stats.jsx
│   │   ├── FeaturedExperiences.jsx
│   │   ├── FeaturedEducations.jsx
│   │   ├── FeaturedProjects.jsx
│   │   └── Skills.jsx
│   │
│   ├── experiences/
│   │   └── ExperienceCard.jsx
│   │
│   ├── educations/
│   │   └── EducationCard.jsx
│   │
│   └── projects/
│       └── ProjectCard.jsx
│
├── context/
│   ├── PortfolioContext.jsx
│   └── ThemeContext.jsx
│
├── data/
│   ├── experiences.js
│   ├── educations.js
│   ├── projects.js
│   └── skills.js
│
├── hooks/
│   └── usePortfolioFilters.js
│
├── pages/
│   ├── Home.jsx
│   ├── Experiences.jsx
│   ├── ExperienceDetails.jsx
│   ├── Educations.jsx
│   ├── EducationDetails.jsx
│   ├── Projects.jsx
│   └── ProjectDetails.jsx
│
├── utils/
│   ├── searchItems.js
│   ├── filterItems.js
│   └── sortItems.js
│
├── App.jsx
├── main.jsx
└── index.css

*********************** STEPS ***********************
1 - 4 -> data
5 -> Import BrowserRouter /src/main.jsx
6 -> Create Home, Experiences, Educations, Projects pages in /src/pages
7 -> Setup Routes in App.jsx
8 -> Header in /src/components/layout/Header.jsx
9 -> Footer in /src/components/layout/Footer.jsx
10 -> update the Header & Footer in /src/App.jsx
11 -> Reusable "Container" Component in /src/components/common/Container.jsx
12 -> Hero in /src/components/home/Hero.jsx
13 -> Stats in /src/components/home/Stats.jsx
14 -> Stats in /src/components/experiences/EducationCard.jsx
15 -> FeaturedExperiences in /src/components/home/FeaturedExperiences.jsx
16 -> EducationCard in /src/components/educations/EducationCard.jsx
17 -> Stats in /src/components/home/FeaturedEducations.jsx
18 -> Projects in /src/components/projects/ProjectCard.jsx
19 -> FeaturedProjects in /src/components/home/FeaturedProjects.jsx
20 -> Skills Filters in /src/components/home/Skills.jsx
21 -> Complete Home Page in /src/pages/Home.jsx
22 -> Reusable Search in /src/components/common/SearchInput.jsx
23 -> Complete Home Page in /src/pages/Experiences.jsx
24 -> Add Search to /src/pages/Experiences.jsx
25 -> Add Filter to /src/pages/Experiences.jsx
26 -> Add Sort to /src/pages/Experiences.jsx