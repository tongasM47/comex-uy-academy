# Comex UY

App para estudiar comercio exterior en Uruguay desde cero, con el objetivo de conseguir trabajo en una oficina de comex (despachante, forwarder, departamento de comercio exterior o mesa de un banco).

Sigue el temario del curso de Comercio Exterior de la AHK Academy (Cámara de Comercio e Industria Uruguayo-Alemana, 2026), completado con normativa y fuentes oficiales uruguayas relevadas al 10/10/2026.

**App publicada:** https://tongasm47.github.io/comex-uy-academy/

## Qué tiene

- **12 módulos y 45 lecciones**: las 11 partes del curso más logística y salida laboral. Cada lección trae explicaciones "ELI5", puntos clave, preguntas probables y sus fuentes.
- **11 documentos ilustrados**: pro-forma, factura comercial, packing list, B/L, AWB, CRT, MIC/DTA, certificado de origen, DUA, carta de crédito y letra de cambio. Se exploran casilla por casilla o se completan en modo práctica.
- **Herramientas**:
  - calculadora de importación con las tasas vigentes;
  - visualizador de Incoterms;
  - peso volumétrico y cubicaje;
  - flujos de pago;
  - secuencias de importación y exportación.
- **Práctica**:
  - tests por tema y examen cronometrado;
  - flashcards con repaso espaciado;
  - casos prácticos;
  - simulador de entrevista.
- **Podcasts por lección**, generados con NotebookLM.
- **Progreso por usuario**: se entra con Google y se sincroniza con Firestore. Funciona sin conexión y sin cuenta (en ese caso guarda en el navegador).

## Desarrollo

```bash
npm install
npm run dev          # servidor local
npm run build        # build de producción
node scripts/check-calc.mjs   # verifica la calculadora contra los ejemplos de la investigación
```

Stack: React + TypeScript + Vite, Firebase Auth y Firestore. El deploy a GitHub Pages es automático en cada push a `main` (`.github/workflows/deploy.yml`).

## Estructura

- `src/data/`: todo el contenido como datos tipados (`types.ts`). Hay lecciones, preguntas, flashcards, casos, documentos, glosario y entrevista, además de las tasas de la calculadora en `calc.ts`.
- `docs/research/`: la investigación con fuentes de cada dato. Los puntos dudosos están marcados `[VERIFICAR]`.
- `docs/CURRICULUM.md` y `docs/AUTHORING.md`: el plan de contenidos y la guía para sumar contenido nuevo.
- `public/podcasts/`: los audios. Se registran en `src/data/podcasts.ts`.

## Seguridad de los datos

Reglas de Firestore: cada usuario solo puede leer y escribir su propio documento `users/{uid}`.

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{uid} {
      allow read, write: if request.auth != null && request.auth.uid == uid;
    }
  }
}
```

> Las normas y tasas cambian. Ante una operación real, confirmá con el despachante o la fuente oficial.
