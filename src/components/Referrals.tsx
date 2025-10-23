import { Avatar, AvatarFallback } from './ui/avatar';
import { Quote } from 'lucide-react';

const referrals = [
  {
    name: 'Sarah Johnson',
    role: 'CTO at TechCorp',
    company: 'TechCorp',
    content: "David's expertise in AI and machine learning is exceptional. He delivered a complex neural network solution that exceeded our expectations and significantly improved our product's accuracy.",
    initials: 'SJ',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Michael Chen',
    role: 'Product Manager',
    company: 'DataViz Solutions',
    content: 'Working with David was a game-changer for our data analytics platform. His full-stack capabilities and deep understanding of data science made him invaluable to the team.',
    initials: 'MC',
    color: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Engineering',
    company: 'AI Innovations',
    content: "David is one of the most talented engineers I've worked with. His ability to bridge the gap between research and production-ready code is truly remarkable.",
    initials: 'ER',
    color: 'from-orange-500 to-red-500',
  },
  {
    name: 'James Park',
    role: 'Founder & CEO',
    company: 'StartupLab',
    content: 'David was instrumental in building our ML infrastructure from the ground up. His technical depth and problem-solving skills helped us scale our platform to thousands of users.',
    initials: 'JP',
    color: 'from-green-500 to-emerald-500',
  },
  {
    name: 'Lisa Wang',
    role: 'Senior Data Scientist',
    company: 'Analytics Pro',
    content: 'I had the pleasure of collaborating with David on several projects. His insights into complex algorithms and his ability to explain them clearly make him an excellent mentor.',
    initials: 'LW',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    name: 'Robert Taylor',
    role: 'VP of Technology',
    company: 'Cloud Solutions Inc.',
    content: "David's work on our MLOps pipeline was outstanding. He brought best practices from both software engineering and data science, resulting in a robust and scalable system.",
    initials: 'RT',
    color: 'from-yellow-500 to-orange-500',
  },
];

export function Referrals() {
  return (
    <section id="referrals" className="py-20 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl mb-4 tracking-tight">Referrals</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            What colleagues and clients say about working with me
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {referrals.map((referral, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-white/60 dark:bg-black/60 backdrop-blur-xl border border-black/5 dark:border-white/5 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Quote icon */}
              <div className="mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${referral.color} flex items-center justify-center`}>
                  <Quote size={24} className="text-white" />
                </div>
              </div>

              {/* Content */}
              <p className="text-foreground/70 mb-6 italic">
                "{referral.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-black/5 dark:border-white/5">
                <Avatar className="h-12 w-12">
                  <AvatarFallback className={`bg-gradient-to-br ${referral.color} text-white`}>
                    {referral.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm">{referral.name}</p>
                  <p className="text-xs text-foreground/60">
                    {referral.role}
                  </p>
                  <p className="text-xs text-foreground/50">
                    {referral.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-black/5 dark:border-white/5">
            <h3 className="mb-4">Interested in working together?</h3>
            <p className="text-foreground/60 mb-6 max-w-xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <button className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full hover:scale-105 transition-transform">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
