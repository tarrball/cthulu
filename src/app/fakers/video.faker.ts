import { faker } from '@faker-js/faker';
import { Video } from '../data-contracts/video';

export function generateMockVideo(): Video {
  const video: Video = {
    id: faker.number.int({ min: 1, max: 100000 }),
    title: faker.lorem.words(3),
    description: faker.lorem.paragraph(1),
    thumbnailFeatured: faker.image.urlPicsumPhotos({ width: 340, height: 120 }),
    thumbnailWide: faker.image.urlPicsumPhotos({ width: 125, height: 100 }),
    thumbnailTall: faker.image.urlPicsumPhotos({ width: 100, height: 125 }),
  };

  return video;
}

export function generateMockVideos(count: number): Video[] {
  const videos: Video[] = Array.from({ length: count }, generateMockVideo);

  return videos;
}
