export const MEDIA = {
  videos: {
    attentionToDetail: "/assets/attention-to-detail.mp4",
    chevySilverado: "/assets/chevy-silverado.mp4",
    cleanCar: "/assets/clean-car.mp4",
    interiorDetail: "/assets/interior-detail.mp4",
    povWash: "/assets/pov-wash.mp4",
    volkswagen: "/assets/volkswagen.mp4",
  },
} as const;

export type VideoKey = keyof typeof MEDIA.videos;

export const HERO_VIDEO = MEDIA.videos.chevySilverado;

export const ABOUT_VIDEO = MEDIA.videos.volkswagen;

export const CTA_VIDEO = MEDIA.videos.cleanCar;

export const SERVICE_VIDEOS = [
  MEDIA.videos.chevySilverado,
  MEDIA.videos.interiorDetail,
  MEDIA.videos.attentionToDetail,
  MEDIA.videos.cleanCar,
] as const;

export const WORK_VIDEOS = [
  MEDIA.videos.chevySilverado,
  MEDIA.videos.volkswagen,
  MEDIA.videos.attentionToDetail,
  MEDIA.videos.interiorDetail,
  MEDIA.videos.cleanCar,
  MEDIA.videos.povWash,
] as const;
