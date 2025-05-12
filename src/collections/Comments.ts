import { CollectionConfig } from 'payload'

export const Comments: CollectionConfig = {
  slug: 'comments',
  access: {
    create: () => true,
  },
  fields: [
    {
      name: 'email',
      type: 'text',
      label: 'E-mail',
      required: true,
    },
    {
      name: 'displayName',
      type: 'text',
      label: 'Display Name',
      required: true,
    },
    {
      name: 'comment',
      type: 'textarea',
      label: 'Comment',
      required: true,
    },
    {
      name: 'approval',
      type: 'radio',
      options: ['approved', 'unapproved'],
      defaultValue: 'unapproved',
    },
  ],
}
