interface CloudBubbleProps {
  label: string;
}

export function CloudBubble({ label }: CloudBubbleProps) {
  return (
    <div className="cloud" aria-hidden="true">
      <span>{label}</span>
    </div>
  );
}
