// Podcasts generados con NotebookLM a partir de las fuentes oficiales, uno por subtema.
// Los audios viven en public/podcasts/<id>.mp3 (o .m4a). Se agregan a medida que se generan.
export interface Podcast {
  /** Nombre del archivo dentro de public/podcasts */
  file: string
  /** Duración aproximada, por ejemplo "14 min" */
  duration?: string
}

export const podcasts: Record<string, Podcast> = {
  'p10-s1': { file: 'p10-s1.m4a', duration: '15 min' },
  'p09-s3': { file: 'p09-s3.m4a', duration: '18 min' },
  'p09-s2': { file: 'p09-s2.m4a', duration: '16 min' },
  'p09-s1': { file: 'p09-s1.m4a', duration: '24 min' },
  'p08-s3': { file: 'p08-s3.m4a', duration: '14 min' },
  'p08-s2': { file: 'p08-s2.m4a', duration: '23 min' },
  'p08-s1': { file: 'p08-s1.m4a', duration: '26 min' },
  'p06-s5': { file: 'p06-s5.m4a', duration: '14 min' },
  'p07-s3': { file: 'p07-s3.m4a', duration: '18 min' },
  'p07-s2': { file: 'p07-s2.m4a', duration: '20 min' },
  'p07-s1': { file: 'p07-s1.m4a', duration: '18 min' },
  'p06-s4': { file: 'p06-s4.m4a', duration: '23 min' },
  'p06-s3': { file: 'p06-s3.m4a', duration: '20 min' },
  'p06-s2': { file: 'p06-s2.m4a', duration: '25 min' },
  'p06-s1': { file: 'p06-s1.m4a', duration: '26 min' },
  'p05-s4': { file: 'p05-s4.m4a', duration: '20 min' },
  'p05-s3': { file: 'p05-s3.m4a', duration: '21 min' },
  'p05-s2': { file: 'p05-s2.m4a', duration: '27 min' },
  'p05-s1': { file: 'p05-s1.m4a', duration: '23 min' },
  'p04-s4': { file: 'p04-s4.m4a', duration: '24 min' },
  'p04-s3': { file: 'p04-s3.m4a', duration: '18 min' },
  'p04-s2': { file: 'p04-s2.m4a', duration: '16 min' },
  'p04-s1': { file: 'p04-s1.m4a', duration: '24 min' },
  'p03-s4': { file: 'p03-s4.m4a', duration: '20 min' },
  'p03-s3': { file: 'p03-s3.m4a', duration: '13 min' },
  'p03-s2': { file: 'p03-s2.m4a', duration: '22 min' },
  'p03-s1': { file: 'p03-s1.m4a', duration: '17 min' },
  'p02-s5': { file: 'p02-s5.m4a', duration: '29 min' },
  'p02-s4': { file: 'p02-s4.m4a', duration: '18 min' },
  'p02-s3': { file: 'p02-s3.m4a', duration: '20 min' },
  'p02-s2': { file: 'p02-s2.m4a', duration: '18 min' },
  'p02-s1': { file: 'p02-s1.m4a', duration: '15 min' },
  'p01-s3': { file: 'p01-s3.m4a', duration: '16 min' },
  'p01-s2': { file: 'p01-s2.m4a', duration: '15 min' },
  'p01-s1': { file: 'p01-s1.m4a', duration: '16 min' },
}

export function podcastUrl(p: Podcast): string {
  return `${import.meta.env.BASE_URL}podcasts/${p.file}`
}
