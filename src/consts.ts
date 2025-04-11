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
  {
    href: '/projects',
    label: 'projects',
  },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/4loup',
    label: 'GitHub',
  },
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
  Bevy: 'simple-icons:bevy',
  Patreon: 'simple-icons:patreon',
  Rust: 'simple-icons:rust',
}
