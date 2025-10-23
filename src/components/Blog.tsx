import { motion } from 'framer-motion';

export interface BlogTopic {
    id: string;
    title: string;
    image: string;
}

interface BlogProps {
    onTopicClick: (topicId: string) => void;
}

const blogTopics: BlogTopic[] = [
    {
        id: 'home-workstation',
        title: 'Home Workstation',
        image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800',
    },
    {
        id: 'erp-cocktails',
        title: 'ERP Cocktails',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    },
    {
        id: 'my-portfolio',
        title: 'My Portfolio',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800',
    },
];

export function Blog({ onTopicClick }: BlogProps) {
    return (
        <section id="blog" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl mb-4">Blog</h2>
                    <p className="text-xl text-foreground/60">
                        Insights and stories from my journey
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogTopics.map((topic, index) => (
                        <motion.div
                            key={topic.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            onClick={() => onTopicClick(topic.id)}
                            className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-[4/3]"
                        >
                            <img
                                src={topic.image}
                                alt={topic.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <div className="backdrop-blur-xl bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 rounded-xl px-4 py-3">
                                    <h3 className="text-2xl font-bold text-white">{topic.title}</h3>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

