/**
 * Story Bible Mock Data
 */

export interface StoryBibleOption {
  id: number;
  title: string;
  genre: string;
  logline: string;
  synopsis: string;
  selected: boolean;
}

export const STORY_BIBLE_MOCK_DATA: StoryBibleOption[] = [
  {
    id: 1,
    title: '命运交织',
    genre: '奇幻 / 爱情',
    logline: '千年白骨精为求解脱轮回之苦，化身人形接近取经僧人，却在朝夕相处中动了真情。',
    synopsis: '白骨夫人本是千年妖族女王，因厌倦无尽轮回，设计接近唐三藏。然而在朝夕相处中，她逐渐被唐僧的慈悲所打动，内心的孤寂开始融化...',
    selected: true,
  },
  {
    id: 2,
    title: '破界之约',
    genre: '奇幻 / 动作',
    logline: '人妖两界的禁忌之恋，引发一场改变三界格局的风暴。',
    synopsis: '白骨夫人与唐僧的相遇并非偶然，而是天庭与妖界博弈的一枚棋子。当真相揭开，两人必须在命运与自由之间做出抉择...',
    selected: false,
  },
  {
    id: 3,
    title: '千年等待',
    genre: '奇幻 / 剧情',
    logline: '她等了一千年，不是为了吃唐僧肉，而是为了一个承诺。',
    synopsis: '五百年前，白骨夫人还是一名普通村姑，被唐僧的前世所救。千年轮回，她修炼成妖，只为再见恩人一面...',
    selected: false,
  },
];
