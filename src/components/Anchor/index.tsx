import type { IAnchor } from './interface';
import { AnchorWrapper } from './styles';

export function Anchor({ text, $variant }: IAnchor) {
  return <AnchorWrapper $variant={$variant}>{text}</AnchorWrapper>;
}
