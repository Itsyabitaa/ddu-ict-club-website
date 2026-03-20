import { UsersIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const teamMemberType = defineType({
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  icon: UsersIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Profile Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'bio',
      title: 'Bio (Short description)',
      type: 'text',
    }),
    defineField({
      name: 'socials',
      title: 'Social Links',
      type: 'object',
      fields: [
        { name: 'github', type: 'url', title: 'GitHub URL' },
        { name: 'linkedin', type: 'url', title: 'LinkedIn URL' },
        { name: 'telegram', type: 'url', title: 'Telegram URL' },
        { name: 'twitter', type: 'url', title: 'Twitter URL' },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'image',
    },
  },
})
