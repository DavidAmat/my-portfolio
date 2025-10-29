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
        id: 'blog-1',
        title: 'Blog 1',
        image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800',
    },
    {
        id: 'blog-2',
        title: 'Blog 2',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
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
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent from-0% via-transparent via-50% to-black/100 to-100%" />
                            <h3 className="absolute bottom-6 left-6 right-6 text-2xl font-bold text-white">
                                {topic.title}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

