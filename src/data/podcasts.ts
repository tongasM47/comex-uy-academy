// Podcasts generados con NotebookLM a partir de las fuentes oficiales, uno por subtema.
// Los audios viven en public/podcasts/<id>.mp3 (o .m4a). Se agregan a medida que se generan.
export interface Podcast {
  /** Nombre del archivo dentro de public/podcasts */
  file: string
  /** Duración aproximada, por ejemplo "14 min" */
  duration?: string
}

export const podcasts: Record<string, Podcast> = {
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
