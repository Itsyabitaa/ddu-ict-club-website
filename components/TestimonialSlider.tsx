"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TestimonialCard } from "./TestimonialCard";
import { Testimonial } from "@/lib/types";
import { Button } from "./ui/button";

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

export function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setIsTransitioning(false);
      }, 500);
    }
  };

  const goToPrevious = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        setIsTransitioning(false);
      }, 500);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex, testimonials.length]);

  return (
    <div className="relative min-h-[300px] flex items-center justify-center px-12 md:px-16">
      {/* Previous Button */}
      <Button
        onClick={goToPrevious}
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 rounded-full border-2 border-border hover:border-primary h-12 w-12 bg-background hover:bg-background shadow-lg"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      {/* Testimonial Card */}
      <div
        className={`transition-opacity duration-500 w-full max-w-2xl mx-auto ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        <TestimonialCard
          quote={testimonials[currentIndex].quote}
          author={testimonials[currentIndex].author}
          role={testimonials[currentIndex].role}
        />
      </div>

      {/* Next Button */}
      <Button
        onClick={goToNext}
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 rounded-full border-2 border-border hover:border-primary h-12 w-12 bg-background hover:bg-background shadow-lg"
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Navigation Dots */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isTransitioning) {
                setIsTransitioning(true);
                setTimeout(() => {
                  setCurrentIndex(index);
                  setIsTransitioning(false);
                }, 500);
              }
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-8 bg-primary"
                : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

