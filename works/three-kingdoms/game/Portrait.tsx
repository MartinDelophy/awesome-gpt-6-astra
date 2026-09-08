import type { CSSProperties } from 'react';
import type { Officer } from './officers';
export function portraitStyle(o: Officer): CSSProperties {
  const row = Math.floor(o.portraitIndex / 6),
    col = o.portraitIndex % 6;
  const bounds =
    o.faction === 'shu'
      ? [0, 237, 446, 662, 869, 1066, 1254]
      : [0, 209, 418, 627, 836, 1045, 1254];
  const top = bounds[row],
    height = bounds[row + 1] - top;
  return {
    backgroundImage: `url(/portraits/${o.faction}-v2.jpg)`,
    backgroundSize: `600% ${(1254 / height) * 100}%`,
    backgroundPosition: `${col * 20}% ${(top / (1254 - height)) * 100}%`,
  };
}
export default function Portrait({
  officer,
  className = '',
}: {
  officer: Officer;
  className?: string;
}) {
  return (
    <div
      className={`portrait-art ${className}`}
      style={portraitStyle(officer)}
      // CSS crops one cell of an atlas; role="img" exposes that visual and its name.
      // eslint-disable-next-line jsx-a11y/prefer-tag-over-role
      role="img"
      aria-label={`${officer.name}的原创武将头像`}
    />
  );
}
