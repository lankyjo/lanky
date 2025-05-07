import { GlobalConfig } from 'payload'

export const AboutImages: GlobalConfig = {
  slug: 'AboutImages',
  fields: [
    {
      name: 'aboutImages',
      labels: {
        singular: 'Image',
        plural: 'Images',
      },
      type: 'array',
      fields: [
        {
          type: 'upload',
          relationTo: 'media',
          name: 'AboutImage',
        },
      ],
      maxRows: 4,
    },
  ],
}
