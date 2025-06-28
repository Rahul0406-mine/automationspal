
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Phone, MessageSquare, Target, FileText, ThumbsUp, Clock, MapPin, Star, Zap, Bell, CheckCircle, AlertCircle, TrendingUp, Users } from "lucide-react";

const ClientEngagementDashboard = () => {
  const [selectedLead, setSelectedLead] = useState(null);
  const [appointmentDate, setAppointmentDate] = useState("");
  const [adCopyInput, setAdCopyInput] = useState("");
  const [generatedAdCopy, setGeneratedAdCopy] = useState("");

  const leads = [
    { id: 1, name: "Sarah Johnson", score: 95, status: "hot", phone: "+1-555-0123", email: "sarah@email.com", interest: "3BR House", lastContact: "2 hours ago", source: "Website" },
    { id: 2, name: "Mike Chen", score: 78, status: "warm", phone: "+1-555-0124", email: "mike@email.com", interest: "Condo Downtown", lastContact: "1 day ago", source: "Referral" },
    { id: 3, name: "Emma Davis", score: 45, status: "cold", phone: "+1-555-0125", email: "emma@email.com", interest: "2BR Apartment", lastContact: "3 days ago", source: "Facebook Ad" },
    { id: 4, name: "James Wilson", score: 88, status: "hot", phone: "+1-555-0126", email: "james@email.com", interest: "Luxury Villa", lastContact: "30 min ago", source: "Google Search" }
  ];

  const appointments = [
    { id: 1, client: "Sarah Johnson", date: "2024-01-15", time: "2:00 PM", type: "Property Viewing", status: "confirmed" },
    { id: 2, client: "Mike Chen", date: "2024-01-16", time: "10:00 AM", type: "Consultation", status: "pending" },
    { id: 3, client: "James Wilson", date: "2024-01-17", time: "3:30 PM", type: "Contract Signing", status: "confirmed" }
  ];

  const generateAdCopy = () => {
    const sampleCopy = `🏡 STUNNING 3-BEDROOM FAMILY HOME IN PRIME LOCATION

✨ Features:
• Spacious open-plan living
• Modern kitchen with granite countertops  
• Master suite with walk-in closet
• Private backyard perfect for entertaining
• Top-rated school district

📍 Quiet neighborhood, minutes from shopping & dining
💰 Competitively priced - won't last long!

Schedule your private tour today! 📞 Call now!

#RealEstate #DreamHome #FamilyHome #PrimeLocation`;
    
    setGeneratedAdCopy(sampleCopy);
  };

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

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-slate-800">Client Engagement & Conversion</h2>
          <p className="text-slate-600">Manage leads, schedule appointments, and convert prospects with AI assistance</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Bell className="w-4 h-4 mr-2" />
            Notifications
          </Button>
          <Button>
            <Zap className="w-4 h-4 mr-2" />
            AI Assist
          </Button>
        </div>
      </div>

      <Tabs defaultValue="scheduler" className="w-full">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="scheduler">AI Scheduler</TabsTrigger>
          <TabsTrigger value="voice">Voice Agent</TabsTrigger>
          <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
          <TabsTrigger value="scoring">Lead Scoring</TabsTrigger>
          <TabsTrigger value="adcopy">Ad Generator</TabsTrigger>
          <TabsTrigger value="followup">Follow-up</TabsTrigger>
        </TabsList>

        {/* AI Appointment Scheduler */}
        <TabsContent value="scheduler" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>AI Appointment Scheduler</span>
                </CardTitle>
                <CardDescription>Intelligent scheduling with calendar sync and automated reminders</CardDescription>
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
                  <Input type="datetime-local" value={appointmentDate} onChange={(e) => setAppointmentDate(e.target.value)} />
                </div>
                
                <Button className="w-full">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule with AI
                </Button>
                
                <div className="p-3 rounded-lg bg-blue-50 border border-blue-200">
                  <p className="text-sm text-blue-800">
                    <CheckCircle className="w-4 h-4 inline mr-2" />
                    AI will automatically send SMS/Email confirmations and handle reschedule requests
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Upcoming Appointments</CardTitle>
                <CardDescription>AI-scheduled meetings and viewings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {appointments.map(apt => (
                    <div key={apt.id} className="flex items-center justify-between p-3 rounded-lg border">
                      <div>
                        <p className="font-medium">{apt.client}</p>
                        <p className="text-sm text-slate-600">{apt.type}</p>
                        <p className="text-sm text-slate-500">{apt.date} at {apt.time}</p>
                      </div>
                      <Badge className={apt.status === 'confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}>
                        {apt.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Voice Agent */}
        <TabsContent value="voice" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>AI Voice Agent</span>
                </CardTitle>
                <CardDescription>24/7 receptionist for property inquiries with intelligent lead capture</CardDescription>
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
                  <h4 className="font-medium">Voice Agent Configuration</h4>
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
                
                <Button className="w-full" variant="outline">
                  <Phone className="w-4 h-4 mr-2" />
                  Configure Voice Settings
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Call Log</CardTitle>
                <CardDescription>AI voice agent interactions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 rounded-lg border">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Sarah Johnson</span>
                      <Badge className="bg-green-100 text-green-800">Lead Captured</Badge>
                    </div>
                    <p className="text-sm text-slate-600">3BR house inquiry - Downtown area</p>
                    <p className="text-xs text-slate-500">Duration: 4:32 | 2 hours ago</p>
                  </div>
                  
                  <div className="p-3 rounded-lg border">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Mike Chen</span>
                      <Badge className="bg-blue-100 text-blue-800">Appointment Set</Badge>
                    </div>
                    <p className="text-sm text-slate-600">Follow-up call - Property viewing scheduled</p>
                    <p className="text-xs text-slate-500">Duration: 2:15 | 4 hours ago</p>
                  </div>
                  
                  <div className="p-3 rounded-lg border">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Unknown Caller</span>
                      <Badge className="bg-yellow-100 text-yellow-800">Info Provided</Badge>
                    </div>
                    <p className="text-sm text-slate-600">General inquiry - Market information</p>
                    <p className="text-xs text-slate-500">Duration: 1:48 | 6 hours ago</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Property Recommendations */}
        <TabsContent value="recommendations" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span>Property Recommendation Engine</span>
              </CardTitle>
              <CardDescription>AI-powered matching based on client preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="border-2 border-blue-200">
                  <CardContent className="p-4">
                    <h4 className="font-bold mb-2">Sarah Johnson Match</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Budget Match</span>
                        <Badge className="bg-green-100 text-green-800">95%</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Location Pref</span>
                        <Badge className="bg-green-100 text-green-800">88%</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Features</span>
                        <Badge className="bg-yellow-100 text-yellow-800">76%</Badge>
                      </div>
                    </div>
                    <Button size="sm" className="w-full mt-3">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Send Recommendations
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="border-2 border-yellow-200">
                  <CardContent className="p-4">
                    <h4 className="font-bold mb-2">Mike Chen Match</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Budget Match</span>
                        <Badge className="bg-yellow-100 text-yellow-800">72%</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Location Pref</span>
                        <Badge className="bg-green-100 text-green-800">91%</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Features</span>
                        <Badge className="bg-green-100 text-green-800">84%</Badge>
                      </div>
                    </div>
                    <Button size="sm" className="w-full mt-3" variant="outline">
                      <MapPin className="w-4 h-4 mr-2" />
                      View Properties
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="border-2 border-red-200">
                  <CardContent className="p-4">
                    <h4 className="font-bold mb-2">James Wilson Match</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Budget Match</span>
                        <Badge className="bg-green-100 text-green-800">98%</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Location Pref</span>
                        <Badge className="bg-green-100 text-green-800">93%</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Features</span>
                        <Badge className="bg-green-100 text-green-800">89%</Badge>
                      </div>
                    </div>
                    <Button size="sm" className="w-full mt-3">
                      <Star className="w-4 h-4 mr-2" />
                      Priority Match
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Lead Scoring */}
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
                          <Calendar className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Ad Copy Generator */}
        <TabsContent value="adcopy" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="w-5 h-5" />
                  <span>AI Ad Copy Generator</span>
                </CardTitle>
                <CardDescription>Generate SEO-optimized listings and social media content</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Property Details</label>
                  <Textarea 
                    placeholder="Enter property details (bedrooms, bathrooms, square footage, features, location, etc.)"
                    value={adCopyInput}
                    onChange={(e) => setAdCopyInput(e.target.value)}
                    rows={4}
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Platform</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select platform" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="facebook">Facebook</SelectItem>
                        <SelectItem value="instagram">Instagram</SelectItem>
                        <SelectItem value="mls">MLS Listing</SelectItem>
                        <SelectItem value="website">Website</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Tone</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select tone" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="professional">Professional</SelectItem>
                        <SelectItem value="friendly">Friendly</SelectItem>
                        <SelectItem value="urgent">Urgent</SelectItem>
                        <SelectItem value="luxury">Luxury</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <Button onClick={generateAdCopy} className="w-full">
                  <Zap className="w-4 h-4 mr-2" />
                  Generate Ad Copy
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Generated Content</CardTitle>
                <CardDescription>AI-generated ad copy ready to use</CardDescription>
              </CardHeader>
              <CardContent>
                {generatedAdCopy ? (
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-slate-50 border">
                      <pre className="whitespace-pre-wrap text-sm">{generatedAdCopy}</pre>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm">
                        Copy to Clipboard
                      </Button>
                      <Button size="sm" variant="outline">
                        Edit
                      </Button>
                      <Button size="sm" variant="outline">
                        Regenerate
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="p-8 text-center text-slate-500">
                    <FileText className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>Generated ad copy will appear here</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Follow-up */}
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

export default ClientEngagementDashboard;
