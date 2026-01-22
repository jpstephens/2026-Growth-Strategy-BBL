export interface NAICSCode {
  code: string
  industry: string
  why: string
  typicalFreight: string
}

export const buildingProducts: NAICSCode[] = [
  {
    code: '327310',
    industry: 'Cement Manufacturing',
    why: 'Heavy, consistent, regional delivery',
    typicalFreight: 'Bulk cement to ready-mix plants',
  },
  {
    code: '327320',
    industry: 'Ready-Mix Concrete',
    why: 'Construction-tied, time-sensitive',
    typicalFreight: 'Delivery to job sites',
  },
  {
    code: '327331',
    industry: 'Concrete Block & Brick',
    why: 'Heavy products, regional',
    typicalFreight: 'Building materials to sites',
  },
  {
    code: '321911',
    industry: 'Wood Windows & Doors',
    why: 'Bulky, fragile, regional distribution',
    typicalFreight: 'To builders, home centers',
  },
  {
    code: '321918',
    industry: 'Other Millwork/Flooring',
    why: 'Building materials, consistent',
    typicalFreight: 'Flooring, trim to distributors',
  },
  {
    code: '332321',
    industry: 'Metal Windows & Doors',
    why: 'Heavy, weather-dependent demand',
    typicalFreight: 'Commercial construction',
  },
  {
    code: '332311',
    industry: 'Prefab Metal Buildings',
    why: 'Large components, project-based',
    typicalFreight: 'Steel buildings to sites',
  },
  {
    code: '321992',
    industry: 'Prefab Wood Buildings',
    why: 'Modular construction boom',
    typicalFreight: 'Modular homes, structures',
  },
]

export const metalFabrication: NAICSCode[] = [
  {
    code: '332312',
    industry: 'Fabricated Structural Metal',
    why: 'Heavy, construction-tied',
    typicalFreight: 'Steel beams, frames to job sites',
  },
  {
    code: '332322',
    industry: 'Sheet Metal Work',
    why: 'HVAC, roofing, industrial applications',
    typicalFreight: 'Ductwork, panels',
  },
  {
    code: '332710',
    industry: 'Machine Shops',
    why: 'Parts to assembly plants, JIT',
    typicalFreight: 'Machined components',
  },
  {
    code: '332999',
    industry: 'Misc Fabricated Metal',
    why: 'Custom products, varied needs',
    typicalFreight: 'Specialty metal products',
  },
  {
    code: '332510',
    industry: 'Hardware Manufacturing',
    why: 'Distribution to retailers',
    typicalFreight: 'Hardware to big-box stores',
  },
  {
    code: '333120',
    industry: 'Construction Machinery Mfg',
    why: 'Heavy equipment, time-sensitive',
    typicalFreight: 'Machinery, parts',
  },
  {
    code: '333413',
    industry: 'Industrial Pump Mfg',
    why: 'Industrial customers, critical parts',
    typicalFreight: 'Pumps, components',
  },
  {
    code: '333923',
    industry: 'Overhead Crane Mfg',
    why: 'Project-based, large shipments',
    typicalFreight: 'Cranes, hoists',
  },
]

export const plasticsPackaging: NAICSCode[] = [
  {
    code: '326199',
    industry: 'Other Plastics Products',
    why: 'High volume, varied customers',
    typicalFreight: 'Plastic components, products',
  },
  {
    code: '326111',
    industry: 'Plastics Bag & Pouch Mfg',
    why: 'Consumer goods, retail distribution',
    typicalFreight: 'Bags to retailers, food co\'s',
  },
  {
    code: '326113',
    industry: 'Unlaminated Plastics Film',
    why: 'Packaging materials, industrial',
    typicalFreight: 'Film to converters, packagers',
  },
  {
    code: '326122',
    industry: 'Plastics Pipe & Fitting',
    why: 'Construction, consistent demand',
    typicalFreight: 'PVC to distributors, sites',
  },
  {
    code: '326160',
    industry: 'Plastics Bottle Mfg',
    why: 'Beverage, consumer goods',
    typicalFreight: 'Bottles to bottlers, brands',
  },
  {
    code: '322211',
    industry: 'Corrugated Box Mfg',
    why: 'Packaging, e-commerce boom',
    typicalFreight: 'Boxes to fulfillment, mfg',
  },
  {
    code: '322212',
    industry: 'Folding Paperboard Box',
    why: 'Consumer goods packaging',
    typicalFreight: 'Packaging to brands',
  },
  {
    code: '322219',
    industry: 'Other Paperboard Container',
    why: 'Industrial packaging',
    typicalFreight: 'Containers to manufacturers',
  },
]

export const automotiveJIT: NAICSCode[] = [
  {
    code: '336310',
    industry: 'Motor Vehicle Engines',
    why: 'Critical components, high value',
    typicalFreight: 'Engines to assembly plants',
  },
  {
    code: '336350',
    industry: 'Transmission & Powertrain',
    why: 'High-value, JIT critical',
    typicalFreight: 'Transmissions to OEMs',
  },
  {
    code: '336360',
    industry: 'Seating & Interior Trim',
    why: 'Direct to assembly line',
    typicalFreight: 'Seats, trim to plants',
  },
  {
    code: '336370',
    industry: 'Metal Stamping',
    why: 'High volume, consistent',
    typicalFreight: 'Stamped parts to Tier 1s',
  },
  {
    code: '336390',
    industry: 'Other Motor Vehicle Parts',
    why: 'Tier 1-2 suppliers',
    typicalFreight: 'Various components',
  },
  {
    code: '336211',
    industry: 'Motor Vehicle Bodies',
    why: 'Heavy, regional shipments',
    typicalFreight: 'Bodies, frames',
  },
  {
    code: '333415',
    industry: 'HVAC Equipment Mfg',
    why: 'Breakdown replacements urgent',
    typicalFreight: 'HVAC units, parts',
  },
]

export const listAllocation = {
  buildingProducts: { percentage: 25, contacts: 375 },
  metalFabrication: { percentage: 30, contacts: 450 },
  plasticsPackaging: { percentage: 25, contacts: 375 },
  automotiveJIT: { percentage: 20, contacts: 300 },
}
