/**
 * Uncommon Schools — AI Team Leadership Presentation
 * Updated: April 14, 2026 — Mary Ann feedback applied
 * ─────────────────────────────────────────────────
 * HOW TO RUN:
 *   1. Go to https://script.google.com
 *   2. Click "New project"
 *   3. Delete all existing code
 *   4. Paste this entire file
 *   5. Save (Cmd+S), then click ▶ Run → createUncommonAIPresentation
 *   6. Approve permissions when prompted
 *   7. Find the deck in Google Drive
 */

const W = 720, H = 405;

const C = {
  blue:   '#0033A0',
  gold:   '#F2A900',
  white:  '#FFFFFF',
  black:  '#000000',
  gray:   '#333333',
  altRow: '#F5F7FA',
  green:  '#27AE60',
  red:    '#C0392B'
};

const F = {
  titleSlide:    48,
  slideTitle:    28,
  body:          12,
  small:         10,
  footer:         9
};

const MARGIN_L   = 45;
const MARGIN_R   = 45;
const CONTENT_W  = W - MARGIN_L - MARGIN_R;
const TITLE_Y    = 28;
const TITLE_H    = 38;
const RULE_Y     = 70;
const RULE_H     = 3;
const CONTENT_Y  = 82;
const CONTENT_H  = H - CONTENT_Y - 72;
const FOOTER_Y   = H - 65;
const FOOTER_H   = 65;

// ═══════════════════════════════════════════════════════════════
// MAIN — 12 slides (Mary Ann feedback applied)
// ═══════════════════════════════════════════════════════════════
function createUncommonAIPresentation() {
  const pres = SlidesApp.create('AI Team — Amplifying What Marketing Can Do (Updated)');
  const existing = pres.getSlides();
  existing[0].getPageElements().forEach(el => el.remove());

  const s = [existing[0]];
  for (let i = 0; i < 11; i++) s.push(pres.appendSlide(SlidesApp.PredefinedLayout.BLANK));

  slide01_Title(s[0]);
  slide02_Context(s[1]);           // REVISED: ET buy-in context, part-time/freelance, titles
  slide03_WebsiteBackground(s[2]); // NEW: Website redesign background, agencies pursued
  slide04_WhatWeBuilt(s[3]);
  slide05_TestCase(s[4]);          // REVISED: "Test Case" not "Proof"
  slide06_WhatWeDelivered(s[5]);   // REVISED: Acknowledge gaps, Research & Analytics agent
  slide07_AgencyRelationship(s[6]);
  slide08_OperatingSystem(s[7]);
  slide09_WhatThisEnables(s[8]);
  slide10_ETCommitment(s[9]);      // NEW: Project structure, RAPID, roles, timing
  slide11_Summary(s[10]);
  slide12_WhatsNext(s[11]);

  Logger.log('✅ Done! ' + pres.getUrl());
}

// ─── SLIDE 1: TITLE ──────────────────────────────────────────────────────────
function slide01_Title(slide) {
  slide.getBackground().setSolidFill(C.blue);
  addText(slide, 'UNCOMMON', 45, 28, 300, 32, {size:22, bold:true, color:C.white});
  addRect(slide, 45, 63, 200, 2, C.gold);
  addText(slide, 'SCHOOLS', 45, 67, 300, 22, {size:14, bold:true, color:C.gold});
  addRect(slide, 45, 90, 200, 2, C.gold);
  addText(slide, 'AI Team: Amplifying\nWhat Marketing Can Do', 45, 155, W-90, 110,
    {size:40, bold:true, color:C.white, vAlign:'MIDDLE'});
  addText(slide, 'Uncommon Schools  ·  April 2026', 45, 270, W-90, 30,
    {size:15, color:C.gold});
  addFooter(slide, 1);
}

// ─── SLIDE 2: CONTEXT (revised — ET buy-in framing) ──────────────────────────
function slide02_Context(slide) {
  slide.getBackground().setSolidFill(C.white);
  addContentHeader(slide, 'Context: The Current Situation');

  addBullets(slide, [
    '52 schools across 5 cities — 1 Creative Director (Anthony Emezu), 3 designers (part-time, freelance)',
    'Project management supported by Rachel Kotler (Marketing PM) and Suezette Weir (Advertising & Media)',
    'Annual calendar: campaigns, graduations, enrollment, recruitment, 30th anniversary, and a full website redesign — running simultaneously',
    'Maintaining big-picture strategy while executing at this volume requires either a significantly expanded team or a fundamentally different operating model',
    'Outside strategy and research support at this level: hundreds of thousands of dollars and months of ramp-up',
    ' ',
    'We built a better model.'
  ], MARGIN_L, CONTENT_Y, CONTENT_W, CONTENT_H, {size:12, color:C.black, lastBold:true});
  addFooter(slide, 2);
}

// ─── SLIDE 3: WEBSITE REDESIGN BACKGROUND (new) ──────────────────────────────
function slide03_WebsiteBackground(slide) {
  slide.getBackground().setSolidFill(C.white);
  addContentHeader(slide, 'The Website Redesign: Background');

  addText(slide,
    'uncommonschools.org serves as the primary public face of the organization — for families, donors, educators, and the press. It needed a comprehensive redesign.',
    MARGIN_L, CONTENT_Y, CONTENT_W, 30, {size:11, italic:true, color:C.gray});

  addText(slide, 'What we did:', MARGIN_L, CONTENT_Y+36, CONTENT_W, 16,
    {size:11, bold:true, color:C.blue});
  addBullets(slide, [
    'Developed a comprehensive brief outlining organizational goals, audiences, and technical requirements',
    'Evaluated agencies across a wide range from cost-effective boutiques to premium strategic firms',
  ], MARGIN_L, CONTENT_Y+54, CONTENT_W, 44, {size:11, color:C.black});

  addText(slide, 'What we found:', MARGIN_L, CONTENT_Y+104, CONTENT_W, 16,
    {size:11, bold:true, color:C.blue});
  addBullets(slide, [
    'Low-cost vendors: limited strategic depth, high execution risk for a network of this complexity',
    'Mid-tier agencies: adequate for execution but lacking the research and strategy rigor we needed',
    'Premium firms (e.g., Lippincott): comprehensive, high-quality — but at $750,000 and 7+ months',
    'None offered a model that matched our timeline, budget constraints, and need for deep org knowledge',
  ], MARGIN_L, CONTENT_Y+122, CONTENT_W, 90, {size:11, color:C.black});

  addText(slide, 'So we built the research and strategy capability ourselves.',
    MARGIN_L, CONTENT_Y+220, CONTENT_W, 22,
    {size:13, bold:true, color:C.blue, align:'CENTER'});
  addFooter(slide, 3);
}

// ─── SLIDE 4: WHAT WE BUILT ───────────────────────────────────────────────────
function slide04_WhatWeBuilt(slide) {
  slide.getBackground().setSolidFill(C.white);
  addContentHeader(slide, 'What We Built');
  addText(slide,
    'An in-house AI team built specifically for Uncommon — specialized agents briefed on our org, brand, audiences, and goals.',
    MARGIN_L, CONTENT_Y, CONTENT_W, 22, {size:11, italic:true, color:C.gray});

  const t = slide.insertTable(5, 2, MARGIN_L, CONTENT_Y+26, CONTENT_W, 155);
  setCell(t,0,0,'Role',         {bg:C.blue, color:C.white, bold:true, size:12, align:'CENTER'});
  setCell(t,0,1,'What They Do', {bg:C.blue, color:C.white, bold:true, size:12});
  [
    ['Coordinator', 'Oversees the team, assigns work, tracks the pipeline, preps meeting agendas and leadership briefings'],
    ['Dev',         'Technical architecture, engineering audits, platform strategy'],
    ['Writer',      'Content strategy, copy, SEO, AI search optimization'],
    ['Creative',    'Visual direction, design systems, UX, audience experience'],
  ].forEach(([role, desc], i) => {
    const bg = i%2===0 ? C.white : C.altRow;
    setCell(t,i+1,0,role, {bg, color:C.blue, bold:true, size:12});
    setCell(t,i+1,1,desc, {bg, color:C.black,           size:12});
  });

  addText(slide,
    'The team is self-organizing — the Coordinator oversees agents, assigns work, and tracks delivery. Agents coordinate directly with each other without Anthony managing every handoff.',
    MARGIN_L, CONTENT_Y+188, CONTENT_W, 35, {size:10, italic:true, color:C.gray});
  addFooter(slide, 4);
}

// ─── SLIDE 5: TEST CASE (revised — "Test Case" not "Proof") ──────────────────
function slide05_TestCase(slide) {
  slide.getBackground().setSolidFill(C.white);
  addContentHeader(slide, 'Test Case: The Website Redesign');
  addText(slide,
    'Lippincott — a premier brand and experience firm — submitted a proposal to redesign uncommonschools.org.',
    MARGIN_L, CONTENT_Y, CONTENT_W, 20, {size:11, italic:true, color:C.gray});

  const t = slide.insertTable(6, 3, MARGIN_L, CONTENT_Y+24, CONTENT_W, 178);
  setCell(t,0,0,'Phase', {bg:C.blue, color:C.white, bold:true, size:11, align:'CENTER'});
  setCell(t,0,1,'Scope', {bg:C.blue, color:C.white, bold:true, size:11});
  setCell(t,0,2,'Fee',   {bg:C.blue, color:C.white, bold:true, size:11, align:'CENTER'});
  [
    ['Phase 1: Dig',              'Audits, research, stakeholder interviews',      '$125,000'],
    ['Phase 2: Define',           'Archetypes, content strategy, SEO, wireframes', '$175,000'],
    ['Phase 3: Design',           'Design system, page layouts, motion, copy',     '$225,000'],
    ['Phase 4: Deliver',          'Full build, QA, launch',                        '$325,000'],
    ['Total (nonprofit discount)','',                                               '$750,000'],
  ].forEach(([a,b,c],i) => {
    const isTotal = i===4;
    const bg = isTotal ? '#FFF3F3' : (i%2===0 ? C.white : C.altRow);
    setCell(t,i+1,0,a, {bg, color:C.black, bold:isTotal, size:isTotal?12:11});
    setCell(t,i+1,1,b, {bg, color:C.black,               size:11});
    setCell(t,i+1,2,c, {bg, color:isTotal?C.red:C.black, bold:isTotal, size:isTotal?13:11, align:'CENTER'});
  });

  addText(slide, 'Timeline: 7+ months  ·  March through October',
    MARGIN_L, CONTENT_Y+210, CONTENT_W, 24,
    {size:13, bold:true, color:C.red, align:'CENTER'});
  addFooter(slide, 5);
}

// ─── SLIDE 6: WHAT WE DELIVERED (revised — gaps acknowledged) ────────────────
function slide06_WhatWeDelivered(slide) {
  slide.getBackground().setSolidFill(C.white);
  addContentHeader(slide, 'What We Delivered Instead');
  addText(slide, 'Phase 1 equivalent — completed in days, for ~$500 in AI credits.',
    MARGIN_L, CONTENT_Y, CONTENT_W, 20, {size:13, bold:true, color:C.blue});

  const colW = Math.floor(CONTENT_W/3)-4;
  [
    {
      title: 'Dev — Technical Audit',
      items: [
        '5 fragmented WordPress installs: 5× maintenance, zero content sharing',
        'CDN bypassed on ALL pages — 141K monthly visitors unaffected',
        'Camden 7–10× slower than all regional sites',
        'Spanish serving English content — live SEO failure',
        'WCAG 2.2 AA violations network-wide',
        'Drupal 10 on Pantheon recommended'
      ]
    },
    {
      title: 'Writer — Content Audit',
      items: [
        'Full content architecture mapped across network + 5 regional domains',
        'All 5 sites serving broken llms.txt — AI engines misinformed',
        'SEO gaps and audience pathway failures documented',
        'Benchmarked against peer institutions'
      ]
    },
    {
      title: 'Creative — Experience Audit',
      items: [
        'Visual design, UX, navigation assessed across full site',
        'Audience pathways reviewed',
        'Design direction identified',
        'WCAG compliance gaps documented'
      ]
    }
  ].forEach(({title,items},i) => {
    const x = MARGIN_L + i*(colW+6);
    addRect(slide, x, CONTENT_Y+24, colW, 18, C.blue);
    addText(slide, title, x, CONTENT_Y+24, colW, 18,
      {size:8, bold:true, color:C.white, align:'CENTER', vAlign:'MIDDLE'});
    addBullets(slide, items, x+3, CONTENT_Y+44, colW-6, 138, {size:9, color:C.black});
  });

  // Mary Ann's note: acknowledge gaps
  addRect(slide, MARGIN_L, CONTENT_Y+188, CONTENT_W, 30, '#FFF9E6');
  addText(slide,
    'Note: This phase did not include stakeholder interviews or primary best-practice research — a Research & Analytics agent would address this.',
    MARGIN_L+6, CONTENT_Y+190, CONTENT_W-12, 26,
    {size:9, italic:true, color:'#8B6914'});

  addRect(slide, MARGIN_L, CONTENT_Y+222, CONTENT_W, 20, C.blue);
  addText(slide,
    "Lippincott's Phase 1: $125,000 — 3 to 4 weeks.   Ours: ~$500 in credits — days.",
    MARGIN_L, CONTENT_Y+222, CONTENT_W, 20,
    {size:11, bold:true, color:C.white, align:'CENTER', vAlign:'MIDDLE'});
  addFooter(slide, 6);
}

// ─── SLIDE 7: AGENCY RELATIONSHIP ────────────────────────────────────────────
function slide07_AgencyRelationship(slide) {
  slide.getBackground().setSolidFill(C.white);
  addContentHeader(slide, 'How Agents Change Our Agency Relationship');
  addText(slide,
    "We're not replacing the agency for design and build. We're walking in as an informed, prepared client.",
    MARGIN_L, CONTENT_Y, CONTENT_W, 20, {size:11, italic:true, color:C.gray});

  const t = slide.insertTable(6,3, MARGIN_L, CONTENT_Y+24, CONTENT_W, 145);
  setCell(t,0,0,'Phase',               {bg:C.blue, color:C.white, bold:true, size:11, align:'CENTER'});
  setCell(t,0,1,'Lippincott Duration', {bg:C.blue, color:C.white, bold:true, size:11, align:'CENTER'});
  setCell(t,0,2,'Our Status',          {bg:C.blue, color:C.white, bold:true, size:11, align:'CENTER'});
  [
    ['Phase 1: Dig',                  '3–4 weeks',     '✅  Complete (days)'],
    ['Phase 2: Define',               '4–6 weeks',     'In progress'],
    ['Phase 3: Design',               '4–6 weeks',     'Agency-led'],
    ['Phase 4: Deliver / Soft Launch','Through July 1','Agency-led'],
    ['Full CMS Launch',               'September 15',  'Agency-led'],
  ].forEach(([a,b,c],i) => {
    const bg = i%2===0 ? C.white : C.altRow;
    setCell(t,i+1,0,a, {bg, color:C.black,                          size:11});
    setCell(t,i+1,1,b, {bg, color:C.black, align:'CENTER',          size:11});
    setCell(t,i+1,2,c, {bg, color:i===0?C.green:C.black, bold:i===0, align:'CENTER', size:11});
  });

  addText(slide,
    "We're not cutting the agency. We're cutting our dependence on them. We arrive at every phase with strategy defined, architecture documented, and audiences mapped — a prepared partner, not a passive client.",
    MARGIN_L, CONTENT_Y+178, CONTENT_W, 50, {size:11, color:C.black});
  addFooter(slide, 7);
}

// ─── SLIDE 8: OPERATING SYSTEM ────────────────────────────────────────────────
function slide08_OperatingSystem(slide) {
  slide.getBackground().setSolidFill(C.white);
  addContentHeader(slide, 'The Operating System');

  const colW = Math.floor(CONTENT_W/2)-5;

  addRect(slide, MARGIN_L, CONTENT_Y, colW, 18, C.blue);
  addText(slide, 'For Project Management', MARGIN_L, CONTENT_Y, colW, 18,
    {size:9, bold:true, color:C.white, align:'CENTER', vAlign:'MIDDLE'});
  addBullets(slide, [
    'Every project tracked: owner, status, deadline — near- and long-term in one view',
    'Ticket writing with consistent formatting and clear scope',
    'Campaign tracking and performance analysis',
    'Competitor and market monitoring — ongoing, not one-time',
    'Region and stakeholder-specific strategy',
    '48-hour rule: blockers flagged immediately, not in weekly reports',
  ], MARGIN_L+3, CONTENT_Y+20, colW-6, CONTENT_H-20, {size:10, color:C.black});

  const x2 = MARGIN_L+colW+10;
  addRect(slide, x2, CONTENT_Y, colW, 18, C.blue);
  addText(slide, 'For Design Execution', x2, CONTENT_Y, colW, 18,
    {size:9, bold:true, color:C.white, align:'CENTER', vAlign:'MIDDLE'});
  addBullets(slide, [
    'Creative briefs written before designers open a file',
    'Prototype direction, copy, and specs prepared upfront',
    'Reduces revision cycles by defining scope early',
    'Frees designers to focus on high-value creative work',
    'Ongoing management of all brand guides — standards, video, logo library, photography',
  ], x2+3, CONTENT_Y+20, colW-6, CONTENT_H-20, {size:10, color:C.black});

  addText(slide,
    "The agents don't replace the PMs or designers. They remove the friction so the team can do their best work.",
    MARGIN_L, FOOTER_Y-22, CONTENT_W, 18,
    {size:10, italic:true, color:C.gray, align:'CENTER'});
  addFooter(slide, 8);
}

// ─── SLIDE 9: WHAT THIS ENABLES ───────────────────────────────────────────────
function slide09_WhatThisEnables(slide) {
  slide.getBackground().setSolidFill(C.blue);
  addText(slide, 'UNCOMMON', 45, 28, 220, 22, {size:14, bold:true, color:C.white});
  addRect(slide, 45, 53, 160, 2, C.gold);
  addText(slide, 'SCHOOLS', 45, 57, 220, 16, {size:10, bold:true, color:C.gold});
  addRect(slide, 45, 75, 160, 2, C.gold);

  addText(slide, 'What This Enables', MARGIN_L, 88, CONTENT_W, 32,
    {size:26, bold:true, color:C.white});
  addRect(slide, MARGIN_L, 124, CONTENT_W, 3, C.gold);

  addBullets(slide, [
    'Need engineering capacity? Brief the Dev agent on the project.',
    'Need copy for a fast turnaround? The Writer agent has our voice.',
    'Need strategy or competitive research? Done in hours, not weeks.',
    ' ',
    'The system gets smarter over time — every document shared deepens the knowledge base. The team compounds.',
    ' ',
    'Expand for any need: Research & Analytics, media strategist, specialized dev, PM support. The model is flexible and additive.',
  ], MARGIN_L, 132, CONTENT_W, 210, {size:13, color:C.white});
  addFooter(slide, 9);
}

// ─── SLIDE 10: ET COMMITMENT — PROJECT STRUCTURE (new) ───────────────────────
function slide10_ETCommitment(slide) {
  slide.getBackground().setSolidFill(C.white);
  addContentHeader(slide, 'What the ET Is Agreeing To');

  addText(slide,
    'The website redesign is a significant organizational initiative. This slide outlines the project structure for ET alignment.',
    MARGIN_L, CONTENT_Y, CONTENT_W, 22, {size:11, italic:true, color:C.gray});

  // Left column: Scope + Timing + Costs
  const colW = Math.floor(CONTENT_W/2)-8;

  addRect(slide, MARGIN_L, CONTENT_Y+26, colW, 16, C.blue);
  addText(slide, 'Scope & Timing', MARGIN_L, CONTENT_Y+26, colW, 16,
    {size:9, bold:true, color:C.white, align:'CENTER', vAlign:'MIDDLE'});
  addBullets(slide, [
    'Phase 1: Dig — Complete (in-house, ~$500)',
    'Phase 2: Define — Active, due May 23 (in-house, ~$500)',
    'Phase 3: Design — Agency-led, due June 20',
    'Phase 4: Deliver — Soft launch July 1 / Full launch Sept 15',
    'Agency scope (Phases 3–4): TBD based on RFP',
    'Lippincott Phase 3–4 benchmark: ~$550,000',
  ], MARGIN_L+3, CONTENT_Y+44, colW-6, 145, {size:9.5, color:C.black});

  // Right column: Roles + RAPID
  const x2 = MARGIN_L+colW+16;
  addRect(slide, x2, CONTENT_Y+26, colW, 16, C.blue);
  addText(slide, 'Key Roles & RAPID', x2, CONTENT_Y+26, colW, 16,
    {size:9, bold:true, color:C.white, align:'CENTER', vAlign:'MIDDLE'});

  const t = slide.insertTable(6,2, x2, CONTENT_Y+44, colW, 120);
  setCell(t,0,0,'RAPID', {bg:C.blue, color:C.white, bold:true, size:9, align:'CENTER'});
  setCell(t,0,1,'Who',   {bg:C.blue, color:C.white, bold:true, size:9});
  [
    ['Decide',     'Mary Ann Villanueava (ET)'],
    ['Agree',      'ET stakeholders'],
    ['Perform',    'Anthony Emezu — Creative Director\nRachel Kotler — Marketing PM\nWeb Engineer (procurement pending)'],
    ['Input',      'Suezette Weir (Media)\nRegional enrollment managers'],
    ['Recommend',  'AI Team (Coordinator, Dev, Writer, Creative)'],
  ].forEach(([r,who],i) => {
    const bg = i%2===0 ? C.white : C.altRow;
    setCell(t,i+1,0,r,   {bg, color:C.blue, bold:true, size:9});
    setCell(t,i+1,1,who, {bg, color:C.black,           size:9});
  });

  addText(slide,
    'Procurement: web engineer role to be defined before Phase 3 agency engagement.',
    MARGIN_L, CONTENT_Y+200, CONTENT_W, 18,
    {size:9.5, italic:true, color:C.gray});
  addFooter(slide, 10);
}

// ─── SLIDE 11: SUMMARY ────────────────────────────────────────────────────────
function slide11_Summary(slide) {
  slide.getBackground().setSolidFill(C.white);
  addContentHeader(slide, 'Summary');

  const t = slide.insertTable(7,2, MARGIN_L, CONTENT_Y, CONTENT_W, 225);
  setCell(t,0,0,'What We Built',{bg:C.blue, color:C.white, bold:true, size:12});
  setCell(t,0,1,'Impact',       {bg:C.blue, color:C.white, bold:true, size:12});
  [
    ['In-house AI team',                   'Reduces dependence on agency retainers for strategy and research'],
    ['Coordinated project management',     'PM team amplified — less friction, more execution'],
    ['Deep org knowledge, always current', 'No vendor onboarding — every agent already knows Uncommon'],
    ['Website Phase 1 in-house',           '$125K agency cost → ~$500 in credits'],
    ['Phases 1 + 2 in-house',             '~$300K in agency fees handled internally before engagement'],
    ['Agency engaged for Phases 3–4',      'Design, build, and launch remain agency-led — we arrive prepared'],
  ].forEach(([a,b],i) => {
    const bg = i%2===0 ? C.white : C.altRow;
    setCell(t,i+1,0,a, {bg, color:C.blue, bold:true, size:11});
    setCell(t,i+1,1,b, {bg, color:C.black,           size:11});
  });

  addText(slide,
    "We're not eliminating the redesign budget. We're maximizing what we get for it.",
    MARGIN_L, FOOTER_Y-24, CONTENT_W, 20,
    {size:12, bold:true, color:C.blue, align:'CENTER'});
  addFooter(slide, 11);
}

// ─── SLIDE 12: WHAT'S NEXT ────────────────────────────────────────────────────
function slide12_WhatsNext(slide) {
  slide.getBackground().setSolidFill(C.blue);
  addText(slide, 'UNCOMMON', 45, 28, 220, 22, {size:14, bold:true, color:C.white});
  addRect(slide, 45, 53, 160, 2, C.gold);
  addText(slide, 'SCHOOLS', 45, 57, 220, 16, {size:10, bold:true, color:C.gold});
  addRect(slide, 45, 75, 160, 2, C.gold);

  addText(slide, "What's Next", MARGIN_L, 88, CONTENT_W, 32,
    {size:26, bold:true, color:C.white});
  addRect(slide, MARGIN_L, 124, CONTENT_W, 3, C.gold);

  addBullets(slide, [
    'Phase 02: Define — underway (due May 23)',
    'Procure web engineer before Phase 03 agency engagement',
    'Bring ET stakeholders into design review before Phase 03',
    'Expand agent capability: Research & Analytics agent for competitive analysis and benchmarking',
    'Expand agent use to campaigns, enrollment, recruitment, and brand',
    'Build the model as a department-wide capability',
  ], MARGIN_L, 134, CONTENT_W, 155, {size:14, color:C.white});

  addText(slide, 'Open for discussion.',
    MARGIN_L, 295, CONTENT_W, 45,
    {size:26, bold:true, color:C.gold, align:'CENTER', vAlign:'MIDDLE'});
  addFooter(slide, 12);
}

// ═══════════════════════════════════════════════════════════════
// HELPERS
// ═══════════════════════════════════════════════════════════════
function addContentHeader(slide, title) {
  addText(slide, title, MARGIN_L, TITLE_Y, CONTENT_W, TITLE_H,
    {size:F.slideTitle, bold:true, color:C.black, vAlign:'MIDDLE'});
  addRect(slide, MARGIN_L, RULE_Y, CONTENT_W, RULE_H, C.gold);
}

function addFooter(slide, pageNum) {
  addRect(slide, 0, FOOTER_Y, W, FOOTER_H, C.blue);
  addText(slide, 'UNCOMMON', 12, FOOTER_Y+6,  140, 16, {size:10, bold:true, color:C.white});
  addRect(slide, 12, FOOTER_Y+24, 110, 1, C.gold);
  addText(slide, 'SCHOOLS',  12, FOOTER_Y+27, 140, 12, {size:7,  bold:true, color:C.gold});
  addRect(slide, 12, FOOTER_Y+40, 110, 1, C.gold);
  addText(slide, '© 2026 Uncommon Schools, Inc. All rights reserved.',
    160, FOOTER_Y+20, W-230, 20,
    {size:F.footer, color:C.white, align:'CENTER', vAlign:'MIDDLE'});
  addText(slide, String(pageNum), W-35, FOOTER_Y+20, 25, 20,
    {size:F.small, color:C.white, align:'CENTER', vAlign:'MIDDLE'});
}

function addText(slide, text, x, y, w, h, opts) {
  const shape = slide.insertTextBox(text, x, y, w, h);
  shape.getFill().setTransparent();
  shape.getBorder().setTransparent();
  const tr = shape.getText();
  const ts = tr.getTextStyle();
  if (opts.size)   ts.setFontSize(opts.size);
  if (opts.bold)   ts.setBold(true);
  if (opts.italic) ts.setItalic(true);
  if (opts.color)  ts.setForegroundColor(opts.color);
  const ps = tr.getParagraphStyle();
  if (opts.align === 'CENTER') ps.setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER);
  if (opts.align === 'RIGHT')  ps.setParagraphAlignment(SlidesApp.ParagraphAlignment.END);
  if (opts.vAlign === 'MIDDLE') shape.setContentAlignment(SlidesApp.ContentAlignment.MIDDLE);
  if (opts.vAlign === 'TOP')    shape.setContentAlignment(SlidesApp.ContentAlignment.TOP);
  return shape;
}

function addRect(slide, x, y, w, h, fillColor) {
  const shape = slide.insertShape(SlidesApp.ShapeType.RECTANGLE, x, y, w, h);
  shape.getFill().setSolidFill(fillColor);
  shape.getBorder().setTransparent();
  return shape;
}

function addBullets(slide, items, x, y, w, h, opts) {
  const lines = items.map(item => item.trim()==='' ? '' : '\u2022  '+item);
  const shape = slide.insertTextBox(lines.join('\n'), x, y, w, h);
  shape.getFill().setTransparent();
  shape.getBorder().setTransparent();
  shape.setContentAlignment(SlidesApp.ContentAlignment.TOP);
  const tr = shape.getText();
  const ts = tr.getTextStyle();
  if (opts.size)  ts.setFontSize(opts.size);
  if (opts.color) ts.setForegroundColor(opts.color);
  if (opts.lastBold) {
    let lastIdx = -1;
    for (let i=lines.length-1; i>=0; i--) { if (lines[i].trim()!=='') { lastIdx=i; break; } }
    if (lastIdx>=0) {
      const fullText = lines.join('\n');
      const start = lines.slice(0,lastIdx).join('\n').length + (lastIdx>0?1:0);
      const end = start+lines[lastIdx].length;
      tr.getRange(start,end).getTextStyle().setBold(true);
    }
  }
  return shape;
}

function setCell(table, row, col, text, opts) {
  const cell = table.getCell(row, col);
  if (opts.bg) cell.getFill().setSolidFill(opts.bg);
  const tr = cell.getText();
  tr.setText(text||' ');
  const ts = tr.getTextStyle();
  if (opts.size)   ts.setFontSize(opts.size);
  if (opts.bold)   ts.setBold(true);
  if (opts.italic) ts.setItalic(true);
  if (opts.color)  ts.setForegroundColor(opts.color);
  if (opts.align==='CENTER')
    tr.getParagraphStyle().setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER);
  cell.setContentAlignment(SlidesApp.ContentAlignment.MIDDLE);
}
