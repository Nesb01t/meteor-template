import { Icon } from '@iconify-icon/solid';

const navigateToResume = () => {
  window.open(window.location.href + 'resume', '_blank');
};

const cardBackgroundStyle = {
  background: 'linear-gradient(90deg, #ededed81 0%, #edfbff99 100%)',
};

export interface Props {
  title: string;
  desc: string[];
  [key: string]: any;
}
export const HeroCard = (props: Props) => {
  return (
    <div
      style={cardBackgroundStyle}
      class="w-full p-6 rounded-xl relative overflow-hidden"
      {...props}
    >
      <h1 class="mb-4 flex items-center gap-1">
        <Icon icon="mingcute:book-2-fill" />
        {props.title}
      </h1>
      {props.desc.map((item) => (
        <div class="mb-1">{item}</div>
      ))}
      <div class="flex items-center gap-1">
        我的简历入口
        <a onClick={navigateToResume}>
          <Icon icon="mingcute:open-door-line" />
        </a>
      </div>
      <Icon
        class="absolute bottom-[-40px] right-[-40px] size-[180px]"
        icon="line-md:cog-loop"
      />
      <Icon
        class="absolute bottom-[70px] right-[135px] size-[110px]"
        icon="line-md:compass-twotone-loop"
      />
      <Icon
        class="absolute bottom-[30px] right-[270px] show-only-large-screen size-[80px]"
        icon="line-md:moon-alt-to-sunny-outline-loop-transition"
      />
    </div>
  );
};
