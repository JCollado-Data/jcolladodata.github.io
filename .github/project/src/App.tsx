import React, { useState } from 'react';
import { 
  Database, 
  Brain, 
  LineChart, 
  Code2, 
  Github, 
  Linkedin, 
  Mail,
  ChevronDown,
  FileDown,
  Award,
  Briefcase,
  Building2,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Shield,
  Medal,
  MapPin,
  X,
  ExternalLink,
  GitBranch,
  Play,
  Users
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="min-h-screen flex flex-col items-center justify-center relative bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-2">
            Javier Collado
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-600 mb-6">
            Data Scientist & ML Engineer
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Transforming complex data into actionable insights and building intelligent solutions
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <a 
              href="https://github.com/JCollado-Data" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/javierc-datasci" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:jcollado.data@gmail.com"
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <a 
            href="/path-to-your-resume.pdf" 
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            <FileDown className="w-5 h-5" />
            Download Resume
          </a>
        </div>
        <ChevronDown className="w-6 h-6 absolute bottom-8 animate-bounce text-gray-600" />
      </header>

      {/* Skills Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">Core Competencies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SkillCard 
              icon={<Database className="w-8 h-8" />}
              title="Data Engineering"
              description="ETL pipelines, data warehousing, and big data technologies"
            />
            <SkillCard 
              icon={<Brain className="w-8 h-8" />}
              title="Machine Learning"
              description="Predictive modeling, deep learning, and NLP"
            />
            <SkillCard 
              icon={<LineChart className="w-8 h-8" />}
              title="Data Analysis"
              description="Statistical analysis, visualization, and reporting"
            />
            <SkillCard 
              icon={<Code2 className="w-8 h-8" />}
              title="Programming"
              description="Python, R, SQL, and cloud platforms"
            />
          </div>
        </div>
      </section>

      {/* Experience Sections */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Professional Experience */}
            <div>
              <h2 className="text-2xl font-bold text-center mb-2 text-white">Professional Experience</h2>
              <p className="text-gray-300 text-center mb-6 text-sm">
                Data Science & Machine Learning
              </p>
              <ExperienceCarousel 
                experiences={[
                  {
                    title: "Senior Data Scientist",
                    company: "Tech Innovation Corp",
                    period: "2022 - Present",
                    location: "San Francisco, CA",
                    description: "Leading ML model development for customer behavior prediction.",
                    achievements: [
                      "40% increase in customer retention",
                      "60% faster model deployment",
                      "25% improved model accuracy"
                    ]
                  },
                  {
                    title: "Machine Learning Engineer",
                    company: "Data Dynamics Ltd",
                    period: "2020 - 2022",
                    location: "Boston, MA",
                    description: "Developed ML solutions for financial services.",
                    achievements: [
                      "75% reduction in fraud",
                      "40% faster inference time",
                      "Automated performance monitoring"
                    ]
                  },
                  {
                    title: "Data Scientist",
                    company: "Analytics Innovate",
                    period: "2018 - 2020",
                    location: "New York, NY",
                    description: "Built predictive models for retail clients.",
                    achievements: [
                      "35% increase in marketing ROI",
                      "25% higher conversion rate",
                      "Real-time metrics tracking"
                    ]
                  }
                ]}
                compact={true}
              />
            </div>

            {/* Military Experience */}
            <div>
              <h2 className="text-2xl font-bold text-center mb-2 text-white">Military Service</h2>
              <p className="text-gray-300 text-center mb-6 text-sm">
                United States Marine Corps Veteran
              </p>
              <ExperienceCarousel 
                experiences={[
                  {
                    title: "Infantry Squad Leader",
                    company: "United States Marine Corps",
                    period: "2014 - 2018",
                    location: "Camp Pendleton, CA",
                    description: "Led a 13-person infantry squad in combat operations and tactical planning.",
                    achievements: [
                      "Navy and Marine Corps Achievement Medal recipient",
                      "3 successful overseas deployments",
                      "Trained 20+ Marines in combat tactics"
                    ],
                    isMilitary: true
                  },
                  {
                    title: "Combat Instructor",
                    company: "United States Marine Corps",
                    period: "2016 - 2017",
                    location: "Quantico, VA",
                    description: "Selected instructor for new Marine Corps officers.",
                    achievements: [
                      "Trained 200+ officer candidates",
                      "Instructor of the Quarter",
                      "Developed new training protocols"
                    ],
                    isMilitary: true
                  }
                ]} 
                theme="military"
                compact={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Certifications</h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Professional certifications and credentials in data science and machine learning
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CertificateCard 
              title="AWS Machine Learning Specialty"
              issuer="Amazon Web Services"
              date="2024"
              image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
              link="#"
            />
            <CertificateCard 
              title="TensorFlow Developer Certificate"
              issuer="Google"
              date="2023"
              image="https://images.unsplash.com/photo-1488229297570-58520851e868?auto=format&fit=crop&q=80&w=800"
              link="#"
            />
            <CertificateCard 
              title="Deep Learning Specialization"
              issuer="DeepLearning.AI"
              date="2023"
              image="https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=800"
              link="#"
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Featured Projects</h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            A collection of data science projects showcasing expertise in machine learning, deep learning, and data analytics
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard 
              title="Predictive Analytics Dashboard"
              description="Built an end-to-end ML pipeline for real-time prediction of customer churn with 92% accuracy. Implemented automated retraining pipeline and A/B testing framework."
              image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
              tags={['Python', 'TensorFlow', 'AWS', 'MLflow']}
              link="#"
            />
            <ProjectCard 
              title="NLP Text Classification"
              description="Developed a BERT-based multi-label classification system for customer support tickets, reducing response time by 45% and improving routing accuracy to 89%."
              image="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=800"
              tags={['PyTorch', 'BERT', 'Flask', 'Docker']}
              link="#"
            />
            <ProjectCard 
              title="Time Series Forecasting"
              description="Created an ensemble forecasting model for retail sales prediction, combining Prophet, LSTM, and traditional statistical methods for 30% improved accuracy."
              image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
              tags={['Prophet', 'Pandas', 'Plotly', 'LSTM']}
              link="#"
            />
            <ProjectCard 
              title="Computer Vision Pipeline"
              description="Implemented a real-time object detection system for manufacturing quality control, reducing defect escape rate by 75% using YOLOv5 and custom post-processing."
              image="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800"
              tags={['PyTorch', 'OpenCV', 'CUDA', 'YOLOv5']}
              link="#"
            />
            <ProjectCard 
              title="Recommendation Engine"
              description="Built a hybrid recommendation system combining collaborative filtering and content-based approaches, increasing user engagement by 28% and conversion by 15%."
              image="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&q=80&w=800"
              tags={['Spark', 'scikit-learn', 'Redis', 'FastAPI']}
              link="#"
            />
            <ProjectCard 
              title="Anomaly Detection System"
              description="Developed an unsupervised anomaly detection system for network security, identifying previously unknown attack patterns with 96% precision."
              image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800"
              tags={['Isolation Forest', 'Kafka', 'ELK Stack']}
              link="#"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function SkillCard({ icon, title, description }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function ExperienceCarousel({ experiences, theme = 'default', compact = false }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? experiences.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === experiences.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentExperience = experiences[currentIndex];
  const isMilitary = theme === 'military';

  return (
    <div className="relative">
      <div className={`${isMilitary ? 'bg-gray-800 border border-gray-700' : 'bg-gray-800 border border-gray-700'} rounded-lg shadow-sm ${compact ? 'p-4' : 'p-8'}`}>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
          <div>
            <h3 className={`text-lg font-bold text-white mb-1`}>
              {currentExperience.title}
            </h3>
            <div className={`flex items-center gap-2 text-gray-300 mb-1`}>
              {isMilitary ? <Shield className="w-4 h-4" /> : <Building2 className="w-4 h-4" />}
              <span className="text-sm">{currentExperience.company}</span>
            </div>
          </div>
          <div className={`flex flex-col items-start md:items-end text-gray-300`}>
            <div className="flex items-center gap-2 mb-1">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">{currentExperience.period}</span>
            </div>
            <div className="flex items-center gap-2">
              {isMilitary ? <MapPin className="w-4 h-4" /> : <Briefcase className="w-4 h-4" />}
              <span className="text-sm">{currentExperience.location}</span>
            </div>
          </div>
        </div>
        <p className={`text-gray-300 text-sm mb-2`}>
          {currentExperience.description}
        </p>
        <div>
          <h4 className={`font-medium text-white text-sm mb-1`}>
            {isMilitary ? 'Achievements & Commendations:' : 'Key Achievements:'}
          </h4>
          <ul className="list-disc list-inside space-y-0.5">
            {currentExperience.achievements.map((achievement, index) => (
              <li key={index} className="text-gray-300 text-sm">
                {achievement}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button 
        onClick={goToPrevious}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 bg-gray-800 text-gray-300 hover:text-white rounded-full p-1.5 shadow-md hover:shadow-lg transition-shadow"
        aria-label="Previous experience"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      <button 
        onClick={goToNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 bg-gray-800 text-gray-300 hover:text-white rounded-full p-1.5 shadow-md hover:shadow-lg transition-shadow"
        aria-label="Next experience"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-1.5 mt-3">
        {experiences.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-1.5 h-1.5 rounded-full transition-colors ${
              index === currentIndex 
                ? 'bg-blue-400'
                : 'bg-gray-600'
            }`}
            aria-label={`Go to experience ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function CertificateCard({ title, issuer, date, image, link }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div 
        onClick={() => setIsModalOpen(true)}
        className="block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 cursor-pointer"
      >
        <div className="relative h-48">
          <img src={image} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
            <p className="text-white/90 text-sm">{issuer}</p>
          </div>
        </div>
        <div className="p-4 flex justify-between items-center">
          <div className="flex items-center gap-2 text-blue-600">
            <Award className="w-5 h-5" />
            <span className="text-sm font-medium">View Certificate</span>
          </div>
          <span className="text-sm text-gray-500">{date}</span>
        </div>
      </div>

      {/* Certificate Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-4xl bg-white rounded-lg shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
                <p className="text-gray-600 text-sm">{issuer} • {date}</p>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            
            {/* Modal Content */}
            <div className="p-4">
              <div className="relative aspect-[16/9] w-full">
                <img 
                  src={image} 
                  alt={title} 
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              
              {/* Certificate Details */}
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Credential ID: {Math.random().toString(36).substring(2, 15).toUpperCase()}</span>
                </div>
                <p className="text-gray-600">
                  This certificate verifies the completion of the {title} program, demonstrating proficiency in advanced concepts and practical applications.
                </p>
                {link && (
                  <a 
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Verify Certificate
                    <ChevronRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function ProjectCard({ title, description, image, tags, link }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projectDetails = {
    overview: "This project showcases the implementation of advanced machine learning techniques to solve real-world problems. It demonstrates both technical expertise and practical application.",
    challenges: [
      "Handling large-scale data processing efficiently",
      "Implementing real-time prediction capabilities",
      "Optimizing model performance for production",
    ],
    technologies: {
      frontend: ["React", "TypeScript", "TailwindCSS"],
      backend: ["Python", "FastAPI", "PostgreSQL"],
      deployment: ["Docker", "AWS", "CI/CD"],
    },
    metrics: [
      { label: "Performance Improvement", value: "40%" },
      { label: "User Adoption", value: "10,000+" },
      { label: "Processing Time", value: "-60%" },
    ],
    team: {
      size: 4,
      roles: ["Lead Developer", "ML Engineer", "Data Scientist", "DevOps"],
    },
    demoUrl: "https://demo.example.com",
    repoUrl: "https://github.com/example/project",
  };

  return (
    <>
      <div 
        onClick={() => setIsModalOpen(true)}
        className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
      >
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            {title}
          </h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="relative w-full max-w-4xl bg-white rounded-lg shadow-2xl my-8">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
                <div className="flex items-center gap-4 mt-2">
                  {projectDetails.demoUrl && (
                    <a 
                      href={projectDetails.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-medium"
                    >
                      <Play className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  {projectDetails.repoUrl && (
                    <a 
                      href={projectDetails.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-medium"
                    >
                      <GitBranch className="w-4 h-4" />
                      View Code
                    </a>
                  )}
                </div>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            
            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Project Image */}
              <div className="relative aspect-video w-full">
                <img 
                  src={image} 
                  alt={title} 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              
              {/* Project Overview */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Project Overview</h4>
                <p className="text-gray-600">{projectDetails.overview}</p>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-4">
                {projectDetails.metrics.map((metric, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{metric.value}</div>
                    <div className="text-sm text-gray-600">{metric.label}</div>
                  </div>
                ))}
              </div>

              {/* Challenges & Solutions */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Key Challenges</h4>
                <ul className="list-disc list-inside space-y-2">
                  {projectDetails.challenges.map((challenge, index) => (
                    <li key={index} className="text-gray-600">{challenge}</li>
                  ))}
                </ul>
              </div>

              {/* Technology Stack */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Technology Stack</h4>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <h5 className="font-medium text-gray-700 mb-2">Frontend</h5>
                    <div className="flex flex-wrap gap-2">
                      {projectDetails.technologies.frontend.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-700 mb-2">Backend</h5>
                    <div className="flex flex-wrap gap-2">
                      {projectDetails.technologies.backend.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-700 mb-2">Deployment</h5>
                    <div className="flex flex-wrap gap-2">
                      {projectDetails.technologies.deployment.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Team */}
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <Users className="w-6 h-6 text-gray-600" />
                <div>
                  <div className="font-medium text-gray-800">Team Size: {projectDetails.team.size}</div>
                  <div className="text-sm text-gray-600">
                    Roles: {projectDetails.team.roles.join(", ")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;