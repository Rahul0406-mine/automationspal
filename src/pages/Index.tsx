
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  Calendar, 
  Phone, 
  MessageSquare, 
  TrendingUp, 
  FileText, 
  Settings,
  BarChart3,
  MapPin,
  Clock,
  Target,
  Zap,
  Bell,
  CheckCircle,
  AlertCircle,
  Star,
  ThumbsUp,
  Briefcase,
  PieChart,
  Home,
  DollarSign,
  Activity
} from "lucide-react";
import ClientEngagementDashboard from "@/components/ClientEngagementDashboard";
import OperationsDashboard from "@/components/OperationsDashboard";
import IntelligenceDashboard from "@/components/IntelligenceDashboard";
import AdminControlCenter from "@/components/AdminControlCenter";

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold text-slate-800 mb-2">Real Estate AI Command Center</h1>
              <p className="text-slate-600 text-lg">Streamline your operations with intelligent automation</p>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                <Activity className="w-4 h-4 mr-1" />
                All Systems Active
              </Badge>
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
            <Card className="border-0 shadow-sm bg-white/70 backdrop-blur-sm">
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-2xl font-bold text-slate-800">{dashboardStats.totalLeads}</p>
                    <p className="text-sm text-slate-600">Total Leads</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white/70 backdrop-blur-sm">
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <Briefcase className="w-5 h-5 text-orange-600" />
                  <div>
                    <p className="text-2xl font-bold text-slate-800">{dashboardStats.activeDeals}</p>
                    <p className="text-sm text-slate-600">Active Deals</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white/70 backdrop-blur-sm">
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <DollarSign className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="text-2xl font-bold text-slate-800">${(dashboardStats.monthlyRevenue / 1000).toFixed(0)}K</p>
                    <p className="text-sm text-slate-600">Monthly Revenue</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white/70 backdrop-blur-sm">
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <Target className="w-5 h-5 text-purple-600" />
                  <div>
                    <p className="text-2xl font-bold text-slate-800">{dashboardStats.conversionRate}%</p>
                    <p className="text-sm text-slate-600">Conversion</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white/70 backdrop-blur-sm">
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-indigo-600" />
                  <div>
                    <p className="text-2xl font-bold text-slate-800">{dashboardStats.averageResponseTime}</p>
                    <p className="text-sm text-slate-600">Avg Response</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white/70 backdrop-blur-sm">
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-yellow-600" />
                  <div>
                    <p className="text-2xl font-bold text-slate-800">127h</p>
                    <p className="text-sm text-slate-600">AI Savings</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Main Dashboard Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8 bg-white/80 backdrop-blur-sm border border-white/20">
            <TabsTrigger value="overview" className="flex items-center space-x-2">
              <Home className="w-4 h-4" />
              <span>Overview</span>
            </TabsTrigger>
            <TabsTrigger value="engagement" className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>Client Engagement</span>
            </TabsTrigger>
            <TabsTrigger value="operations" className="flex items-center space-x-2">
              <Briefcase className="w-4 h-4" />
              <span>Operations</span>
            </TabsTrigger>
            <TabsTrigger value="intelligence" className="flex items-center space-x-2">
              <BarChart3 className="w-4 h-4" />
              <span>Intelligence</span>
            </TabsTrigger>
            <TabsTrigger value="admin" className="flex items-center space-x-2">
              <Settings className="w-4 h-4" />
              <span>Admin</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Quick Access Cards */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-600 to-blue-700 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="w-6 h-6" />
                    <span>Client Engagement Hub</span>
                  </CardTitle>
                  <CardDescription className="text-blue-100">
                    AI-powered lead management and conversion tools
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">AI Scheduler</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4" />
                      <span className="text-sm">Voice Agent</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Target className="w-4 h-4" />
                      <span className="text-sm">Lead Scoring</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FileText className="w-4 h-4" />
                      <span className="text-sm">Ad Generator</span>
                    </div>
                  </div>
                  <Button 
                    variant="secondary" 
                    className="w-full"
                    onClick={() => setActiveTab("engagement")}
                  >
                    Open Dashboard
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-600 to-orange-700 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Briefcase className="w-6 h-6" />
                    <span>Operations Center</span>
                  </CardTitle>
                  <CardDescription className="text-orange-100">
                    Automate documentation and deal tracking
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-sm">Deal Tracker</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FileText className="w-4 h-4" />
                      <span className="text-sm">Auto Docs</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Activity className="w-4 h-4" />
                      <span className="text-sm">Team Monitor</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Bell className="w-4 h-4" />
                      <span className="text-sm">Alerts</span>
                    </div>
                  </div>
                  <Button 
                    variant="secondary" 
                    className="w-full"
                    onClick={() => setActiveTab("operations")}
                  >
                    Open Dashboard
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-600 to-purple-700 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BarChart3 className="w-6 h-6" />
                    <span>Intelligence & Strategy</span>
                  </CardTitle>
                  <CardDescription className="text-purple-100">
                    Data-driven insights and market analytics
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-sm">Market Trends</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">Price Prediction</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <PieChart className="w-4 h-4" />
                      <span className="text-sm">Lead Insights</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4" />
                      <span className="text-sm">Performance</span>
                    </div>
                  </div>
                  <Button 
                    variant="secondary" 
                    className="w-full"
                    onClick={() => setActiveTab("intelligence")}
                  >
                    Open Dashboard
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-slate-600 to-slate-700 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Settings className="w-6 h-6" />
                    <span>Admin Control Center</span>
                  </CardTitle>
                  <CardDescription className="text-slate-100">
                    Configure AI agents and system settings
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center space-x-2">
                      <Zap className="w-4 h-4" />
                      <span className="text-sm">AI Agents</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Settings className="w-4 h-4" />
                      <span className="text-sm">Configurations</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <BarChart3 className="w-4 h-4" />
                      <span className="text-sm">Analytics</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Bell className="w-4 h-4" />
                      <span className="text-sm">Updates</span>
                    </div>
                  </div>
                  <Button 
                    variant="secondary" 
                    className="w-full"
                    onClick={() => setActiveTab("admin")}
                  >
                    Open Dashboard
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest updates across all systems</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-3 rounded-lg bg-green-50 border border-green-200">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">New lead qualified by AI Voice Agent</p>
                      <p className="text-xs text-slate-600">Sarah Johnson - 3 bedroom property inquiry</p>
                    </div>
                    <Badge variant="secondary">2 min ago</Badge>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-3 rounded-lg bg-blue-50 border border-blue-200">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Appointment scheduled automatically</p>
                      <p className="text-xs text-slate-600">Mike Chen - Property viewing tomorrow 2PM</p>
                    </div>
                    <Badge variant="secondary">5 min ago</Badge>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-3 rounded-lg bg-purple-50 border border-purple-200">
                    <TrendingUp className="w-5 h-5 text-purple-600" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Market trend alert generated</p>
                      <p className="text-xs text-slate-600">Downtown area showing 15% price increase</p>
                    </div>
                    <Badge variant="secondary">10 min ago</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="engagement">
            <ClientEngagementDashboard />
          </TabsContent>

          <TabsContent value="operations">
            <OperationsDashboard />
          </TabsContent>

          <TabsContent value="intelligence">
            <IntelligenceDashboard />
          </TabsContent>

          <TabsContent value="admin">
            <AdminControlCenter />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
