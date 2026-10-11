import { useCallback, useEffect, useState, type KeyboardEvent } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, MoveUpRight } from "lucide-react";
import { Link } from "wouter";
import { projects } from "@/data/portfolio";

export function ProjectCarousel() {
  const reduceMotion = useReducedMotion();
  const jumpToSlide = reduceMotion ?? false;
  const [viewportRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    loop: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [snapCount, setSnapCount] = useState(0);

  const updateSelection = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setSnapCount(emblaApi.scrollSnapList().length);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    setSnapCount(emblaApi.scrollSnapList().length);
    updateSelection();
    emblaApi.on("select", updateSelection);
    emblaApi.on("reInit", updateSelection);

    return () => {
      emblaApi.off("select", updateSelection);
      emblaApi.off("reInit", updateSelection);
    };
  }, [emblaApi, updateSelection]);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      emblaApi?.scrollPrev(jumpToSlide);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      emblaApi?.scrollNext(jumpToSlide);
    }
  };

  return (
    <div className="project-carousel">
      <div
        className="project-carousel__viewport"
        ref={viewportRef}
        role="group"
        aria-label="Selected projects carousel. Use left and right arrow keys to navigate."
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        <div className="project-carousel__track">
          {projects.map((project, index) => (
            <article
              className="project-carousel__slide"
              key={project.slug}
              aria-label={`${index + 1} of ${projects.length}: ${project.title}`}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="project-carousel__card"
                aria-label={`View ${project.title} project`}
              >
                <span className="project-carousel__image-wrap">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    loading="lazy"
                  />
                  <span className="project-carousel__open" aria-hidden="true">
                    <MoveUpRight size={18} />
                  </span>
                </span>
                <span className="project-carousel__meta">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span>{project.category}</span>
                </span>
                <span className="project-carousel__title">{project.title}</span>
                <span className="project-carousel__description">
                  {project.description}
                </span>
                <span className="project-carousel__technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>

      <div className="project-carousel__controls">
        <div className="project-carousel__position" aria-live="polite">
          <span>{String(selectedIndex + 1).padStart(2, "0")}</span>
          <span className="project-carousel__position-rule" />
          <span>{String(snapCount).padStart(2, "0")}</span>
        </div>
        <div className="project-carousel__dots" aria-label="Choose a carousel position">
          {Array.from({ length: snapCount }, (_, index) => (
            <button
              type="button"
              key={index}
              aria-label={`Go to carousel position ${index + 1} of ${snapCount}`}
              aria-current={selectedIndex === index ? "true" : undefined}
              onClick={() => emblaApi?.scrollTo(index, jumpToSlide)}
            />
          ))}
        </div>
        <div className="project-carousel__arrows">
          <button
            type="button"
            aria-label="Previous projects"
            onClick={() => emblaApi?.scrollPrev(jumpToSlide)}
            disabled={!emblaApi?.canScrollPrev()}
          >
            <ArrowLeft size={18} aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Next projects"
            onClick={() => emblaApi?.scrollNext(jumpToSlide)}
            disabled={!emblaApi?.canScrollNext()}
          >
            <ArrowRight size={18} aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
