import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
  Bell,
  MessageSquare
} from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import OperationsDashboard from "@/components/OperationsDashboard";
import IntelligenceDashboard from "@/components/IntelligenceDashboard";
import AdminControlCenter from "@/components/AdminControlCenter";
import Sidebar from "@/components/Sidebar";
import LeadManagementDashboard from "@/components/LeadManagementDashboard";

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

  const recentClosedDeal = {
    clientName: "Sarah Johnson",
    propertyAddress: "123 Oak Street, Downtown",
    dealValue: "$450,000",
    closedDate: "Dec 18, 2024",
    totalTimeToClose: "18 days",
    leadSource: "Cold Call",
    timeline: [
      { step: "Lead Generation (Cold Call)", agent: "Voice Agent", duration: "2 hours", date: "Nov 30, 2024", details: "Initial contact made through AI cold calling system. Client showed interest in 3BR properties in downtown area." },
      { step: "Lead Qualification", agent: "Lead Scoring Agent", duration: "30 minutes", date: "Nov 30, 2024", details: "Lead scored 95/100 based on budget match, location preference, and urgency indicators." },
      { step: "Appointment Scheduling", agent: "Scheduler Agent", duration: "15 minutes", date: "Dec 1, 2024", details: "Property viewing scheduled for Dec 3, 2024 at 2:00 PM through automated scheduling system." },
      { step: "Property Viewing", agent: "Human Agent", duration: "1.5 hours", date: "Dec 3, 2024", details: "Client toured the property, showed strong interest, discussed financing options." },
      { step: "Offer Preparation", agent: "Deal Management Agent", duration: "2 hours", date: "Dec 4, 2024", details: "Purchase agreement drafted, market analysis conducted, offer strategy developed." },
      { step: "Negotiation", agent: "Human Agent + AI Support", duration: "3 days", date: "Dec 5-8, 2024", details: "Multiple counteroffers exchanged, AI assisted with market data and pricing strategy." },
      { step: "Contract Execution", agent: "Document Agent", duration: "4 hours", date: "Dec 9, 2024", details: "Legal documents prepared, e-signatures collected, terms finalized." },
      { step: "Inspection & Financing", agent: "Process Agent", duration: "7 days", date: "Dec 10-17, 2024", details: "Home inspection coordinated, mortgage processing tracked, final walkthrough scheduled." },
      { step: "Closing", agent: "Human Agent", duration: "2 hours", date: "Dec 18, 2024", details: "Final documents signed, keys transferred, deal officially closed." }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="flex-1 flex flex-col">
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

              {/* Interactive Inboxes */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-blue-800">
                      <MessageSquare className="w-6 h-6" />
                      <span>Chief Operating Agent</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                        <p className="text-sm text-gray-700 mb-2"><strong>System Message:</strong></p>
                        <p className="text-sm text-gray-600">
                          I am your Chief Operating Agent, responsible for controlling and coordinating all AI agent actions across your real estate operations. I manage workflow automation, agent task assignments, and ensure seamless integration between lead generation, client management, and deal processing systems.
                        </p>
                      </div>
                      <Button className="w-full" size="sm">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Send Message
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-green-800">
                      <TrendingUp className="w-6 h-6" />
                      <span>Chief Management Agent</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                        <p className="text-sm text-gray-700 mb-2"><strong>System Message:</strong></p>
                        <p className="text-sm text-gray-600">
                          I am your Chief Management Agent, overseeing the performance and efficiency of all AI agents in your system. I monitor KPIs, analyze agent effectiveness, track conversion rates, and provide strategic insights to optimize your real estate operations and maximize ROI.
                        </p>
                      </div>
                      <Button className="w-full" size="sm">
                        <TrendingUp className="w-4 h-4 mr-2" />
                        View Analytics
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Closed Deal */}
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle>Most Recent Closed Deal</CardTitle>
                  <CardDescription>Latest successful conversion from lead to client</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <div className="p-4 rounded-lg bg-green-50 border border-green-200 cursor-pointer hover:bg-green-100 transition-colors">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-semibold text-lg">{recentClosedDeal.clientName}</h4>
                              <p className="text-gray-600">{recentClosedDeal.propertyAddress}</p>
                              <p className="text-sm text-gray-500">Closed on {recentClosedDeal.closedDate}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-2xl font-bold text-green-600">{recentClosedDeal.dealValue}</p>
                              <p className="text-sm text-gray-600">{recentClosedDeal.totalTimeToClose} to close</p>
                            </div>
                          </div>
                        </div>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-96 max-h-96 overflow-y-auto">
                        <div className="space-y-4">
                          <div className="border-b pb-2">
                            <h4 className="font-semibold">Deal Timeline - {recentClosedDeal.clientName}</h4>
                            <p className="text-sm text-gray-600">Lead Source: {recentClosedDeal.leadSource} | Total Time: {recentClosedDeal.totalTimeToClose}</p>
                          </div>
                          <div className="space-y-3">
                            {recentClosedDeal.timeline.map((step, index) => (
                              <div key={index} className="border-l-2 border-blue-200 pl-4">
                                <div className="flex justify-between items-start mb-1">
                                  <h5 className="font-medium text-sm">{step.step}</h5>
                                  <span className="text-xs text-gray-500">{step.duration}</span>
                                </div>
                                <p className="text-xs text-blue-600 mb-1">{step.agent} • {step.date}</p>
                                <p className="text-xs text-gray-600">{step.details}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "engagement" && <LeadManagementDashboard />}
          {activeTab === "operations" && <OperationsDashboard />}
          {activeTab === "intelligence" && <IntelligenceDashboard />}
          {activeTab === "admin" && <AdminControlCenter />}
        </main>
      </div>
    </div>
  );
};

export default Index;
