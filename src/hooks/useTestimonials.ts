import { Testimonial } from '../types/testimonial';

export function useTestimonials(): Testimonial[] {
  return [
    {
      id: 1,
      name: "Sarah Chen",
      role: "CEO",
      company: "TechFlow Solutions",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=400",
      content: "SenhTech Agency transformed our customer service with their AI automation. Our response time dropped by 80% and customer satisfaction increased dramatically.",
      rating: 5
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Marketing Director",
      company: "Global Retail Inc",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
      content: "Their social media automation tools have revolutionized our content distribution. We've seen a 300% increase in engagement across all platforms.",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Watson",
      role: "Operations Manager",
      company: "HealthCare Plus",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400",
      content: "The AI appointment scheduling system has eliminated booking conflicts and reduced our administrative workload by 60%. Simply incredible!",
      rating: 5
    }
  ];
}