import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Calendar as CalendarIcon, 
  Phone, 
  Target, 
  Clock, 
  Users, 
  Bot,
  Settings,
  Plus,
  FileText,
  Upload,
  Link,
  BarChart3,
  DollarSign,
  TrendingUp,
  Activity,
  Star,
  MessageSquare
} from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const LeadManagementDashboard = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [isAgentSettingsOpen, setIsAgentSettingsOpen] = useState(false);
  const [isCreateCampaignOpen, setIsCreateCampaignOpen] = useState(false);

  // Sample data for appointments
  const appointments = {
    [new Date().toDateString()]: [
      { time: "10:00 AM", client: "John Doe", booked: "2 hours ago" },
      { time: "2:30 PM", client: "Sarah Smith", booked: "1 day ago" },
    ]
  };

  // Usage analytics data
  const usageData = [
    { date: "Jan 1", minutes: 120 },
    { date: "Jan 2", minutes: 180 },
    { date: "Jan 3", minutes: 95 },
    { date: "Jan 4", minutes: 220 },
    { date: "Jan 5", minutes: 160 },
    { date: "Jan 6", minutes: 310 },
    { date: "Jan 7", minutes: 275 },
  ];

  // Lead intelligence data (moved from Intelligence dashboard)
  const leadSourceData = [
    { name: 'Website', value: 35, color: '#3B82F6' },
    { name: 'Referrals', value: 28, color: '#10B981' },
    { name: 'Social Media', value: 20, color: '#8B5CF6' },
    { name: 'Google Ads', value: 12, color: '#F59E0B' },
    { name: 'Other', value: 5, color: '#6B7280' },
  ];

  const conversionFunnelData = [
    { stage: 'Leads', count: 147, percentage: 100 },
    { stage: 'Qualified', count: 89, percentage: 61 },
    { stage: 'Appointments', count: 52, percentage: 35 },
    { stage: 'Offers', count: 28, percentage: 19 },
    { stage: 'Closed', count: 12, percentage: 8 },
  ];

  const customerSupportCalls = [
    {
      id: 1,
      client: "John Doe",
      date: "Dec 20, 2024",
      duration: "5:30",
      summary: "Interested in 3BR home, budget $400-500K, looking in downtown area",
      emotion: "Positive",
      leadScore: 85
    },
    {
      id: 2,
      client: "Sarah Smith", 
      date: "Dec 19, 2024",
      duration: "8:15",
      summary: "First-time buyer, needs financing guidance, prefers suburban location",
      emotion: "Neutral",
      leadScore: 72
    }
  ];

  const activeCampaigns = [
    {
      id: 1,
      name: "Luxury Home Campaign",
      status: "Active",
      leads: 23,
      created: "Dec 15, 2024"
    },
    {
      id: 2,
      name: "First-Time Buyers",
      status: "Paused",
      leads: 45,
      created: "Dec 10, 2024"
    }
  ];

  const totalCost = usageData.reduce((sum, day) => sum + (day.minutes * 0.12), 0);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-slate-800">Lead Management Dashboard</h2>
        <p className="text-slate-600">Comprehensive lead intelligence, scheduling, and agent management</p>
      </div>

      <Tabs defaultValue="intelligence" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="intelligence">Lead Intelligence</TabsTrigger>
          <TabsTrigger value="calendar">Calendar & Scheduling</TabsTrigger>
          <TabsTrigger value="voice">Voice Agent</TabsTrigger>
          <TabsTrigger value="scoring">Lead Scoring & Follow-up</TabsTrigger>
        </TabsList>

        {/* Lead Intelligence */}
        <TabsContent value="intelligence" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Lead Source Analysis</CardTitle>
                <CardDescription>Where your best leads come from</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={leadSourceData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      dataKey="value"
                      label={({name, value}) => `${name}: ${value}%`}
                    >
                      {leadSourceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Conversion Funnel</CardTitle>
                <CardDescription>Lead journey and drop-off points</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {conversionFunnelData.map((stage, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${
                          stage.percentage > 50 ? 'bg-green-500' : 
                          stage.percentage > 25 ? 'bg-yellow-500' : 'bg-red-500'
                        }`} />
                        <span className="font-medium">{stage.stage}</span>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">{stage.count}</p>
                        <p className="text-sm text-slate-600">{stage.percentage}%</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Lead Quality Insights</CardTitle>
              <CardDescription>AI analysis of lead behavior and conversion patterns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-lg bg-blue-50 border border-blue-200 text-center">
                  <Target className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-blue-600">24.5%</p>
                  <p className="text-sm text-blue-700">Overall Conversion Rate</p>
                </div>
                
                <div className="p-4 rounded-lg bg-green-50 border border-green-200 text-center">
                  <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-green-600">2.3 min</p>
                  <p className="text-sm text-green-700">Avg Response Time</p>
                </div>
                
                <div className="p-4 rounded-lg bg-purple-50 border border-purple-200 text-center">
                  <Star className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-purple-600">4.7/5</p>
                  <p className="text-sm text-purple-700">Lead Satisfaction</p>
                </div>
                
                <div className="p-4 rounded-lg bg-orange-50 border border-orange-200 text-center">
                  <Activity className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-orange-600">67%</p>
                  <p className="text-sm text-orange-700">Follow-up Success</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Calendar & Scheduling */}
        <TabsContent value="calendar" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Calendar</CardTitle>
                  <CardDescription>Next 3 months schedule</CardDescription>
                </CardHeader>
                <CardContent>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="rounded-md border"
                  />
                  
                  {selectedDate && appointments[selectedDate.toDateString()] && (
                    <div className="mt-4 p-3 rounded-lg bg-blue-50 border">
                      <h4 className="font-medium mb-2">Appointments for {selectedDate.toDateString()}</h4>
                      {appointments[selectedDate.toDateString()].map((apt, index) => (
                        <div key={index} className="text-sm mb-2">
                          <div className="flex justify-between">
                            <span className="font-medium">{apt.time}</span>
                            <span>{apt.client}</span>
                          </div>
                          <div className="text-gray-600">Booked: {apt.booked}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>AI Appointment Scheduler</CardTitle>
                  <CardDescription>Schedule meetings automatically or manually</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="client-name">Client Name</Label>
                      <Input id="client-name" placeholder="Enter client name" />
                    </div>
                    <div>
                      <Label htmlFor="client-phone">Phone Number</Label>
                      <Input id="client-phone" placeholder="Enter phone number" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="meeting-type">Meeting Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select meeting type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="property-viewing">Property Viewing</SelectItem>
                        <SelectItem value="consultation">Consultation</SelectItem>
                        <SelectItem value="follow-up">Follow-up Call</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex space-x-2">
                    <Button className="flex-1">
                      <Bot className="w-4 h-4 mr-2" />
                      AI Schedule
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Plus className="w-4 h-4 mr-2" />
                      Manual Book
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Voice Agent */}
        <TabsContent value="voice" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Voice Agent</span>
                </CardTitle>
                <CardDescription>AI-powered voice interactions and call management</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg bg-green-50 border border-green-200">
                  <div>
                    <p className="font-medium text-green-800">Status: Active</p>
                    <p className="text-sm text-green-600">Ready to handle calls</p>
                  </div>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>

                <Dialog open={isAgentSettingsOpen} onOpenChange={setIsAgentSettingsOpen}>
                  <DialogTrigger asChild>
                    <Button className="w-full">
                      <Settings className="w-4 h-4 mr-2" />
                      Agent Settings
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>Voice Agent Settings</DialogTitle>
                      <DialogDescription>Configure your AI voice agent</DialogDescription>
                    </DialogHeader>
                    
                    <Tabs defaultValue="support" className="w-full">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="support">Customer Support</TabsTrigger>
                        <TabsTrigger value="campaign">Campaign</TabsTrigger>
                      </TabsList>

                      <TabsContent value="support" className="space-y-4">
                        <div className="space-y-4">
                          {customerSupportCalls.map((call) => (
                            <div key={call.id} className="p-4 rounded-lg border">
                              <div className="flex justify-between items-start mb-2">
                                <div>
                                  <h4 className="font-medium">{call.client}</h4>
                                  <p className="text-sm text-gray-600">{call.date} • Duration: {call.duration}</p>
                                </div>
                                <Dialog>
                                  <DialogTrigger asChild>
                                    <Button size="sm" variant="outline">More Details</Button>
                                  </DialogTrigger>
                                  <DialogContent>
                                    <DialogHeader>
                                      <DialogTitle>Call Details - {call.client}</DialogTitle>
                                    </DialogHeader>
                                    <div className="space-y-4">
                                      <div>
                                        <Label>Call Duration</Label>
                                        <p>{call.duration}</p>
                                      </div>
                                      <div>
                                        <Label>Speaker Emotion</Label>
                                        <Badge className={call.emotion === 'Positive' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}>
                                          {call.emotion}
                                        </Badge>
                                      </div>
                                      <div>
                                        <Label>Lead Score</Label>
                                        <p className="text-2xl font-bold">{call.leadScore}/100</p>
                                      </div>
                                    </div>
                                  </DialogContent>
                                </Dialog>
                              </div>
                              <p className="text-sm text-gray-700">{call.summary}</p>
                            </div>
                          ))}
                        </div>
                      </TabsContent>

                      <TabsContent value="campaign" className="space-y-4">
                        <div className="flex justify-between items-center">
                          <h3 className="text-lg font-medium">Active Campaigns</h3>
                          <Dialog open={isCreateCampaignOpen} onOpenChange={setIsCreateCampaignOpen}>
                            <DialogTrigger asChild>
                              <Button>
                                <Plus className="w-4 h-4 mr-2" />
                                Create New Campaign
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Create New Campaign</DialogTitle>
                                <DialogDescription>Set up a new calling campaign</DialogDescription>
                              </DialogHeader>
                              <div className="space-y-4">
                                <div>
                                  <Label htmlFor="campaign-purpose">Campaign Purpose</Label>
                                  <Input id="campaign-purpose" placeholder="e.g., Lead Generation for Luxury Homes" />
                                </div>
                                <div>
                                  <Label htmlFor="agent-instructions">Agent Instructions</Label>
                                  <Textarea id="agent-instructions" placeholder="Provide detailed instructions for the AI agent..." />
                                </div>
                                <div>
                                  <Label>Contact List</Label>
                                  <div className="flex space-x-2">
                                    <Button variant="outline" className="flex-1">
                                      <Upload className="w-4 h-4 mr-2" />
                                      Upload CSV
                                    </Button>
                                    <Button variant="outline" className="flex-1">
                                      <Link className="w-4 h-4 mr-2" />
                                      External Source
                                    </Button>
                                  </div>
                                </div>
                                <Button className="w-full">Create Campaign</Button>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </div>

                        <div className="space-y-4">
                          {activeCampaigns.map((campaign) => (
                            <div key={campaign.id} className="p-4 rounded-lg border">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h4 className="font-medium">{campaign.name}</h4>
                                  <p className="text-sm text-gray-600">Created: {campaign.created}</p>
                                </div>
                                <div className="text-right">
                                  <Badge className={campaign.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}>
                                    {campaign.status}
                                  </Badge>
                                  <p className="text-sm text-gray-600 mt-1">{campaign.leads} leads</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </TabsContent>
                    </Tabs>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Usage Analytics</CardTitle>
                <CardDescription>Voice agent usage over time</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={usageData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="minutes" stroke="#3B82F6" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
                <div className="mt-4 p-3 rounded-lg bg-blue-50 border border-blue-200">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Total Cost This Week</span>
                    <span className="text-2xl font-bold text-blue-600">${totalCost.toFixed(2)}</span>
                  </div>
                  <p className="text-sm text-blue-600 mt-1">Based on $0.12 per minute</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Lead Scoring & Follow-up */}
        <TabsContent value="scoring" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="w-5 h-5" />
                  <span>Lead Scoring</span>
                </CardTitle>
                <CardDescription>AI-powered lead qualification and scoring</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 rounded-lg border">
                    <div>
                      <p className="font-medium">Hot Leads</p>
                      <p className="text-sm text-gray-600">Score 80+</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-red-600">12</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 rounded-lg border">
                    <div>
                      <p className="font-medium">Warm Leads</p>
                      <p className="text-sm text-gray-600">Score 60-79</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-yellow-600">28</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 rounded-lg border">
                    <div>
                      <p className="font-medium">Cold Leads</p>
                      <p className="text-sm text-gray-600">Score below 60</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-blue-600">47</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>Follow-up Management</span>
                </CardTitle>
                <CardDescription>Automated and manual follow-up tracking</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-red-50 border border-red-200">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-red-800">Overdue</span>
                      <Badge className="bg-red-100 text-red-800">5</Badge>
                    </div>
                  </div>
                  
                  <div className="p-3 rounded-lg bg-yellow-50 border border-yellow-200">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-yellow-800">Due Today</span>
                      <Badge className="bg-yellow-100 text-yellow-800">8</Badge>
                    </div>
                  </div>
                  
                  <div className="p-3 rounded-lg bg-green-50 border border-green-200">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-green-800">Scheduled</span>
                      <Badge className="bg-green-100 text-green-800">23</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LeadManagementDashboard;
