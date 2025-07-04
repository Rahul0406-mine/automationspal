
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import { 
  Calendar as CalendarIcon, 
  Phone, 
  MessageSquare, 
  Target, 
  FileText, 
  ThumbsUp, 
  Clock, 
  MapPin, 
  Star, 
  Zap, 
  Bell, 
  CheckCircle, 
  AlertCircle, 
  TrendingUp, 
  Users,
  Settings,
  Plus,
  Upload,
  BarChart
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const LeadManagementDashboard = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedLead, setSelectedLead] = useState(null);
  const [showAppointmentDialog, setShowAppointmentDialog] = useState(false);
  const [showAgentSettings, setShowAgentSettings] = useState(false);
  const [showNewCampaign, setShowNewCampaign] = useState(false);
  const [activeSettingsTab, setActiveSettingsTab] = useState("support");

  // Sample data for the next 3 months
  const appointments = {
    "2024-01-15": [
      { id: 1, client: "Sarah Johnson", time: "2:00 PM", type: "Property Viewing", bookedOn: "Jan 10, 2024" },
      { id: 2, client: "Mike Chen", time: "4:30 PM", type: "Consultation", bookedOn: "Jan 12, 2024" }
    ],
    "2024-01-16": [
      { id: 3, client: "Emma Davis", time: "10:00 AM", type: "Contract Signing", bookedOn: "Jan 14, 2024" }
    ]
  };

  const leads = [
    { id: 1, name: "Sarah Johnson", score: 95, status: "hot", phone: "+1-555-0123", email: "sarah@email.com", interest: "3BR House", lastContact: "2 hours ago", source: "Website" },
    { id: 2, name: "Mike Chen", score: 78, status: "warm", phone: "+1-555-0124", email: "mike@email.com", interest: "Condo Downtown", lastContact: "1 day ago", source: "Referral" },
    { id: 3, name: "Emma Davis", score: 45, status: "cold", phone: "+1-555-0125", email: "emma@email.com", interest: "2BR Apartment", lastContact: "3 days ago", source: "Facebook Ad" },
    { id: 4, name: "James Wilson", score: 88, status: "hot", phone: "+1-555-0126", email: "james@email.com", interest: "Luxury Villa", lastContact: "30 min ago", source: "Google Search" }
  ];

  const usageData = [
    { date: 'Jan 1', minutes: 120 },
    { date: 'Jan 2', minutes: 180 },
    { date: 'Jan 3', minutes: 95 },
    { date: 'Jan 4', minutes: 200 },
    { date: 'Jan 5', minutes: 150 },
    { date: 'Jan 6', minutes: 175 },
    { date: 'Jan 7', minutes: 220 }
  ];

  const callSummaries = [
    { id: 1, client: "Sarah Johnson", summary: "Interested in 3BR downtown properties, budget $400-500K, pre-approved", duration: "4:32", emotion: "Positive", score: 95 },
    { id: 2, client: "Mike Chen", summary: "Looking for investment property, cash buyer, timeline flexible", duration: "6:15", emotion: "Neutral", score: 78 },
    { id: 3, client: "Emma Davis", summary: "First-time buyer, needs financing guidance, price sensitive", duration: "3:28", emotion: "Anxious", score: 45 }
  ];

  const campaigns = [
    { id: 1, name: "Downtown Luxury Campaign", status: "Active", leads: 45, calls: 180 },
    { id: 2, name: "First-Time Buyer Outreach", status: "Active", leads: 32, calls: 120 },
    { id: 3, name: "Investment Property Focus", status: "Paused", leads: 28, calls: 95 }
  ];

  const totalMinutes = usageData.reduce((sum, day) => sum + day.minutes, 0);
  const costPerMinute = 0.15; // $0.15 per minute
  const totalCost = totalMinutes * costPerMinute;

  const getScoreColor = (score) => {
    if (score >= 80) return "text-green-600 bg-green-100";
    if (score >= 60) return "text-yellow-600 bg-yellow-100";
    return "text-red-600 bg-red-100";
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'hot': return "bg-red-100 text-red-800";
      case 'warm': return "bg-yellow-100 text-yellow-800";
      case 'cold': return "bg-blue-100 text-blue-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const formatDateKey = (date: Date) => {
    return date.toISOString().split('T')[0];
  };

  const selectedDateAppointments = selectedDate ? appointments[formatDateKey(selectedDate)] || [] : [];

  return (
    <div className="space-y-6 p-6">
      <Tabs defaultValue="calendar" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="calendar">Calendar</TabsTrigger>
          <TabsTrigger value="voice">Voice Agent</TabsTrigger>
          <TabsTrigger value="scoring">Lead Scoring</TabsTrigger>
          <TabsTrigger value="followup">Follow-up</TabsTrigger>
        </TabsList>

        {/* Calendar Section */}
        <TabsContent value="calendar" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Calendar View - Next 3 Months</CardTitle>
                <CardDescription>Click on any date to view appointments</CardDescription>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md border"
                />
                {selectedDate && (
                  <div className="mt-4">
                    <h4 className="font-semibold mb-2">
                      Appointments for {selectedDate.toLocaleDateString()}
                    </h4>
                    {selectedDateAppointments.length > 0 ? (
                      <div className="space-y-2">
                        {selectedDateAppointments.map((apt) => (
                          <div key={apt.id} className="p-3 border rounded-lg">
                            <div className="flex justify-between">
                              <div>
                                <p className="font-medium">{apt.client}</p>
                                <p className="text-sm text-gray-600">{apt.type}</p>
                              </div>
                              <div className="text-right">
                                <p className="font-medium">{apt.time}</p>
                                <p className="text-xs text-gray-500">Booked: {apt.bookedOn}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-500 text-sm">No appointments scheduled</p>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CalendarIcon className="w-5 h-5" />
                  <span>AI Appointment Scheduler</span>
                </CardTitle>
                <CardDescription>AI-powered scheduling with automated outreach</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Select Client</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a client" />
                    </SelectTrigger>
                    <SelectContent>
                      {leads.map(lead => (
                        <SelectItem key={lead.id} value={lead.id.toString()}>
                          {lead.name} - {lead.interest}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Appointment Type</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="viewing">Property Viewing</SelectItem>
                      <SelectItem value="consultation">Initial Consultation</SelectItem>
                      <SelectItem value="contract">Contract Meeting</SelectItem>
                      <SelectItem value="followup">Follow-up Call</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Preferred Date & Time</label>
                  <Input type="datetime-local" />
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  <Button className="w-full">
                    <Zap className="w-4 h-4 mr-2" />
                    AI Schedule
                  </Button>
                  <Button variant="outline" className="w-full">
                    <CalendarIcon className="w-4 h-4 mr-2" />
                    Direct Book
                  </Button>
                </div>
                
                <div className="p-3 rounded-lg bg-blue-50 border border-blue-200">
                  <p className="text-sm text-blue-800">
                    <CheckCircle className="w-4 h-4 inline mr-2" />
                    AI will contact client and automatically update calendar
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Voice Agent Section */}
        <TabsContent value="voice" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>AI Voice Agent</span>
                </CardTitle>
                <CardDescription>24/7 intelligent voice assistant for lead capture and support</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-green-50 border border-green-200 text-center">
                    <Phone className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-green-600">127</p>
                    <p className="text-sm text-green-700">Calls Handled Today</p>
                  </div>
                  <div className="p-4 rounded-lg bg-blue-50 border border-blue-200 text-center">
                    <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-blue-600">43</p>
                    <p className="text-sm text-blue-700">Leads Captured</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-medium">Voice Agent Status</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">24/7 Availability</span>
                      <Badge className="bg-green-100 text-green-800">Active</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Human Handoff</span>
                      <Badge className="bg-blue-100 text-blue-800">Enabled</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Call Recording</span>
                      <Badge className="bg-purple-100 text-purple-800">On</Badge>
                    </div>
                  </div>
                </div>
                
                <Dialog open={showAgentSettings} onOpenChange={setShowAgentSettings}>
                  <DialogTrigger asChild>
                    <Button className="w-full" variant="outline">
                      <Settings className="w-4 h-4 mr-2" />
                      Agent Settings
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[600px] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>Voice Agent Settings</DialogTitle>
                      <DialogDescription>Manage your voice agent configuration and campaigns</DialogDescription>
                    </DialogHeader>
                    <Tabs value={activeSettingsTab} onValueChange={setActiveSettingsTab}>
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="support">Customer Support</TabsTrigger>
                        <TabsTrigger value="campaign">Campaign</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="support" className="space-y-4">
                        <div className="space-y-3">
                          {callSummaries.map((call) => (
                            <div key={call.id} className="p-4 border rounded-lg">
                              <div className="flex justify-between items-start mb-2">
                                <h4 className="font-medium">{call.client}</h4>
                                <Dialog>
                                  <DialogTrigger asChild>
                                    <Button size="sm" variant="outline">More Details</Button>
                                  </DialogTrigger>
                                  <DialogContent>
                                    <DialogHeader>
                                      <DialogTitle>Call Details - {call.client}</DialogTitle>
                                    </DialogHeader>
                                    <div className="space-y-4">
                                      <div className="grid grid-cols-2 gap-4">
                                        <div>
                                          <label className="text-sm font-medium">Call Duration</label>
                                          <p className="text-lg font-bold">{call.duration}</p>
                                        </div>
                                        <div>
                                          <label className="text-sm font-medium">Speaker Emotion</label>
                                          <p className="text-lg font-bold">{call.emotion}</p>
                                        </div>
                                      </div>
                                      <div>
                                        <label className="text-sm font-medium">Lead Score Impact</label>
                                        <div className="flex items-center space-x-2 mt-1">
                                          <div className={`px-3 py-1 rounded-full font-bold ${getScoreColor(call.score)}`}>
                                            {call.score}
                                          </div>
                                          <span className="text-sm text-gray-600">
                                            {call.emotion === 'Positive' ? '+5 points' : call.emotion === 'Neutral' ? 'No change' : '-3 points'}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </DialogContent>
                                </Dialog>
                              </div>
                              <p className="text-sm text-gray-600 mb-2">{call.summary}</p>
                              <div className="flex justify-between text-xs text-gray-500">
                                <span>Duration: {call.duration}</span>
                                <span>Emotion: {call.emotion}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="campaign" className="space-y-4">
                        <div className="flex justify-between items-center">
                          <h4 className="font-medium">Active Campaigns</h4>
                          <Dialog open={showNewCampaign} onOpenChange={setShowNewCampaign}>
                            <DialogTrigger asChild>
                              <Button size="sm">
                                <Plus className="w-4 h-4 mr-2" />
                                Create New Campaign
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Create New Campaign</DialogTitle>
                                <DialogDescription>Set up a new voice agent campaign</DialogDescription>
                              </DialogHeader>
                              <div className="space-y-4">
                                <div className="space-y-2">
                                  <label className="text-sm font-medium">Campaign Purpose</label>
                                  <Input placeholder="e.g., Lead Generation for Luxury Properties" />
                                </div>
                                <div className="space-y-2">
                                  <label className="text-sm font-medium">Agent Instructions</label>
                                  <Textarea placeholder="Provide specific instructions for the voice agent..." rows={4} />
                                </div>
                                <div className="space-y-2">
                                  <label className="text-sm font-medium">Contact List</label>
                                  <div className="grid grid-cols-2 gap-2">
                                    <Button variant="outline" className="w-full">
                                      <Upload className="w-4 h-4 mr-2" />
                                      Upload CSV
                                    </Button>
                                    <Button variant="outline" className="w-full">
                                      <FileText className="w-4 h-4 mr-2" />
                                      External Link
                                    </Button>
                                  </div>
                                </div>
                                <Button className="w-full">Create Campaign</Button>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </div>
                        <div className="space-y-3">
                          {campaigns.map((campaign) => (
                            <div key={campaign.id} className="p-4 border rounded-lg">
                              <div className="flex justify-between items-center mb-2">
                                <h4 className="font-medium">{campaign.name}</h4>
                                <Badge className={campaign.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}>
                                  {campaign.status}
                                </Badge>
                              </div>
                              <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                  <span className="text-gray-500">Leads Generated:</span>
                                  <p className="font-bold">{campaign.leads}</p>
                                </div>
                                <div>
                                  <span className="text-gray-500">Calls Made:</span>
                                  <p className="font-bold">{campaign.calls}</p>
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
                <CardTitle>Voice Agent Usage Analytics</CardTitle>
                <CardDescription>Track usage minutes and costs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={usageData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="minutes" stroke="#8884d8" strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 rounded-lg bg-blue-50 border text-center">
                      <p className="text-2xl font-bold text-blue-600">{totalMinutes}</p>
                      <p className="text-sm text-blue-700">Total Minutes</p>
                    </div>
                    <div className="p-3 rounded-lg bg-green-50 border text-center">
                      <p className="text-2xl font-bold text-green-600">${totalCost.toFixed(2)}</p>
                      <p className="text-sm text-green-700">Total Cost</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Lead Scoring Section */}
        <TabsContent value="scoring" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="w-5 h-5" />
                <span>Lead Scoring & Qualification</span>
              </CardTitle>
              <CardDescription>AI-powered lead assessment with activity timeline</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {leads.map(lead => (
                  <div key={lead.id} className="p-4 rounded-lg border hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                          {lead.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <h4 className="font-bold">{lead.name}</h4>
                          <p className="text-sm text-slate-600">{lead.interest}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className={`${getScoreColor(lead.score)} px-3 py-1 rounded-full font-bold`}>
                          {lead.score}
                        </Badge>
                        <Badge className={getStatusColor(lead.status)}>
                          {lead.status.toUpperCase()}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                      <div>
                        <span className="text-slate-500">Phone:</span>
                        <p className="font-medium">{lead.phone}</p>
                      </div>
                      <div>
                        <span className="text-slate-500">Source:</span>
                        <p className="font-medium">{lead.source}</p>
                      </div>
                      <div>
                        <span className="text-slate-500">Last Contact:</span>
                        <p className="font-medium">{lead.lastContact}</p>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Phone className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <MessageSquare className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <CalendarIcon className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Follow-up Section */}
        <TabsContent value="followup" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <ThumbsUp className="w-5 h-5" />
                <span>Post-Sale Follow-up & Referral Agent</span>
              </CardTitle>
              <CardDescription>Automated satisfaction checks and referral generation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-2 border-green-200">
                  <CardContent className="p-4 text-center">
                    <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-green-600">23</p>
                    <p className="text-sm text-green-700">Satisfaction Surveys Sent</p>
                  </CardContent>
                </Card>
                
                <Card className="border-2 border-blue-200">
                  <CardContent className="p-4 text-center">
                    <Star className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-blue-600">18</p>
                    <p className="text-sm text-blue-700">Referrals Generated</p>
                  </CardContent>
                </Card>
                
                <Card className="border-2 border-purple-200">
                  <CardContent className="p-4 text-center">
                    <ThumbsUp className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-purple-600">12</p>
                    <p className="text-sm text-purple-700">Testimonials Collected</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-bold">Recent Follow-up Activities</h4>
                <div className="space-y-3">
                  <div className="p-3 rounded-lg border flex items-center justify-between">
                    <div>
                      <p className="font-medium">Sarah Johnson - Satisfaction Survey</p>
                      <p className="text-sm text-slate-600">5-star rating received, testimonial collected</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Completed</Badge>
                  </div>
                  
                  <div className="p-3 rounded-lg border flex items-center justify-between">
                    <div>
                      <p className="font-medium">Mike Chen - Referral Request</p>
                      <p className="text-sm text-slate-600">Referred 2 colleagues, follow-up scheduled</p>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800">Active</Badge>
                  </div>
                  
                  <div className="p-3 rounded-lg border flex items-center justify-between">
                    <div>
                      <p className="font-medium">James Wilson - 6-month Check-in</p>
                      <p className="text-sm text-slate-600">Scheduled for next week</p>
                    </div>
                    <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LeadManagementDashboard;
