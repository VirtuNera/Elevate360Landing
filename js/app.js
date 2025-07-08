// Elevate360 Landing Page - Static Version
const { useState, useEffect, useRef } = React;

// Main App Component
function App() {
  const [currentSection, setCurrentSection] = useState('home');
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'what-is-elevate360', 'features', 'how-it-works', 'about', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setCurrentSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return React.createElement('div', { className: 'min-h-screen' }, [
    React.createElement(Navigation, { key: 'nav', currentSection, scrollToSection }),
    React.createElement(SectionIndicator, { key: 'indicator', currentSection }),
    React.createElement(Hero, { key: 'hero', scrollToSection }),
    React.createElement(WhatIsElevate360, { key: 'what-is' }),
    React.createElement(KeyFeatures, { key: 'features' }),
    React.createElement(HowItWorks, { key: 'how-it-works' }),
    React.createElement(WhoShouldUse, { key: 'who-should-use' }),
    React.createElement(Highlights, { key: 'highlights' }),
    React.createElement(AboutUs, { key: 'about' }),
    React.createElement(FAQ, { key: 'faq' }),
    React.createElement(CTA, { key: 'cta' }),
    React.createElement(Contact, { key: 'contact' }),
    React.createElement(Footer, { key: 'footer' })
  ]);
}

// Navigation Component
function Navigation({ currentSection, scrollToSection }) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'what-is-elevate360', label: 'What is Elevate360' },
    { id: 'features', label: 'Features' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' }
  ];

  return React.createElement('div', { className: 'fixed top-0 left-0 right-0 z-50' }, [
    // Logo Container
    React.createElement('div', {
      key: 'logo-container',
      className: 'flex justify-center py-3 md:py-4',
      style: {
        background: 'linear-gradient(90deg, rgba(100, 200, 255, 0.15) 0%, rgba(147, 51, 234, 0.15) 50%, rgba(100, 200, 255, 0.15) 100%)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }
    }, 
      React.createElement('img', {
        src: '/assets/logo_1751556609804.png',
        alt: 'Virtù Nera',
        className: 'h-10 md:h-12 w-auto'
      })
    ),
    
    // Navigation Bar
    React.createElement('div', {
      key: 'nav-bar',
      className: 'px-2 md:px-4 py-2 md:py-3',
      style: {
        background: 'linear-gradient(90deg, rgba(100, 200, 255, 0.2) 0%, rgba(147, 51, 234, 0.2) 50%, rgba(100, 200, 255, 0.2) 100%)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }
    },
      React.createElement('div', { className: 'max-w-6xl mx-auto' },
        React.createElement('nav', { className: 'flex justify-center space-x-2 md:space-x-8 mobile-nav-scroll overflow-x-auto pb-1' },
          navItems.map(item => 
            React.createElement('button', {
              key: item.id,
              onClick: () => scrollToSection(item.id),
              className: `mobile-touch-target px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                currentSection === item.id 
                  ? 'bg-gradient-to-r from-cyan-400 to-purple-400 text-white shadow-lg' 
                  : 'text-white hover:bg-white/10'
              }`
            }, item.label)
          )
        )
      )
    )
  ]);
}

// Section Indicator Component
function SectionIndicator({ currentSection }) {
  const sectionNames = {
    'home': 'Home',
    'what-is-elevate360': 'What is Elevate360',
    'features': 'Features',
    'how-it-works': 'How It Works',
    'about': 'About Us',
    'contact': 'Contact'
  };

  return React.createElement('div', {
    className: 'section-indicator'
  }, sectionNames[currentSection] || 'Home');
}

// Hero Component
function Hero({ scrollToSection }) {
  return React.createElement('section', {
    id: 'home',
    className: 'hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden',
    style: { paddingTop: '140px' }
  }, [
    React.createElement('div', { key: 'bg-elements', className: 'absolute inset-0 overflow-hidden' }, [
      React.createElement('div', {
        key: 'bg-1',
        className: 'absolute top-1/4 left-1/4 w-32 md:w-64 h-32 md:h-64 bg-gradient-to-r from-cyan-400/20 to-purple-600/20 rounded-full animate-float'
      }),
      React.createElement('div', {
        key: 'bg-2',
        className: 'absolute bottom-1/4 right-1/4 w-24 md:w-48 h-24 md:h-48 bg-gradient-to-r from-purple-400/20 to-cyan-600/20 rounded-full animate-float',
        style: { animationDelay: '1s' }
      })
    ]),
    
    React.createElement('div', { key: 'content', className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 mobile-hero-spacing' }, [
      React.createElement('div', { key: 'hero-content', className: 'animate-fade-in-up' }, [
        React.createElement('h1', {
          key: 'title',
          className: 'text-4xl md:text-6xl lg:text-8xl font-bold mb-6 md:mb-8 small-mobile-title mobile-text-balance'
        }, [
          React.createElement('span', { key: 'elevate', className: 'text-white' }, 'Elevate'),
          React.createElement('span', { key: 'number', className: 'text-white' }, '360')
        ]),
        
        React.createElement('p', {
          key: 'subtitle',
          className: 'text-lg md:text-xl lg:text-2xl text-white opacity-90 mb-6 md:mb-8 max-w-4xl mx-auto leading-relaxed small-mobile-subtitle mobile-text-balance'
        }, 'The Ultimate Professional Development Ecosystem. Built for Professionals. Powered by Innovation. Driven by Purpose.'),
        
        React.createElement('div', {
          key: 'buttons',
          className: 'flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 md:mt-12 mobile-button-stack'
        }, [
          React.createElement('button', {
            key: 'explore-btn',
            onClick: () => scrollToSection('what-is-elevate360'),
            className: 'btn-primary mobile-button-full small-mobile-button px-6 md:px-8 py-3 md:py-4 rounded-xl text-white font-semibold text-base md:text-lg shadow-2xl hover:shadow-3xl transition-all duration-300'
          }, 'Explore Now'),
          
          React.createElement('a', {
            key: 'register-btn',
            href: 'https://forms.gle/M3P62bvmxqno7c436',
            target: '_blank',
            rel: 'noopener noreferrer',
            className: 'glass-morphism mobile-button-full small-mobile-button px-6 md:px-8 py-3 md:py-4 rounded-xl text-white font-semibold text-base md:text-lg hover:bg-white/20 transition-all duration-300'
          }, 'Register Now')
        ])
      ])
    ])
  ]);
}

// What is Elevate360 Component
function WhatIsElevate360() {
  return React.createElement('section', {
    id: 'what-is-elevate360',
    className: 'py-20 md:py-20 bg-gray-50 mobile-section-spacing small-mobile-spacing'
  },
    React.createElement('div', { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' }, [
      React.createElement('div', { key: 'header', className: 'text-center mb-12 md:mb-16 animate-fade-in-up' }, [
        React.createElement('h2', {
          key: 'title',
          className: 'text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 mobile-text-balance'
        }, 'What is Elevate360?'),
        
        React.createElement('p', {
          key: 'description',
          className: 'text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mobile-text-balance'
        }, 'Elevate360 is a revolutionary modular ecosystem that transforms professional development through integrated learning, credentialing, mentorship, and networking—all powered by cutting-edge AI technology.')
      ]),
      
      React.createElement('div', { key: 'features', className: 'grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8' },
        [
          {
            icon: '🎯',
            title: 'Modular Learning',
            description: 'Personalized learning paths that adapt to your career goals and learning style.'
          },
          {
            icon: '🤖',
            title: 'AI-Powered',
            description: 'Intelligent recommendations and insights to accelerate your professional growth.'
          },
          {
            icon: '🌐',
            title: 'Integrated Ecosystem',
            description: 'Seamlessly connects learning, credentialing, mentorship, and networking in one platform.'
          }
        ].map((feature, index) =>
          React.createElement('div', {
            key: index,
            className: 'text-center p-6 md:p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 mobile-card-enhanced small-mobile-card'
          }, [
            React.createElement('div', {
              key: 'icon',
              className: 'text-5xl md:text-6xl mb-4'
            }, feature.icon),
            React.createElement('h3', {
              key: 'title',
              className: 'text-xl md:text-2xl font-bold text-gray-900 mb-4'
            }, feature.title),
            React.createElement('p', {
              key: 'description',
              className: 'text-gray-600 leading-relaxed text-sm md:text-base'
            }, feature.description)
          ])
        )
      )
    ])
  );
}

// Key Features Component
function KeyFeatures() {
  const [expandedFeature, setExpandedFeature] = useState(null);
  
  const features = [
    {
      icon: '📚',
      title: 'Comprehensive Learning Modules',
      description: 'Access a vast library of professional development courses.',
      details: 'Our extensive library covers technical skills, leadership development, industry-specific knowledge, and soft skills. Each module is designed by industry experts and updated regularly to reflect current market demands.'
    },
    {
      icon: '🏆',
      title: 'Industry-Recognized Credentials',
      description: 'Earn certificates that matter in your professional journey.',
      details: 'Partner with leading organizations to provide credentials that are recognized and valued by employers worldwide. Build a portfolio of achievements that demonstrate your expertise and commitment to continuous learning.'
    },
    {
      icon: '👥',
      title: 'Expert Mentorship Network',
      description: 'Connect with industry leaders and experienced professionals.',
      details: 'Access our curated network of mentors from various industries and career levels. Receive personalized guidance, career advice, and industry insights from professionals who have walked the path you aspire to follow.'
    },
    {
      icon: '🤝',
      title: 'Professional Networking Hub',
      description: 'Build meaningful connections with like-minded professionals.',
      details: 'Join communities of professionals in your field, participate in virtual events, and build relationships that can advance your career. Our AI-powered matching helps you connect with the right people at the right time.'
    },
    {
      icon: '🧠',
      title: 'Rooted in Psychology',
      description: 'Science-backed learning methods for lasting behavior change.',
      details: 'Our platform integrates behavioral science principles, cognitive psychology research, and habit-forming learning loops to ensure knowledge retention and practical application in real-world scenarios.'
    },
    {
      icon: '📊',
      title: 'Personalized Analytics',
      description: 'Track your progress with detailed insights and recommendations.',
      details: 'Advanced analytics provide deep insights into your learning patterns, strengths, and areas for improvement. Receive personalized recommendations for courses, mentors, and networking opportunities based on your goals and progress.'
    }
  ];

  return React.createElement('section', {
    id: 'features',
    className: 'py-12 md:py-20 bg-white section-mobile-padding section-xs-padding'
  },
    React.createElement('div', { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' }, [
      React.createElement('div', { key: 'header', className: 'text-center mb-12 md:mb-16' }, [
        React.createElement('h2', {
          key: 'title',
          className: 'text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6'
        }, 'Key Features'),
        
        React.createElement('p', {
          key: 'description',
          className: 'text-lg md:text-xl text-gray-600 max-w-3xl mx-auto'
        }, 'Discover the powerful features that make Elevate360 the ultimate professional development platform.')
      ]),
      
      React.createElement('div', { key: 'features-grid', className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 grid-mobile-single' },
        features.map((feature, index) =>
          React.createElement('div', {
            key: index,
            className: 'bg-gray-50 p-6 md:p-8 rounded-2xl hover:shadow-lg transition-all duration-300 card-mobile-padding card-xs-padding'
          }, [
            React.createElement('div', {
              key: 'icon',
              className: 'text-4xl md:text-5xl mb-4'
            }, feature.icon),
            
            React.createElement('h3', {
              key: 'title',
              className: 'text-xl md:text-2xl font-bold text-gray-900 mb-4'
            }, feature.title),
            
            React.createElement('p', {
              key: 'description',
              className: 'text-gray-600 mb-4 text-sm md:text-base'
            }, feature.description),
            
            expandedFeature === index && React.createElement('p', {
              key: 'details',
              className: 'text-gray-700 text-xs md:text-sm leading-relaxed mb-4'
            }, feature.details),
            
            React.createElement('button', {
              key: 'toggle-btn',
              onClick: () => setExpandedFeature(expandedFeature === index ? null : index),
              className: 'text-blue-600 hover:text-blue-800 font-medium text-xs md:text-sm transition-colors'
            }, expandedFeature === index ? 'Show Less' : 'Show More')
          ])
        )
      )
    ])
  );
}

// How It Works Component
function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Assess',
      description: 'Complete our comprehensive assessment to identify your current skills, career goals, and learning preferences.'
    },
    {
      number: '02',
      title: 'Plan',
      description: 'Receive a personalized development plan with recommended learning paths, mentors, and networking opportunities.'
    },
    {
      number: '03',
      title: 'Learn',
      description: 'Engage with interactive modules, expert-led sessions, and hands-on projects tailored to your goals.'
    },
    {
      number: '04',
      title: 'Connect',
      description: 'Build relationships with mentors, peers, and industry professionals through our networking platform.'
    },
    {
      number: '05',
      title: 'Grow',
      description: 'Apply your new skills, earn recognized credentials, and advance your career with confidence.'
    }
  ];

  return React.createElement('section', {
    id: 'how-it-works',
    className: 'py-20 bg-gray-50'
  },
    React.createElement('div', { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' }, [
      React.createElement('div', { key: 'header', className: 'text-center mb-16' }, [
        React.createElement('h2', {
          key: 'title',
          className: 'text-4xl md:text-5xl font-bold text-gray-900 mb-6'
        }, 'How It Works'),
        
        React.createElement('p', {
          key: 'subtitle',
          className: 'text-xl text-gray-600 max-w-3xl mx-auto'
        }, 'Our 5-Step Growth & Trust Cycle™')
      ]),
      
      React.createElement('div', { key: 'steps', className: 'grid md:grid-cols-5 gap-8' },
        steps.map((step, index) =>
          React.createElement('div', {
            key: index,
            className: 'text-center'
          }, [
            React.createElement('div', {
              key: 'number',
              className: 'w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4'
            }, step.number),
            
            React.createElement('h3', {
              key: 'title',
              className: 'text-xl font-bold text-gray-900 mb-4'
            }, step.title),
            
            React.createElement('p', {
              key: 'description',
              className: 'text-gray-600 text-sm leading-relaxed'
            }, step.description)
          ])
        )
      )
    ])
  );
}

// Who Should Use Component
function WhoShouldUse() {
  const audiences = [
    {
      icon: '👨‍💼',
      title: 'Business Professionals',
      description: 'Executives, managers, and entrepreneurs looking to enhance leadership skills and business acumen.'
    },
    {
      icon: '👩‍💻',
      title: 'Tech Professionals',
      description: 'Developers, designers, and IT specialists seeking to stay current with industry trends and technologies.'
    },
    {
      icon: '👥',
      title: 'Team Leaders',
      description: 'Managers and supervisors wanting to improve team management and communication skills.'
    },
    {
      icon: '🎓',
      title: 'Recent Graduates',
      description: 'New professionals looking to bridge the gap between education and practical industry experience.'
    }
  ];

  return React.createElement('section', {
    id: 'who-should-use',
    className: 'py-20 bg-white'
  },
    React.createElement('div', { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' }, [
      React.createElement('div', { key: 'header', className: 'text-center mb-16' }, [
        React.createElement('h2', {
          key: 'title',
          className: 'text-4xl md:text-5xl font-bold text-gray-900 mb-6'
        }, 'Who Should Use Elevate360?'),
        
        React.createElement('p', {
          key: 'description',
          className: 'text-xl text-gray-600 max-w-3xl mx-auto'
        }, 'Elevate360 is designed for ambitious professionals across all industries and career stages.')
      ]),
      
      React.createElement('div', { key: 'audiences', className: 'grid md:grid-cols-2 lg:grid-cols-4 gap-8' },
        audiences.map((audience, index) =>
          React.createElement('div', {
            key: index,
            className: 'text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300'
          }, [
            React.createElement('div', {
              key: 'icon',
              className: 'text-5xl mb-4'
            }, audience.icon),
            
            React.createElement('h3', {
              key: 'title',
              className: 'text-xl font-bold text-gray-900 mb-4'
            }, audience.title),
            
            React.createElement('p', {
              key: 'description',
              className: 'text-gray-600 text-sm leading-relaxed'
            }, audience.description)
          ])
        )
      )
    ])
  );
}

// Highlights Component
function Highlights() {
  const highlights = [
    {
      icon: '🚀',
      title: 'AI-Powered Personalization',
      description: 'Advanced algorithms create personalized learning experiences that adapt to your pace and preferences.'
    },
    {
      icon: '🌍',
      title: 'Global Community',
      description: 'Connect with professionals from around the world and gain diverse perspectives on your industry.'
    },
    {
      icon: '📱',
      title: 'Mobile-First Design',
      description: 'Learn on-the-go with our intuitive mobile platform designed for busy professionals.'
    },
    {
      icon: '🧠',
      title: 'Rooted in Psychology',
      description: 'Evidence-based learning methodologies grounded in behavioral science and cognitive psychology for lasting impact.'
    }
  ];

  return React.createElement('section', {
    id: 'highlights',
    className: 'py-20 bg-gray-50'
  },
    React.createElement('div', { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' }, [
      React.createElement('div', { key: 'header', className: 'text-center mb-16' }, [
        React.createElement('h2', {
          key: 'title',
          className: 'text-4xl md:text-5xl font-bold text-gray-900 mb-6'
        }, 'Why Choose Elevate360?'),
        
        React.createElement('p', {
          key: 'description',
          className: 'text-xl text-gray-600 max-w-3xl mx-auto'
        }, 'Discover what sets us apart in the professional development landscape.')
      ]),
      
      React.createElement('div', { key: 'highlights-grid', className: 'grid md:grid-cols-2 lg:grid-cols-4 gap-8' },
        highlights.map((highlight, index) =>
          React.createElement('div', {
            key: index,
            className: 'text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300'
          }, [
            React.createElement('div', {
              key: 'icon',
              className: 'text-5xl mb-4'
            }, highlight.icon),
            
            React.createElement('h3', {
              key: 'title',
              className: 'text-xl font-bold text-gray-900 mb-4'
            }, highlight.title),
            
            React.createElement('p', {
              key: 'description',
              className: 'text-gray-600 text-sm leading-relaxed'
            }, highlight.description)
          ])
        )
      )
    ])
  );
}

// About Us Component
function AboutUs() {
  const leaders = [
    {
      name: "Zul-Fadhli Abdul Mateen",
      role: "CEO & Founder",
      description: "A tech entrepreneur with strategic thinking and a passion for community service. Regional changemaker and SEARCCT STORY 2025 1st Place Winner.",
      image: "/assets/sir_fad_1751855714092.jpg",
      roleColor: "text-green-400"
    },
    {
      name: "Hafiiz Ramlee",
      role: "CFO & COO",
      description: "Ensuring sustainable growth with financial expertise and operational excellence. Serial business owner and 2x Shell LiveWIRE Award Winner.",
      image: "/assets/sir_hafiz_1751855714091.jpg",
      roleColor: "text-yellow-400"
    },
    {
      name: "Azmi Sabtu",
      role: "CMO",
      description: "Marketing strategist with a passion for community-led growth and proven PR expertise. Master Holder in Management and the visionary behind Elevate360.",
      image: "/assets/sir_spax_1751855714082.jpg",
      roleColor: "text-purple-400"
    }
  ];

  return React.createElement('section', {
    id: 'about',
    className: 'py-20',
    style: { background: 'linear-gradient(135deg, hsl(222, 45%, 15%), hsl(222, 40%, 25%), var(--virtu-accent))' }
  },
    React.createElement('div', { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' }, [
      React.createElement('div', { key: 'header', className: 'text-center mb-16' }, [
        React.createElement('h2', {
          key: 'title',
          className: 'text-4xl md:text-5xl font-bold text-white mb-4'
        }, 'About Virtù Nera'),
        
        React.createElement('p', {
          key: 'mission',
          className: 'text-xl text-white opacity-90 max-w-3xl mx-auto mb-8'
        }, '"Strengthening Your Path To Success With Unwavering Excellence."'),
        
        React.createElement('p', {
          key: 'description',
          className: 'text-lg text-white opacity-80 max-w-4xl mx-auto'
        }, 'We are a team of passionate innovators dedicated to building Elevate360 as a trusted, innovative, and inclusive growth ecosystem that empowers professionals at every stage of their journey.')
      ]),
      
      React.createElement('div', { key: 'leadership', className: 'mb-16' }, [
        React.createElement('h3', {
          key: 'leadership-title',
          className: 'text-3xl font-bold text-white mb-8 text-center'
        }, 'Leadership Team'),
        
        React.createElement('div', { key: 'leaders-grid', className: 'grid md:grid-cols-3 gap-8' },
          leaders.map((leader, index) =>
            React.createElement('div', {
              key: index,
              className: 'glass-morphism p-8 rounded-2xl text-center'
            }, [
              React.createElement('img', {
                key: 'image',
                src: leader.image,
                alt: leader.name,
                className: 'w-32 h-32 rounded-full mx-auto mb-6 object-cover'
              }),
              
              React.createElement('h4', {
                key: 'name',
                className: 'text-xl font-bold text-white mb-2'
              }, leader.name),
              
              React.createElement('p', {
                key: 'role',
                className: `text-lg font-semibold mb-4 ${leader.roleColor}`
              }, leader.role),
              
              React.createElement('p', {
                key: 'description',
                className: 'text-white opacity-80 text-sm leading-relaxed'
              }, leader.description)
            ])
          )
        )
      ]),
      
      React.createElement('div', { key: 'ceo-message', className: 'text-center mt-16' },
        React.createElement('div', { className: 'glass-morphism p-8 rounded-2xl max-w-4xl mx-auto' }, [
          React.createElement('h3', {
            key: 'message-title',
            className: 'text-2xl font-semibold text-white mb-4'
          }, 'Our CEO\'s Message'),
          
          React.createElement('p', {
            key: 'message-content',
            className: 'text-white opacity-90 text-lg italic'
          }, '"Hi, I\'m Zul-Fadhli Abdul Mateen — CEO & Founder of Virtù Nera and the visionary behind Elevate360. As a tech entrepreneur with a passion for community service and strategic innovation, I believe in creating systems that truly elevate human potential. Our mission is to build a movement that transforms fragmented professional growth into a unified, empowering journey for everyone."')
        ])
      )
    ])
  );
}

// FAQ Component
function FAQ() {
  const [openFAQ, setOpenFAQ] = useState(null);
  
  const faqs = [
    {
      question: "What makes Elevate360 different from other professional development platforms?",
      answer: "Elevate360 is a comprehensive ecosystem that integrates learning, credentialing, mentorship, and networking in one platform. Our AI-powered personalization and science-backed methodologies ensure effective, lasting professional growth."
    },
    {
      question: "How does the mentorship program work?",
      answer: "Our mentorship program connects you with industry experts based on your goals and interests. Mentors provide guidance through one-on-one sessions, group discussions, and ongoing support throughout your learning journey."
    },
    {
      question: "Are the credentials recognized by employers?",
      answer: "Yes, our credentials are developed in partnership with leading industry organizations and are recognized by employers worldwide. Each certificate represents verified skills and knowledge relevant to your field."
    },
    {
      question: "What kind of support is available during my learning journey?",
      answer: "We provide comprehensive support including dedicated learning advisors, peer communities, technical assistance, and access to our extensive resource library to ensure your success."
    },
    {
      question: "How does the AI personalization work?",
      answer: "Our AI analyzes your learning patterns, career goals, and preferences to recommend personalized learning paths, suggest relevant connections, and adapt content to your optimal learning style."
    }
  ];

  return React.createElement('section', {
    id: 'faq',
    className: 'py-20 bg-white'
  },
    React.createElement('div', { className: 'max-w-4xl mx-auto px-4 sm:px-6 lg:px-8' }, [
      React.createElement('div', { key: 'header', className: 'text-center mb-16' }, [
        React.createElement('h2', {
          key: 'title',
          className: 'text-4xl md:text-5xl font-bold text-gray-900 mb-6'
        }, 'Frequently Asked Questions'),
        
        React.createElement('p', {
          key: 'description',
          className: 'text-xl text-gray-600'
        }, 'Get answers to common questions about Elevate360.')
      ]),
      
      React.createElement('div', { key: 'faqs', className: 'space-y-4' },
        faqs.map((faq, index) =>
          React.createElement('div', {
            key: index,
            className: 'border border-gray-200 rounded-lg overflow-hidden'
          }, [
            React.createElement('button', {
              key: 'question-btn',
              onClick: () => setOpenFAQ(openFAQ === index ? null : index),
              className: 'w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors focus:outline-none focus:bg-gray-100'
            }, [
              React.createElement('div', {
                key: 'question-content',
                className: 'flex justify-between items-center'
              }, [
                React.createElement('h3', {
                  key: 'question-text',
                  className: 'text-lg font-semibold text-gray-900 pr-4'
                }, faq.question),
                
                React.createElement('span', {
                  key: 'icon',
                  className: `text-gray-500 transform transition-transform ${openFAQ === index ? 'rotate-180' : ''}`
                }, '▼')
              ])
            ]),
            
            openFAQ === index && React.createElement('div', {
              key: 'answer',
              className: 'px-6 py-4 bg-white border-t border-gray-200'
            },
              React.createElement('p', {
                className: 'text-gray-600 leading-relaxed'
              }, faq.answer)
            )
          ])
        )
      )
    ])
  );
}

// CTA Component
function CTA() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      const response = await fetch('/.netlify/functions/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      const data = await response.json();
      
      if (response.ok) {
        setMessage('Successfully subscribed to newsletter!');
        setEmail('');
      } else {
        setMessage(data.message || 'Subscription failed. Please try again.');
      }
    } catch (error) {
      setMessage('Network error. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return React.createElement('section', {
    id: 'cta',
    className: 'py-20 bg-gradient-to-r from-blue-600 to-purple-600'
  },
    React.createElement('div', { className: 'max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center' }, [
      React.createElement('h2', {
        key: 'title',
        className: 'text-4xl md:text-5xl font-bold text-white mb-6'
      }, 'Ready to Elevate Your Career?'),
      
      React.createElement('p', {
        key: 'description',
        className: 'text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto'
      }, 'Join thousands of professionals who are transforming their careers with Elevate360. Start your journey today.'),
      
      React.createElement('div', { key: 'actions', className: 'flex flex-col items-center space-y-6' }, [
        React.createElement('a', {
          key: 'start-btn',
          href: 'https://forms.gle/M3P62bvmxqno7c436',
          target: '_blank',
          rel: 'noopener noreferrer',
          className: 'bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300'
        }, 'Start Now'),
        
        React.createElement('div', { key: 'newsletter', className: 'w-full max-w-md' }, [
          React.createElement('h3', {
            key: 'newsletter-title',
            className: 'text-white font-semibold mb-4'
          }, 'Stay Updated'),
          
          React.createElement('form', {
            key: 'newsletter-form',
            onSubmit: handleSubmit,
            className: 'flex flex-col sm:flex-row gap-4'
          }, [
            React.createElement('input', {
              key: 'email-input',
              type: 'email',
              value: email,
              onChange: (e) => setEmail(e.target.value),
              placeholder: 'Enter your email',
              className: 'form-input flex-1',
              required: true,
              disabled: isSubmitting
            }),
            
            React.createElement('button', {
              key: 'submit-btn',
              type: 'submit',
              disabled: isSubmitting,
              className: 'bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50'
            }, isSubmitting ? 'Subscribing...' : 'Subscribe')
          ]),
          
          message && React.createElement('p', {
            key: 'message',
            className: `mt-4 text-sm ${message.includes('Successfully') ? 'text-green-200' : 'text-red-200'}`
          }, message)
        ])
      ])
    ])
  );
}

// Contact Component
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      const response = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      
      if (response.ok) {
        setMessage('Message sent successfully! We\'ll get back to you soon.');
        setFormData({ name: '', email: '', organization: '', message: '' });
      } else {
        setMessage(data.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      setMessage('Network error. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return React.createElement('section', {
    id: 'contact',
    className: 'py-20 md:py-20 bg-gray-50 mobile-section-spacing small-mobile-spacing'
  },
    React.createElement('div', { className: 'max-w-4xl mx-auto px-4 sm:px-6 lg:px-8' }, [
      React.createElement('div', { key: 'header', className: 'text-center mb-12 md:mb-16' }, [
        React.createElement('h2', {
          key: 'title',
          className: 'text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6'
        }, 'Get in Touch'),
        
        React.createElement('p', {
          key: 'description',
          className: 'text-lg md:text-xl text-gray-600'
        }, 'Have questions about Elevate360? We\'d love to hear from you.')
      ]),
      
      React.createElement('div', { key: 'content', className: 'grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12' }, [
        React.createElement('div', { key: 'info' }, [
          React.createElement('h3', {
            key: 'info-title',
            className: 'text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6'
          }, 'Contact Information'),
          
          React.createElement('div', { key: 'contact-details', className: 'space-y-4' }, [
            React.createElement('div', { key: 'emails' }, [
              React.createElement('h4', {
                key: 'email-title',
                className: 'font-semibold text-gray-900 mb-2'
              }, 'Email'),
              React.createElement('p', { key: 'email1', className: 'text-gray-600 text-sm md:text-base break-words' },
                React.createElement('a', {
                  href: 'mailto:fadhli.abdulmateen@gmail.com',
                  className: 'hover:text-blue-600 transition-colors mobile-touch-target'
                }, 'fadhli.abdulmateen@gmail.com')
              ),
              React.createElement('p', { key: 'email2', className: 'text-gray-600 text-sm md:text-base break-words' },
                React.createElement('a', {
                  href: 'mailto:virtunera.nads@gmail.com',
                  className: 'hover:text-blue-600 transition-colors mobile-touch-target'
                }, 'virtunera.nads@gmail.com')
              )
            ]),
            
            React.createElement('div', { key: 'linkedin' }, [
              React.createElement('h4', {
                key: 'linkedin-title',
                className: 'font-semibold text-gray-900 mb-2'
              }, 'LinkedIn'),
              React.createElement('p', { key: 'linkedin-link', className: 'text-gray-600 text-sm md:text-base' },
                React.createElement('a', {
                  href: 'https://www.linkedin.com/company/virt%C3%B9-nera/',
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  className: 'hover:text-blue-600 transition-colors mobile-touch-target'
                }, 'LinkedIn Company Page')
              )
            ])
          ])
        ]),
        
        React.createElement('div', { key: 'form-container' }, [
          React.createElement('form', {
            key: 'contact-form',
            onSubmit: handleSubmit,
            className: 'space-y-4 md:space-y-6 mobile-form-enhanced'
          }, [
            React.createElement('div', { key: 'name-field' }, [
              React.createElement('label', {
                key: 'name-label',
                htmlFor: 'name',
                className: 'block text-sm font-medium text-gray-700 mb-2'
              }, 'Name *'),
              React.createElement('input', {
                key: 'name-input',
                type: 'text',
                id: 'name',
                name: 'name',
                value: formData.name,
                onChange: handleInputChange,
                required: true,
                disabled: isSubmitting,
                className: 'w-full mobile-input-enhanced md:px-4 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              })
            ]),
            
            React.createElement('div', { key: 'email-field' }, [
              React.createElement('label', {
                key: 'email-label',
                htmlFor: 'email',
                className: 'block text-sm font-medium text-gray-700 mb-2'
              }, 'Email *'),
              React.createElement('input', {
                key: 'email-input',
                type: 'email',
                id: 'email',
                name: 'email',
                value: formData.email,
                onChange: handleInputChange,
                required: true,
                disabled: isSubmitting,
                className: 'w-full mobile-input-enhanced md:px-4 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              })
            ]),
            
            React.createElement('div', { key: 'org-field' }, [
              React.createElement('label', {
                key: 'org-label',
                htmlFor: 'organization',
                className: 'block text-sm font-medium text-gray-700 mb-2'
              }, 'Organization'),
              React.createElement('input', {
                key: 'org-input',
                type: 'text',
                id: 'organization',
                name: 'organization',
                value: formData.organization,
                onChange: handleInputChange,
                disabled: isSubmitting,
                className: 'w-full mobile-input-enhanced md:px-4 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              })
            ]),
            
            React.createElement('div', { key: 'message-field' }, [
              React.createElement('label', {
                key: 'message-label',
                htmlFor: 'message',
                className: 'block text-sm font-medium text-gray-700 mb-2'
              }, 'Message *'),
              React.createElement('textarea', {
                key: 'message-input',
                id: 'message',
                name: 'message',
                value: formData.message,
                onChange: handleInputChange,
                required: true,
                disabled: isSubmitting,
                rows: 4,
                className: 'w-full mobile-input-enhanced md:px-4 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical'
              })
            ]),
            
            React.createElement('button', {
              key: 'submit-btn',
              type: 'submit',
              disabled: isSubmitting,
              className: 'w-full bg-blue-600 text-white mobile-input-enhanced md:px-6 md:py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50'
            }, isSubmitting ? 'Sending...' : 'Send Message')
          ]),
          
          message && React.createElement('p', {
            key: 'form-message',
            className: `mt-4 text-xs md:text-sm ${message.includes('successfully') ? 'text-green-600' : 'text-red-600'}`
          }, message)
        ])
      ])
    ])
  );
}

// Footer Component
function Footer() {
  return React.createElement('footer', {
    className: 'bg-gray-800 border-t border-gray-700 py-12'
  },
    React.createElement('div', { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' }, [
      React.createElement('div', { key: 'footer-content', className: 'text-center' }, [
        React.createElement('img', {
          key: 'logo',
          src: '/assets/logo_1751556609804.png',
          alt: 'Virtù Nera',
          className: 'h-12 w-auto mx-auto mb-6'
        }),
        
        React.createElement('p', {
          key: 'mission',
          className: 'text-white opacity-90 mb-6 text-lg'
        }, 'Strengthening Your Path To Success With Unwavering Excellence.'),
        
        React.createElement('div', { key: 'contact-info', className: 'text-white opacity-70 text-sm space-y-2' }, [
          React.createElement('p', { key: 'contact-label' }, 'Contact us:'),
          React.createElement('p', { key: 'emails' }, [
            React.createElement('a', {
              key: 'email1',
              href: 'mailto:fadhli.abdulmateen@gmail.com',
              className: 'hover:text-cyan-300 transition-colors'
            }, 'fadhli.abdulmateen@gmail.com'),
            ' | ',
            React.createElement('a', {
              key: 'email2',
              href: 'mailto:virtunera.nads@gmail.com',
              className: 'hover:text-cyan-300 transition-colors'
            }, 'virtunera.nads@gmail.com')
          ]),
          React.createElement('p', { key: 'linkedin' },
            React.createElement('a', {
              href: 'https://www.linkedin.com/company/virt%C3%B9-nera/',
              target: '_blank',
              rel: 'noopener noreferrer',
              className: 'hover:text-cyan-300 transition-colors'
            }, 'LinkedIn Company Page')
          )
        ])
      ]),
      
      React.createElement('div', { key: 'copyright', className: 'border-t border-gray-700 mt-8 pt-8 text-center' },
        React.createElement('p', {
          className: 'text-white opacity-60 text-sm'
        }, '© 2025 Virtù Nera. All rights reserved.')
      )
    ])
  );
}

// Render the app
ReactDOM.render(React.createElement(App), document.getElementById('root'));