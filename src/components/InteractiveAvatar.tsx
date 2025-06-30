
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface InteractiveAvatarProps {
  src: string;
  alt: string;
  name: string;
  title: string;
  skills: string[];
}

export const InteractiveAvatar = ({ src, alt, name, title, skills }: InteractiveAvatarProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div 
          className="relative cursor-pointer transform transition-all duration-300 hover:scale-110"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Avatar className={`w-40 h-40 border-4 border-violet-300 shadow transition-all duration-300 ${
            isHovered ? 'shadow-2xl shadow-violet-500/50 border-violet-400' : ''
          }`}>
            <AvatarImage src={src} alt={alt} className="object-cover" />
            <AvatarFallback>SSR</AvatarFallback>
          </Avatar>
          
          {/* Floating particles effect */}
          {isHovered && (
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-violet-400 rounded-full animate-ping opacity-75"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${i * 0.2}s`,
                    animationDuration: '2s'
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </HoverCardTrigger>
      
      <HoverCardContent className="w-80 p-4 bg-gradient-to-br from-violet-900 to-purple-900 border-violet-500 text-white">
        <div className="space-y-3">
          <div>
            <h4 className="text-lg font-semibold">{name}</h4>
            <p className="text-sm text-violet-200">{title}</p>
          </div>
          
          <div>
            <p className="text-sm font-medium mb-2">Core Skills:</p>
            <div className="flex flex-wrap gap-1">
              {skills.slice(0, 6).map((skill, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="text-xs bg-violet-700 text-violet-100 hover:bg-violet-600"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="text-xs text-violet-300 italic">
            Click to explore my journey in tech!
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};
