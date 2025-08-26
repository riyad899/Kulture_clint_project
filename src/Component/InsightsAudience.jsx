import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, Area, AreaChart } from 'recharts';
import { TrendingUp, Users, Eye, Heart, Globe, Calendar, ArrowUp, ArrowDown, Play, Image, MessageCircle } from 'lucide-react';

const InsightsAudience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeMetric, setActiveMetric] = useState('views');
  const [selectedTimeframe, setSelectedTimeframe] = useState('30days');

  // Animation trigger on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Key metrics data
  const keyMetrics = [
    {
      icon: Eye,
      label: 'Total Views',
      value: '5.8M+',
      change: '+127%',
      positive: true,
      description: 'Last 30 days'
    },
    {
      icon: Users,
      label: 'Accounts Reached',
      value: '3.2M+',
      change: '+57.7%',
      positive: true,
      description: 'Unique accounts'
    },
    {
      icon: Heart,
      label: 'Total Interactions',
      value: '113K+',
      change: '+85%',
      positive: true,
      description: 'Engagement actions'
    },
    {
      icon: Globe,
      label: 'Global Reach',
      value: '98K+',
      change: '+12%',
      positive: true,
      description: 'Engaged accounts'
    }
  ];

  // Geographic data
  const geographicData = [
    { country: 'India', percentage: 41.0, color: '#F59E0B' },
    { country: 'United States', percentage: 26.9, color: '#EF4444' },
    { country: 'South Africa', percentage: 12.5, color: '#10B981' },
    { country: 'Kuwait', percentage: 9.0, color: '#8B5CF6' },
    { country: 'United Kingdom', percentage: 5.7, color: '#06B6D4' },
    { country: 'France', percentage: 4.1, color: '#F97316' },
    { country: 'Others', percentage: 0.8, color: '#6B7280' }
  ];

  // Content performance data
  const contentPerformance = [
    { type: 'Reels', views: 94.3, interactions: 97.2, color: '#F59E0B' },
    { type: 'Stories', views: 72.7, interactions: 64.5, color: '#EF4444' },
    { type: 'Posts', views: 40.1, interactions: 34.6, color: '#10B981' },
    { type: 'Videos', views: 20.0, interactions: 24.1, color: '#8B5CF6' }
  ];

  // Audience breakdown data
  const audienceData = [
    { name: 'Non-Followers', value: 95.6, color: '#F59E0B' },
    { name: 'Followers', value: 4.4, color: '#1F2937' }
  ];

  // Timeline data for trends
  const timelineData = [
    { date: '23 Jul', views: 120000, reach: 95000, interactions: 2800 },
    { date: '26 Jul', views: 180000, reach: 140000, interactions: 4200 },
    { date: '29 Jul', views: 320000, reach: 260000, interactions: 8900 },
    { date: '01 Aug', views: 280000, reach: 220000, interactions: 7100 },
    { date: '04 Aug', views: 410000, reach: 315000, interactions: 12400 },
    { date: '07 Aug', views: 380000, reach: 290000, interactions: 10800 },
    { date: '10 Aug', views: 520000, reach: 385000, interactions: 15200 },
    { date: '13 Aug', views: 480000, reach: 350000, interactions: 13900 },
    { date: '16 Aug', views: 650000, reach: 475000, interactions: 18600 },
    { date: '21 Aug', values: 720000, reach: 510000, interactions: 21500 }
  ];

  // Custom tooltip for charts
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-black/90 backdrop-blur-sm border border-yellow-400/30 rounded-lg p-3 shadow-xl">
          <p className="text-yellow-400 font-semibold">{`${label}`}</p>
          {payload.map((entry, index) => (
            <p key={index} className="text-white text-sm">
              {`${entry.dataKey}: ${entry.value.toLocaleString()}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <section id="insights" className="relative min-h-screen bg-black py-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400/5 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-block mb-6">
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-orange-500"></div>
              <h2 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-white via-yellow-400 to-white bg-clip-text text-transparent text-center leading-tight">
                INSIGHTS & AUDIENCE REACH
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-yellow-400"></div>
            </div>
          </div>
          <p className="text-xl text-yellow-400/80 font-light tracking-wider">
            DATA-DRIVEN IMPACT • GLOBAL DIGITAL PRESENCE
          </p>
        </div>

        {/* Key Metrics Cards */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {keyMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={index}
                className="group relative p-6 rounded-2xl border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-500 hover:scale-105"
                style={{ animationDelay: `${400 + index * 100}ms` }}
              >
                <div className="absolute -inset-1 bg-gradient-to-br from-yellow-400/10 to-orange-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  {/* Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full flex items-center justify-center border border-yellow-400/30">
                      <Icon className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div className={`flex items-center space-x-1 text-sm font-semibold ${
                      metric.positive ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {metric.positive ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
                      <span>{metric.change}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-2">
                    {metric.value}
                  </div>
                  <div className="text-white font-semibold text-sm mb-1">
                    {metric.label}
                  </div>
                  <div className="text-gray-400 text-xs">
                    {metric.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">

          {/* Geographic Distribution */}
          <div className={`transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="relative p-6 rounded-3xl border border-yellow-400/20">
              <div className="absolute -inset-1 bg-gradient-to-br from-yellow-400/5 to-orange-500/5 rounded-3xl"></div>
              <div className="relative">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Globe className="w-6 h-6 text-yellow-400 mr-3" />
                  Geographic Distribution
                </h3>

                <div className="h-80 mb-6">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={geographicData}
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="percentage"
                        stroke="none"
                      >
                        {geographicData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip content={<CustomTooltip />} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                {/* Legend */}
                <div className="grid grid-cols-2 gap-2">
                  {geographicData.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span className="text-gray-300">{item.country}</span>
                      <span className="text-yellow-400 font-semibold ml-auto">{item.percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Content Performance */}
          <div className={`transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="relative p-6 rounded-3xl border border-yellow-400/20">
              <div className="absolute -inset-1 bg-gradient-to-br from-yellow-400/5 to-orange-500/5 rounded-3xl"></div>
              <div className="relative">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Play className="w-6 h-6 text-yellow-400 mr-3" />
                  Content Performance
                </h3>

                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={contentPerformance}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis
                        dataKey="type"
                        tick={{ fill: '#9CA3AF', fontSize: 12 }}
                        axisLine={false}
                      />
                      <YAxis
                        tick={{ fill: '#9CA3AF', fontSize: 12 }}
                        axisLine={false}
                      />
                      <Tooltip content={<CustomTooltip />} />
                      <Bar dataKey="views" name="Views %" fill="#F59E0B" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="interactions" name="Interactions %" fill="#EF4444" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Audience Breakdown & Performance Timeline */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">

          {/* Audience Breakdown */}
          <div className={`transition-all duration-1000 delay-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="relative p-6 rounded-3xl border border-yellow-400/20 h-full">
              <div className="absolute -inset-1 bg-gradient-to-br from-yellow-400/5 to-orange-500/5 rounded-3xl"></div>
              <div className="relative">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <Users className="w-5 h-5 text-yellow-400 mr-3" />
                  Audience Type
                </h3>

                <div className="h-48 mb-6">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={audienceData}
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {audienceData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip content={<CustomTooltip />} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                <div className="space-y-3">
                  {audienceData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: item.color }}
                        ></div>
                        <span className="text-gray-300 text-sm">{item.name}</span>
                      </div>
                      <span className="text-yellow-400 font-semibold">{item.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Performance Highlights */}
          <div className={`lg:col-span-2 transition-all duration-1000 delay-900 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="relative p-6 rounded-3xl border border-yellow-400/20 h-full">
              <div className="absolute -inset-1 bg-gradient-to-br from-yellow-400/5 to-orange-500/5 rounded-3xl"></div>
              <div className="relative">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <TrendingUp className="w-5 h-5 text-yellow-400 mr-3" />
                  Key Performance Insights
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 rounded-xl border border-yellow-400/20">
                      <Eye className="w-8 h-8 text-yellow-400" />
                      <div>
                        <div className="text-2xl font-bold text-yellow-400">5.8M+</div>
                        <div className="text-sm text-gray-300">Total Views (30 days)</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl border border-blue-400/20">
                      <Users className="w-8 h-8 text-blue-400" />
                      <div>
                        <div className="text-2xl font-bold text-blue-400">3.2M+</div>
                        <div className="text-sm text-gray-300">Accounts Reached</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl border border-green-400/20">
                      <Heart className="w-8 h-8 text-green-400" />
                      <div>
                        <div className="text-2xl font-bold text-green-400">113K+</div>
                        <div className="text-sm text-gray-300">Total Interactions</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-400/20">
                      <Play className="w-8 h-8 text-purple-400" />
                      <div>
                        <div className="text-2xl font-bold text-purple-400">94.3%</div>
                        <div className="text-sm text-gray-300">Reels Performance</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Case Study Summary */}
        <div className={`text-center transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="relative max-w-6xl mx-auto">
            <div className="absolute -inset-6 bg-gradient-to-br from-black/80 via-gray-900/60 to-black/80 backdrop-blur-sm rounded-3xl border border-yellow-400/20"></div>
            <div className="relative p-8 md:p-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Digital Impact Case Study
                </span>
              </h3>

              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-2">
                    5.8M+
                  </div>
                  <div className="text-white font-semibold mb-1">Total Views</div>
                  <div className="text-gray-400 text-sm">30-day performance</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-2">
                    95.6%
                  </div>
                  <div className="text-white font-semibold mb-1">Non-Follower Reach</div>
                  <div className="text-gray-400 text-sm">Organic discovery</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-2">
                    94.3%
                  </div>
                  <div className="text-white font-semibold mb-1">Reels Dominance</div>
                  <div className="text-gray-400 text-sm">Short-form expertise</div>
                </div>
              </div>

              <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6">
                Our content strategy delivers exceptional organic reach and engagement, with strong international
                appeal spanning India (43%), United States (24.9%), and South Africa (12.5%). The data proves
                our expertise in viral, short-form content that resonates globally.
              </p>

              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-1 bg-gradient-to-r from-yellow-400 to-orange-500"></div>
                <span className="text-yellow-400 font-semibold tracking-wider">PROVEN • GLOBAL • IMPACT</span>
                <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-yellow-400"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsAudience;