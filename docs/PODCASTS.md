# Generación de podcasts

Los podcasts se generan en NotebookLM, en el cuaderno **"Comex UY - Podcasts"**. Sus fuentes son las 12 páginas `public/fuentes/pXX.html` publicadas en GitHub Pages.

## Por cada lección
1. En Studio, abrí "Resumen de audio" y configurá:
   - formato: Información detallada;
   - idioma: español;
   - duración: predeterminada.
2. En **Fuentes**, dejá marcado solo el módulo de la lección.
3. Escribí el prompt de foco:
   > Episodio solo sobre la lección PXX-SY "<título>". Usá únicamente el contenido de esa lección, sin agregar datos que no estén en la fuente. Público: un principiante uruguayo que quiere conseguir trabajo en una oficina de comercio exterior. Explicá con ejemplos cotidianos y analogías simples, en español rioplatense, y cerrá repasando las ideas clave y una pregunta probable de entrevista.
4. Cuando termine de generarse, revisá en "Ver petición y fuentes" a qué lección corresponde. Descargá el audio.
5. Desde la raíz del repo, corré `scripts/add-podcast.sh <archivo.m4a> pXX-sY`. El script lo comprime a AAC mono de 48 kbps (unos 6 MB) y lo registra en `src/data/podcasts.ts`.
6. Hacé commit y push. El deploy es automático.

NotebookLM tiene un límite de uso que se reinicia periódicamente, y en cada ventana entran unos 4 audios.

## Estado
- [x] p01-s1 … p08-s3 (módulos 1 a 8)
- [ ] p09-s1 … p12-s3 (14 restantes)
