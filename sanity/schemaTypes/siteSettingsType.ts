import { CogIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'memberCount',
      title: 'Member Count (e.g. "500+")',
      type: 'string',
    }),
    defineField({
      name: 'eventCount',
      title: 'Event Count (e.g. "20+")',
      type: 'string',
    }),
    defineField({
      name: 'projectCount',
      title: 'Project Count (e.g. "15")',
      type: 'string',
    }),
  ],
})
