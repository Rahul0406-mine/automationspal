import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TrendingUp, MapPin, PieChart, BarChart3, DollarSign, Home, Users, Target, Activity, Star, AlertCircle, CheckCircle } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart as RechartsPieChart, Cell, AreaChart, Area, Pie } from "recharts";

const IntelligenceDashboard = () => {
  const marketTrendData = [
    { month: 'Jan', price: 425000, volume: 45, forecast: 435000 },
    { month: 'Feb', price: 438000, volume: 52, forecast: 445000 },
    { month: 'Mar', price: 451000, volume: 48, forecast: 458000 },
    { month: 'Apr', price: 467000, volume: 61, forecast: 472000 },
    { month: 'May', price: 479000, volume: 58, forecast: 485000 },
    { month: 'Jun', price: 493000, volume: 67, forecast: 498000 },
  ];

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

  const propertyTypeData = [
    { type: 'Single Family', avgPrice: 485000, sales: 23, trend: 'up' },
    { type: 'Condos', avgPrice: 325000, sales: 18, trend: 'up' },
    { type: 'Townhomes', avgPrice: 395000, sales: 12, trend: 'down' },
    { type: 'Multi-Family', avgPrice: 750000, sales: 8, trend: 'stable' },
  ];

  const aiInsights = [
    { 
      type: 'trend', 
      title: 'Market Opportunity Detected', 
      message: 'Downtown condos showing 18% price increase - recommend increased marketing focus',
      urgency: 'high',
      impact: 'revenue'
    },
    { 
      type: 'lead', 
      title: 'Lead Quality Improving', 
      message: 'Website leads showing 23% higher conversion rate this month',
      urgency: 'medium',
      impact: 'conversion'
    },
    { 
      type: 'efficiency', 
      title: 'Process Optimization', 
      message: 'AI appointment scheduling reduced no-shows by 34%',
      urgency: 'low',
      impact: 'efficiency'
    },
  ];

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up': return <TrendingUp className="w-4 h-4 text-green-600" />;
      case 'down': return <TrendingUp className="w-4 h-4 text-red-600 transform rotate-180" />;
      default: return <Activity className="w-4 h-4 text-blue-600" />;
    }
  };

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-slate-800">Intelligence & Strategy Dashboard</h2>
          <p className="text-slate-600">Data-driven insights and market intelligence for strategic decisions</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <BarChart3 className="w-4 h-4 mr-2" />
            Export Report
          </Button>
          <Button>
            <Star className="w-4 h-4 mr-2" />
            AI Insights
          </Button>
        </div>
      </div>

      <Tabs defaultValue="market" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="market">Market Trends</TabsTrigger>
          <TabsTrigger value="leads">Lead Intelligence</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="insights">AI Insights</TabsTrigger>
        </TabsList>

        {/* Market Trends */}
        <TabsContent value="market" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
            <Card className="border-2 border-green-200">
              <CardContent className="p-4 text-center">
                <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-green-600">+12.5%</p>
                <p className="text-sm text-green-700">Market Growth</p>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-blue-200">
              <CardContent className="p-4 text-center">
                <DollarSign className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-blue-600">$493K</p>
                <p className="text-sm text-blue-700">Avg Price</p>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-purple-200">
              <CardContent className="p-4 text-center">
                <Home className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-purple-600">67</p>
                <p className="text-sm text-purple-700">Sales Volume</p>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-orange-200">
              <CardContent className="p-4 text-center">
                <MapPin className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-orange-600">15</p>
                <p className="text-sm text-orange-700">Days on Market</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Market Price Trends & Forecast</CardTitle>
                <CardDescription>Historical prices vs AI predictions</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={marketTrendData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                    <Line type="monotone" dataKey="price" stroke="#3B82F6" strokeWidth={2} name="Actual Price" />
                    <Line type="monotone" dataKey="forecast" stroke="#10B981" strokeWidth={2} strokeDasharray="5 5" name="AI Forecast" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Property Type Performance</CardTitle>
                <CardDescription>Sales volume and pricing by property type</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {propertyTypeData.map((property, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                      <div className="flex items-center space-x-3">
                        {getTrendIcon(property.trend)}
                        <div>
                          <p className="font-medium">{property.type}</p>
                          <p className="text-sm text-slate-600">{property.sales} sales</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">${property.avgPrice.toLocaleString()}</p>
                        <p className="text-sm text-slate-600">Avg Price</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Investment Opportunities</CardTitle>
              <CardDescription>AI-identified high-potential areas and properties</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-green-50 border border-green-200">
                  <h4 className="font-bold text-green-800 mb-2">Downtown District</h4>
                  <p className="text-sm text-green-700 mb-2">Projected 22% growth over 18 months</p>
                  <Badge className="bg-green-100 text-green-800">High Opportunity</Badge>
                </div>
                
                <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
                  <h4 className="font-bold text-blue-800 mb-2">Riverside Condos</h4>
                  <p className="text-sm text-blue-700 mb-2">New development area with infrastructure growth</p>
                  <Badge className="bg-blue-100 text-blue-800">Medium Opportunity</Badge>
                </div>
                
                <div className="p-4 rounded-lg bg-purple-50 border border-purple-200">
                  <h4 className="font-bold text-purple-800 mb-2">Suburban Expansion</h4>
                  <p className="text-sm text-purple-700 mb-2">Family-friendly area with school improvements</p>
                  <Badge className="bg-purple-100 text-purple-800">Emerging</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Lead Intelligence */}
        <TabsContent value="leads" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Lead Source Analysis</CardTitle>
                <CardDescription>Where your best leads come from</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <RechartsPieChart>
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
                  </RechartsPieChart>
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

        {/* Performance Reports */}
        <TabsContent value="performance" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="border-2 border-green-200">
              <CardContent className="p-4 text-center">
                <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-green-600">127h</p>
                <p className="text-sm text-green-700">Time Saved by AI</p>
                <p className="text-xs text-green-600 mt-1">This month</p>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-blue-200">
              <CardContent className="p-4 text-center">
                <DollarSign className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-blue-600">$2.4M</p>
                <p className="text-sm text-blue-700">AI-Influenced Revenue</p>
                <p className="text-xs text-blue-600 mt-1">Last 6 months</p>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-purple-200">
              <CardContent className="p-4 text-center">
                <Activity className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-purple-600">87%</p>
                <p className="text-sm text-purple-700">Process Automation</p>
                <p className="text-xs text-purple-600 mt-1">Current level</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Team Performance Metrics</CardTitle>
              <CardDescription>Individual and team productivity insights</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={[
                  { name: 'Alex Rodriguez', deals: 8, revenue: 850000, efficiency: 92 },
                  { name: 'Maria Silva', deals: 5, revenue: 520000, efficiency: 88 },
                  { name: 'David Kim', deals: 12, revenue: 1200000, efficiency: 95 },
                  { name: 'Lisa Wang', deals: 6, revenue: 640000, efficiency: 85 },
                ]}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="deals" fill="#3B82F6" name="Active Deals" />
                  <Bar dataKey="efficiency" fill="#10B981" name="Efficiency %" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        {/* AI Insights */}
        <TabsContent value="insights" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Star className="w-5 h-5" />
                <span>AI-Generated Insights</span>
              </CardTitle>
              <CardDescription>Intelligent recommendations based on data analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {aiInsights.map((insight, index) => (
                  <div key={index} className="p-4 rounded-lg border hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-bold">{insight.title}</h4>
                      <Badge className={getUrgencyColor(insight.urgency)}>
                        {insight.urgency} priority
                      </Badge>
                    </div>
                    <p className="text-slate-700 mb-3">{insight.message}</p>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">
                        Impact: {insight.impact}
                      </Badge>
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Predictive Analytics</CardTitle>
                <CardDescription>AI forecasts and recommendations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 rounded-lg bg-green-50 border border-green-200">
                  <div className="flex items-center space-x-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                    <span className="font-medium text-green-800">Market Forecast</span>
                  </div>
                  <p className="text-sm text-green-700">15% price increase predicted for Q3-Q4</p>
                </div>
                
                <div className="p-3 rounded-lg bg-blue-50 border border-blue-200">
                  <div className="flex items-center space-x-2 mb-2">
                    <Users className="w-4 h-4 text-blue-600" />
                    <span className="font-medium text-blue-800">Lead Quality</span>
                  </div>
                  <p className="text-sm text-blue-700">Website leads likely to increase 28% next month</p>
                </div>
                
                <div className="p-3 rounded-lg bg-purple-50 border border-purple-200">
                  <div className="flex items-center space-x-2 mb-2">
                    <Target className="w-4 h-4 text-purple-600" />
                    <span className="font-medium text-purple-800">Conversion Opportunity</span>
                  </div>
                  <p className="text-sm text-purple-700">12 warm leads ready for follow-up campaigns</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Optimization Recommendations</CardTitle>
                <CardDescription>AI suggestions for improved performance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 rounded-lg border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Marketing Budget</span>
                    <Badge className="bg-green-100 text-green-800">High Impact</Badge>
                  </div>
                  <p className="text-sm text-slate-600">Increase Facebook ads by 25% for luxury properties</p>
                </div>
                
                <div className="p-3 rounded-lg border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Team Allocation</span>
                    <Badge className="bg-yellow-100 text-yellow-800">Medium Impact</Badge>
                  </div>
                  <p className="text-sm text-slate-600">Reassign 2 agents to downtown market segment</p>
                </div>
                
                <div className="p-3 rounded-lg border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Process Improvement</span>
                    <Badge className="bg-blue-100 text-blue-800">Efficiency</Badge>
                  </div>
                  <p className="text-sm text-slate-600">Automate follow-up for cold leads after 7 days</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default IntelligenceDashboard;
