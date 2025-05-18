export async function pickAndReadCSV(): Promise<{ name: string, contents: string } | null> {
  try {
    // Tauriでファイルを開く（優先）
    const { open } = await import('@tauri-apps/plugin-dialog');
    const { readTextFile } = await import('@tauri-apps/plugin-fs');

    const filePath = await open({
      filters: [{ name: 'CSV', extensions: ['csv'] }],
      multiple: false,
    });

    if (typeof filePath === 'string') {
      const contents = await readTextFile(filePath);
      const name = filePath.split(/[\\/]/).pop() ?? '';
      return { name, contents };
    }
  } catch (e) {
    console.warn('Tauri API が使えないため、ブラウザのファイル入力にフォールバックします。', e);
  }

  // ブラウザのファイル入力にフォールバック
  return new Promise((resolve) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.csv';
    input.onchange = async () => {
      const file = input.files?.[0];
      if (file) {
        const text = await file.text();
        resolve({ name: file.name, contents: text });
      } else {
        resolve(null);
      }
    };
    input.click();
  });
}
