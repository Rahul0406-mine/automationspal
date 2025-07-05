import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, FileText, Activity, Bell, Clock, AlertCircle, Users, TrendingUp, Briefcase, Upload, Download, Eye, Edit, Trash2 } from "lucide-react";

const OperationsDashboard = () => {
  const [selectedDeal, setSelectedDeal] = useState(null);

  const deals = [
    { 
      id: 1, 
      client: "Sarah Johnson", 
      property: "123 Oak Street", 
      progress: 75, 
      status: "inspection", 
      value: 450000,
      nextMilestone: "Legal Review",
      daysToClose: 12
    },
    { 
      id: 2, 
      client: "Mike Chen", 
      property: "456 Pine Avenue", 
      progress: 45, 
      status: "negotiation", 
      value: 320000,
      nextMilestone: "Contract Signing",
      daysToClose: 25
    },
    { 
      id: 3, 
      client: "Emma Davis", 
      property: "789 Maple Drive", 
      progress: 90, 
      status: "legal", 
      value: 275000,
      nextMilestone: "Final Walkthrough",
      daysToClose: 5
    },
    { 
      id: 4, 
      client: "James Wilson", 
      property: "321 Elm Street", 
      progress: 25, 
      status: "offer", 
      value: 680000,
      nextMilestone: "Inspection",
      daysToClose: 35
    }
  ];

  const employees = [
    { id: 1, name: "Alex Rodriguez", role: "Senior Agent", activeDeals: 8, completionRate: 92, tasksCompleted: 45, tasksOverdue: 2 },
    { id: 2, name: "Maria Silva", role: "Junior Agent", activeDeals: 5, completionRate: 88, tasksCompleted: 32, tasksOverdue: 1 },
    { id: 3, name: "David Kim", role: "Property Manager", activeDeals: 12, completionRate: 95, tasksCompleted: 67, tasksOverdue: 0 },
    { id: 4, name: "Lisa Wang", role: "Senior Agent", activeDeals: 6, completionRate: 85, tasksOverdue: 3, tasksCompleted: 28 }
  ];

  const documents = [
    { id: 1, name: "Purchase Agreement - Johnson", type: "Contract", status: "signed", lastModified: "2 hours ago", client: "Sarah Johnson" },
    { id: 2, name: "Inspection Report - Chen", type: "Report", status: "pending", lastModified: "1 day ago", client: "Mike Chen" },
    { id: 3, name: "Title Documents - Davis", type: "Legal", status: "review", lastModified: "3 hours ago", client: "Emma Davis" },
    { id: 4, name: "Disclosure Form - Wilson", type: "Form", status: "draft", lastModified: "5 hours ago", client: "James Wilson" }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'inspection': return "bg-blue-100 text-blue-800";
      case 'negotiation': return "bg-yellow-100 text-yellow-800";
      case 'legal': return "bg-purple-100 text-purple-800";
      case 'offer': return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getDocumentStatusColor = (status) => {
    switch (status) {
      case 'signed': return "bg-green-100 text-green-800";
      case 'pending': return "bg-yellow-100 text-yellow-800";
      case 'review': return "bg-blue-100 text-blue-800";
      case 'draft': return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-slate-800">Operations & Process Automation</h2>
          <p className="text-slate-600">Streamline workflows with intelligent automation and tracking</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Bell className="w-4 h-4 mr-2" />
            Alerts
          </Button>
          <Button>
            <Activity className="w-4 h-4 mr-2" />
            Analytics
          </Button>
        </div>
      </div>

      <Tabs defaultValue="deals" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="deals">Deal Tracker</TabsTrigger>
          <TabsTrigger value="documents">Document Automation</TabsTrigger>
          <TabsTrigger value="employees">Team Monitoring</TabsTrigger>
        </TabsList>

        {/* Deal Progress Tracker */}
        <TabsContent value="deals" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <Card className="border-2 border-blue-200">
              <CardContent className="p-4 text-center">
                <Briefcase className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-blue-600">{deals.length}</p>
                <p className="text-sm text-blue-700">Active Deals</p>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-green-200">
              <CardContent className="p-4 text-center">
                <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-green-600">${(deals.reduce((sum, deal) => sum + deal.value, 0) / 1000000).toFixed(1)}M</p>
                <p className="text-sm text-green-700">Total Pipeline Value</p>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-purple-200">
              <CardContent className="p-4 text-center">
                <Clock className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-purple-600">{Math.round(deals.reduce((sum, deal) => sum + deal.daysToClose, 0) / deals.length)}</p>
                <p className="text-sm text-purple-700">Avg Days to Close</p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            {deals.map(deal => (
              <Card key={deal.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold">{deal.client}</h3>
                      <p className="text-slate-600">{deal.property}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-green-600">${deal.value.toLocaleString()}</p>
                      <Badge className={getStatusColor(deal.status)}>
                        {deal.status.toUpperCase()}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Deal Progress</span>
                        <span className="text-sm text-slate-600">{deal.progress}%</span>
                      </div>
                      <Progress value={deal.progress} className="h-2" />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-slate-500">Next Milestone:</span>
                        <p className="font-medium">{deal.nextMilestone}</p>
                      </div>
                      <div>
                        <span className="text-slate-500">Days to Close:</span>
                        <p className="font-medium">{deal.daysToClose} days</p>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4 mr-1" />
                          View
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit className="w-4 h-4 mr-1" />
                          Update
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Document Management */}
        <TabsContent value="documents" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="w-5 h-5" />
                  <span>Automated Document Generation</span>
                </CardTitle>
                <CardDescription>AI-powered form filling and document creation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
                  <h4 className="font-medium mb-2">Auto-Fill Capabilities</h4>
                  <ul className="text-sm space-y-1 text-blue-800">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Purchase agreements from CRM data
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Disclosure forms with property details
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Legal documents with client information
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Digital signature integration
                    </li>
                  </ul>
                </div>
                
                <div className="flex space-x-2">
                  <Button className="flex-1">
                    <Upload className="w-4 h-4 mr-2" />
                    Generate Document
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <FileText className="w-4 h-4 mr-2" />
                    Templates
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Document Status</CardTitle>
                <CardDescription>Track document progress and signatures</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {documents.map(doc => (
                    <div key={doc.id} className="flex items-center justify-between p-3 rounded-lg border">
                      <div className="flex-1">
                        <p className="font-medium">{doc.name}</p>
                        <p className="text-sm text-slate-600">{doc.type} • {doc.client}</p>
                        <p className="text-xs text-slate-500">Modified {doc.lastModified}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className={getDocumentStatusColor(doc.status)}>
                          {doc.status}
                        </Badge>
                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Employee Monitoring */}
        <TabsContent value="employees" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
            <Card className="border-2 border-green-200">
              <CardContent className="p-4 text-center">
                <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-green-600">{employees.length}</p>
                <p className="text-sm text-green-700">Active Agents</p>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-blue-200">
              <CardContent className="p-4 text-center">
                <Briefcase className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-blue-600">{employees.reduce((sum, emp) => sum + emp.activeDeals, 0)}</p>
                <p className="text-sm text-blue-700">Total Active Deals</p>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-purple-200">
              <CardContent className="p-4 text-center">
                <CheckCircle className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-purple-600">{employees.reduce((sum, emp) => sum + emp.tasksCompleted, 0)}</p>
                <p className="text-sm text-purple-700">Tasks Completed</p>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-red-200">
              <CardContent className="p-4 text-center">
                <AlertCircle className="w-8 h-8 text-red-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-red-600">{employees.reduce((sum, emp) => sum + (emp.tasksOverdue || 0), 0)}</p>
                <p className="text-sm text-red-700">Overdue Tasks</p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            {employees.map(employee => (
              <Card key={employee.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                        {employee.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">{employee.name}</h3>
                        <p className="text-slate-600">{employee.role}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-green-600">{employee.completionRate}%</p>
                      <p className="text-sm text-slate-600">Completion Rate</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <span className="text-slate-500">Active Deals:</span>
                      <p className="font-bold text-blue-600">{employee.activeDeals}</p>
                    </div>
                    <div>
                      <span className="text-slate-500">Tasks Done:</span>
                      <p className="font-bold text-green-600">{employee.tasksCompleted}</p>
                    </div>
                    <div>
                      <span className="text-slate-500">Overdue:</span>
                      <p className="font-bold text-red-600">{employee.tasksOverdue || 0}</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <Eye className="w-4 h-4 mr-1" />
                        Details
                      </Button>
                      <Button size="sm" variant="outline">
                        <Activity className="w-4 h-4 mr-1" />
                        Tasks
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

export default OperationsDashboard;
