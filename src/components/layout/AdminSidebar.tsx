
import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Calendar, 
  Users, 
  Settings, 
  Scissors, 
  LogOut,
  Store,
  Clock,
  BarChart3
} from "lucide-react";
import { cn } from "@/lib/utils";

const AdminSidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/admin" },
    { name: "Appointments", icon: Calendar, path: "/admin/appointments" },
    { name: "Services", icon: Scissors, path: "/admin/services" },
    { name: "Staff", icon: Users, path: "/admin/staff" },
    { name: "Customers", icon: Users, path: "/admin/customers" },
    { name: "Schedule", icon: Clock, path: "/admin/schedule" },
    { name: "Locations", icon: Store, path: "/admin/locations" },
    { name: "Reports", icon: BarChart3, path: "/admin/reports" },
    { name: "Settings", icon: Settings, path: "/admin/settings" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="h-screen w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b">
        <Link to="/admin" className="flex items-center">
          <span className="text-beauty-600 font-heading text-2xl font-semibold">BeautySpot</span>
        </Link>
        <div className="text-xs text-neutral-500 mt-1">Admin Portal</div>
      </div>
      
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={cn(
                  "flex items-center px-4 py-3 text-sm font-medium rounded-md",
                  isActive(item.path)
                    ? "bg-beauty-50 text-beauty-700"
                    : "text-neutral-700 hover:bg-neutral-100"
                )}
              >
                <item.icon className={cn("h-5 w-5 mr-3", isActive(item.path) ? "text-beauty-600" : "text-neutral-400")} />
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="p-4 border-t">
        <Link
          to="/login"
          className="flex items-center px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100 rounded-md"
        >
          <LogOut className="h-5 w-5 mr-3 text-neutral-400" />
          Logout
        </Link>
      </div>
    </div>
  );
};

export default AdminSidebar;
