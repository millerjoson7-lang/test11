import { Story } from './types';

export const STORIES: Story[] = [
  {
    id: 'ye-gong',
    title: '叶公好龙',
    icon: 'Ghost',
    color: 'bg-red-500',
    summary: '讲了一个假装喜欢龙，见到真龙却吓跑的叶公的故事。',
    character: '叶公：喜欢表面样子，不喜欢真实事物。',
    vocabulary: [
      { word: '张牙舞爪', explanation: '形容龙的样子很威风，爪子张开、牙齿露出来。' },
      { word: '回旋盘绕', explanation: '龙的身体绕来绕去，弯弯曲曲的。' },
      { word: '霎时间', explanation: '时间特别短，一眨眼的功夫。' }
    ],
    goodSentence: {
      text: '他穿的衣服上绣着龙，戴的帽子上镶着龙，住的房子也一样，墙壁上画着龙，柱子上雕着龙。',
      explanation: '这句话把叶公喜欢龙的样子写得特别清楚，能看出他表面上真的很爱龙。'
    },
    moral: '做人要真诚，不能只喜欢事物的表面样子，而害怕它的真实模样。',
    questions: [
      {
        id: 1,
        text: '叶公表面上有多喜欢龙？',
        options: ['只在心里想', '衣服、帽子、房子到处都是龙', '天天去抓龙'],
        correctAnswer: '衣服、帽子、房子到处都是龙',
        explanation: '文中提到他穿的、戴的、住的到处都是龙。'
      },
      {
        id: 2,
        text: '真龙来拜访叶公时，叶公是什么反应？',
        options: ['非常开心', '请龙吃饭', '吓得脸色发白，浑身发抖，连忙跑了'],
        correctAnswer: '吓得脸色发白，浑身发抖，连忙跑了',
        explanation: '叶公只是叶公好“假”龙，见到真龙就吓坏了。'
      }
    ],
    reflection: '我知道做人要真诚，不能口是心非。比如我喜欢小动物，就要真心喜欢它们的全部，而不是只喜欢可爱的时候。'
  },
  {
    id: 'wang-yang',
    title: '望洋兴叹',
    icon: 'Waves',
    color: 'bg-blue-500',
    summary: '黄河神河伯一开始很骄傲，见到大海后才发现自己的渺小。',
    character: '河伯：黄河的神仙，能知错就改、虚心反思。',
    vocabulary: [
      { word: '汹涌澎湃', explanation: '形容黄河的水势很大，波浪又大又急。' },
      { word: '扬扬得意', explanation: '形容河伯一开始很骄傲，觉得自己很厉害。' },
      { word: '辽阔无际', explanation: '形容大海特别大，看不到边。' }
    ],
    goodSentence: {
      text: '有的人懂得了一点儿道理，就目空一切，认为自己了不起。',
      explanation: '这是河伯的反思，意思是有些人只懂一点点东西就看不起别人。'
    },
    moral: '做人不能骄傲自满，要学会看到更广阔的世界，保持谦虚的态度。',
    questions: [
      {
        id: 1,
        text: '一开始河伯为什么扬扬得意？',
        options: ['因为他捡到了宝物', '因为他看到黄河水势大，觉得自己最了不起', '因为他要去大海旅游'],
        correctAnswer: '因为他看到黄河水势大，觉得自己最了不起',
        explanation: '他看到黄河宽阔，就觉得自己是天下第一。'
      },
      {
        id: 2,
        text: '河伯来到大海后，心里有什么变化？',
        options: ['觉得大海没黄河美', '意识到自己特别渺小，开始反思自己的骄傲', '想把大海的水搬走'],
        correctAnswer: '意识到自己特别渺小，开始反思自己的骄傲',
        explanation: '见到广阔的大海，河伯才发现自己以前太自大了。'
      }
    ],
    reflection: '学习上我要是考了好成绩，不能骄傲，因为世界上还有更多知识等着我学，要一直保持谦虚。'
  },
  {
    id: 'mei-yan',
    title: '眉眼嘴鼻',
    icon: 'Smile',
    color: 'bg-yellow-500',
    summary: '脸上的四个部位争功劳，最后明白缺一不可。',
    character: '眉眼嘴鼻：各有各的作用，团结协作最重要。',
    vocabulary: [
      { word: '互不服气', explanation: '大家都觉得自己最厉害，谁也不服谁。' },
      { word: '能耐', explanation: '本事、本领的意思。' },
      { word: '瞭望四方', explanation: '眼睛能往各个方向看，看得很远。' }
    ],
    goodSentence: {
      text: '如果我生在眼睛和鼻子的下面，不知这张脸皮放到哪里去呢！',
      explanation: '眉毛的话告诉大家，每个部位的位置都有道理，缺一不可。'
    },
    moral: '每个人都有自己的作用和价值，要懂得团结协作，发挥各自的长处。',
    questions: [
      {
        id: 1,
        text: '嘴巴为什么不服气鼻子？',
        options: ['因为鼻子会流鼻涕', '因为鼻子的位置在嘴巴上面', '因为鼻子不爱说话'],
        correctAnswer: '因为鼻子的位置在嘴巴上面',
        explanation: '嘴巴觉得鼻子没什么本事却占了好位置。'
      },
      {
        id: 2,
        text: '眼睛的本领是什么？',
        options: ['闻味道', '吃饭', '辨别美丑，瞭望四方'],
        correctAnswer: '辨别美丑，瞭望四方',
        explanation: '眼睛能看清世界，这是它的独特作用。'
      }
    ],
    reflection: '就像我们班的小组合作，大家各有长处，互相配合才能把事情做好。'
  },
  {
    id: 'fen-huang',
    title: '凤凰和猫头鹰',
    icon: 'Bird',
    color: 'bg-purple-500',
    summary: '庄子用凤凰和猫头鹰的故事，讽刺惠子心胸狭窄。',
    character: '庄子：聪明幽默；惠子：心胸狭窄，容易怀疑朋友。',
    vocabulary: [
      { word: '信以为真', explanation: '听到别人的话就当真了，没有自己思考。' },
      { word: '慌了手脚', explanation: '因为害怕而变得特别慌张。' },
      { word: '津津有味', explanation: '形容吃得特别香，特别投入。' }
    ],
    goodSentence: {
      text: '不是梧桐树它不栖息；不是香甜的果子它不吃；不是清洁的泉水它不喝。',
      explanation: '这句话写出了凤凰的高洁，它有自己的原则。'
    },
    moral: '做人不能心胸狭窄，不要把自己看重的东西当成宝，还以为别人也想要。',
    questions: [
      {
        id: 1,
        text: '惠子为什么要搜查庄子？',
        options: ['想请庄子吃饭', '怕庄子抢他的宰相位子', '庄子偷了他的东西'],
        correctAnswer: '怕庄子抢他的宰相位子',
        explanation: '惠子听信谣言，以为庄子是来抢官做的。'
      },
      {
        id: 2,
        text: '庄子把宰相位子比作什么？',
        options: ['金子', '烂老鼠', '大苹果'],
        correctAnswer: '烂老鼠',
        explanation: '庄子用这个比喻告诉惠子，他根本不在乎那个位子。'
      }
    ],
    reflection: '做人要心胸开阔，要相信朋友，不能随便怀疑身边的人。'
  },
  {
    id: 'wu-shi-bu',
    title: '五十步笑百步',
    icon: 'Footprints',
    color: 'bg-green-500',
    summary: '跑了五十步的士兵嘲笑跑了一百步的，其实他们都在逃跑。',
    character: '逃跑的士兵：只看别人的错，不看自己的错。',
    vocabulary: [
      { word: '短兵相接', explanation: '形容打仗时面对面战斗，打得很激烈。' },
      { word: '丢盔弃甲', explanation: '形容逃跑时的狼狈样子。' },
      { word: '拖兵曳器', explanation: '拖着兵器逃跑，形容打败仗的样子。' }
    ],
    goodSentence: {
      text: '其实，跑五十步和跑一百步的都是逃跑啊！怎么能嘲笑别人呢？',
      explanation: '这是故事的核心，本质一样，不能嘲笑别人。'
    },
    moral: '做人要正视自己的错误，不能只看别人的缺点而看不到自己的。',
    questions: [
      {
        id: 1,
        text: '跑了五十步的士兵做了什么？',
        options: ['继续战斗', '嘲笑跑了一百步的士兵没用', '回去救人'],
        correctAnswer: '嘲笑跑了一百步的士兵没用',
        explanation: '他觉得自己跑得少，就比别人强，其实都是逃跑。'
      },
      {
        id: 2,
        text: '跑五十步的有资格嘲笑跑一百步的吗？',
        options: ['有', '没有，因为本质都是逃跑', '不知道'],
        correctAnswer: '没有，因为本质都是逃跑',
        explanation: '犯了同样的错误，只是程度不同，没资格笑话别人。'
      }
    ],
    reflection: '以后我要是犯了错，不能先看同学的错，要先看看自己有没有一样的问题。'
  },
  {
    id: 'ba-ge',
    title: '八哥学舌',
    icon: 'Mic2',
    color: 'bg-orange-500',
    summary: '八哥模仿人说话很骄傲，被知了点醒要坚持做自己。',
    character: '八哥：爱模仿、易骄傲；知了：有主见、坚持做自己。',
    vocabulary: [
      { word: '久而久之', explanation: '形容时间很长，过了很久很久。' },
      { word: '轻蔑', explanation: '看不起别人，态度傲慢。' },
      { word: '惭愧', explanation: '知道自己错了，心里不好意思。' }
    ],
    goodSentence: {
      text: '你已失去自己的声音，不过是重复几句人的话而已。而我发出的却是自己的声音。',
      explanation: '知了点醒了八哥，模仿别人会失去自我。'
    },
    moral: '做人要保持自己的特点和本色，不能盲目模仿别人。',
    questions: [
      {
        id: 1,
        text: '八哥的本领是怎么来的？',
        options: ['天生就会', '有人捉来教了很久才学会', '跟知了学的'],
        correctAnswer: '有人捉来教了很久才学会',
        explanation: '八哥的本领是后天模仿人类学来的。'
      },
      {
        id: 2,
        text: '为什么八哥最后惭愧地低下头？',
        options: ['因为它生病了', '因为它意识到自己只是重复别人的话，失去了自我', '因为它没吃饱'],
        correctAnswer: '因为它意识到自己只是重复别人的话，失去了自我',
        explanation: '知了的话让它明白，做真实的自己才是最重要的。'
      }
    ],
    reflection: '做自己才是最好的，画画时不用非要模仿别人，按自己的想法画就很好。'
  }
];
