import { CollectionConfig } from 'payload'
import slugify from 'slugify'

export const Blogs: CollectionConfig = {
  slug: 'blogs',
  admin: {
    useAsTitle: 'blogTitle',
  },
  hooks: {
    beforeValidate: [
      ({ data }) => {
        if (data?.blogTitle && !data.slug) {
          data.slug = slugify(data.blogTitle, {
            lower: true,
            strict: true,
          })
        }
        return data
      },
    ],
  },
  fields: [
    {
      name: 'blogImage',
      label: 'Blog Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'blogTitle',
      label: 'Blog Title',
      type: 'text',
      required: true,
    },
    {
      name: 'blogContent',
      label: 'Content',
      type: 'richText',
      required: true,
    },
    {
      name: 'blogDescription',
      label: 'Blog description',
      type: 'text',
      required: true,
      admin: {
        description: 'Brief description about the blog',
      },
    },
    {
      name: 'slug',
      label: 'Blog slug',
      admin: {
        description: 'This is autogenerated from blog title',
      },
      type: 'text',
      required: true,
    },
  ],
}
