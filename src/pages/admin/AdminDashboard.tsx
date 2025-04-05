
import AdminLayout from "@/components/layout/AdminLayout";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Calendar, 
  Users, 
  DollarSign, 
  TrendingUp,
  Clock,
  Check,
  X,
} from "lucide-react";

const AdminDashboard = () => {
  // Sample data
  const stats = [
    { title: "Total Appointments", value: "124", icon: Calendar, trend: "+12% from last month" },
    { title: "New Clients", value: "35", icon: Users, trend: "+5% from last month" },
    { title: "Revenue", value: "$12,468", icon: DollarSign, trend: "+15% from last month" },
    { title: "Avg. Booking Value", value: "$124", icon: TrendingUp, trend: "+2% from last month" },
  ];
  
  // Sample upcoming appointments
  const upcomingAppointments = [
    { id: 1, customer: "Jenny Wilson", service: "Signature Facial", time: "10:00 AM", specialist: "Emma Thompson", status: "confirmed" },
    { id: 2, customer: "Robert Fox", service: "Deep Tissue Massage", time: "11:30 AM", specialist: "Michael Chen", status: "confirmed" },
    { id: 3, customer: "Kristin Watson", service: "Hair Styling", time: "1:00 PM", specialist: "Sofia Rodriguez", status: "pending" },
    { id: 4, customer: "Cameron Williamson", service: "Manicure", time: "2:30 PM", specialist: "Olivia Parker", status: "confirmed" },
    { id: 5, customer: "Leslie Alexander", service: "Body Scrub", time: "4:00 PM", specialist: "Emma Thompson", status: "cancelled" },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-heading font-semibold">Dashboard</h1>
          <p className="text-neutral-500">Welcome back, Admin User</p>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex justify-between">
                  <div>
                    <p className="text-sm font-medium text-neutral-500">{stat.title}</p>
                    <p className="text-3xl font-semibold mt-2">{stat.value}</p>
                    <p className="text-xs text-neutral-500 mt-1">{stat.trend}</p>
                  </div>
                  <div className="h-12 w-12 bg-beauty-50 rounded-full flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-beauty-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Today's Appointments */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="h-5 w-5 mr-2 text-beauty-600" />
              Today's Appointments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-neutral-500 border-b">
                    <th className="pb-3 font-medium">Client</th>
                    <th className="pb-3 font-medium">Service</th>
                    <th className="pb-3 font-medium">Time</th>
                    <th className="pb-3 font-medium">Specialist</th>
                    <th className="pb-3 font-medium">Status</th>
                    <th className="pb-3 font-medium text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {upcomingAppointments.map((appointment) => (
                    <tr key={appointment.id}>
                      <td className="py-3">{appointment.customer}</td>
                      <td className="py-3">{appointment.service}</td>
                      <td className="py-3">{appointment.time}</td>
                      <td className="py-3">{appointment.specialist}</td>
                      <td className="py-3">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          appointment.status === "confirmed" ? "bg-green-100 text-green-800" : 
                          appointment.status === "pending" ? "bg-yellow-100 text-yellow-800" : 
                          "bg-red-100 text-red-800"
                        }`}>
                          {appointment.status === "confirmed" ? (
                            <Check className="h-3 w-3 mr-1" />
                          ) : appointment.status === "cancelled" ? (
                            <X className="h-3 w-3 mr-1" />
                          ) : (
                            <Clock className="h-3 w-3 mr-1" />
                          )}
                          {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                        </span>
                      </td>
                      <td className="py-3 text-right">
                        <button className="text-beauty-600 hover:text-beauty-800 text-sm font-medium">
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
        
        {/* Additional Dashboard Widgets would go here */}
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
