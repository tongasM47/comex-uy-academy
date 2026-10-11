#!/usr/bin/env bash
# Uso: scripts/add-podcast.sh <archivo-original> <id-leccion>
# Comprime a AAC mono 48 kbps y registra el episodio en src/data/podcasts.ts
set -euo pipefail
src="$1"; id="$2"
cd "$(dirname "$0")/.."
ffmpeg -y -loglevel error -i "$src" -ac 1 -c:a aac -b:a 48k "public/podcasts/$id.m4a"
secs=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "public/podcasts/$id.m4a")
mins=$(python3 -c "print(round($secs/60))")
if ! grep -q "'$id'" src/data/podcasts.ts; then
  sed -i "s#^export const podcasts: Record<string, Podcast> = {.*#&\n  '$id': { file: '$id.m4a', duration: '$mins min' },#" src/data/podcasts.ts
fi
echo "$id -> $mins min"
