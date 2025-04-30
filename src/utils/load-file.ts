// frontend/src/utils/file.ts
import { open } from '@tauri-apps/plugin-dialog';
import { readTextFile } from '@tauri-apps/plugin-fs';

export async function pickAndReadCSV(): Promise<string | null> {
  const filePath = await open({
    filters: [{ name: 'CSV', extensions: ['csv'] }],
    multiple: false,
  });

  if (typeof filePath === 'string') {
    const contents = await readTextFile(filePath);
    return contents;
  }

  return null;
}
