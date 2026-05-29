import { useCallback } from 'react';

interface DownloadOptions {
  filename?: string;
  openInNewTab?: boolean;
}

export function useDownload() {
  const downloadFile = useCallback((url: string, options: DownloadOptions = {}) => {
    const { filename, openInNewTab = false } = options;

    if (openInNewTab) {
      window.open(url, '_blank', 'noopener,noreferrer');
      return;
    }

    const link = document.createElement('a');
    link.href = url;
    
    if (filename) {
      link.setAttribute('download', filename);
    } else {
      // Extract filename from URL
      const urlFilename = url.split('/').pop() || 'download';
      link.setAttribute('download', urlFilename);
    }
    
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return { downloadFile };
}
