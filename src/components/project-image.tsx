"use client";

interface ProjectImageProps {
  src: string;
  title: string;
  category: string;
}

export default function ProjectImage({
  src,
  title,
  category,
}: ProjectImageProps) {
  return (
    <img
      className="project-card-image"
      src={src}
      alt={`Project preview: ${title}`}
      width={640}
      height={360}
      loading="lazy"
      decoding="async"
      onError={(event) => {
        console.error(
          `Error loading project image "${src}":`,
          event.currentTarget.src,
        );
        if (
          category.trim().toLowerCase() === "figma" &&
          !event.currentTarget.src.endsWith("/images/figma.png")
        ) {
          event.currentTarget.src = "/images/figma.png";
          return;
        }
        event.currentTarget.hidden = true;
      }}
    />
  );
}
