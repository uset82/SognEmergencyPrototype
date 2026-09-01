export type ScreenId = 'alert' | 'route' | 'help' | 'location' | 'safe' | 'offline'

export interface ScreenDef {
  id: ScreenId
  navLabel: string
}

export const screens: ScreenDef[] = [
  { id: 'alert', navLabel: 'Alert' },
  { id: 'route', navLabel: 'Safe route' },
  { id: 'help', navLabel: 'Need help' },
  { id: 'location', navLabel: 'Send location' },
  { id: 'safe', navLabel: 'Safe' },
  { id: 'offline', navLabel: 'Offline' },
]

export const helpOptions = [
  { id: 'injured', label: 'I AM INJURED', icon: '🩹' },
  { id: 'trapped', label: 'I AM TRAPPED', icon: '⚠' },
  { id: 'nowalk', label: 'I CANNOT WALK', icon: '♿' },
  { id: 'others', label: 'I AM WITH OTHER PEOPLE', icon: '👥' },
]
