import React, { useState, useEffect, useMemo } from 'react';
import { MapPin, Calendar, Users, Video, Trophy, Theater, X, ChevronLeft, ChevronRight, Play } from 'lucide-react';

import AfroloudImage from '../assets/Ourwork/Afroloud.jpg';
import Gulf from '../assets/Ourwork/Gulf.jpg';
import Rita from '../assets/Ourwork/Rita.png';
import Random from '../assets/Ourwork/RandomWork.jpg';
import MIAMI  from '../assets/Ourwork/Miami.jpg';
import ARABS   from '../assets/Ourwork/ARABS.jpg';
import Paris   from '../assets/Ourwork/Paris.jpg';
// Additional images for modal gallery
import AfroloudHighlight from '../assets/Highlight images/Afroloud.jpg';
import Afroloud2 from '../assets/Highlight images/Alfroloud2.jpg';
import GulfHighlight from '../assets/Highlight images/Gulf.jpg';
import ZargonHighlight from '../assets/Highlight images/Zargon.jpg';
const OurWork = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Animation trigger on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);


  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (selectedProject) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const handleVideoClick = (e, videoUrl) => {
    e.stopPropagation(); // Prevent modal from opening
    window.open(videoUrl, '_blank');
  };

  const nextImage = () => {
    if (selectedProject && selectedProject.galleryImages) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === selectedProject.galleryImages.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject && selectedProject.galleryImages) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? selectedProject.galleryImages.length - 1 : prevIndex - 1
      );
    }
  };

  // Work categories and projects
  const workProjects = [
    {
      id: 1,
      category: "our-work" ,
      title: 'Miami Band Concert - Kuwait',
      description: 'Main dancers for the first Miami band concert in Kuwait, led by international choreographer Shelby Williams from London, followed by tour in Alula, Saudi Arabia.',
      location: 'Kuwait',
      year: '2024',
      image: MIAMI,
      icon: Users,
      videoUrl: null, // YouTube video link can be added here later
      galleryImages: [MIAMI, "https://i.postimg.cc/mDQyZgWZ/Whats-App-Image-2025-08-26-at-04-51-48-db56ed7f.jpg","https://i.postimg.cc/T2JJZ1cC/Whats-App-Image-2025-08-26-at-04-51-49-d5f960a0.jpg","https://i.postimg.cc/L643RSCR/Whats-App-Image-2025-08-26-at-04-51-49-a55db49f.jpg",] // Additional images for modal
    },
    {
      id: 2,
      category: 'our-work',
      title: 'Gulf Cup Performance',
      description: 'Performed for the Gulf Cup in Kuwait, under international choreographers Dimitria, Tamara, and Louis.',
      location: 'Kuwait',
      year: '2024',
      image: Gulf,
      icon: Trophy,
      videoUrl: null, // YouTube video link can be added here later
      galleryImages: [Gulf, "https://i.postimg.cc/wMqL65kF/Whats-App-Image-2025-08-26-at-04-52-44-ea69ab56.jpg","https://i.postimg.cc/TYPgF913/Whats-App-Image-2025-08-26-at-04-52-44-c634d462.jpg","https://i.postimg.cc/kg68Xgxr/Whats-App-Image-2025-08-26-at-04-52-44-21869a68.jpg","https://i.postimg.cc/vBM6z7CM/Whats-App-Image-2025-08-26-at-04-52-45-026f4587.jpg"] // Additional images for modal
    },
    {
      id: 3,
      category: 'international',
      title: 'Afroloud Concert - UAE',
      description: 'Kulture officially showcased at the Afroloud Concert in UAE alongside top international artists in April and August, 2025.',
      location: 'UAE',
      year: '2025',
      image:AfroloudImage,
      icon: Users,
      videoUrl: null, // YouTube video link can be added here later
      galleryImages: [AfroloudImage,"https://i.postimg.cc/3xtrksHg/IMG-8435.jpg","https://i.postimg.cc/MK8pN0Dj/Whats-App-Image-2025-08-26-at-04-57-34-260cde33.jpg","https://i.postimg.cc/RFKzL82p/IMG-8417.jpg"] // Additional images for modal
    },
    {
      id: 4,
      category: 'international',
      title: 'Rita Malek Music Video',
      description: 'Music video & choreography for artist Rita Malek in Lebanon.',
      location: 'Lebanon',
      year: '2024',
      image: Rita,
      icon: Video,
      videoUrl: null, // YouTube video link can be added here later
      galleryImages: [Rita, "https://i.postimg.cc/Vkd3zvzP/Whats-App-Image-2025-08-26-at-05-00-45-dfb02fce.jpg","https://i.postimg.cc/J4hFQ0DH/Whats-App-Image-2025-08-26-at-05-00-45-18293bf3.jpg","https://i.postimg.cc/vBMqxZwB/Whats-App-Image-2025-08-26-at-05-00-46-aaee8b35.jpg"] // Additional images for modal
    },
    {
      id: 5,
      category:'international',
      title: 'Arabs Got Talent',
      description: 'Semi-finalists on Arabs Got Talent in Lebanon.',
      location: 'Lebanon',
      year: '2024',
      image: ARABS,
      icon: Trophy,
      featured: true,
      videoUrl: null, // YouTube video link can be added here later
      galleryImages: [ARABS,"https://i.postimg.cc/Wzdp6hpT/Whats-App-Image-2025-08-26-at-04-53-14-ef3bcb93.jpg","https://i.postimg.cc/SQPxQ7Vs/Whats-App-Image-2025-08-26-at-04-53-14-052894fb.jpg","https://i.postimg.cc/855TNj6M/Whats-App-Image-2025-08-26-at-04-53-15-f279035e.jpg"] // Additional images for modal
    },

    {
      id: 6,
      category: 'international',
      title: 'Paris Theater Festival',
      description: 'Theater festival performance in Paris.',
      location: 'Paris, France',
      year: '2024',
      image: "https://i.postimg.cc/htdpCdSv/Whats-App-Image-2025-08-26-at-05-01-18-ab1f307f.jpg",
      icon: Theater,
      videoUrl: null, // YouTube video link can be added here later
      galleryImages: ["https://i.postimg.cc/htdpCdSv/Whats-App-Image-2025-08-26-at-05-01-18-ab1f307f.jpg","https://i.postimg.cc/jjTQZ3g3/Whats-App-Image-2025-08-26-at-05-01-18-7c551edb.jpg","https://i.postimg.cc/76Y1yGyg/Whats-App-Image-2025-08-26-at-05-01-19-ae1c3567.jpg","https://i.postimg.cc/1XbD6vVH/Whats-App-Image-2025-08-26-at-05-01-19-35f9941d.jpg"] // Additional images for modal
    },
    {
      id: 7,
      category: 'international',
      title: 'Cape Town Festival',
      description: 'Traveled & performed for Cape Town festival in South Africa.',
      location: 'Cape Town, South Africa',
      year: '2024',
      image: 'https://i.postimg.cc/gJnDZXBG/Whats-App-Image-2025-08-26-at-05-01-46-d97b6ff2.jpg',
      icon: MapPin,
      videoUrl: null, // YouTube video link can be added here later
      galleryImages: ['https://i.postimg.cc/gJnDZXBG/Whats-App-Image-2025-08-26-at-05-01-46-d97b6ff2.jpg',"https://i.postimg.cc/3x1CfCsK/Whats-App-Image-2025-08-26-at-05-01-46-2ef2a270.jpg","https://i.postimg.cc/PqFbTff9/Whats-App-Image-2025-08-26-at-05-01-46-5da2e0a1.jpg"] // Additional images for modal
    },
    {
      id: 8,
      category: 'our-work',
      title: 'Zargoon (The Genie)',
      description: 'Choreographed and performed for leading theater festivals in Kuwait, latest one being Zargoon (The Genie).',
      location: 'Kuwait',
      year: '2025',
      image: "https://i.postimg.cc/gkBGzmhL/IMG-20250822-WA0016.jpg", // Using local image
      icon: Theater,
      featured: true,
      videoUrl: null, // YouTube video link can be added here later
      galleryImages: ["https://i.postimg.cc/gkBGzmhL/IMG-20250822-WA0016.jpg", "https://i.postimg.cc/4d5wbxLL/Whats-App-Image-2025-08-26-at-04-54-25-83921a4a.jpg","https://i.postimg.cc/wjLXQB3X/Whats-App-Image-2025-08-26-at-04-54-24-3541742b.jpg","https://i.postimg.cc/bJBShXsY/Whats-App-Image-2025-08-26-at-04-54-25-b3e318f7.jpg"] // Additional images for modal
    },
     {
      id: 9,
      category: 'our-work',
      title: 'OPERA HOUSE',
      description: "Kuwait's national cultural center, functions as the premier opera house and cultural hub, hosting various events and festivals.",
      location: 'Kuwait',
      year: '2025',
      image: "https://i.postimg.cc/9QbM23k3/Whats-App-Image-2025-08-26-at-04-53-44-fdd108cf.jpg", // Using local image
      icon: Theater,
      featured: true,
      videoUrl: null, // YouTube video link can be added here later
      galleryImages: ["https://i.postimg.cc/9QbM23k3/Whats-App-Image-2025-08-26-at-04-53-44-fdd108cf.jpg", "https://i.postimg.cc/s222D6FM/Whats-App-Image-2025-08-26-at-04-53-44-3b59d48a.jpg","https://i.postimg.cc/nrxbMrs3/Whats-App-Image-2025-08-26-at-04-53-44-6f4e54dc.jpg","https://i.postimg.cc/XN5YJBPk/Whats-App-Image-2025-08-26-at-04-53-45-7ae85264.jpg"] // Additional images for modal
    },

       {
      id: 10,
      category: 'our-work',
      title: 'ZITORA THEATER',
      description: "zitora is a prominent theater in Kuwait known for its cultural performances and events, showcasing local talent and international acts.",
      location: 'Kuwait',
      year: '2025',
      image: "https://i.postimg.cc/k5H5pQ2L/Whats-App-Image-2025-08-26-at-04-55-11-dddf9fdb.jpg", // Using local image
      icon: Theater,
      featured: true,
      videoUrl: null, // YouTube video link can be added here later
      galleryImages: ["https://i.postimg.cc/k5H5pQ2L/Whats-App-Image-2025-08-26-at-04-55-11-dddf9fdb.jpg","https://i.postimg.cc/DycwTkWr/Whats-App-Image-2025-08-26-at-04-55-10-0ffa3fa8.jpg","https://i.postimg.cc/W3rsYQLJ/Whats-App-Image-2025-08-26-at-04-55-10-710c8cd6.jpg" ]
       },
      {
      id: 11,
      category: 'international',
      title: 'KINGDOM AFROLOUD FESTIVAL',
      description: "The KINGDOM Afroloud Festival was a major Afro-themed indoor summer festival event, held at the Dubai World Trade Centre in Dubai",
      location: 'Dubai, UAE',
      year: '2025',
      image: "https://i.postimg.cc/h4Q0pnyt/IMG-2006.jpg", // Using local image
      icon: Theater,
      featured: true,
      videoUrl: null, // YouTube video link can be added here later
      galleryImages: ["https://i.postimg.cc/h4Q0pnyt/IMG-2006.jpg","https://i.postimg.cc/1tG33fRz/IMG-2003.jpg","https://i.postimg.cc/VLGLvywX/Whats-App-Image-2025-08-26-at-04-58-13-30f42275.jpg", "https://i.postimg.cc/3JdQLkMD/Whats-App-Image-2025-08-26-at-04-58-13-456a4237.jpg" ]
       },
        {
      id: 12,
      category: 'international',
      title: 'MIAMI BAND TOUR',
      description: null,
      image: "https://i.postimg.cc/VsPFGT39/Whats-App-Image-2025-08-26-at-05-00-06-719d527c.jpg", // Using local image
      icon: Theater,
      featured: true,
      videoUrl: null, // YouTube video link can be added here later
      galleryImages: ["https://i.postimg.cc/VsPFGT39/Whats-App-Image-2025-08-26-at-05-00-06-719d527c.jpg","https://i.postimg.cc/J0h0YRm4/Whats-App-Image-2025-08-26-at-05-00-06-a6e08a56.jpg","https://i.postimg.cc/nLtzb4ZW/Whats-App-Image-2025-08-26-at-05-00-06-6e961c23.jpg", "https://i.postimg.cc/Y0VrXgbb/Whats-App-Image-2025-08-26-at-05-00-07-436d146f.jpg" ]
       },
       // Photography Projects
       {
         id: 13,
         category: 'photography',
         title: 'KULTURE TRIBE PORTRAITS',
         description: 'Professional portraits capturing the essence and personality of our talented dance team members.',
         location: 'Kuwait',
         year: '2025',
         image: "https://i.postimg.cc/4NSX6rdZ/Whats-App-Image-2025-08-26-at-05-03-28-17d28f05.jpg",
         icon: Users,
         videoUrl: null,
         galleryImages: ["https://i.postimg.cc/4NSX6rdZ/Whats-App-Image-2025-08-26-at-05-03-28-17d28f05.jpg"]
       },
       {
         id: 14,
         category: 'photography',
         title: 'ARTISTIC DANCE PHOTOGRAPHY',
         description: 'Creative and artistic shots showcasing the beauty and grace of dance movements.',
         location: 'Kuwait',
         year: '2025',
         image: "https://i.postimg.cc/Kzq7vCNP/Whats-App-Image-2025-08-26-at-05-03-28-e2c8ca40.jpg",
         icon: Users,
         videoUrl: null,
         galleryImages: ["https://i.postimg.cc/Kzq7vCNP/Whats-App-Image-2025-08-26-at-05-03-28-e2c8ca40.jpg"]
       },
       {
         id: 15,
         category: 'photography',
         title: 'CULTURAL EXPRESSION SHOTS',
         description: 'Photography capturing the cultural diversity and expression through dance and movement.',
         location: 'Kuwait',
         year: '2025',
         image: "https://i.postimg.cc/XJRfCdRq/Whats-App-Image-2025-08-26-at-05-03-29-e772ad8e.jpg",
         icon: Users,
         videoUrl: null,
         galleryImages: ["https://i.postimg.cc/XJRfCdRq/Whats-App-Image-2025-08-26-at-05-03-29-e772ad8e.jpg"]
       },
       {
         id: 16,
         category: 'photography',
         title: 'DYNAMIC MOVEMENT CAPTURES',
         description: 'High-energy photography capturing the dynamic movements and expressions of our dancers.',
         location: 'Kuwait',
         year: '2025',
         image: "https://i.postimg.cc/59zqMKzC/Whats-App-Image-2025-08-26-at-05-03-29-d694bf86.jpg",
         icon: Users,
         videoUrl: null,
         galleryImages: ["https://i.postimg.cc/59zqMKzC/Whats-App-Image-2025-08-26-at-05-03-29-d694bf86.jpg"]
       },
       {
         id: 17,
         category: 'photography',
         title: 'PROFESSIONAL HEADSHOTS',
         description: 'Professional headshots and portfolio images for our talented dance company members.',
         location: 'Kuwait',
         year: '2025',
         image: "https://i.postimg.cc/B6KD4tj0/Whats-App-Image-2025-08-26-at-05-03-29-318f29c4.jpg",
         icon: Users,
         videoUrl: null,
         galleryImages: ["https://i.postimg.cc/B6KD4tj0/Whats-App-Image-2025-08-26-at-05-03-29-318f29c4.jpg"]
       },
       {
         id: 18,
         category: 'photography',
         title: 'CONTEMPORARY DANCE PHOTOGRAPHY',
         description: 'Contemporary and modern dance photography showcasing innovative choreography and style.',
         location: 'Kuwait',
         year: '2025',
         image: "https://i.postimg.cc/9QQ7zLD1/Whats-App-Image-2025-08-26-at-05-03-29-93bd3733.jpg",
         icon: Users,
         videoUrl: null,
         galleryImages: ["https://i.postimg.cc/9QQ7zLD1/Whats-App-Image-2025-08-26-at-05-03-29-93bd3733.jpg"]
       },
       {
         id: 19,
         category: 'photography',
         title: 'EXPRESSIVE DANCE PORTRAITS',
         description: 'Expressive portraits capturing the emotion and passion of our dance performances.',
         location: 'Kuwait',
         year: '2025',
         image: "https://i.postimg.cc/FK2dWmDn/Whats-App-Image-2025-08-26-at-05-03-29-4af7edaa.jpg",
         icon: Users,
         videoUrl: null,
         galleryImages: ["https://i.postimg.cc/FK2dWmDn/Whats-App-Image-2025-08-26-at-05-03-29-4af7edaa.jpg"]
       },
       {
         id: 20,
         category: 'photography',
         title: 'STUDIO DANCE PHOTOGRAPHY',
         description: 'Professional studio photography showcasing technical precision and artistic beauty.',
         location: 'Kuwait',
         year: '2025',
         image: "https://i.postimg.cc/d3n0YKjF/Whats-App-Image-2025-08-26-at-05-03-30-ed924747.jpg",
         icon: Users,
         videoUrl: null,
         galleryImages: ["https://i.postimg.cc/d3n0YKjF/Whats-App-Image-2025-08-26-at-05-03-30-ed924747.jpg"]
       },
       {
         id: 21,
         category: 'photography',
         title: 'CREATIVE COMPOSITION SHOTS',
         description: 'Creative and artistic composition photography highlighting the beauty of dance.',
         location: 'Kuwait',
         year: '2025',
         image: "https://i.postimg.cc/HxYDC8ZJ/Whats-App-Image-2025-08-26-at-05-03-30-f04ec1f1.jpg",
         icon: Users,
         videoUrl: null,
         galleryImages: ["https://i.postimg.cc/HxYDC8ZJ/Whats-App-Image-2025-08-26-at-05-03-30-f04ec1f1.jpg"]
       },
       {
         id: 22,
         category: 'photography',
         title: 'PERFORMANCE BEHIND THE SCENES',
         description: 'Behind the scenes photography capturing candid moments and preparation for performances.',
         location: 'Kuwait',
         year: '2025',
         image: "https://i.postimg.cc/vmGS1FWk/Whats-App-Image-2025-08-26-at-05-03-30-a5190ee3.jpg",
         icon: Users,
         videoUrl: null,
         galleryImages: ["https://i.postimg.cc/vmGS1FWk/Whats-App-Image-2025-08-26-at-05-03-30-a5190ee3.jpg"]
       },
       {
         id: 23,
         category: 'photography',
         title: 'DANCE TEAM COLLABORATION',
         description: 'Group photography showcasing teamwork and collaboration within our dance company.',
         location: 'Kuwait',
         year: '2025',
         image: "https://i.postimg.cc/QNBsN1N5/Whats-App-Image-2025-08-26-at-05-03-30-090d269a.jpg",
         icon: Users,
         videoUrl: null,
         galleryImages: ["https://i.postimg.cc/QNBsN1N5/Whats-App-Image-2025-08-26-at-05-03-30-090d269a.jpg"]
       },
       {
         id: 24,
         category: 'photography',
         title: 'LIFESTYLE DANCE PHOTOGRAPHY',
         description: 'Lifestyle photography capturing the natural essence and personality of our dancers.',
         location: 'Kuwait',
         year: '2025',
         image: "https://i.postimg.cc/yNNtQCk9/Whats-App-Image-2025-08-26-at-05-03-31-2e4a7548.jpg",
         icon: Users,
         videoUrl: null,
         galleryImages: ["https://i.postimg.cc/yNNtQCk9/Whats-App-Image-2025-08-26-at-05-03-31-2e4a7548.jpg"]
       },
       {
         id: 25,
         category: 'photography',
         title: 'ARTISTIC MOVEMENT STUDY',
         description: 'Artistic study of movement and form through the lens of professional dance photography.',
         location: 'Kuwait',
         year: '2025',
         image: "https://i.postimg.cc/RFkYZ3GQ/Whats-App-Image-2025-08-26-at-05-03-31-e20c2784.jpg",
         icon: Users,
         videoUrl: null,
         galleryImages: ["https://i.postimg.cc/RFkYZ3GQ/Whats-App-Image-2025-08-26-at-05-03-31-e20c2784.jpg"]
       },
       {
         id: 27,
         category: 'photography',
         title: 'DANCE TECHNIQUE SHOWCASE',
         description: 'Photography showcasing advanced dance techniques and professional skill development.',
         location: 'Kuwait',
         year: '2025',
         image: "https://i.postimg.cc/2S0XB925/Whats-App-Image-2025-08-26-at-05-03-31-2f3a1562.jpg",
         icon: Users,
         videoUrl: null,
         galleryImages: ["https://i.postimg.cc/2S0XB925/Whats-App-Image-2025-08-26-at-05-03-31-2f3a1562.jpg"]
       },
       {
         id: 28,
         category: 'photography',
         title: 'PERFORMANCE ENERGY CAPTURE',
         description: 'High-energy performance photography capturing the intensity and passion of live dance.',
         location: 'Kuwait',
         year: '2025',
         image: "https://i.postimg.cc/zDw7gPf1/Whats-App-Image-2025-08-26-at-05-03-31-aebee22b.jpg",
         icon: Users,
         videoUrl: null,
         galleryImages: ["https://i.postimg.cc/zDw7gPf1/Whats-App-Image-2025-08-26-at-05-03-31-aebee22b.jpg"]
       },
       {
         id: 30,
         category: 'photography',
         title: 'DANCE COSTUME PHOTOGRAPHY',
         description: 'Professional photography showcasing beautiful dance costumes and styling for performances.',
         location: 'Kuwait',
         year: '2025',
         image: "https://i.postimg.cc/9F8GP35s/Whats-App-Image-2025-08-26-at-05-03-32-8f4df3d1.jpg",
         icon: Users,
         videoUrl: null,
         galleryImages: ["https://i.postimg.cc/9F8GP35s/Whats-App-Image-2025-08-26-at-05-03-32-8f4df3d1.jpg"]
       },
       {
         id: 31,
         category: 'photography',
         title: 'KULTURE TRIBE LEGACY',
         description: 'Photography documenting the legacy and journey of Kulture Tribe dance company.',
         location: 'Kuwait',
         year: '2025',
         image: "https://i.postimg.cc/j5bNqtPn/Whats-App-Image-2025-08-26-at-05-03-32-cbf08110.jpg",
         icon: Users,
         videoUrl: null,
         galleryImages: ["https://i.postimg.cc/j5bNqtPn/Whats-App-Image-2025-08-26-at-05-03-32-cbf08110.jpg"]
       }
    ];

  const categories = [
    { id: 'all', label: 'All Work', count: workProjects.length },
    { id: 'our-work', label: 'Our Work', count: workProjects.filter(p => p.category === 'our-work').length },
    { id: 'international', label: 'International', count: workProjects.filter(p => p.category === 'international').length },
    { id: 'photography', label: 'Cultural Photography', count: workProjects.filter(p => p.category === 'photography').length },
    { id: 'music-videos', label: 'Music Videos', count: workProjects.filter(p => p.category === 'music-videos').length },

  ];


  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') {
      return workProjects;
    }
    return workProjects.filter(project => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="work" className="relative min-h-screen bg-black py-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400/10 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-block mb-6">
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-orange-500"></div>
              <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-white via-yellow-400 to-white bg-clip-text text-transparent">
                OUR WORK
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-yellow-400"></div>
            </div>
          </div>
          <p className="text-xl text-yellow-400/80 font-light tracking-wider">
            FROM KUWAIT TO THE WORLD • CREATING UNFORGETTABLE MOMENTS
          </p>
        </div>

        {/* Category Filter */}
        <div className={`mb-16 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`relative group px-6 py-3 rounded-full font-semibold transition-all duration-300 border ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black border-transparent'
                    : 'bg-black/40 text-white border-white/20 hover:border-yellow-400/50 hover:bg-yellow-400/10'
                }`}
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>{category.label}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    activeCategory === category.id
                      ? 'bg-black/20 text-black'
                      : 'bg-yellow-400/20 text-yellow-400'
                  }`}>
                    {category.count}
                  </span>
                </span>
                {activeCategory !== category.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div>
          <h3 className={`text-3xl md:text-4xl font-bold text-white mb-8 text-center transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            All <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" key={activeCategory}>
            {filteredProjects.map((project, index) => {
              const Icon = project.icon;
              const isPhotography = project.category === 'photography';

              return (
                <div
                  key={project.id}
                  onClick={() => openModal(project)}
                  className={`group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-[1.05] cursor-pointer ${
                    isPhotography
                      ? 'border-2 border-yellow-400/40 hover:border-yellow-400/70 bg-gradient-to-br from-yellow-900/20 to-orange-900/20'
                      : 'border border-yellow-400/20 hover:border-yellow-400/40'
                  } ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ animationDelay: `${800 + index * 100}ms` }}
                >
                  {/* Background Image */}
                  <div className={`relative overflow-hidden ${isPhotography ? 'h-80' : 'h-64'}`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 ${
                      isPhotography
                        ? 'bg-gradient-to-t from-yellow-900/80 via-black/30 to-transparent'
                        : 'bg-gradient-to-t from-black via-black/30 to-transparent'
                    }`}></div>

                    {/* Year Badge */}
                    {!isPhotography && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-black/60 backdrop-blur-sm text-yellow-400 text-xs font-bold px-3 py-1 rounded-full border border-yellow-400/30">
                          {project.year}
                        </span>
                      </div>
                    )}

                    {/* Icon */}
                    <div className="absolute top-4 left-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center border ${
                        isPhotography
                          ? 'bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border-yellow-400/40'
                          : 'bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border-yellow-400/30'
                      }`}>
                        <Icon className={`w-4 h-4 ${isPhotography ? 'text-yellow-400' : 'text-yellow-400'}`} />
                      </div>
                    </div>

                    {/* Photography Badge */}
                    {isPhotography && (
                      <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full border border-yellow-400/50 shadow-lg">
                          PHOTOGRAPHY
                        </span>
                      </div>
                    )}

                    {/* Video Play Button - Center of Image */}
                    {project.videoUrl && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button
                          onClick={(e) => handleVideoClick(e, project.videoUrl)}
                          className="w-16 h-16 bg-black/80 hover:bg-yellow-400 text-white hover:text-black rounded-full flex items-center justify-center transition-all duration-300 border-2 border-yellow-400/50 hover:border-yellow-400 hover:scale-110 backdrop-blur-sm"
                          title="Watch Video"
                        >
                          <Play className="w-6 h-6 ml-1" fill="currentColor" />
                        </button>
                      </div>
                    )}

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className={`flex items-center space-x-2 mb-2 text-xs ${
                        isPhotography ? 'text-yellow-400' : 'text-yellow-400/80'
                      }`}>
                        <MapPin className="w-3 h-3" />
                        <span>{project.location}</span>
                      </div>

                      <h4 className={`text-lg font-bold mb-2 transition-colors ${
                        isPhotography
                          ? 'text-white group-hover:text-yellow-400'
                          : 'text-white group-hover:text-yellow-400'
                      }`}>
                        {project.title}
                      </h4>

                      <p className={`text-sm line-clamp-2 ${
                        isPhotography ? 'text-yellow-100' : 'text-gray-300'
                      }`}>
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Achievement Summary */}
        <div className={`mt-20 text-center transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute -inset-6 bg-gradient-to-br from-black/80 via-gray-900/60 to-black/80 backdrop-blur-sm rounded-3xl border border-yellow-400/20"></div>
            <div className="relative p-8 md:p-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                From <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Kuwait to the World
                </span>
              </h3>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6">
                Our journey spans continents and cultures, from the stages of Kuwait to the international
                spotlight in Paris, South Africa, Lebanon, and the UAE. Each performance tells our story
                of breaking barriers and creating unforgettable moments through the universal language of dance.
              </p>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-1 bg-gradient-to-r from-yellow-400 to-orange-500"></div>
                <span className="text-yellow-400 font-semibold tracking-wider">KULTURE TRIBE</span>
                <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-yellow-400"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Component */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
          <div className={`relative max-w-6xl w-full max-h-[90vh] rounded-2xl border overflow-hidden ${
            selectedProject.category === 'photography'
              ? 'bg-gradient-to-br from-yellow-900/95 to-orange-900/95 border-yellow-400/40'
              : 'bg-black/95 border-yellow-400/30'
          }`}>

            {/* Close Button */}
            <button
              onClick={closeModal}
              className={`absolute top-4 right-4 z-10 w-10 h-10 text-white rounded-full flex items-center justify-center transition-all duration-300 border ${
                selectedProject.category === 'photography'
                  ? 'bg-yellow-900/80 hover:bg-yellow-400 hover:text-black border-yellow-400/40'
                  : 'bg-black/80 hover:bg-yellow-400 hover:text-black border-yellow-400/30'
              }`}
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="flex flex-col md:flex-row h-full">

              {/* Image Gallery Section */}
              <div className="md:w-2/3 relative bg-black">
                {selectedProject.galleryImages && selectedProject.galleryImages.length > 0 && (
                  <>
                    {/* Main Image */}
                    <div className="relative h-64 md:h-96 lg:h-[500px] overflow-hidden">
                      <img
                        src={selectedProject.galleryImages[currentImageIndex]}
                        alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                        className="w-full h-full object-cover"
                      />

                      {/* Navigation Arrows */}
                      {selectedProject.galleryImages.length > 1 && (
                        <>
                          <button
                            onClick={prevImage}
                            className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 text-white rounded-full flex items-center justify-center transition-all duration-300 ${
                              selectedProject.category === 'photography'
                                ? 'bg-yellow-900/70 hover:bg-yellow-400 hover:text-black'
                                : 'bg-black/70 hover:bg-yellow-400 hover:text-black'
                            }`}
                          >
                            <ChevronLeft className="w-5 h-5" />
                          </button>
                          <button
                            onClick={nextImage}
                            className={`absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 text-white rounded-full flex items-center justify-center transition-all duration-300 ${
                              selectedProject.category === 'photography'
                                ? 'bg-yellow-900/70 hover:bg-yellow-400 hover:text-black'
                                : 'bg-black/70 hover:bg-yellow-400 hover:text-black'
                            }`}
                          >
                            <ChevronRight className="w-5 h-5" />
                          </button>
                        </>
                      )}
                    </div>

                    {/* Thumbnail Strip */}
                    {selectedProject.galleryImages.length > 1 && (
                      <div className="flex space-x-2 p-4 overflow-x-auto bg-black/50">
                        {selectedProject.galleryImages.map((image, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                              index === currentImageIndex
                                ? 'border-yellow-400 scale-110'
                                : selectedProject.category === 'photography'
                                  ? 'border-yellow-400/40 hover:border-yellow-400/70'
                                  : 'border-white/30 hover:border-yellow-400/60'
                            }`}
                          >
                            <img
                              src={image}
                              alt={`Thumbnail ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* Project Information Section */}
              <div className={`md:w-1/3 p-6 ${
                selectedProject.category === 'photography'
                  ? 'bg-gradient-to-br from-yellow-900/90 to-orange-900/90'
                  : 'bg-gradient-to-br from-black/90 to-gray-900/90'
              }`}>
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border ${
                    selectedProject.category === 'photography'
                      ? 'bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border-yellow-400/40'
                      : 'bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border-yellow-400/30'
                  }`}>
                    {React.createElement(selectedProject.icon, {
                      className: `w-5 h-5 text-yellow-400`
                    })}
                  </div>
                  <div className={`text-sm ${
                    selectedProject.category === 'photography' ? 'text-yellow-400' : 'text-yellow-400/80'
                  }`}>
                    <span className="block">{selectedProject.location}</span>
                    <span className="block">{selectedProject.year}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                  {selectedProject.title}
                </h3>

                <p className="text-gray-200 leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                {/* Category Badge */}
                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full border capitalize ${
                    selectedProject.category === 'photography'
                      ? 'bg-yellow-400/20 text-yellow-400 border-yellow-400/40'
                      : 'bg-yellow-400/20 text-yellow-400 border-yellow-400/30'
                  }`}>
                    {selectedProject.category.replace('-', ' ')}
                  </span>
                </div>

                {/* Image Counter */}
                {selectedProject.galleryImages && selectedProject.galleryImages.length > 1 && (
                  <div className="text-center text-sm text-gray-400 mt-auto pt-4">
                    {currentImageIndex + 1} / {selectedProject.galleryImages.length}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default OurWork;