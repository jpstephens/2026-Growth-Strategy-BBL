export const activityTargets = {
  dialsPerDay: '40+',
  dialsPerWeek: '200+',
  dialsPerMonth: '800+',
  minimumNote: 'These are minimums, not goals. Top performers exceed these numbers.',
}

export const conversionFunnel = [
  {
    metric: 'Dials',
    rate: '—',
    weeklyResult: '200',
    monthlyResult: '800',
  },
  {
    metric: 'Connect Rate',
    rate: '15-20%',
    weeklyResult: '30-40 conversations',
    monthlyResult: '120-160',
  },
  {
    metric: 'Qualify Rate (of conversations)',
    rate: '25%',
    weeklyResult: '8-10 qualified',
    monthlyResult: '32-40',
  },
  {
    metric: 'Close Rate (of qualified)',
    rate: '50%',
    weeklyResult: '4-5 new customers',
    monthlyResult: '16-20',
  },
]

export const dailySchedule = [
  {
    time: '8:00-8:15',
    activity: 'Setup: CRM, call list, review notes',
    duration: '15 min',
    notes: 'Prepare before calling',
    protectedTime: false,
  },
  {
    time: '8:15-10:00',
    activity: 'PROTECTED CALLING BLOCK #1',
    duration: '1hr 45min',
    notes: 'Target: 20 dials',
    protectedTime: true,
  },
  {
    time: '10:00-10:30',
    activity: 'Break: Email, CRM updates, bathroom',
    duration: '30 min',
    notes: 'Log calls, update notes',
    protectedTime: false,
  },
  {
    time: '10:30-12:00',
    activity: 'PROTECTED CALLING BLOCK #2',
    duration: '1hr 30min',
    notes: 'Target: 15 dials',
    protectedTime: true,
  },
  {
    time: '12:00-12:30',
    activity: 'Lunch',
    duration: '30 min',
    notes: '—',
    protectedTime: false,
  },
  {
    time: '12:30-2:00',
    activity: 'Follow-ups, quotes, warm prospects',
    duration: '1hr 30min',
    notes: 'Work pipeline',
    protectedTime: false,
  },
  {
    time: '2:00-3:30',
    activity: 'PROTECTED CALLING BLOCK #3',
    duration: '1hr 30min',
    notes: 'Target: 10 dials',
    protectedTime: true,
  },
  {
    time: '3:30-5:00',
    activity: 'Admin, pipeline review, EOD report',
    duration: '1hr 30min',
    notes: 'Daily summary to Chris',
    protectedTime: false,
  },
]

export const callFramework = {
  opening: {
    title: 'The Opening (First 10 Seconds)',
    description: 'You have 10 seconds to earn 30 more seconds. Get to the point:',
    script: '"Hi [Name], this is Patrick with BlackBridge Logistics. I know I\'m catching you cold—do you have 30 seconds?"',
    tips: [
      'Use their name—shows you did research',
      'Acknowledge you\'re interrupting—shows respect for their time',
      'Ask for 30 seconds, not 5 minutes—lower commitment',
    ],
  },
  hook: {
    title: 'The Hook (Next 15 Seconds)',
    description: 'Give them a reason to keep listening:',
    script: '"We specialize in [FTL/expedited] for [their industry—manufacturing, building products, etc.]. I\'m not calling to replace anyone—I\'m calling because when your current carrier drops the ball, you need a backup who can actually perform. I\'d rather have that conversation now than when you\'re in crisis mode."',
    tips: [
      'Specific to their business (shows you know their industry)',
      'Not trying to replace—lowers resistance',
      'Frames the conversation around their future problem, not your need to sell',
    ],
  },
  qualifying: {
    title: 'Qualifying Questions',
    description: 'If they\'re willing to talk, learn about their situation:',
    questions: [
      'How are you handling your freight right now—in-house team or outside partners?',
      'What\'s your mix—mostly regional or cross-country?',
      'How many loads are you moving per week typically?',
      'When was the last time a carrier let you down? What happened?',
      'What would need to happen for you to try a new broker?',
    ],
    note: 'Listen more than you talk. Take notes. Their words become your follow-up ammunition.',
  },
  objections: {
    title: 'Common Objections and Responses',
    items: [
      {
        objection: '"We\'re happy with our current broker"',
        response: '"That\'s great—means you know what good service looks like. I\'m not asking to replace them. I\'m asking to be the call you make when they can\'t cover a load or when you need expedited help. Can I send you our rate sheet to have on file?"',
      },
      {
        objection: '"We don\'t use brokers"',
        response: '"Makes sense—a lot of companies feel that way until they get stuck. When you have a hot load and your regular carriers are booked, who do you call? I\'d like to be that backup option."',
      },
      {
        objection: '"Send me your info / email me"',
        response: '"Happy to. What\'s the best email? And just so I send you something relevant—are you mostly moving dry van, flatbed, or a mix?"',
      },
      {
        objection: '"Not interested"',
        response: '"I hear you. Quick question before I go—is it because you\'re fully covered, or because you\'ve had bad experiences with brokers before?"',
      },
    ],
  },
}

export const successOutcomes = [
  {
    outcome: 'Agrees to receive a rate quote',
    whyWin: 'Shows interest in pricing',
    nextStep: 'Send quote within 2 hours—speed matters',
  },
  {
    outcome: 'Schedules a callback',
    whyWin: 'Committed their time',
    nextStep: 'Calendar invite immediately, prepare for call',
  },
  {
    outcome: 'Shares a pain point',
    whyWin: 'Trust building, insight gained',
    nextStep: 'Document in HubSpot, use in follow-up',
  },
  {
    outcome: '"Not now but call me in X weeks"',
    whyWin: 'Door is open, timing issue',
    nextStep: 'Set task for exact date, note the reason',
  },
  {
    outcome: 'Reached decision maker, learned their situation',
    whyWin: 'Relationship started',
    nextStep: 'Add to nurture sequence, warm email follow-up',
  },
  {
    outcome: 'Good conversation, no immediate need',
    whyWin: 'They know who you are',
    nextStep: '30-day follow-up, stay on radar',
  },
]

export const protectedTimeRule = [
  'During calling blocks, Patrick does NOT handle operations.',
  'Phone on silent for non-sales calls.',
  'No email checking.',
  'No "quick favors."',
  'David and Vin handle all ops issues.',
  'If the building isn\'t on fire, it can wait 90 minutes.',
]

export const scriptIterationProcess = {
  weekly: 'Patrick and Chris review which openers got best responses, which objection handlers worked.',
  monthly: 'Formal script review based on conversion data. Update the framework with what\'s working.',
  note: 'This isn\'t a perfect script—it\'s a starting point we improve over time.',
}
