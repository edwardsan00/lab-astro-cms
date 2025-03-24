import React, { useState, useEffect, useCallback } from "react";

export interface CarouselItem {
  id: string | number;
  imgSrc: string;
  title: string;
  description?: string;
  url?: string;
  actions?: Array<{
    label: string;
    url: string;
    variant?: "primary" | "secondary" | "outline";
  }>;
}

export interface CarouselProps {
  items: CarouselItem[];
  autoPlay?: boolean;
  interval?: number;
  showDots?: boolean;
  className?: string;
}

export const Carousel: React.FC<CarouselProps> = ({
  items,
  autoPlay = true,
  interval = 5000,
  showDots = true,
  className = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  }, [items.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!autoPlay) return;

    const intervalId = setInterval(() => {
      nextSlide();
    }, interval);

    return () => clearInterval(intervalId);
  }, [autoPlay, interval, nextSlide]);

  if (!items.length) return null;

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item) => (
          <div key={item.id} className="relative min-w-full">
            <img
              src={item.imgSrc}
              alt={item.title}
              className="h-[400px] w-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 p-4 text-center text-white">
              <h2 className="mb-2 text-3xl font-bold">{item.title}</h2>
              {item.description && (
                <p className="mb-4 max-w-md text-lg">{item.description}</p>
              )}
              {item.actions && item.actions.length > 0 && (
                <div className="mt-4 flex space-x-4">
                  {item.actions.map((action, i) => {
                    const variantStyles = {
                      primary: "bg-blue-600 text-white hover:bg-blue-700",
                      secondary: "bg-white text-gray-900 hover:bg-gray-100",
                      outline:
                        "border border-white text-white hover:bg-white/10",
                    };
                    return (
                      <a
                        key={i}
                        href={action.url}
                        className={`inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                          variantStyles[action.variant || "primary"]
                        }`}
                      >
                        {action.label}
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white transition-all hover:bg-black/50"
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white transition-all hover:bg-black/50"
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>

      {showDots && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 space-x-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`inline-block h-2 w-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
