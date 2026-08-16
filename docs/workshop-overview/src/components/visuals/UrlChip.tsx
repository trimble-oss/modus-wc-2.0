import type { SourceLink } from '../../types/slides';

interface UrlChipProps {
  link: SourceLink;
}

export function UrlChip({ link }: UrlChipProps) {
  return (
    <a className="url-chip" href={link.href} target="_blank" rel="noreferrer">
      <strong>{link.label}</strong>
      <span>{link.href.replace('https://', '')}</span>
    </a>
  );
}
