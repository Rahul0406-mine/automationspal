import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Settings, Zap, BarChart3, Bell, Users, Activity, CheckCircle, AlertCircle, Clock, Cpu, Database, Shield, TrendingUp } from "lucide-react";

const AdminControlCenter = () => {
  const [followUpFrequency, setFollowUpFrequency] = useState([3]);
  const [voiceTone, setVoiceTone] = useState("professional");
  const [aiAgentEnabled, setAiAgentEnabled] = useState(true);
  const [autoScheduling, setAutoScheduling] = useState(true);

  const aiAgents = [
    { 
      id: 1, 
      name: "Appointment Scheduler", 
      status: "active", 
      usage: 87, 
      lastUpdated: "2 hours ago",
      configuration: "Auto-scheduling enabled, 24/7 availability"
    },
    { 
      id: 2, 
      name: "Voice Agent", 
      status: "active", 
      usage: 92, 
      lastUpdated: "1 hour ago",
      configuration: "Professional tone, human handoff after 5 min"
    },
    { 
      id: 3, 
      name: "Lead Scoring", 
      status: "active", 
      usage: 78, 
      lastUpdated: "30 min ago",
      configuration: "Real-time scoring, auto-qualification enabled"
    },
    { 
      id: 4, 
      name: "Property Recommender", 
      status: "maintenance", 
      usage: 45, 
      lastUpdated: "6 hours ago",
      configuration: "Preference matching, smart filters active"
    },
    { 
      id: 5, 
      name: "Document Generator", 
      status: "active", 
      usage: 83, 
      lastUpdated: "45 min ago",
      configuration: "Auto-fill from CRM, DocuSign integration"
    },
    { 
      id: 6, 
      name: "Follow-up Agent", 
      status: "active", 
      usage: 69, 
      lastUpdated: "1 hour ago",
      configuration: "3-day intervals, satisfaction surveys enabled"
    }
  ];

  const systemMetrics = [
    { name: "API Calls", value: "2.4M", change: "+12%", period: "This month" },
    { name: "Response Time", value: "1.2s", change: "-8%", period: "Average" },
    { name: "Uptime", value: "99.9%", change: "+0.1%", period: "Last 30 days" },
    { name: "Data Processed", value: "847GB", change: "+23%", period: "This month" }
  ];

  const clients = [
    { id: 1, name: "Premium Realty Co.", agents: 12, usage: "High", subscription: "Enterprise", lastActive: "Active" },
    { id: 2, name: "Downtown Properties", agents: 8, usage: "Medium", subscription: "Professional", lastActive: "2 hours ago" },
    { id: 3, name: "Suburban Homes LLC", agents: 15, usage: "High", subscription: "Enterprise", lastActive: "Active" },
    { id: 4, name: "Luxury Estates", agents: 5, usage: "Low", subscription: "Basic", lastActive: "1 day ago" }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return "bg-green-100 text-green-800";
      case 'maintenance': return "bg-yellow-100 text-yellow-800";
      case 'inactive': return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'active': return <CheckCircle className="w-4 h-4" />;
      case 'maintenance': return <AlertCircle className="w-4 h-4" />;
      case 'inactive': return <Clock className="w-4 h-4" />;
      default: return <Activity className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-slate-800">Admin Control Center</h2>
          <p className="text-slate-600">Configure AI agents, monitor system performance, and manage client accounts</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <BarChart3 className="w-4 h-4 mr-2" />
            System Report
          </Button>
          <Button>
            <Settings className="w-4 h-4 mr-2" />
            Global Settings
          </Button>
        </div>
      </div>

      <Tabs defaultValue="agents" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="agents">AI Agents</TabsTrigger>
          <TabsTrigger value="configurations">Configurations</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="clients">Client Management</TabsTrigger>
        </TabsList>

        {/* AI Agents Management */}
        <TabsContent value="agents" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
            <Card className="border-2 border-green-200">
              <CardContent className="p-4 text-center">
                <Zap className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-green-600">{aiAgents.filter(agent => agent.status === 'active').length}</p>
                <p className="text-sm text-green-700">Active Agents</p>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-blue-200">
              <CardContent className="p-4 text-center">
                <Activity className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-blue-600">{Math.round(aiAgents.reduce((sum, agent) => sum + agent.usage, 0) / aiAgents.length)}%</p>
                <p className="text-sm text-blue-700">Avg Usage</p>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-purple-200">
              <CardContent className="p-4 text-center">
                <Cpu className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-purple-600">99.2%</p>
                <p className="text-sm text-purple-700">Performance</p>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-orange-200">
              <CardContent className="p-4 text-center">
                <Database className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-orange-600">2.4M</p>
                <p className="text-sm text-orange-700">API Calls</p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            {aiAgents.map(agent => (
              <Card key={agent.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white">
                        <Zap className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">{agent.name}</h3>
                        <p className="text-sm text-slate-600">{agent.configuration}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge className={getStatusColor(agent.status)}>
                        {getStatusIcon(agent.status)}
                        <span className="ml-1">{agent.status.toUpperCase()}</span>
                      </Badge>
                      <div className="text-right">
                        <p className="text-lg font-bold">{agent.usage}%</p>
                        <p className="text-sm text-slate-600">Usage</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-slate-500">Last Updated:</span>
                      <p className="font-medium">{agent.lastUpdated}</p>
                    </div>
                    <div>
                      <span className="text-slate-500">Performance:</span>
                      <p className="font-medium text-green-600">Optimal</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <Settings className="w-4 h-4 mr-1" />
                        Configure
                      </Button>
                      <Button size="sm" variant="outline">
                        <BarChart3 className="w-4 h-4 mr-1" />
                        Metrics
                      </Button>
                      <Button size="sm" variant="outline">
                        <Activity className="w-4 h-4 mr-1" />
                        Logs
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Configurations */}
        <TabsContent value="configurations" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Settings className="w-5 h-5" />
                  <span>Global AI Settings</span>
                </CardTitle>
                <CardDescription>Configure system-wide AI behavior and preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="voiceTone">AI Voice Tone</Label>
                  <Select value={voiceTone} onValueChange={setVoiceTone}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="professional">Professional</SelectItem>
                      <SelectItem value="friendly">Friendly</SelectItem>
                      <SelectItem value="casual">Casual</SelectItem>
                      <SelectItem value="formal">Formal</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Follow-up Frequency (days)</Label>
                  <div className="px-3">
                    <Slider
                      value={followUpFrequency}
                      onValueChange={setFollowUpFrequency}
                      max={14}
                      min={1}
                      step={1}
                    />
                    <div className="flex justify-between text-sm text-slate-500 mt-1">
                      <span>1 day</span>
                      <span>{followUpFrequency[0]} days</span>
                      <span>14 days</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="aiAgent">AI Agent Processing</Label>
                      <p className="text-sm text-slate-600">Enable AI-powered lead processing</p>
                    </div>
                    <Switch
                      id="aiAgent"
                      checked={aiAgentEnabled}
                      onCheckedChange={setAiAgentEnabled}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="autoScheduling">Auto Scheduling</Label>
                      <p className="text-sm text-slate-600">Automatically schedule appointments</p>
                    </div>
                    <Switch
                      id="autoScheduling"
                      checked={autoScheduling}
                      onCheckedChange={setAutoScheduling}
                    />
                  </div>
                </div>

                <Button className="w-full">
                  <Settings className="w-4 h-4 mr-2" />
                  Save Configuration
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>System Templates</CardTitle>
                <CardDescription>Manage AI response templates and workflows</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="emailTemplate">Email Template</Label>
                  <Textarea
                    id="emailTemplate"
                    placeholder="Default email template for AI responses..."
                    rows={4}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="smsTemplate">SMS Template</Label>
                  <Textarea
                    id="smsTemplate"
                    placeholder="Default SMS template for AI responses..."
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="voiceScript">Voice Script</Label>
                  <Textarea
                    id="voiceScript"
                    placeholder="Default voice script for AI calls..."
                    rows={4}
                  />
                </div>

                <div className="flex space-x-2">
                  <Button variant="outline" className="flex-1">
                    Preview
                  </Button>
                  <Button className="flex-1">
                    Update Templates
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Analytics & Usage */}
        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
            {systemMetrics.map((metric, index) => (
              <Card key={index} className="border-2 border-blue-200">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-slate-700">{metric.name}</h4>
                    <Badge className={metric.change.startsWith('+') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>
                      {metric.change}
                    </Badge>
                  </div>
                  <p className="text-2xl font-bold text-blue-600">{metric.value}</p>
                  <p className="text-sm text-slate-600">{metric.period}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Agent Performance</CardTitle>
                <CardDescription>Individual AI agent efficiency and usage statistics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {aiAgents.slice(0, 4).map(agent => (
                    <div key={agent.id} className="flex items-center justify-between p-3 rounded-lg border">
                      <div>
                        <p className="font-medium">{agent.name}</p>
                        <p className="text-sm text-slate-600">Usage: {agent.usage}%</p>
                      </div>
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${agent.usage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>System Health</CardTitle>
                <CardDescription>Overall system performance and status</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 rounded-lg bg-green-50 border border-green-200">
                  <div className="flex items-center space-x-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="font-medium text-green-800">System Status: Healthy</span>
                  </div>
                  <p className="text-sm text-green-700">All services running optimally</p>
                </div>
                
                <div className="p-3 rounded-lg bg-blue-50 border border-blue-200">
                  <div className="flex items-center space-x-2 mb-2">
                    <Shield className="w-5 h-5 text-blue-600" />
                    <span className="font-medium text-blue-800">Security: Secured</span>
                  </div>
                  <p className="text-sm text-blue-700">SSL certificates valid, no security alerts</p>
                </div>
                
                <div className="p-3 rounded-lg bg-purple-50 border border-purple-200">
                  <div className="flex items-center space-x-2 mb-2">
                    <Database className="w-5 h-5 text-purple-600" />
                    <span className="font-medium text-purple-800">Database: Optimized</span>
                  </div>
                  <p className="text-sm text-purple-700">Query performance: 1.2s average</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Client Management */}
        <TabsContent value="clients" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
            <Card className="border-2 border-green-200">
              <CardContent className="p-4 text-center">
                <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-green-600">{clients.length}</p>
                <p className="text-sm text-green-700">Active Clients</p>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-blue-200">
              <CardContent className="p-4 text-center">
                <Activity className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-blue-600">{clients.reduce((sum, client) => sum + client.agents, 0)}</p>
                <p className="text-sm text-blue-700">Total Agents</p>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-purple-200">
              <CardContent className="p-4 text-center">
                <BarChart3 className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-purple-600">94%</p>
                <p className="text-sm text-purple-700">Satisfaction</p>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-orange-200">
              <CardContent className="p-4 text-center">
                <TrendingUp className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-orange-600">+18%</p>
                <p className="text-sm text-orange-700">Growth</p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            {clients.map(client => (
              <Card key={client.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center text-white font-bold">
                        {client.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">{client.name}</h3>
                        <p className="text-sm text-slate-600">{client.agents} agents • {client.subscription} plan</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge className={client.lastActive === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}>
                        {client.lastActive}
                      </Badge>
                      <Badge variant="outline">
                        {client.usage} Usage
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <span className="text-slate-500">Subscription:</span>
                      <p className="font-medium">{client.subscription}</p>
                    </div>
                    <div>
                      <span className="text-slate-500">Agents:</span>
                      <p className="font-medium">{client.agents}</p>
                    </div>
                    <div>
                      <span className="text-slate-500">Usage Level:</span>
                      <p className="font-medium">{client.usage}</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <Settings className="w-4 h-4 mr-1" />
                        Configure
                      </Button>
                      <Button size="sm" variant="outline">
                        <BarChart3 className="w-4 h-4 mr-1" />
                        Analytics
                      </Button>
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

export default AdminControlCenter;
