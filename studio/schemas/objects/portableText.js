import { FiGlobe, FiLink } from 'react-icons/fi';

export default {
  title: 'Portable Text',
  name: 'portableText',
  type: 'array',
  description: 'Create paragraphs with the key combination: shift + enter',
  of: [
    {
      type: 'block',
      styles: [
        // {title: 'Normal', value: 'normal'},
        // {title: 'H1', value: 'h1'},
        // {title: 'H2', value: 'h2'},
        // {title: 'H3', value: 'h3'},
        // {title: 'H4', value: 'h4'},
        // {title: 'Quote', value: 'blockquote'}
      ],
      lists: [
        // {title: 'Bullet', value: 'bullet'},
        // { title: 'Number', value: 'number' }
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          // {
          //   title: 'Highlight',
          //   value: 'strong',
          //   blockEditor: { icon: FiPenTool },
          // },
          // {title: 'Code', value: 'code'}
        ],
        annotations: [
          {
            name: 'pageLink',
            type: 'object',
            title: 'Page Link',
            icon: FiLink,
            fields: [
              {
                name: 'pageSlug',
                type: 'string',
                title: 'Slug',
                description:
                  "Please use the slug you've already set for the page you want to link.",
              },
            ],
          },
          {
            name: 'externalLink',
            type: 'object',
            title: 'External Link',
            icon: FiGlobe,
            fields: [
              {
                name: 'href',
                type: 'url',
                title: 'URL',
                validation: (Rule) =>
                  Rule.uri({
                    scheme: ['http', 'https', 'mailto', 'tel'],
                  }),
              },
            ],
          },
        ],
      },
    },
    // { type: 'file' },
    // { type: 'image' },
    // { type: 'text' },
  ],
};
