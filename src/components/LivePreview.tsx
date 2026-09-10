interface LivePreviewProps {
  files: Record<string, string>;
}

export default function LivePreview({ files }: LivePreviewProps) {
  const generatePreviewContent = () => {
    const html = files['index.html'] || '';
    const css = files['style.css'] || '';
    const js = files['script.js'] || '';

    // Inject CSS and JS into HTML
    const styledHtml = html
      .replace('</head>', `<style>${css}</style></head>`)
      .replace('</body>', `<script>${js}</script></body>`);

    return styledHtml;
  };

  return (
    <iframe
      srcDoc={generatePreviewContent()}
      title="Live Preview"
      className="w-full h-full border-0"
      sandbox="allow-scripts allow-modals"
    />
  );
}
