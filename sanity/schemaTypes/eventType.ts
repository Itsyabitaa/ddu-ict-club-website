import { CalendarIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const eventType = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  icon: CalendarIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'dateLabel',
      title: 'Date Label (e.g. "December 19, 2025" or "Every Friday")',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'timeLabel',
      title: 'Time Label (e.g. "6:00 PM (12:00 LT)")',
      type: 'string',
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Upcoming', value: 'upcoming' },
          { title: 'Ongoing', value: 'ongoing' },
          { title: 'Completed', value: 'completed' }
        ],
        layout: 'radio'
      },
      validation: (rule) => rule.required(),
      initialValue: 'upcoming'
    }),
    defineField({
      name: 'recurrence',
      title: 'Recurrence',
      type: 'string',
      options: {
        list: [
          { title: 'Weekly', value: 'weekly' },
          { title: 'Biweekly', value: 'biweekly' }
        ]
      }
    }),
    defineField({
      name: 'isMega',
      title: 'Is Mega Event (Hero Feature)',
      type: 'boolean',
      description: 'Highlight this event on the top of the homepage as the main feature.',
      initialValue: false
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      hidden: ({ document }) => !document?.isMega,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'dateLabel',
      media: 'heroImage',
    },
  },
})
