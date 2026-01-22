export const dealStages = [
  {
    stage: '1. New Lead',
    definition: 'Contact identified, not yet engaged',
    exitCriteria: 'First outreach attempt made',
    maxDays: 2,
  },
  {
    stage: '2. Contacted',
    definition: 'Outreach attempted (call/email)',
    exitCriteria: 'Had actual conversation with DM',
    maxDays: 14,
  },
  {
    stage: '3. Engaged',
    definition: 'Two-way conversation occurred',
    exitCriteria: 'Freight needs qualified',
    maxDays: 7,
  },
  {
    stage: '4. Qualified',
    definition: 'Has freight, authority, timeline',
    exitCriteria: 'Rate quote sent',
    maxDays: 7,
  },
  {
    stage: '5. Quote Sent',
    definition: 'Pricing delivered to prospect',
    exitCriteria: 'Follow-up completed, decision pending',
    maxDays: 14,
  },
  {
    stage: '6. Negotiating',
    definition: 'Active discussion on terms/rates',
    exitCriteria: 'Agreement on terms reached',
    maxDays: 14,
  },
  {
    stage: '7. First Load Booked',
    definition: 'Trial shipment scheduled',
    exitCriteria: 'First load delivered successfully',
    maxDays: 14,
  },
  {
    stage: '8. Won – Active Customer',
    definition: 'Repeat business confirmed',
    exitCriteria: 'Handoff to David complete',
    maxDays: null,
  },
]

export const requiredProperties = [
  {
    property: 'Lead Source',
    type: 'Dropdown',
    purpose: 'Track which channels produce best customers',
  },
  {
    property: 'ZoomInfo List',
    type: 'Dropdown',
    purpose: 'Identify which industry targeting works best',
  },
  {
    property: 'Estimated Monthly Loads',
    type: 'Number',
    purpose: 'Size the opportunity',
  },
  {
    property: 'Current Provider',
    type: 'Text',
    purpose: 'Know the competition, understand switching risk',
  },
  {
    property: 'Decision Timeline',
    type: 'Date',
    purpose: 'Prioritize pipeline work',
  },
  {
    property: 'Authority Level',
    type: 'Dropdown',
    purpose: 'Identify decision maker vs. influencer',
  },
  {
    property: 'Next Action',
    type: 'Text',
    purpose: 'Drive daily priorities',
  },
  {
    property: 'Next Action Date',
    type: 'Date',
    purpose: 'Ensure follow-through',
  },
]

export const lostDealReasons = [
  {
    reason: 'Price too high',
    whatItTells: 'May need to adjust pricing or better qualify budget upfront',
  },
  {
    reason: 'Went with competitor',
    whatItTells: 'What did they offer that we didn\'t?',
  },
  {
    reason: 'No decision / went dark',
    whatItTells: 'Better qualification or follow-up needed',
  },
  {
    reason: 'Timing not right',
    whatItTells: 'Recycle in 90 days, keep warm',
  },
  {
    reason: 'Bad fit / wrong target',
    whatItTells: 'Adjust lead targeting',
  },
  {
    reason: 'Service concerns',
    whatItTells: 'Address in pitch, improve case studies',
  },
]
