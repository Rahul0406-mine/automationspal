import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Calendar as CalendarIcon, 
  Phone, 
  Users, 
  MessageSquare, 
  Settings, 
  Plus,
  ChevronLeft,
  ChevronRight,
  MoreVertical,
  Upload,
  BarChart3,
  DollarSign,
  TrendingUp,
  Target,
  Star,
  AlertCircle,
  CheckCircle,
  Activity
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";

const LeadManagementDashboard = () => {
  const [leads, setLeads] = useState([
    { id: 1, name: "John Smith", status: "New", score: 75, lastContact: "2 days ago" },
    { id: 2, name: "Alice Johnson", status: "Qualified", score: 88, lastContact: "1 day ago" },
    { id: 3, name: "Bob Williams", status: "Contacted", score: 62, lastContact: "5 days ago" },
    { id: 4, name: "Emily Brown", status: "Opportunity", score: 92, lastContact: "3 days ago" }
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newLead, setNewLead] = useState({ name: "", status: "New", score: 50 });

  const leadStatuses = ["New", "Qualified", "Contacted", "Opportunity", "Customer"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewLead(prev => ({ ...prev, [name]: value }));
  };

  const addLead = () => {
    const newId = leads.length > 0 ? Math.max(...leads.map(lead => lead.id)) + 1 : 1;
    setLeads(prev => [...prev, { ...newLead, id: newId, lastContact: "Just now" }]);
    setIsDialogOpen(false);
    setNewLead({ name: "", status: "New", score: 50 });
  };

  const calendarEvents = [
    { id: 1, title: "Call with John Smith", date: "2024-03-15", time: "10:00 AM" },
    { id: 2, title: "Meeting with Alice Johnson", date: "2024-03-16", time: "02:00 PM" },
    { id: 3, title: "Follow-up with Bob Williams", date: "2024-03-17", time: "11:00 AM" }
  ];

  const voiceAgentData = {
    callsToday: 45,
    averageCallDuration: "3m 20s",
    positiveFeedback: 92,
    negativeFeedback: 8
  };

  const leadScoresData = [
    { name: 'John Smith', score: 75, potential: 80 },
    { name: 'Alice Johnson', score: 88, potential: 95 },
    { name: 'Bob Williams', score: 62, potential: 70 },
    { name: 'Emily Brown', score: 92, potential: 98 },
    { name: 'Charlie Davis', score: 78, potential: 85 },
    { name: 'Linda White', score: 68, potential: 75 },
  ];

  const followUpTasks = [
    { id: 1, lead: "John Smith", task: "Send follow-up email", dueDate: "2024-03-10", status: "pending" },
    { id: 2, lead: "Alice Johnson", task: "Schedule a call", dueDate: "2024-03-12", status: "completed" },
    { id: 3, lead: "Bob Williams", task: "Prepare proposal", dueDate: "2024-03-15", status: "pending" }
  ];

  return (
    <div className="space-y-6">
      <Tabs defaultValue="intelligence" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="intelligence">Lead Intelligence</TabsTrigger>
          <TabsTrigger value="calendar">Calendar</TabsTrigger>
          <TabsTrigger value="voice">Voice Agent</TabsTrigger>
          <TabsTrigger value="scoring">Lead Scoring</TabsTrigger>
          <TabsTrigger value="followup">Follow-up</TabsTrigger>
        </TabsList>

        {/* Lead Intelligence */}
        <TabsContent value="intelligence" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <Card className="border-2 border-blue-200">
              <CardContent className="p-4 text-center">
                <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-blue-600">{leads.length}</p>
                <p className="text-sm text-blue-700">Total Leads</p>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-green-200">
              <CardContent className="p-4 text-center">
                <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-green-600">+{leads.filter(lead => lead.status === "Qualified").length}</p>
                <p className="text-sm text-green-700">Qualified Leads</p>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-purple-200">
              <CardContent className="p-4 text-center">
                <Target className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-purple-600">{leads.filter(lead => lead.status === "Opportunity").length}</p>
                <p className="text-sm text-purple-700">Opportunities</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold">Lead List</h3>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Lead
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Add New Lead</DialogTitle>
                  <DialogDescription>
                    Create a new lead and add them to your list.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input id="name" name="name" value={newLead.name} onChange={handleInputChange} className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="status" className="text-right">
                      Status
                    </Label>
                    <Select onValueChange={(value) => handleInputChange({ target: { name: 'status', value } })}>
                      <SelectTrigger className="col-span-3">
                        <SelectValue placeholder="Select a status" defaultValue={newLead.status} />
                      </SelectTrigger>
                      <SelectContent>
                        {leadStatuses.map(status => (
                          <SelectItem key={status} value={status}>{status}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="score" className="text-right">
                      Score
                    </Label>
                    <Input type="number" id="score" name="score" value={newLead.score} onChange={handleInputChange} className="col-span-3" />
                  </div>
                </div>
                <Button type="submit" onClick={addLead}>
                  Create Lead
                </Button>
              </DialogContent>
            </Dialog>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Contact</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {leads.map(lead => (
                  <tr key={lead.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{lead.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lead.status}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lead.score}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lead.lastContact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>

        {/* Calendar */}
        <TabsContent value="calendar" className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold">Calendar</h3>
            <div className="flex space-x-2">
              <Button variant="outline">
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button variant="outline">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <Card>
            <CardContent>
              <div className="space-y-4">
                {calendarEvents.map(event => (
                  <div key={event.id} className="flex items-center justify-between p-3 rounded-lg border">
                    <div>
                      <h4 className="font-medium">{event.title}</h4>
                      <p className="text-sm text-slate-600">{event.date} at {event.time}</p>
                    </div>
                    <Button size="sm" variant="outline">
                      View
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Voice Agent */}
        <TabsContent value="voice" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Voice Agent Performance</CardTitle>
                <CardDescription>Real-time metrics on voice agent interactions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Calls Today</span>
                  <span className="font-bold">{voiceAgentData.callsToday}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Avg. Call Duration</span>
                  <span className="font-bold">{voiceAgentData.averageCallDuration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Positive Feedback</span>
                  <span className="font-bold">{voiceAgentData.positiveFeedback}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Negative Feedback</span>
                  <span className="font-bold">{voiceAgentData.negativeFeedback}%</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Call Analytics</CardTitle>
                <CardDescription>Trends and insights from voice interactions</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={[
                    { name: 'Day 1', calls: 40 },
                    { name: 'Day 2', calls: 55 },
                    { name: 'Day 3', calls: 48 },
                    { name: 'Day 4', calls: 62 },
                    { name: 'Day 5', calls: 50 },
                  ]}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="calls" stroke="#8884d8" fill="#8884d8" />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Lead Scoring */}
        <TabsContent value="scoring" className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold">Lead Scoring</h3>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="score">Score</SelectItem>
                <SelectItem value="potential">Potential</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {leadScoresData.map(lead => (
              <Card key={lead.name}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold">{lead.name}</h3>
                      <p className="text-slate-600">Potential: {lead.potential}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-green-600">{lead.score}</p>
                      <Badge variant="outline">Score</Badge>
                    </div>
                  </div>
                  <Progress value={lead.score} />
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Follow-up */}
        <TabsContent value="followup" className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold">Follow-up Tasks</h3>
            <Button variant="outline">
              <Plus className="w-4 h-4 mr-2" />
              Add Task
            </Button>
          </div>

          <div className="space-y-4">
            {followUpTasks.map(task => (
              <Card key={task.id}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold">{task.lead}</h3>
                      <p className="text-slate-600">{task.task}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-slate-500">Due: {task.dueDate}</p>
                      <Badge variant="secondary">{task.status}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LeadManagementDashboard;
