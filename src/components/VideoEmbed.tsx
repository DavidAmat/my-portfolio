interface VideoEmbedProps {
  src: string;
  title?: string;
  caption?: string;
}

export function VideoEmbed({ src, caption }: VideoEmbedProps) {
  return (
    <div className="my-8">
      <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-xl bg-gray-100 dark:bg-gray-900">
        <video
          controls
          className="w-full h-full"
          poster={src.replace(/\.(mp4|webm)$/, '-poster.jpg')}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {caption && (
        <p className="mt-3 text-center text-sm text-foreground/60 italic">
          {caption}
        </p>
      )}
    </div>
  );
}
