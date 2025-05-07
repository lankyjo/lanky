import { CollectionConfig } from 'payload'

export const Works: CollectionConfig = {
  slug: 'works',
  admin: {
    useAsTitle: 'projectTitle',
  },
  fields: [
    {
      name: 'displayImage',
      label: 'display Image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'projectTitle',
      label: 'Project Title',
      type: 'text',
      required: true,
    },
    {
      name: 'projectDescription',
      label: 'Project Description',
      type: 'text',
      required: true,
    },
    {
      name: 'link',
      label: 'Link to project',
      type: 'text',
      required: true,
    },
  ],
}
