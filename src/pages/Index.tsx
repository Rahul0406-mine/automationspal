
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Briefcase,
  DollarSign,
  Target,
  Clock,
  Activity,
  CheckCircle,
  Calendar,
  TrendingUp,
  Bell
} from "lucide-react";
import ClientEngagementDashboard from "@/components/ClientEngagementDashboard";
import OperationsDashboard from "@/components/OperationsDashboard";
import IntelligenceDashboard from "@/components/IntelligenceDashboard";
import AdminControlCenter from "@/components/AdminControlCenter";
import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";

const Index = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const dashboardStats = {
    totalLeads: 147,
    activeDeals: 23,
    monthlyRevenue: 450000,
    conversionRate: 24.5,
    averageResponseTime: "2.3 min",
    aiAutomationSavings: "127 hrs/month"
  };

  const getPageTitle = () => {
    switch (activeTab) {
      case "engagement": return "Client Engagement Hub";
      case "operations": return "Operations Center";
      case "intelligence": return "Intelligence & Strategy";
      case "admin": return "Admin Control Center";
      default: return "Dashboard Overview";
    }
  };

  const getPageSubtitle = () => {
    switch (activeTab) {
      case "engagement": return "AI-powered lead management and conversion tools";
      case "operations": return "Automate documentation and deal tracking";
      case "intelligence": return "Data-driven insights and market analytics";
      case "admin": return "Configure AI agents and system settings";
      default: return "Your real estate automation command center";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="flex-1 flex flex-col">
        <TopBar title={getPageTitle()} subtitle={getPageSubtitle()} />
        
        <main className="flex-1 p-6">
          {activeTab === "overview" && (
            <div className="space-y-6">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                <Card className="bg-white">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2">
                      <Users className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="text-2xl font-bold text-gray-800">{dashboardStats.totalLeads}</p>
                        <p className="text-sm text-gray-600">Total Leads</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2">
                      <Briefcase className="w-5 h-5 text-orange-600" />
                      <div>
                        <p className="text-2xl font-bold text-gray-800">{dashboardStats.activeDeals}</p>
                        <p className="text-sm text-gray-600">Active Deals</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2">
                      <DollarSign className="w-5 h-5 text-green-600" />
                      <div>
                        <p className="text-2xl font-bold text-gray-800">${(dashboardStats.monthlyRevenue / 1000).toFixed(0)}K</p>
                        <p className="text-sm text-gray-600">Monthly Revenue</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2">
                      <Target className="w-5 h-5 text-purple-600" />
                      <div>
                        <p className="text-2xl font-bold text-gray-800">{dashboardStats.conversionRate}%</p>
                        <p className="text-sm text-gray-600">Conversion</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-5 h-5 text-indigo-600" />
                      <div>
                        <p className="text-2xl font-bold text-gray-800">{dashboardStats.averageResponseTime}</p>
                        <p className="text-sm text-gray-600">Avg Response</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2">
                      <Activity className="w-5 h-5 text-yellow-600" />
                      <div>
                        <p className="text-2xl font-bold text-gray-800">127h</p>
                        <p className="text-sm text-gray-600">AI Savings</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Agent Cards Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-blue-800">
                      <Users className="w-6 h-6" />
                      <span>Lead Engagement Agent</span>
                    </CardTitle>
                    <CardDescription className="text-blue-600">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800 mr-2">
                        Active
                      </span>
                      AI-powered lead nurturing and conversion
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-blue-700 mb-4">
                      Processing 24 leads today with 85% response rate. Auto-scheduled 12 appointments this week.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-blue-600">Last activity: 2 min ago</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-orange-800">
                      <Briefcase className="w-6 h-6" />
                      <span>Deal Management Agent</span>
                    </CardTitle>
                    <CardDescription className="text-orange-600">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800 mr-2">
                        Active
                      </span>
                      Automated deal tracking and documentation
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-orange-700 mb-4">
                      Monitoring 23 active deals. Generated 15 documents this week. 3 deals approaching closure.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-orange-600">Last update: 5 min ago</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Activity */}
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Latest updates from your AI agents</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-3 rounded-lg bg-green-50 border border-green-200">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">New lead qualified by voice agent</p>
                        <p className="text-xs text-gray-600">Sarah Johnson - 3 bedroom property inquiry</p>
                      </div>
                      <Badge variant="secondary">2 min ago</Badge>
                    </div>
                    
                    <div className="flex items-center space-x-4 p-3 rounded-lg bg-blue-50 border border-blue-200">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">Appointment scheduled automatically</p>
                        <p className="text-xs text-gray-600">Mike Chen - Property viewing tomorrow 2PM</p>
                      </div>
                      <Badge variant="secondary">5 min ago</Badge>
                    </div>
                    
                    <div className="flex items-center space-x-4 p-3 rounded-lg bg-purple-50 border border-purple-200">
                      <TrendingUp className="w-5 h-5 text-purple-600" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">Market trend alert generated</p>
                        <p className="text-xs text-gray-600">Downtown area showing 15% price increase</p>
                      </div>
                      <Badge variant="secondary">10 min ago</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "engagement" && <ClientEngagementDashboard />}
          {activeTab === "operations" && <OperationsDashboard />}
          {activeTab === "intelligence" && <IntelligenceDashboard />}
          {activeTab === "admin" && <AdminControlCenter />}
        </main>
      </div>
    </div>
  );
};

export default Index;
