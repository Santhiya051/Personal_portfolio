export const projectsData = [
  {
    id: 'smart-schedule-generator',
    title: 'Smart Schedule Generator',
    shortDescription: 'Automated timetable generation system with constraint-based scheduling',
    category: 'Full Stack',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Express'],
    githubUrl: 'https://github.com/santhiya/schedule-generator',
    liveUrl: null,
    featured: true,
    problem: 'Manual timetable creation for educational institutions is time-consuming and often results in scheduling conflicts, resource overlaps, and inefficient time allocation.',
    solution: 'Built an intelligent scheduling system that automatically generates conflict-free timetables based on multiple constraints including teacher availability, room capacity, and subject requirements.',
    features: [
      'Automated timetable generation with conflict detection',
      'Multi-constraint optimization (teachers, rooms, time slots)',
      'Drag-and-drop interface for manual adjustments',
      'Export schedules to PDF and Excel formats',
      'Real-time validation and conflict resolution',
      'Role-based access for admins and teachers'
    ],
    challenges: [
      {
        problem: 'Complex constraint satisfaction with multiple overlapping requirements',
        solution: 'Implemented a backtracking algorithm with priority-based constraint checking to efficiently generate valid schedules'
      },
      {
        problem: 'Performance issues when generating schedules for large institutions',
        solution: 'Optimized database queries using indexing and implemented caching for frequently accessed data, reducing generation time by 60%'
      }
    ],
    architecture: {
      frontend: 'React with Context API for state management, React DnD for drag-and-drop functionality',
      backend: 'Node.js/Express REST API with JWT authentication',
      database: 'PostgreSQL with normalized schema for courses, teachers, rooms, and time slots',
      deployment: 'Frontend on Netlify, Backend on Heroku, Database on ElephantSQL'
    },
    learnings: [
      'Algorithm design for constraint satisfaction problems',
      'Performance optimization techniques for complex computations',
      'Effective state management in React applications',
      'Database schema design for relational data'
    ]
  },
  {
    id: 'authentication-system',
    title: 'Secure Authentication System',
    shortDescription: 'Complete authentication solution with JWT, password recovery, and email verification',
    category: 'Backend',
    image: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?w=800&q=80',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'JWT', 'Nodemailer', 'bcrypt'],
    githubUrl: 'https://github.com/santhiya/auth-system',
    liveUrl: null,
    featured: true,
    problem: 'Many applications need secure user authentication, but implementing it from scratch involves handling complex security concerns like password hashing, token management, and secure password recovery.',
    solution: 'Developed a robust authentication system with industry-standard security practices including JWT tokens, bcrypt password hashing, and secure email-based password recovery.',
    features: [
      'User registration with email verification',
      'Secure login with JWT token generation',
      'Password hashing using bcrypt (salt rounds: 12)',
      'Forgot password with secure token-based reset',
      'Email notifications using Nodemailer',
      'Token expiration and refresh mechanism',
      'Protected routes with middleware authentication',
      'Session management and logout functionality'
    ],
    challenges: [
      {
        problem: 'Preventing brute-force attacks on login endpoints',
        solution: 'Implemented rate limiting middleware to restrict login attempts to 5 per 15 minutes per IP address'
      },
      {
        problem: 'Secure password reset token generation and validation',
        solution: 'Created cryptographically secure random tokens with expiration times, stored as hashed values in the database'
      }
    ],
    architecture: {
      backend: 'Express.js with modular route handlers and middleware',
      database: 'PostgreSQL with users, tokens, and sessions tables',
      security: 'JWT for stateless authentication, bcrypt for password hashing, helmet for HTTP headers',
      email: 'Nodemailer with Gmail SMTP for transactional emails'
    },
    learnings: [
      'Security best practices for authentication systems',
      'Token-based authentication vs session-based authentication',
      'Proper error handling without leaking sensitive information',
      'Email delivery and template design for transactional emails'
    ]
  },
  {
    id: 'scholarship-portal',
    title: 'Scholarship Management Portal',
    shortDescription: 'End-to-end scholarship application and management system for educational institutions',
    category: 'Full Stack',
    image: 'https://images.unsplash.com/photo-1427751840561-9852520f8ce8?w=800&q=80',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Express', 'Multer'],
    githubUrl: 'https://github.com/santhiya/scholarship-portal',
    liveUrl: null,
    featured: true,
    problem: 'Scholarship application processes are often paper-based, leading to inefficiencies, lost documents, and difficulty in tracking application status.',
    solution: 'Created a digital platform that streamlines the entire scholarship lifecycle from application submission to approval, with document management and automated notifications.',
    features: [
      'Student application form with document upload',
      'File upload validation (size, type, virus scanning)',
      'Multi-stage approval workflow (HOD → Principal → Management)',
      'Application status tracking dashboard',
      'Automated email notifications at each stage',
      'Admin panel for application review and filtering',
      'Document preview and download functionality',
      'Search and filter by criteria (grade, income, category)'
    ],
    challenges: [
      {
        problem: 'Handling large file uploads securely',
        solution: 'Implemented Multer with file size limits, type validation, and organized storage structure with unique identifiers'
      },
      {
        problem: 'Managing multi-level approval workflow',
        solution: 'Designed a state machine pattern to track application status through different stages with proper role-based permissions'
      }
    ],
    architecture: {
      frontend: 'React with React Router for multi-page navigation',
      backend: 'Express API with role-based middleware for authorization',
      database: 'PostgreSQL with relational schema for students, applications, and approvals',
      storage: 'Local file system with organized directory structure (production would use S3)'
    },
    learnings: [
      'File upload handling and validation best practices',
      'Workflow state management in database design',
      'Role-based access control implementation',
      'Building admin dashboards with filtering and search'
    ]
  },
  {
    id: 'employee-management',
    title: 'Employee Management Dashboard',
    shortDescription: 'Comprehensive HR system with attendance tracking, salary calculation, and payslip generation',
    category: 'Full Stack',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'PDFKit', 'Chart.js'],
    githubUrl: 'https://github.com/santhiya/employee-management',
    liveUrl: null,
    featured: false,
    problem: 'HR departments struggle with manual attendance tracking, salary calculations, and generating consistent payslips for employees.',
    solution: 'Developed an integrated system that automates attendance tracking, calculates salaries based on attendance and deductions, and generates professional PDF payslips.',
    features: [
      'Employee registration and profile management',
      'Daily attendance marking with timestamp',
      'Automated salary calculation based on attendance',
      'Deductions management (tax, insurance, provident fund)',
      'PDF payslip generation with company branding',
      'Attendance reports and analytics',
      'Leave management system',
      'Export reports to Excel and PDF'
    ],
    challenges: [
      {
        problem: 'Complex salary calculations with multiple variables',
        solution: 'Created a flexible calculation engine that handles base salary, attendance percentage, overtime, and various deductions'
      },
      {
        problem: 'Generating professional PDF payslips dynamically',
        solution: 'Used PDFKit to create templated payslips with company logo, employee details, and detailed breakdown of earnings and deductions'
      }
    ],
    architecture: {
      frontend: 'React with Chart.js for attendance visualization',
      backend: 'Express API with scheduled jobs for monthly salary processing',
      database: 'PostgreSQL with tables for employees, attendance, salary, and deductions',
      pdf: 'PDFKit for server-side PDF generation'
    },
    learnings: [
      'Building business logic for financial calculations',
      'Server-side PDF generation and templating',
      'Data visualization for analytics dashboards',
      'Scheduled task execution in Node.js'
    ]
  }
];

export const skillsData = {
  frontend: [
    { name: 'HTML5', level: 90 },
    { name: 'CSS3', level: 85 },
    { name: 'JavaScript', level: 88 },
    { name: 'React', level: 85 },
    { name: 'Responsive Design', level: 90 }
  ],
  backend: [
    { name: 'Node.js', level: 82 },
    { name: 'Express.js', level: 85 },
    { name: 'REST APIs', level: 88 },
    { name: 'JWT Authentication', level: 80 }
  ],
  database: [
    { name: 'PostgreSQL', level: 80 },
    { name: 'MySQL', level: 75 },
    { name: 'Database Design', level: 82 }
  ],
  tools: [
    { name: 'Git & GitHub', level: 85 },
    { name: 'VS Code', level: 90 },
    { name: 'Postman', level: 85 },
    { name: 'npm', level: 85 }
  ],
  other: [
    { name: 'bcrypt', level: 80 },
    { name: 'Nodemailer', level: 78 },
    { name: 'Multer', level: 75 },
    { name: 'PDFKit', level: 75 }
  ]
};
