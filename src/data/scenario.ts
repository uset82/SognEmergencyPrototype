export interface TimelineStage {
  t: string
  title: string
  description: string
  actors: string[]
  highlight: 'ship' | 'orchestration' | 'zones' | 'response' | 'public' | 'evacuation' | 'help' | 'medical' | 'resource'
}

export const timeline: TimelineStage[] = [
  {
    t: 'T-15',
    title: 'Loss of control reported',
    description:
      'The bridge of the fictional passenger vessel Viking Glory reports loss of manoeuvrability 1.9 nm from Flåm harbour.',
    actors: ['SHIP AGENT'],
    highlight: 'ship',
  },
  {
    t: 'T-14',
    title: 'Ship Agent structures the incident',
    description:
      'The Ship Agent turns the radio call into structured incident data: position, course, speed, drift estimate.',
    actors: ['SHIP AGENT'],
    highlight: 'ship',
  },
  {
    t: 'T-13',
    title: 'Main Agent activates the scenario',
    description:
      'The Orchestrator matches the incident to pre-approved fictional scenario F-03: Flåm collision risk.',
    actors: ['MAIN AGENT'],
    highlight: 'orchestration',
  },
  {
    t: 'T-12',
    title: 'Risk Agent loads zones',
    description:
      'Pre-approved impact, danger and warning zones are drawn around the harbour. ~2,843 simulated people inside.',
    actors: ['RISK AGENT'],
    highlight: 'zones',
  },
  {
    t: 'T-11',
    title: 'Response Agent alerts the network',
    description:
      'Police, fire, medical, hospital and helicopter agents receive playbook tasks.',
    actors: ['RESPONSE AGENT'],
    highlight: 'response',
  },
  {
    t: 'T-10',
    title: 'Responders acknowledge',
    description:
      'All fictional responder agents acknowledge within seconds. Hospitals free simulated beds.',
    actors: ['POLICE', 'FIRE', 'MEDICAL', 'HOSPITAL', 'HELICOPTER'],
    highlight: 'response',
  },
  {
    t: 'T-9',
    title: 'Public Agent prepares the alert',
    description:
      'Pre-approved evacuation alert template is prepared — never freely written by AI.',
    actors: ['PUBLIC AGENT'],
    highlight: 'public',
  },
  {
    t: 'T-8',
    title: 'Citizen Agents identify affected people',
    description:
      'Each Citizen Agent checks whether its person is inside a zone — using simulated locations only.',
    actors: ['CITIZEN AGENT', 'TRANSLATION AGENT'],
    highlight: 'public',
  },
  {
    t: 'T-7',
    title: 'Phones light up',
    description:
      'The civilian app shows the evacuation warning: you are inside the affected area.',
    actors: ['CIVILIAN APP'],
    highlight: 'evacuation',
  },
  {
    t: 'T-6',
    title: 'Safe routes visible',
    description:
      'Personalised safe routes appear: nearest safe area, distance, walking time, areas to avoid.',
    actors: ['CITIZEN AGENT'],
    highlight: 'evacuation',
  },
  {
    t: 'T-5',
    title: 'Citizens ask for help',
    description:
      'Simulated users report injuries and trapped status with one tap.',
    actors: ['CIVILIAN APP'],
    highlight: 'help',
  },
  {
    t: 'T-4',
    title: 'Medical Agent triages',
    description:
      'Help requests are prioritised and assigned to paramedic teams on a shared picture.',
    actors: ['MEDICAL AGENT', 'PARAMEDIC AGENT'],
    highlight: 'medical',
  },
  {
    t: 'T-3',
    title: 'Resources move',
    description:
      'Resource Agent assigns fictional buses, ferries, hotels and volunteers.',
    actors: ['RESOURCE AGENT'],
    highlight: 'resource',
  },
  {
    t: 'T-2',
    title: 'Evacuation progress',
    description:
      'Dashboard shows evacuation progress: 1,052 of 2,843 people moved toward safe areas (simulated).',
    actors: ['MAIN AGENT', 'POLICE'],
    highlight: 'evacuation',
  },
  {
    t: 'T-1',
    title: 'Final pre-impact warning',
    description:
      'Last warning pushed to everyone still inside the danger zone. All actions logged by the Audit Agent.',
    actors: ['PUBLIC AGENT', 'AUDIT AGENT'],
    highlight: 'public',
  },
]

export const flowSteps = [
  {
    side: 'platform' as const,
    label: 'Professional platform',
    text: 'Operator command: “Boat alert. Possible collision. 15 minutes. Activate Flåm scenario.”',
  },
  {
    side: 'agent' as const,
    label: 'MAIN AGENT',
    text: 'Matches command to pre-approved playbook F-03. Orders the branch agents.',
  },
  {
    side: 'agent' as const,
    label: 'PUBLIC AGENT',
    text: 'Prepares the pre-approved evacuation alert — no free invention of warning text.',
  },
  {
    side: 'agent' as const,
    label: 'CITIZEN AGENT',
    text: 'Personalises the alert: “You are in Zone A. Go to Flåm School, 650 m.”',
  },
  {
    side: 'phone' as const,
    label: 'Civilian phone',
    text: 'Alert received: “EVACUATE NOW — follow the safe route.”',
  },
  {
    side: 'phone' as const,
    label: 'Citizen presses',
    text: '“I NEED HELP — I am trapped.” Location simulated.',
  },
  {
    side: 'agent' as const,
    label: 'CITIZEN AGENT',
    text: 'Relays the help signal with simulated position to the response branch.',
  },
  {
    side: 'agent' as const,
    label: 'MEDICAL AGENT',
    text: 'Triages: Priority 1 — trapped person, assigns nearest paramedic team.',
  },
  {
    side: 'platform' as const,
    label: 'Professional dashboard',
    text: '“HELP REQUEST RECEIVED — 14:52 — Unit 2 dispatched.” Shared picture updated.',
  },
]
