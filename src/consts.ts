import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: '4loup',
  description:
    'Open source games and tools',
  href: 'https://astro-erudite.vercel.app',
  author: 'hazel',
  locale: 'en-CA',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  // {
  //   href: '/projects',
  //   label: 'projects',
  // },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://patreon.com/hazelthewolf',
    label: 'Patreon',
  },
  {
    href: 'https://ko-fi.com/hazelthewolf',
    label: 'KoFi',
  },
  {
    href: 'https://github.com/4loup',
    label: 'GitHub',
  },
  {
    href: 'https://4loup.itch.io',
    label: 'itchdotio',
  },
  {
    href: 'https://bsky.app/profile/4loup.bsky.social',
    label: 'Bluesky',
  },
  {
    href: 'https://youtube.com/@4loupYT',
    label: 'YouTube',
  },
  // {
  //   href: 'https://4loup.itch.io',
  //   label: 'Godot',
  // },
  // {
  //   href: 'https://4loup.itch.io',
  //   label: 'Bevy',
  // },
  // {
  //   href: '',
  //   label: 'Rust',
  // },
  // {
  //   href: 'https://youtube.com/@4loup',
  //   label: 'Unreal',
  // },
  // {
  //   href: 'https://4loup.itch.io',
  //   label: 'Blender',
  // },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  Email: 'lucide:mail',
  GitHub: 'simple-icons:github',
  RSS: 'simple-icons:rss',
  Bluesky: 'simple-icons:bluesky',
  itchdotio: 'simple-icons:itchdotio',
  YouTube: 'simple-icons:youtube',
  Unreal: 'simple-icons:unrealengine',
  Blender: 'simple-icons:blender',
  Godot: 'simple-icons:godotengine',
  Bevy: 'simple-icons:bevy',
  Patreon: 'simple-icons:patreon',
  Rust: 'simple-icons:rust',
  KoFi: 'simple-icons:kofi',
}
