
import { useState } from "react";
import { 
  Bell, 
  Search, 
  ChevronDown, 
  MessageSquare,
  User
} from "lucide-react";
import { Button } from "@/components/ui/button";

const AdminHeader = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  
  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <header className="bg-white border-b border-gray-200 py-4 px-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center rounded-md border border-gray-300 px-3 py-1.5 focus-within:border-beauty-500 focus-within:ring-1 focus-within:ring-beauty-500 w-72">
          <Search className="h-4 w-4 text-neutral-400" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="border-0 focus:outline-none focus:ring-0 text-sm ml-2 w-full bg-transparent"
          />
        </div>
        
        <div className="flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="icon" 
            className="relative text-neutral-600 hover:text-beauty-600 hover:bg-neutral-100"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-beauty-500 rounded-full"></span>
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="relative text-neutral-600 hover:text-beauty-600 hover:bg-neutral-100"
          >
            <MessageSquare className="h-5 w-5" />
          </Button>
          
          <div className="relative">
            <Button 
              variant="ghost" 
              className="flex items-center space-x-2 hover:bg-neutral-100"
              onClick={toggleProfile}
            >
              <div className="w-8 h-8 rounded-full bg-beauty-100 flex items-center justify-center">
                <User className="h-4 w-4 text-beauty-600" />
              </div>
              <div className="text-sm text-left">
                <div className="font-medium text-neutral-900">Admin User</div>
                <div className="text-xs text-neutral-500">Administrator</div>
              </div>
              <ChevronDown className="h-4 w-4 text-neutral-400" />
            </Button>
            
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-10">
                <a href="#" className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100">
                  Your Profile
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100">
                  Settings
                </a>
                <div className="border-t my-1"></div>
                <a href="/login" className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100">
                  Sign out
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
