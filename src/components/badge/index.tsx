import type { BadgeSet } from '@components/badge/types.ts';
import { Icon } from '@iconify-icon/solid';

export interface Props {
  name: BadgeSet | string;
}

export const Badge = (props: Props) => {
  return (
    <div>
      <Icon icon={`logos:${props.name}`} />
      {props.name}
    </div>
  );
};
