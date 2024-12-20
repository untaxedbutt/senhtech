import { 
  MessageSquare, 
  Bot, 
  PhoneCall, 
  Share2, 
  Globe, 
  Mail,
  MessageCircle,
  Send
} from 'lucide-react';
import { Service } from '../types/service';

export function useServices(): Service[] {
  return [
    {
      icon: MessageSquare,
      title: 'AI Customer Support',
      description: 'Intelligent chatbots providing 24/7 customer support with human-like understanding.',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=800'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp Business AI',
      description: 'Automated WhatsApp business solutions for customer engagement and support.',
      image: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?auto=format&fit=crop&q=80&w=800'
    },
    {
      icon: Send,
      title: 'Telegram Automation',
      description: 'Smart Telegram bots for community management and content distribution.',
      image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=800'
    },
    {
      icon: Bot,
      title: 'AI Appointment Bot',
      description: 'Smart scheduling assistant that manages calendars and sends automated reminders.',
      image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&q=80&w=800'
    },
    {
      icon: PhoneCall,
      title: 'AI Voice Assistant',
      description: 'Advanced voice AI system for natural call handling and appointment scheduling.',
      image: 'https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&q=80&w=800'
    },
    {
      icon: Share2,
      title: 'Social Media Automation',
      description: 'Automated content distribution across Instagram, YouTube, and Telegram.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800'
    },
    {
      icon: Globe,
      title: 'Website Design & Creation',
      description: 'Custom website development with modern design and AI-powered features.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
    },
    {
      icon: Mail,
      title: 'Email Marketing AI',
      description: 'Automated email campaigns with AI-driven personalization and targeting.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800'
    }
  ];
}