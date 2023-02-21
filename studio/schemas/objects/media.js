import { FiTv } from 'react-icons/fi';

export default {
  title: 'Media',
  name: 'media',
  type: 'object',
  fields: [
    {
      title: 'Type',
      name: 'type',
      type: 'string',
      options: {
        list: [
          { title: 'Image', value: 'image' },
          { title: 'Video', value: 'video' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
    },
    {
      name: 'image',
      type: 'mainImage',
      title: 'Image',
      hidden: ({ parent }) => !parent?.type || parent.type !== 'image',
    },
    {
      name: 'video',
      type: 'mainVideo',
      title: 'Video',
      hidden: ({ parent }) => !parent?.type || parent.type !== 'video',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'image.alt',
      type: 'type',
      image: 'image.image.asset',
    },
    prepare({ title, type, image }) {
      return {
        title: type === 'image' ? title : 'Video',
        media: type === 'image' ? image : FiTv,
      };
    },
  },
};
