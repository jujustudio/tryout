const link = `
  link{
    ...,
    'page': page->slug.current
  },
`;

const media = `
  media{
    type,
    'image': image.image.asset->url,
    'alt': image.alt,
    'video': video.asset->playbackId,
    'thumbtime': video.asset->thumbTime,
  },
`;

module.exports.link = link;
module.exports.media = media;
