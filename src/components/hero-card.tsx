import { Icon } from '@iconify-icon/solid';

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
        <span>简历入口</span>
        <a href="/resume">
          <Icon
            icon="mingcute:open-door-line"
            class="text-[28px] flex items-center hover:text-purple-400 transition-all duration-300"
          />
        </a>
      </div>
    </div>
  );
};
