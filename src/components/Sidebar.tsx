
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Briefcase, 
  BarChart3, 
  Settings,
  Home,
  Calendar,
  MessageSquare,
  FileText,
  Activity
} from "lucide-react";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar = ({ activeTab, setActiveTab }: SidebarProps) => {
  const menuItems = [
    { id: "overview", label: "Dashboard", icon: Home },
    { id: "engagement", label: "Client Engagement", icon: Users },
    { id: "operations", label: "Operations", icon: Briefcase },
    { id: "intelligence", label: "Intelligence", icon: BarChart3 },
    { id: "admin", label: "Admin Control", icon: Settings },
  ];

  return (
    <div className="w-64 min-h-screen bg-white border-r border-gray-200 flex flex-col">
      {/* Logo/Header */}
      <div className="p-6 border-b border-gray-100">
        <h2 className="text-xl font-bold text-gray-800">Real Estate AI</h2>
        <p className="text-sm text-gray-500 mt-1">Command Center</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <li key={item.id}>
                <Button
                  variant={isActive ? "default" : "ghost"}
                  className={`w-full justify-start ${
                    isActive 
                      ? "bg-blue-600 text-white" 
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                  onClick={() => setActiveTab(item.id)}
                >
                  <Icon className="w-4 h-4 mr-3" />
                  {item.label}
                </Button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-100">
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Activity className="w-4 h-4 text-green-500" />
          <span>All Systems Active</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
