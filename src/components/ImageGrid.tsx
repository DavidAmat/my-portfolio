import { ImageWithFallback } from './figma/ImageWithFallback';

interface ImageGridProps {
  images: Array<{
    src: string;
    alt: string;
    caption?: string;
  }>;
  columns?: 1 | 2 | 3;
}

export function ImageGrid({ images, columns = 2 }: ImageGridProps) {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  };

  return (
    <div className={`my-8 grid ${gridCols[columns]} gap-6`}>
      {images.map((image, index) => (
        <div key={index} className="space-y-3">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
            <ImageWithFallback
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
          {image.caption && (
            <p className="text-sm text-center text-foreground/60 italic">
              {image.caption}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
