import { Link, useLocation, useNavigate } from "react-router-dom";
import { 
  Briefcase, 
  Users, 
  Clipboard,
  BarChart,
  Menu,
  Send,
  Bot,
  FileText,
  UserCheck,
  Video,
  Wrench
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Settings } from "lucide-react";

// Remove this duplicate import:
// import { Briefcase, Users, Clipboard, BarChart, Menu, Send, Bot, FileText, UserCheck, Video, Building } from "lucide-react";

const navItems = [
  {
    title: "Dashboard",
    icon: BarChart,
    href: "/",
  },
  {
    title: "Job Post",
    icon: Briefcase,
    href: "/jobs",
  },
  {
    title: "Candidates",
    icon: Users,
    href: "/candidates",
  },
  {
    title: "Shortlisted",
    icon: Clipboard,
    href: "/interviews",
  },
  {
    title: "Create A.I Interview",
    icon: Bot,
    href: "/create-interview",
  },
  {
    title: "Interview Session",
    icon: Video,
    href: "/interview-session",
  },
  {
    title: "Send Invite",
    icon: Send,
    href: "/send-invite",
  },
  {
    title: "Interview Results",
    icon: FileText,
    href: "/interview-result",
  },
  {
    title: "Hiring List",
    icon: UserCheck,
    href: "/hiring-list",
  },
  {
    title: "Human Resource",
    icon: Wrench,
    href: "/human-resource",
  },
];

export function Sidebar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed inset-y-0 left-0 w-64 border-r bg-background">
      <div className="flex h-16 items-center px-6">
        <img 
          src="/lovable-uploads/35cee2f9-1f94-4626-930c-cbfed4a21b40.png" 
          alt="Hey Rocket Logo" 
          className="h-8"
        />
      </div>
      <nav className="space-y-1 px-2 pt-10">
        {navItems.map((item) => (
          <Link
            key={item.title}
            to={item.href}
            className={cn(
              "flex items-center px-4 py-2 text-base rounded-md transition-colors font-semibold",
              location.pathname === item.href
                ? "bg-primary/10 text-blue-600"
                : "text-neutral-600 hover:bg-accent"
            )}
          >
            <item.icon className={cn(
              "h-5 w-5 mr-3",
              location.pathname === item.href
                ? "text-blue-600"
                : "text-neutral-600"
            )} />
            {item.title}
          </Link>
        ))}
      </nav>

      <div className="absolute bottom-0 w-full p-4 border-t">
        <button 
          className="flex items-center space-x-2 w-full px-4 py-2 text-base text-neutral-600 font-semibold hover:bg-accent rounded-md transition-colors mb-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Settings className="h-5 w-5 text-neutral-600" />
          <span>Settings</span>
        </button>
        <div className="text-neutral-600 text-sm font-medium px-4">
          1000 credits left
        </div>
      </div>
    </div>
  );
}