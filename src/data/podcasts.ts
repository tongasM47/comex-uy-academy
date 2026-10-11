// Podcasts generados con NotebookLM a partir de las fuentes oficiales, uno por subtema.
// Los audios viven en public/podcasts/<id>.mp3 (o .m4a). Se agregan a medida que se generan.
export interface Podcast {
  /** Nombre del archivo dentro de public/podcasts */
  file: string
  /** Duración aproximada, por ejemplo "14 min" */
  duration?: string
}

export const podcasts: Record<string, Podcast> = {}

export function podcastUrl(p: Podcast): string {
  return `${import.meta.env.BASE_URL}podcasts/${p.file}`
}
