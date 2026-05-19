// Comprehensive unit content for all 24 learning units
// Each unit contains 11 sections with rich, detailed learning materials

export interface UnitContent {
  id: string;
  title: string;
  englishTitle: string;
  level: string;
  objectives: string[];
  scenarios: string[];
  vocabulary: VocabularyItem[];
  sentencePatterns: SentencePattern[];
  formalDialogue: Dialogue;
  smallTalkDialogue: Dialogue;
  commonMistakes: Mistake[];
  expressionUpgrades: ExpressionUpgrade[];
  practiceTasks: PracticeTask[];
  saveablePhrases: SaveablePhrase[];
  resources: Resource[];
}

export interface VocabularyItem {
  expression: string;
  meaning: string;
  context: string;
  example: string;
}

export interface SentencePattern {
  pattern: string;
  meaning: string;
  usage: string;
  example: string;
}

export interface Dialogue {
  title: string;
  context: string;
  conversation: ConversationTurn[];
  learnableExpressions: LearnableExpression[];
  analysis: string;
}

export interface ConversationTurn {
  speaker: string;
  text: string;
}

export interface LearnableExpression {
  expression: string;
  explanation: string;
}

export interface Mistake {
  wrong: string;
  better: string;
  explanation: string;
}

export interface ExpressionUpgrade {
  basic: string;
  better: string;
  professional: string;
  explanation: string;
  usage?: string;
  example?: string;
}

export interface DifficultyExamples {
  beginner: string;
  intermediate: string;
  advanced: string;
}

export interface PracticeTask {
  title: string;
  instruction: string;
  example?: string;
  examples?: DifficultyExamples;
}

export interface SaveablePhrase {
  phrase: string;
  category: string;
  meaning: string;
}

export interface Resource {
  name: string;
  type?: string;
  description: string;
  why?: string;
  url: string;
}

// PATH 1: 求职路径 / Prepare for a Job
export const unitsContentData: Record<string, UnitContent> = {
  // Unit 1: 工作与职位 / Work and Jobs
  'u1': {
    id: 'u1',
    title: '工作与职位',
    englishTitle: 'Work and Jobs',
    level: 'B1-B2',
    objectives: [
      '能够清晰、具体地描述自己的职位名称、工作职责和日常任务',
      '掌握如何用专业表达介绍上一段实习或工作经历',
      '学会避免中文直译，用英文母语者的方式描述 role 和 responsibilities',
      '能够在面试或 coffee chat 中自然介绍自己的工作背景',
      '理解 job、work、role、position 等词的细微差别和使用场景'
    ],
    scenarios: [
      '英文面试中介绍过往工作经历',
      'Career fair 或 networking event 中的自我介绍',
      'Coffee chat 与 mentor 讨论职业背景',
      '入职第一天向新团队介绍自己',
      'LinkedIn 个人简介撰写',
      '简历中描述工作职责',
      '面试后 follow-up email 中补充说明经历'
    ],
    vocabulary: [
      {
        expression: 'role',
        meaning: '角色、岗位（强调职责和功能）',
        context: '比 job 更强调你在团队中的定位和职责',
        example: 'In my role as Marketing Coordinator, I supported campaign planning and execution.'
      },
      {
        expression: 'position',
        meaning: '职位（正式用语，强调职级）',
        context: '正式场合使用，比如 offer letter、job posting',
        example: 'I currently hold a position as Junior Data Analyst at XYZ Corp.'
      },
      {
        expression: 'responsibility',
        meaning: '职责、责任',
        context: '描述你负责的具体工作内容',
        example: 'My main responsibilities included managing the project timeline and coordinating with stakeholders.'
      },
      {
        expression: 'be responsible for + noun/-ing',
        meaning: '负责某事（最常用搭配）',
        context: '面试和简历中描述职责的核心句型',
        example: 'I was responsible for organizing weekly team meetings and preparing meeting materials.'
      },
      {
        expression: 'be in charge of',
        meaning: '主管、掌管',
        context: '强调管理权和决策权',
        example: 'I was in charge of the social media accounts for three major clients.'
      },
      {
        expression: 'report to',
        meaning: '向...汇报',
        context: '说明汇报关系和团队结构',
        example: 'I reported directly to the Marketing Director and worked closely with the design team.'
      },
      {
        expression: 'work closely with',
        meaning: '与...紧密合作',
        context: '强调跨团队协作',
        example: 'I worked closely with the sales team to align our messaging with customer needs.'
      },
      {
        expression: 'support the team by + -ing',
        meaning: '通过...方式支持团队',
        context: '描述辅助性工作时使用',
        example: 'I supported the team by conducting market research and preparing weekly reports.'
      },
      {
        expression: 'daily tasks / day-to-day responsibilities',
        meaning: '日常任务',
        context: '描述常规工作内容',
        example: 'My day-to-day responsibilities included responding to customer inquiries and updating the database.'
      },
      {
        expression: 'previous experience',
        meaning: '过往经历',
        context: '面试中引入过去工作的常用表达',
        example: 'In my previous experience as an intern, I gained hands-on skills in project coordination.'
      },
      {
        expression: 'internship',
        meaning: '实习',
        context: '应届生和转行者常用',
        example: 'During my internship at ABC Company, I assisted with event planning and vendor coordination.'
      },
      {
        expression: 'part-time role / full-time position',
        meaning: '兼职/全职岗位',
        context: '说明工作性质',
        example: 'I worked in a part-time role while completing my degree, which taught me strong time management skills.'
      },
      {
        expression: 'entry-level position',
        meaning: '初级岗位',
        context: '应届生求职时使用',
        example: "I'm seeking an entry-level position where I can apply my analytical skills and grow with the team."
      },
      {
        expression: 'take on additional responsibilities',
        meaning: '承担额外职责',
        context: '展示主动性和成长',
        example: 'Over time, I took on additional responsibilities such as training new team members.'
      },
      {
        expression: 'contribute to',
        meaning: '为...做出贡献',
        context: '强调impact和价值',
        example: 'I contributed to a 15% increase in engagement by redesigning our email templates.'
      },
      {
        expression: 'hands-on experience',
        meaning: '实践经验',
        context: '强调实际操作而非理论',
        example: 'I gained hands-on experience with SQL and data visualization tools.'
      },
      {
        expression: 'collaborate with',
        meaning: '与...合作',
        context: '强调团队协作',
        example: 'I collaborated with cross-functional teams to launch a new product feature.'
      },
      {
        expression: 'assist with / help with',
        meaning: '协助',
        context: '描述支持性工作，但 assist 更正式',
        example: 'I assisted with budget tracking and expense reporting for the department.'
      },
      {
        expression: 'manage / oversee',
        meaning: '管理、监督',
        context: 'manage 强调执行，oversee 强调监督',
        example: 'I managed a team of three interns and oversaw their project deliverables.'
      },
      {
        expression: 'coordinate',
        meaning: '协调',
        context: '强调组织和沟通能力',
        example: 'I coordinated between the marketing and sales teams to ensure consistent messaging.'
      },
      {
        expression: 'execute / implement',
        meaning: '执行、实施',
        context: '强调落地和执行力',
        example: 'I executed the social media strategy and implemented a new content calendar system.'
      },
      {
        expression: 'support daily operations',
        meaning: '支持日常运营',
        context: '描述运营类工作',
        example: 'I supported daily operations by managing inventory and processing orders.'
      },
      {
        expression: 'work on / work with',
        meaning: '从事某项工作 / 使用某工具',
        context: 'work on + project, work with + tool/people',
        example: 'I worked on three major campaigns and worked with tools like Google Analytics and Salesforce.'
      }
    ],
    sentencePatterns: [
      {
        pattern: 'In my role as [Job Title], I [verb] + [specific task/outcome].',
        meaning: '在我担任[职位]期间，我[做了什么具体工作]',
        usage: '面试开场介绍职责时使用，强调具体性',
        example: 'In my role as Marketing Intern, I supported campaign execution by creating social media content and tracking engagement metrics.'
      },
      {
        pattern: 'I was responsible for [noun/-ing], which involved [specific actions].',
        meaning: '我负责[某事]，具体包括[详细内容]',
        usage: '展开说明职责的细节',
        example: 'I was responsible for event coordination, which involved booking venues, managing budgets, and liaising with vendors.'
      },
      {
        pattern: 'My main responsibilities included [A], [B], and [C].',
        meaning: '我的主要职责包括A、B和C',
        usage: '列举多项职责时使用',
        example: 'My main responsibilities included drafting client proposals, maintaining the CRM system, and preparing weekly sales reports.'
      },
      {
        pattern: 'I worked closely with [team/person] to [achieve goal].',
        meaning: '我与[团队/人]紧密合作以[达成目标]',
        usage: '强调跨团队协作和成果',
        example: 'I worked closely with the design team to create user-friendly interfaces that improved customer satisfaction by 20%.'
      },
      {
        pattern: 'I supported the team by [specific contribution].',
        meaning: '我通过[具体贡献]支持团队',
        usage: '描述辅助性但有价值的工作',
        example: 'I supported the team by conducting competitive analysis and presenting insights at weekly strategy meetings.'
      },
      {
        pattern: 'During my time at [Company], I gained experience in [skill/area].',
        meaning: '在[公司]期间，我获得了[技能/领域]的经验',
        usage: '总结学到的技能',
        example: 'During my time at XYZ Startup, I gained experience in agile project management and cross-functional collaboration.'
      },
      {
        pattern: 'I reported to [Job Title] and collaborated with [team/department].',
        meaning: '我向[职位]汇报，并与[团队/部门]合作',
        usage: '说明组织结构和工作关系',
        example: 'I reported to the Senior Product Manager and collaborated with engineering and design teams on feature development.'
      },
      {
        pattern: 'One of my key responsibilities was [specific task], where I [action and result].',
        meaning: '我的一项关键职责是[具体任务]，我[行动和结果]',
        usage: '突出重点职责和成果',
        example: 'One of my key responsibilities was managing the internship program, where I recruited, onboarded, and mentored five interns.'
      },
      {
        pattern: 'I contributed to [project/goal] by [specific action].',
        meaning: '我通过[具体行动]为[项目/目标]做出贡献',
        usage: '强调个人贡献和impact',
        example: 'I contributed to a 30% increase in website traffic by optimizing SEO and creating targeted content.'
      },
      {
        pattern: 'My day-to-day work involved [regular tasks] as well as [occasional tasks].',
        meaning: '我的日常工作包括[常规任务]以及[偶尔的任务]',
        usage: '全面描述工作内容',
        example: 'My day-to-day work involved responding to customer inquiries and processing orders, as well as assisting with quarterly inventory audits.'
      },
      {
        pattern: 'I took on additional responsibilities such as [examples].',
        meaning: '我承担了额外职责，例如[举例]',
        usage: '展示主动性和成长',
        example: 'I took on additional responsibilities such as training new hires and leading weekly team stand-ups.'
      },
      {
        pattern: 'In this position, I developed skills in [skill areas].',
        meaning: '在这个职位上，我培养了[技能领域]的能力',
        usage: '总结技能收获',
        example: 'In this position, I developed skills in data analysis, stakeholder communication, and project prioritization.'
      }
    ],
    formalDialogue: {
      title: '面试场景：介绍实习经历',
      context: 'Candidate (应聘者) 在面试中向 Interviewer (面试官) 介绍自己上一段 Marketing Intern 的工作职责和收获。',
      conversation: [
        {
          speaker: 'Interviewer',
          text: "Thanks for coming in today. Let's start by having you walk me through your most recent internship. What was your role, and what were your main responsibilities?"
        },
        {
          speaker: 'Candidate',
          text: "Of course. In my role as Marketing Intern at ABC Tech, I supported the digital marketing team with campaign execution and performance tracking. My main responsibilities included creating social media content, scheduling posts, and analyzing engagement metrics using Google Analytics."
        },
        {
          speaker: 'Interviewer',
          text: "That sounds like a solid foundation. Can you tell me more about the campaign execution part? What did that involve day-to-day?"
        },
        {
          speaker: 'Candidate',
          text: "Sure. Day-to-day, I worked closely with the Content Manager to develop posts aligned with our monthly themes. I was responsible for drafting copy, sourcing or creating visuals, and coordinating with the design team when we needed custom graphics. I also monitored comments and messages to ensure timely responses."
        },
        {
          speaker: 'Interviewer',
          text: "Interesting. And you mentioned performance tracking—how did you approach that?"
        },
        {
          speaker: 'Candidate',
          text: "I tracked key metrics like reach, engagement rate, and click-through rate on a weekly basis. I compiled this data into reports for the team and highlighted trends or posts that performed particularly well. This helped us refine our content strategy over time."
        },
        {
          speaker: 'Interviewer',
          text: "Did you work independently, or was this more of a collaborative effort?"
        },
        {
          speaker: 'Candidate',
          text: "It was definitely collaborative. I reported to the Digital Marketing Manager and worked closely with both the content and design teams. I also coordinated with the sales team occasionally to align our messaging with ongoing promotions."
        },
        {
          speaker: 'Interviewer',
          text: "Great. What would you say was your biggest takeaway from that experience?"
        },
        {
          speaker: 'Candidate',
          text: "I'd say I gained hands-on experience in data-driven marketing and learned how to balance creativity with performance goals. I also developed stronger communication skills from coordinating across multiple teams."
        }
      ],
      learnableExpressions: [
        {
          expression: 'walk me through',
          explanation: '请详细说明、带我了解（面试中常用，表示希望听到完整描述）'
        },
        {
          expression: 'In my role as...',
          explanation: '在我担任...的职位时（正式开场，清晰说明职位）'
        },
        {
          expression: 'My main responsibilities included...',
          explanation: '我的主要职责包括...（列举职责的标准句型）'
        },
        {
          expression: 'Day-to-day, I...',
          explanation: '日常工作中，我...（描述常规任务）'
        },
        {
          expression: 'I worked closely with...',
          explanation: '我与...紧密合作（强调协作）'
        },
        {
          expression: 'I was responsible for...',
          explanation: '我负责...（最常用的职责描述）'
        },
        {
          expression: 'I reported to... and worked closely with...',
          explanation: '我向...汇报，并与...紧密合作（说明组织关系）'
        },
        {
          expression: 'I gained hands-on experience in...',
          explanation: '我获得了...的实践经验（总结收获）'
        }
      ],
      analysis: '这段对话展示了如何在面试中专业、具体地介绍工作职责。Candidate 使用了清晰的结构（role → responsibilities → day-to-day tasks → collaboration → takeaway），避免了笼统表达，用具体任务和工具名称增强可信度。语气自信但不夸张，既展示了独立工作能力，也强调了团队协作。'
    },
    smallTalkDialogue: {
      title: 'Coffee Chat：与 Mentor 讨论如何介绍工作经历',
      context: 'Mentee (求职者) 在 coffee chat 中向 Mentor (职业导师) 请教如何更好地描述自己的实习经历，语气轻松但专业。',
      conversation: [
        {
          speaker: 'Mentor',
          text: "Hey! Thanks for making time today. How's your job search going?"
        },
        {
          speaker: 'Mentee',
          text: "It's going okay, thanks for asking. I've been working on my interview answers, but I'm struggling a bit with how to describe my last internship. I feel like I'm either too vague or I'm listing too many details."
        },
        {
          speaker: 'Mentor',
          text: "That's super common. Let's talk through it. What was your role, and what did you actually do day-to-day?"
        },
        {
          speaker: 'Mentee',
          text: "I was a Marketing Intern. Mostly I helped with social media—posting content, replying to comments, that kind of thing. I also did some reporting on how posts were performing."
        },
        {
          speaker: 'Mentor',
          text: "Okay, that's a good start. But when you say 'helped with social media,' that's pretty broad. Can you be more specific about what 'helped' actually looked like?"
        },
        {
          speaker: 'Mentee',
          text: "Hmm, I guess I created the posts, scheduled them, and tracked engagement metrics. I also worked with the design team when we needed graphics."
        },
        {
          speaker: 'Mentor',
          text: "Perfect—that's way more concrete. So instead of 'I helped with social media,' you could say something like, 'I was responsible for creating and scheduling social media content, and I coordinated with the design team for custom visuals.' See the difference?"
        },
        {
          speaker: 'Mentee',
          text: "Oh, that makes sense. It sounds more professional and specific. I was also tracking metrics—should I mention tools like Google Analytics?"
        },
        {
          speaker: 'Mentor',
          text: "Definitely. Mentioning tools adds credibility. You could say, 'I tracked engagement metrics using Google Analytics and compiled weekly reports to inform our content strategy.' That shows you're data-driven."
        },
        {
          speaker: 'Mentee',
          text: "Got it. That's really helpful. I think I was worried about sounding like I'm exaggerating, so I kept it too simple."
        },
        {
          speaker: 'Mentor',
          text: "I get that. But being specific isn't exaggerating—it's just being clear about what you actually did. Interviewers want to understand your real contributions, not just hear buzzwords."
        },
        {
          speaker: 'Mentee',
          text: "That makes a lot of sense. Thanks for walking me through that. I feel way more confident now."
        }
      ],
      learnableExpressions: [
        {
          expression: 'Thanks for making time',
          explanation: '感谢抽出时间（比 thank you for your time 更自然、更口语化）'
        },
        {
          expression: "How's your [job search] going?",
          explanation: '你的[求职]进展如何？（自然的开场寒暄）'
        },
        {
          expression: "I'm struggling a bit with...",
          explanation: '我在...方面有点困难（自然表达困惑，不显得无能）'
        },
        {
          expression: "Let's talk through it",
          explanation: '我们一起讨论一下（mentor 常用，表示愿意帮助）'
        },
        {
          expression: 'That kind of thing',
          explanation: '诸如此类的事情（口语化列举）'
        },
        {
          expression: "That's a good start, but...",
          explanation: '这是个好的开始，但是...（温和指出可以改进的地方）'
        },
        {
          expression: 'See the difference?',
          explanation: '看出区别了吗？（引导对方理解）'
        },
        {
          expression: 'That makes sense',
          explanation: '有道理、我明白了（表示理解和认同）'
        },
        {
          expression: 'I get that',
          explanation: '我理解（表示共鸣）'
        },
        {
          expression: 'Thanks for walking me through that',
          explanation: '感谢你详细讲解（比 thank you for explaining 更自然）'
        }
      ],
      analysis: '这段对话展示了职场 Small Talk 的特点：语气轻松自然，但内容仍然专业且有价值。Mentee 坦诚表达困惑，Mentor 用引导式提问帮助对方自己发现问题。对话中使用了口语化表达（struggling a bit, that kind of thing, I get that），但没有变成随意聊天，始终围绕职业发展主题。这种沟通方式在 coffee chat、mentor check-in、career advising 等场景中非常常见。'
    },
    commonMistakes: [
      {
        wrong: 'I did many things in my internship.',
        better: 'In my internship, I supported social media management, created content, and tracked campaign performance.',
        explanation: '"Did many things" 太空泛，没有任何信息量。要用具体动词和任务名称。'
      },
      {
        wrong: 'I am responsible of marketing.',
        better: 'I was responsible for managing social media accounts and coordinating marketing campaigns.',
        explanation: '正确搭配是 responsible FOR，不是 responsible OF。而且要说明具体负责什么。'
      },
      {
        wrong: 'My work is help my manager.',
        better: 'I supported my manager by preparing reports, scheduling meetings, and coordinating with vendors.',
        explanation: '不要说 "my work is help"，要用 "I supported... by doing X, Y, Z" 来具体说明如何帮助。'
      },
      {
        wrong: 'I have experience about project management.',
        better: 'I have experience in project management, specifically in coordinating timelines and managing stakeholder communication.',
        explanation: '正确搭配是 experience IN，不是 experience ABOUT。并且要补充具体内容。'
      },
      {
        wrong: 'I worked in ABC company as a intern.',
        better: 'I worked at ABC Company as an intern, where I supported the marketing team with campaign execution.',
        explanation: '公司用 AT 不用 IN；intern 前用 AN 不用 A；最好补充一句说明做了什么。'
      }
    ],
    expressionUpgrades: [
      {
        basic: 'I helped with social media.',
        better: 'I supported social media management by creating content and scheduling posts.',
        professional: 'I managed social media content creation and scheduling, which contributed to a 20% increase in engagement over three months.',
        explanation: 'Basic 版本太模糊；Better 版本说明了具体任务；Professional 版本加入了成果和数据，展示 impact。'
      },
      {
        basic: 'I did reports.',
        better: 'I prepared weekly performance reports.',
        professional: 'I compiled and analyzed weekly performance reports using Google Analytics, providing actionable insights to inform content strategy.',
        explanation: '从 "做报告" 升级到说明报告类型、工具和用途。'
      },
      {
        basic: 'I worked with many people.',
        better: 'I collaborated with the design and content teams.',
        professional: 'I coordinated cross-functional collaboration between design, content, and sales teams to ensure consistent brand messaging.',
        explanation: '从笼统的 "很多人" 到具体团队，再到说明协作目的和成果。'
      },
      {
        basic: 'I learned a lot.',
        better: 'I gained experience in digital marketing and data analysis.',
        professional: 'I developed hands-on skills in data-driven marketing, including campaign performance tracking, A/B testing, and stakeholder reporting.',
        explanation: '从 "学到很多" 到具体技能领域，再到详细技能点。'
      },
      {
        basic: 'I was an intern.',
        better: 'I worked as a Marketing Intern at XYZ Company.',
        professional: 'I served as a Marketing Intern at XYZ Company, where I supported digital campaign execution and contributed to a 15% increase in social media engagement.',
        explanation: '从单纯说职位，到加入公司名，再到说明职责和成果。'
      }
    ],
    practiceTasks: [
      {
        title: '任务 1：改写你的实习/工作描述',
        instruction: '用 100 词左右描述你上一段实习或工作经历。必须包含：职位名称、主要职责（至少 3 项）、使用的工具或方法、以及一个具体成果或收获。避免使用 "helped with" 或 "did many things" 这类模糊表达。',
        example: '参考格式：In my role as [Job Title] at [Company], I was responsible for [Task A], [Task B], and [Task C]. I used [Tool/Method] to [achieve specific outcome]. Through this experience, I developed skills in [Skill Area] and contributed to [Result].'
      },
      {
        title: '任务 2：回答面试问题',
        instruction: '面试官问："Can you tell me about your previous role and what your day-to-day responsibilities were?" 用 STAR 结构回答这个问题，重点说明你的 daily tasks 和一个具体项目或成果。',
        example: 'In my previous role as Marketing Intern at ABC Company, I was responsible for content creation, social media management, and campaign performance tracking. Day-to-day, I coordinated with the design team to produce weekly posts and analysed engagement data using Google Analytics. One highlight was leading a six-week email campaign that increased click-through rates by 18%. Through this experience I developed stronger skills in data-driven marketing and cross-functional communication.'
      },
      {
        title: '任务 3：修改 Chinglish 表达',
        instruction: '把以下中文直译改成自然、专业的英文表达：\n1. 我的工作是帮助我的老板。\n2. 我做了很多市场营销的事情。\n3. 我有关于数据分析的经验。\n4. 我在这个公司工作，负责社交媒体。',
        example: '1. ✗ My job is to help my boss. → ✓ I supported my manager by coordinating schedules, preparing reports, and following up on action items.\n2. ✗ I did many things in marketing. → ✓ I was responsible for content creation, social media management, and campaign performance tracking.\n3. ✗ I have experience about data analysis. → ✓ I have hands-on experience in data analysis, including using Excel and Python to process large datasets.\n4. ✗ I worked in this company, responsible for social media. → ✓ In my role at XYZ Company, I managed the brand\'s social media presence across three platforms.'
      }
    ],
    saveablePhrases: [
      {
        phrase: 'In my role as [Job Title], I was responsible for [specific tasks].',
        category: '面试',
        meaning: '在我担任[职位]时，我负责[具体任务]'
      },
      {
        phrase: 'I worked closely with [team/person] to [achieve goal].',
        category: '面试',
        meaning: '我与[团队/人]紧密合作以[达成目标]'
      },
      {
        phrase: 'My main responsibilities included [A], [B], and [C].',
        category: '面试',
        meaning: '我的主要职责包括A、B和C'
      },
      {
        phrase: 'I supported the team by [specific contribution].',
        category: '面试',
        meaning: '我通过[具体贡献]支持团队'
      },
      {
        phrase: 'I gained hands-on experience in [skill/area].',
        category: '面试',
        meaning: '我获得了[技能/领域]的实践经验'
      },
      {
        phrase: 'I reported to [Job Title] and collaborated with [team].',
        category: '面试',
        meaning: '我向[职位]汇报，并与[团队]合作'
      },
      {
        phrase: 'Day-to-day, I [regular tasks] as well as [occasional tasks].',
        category: '面试',
        meaning: '日常工作中，我[常规任务]以及[偶尔任务]'
      },
      {
        phrase: 'I contributed to [project/goal] by [specific action].',
        category: '面试',
        meaning: '我通过[具体行动]为[项目/目标]做出贡献'
      }
    ],
    resources: [
      {
        name: "British Council — You're Hired",
        type: '英语学习系列',
        description: '招聘与选拔、面试语言、录用与跟进',
        why: '围绕真实求职流程，适合练习 job application、interview、follow-up language 和 interview communication。',
        url: 'https://learnenglish.britishcouncil.org/free-resources/business/youre-hired/episode-01'
      },
      {
        name: 'British Council — Business English',
        type: '学习资源合集',
        description: '工作与职位、招聘、邮件、面试',
        why: '覆盖 interview skills、business emails、business topics，适合作为求职路径的综合学习资源。',
        url: 'https://learnenglish.britishcouncil.org/free-resources/business'
      },
      {
        name: 'Harvard — Resumes & Cover Letter Guide',
        type: '大学 career guide',
        description: '简历与求职信、工作经历描述、求职材料准备',
        why: '适合学习 resume / cover letter 的结构、内容和表达，尤其适合把经历写得更具体、更 professional。',
        url: 'https://careerservices.fas.harvard.edu/resources/harvard-college-guide-to-resumes-cover-letters/'
      },
      {
        name: 'MIT — How to Write an Effective Cover Letter',
        type: '大学 career article',
        description: '求职信、申请邮件、职位匹配表达',
        why: '强调 cover letter 要针对具体职位，并用经历例子突出相关技能，适合训练 tailored application writing。',
        url: 'https://capd.mit.edu/resources/how-to-write-an-effective-cover-letter/'
      },
      {
        name: 'MIT — STAR Method for Behavioral Interviews',
        type: '大学 interview guide',
        description: '技能与资质、面试语言、behavioral interview',
        why: '适合训练 STAR 面试回答，让用户的答案更具体、更有结构，避免只说 "I learned a lot" 或 "I am good at communication"。',
        url: 'https://capd.mit.edu/resources/the-star-method-for-behavioral-interviews/'
      },
      {
        name: 'Berkeley Career Engagement — Interview Preparation',
        type: '大学 career guide',
        description: '面试语言、招聘与选拔、技能与资质',
        why: '系统整理了面试准备、常见问题、面试礼仪、结尾提问和 thank-you letter 等内容，适合帮助用户准备完整英文面试流程。',
        url: 'https://career.berkeley.edu/prepare-for-success/interviewing/interview-preparation/'
      }
    ]
  },

  // Unit 2: 招聘与选拔 / Recruitment and Selection
  'u2': {
    id: 'u2',
    title: '招聘与选拔',
    englishTitle: 'Recruitment and Selection',
    level: 'B1-B2',
    objectives: [
      '理解标准的职场招聘流程及其背后的沟通逻辑',
      '掌握如何专业、得体地跟进求职申请进度',
      '学会解读 Job Description (JD) 中的隐含要求',
      '能够在面试前后与 Recruiter 进行自然的职场寒暄（Small Talk）',
      '提升在招聘环节中的主动沟通意识和专业度'
    ],
    scenarios: [
      '向 Recruiter 或 HR 询问申请进度',
      '面试后的感谢信与状态跟进',
      '与 Mentor 讨论职位描述的优先级',
      '在面试前候考室与招聘助手进行简短交流',
      '确认下一阶段面试的具体安排',
      'LinkedIn 上的内推咨询',
      '背景调查准备阶段的沟通'
    ],
    vocabulary: [
      {
        expression: 'job posting / job listing',
        meaning: '招聘广告',
        context: '泛指在网上或平台上发布的招聘信息',
        example: 'I saw your job posting on LinkedIn for the Senior Analyst position.'
      },
      {
        expression: 'job description (JD)',
        meaning: '职位描述',
        context: '包含职责、要求、福利的详细文档',
        example: 'The JD mentions that proficiency in Python is a must-have.'
      },
      {
        expression: 'candidate / applicant',
        meaning: '候选人 / 申请人',
        context: 'candidate 强调已进入选拔环节，applicant 是泛指申请者',
        example: 'We have shortlisted three strong candidates for the final round.'
      },
      {
        expression: 'apply for',
        meaning: '申请（某个职位）',
        context: '动宾搭配，注意介词 for',
        example: 'I am writing to apply for the Marketing Manager role.'
      },
      {
        expression: 'submit an application',
        meaning: '提交申请',
        context: '比 say "send my resume" 更正式',
        example: 'Please ensure you submit your application before the Friday deadline.'
      },
      {
        expression: 'shortlist',
        meaning: '入围名单',
        context: '公司筛选后的候选名单',
        example: 'Your profile has been shortlisted for an initial screening call.'
      },
      {
        expression: 'hiring manager',
        meaning: '用人经理',
        context: '决定是否录用你的直接主管，不是 HR',
        example: 'The hiring manager will be focusing on your technical skills during the interview.'
      },
      {
        expression: 'recruiter',
        meaning: '招聘官',
        context: '负责整个招聘流程协调的人',
        example: 'The recruiter reached out to schedule a follow-up conversation.'
      },
      {
        expression: 'interview process / hiring process',
        meaning: '面试流程 / 招聘流程',
        context: '询问进度时的核心词',
        example: 'Could you walk me through the typical interview process for this role?'
      },
      {
        expression: 'next steps',
        meaning: '下一步安排',
        context: '非常职场的表达，用于询问后续计划',
        example: "I'm interested in hearing about the next steps in the selection process."
      },
      {
        expression: 'job requirement',
        meaning: '职位要求',
        context: 'JD 中提到的硬性或软性条件',
        example: 'One of the key requirements is at least five years of experience in sales.'
      },
      {
        expression: 'selection process',
        meaning: '选拔过程',
        context: '比 recruitment 更强调“筛选”的属性',
        example: 'The selection process involves three rounds of interviews and a case study.'
      },
      {
        expression: 'screening',
        meaning: '初步筛选',
        context: '通常是第一轮与 HR 的简短电话沟通',
        example: 'The first step is a 15-minute phone screening with the recruiter.'
      },
      {
        expression: 'application status',
        meaning: '申请状态',
        context: '询问进度时的正式术语',
        example: "I'm checking in to see if there's an update on my application status."
      },
      {
        expression: 'stand out',
        meaning: '脱颖而出',
        context: '描述有竞争力的表现',
        example: 'To stand out as a candidate, you need to highlight your unique achievements.'
      },
      {
        expression: 'keep someone posted',
        meaning: '随时告知进度',
        context: 'Recruiter 常用，表示会再联系你',
        example: "I'll keep you posted as we move through the interview rounds."
      },
      {
        expression: 'cultural fit',
        meaning: '文化匹配度',
        context: '招聘中非常看重的个人特质与公司氛围的契合度',
        example: 'The team interview is mostly about assessing your cultural fit.'
      },
      {
        expression: 'background check',
        meaning: '背景调查',
        context: '入职前的最后环节',
        example: 'The offer is subject to a successful background check.'
      },
      {
        expression: 'competitive edge',
        meaning: '竞争优势',
        context: '强调你相对于其他人的优势',
        example: 'Having experience in the e-commerce sector gives you a competitive edge.'
      },
      {
        expression: 'follow up',
        meaning: '跟进',
        context: '面试后必做的动作',
        example: "It's professional to follow up within 24 hours of your interview."
      }
    ],
    sentencePatterns: [
      {
        pattern: "I'm checking in to see if there's any update on [the application status].",
        meaning: "我想确认一下[申请状态]是否有任何更新。",
        usage: "礼貌询问进度的万能句型",
        example: "I'm checking in to see if there's any update on my application for the Analyst position."
      },
      {
        pattern: "Could you walk me through the [interview process] for this role?",
        meaning: "您能带我了解一下这个职位的[面试流程]吗？",
        usage: "初次沟通时了解全局安排",
        example: "Could you walk me through the interview process and typical timeline for this role?"
      },
      {
        pattern: "What are the [next steps] in the selection process?",
        meaning: "选拔过程中的[下一步安排]是什么？",
        usage: "面试结束前必问问题",
        example: "I'm very excited about the opportunity. What are the next steps from here?"
      },
      {
        pattern: "Based on the [job description], I noticed that [specific requirement] is highlighted.",
        meaning: "基于[职位描述]，我注意到[某项要求]被重点强调了。",
        usage: "展示你仔细研究过职位要求",
        example: "Based on the job description, I noticed that cross-functional collaboration is a key requirement."
      },
      {
        pattern: "I'm writing to [follow up on] my interview on [Date].",
        meaning: "我写信是想[跟进一下]我[日期]的面试。",
        usage: "邮件跟进面试结果的开头",
        example: "I'm writing to follow up on our conversation last Wednesday regarding the Marketing role."
      },
      {
        pattern: "I would appreciate the chance to discuss how [my skills] align with [the role].",
        meaning: "我很感激能有机会讨论[我的技能]如何与[该职位]相匹配。",
        usage: "表达求职意愿和专业度",
        example: "I would appreciate the chance to discuss how my project management skills align with your team's goals."
      },
      {
        pattern: "Is there any [additional information] I can provide to support my application?",
        meaning: "有没有什么[额外信息]我可以提供以支持我的申请？",
        usage: "主动展示积极性",
        example: "Is there any additional information or portfolio work I can provide for the hiring manager?"
      },
      {
        pattern: "I noticed the JD mentions [A], and I was wondering if [B] is also prioritized.",
        meaning: "我注意到 JD 提到了 A，我想知道 B 是否也被优先考虑。",
        usage: "深度探讨职位要求",
        example: "I noticed the JD mentions data analysis, and I was wondering if experience with Tableau is also prioritized."
      },
      {
        pattern: "I'm reaching out to [inquire about] the status of my application.",
        meaning: "我联系您是想[询问]我的申请状态。",
        usage: "正式的查询开头",
        example: "I'm reaching out to inquire about the status of my application for the Software Engineer role."
      },
      {
        pattern: "Thank you for [sharing the details] about the selection process.",
        meaning: "感谢您[分享关于]选拔流程的[细节]。",
        usage: "礼貌反馈",
        example: "Thank you for sharing the details about the timeline; it helps me plan accordingly."
      }
    ],
    formalDialogue: {
      title: '正式通话：向 Recruiter 询问申请进度',
      context: 'Applicant (申请人) 拨通了 Recruiter (招聘官) 的电话，跟进两周前提交的申请状态。',
      conversation: [
        {
          speaker: 'Applicant',
          text: "Hi Sarah, this is [Your Name]. I'm calling to follow up on my application for the Marketing Specialist position. How are you doing today?"
        },
        {
          speaker: 'Recruiter',
          text: "Hi! I'm doing well, thanks. Yes, I remember your application. Let me pull that up for you. One second."
        },
        {
          speaker: 'Applicant',
          text: "Great, I appreciate it. I'm still very interested in the role, so I wanted to check in and see if there's any update on the status of my application."
        },
        {
          speaker: 'Recruiter',
          text: "Thanks for your patience. The hiring manager is currently reviewing the first round of applicants. We're a bit behind schedule due to some internal meetings."
        },
        {
          speaker: 'Applicant',
          text: "That makes total sense. I understand how busy things can get. Is there a revised timeline for when you might be shortlisting candidates for interviews?"
        },
        {
          speaker: 'Recruiter',
          text: "We're hoping to finalize the shortlist by the end of this week and start reaching out for screenings next Monday."
        },
        {
          speaker: 'Applicant',
          text: "That's helpful to know. Should I check back with you late next week if I haven't heard anything, or would you prefer a different follow-up method?"
        },
        {
          speaker: 'Recruiter',
          text: "Checking back next Thursday would be perfect if you don't hear from us by then. I'll make a note of it."
        },
        {
          speaker: 'Applicant',
          text: "Perfect. Thank you for walking me through the process, Sarah. I really appreciate your time."
        },
        {
          speaker: 'Recruiter',
          text: "No problem at all. Thanks for your interest. Have a great day!"
        }
      ],
      learnableExpressions: [
        {
          expression: "I'm calling to follow up on...",
          explanation: "我打电话是想跟进一下...（明确告知目的）"
        },
        {
          expression: "Let me pull that up for you.",
          explanation: "让我帮你调出（相关信息/系统）查看一下。"
        },
        {
          expression: "I appreciate it.",
          explanation: "我很感激（比 thank you 更职场化，表示认可对方的动作）"
        },
        {
          expression: "That makes total sense.",
          explanation: "这完全可以理解（表达共情，缓和气氛）"
        },
        {
          expression: "A bit behind schedule.",
          explanation: "进度比计划稍慢（Recruiter 常用解释延迟的说法）"
        },
        {
          expression: "Revised timeline.",
          explanation: "修订后的时间线/新计划的时间（询问延迟后的后续安排）"
        },
        {
          expression: "Check back with you.",
          explanation: "再次联系你/再次核实进度。"
        },
        {
          expression: "Make a note of it.",
          explanation: "把这件事记录下来。"
        }
      ],
      analysis: '在这段对话中，申请人表现出了极高的专业素养。首先，明确告知来电目的。其次，当听到进度延迟时，使用 "That makes total sense" 表示理解，而不是施加压力。最后，主动询问后续联系的建议方式（Check back with you），既展示了积极性，又尊重了 Recruiter 的工作节奏。'
    },
    smallTalkDialogue: {
      title: 'Small Talk：与 Mentor 讨论 Job Description',
      context: 'Mentee (求职者) 和 Mentor (导师) 在 coffee chat 时自然地聊起一个职位描述，询问如何解读 JD。',
      conversation: [
        {
          speaker: 'Mentor',
          text: "So, have you seen any interesting job postings lately?"
        },
        {
          speaker: 'Mentee',
          text: "Actually, yes. I found a JD for a Product Analyst role at a fintech company. It looks great, but the requirements list is quite long."
        },
        {
          speaker: 'Mentor',
          text: "Ah, the classic 'wish list.' JDs can be a bit overwhelming sometimes. What specifically is catching your eye, and what are you worried about?"
        },
        {
          speaker: 'Mentee',
          text: "They prioritize experience with SQL and data visualization, which I have. But then they also mention 'strong stakeholder management,' and I'm not sure how much that counts versus the technical side."
        },
        {
          speaker: 'Mentor',
          text: "That's a great question. Usually, if it's high up in the JD, it means it's a priority. In fintech, you're often translating data for non-technical people, so that communication piece is huge."
        },
        {
          speaker: 'Mentee',
          text: "That makes sense. I was wondering if I should still apply even if I only have a year of that specific management experience."
        },
        {
          speaker: 'Mentor',
          text: "Definitely. JDs are often a 'best-case scenario.' If you hit 60-70% of the requirements, you're usually a solid applicant. Just make sure you highlight that one year clearly."
        },
        {
          speaker: 'Mentee',
          text: "That's good to know. I've been overthinking whether I'm a 100% fit or not."
        },
        {
          speaker: 'Mentor',
          text: "Don't overthink it. Focus on the core requirements. Thanks for sharing that—it's interesting to see what's out there right now."
        },
        {
          speaker: 'Mentee',
          text: "Thanks for walking me through your perspective. It makes the JD feel much less intimidating."
        }
      ],
      learnableExpressions: [
        {
          expression: "Catching your eye.",
          explanation: "吸引你的注意（比 interesting 更地道）"
        },
        {
          expression: "A bit overwhelming.",
          explanation: "有点让人压力大/应接不暇。"
        },
        {
          expression: "Wish list.",
          explanation: "愿望清单（职场俚语，指 JD 里写得太完美的理想要求）"
        },
        {
          expression: "The technical side.",
          explanation: "技术方面（用于对比软技能）"
        },
        {
          expression: "That communication piece is huge.",
          explanation: "沟通那一块非常重要（piece 指代某个部分，huge 强调重要性）"
        },
        {
          expression: "Best-case scenario.",
          explanation: "理想情况/最好的方案。"
        },
        {
          expression: "Hit the requirements.",
          explanation: "符合要求/达到要求。"
        },
        {
          expression: "Solid applicant.",
          explanation: "稳健的/有竞争力的申请人。"
        }
      ],
      analysis: '这段对话展示了如何以自然的方式讨论专业的招聘话题。Mentee 使用了 "I was wondering if..." 这种礼貌但不生硬的询问方式，Mentor 则使用职场口语（wish list, huge piece, solid applicant）提供实用的建议。这种 Small Talk 有助于在轻松的氛围中获取行业内部信息（Insiders\' view）。'
    },
    commonMistakes: [
      {
        wrong: "I want to know my result of interview.",
        better: "I'm checking in to see if there's any update on my application status.",
        explanation: "直接说 'I want to know my result' 太生硬。用 'check in' 和 'update' 语气更温和且专业。"
      },
      {
        wrong: "Please tell me the next steps fast.",
        better: "I was wondering what the next steps in the selection process might be.",
        explanation: "不要加 'fast'，这在职场中很不礼貌。使用 'I was wondering...' 来引导询问。"
      },
      {
        wrong: "I apply this job.",
        better: "I am applying for this position.",
        explanation: "apply 后一定要加 FOR。另外，用进行时或正式动宾结构更好。"
      },
      {
        wrong: "Is my resume okay?",
        better: "I would appreciate your feedback on whether my background aligns with the role requirements.",
        explanation: "不要问 'resume okay' 这种太随意且低层次的问题，要上升到 'background alignment' 的高度。"
      },
      {
        wrong: "Give me the job description.",
        better: "Could you please share the job description for this role?",
        explanation: "不要用命令式的 'Give me'。招聘是一个相互评估的过程，要始终保持礼貌。"
      }
    ],
    expressionUpgrades: [
      {
        basic: "I am looking for the next steps.",
        better: "I'm interested in hearing about the next steps in the selection process.",
        professional: "I would appreciate a brief overview of the interview process and any upcoming milestones.",
        explanation: "从简单的“看下一步”升级到对整个流程和里程碑（milestones）的专业关注。"
      },
      {
        basic: "I fit the requirements.",
        better: "My background aligns well with the requirements listed in the JD.",
        professional: "My professional experience directly maps to the core competencies outlined in the job description.",
        explanation: "使用 map to（对应）和 core competencies（核心胜任力）展现更高阶的专业术语。"
      },
      {
        basic: "I am checking my application.",
        better: "I'm following up on my application status for the [Role Name].",
        professional: "I'm reaching out to formally inquire about the status of my application submitted on [Date].",
        explanation: "加入 formally 和具体的日期，体现出极强的流程规范感。"
      },
      {
        basic: "The JD is difficult.",
        better: "The JD requirements are quite comprehensive.",
        professional: "The job description outlines a very robust set of expectations for this senior-level role.",
        explanation: "将 difficult 替换为 comprehensive（详尽）或 robust（强力/丰富），评价更加中立客观。"
      },
      {
        basic: "Thanks for the info.",
        better: "Thanks for sharing the details about the recruitment process.",
        professional: "I appreciate the transparency and the detailed walkthrough of the selection criteria.",
        explanation: "使用 transparency（透明度）和 selection criteria（选拔标准）展示对招聘过程的深度理解。"
      }
    ],
    practiceTasks: [
      {
        title: '任务 1：撰写跟进邮件（Follow-up Email）',
        instruction: '假设你一周前参加了面试，但还没收到结果。给 Recruiter 写一封 80-120 词的跟进邮件。要求：包含感谢、重申兴趣、询问状态、礼貌结尾。',
        example: 'Subject: Follow-up: [Your Name] - [Job Title] Interview\n\nHi [Recruiter Name],\n\nI hope you\'re having a great week. I\'m writing to follow up on my interview for the [Job Title] position on [Date]...'
      },
      {
        title: '任务 2：分析并重述 JD',
        instruction: '找一个你感兴趣的真实英文职位描述，用英语总结其 3 个核心要求（Core Requirements），并写一段话解释你的背景如何与其中一个要求 "aligns"。',
        example: 'Based on the JD, the three core requirements are... My background aligns with the first point because I have experience in...'
      },
      {
        title: '任务 3：模拟 Small Talk 寒暄',
        instruction: '面试开始前，HR 问你："Did you have any trouble finding our office?"（或如果是网申："Can you hear me clearly?"）。请给出一个既回答了问题，又能自然带出对面试期待的 2 句回答。',
        example: 'Yes, I can hear you perfectly! Thanks for checking. I\'ve been looking forward to our conversation today.'
      }
    ],
    saveablePhrases: [
      {
        phrase: "I'm checking in to see if there's any update on my application status.",
        category: "邮件",
        meaning: "我想确认一下申请状态是否有更新。"
      },
      {
        phrase: "Could you walk me through the interview process for this role?",
        category: "面试",
        meaning: "您能带我了解一下这个职位的面试流程吗？"
      },
      {
        phrase: "I'm very interested in the role and would appreciate any feedback.",
        category: "邮件",
        meaning: "我对该职位非常感兴趣，并感激任何反馈。"
      },
      {
        phrase: "What are the next steps in the selection process?",
        category: "面试",
        meaning: "选拔过程中的下一步安排是什么？"
      },
      {
        phrase: "How does the typical timeline for this recruitment look like?",
        category: "汇报",
        meaning: "这次招聘的典型时间线是怎样的？"
      },
      {
        phrase: "I noticed the JD mentions [Requirement], which aligns with my experience in [Field].",
        category: "面试",
        meaning: "我注意到 JD 提到了[要求]，这与我在[领域]的经验相匹配。"
      },
      {
        phrase: "Is there a revised timeline for shortlisting candidates?",
        category: "Small Talk",
        meaning: "关于入围名单筛选，有调整后的时间表吗？"
      },
      {
        phrase: "I would appreciate the chance to discuss how my skills align with the role.",
        category: "邮件",
        meaning: "我很感激能有机会讨论我的技能如何与该职位匹配。"
      }
    ],
    resources: [
      {
        name: "British Council — You're Hired",
        type: '英语学习系列',
        description: '招聘与选拔、面试语言、录用与跟进',
        why: '围绕真实求职流程，适合练习 job application、interview、follow-up language 和 interview communication。',
        url: 'https://learnenglish.britishcouncil.org/free-resources/business/youre-hired/episode-01'
      },
      {
        name: 'British Council — Business English',
        type: '学习资源合集',
        description: '工作与职位、招聘、邮件、面试',
        why: '覆盖 interview skills、business emails、business topics，适合作为求职路径的综合学习资源。',
        url: 'https://learnenglish.britishcouncil.org/free-resources/business'
      },
      {
        name: 'Harvard — Resumes & Cover Letter Guide',
        type: '大学 career guide',
        description: '简历与求职信、工作经历描述、求职材料准备',
        why: '适合学习 resume / cover letter 的结构、内容和表达，尤其适合把经历写得更具体、更 professional。',
        url: 'https://careerservices.fas.harvard.edu/resources/harvard-college-guide-to-resumes-cover-letters/'
      },
      {
        name: 'MIT — How to Write an Effective Cover Letter',
        type: '大学 career article',
        description: '求职信、申请邮件、职位匹配表达',
        why: '强调 cover letter 要针对具体职位，并用经历例子突出相关技能，适合训练 tailored application writing。',
        url: 'https://capd.mit.edu/resources/how-to-write-an-effective-cover-letter/'
      },
      {
        name: 'MIT — STAR Method for Behavioral Interviews',
        type: '大学 interview guide',
        description: '技能与资质、面试语言、behavioral interview',
        why: '适合训练 STAR 面试回答，让用户的答案更具体、更有结构，避免只说 "I learned a lot" 或 "I am good at communication"。',
        url: 'https://capd.mit.edu/resources/the-star-method-for-behavioral-interviews/'
      },
      {
        name: 'Berkeley Career Engagement — Interview Preparation',
        type: '大学 career guide',
        description: '面试语言、招聘与选拔、技能与资质',
        why: '系统整理了面试准备、常见问题、面试礼仪、结尾提问和 thank-you letter 等内容，适合帮助用户准备完整英文面试流程。',
        url: 'https://career.berkeley.edu/prepare-for-success/interviewing/interview-preparation/'
      }
    ]
  },
  // Unit 3: 技能与资质 / Skills and Qualifications
  'u3': {
    id: 'u3',
    title: '技能与资质',
    englishTitle: 'Skills and Qualifications',
    level: 'B2',
    objectives: [
      '学会用专业、具体的词汇描述核心技能（Hard Skills & Soft Skills）',
      '掌握「证据法」描述技能，避免空洞的自我评价（如 "I am good at..."）',
      '理解 Transferable Skills 的概念并在沟通中应用',
      '学会如何将抽象的个人特质（Qualifications）转化为职场竞争优势',
      '在面试或 Small Talk 中自然地向对方展示自己的专业背景'
    ],
    scenarios: [
      '面试中回答 "What are your core strengths?"',
      '在简历的 Skills 部分进行精准描述',
      '与 Mentor 讨论如何提升特定的职业资质',
      '在 Coffee Chat 中向对方解释自己的转行优势',
      '年度绩效评估中展示技能增长',
      'LinkedIn 个人技能背书申请',
      '面试时针对具体 JD 要求的技能对齐'
    ],
    vocabulary: [
      {
        expression: 'hard skills / technical skills',
        meaning: '硬技能 / 技术技能',
        context: '指可衡量的、具体的专业技能（如编程、会计、设计）',
        example: 'I have strong technical skills in data modeling and Python programming.'
      },
      {
        expression: 'soft skills / interpersonal skills',
        meaning: '软技能 / 人际交往技能',
        context: '指沟通、协作、领导力等非技术类能力',
        example: 'Effective communication is one of the most critical soft skills in this role.'
      },
      {
        expression: 'transferable skills',
        meaning: '可迁移技能',
        context: '指在不同行业或职位间通用的能力（如问题解决、时间管理）',
        example: 'My experience in teaching gave me transferable skills in public speaking and lesson planning.'
      },
      {
        expression: 'qualification',
        meaning: '资质、资历',
        context: '泛指教育背景、证书和工作经验的组合',
        example: 'I believe my qualifications align perfectly with the requirements for this position.'
      },
      {
        expression: 'proficiency / proficient in',
        meaning: '精通 / 熟练于',
        context: '描述技能掌握程度的正式词汇',
        example: 'I am proficient in Adobe Creative Suite, specifically Photoshop and Illustrator.'
      },
      {
        expression: 'expertise / expert in',
        meaning: '专业知识 / 专家',
        context: '强调深度和资历',
        example: 'She has over 10 years of expertise in digital marketing strategy.'
      },
      {
        expression: 'core strength',
        meaning: '核心优势',
        context: '面试中常用的自我定位词',
        example: 'One of my core strengths is my ability to simplify complex data for stakeholders.'
      },
      {
        expression: 'problem-solving skills',
        meaning: '解决问题的能力',
        context: '职场最看重的能力之一',
        example: 'I demonstrated strong problem-solving skills when handling the client crisis last year.'
      },
      {
        expression: 'analytical skills',
        meaning: '分析能力',
        context: '强调逻辑和数据处理',
        example: 'The role requires strong analytical skills to identify market trends.'
      },
      {
        expression: 'communication skills',
        meaning: '沟通能力',
        context: '包括口头和书面沟通',
        example: 'I have developed excellent communication skills through leading cross-functional teams.'
      },
      {
        expression: 'attention to detail',
        meaning: '注重细节',
        context: '常用于描述运营、财务或设计类工作',
        example: 'My high attention to detail ensures that all reports are accurate and error-free.'
      },
      {
        expression: 'self-motivated / proactive',
        meaning: '自我驱动的 / 积极主动的',
        context: '描述个人特质',
        example: 'We are looking for a proactive candidate who can take initiative without constant supervision.'
      },
      {
        expression: 'reliable / dependable',
        meaning: '可靠的',
        context: '强调稳定性和信任感',
        example: 'In my last role, I was known as a reliable team member who always met deadlines.'
      },
      {
        expression: 'adaptable / flexible',
        meaning: '适应力强的 / 灵活的',
        context: '在多变环境下的重要特质',
        example: 'Being adaptable allowed me to transition smoothly between different project teams.'
      },
      {
        expression: 'demonstrate / showcase',
        meaning: '展示、证明',
        context: '描述技能时常用的动词',
        example: 'I would like to demonstrate my ability to lead teams through this case study.'
      },
      {
        expression: 'develop / cultivate',
        meaning: '培养、获得',
        context: '描述技能增长过程',
        example: 'I have cultivated a strong network of industry contacts over the past five years.'
      },
      {
        expression: 'be familiar with',
        meaning: '熟悉',
        context: '描述中等程度的掌握',
        example: 'I am familiar with CRM software like Salesforce and HubSpot.'
      },
      {
        expression: 'relevant experience',
        meaning: '相关经验',
        context: '求职时强调背景契合度',
        example: 'I have three years of relevant experience in the retail industry.'
      },
      {
        expression: 'certificate / certification',
        meaning: '证书',
        context: '正式的资质证明',
        example: 'I hold a PMP certification for project management.'
      },
      {
        expression: 'competency',
        meaning: '胜任力',
        context: '企业选拔人才时的衡量标准',
        example: 'The interview focused on three core competencies: leadership, agility, and innovation.'
      }
    ],
    sentencePatterns: [
      {
        pattern: "I have [Number] years of experience in [Field/Skill].",
        meaning: "我在[领域/技能]有[数字]年的经验。",
        usage: "最基础但直接的资质陈述",
        example: "I have five years of experience in content marketing and SEO."
      },
      {
        pattern: "I am proficient in [Tool/Skill], and I've used it to [Task/Result].",
        meaning: "我精通[工具/技能]，并曾用它来[任务/结果]。",
        usage: "将技能与实际产出挂钩",
        example: "I am proficient in Excel, and I've used it to automate monthly financial reporting."
      },
      {
        pattern: "One of my core strengths is [Skill], which I demonstrated when I [specific action].",
        meaning: "我的核心优势之一是[技能]，我曾在[具体行动]时证明了这一点。",
        usage: "用证据支撑优势的经典句式",
        example: "One of my core strengths is adaptability, which I demonstrated when I successfully managed a sudden change in project scope."
      },
      {
        pattern: "I have developed [Skill] through [Experience/Project].",
        meaning: "我通过[经验/项目]培养了[技能]。",
        usage: "描述能力的成长来源",
        example: "I have developed strong negotiation skills through managing vendor relationships."
      },
      {
        pattern: "I am particularly skilled at [Action], which allows me to [Outcome].",
        meaning: "我特别擅长[动作]，这使我能够[结果]。",
        usage: "强调技能带来的实际价值",
        example: "I am particularly skilled at public speaking, which allows me to present complex ideas clearly to executives."
      },
      {
        pattern: "My qualifications include [Degree/Certificate] and [Skill/Experience].",
        meaning: "我的资质包括[学位/证书]和[技能/经验]。",
        usage: "全面概括个人背景",
        example: "My qualifications include a Master's degree in Economics and extensive experience in market research."
      },
      {
        pattern: "I have a proven track record of [Achieving Result].",
        meaning: "我在[达成结果]方面有良好的记录。",
        usage: "非常高阶的表达，强调持续的成功",
        example: "I have a proven track record of delivering projects on time and under budget."
      },
      {
        pattern: "In addition to my technical skills, I bring strong [Soft Skill] to the team.",
        meaning: "除了技术技能，我还为团队带来了强大的[软技能]。",
        usage: "平衡硬技能和软技能",
        example: "In addition to my analytical skills, I bring strong emotional intelligence and leadership to the team."
      },
      {
        pattern: "I am confident in my ability to [Action/Goal] based on my [Experience].",
        meaning: "基于我的[经验]，我有信心能够[动作/目标]。",
        usage: "表达信心时非常得体",
        example: "I am confident in my ability to scale the marketing efforts based on my success at the previous startup."
      },
      {
        pattern: "I consider [Skill] to be my greatest professional asset.",
        meaning: "我认为[技能]是我最大的职业资产。",
        usage: "高度自信的定位词",
        example: "I consider my ability to learn quickly to be my greatest professional asset in a fast-paced environment."
      }
    ],
    formalDialogue: {
      title: '面试场景：描述核心技能与优势',
      context: 'Candidate (应聘者) 正在回答面试官关于 "What are your greatest strengths?" 的问题。',
      conversation: [
        {
          speaker: 'Interviewer',
          text: "Can you tell me about your core strengths? Why should we consider you for this Project Manager role?"
        },
        {
          speaker: 'Candidate',
          text: "I'd say my core strength is a combination of strong technical project management and a highly adaptable communication style. I have a proven track record of managing cross-functional teams to deliver complex projects."
        },
        {
          speaker: 'Interviewer',
          text: "That's good to hear. Could you give me a specific example where you demonstrated those skills?"
        },
        {
          speaker: 'Candidate',
          text: "Certainly. In my previous role at XYZ Corp, I led a team of 10 through a major software integration. I demonstrated my analytical skills by identifying potential risks early in the process and developed a contingency plan that saved us two weeks of delay."
        },
        {
          speaker: 'Interviewer',
          text: "And how do you handle stakeholders who aren't as technical?"
        },
        {
          speaker: 'Candidate',
          text: "I consider my communication skills to be a major asset there. I'm proficient in translating technical requirements into clear, business-oriented outcomes. This ensures everyone is aligned, regardless of their background."
        },
        {
          speaker: 'Interviewer',
          text: "What about tools? Are you familiar with any specific project management software?"
        },
        {
          speaker: 'Candidate',
          text: "Yes, I am proficient in Jira and Asana. I've also developed a high level of expertise in Excel for budget tracking and resource allocation."
        },
        {
          speaker: 'Interviewer',
          text: "Great. It sounds like you have the right mix of hard and soft skills for this position."
        }
      ],
      learnableExpressions: [
        {
          expression: "Proven track record",
          explanation: "被证明过的良好记录（非常有力的职场用语）"
        },
        {
          expression: "Analytical skills",
          explanation: "分析能力（比 thinking deeper 更专业）"
        },
        {
          expression: "Contingency plan",
          explanation: "应急计划/备选方案（展现风险意识）"
        },
        {
          expression: "Business-oriented outcomes",
          explanation: "面向业务的结果（强调技术服务于业务）"
        },
        {
          expression: "Regardless of their background",
          explanation: "无论他们的背景如何。"
        },
        {
          expression: "Proficient in [Tool]",
          explanation: "精通某种工具。"
        },
        {
          expression: "Resource allocation",
          explanation: "资源配置（专业的管理术语）"
        },
        {
          expression: "Mix of hard and soft skills",
          explanation: "硬技能和软技能的结合。"
        }
      ],
      analysis: '在这段面试对话中，候选人避免了简单的自我吹嘘（如 "I am a good leader"），而是使用了证据驱动的表达（proven track record, led a team of 10）。通过将技术技能（Jira, Asana, Excel）与软技能（communication, stakeholder management）结合，展现了全方位的竞争力（competency）。'
    },
    smallTalkDialogue: {
      title: 'Small Talk：向 Mentor 寻求技能提升建议',
      context: 'Mentee 在 Coffee Chat 中向 Mentor 请教如何让自己的技能描述听起来更具体、更有说服力。',
      conversation: [
        {
          speaker: 'Mentor',
          text: "I took a look at your mock interview recording. One thing I noticed is that you use 'I am good at' a lot."
        },
        {
          speaker: 'Mentee',
          text: "Yeah, I've noticed that too. It feels a bit repetitive. How can I make my skills sound more professional without sounding like I'm bragging?"
        },
        {
          speaker: 'Mentor',
          text: "The key is to use 'evidence-based' language. Instead of just stating the skill, show the outcome. For example, instead of 'I'm good at communication,' what did you actually achieve?"
        },
        {
          speaker: 'Mentee',
          text: "Well, I managed to get two teams to agree on a new workflow that saved a lot of time. That involved a lot of meetings and persuasion."
        },
        {
          speaker: 'Mentor',
          text: "There you go! You could say, 'I have a strong ability to build consensus across teams, which I used to implement a new workflow that improved efficiency by 15%.' See how that sounds?"
        },
        {
          speaker: 'Mentee',
          text: "Wow, that sounds much more impressive. It's the same thing I did, but the phrasing makes it sound like a real achievement."
        },
        {
          speaker: 'Mentor',
          text: "Exactly. It's about 'demonstrating' the skill rather than just 'stating' it. It adds so much more credibility."
        },
        {
          speaker: 'Mentee',
          text: "That's a game-changer. I also want to highlight my SQL skills. Should I just say 'I'm proficient'?"
        },
        {
          speaker: 'Mentor',
          text: " 'Proficient' is good, but you can go deeper. Try, 'I have developed technical expertise in SQL through building automated dashboards.' It shows the 'how' and the 'what'."
        },
        {
          speaker: 'Mentee',
          text: "Thanks for the advice. This really helps me reframe how I think about my own experience."
        }
      ],
      learnableExpressions: [
        {
          expression: "Evidence-based",
          explanation: "基于证据的（专业沟通的核心原则）"
        },
        {
          expression: "Bragging",
          explanation: "吹嘘（指过度夸大自己）"
        },
        {
          expression: "Build consensus",
          explanation: "达成共识（高阶职场技能词）"
        },
        {
          expression: "Improved efficiency",
          explanation: "提高效率。"
        },
        {
          expression: "Phrasing",
          explanation: "措辞/表达方式。"
        },
        {
          expression: "Game-changer",
          explanation: "改变游戏规则的人/事（指影响巨大的转折点）"
        },
        {
          expression: "Reframe",
          explanation: "重新定义/换个角度看问题。"
        },
        {
          expression: "Go deeper",
          explanation: "深入探讨（不满足于表面描述）"
        }
      ],
      analysis: '这段对话演示了如何在非正式场合进行高质量的职业探讨。Mentor 提出了 "Evidence-based language" 的概念，即“用成果说话”。通过对比简单的陈述和带有成果的陈述，Mentee 学会了如何让自己的技能描述更具公信力（credibility）。'
    },
    commonMistakes: [
      {
        wrong: "I am good at Excel.",
        better: "I am proficient in Excel, specifically in using pivot tables and VLOOKUP to analyze large datasets.",
        explanation: "不要说 'good at'，要用 'proficient in' 或 'skilled at'，并补充你具体会用的功能和场景。"
      },
      {
        wrong: "I have communication skills.",
        better: "I possess strong communication skills, which allow me to collaborate effectively with both technical and non-technical stakeholders.",
        explanation: "技能不是 'have' 的，而是 'possess'（拥有）或 'demonstrated'（展示过）的。要说明技能带来的价值。"
      },
      {
        wrong: "I did project management many times.",
        better: "I have a proven track record in project management, having successfully delivered three major cross-functional projects.",
        explanation: "不要用 'did many times'，这听起来像是在说体力劳动。用 'proven track record' 展示专业深度。"
      },
      {
        wrong: "I am a fast learner.",
        better: "I have a demonstrated ability to learn complex systems quickly, such as when I mastered a new CRM tool within one week.",
        explanation: "人人都会说自己是 fast learner，所以一定要给出一个具体的时间线或案例作为证据。"
      },
      {
        wrong: "I know many hard skills and soft skills.",
        better: "I bring a strong combination of technical expertise and interpersonal skills to the team.",
        explanation: "不要直接说 'hard/soft skills' 这两个分类词，要说你带给团队的 'combination'（结合）。"
      }
    ],
    expressionUpgrades: [
      {
        basic: "I can use Python.",
        better: "I am proficient in Python for data analysis.",
        professional: "I possess technical expertise in Python, utilizing libraries like Pandas and NumPy to drive data-driven decision-making.",
        explanation: "从简单的“会用”到说明具体用途，再到列举具体工具（Pandas/NumPy）和业务目标。"
      },
      {
        basic: "I talk to people well.",
        better: "I have strong interpersonal skills.",
        professional: "I excel at building cross-functional relationships and managing diverse stakeholder expectations.",
        explanation: "从通俗的“会说话”升级到管理利益相关方（stakeholders）的专业高度。"
      },
      {
        basic: "I solved a problem.",
        better: "I have strong problem-solving skills.",
        professional: "I am highly effective at identifying root causes and implementing sustainable solutions for complex operational issues.",
        explanation: "使用 root causes（根本原因）和 sustainable solutions（可持续方案）展示解决问题的深度。"
      },
      {
        basic: "I have many certificates.",
        better: "I hold several industry-standard certifications.",
        professional: "I have successfully completed several professional development programs, including a PMP certification for project management.",
        explanation: "将“有很多证书”改为“完成了专业发展计划”，并给出具体例子。"
      },
      {
        basic: "I am an adaptable person.",
        better: "I am highly adaptable to changing environments.",
        professional: "I thrive in dynamic, fast-paced environments where agility and quick pivoting are required for success.",
        explanation: "使用 thrive（茁壮成长/游刃有余）和 pivot（转型/调整方向）这类地道的职场词汇。"
      }
    ],
    practiceTasks: [
      {
        title: '任务 1：技能描述改写',
        instruction: '选取你目前掌握的一个技能（如 Excel, Python, 或 Project Management），按照「技能名称 + 具体证据 + 产出结果」的公式写一个 50 词左右的描述。',
        example: 'I am proficient in SQL, which I used to build automated dashboards that reduced the time spent on manual reporting by 10 hours per week.'
      },
      {
        title: '任务 2：回答面试题 "What are your core strengths?"',
        instruction: '录制一段 1 分钟左右的回答，或者写下来。要求：包含一个硬技能和一个软技能，并且每个技能都要配有一个简短的案例（Evidence）。',
        example: 'One of my core strengths is attention to detail. For example, while reviewing a quarterly financial report I spotted a data inconsistency that others had missed — catching it early saved the team from presenting inaccurate figures to senior leadership. On the soft-skills side, I\'d say adaptability is my standout quality. When our project scope changed significantly mid-way, I quickly reprioritised my workload and kept us on schedule. Together, these two qualities make me a reliable and flexible contributor in fast-paced environments.'
      },
      {
        title: '任务 3：Transferable Skills 识别',
        instruction: '列出你过去一段非相关经历（如大学社团、兼职、或不同行业的实习），找出 3 个可以迁移到当前职位的 Transferable Skills，并解释原因。',
        example: 'Skill: Time Management. Reason: Balancing full-time study with a part-time job taught me how to prioritize tasks under pressure.'
      }
    ],
    saveablePhrases: [
      {
        phrase: "I have a proven track record of delivering projects on time and under budget.",
        category: "面试",
        meaning: "我在按时且不超支地交付项目方面有良好的记录。"
      },
      {
        phrase: "I consider my ability to build consensus across teams to be a core strength.",
        category: "汇报",
        meaning: "我认为我在团队间达成共识的能力是一项核心优势。"
      },
      {
        phrase: "I am proficient in [Tool], and I've used it to drive data-driven decision-making.",
        category: "面试",
        meaning: "我精通[工具]，并曾用它来驱动数据驱动的决策。"
      },
      {
        phrase: "I have developed strong [Skill] through managing [specific task/project].",
        category: "汇报",
        meaning: "我通过管理[特定任务/项目]培养了强大的[技能]。"
      },
      {
        phrase: "In addition to my technical expertise, I bring strong interpersonal skills to the team.",
        category: "面试",
        meaning: "除了技术专业知识，我还为团队带来了强大的人际交往能力。"
      },
      {
        phrase: "I thrive in dynamic environments where agility and quick pivoting are required.",
        category: "Small Talk",
        meaning: "我擅长在需要灵活性和快速调整方向的动态环境中工作。"
      },
      {
        phrase: "I am particularly skilled at translating technical requirements into business outcomes.",
        category: "汇报",
        meaning: "我特别擅长将技术要求转化为业务结果。"
      },
      {
        phrase: "One of my key assets is the ability to simplify complex concepts for non-technical stakeholders.",
        category: "面试",
        meaning: "我的一项关键优势是能为非技术利益相关方简化复杂概念。"
      }
    ],
    resources: [
      {
        name: "British Council — You're Hired",
        type: '英语学习系列',
        description: '招聘与选拔、面试语言、录用与跟进',
        why: '围绕真实求职流程，适合练习 job application、interview、follow-up language 和 interview communication。',
        url: 'https://learnenglish.britishcouncil.org/free-resources/business/youre-hired/episode-01'
      },
      {
        name: 'British Council — Business English',
        type: '学习资源合集',
        description: '工作与职位、招聘、邮件、面试',
        why: '覆盖 interview skills、business emails、business topics，适合作为求职路径的综合学习资源。',
        url: 'https://learnenglish.britishcouncil.org/free-resources/business'
      },
      {
        name: 'Harvard — Resumes & Cover Letter Guide',
        type: '大学 career guide',
        description: '简历与求职信、工作经历描述、求职材料准备',
        why: '适合学习 resume / cover letter 的结构、内容和表达，尤其适合把经历写得更具体、更 professional。',
        url: 'https://careerservices.fas.harvard.edu/resources/harvard-college-guide-to-resumes-cover-letters/'
      },
      {
        name: 'MIT — How to Write an Effective Cover Letter',
        type: '大学 career article',
        description: '求职信、申请邮件、职位匹配表达',
        why: '强调 cover letter 要针对具体职位，并用经历例子突出相关技能，适合训练 tailored application writing。',
        url: 'https://capd.mit.edu/resources/how-to-write-an-effective-cover-letter/'
      },
      {
        name: 'MIT — STAR Method for Behavioral Interviews',
        type: '大学 interview guide',
        description: '技能与资质、面试语言、behavioral interview',
        why: '适合训练 STAR 面试回答，让用户的答案更具体、更有结构，避免只说 "I learned a lot" 或 "I am good at communication"。',
        url: 'https://capd.mit.edu/resources/the-star-method-for-behavioral-interviews/'
      },
      {
        name: 'Berkeley Career Engagement — Interview Preparation',
        type: '大学 career guide',
        description: '面试语言、招聘与选拔、技能与资质',
        why: '系统整理了面试准备、常见问题、面试礼仪、结尾提问和 thank-you letter 等内容，适合帮助用户准备完整英文面试流程。',
        url: 'https://career.berkeley.edu/prepare-for-success/interviewing/interview-preparation/'
      }
    ]
  },

  // Unit 4: 简历与求职信 / CVs and Cover Letters
  'u4': {
    id: 'u4',
    title: '简历与求职信',
    englishTitle: 'CVs and Cover Letters',
    level: 'B2',
    objectives: [
      '学会使用强力动词（Action Verbs）来改写简历，增强成就感',
      '掌握「量化成果」（Quantifying Impact）的技巧，让经历更有说服力',
      '理解如何根据具体 JD 定制（Tailor）简历和求职信',
      '学会撰写具有吸引力的 Professional Summary，第一眼抓住招聘官',
      '掌握求职信的结构和语调，展示对岗位的强烈兴趣和匹配度'
    ],
    scenarios: [
      '修改简历中的工作描述（Bullet Points）',
      '撰写针对特定岗位的 Cover Letter 开头',
      '向 Mentor 寻求简历优化的反馈',
      '在 LinkedIn 个人简介中进行自我总结',
      '将琐碎的工作任务升级为「成就导向」的表达',
      '针对内推机会调整简历侧重点',
      '在邮件附件中发送求职材料时的简短说明'
    ],
    vocabulary: [
      {
        expression: 'professional summary / profile',
        meaning: '专业总结 / 个人简介',
        context: '简历顶部的 3-4 句概括，用于定调',
        example: 'Your professional summary should highlight your years of experience and core expertise.'
      },
      {
        expression: 'action verbs',
        meaning: '强力动词',
        context: '如 Led, Developed, Managed, Coordinated 等，用于开头描述经历',
        example: 'Use action verbs at the beginning of each bullet point to show initiative.'
      },
      {
        expression: 'achievement / accomplishment',
        meaning: '成就 / 成果',
        context: '强调工作结果而非仅仅是任务',
        example: 'Focus on your achievements rather than just listing your daily responsibilities.'
      },
      {
        expression: 'tailor / customize',
        meaning: '定制 / 针对性调整',
        context: '针对不同的岗位修改简历内容',
        example: 'It is essential to tailor your CV to the specific job description.'
      },
      {
        expression: 'align with',
        meaning: '与...一致 / 匹配',
        context: '强调个人经历与岗位需求的高度契合',
        example: 'Make sure your cover letter explains how your background aligns with their needs.'
      },
      {
        expression: 'contribute to',
        meaning: '为...做出贡献',
        context: '强调个人对团队或项目的积极影响',
        example: 'I contributed to the project success by optimizing the data collection process.'
      },
      {
        expression: 'quantify impact',
        meaning: '量化影响力',
        context: '使用百分比、金额、时间等数字来说明成果',
        example: 'Try to quantify your impact, for example: "increased sales by 15%".'
      },
      {
        expression: 'relevant experience',
        meaning: '相关经验',
        context: '简历中最重要的部分',
        example: 'Highlight your most relevant experience for this specific role.'
      },
      {
        expression: 'demonstrate interest',
        meaning: '展示兴趣',
        context: '在 Cover Letter 中解释为什么想去这家公司',
        example: 'Use the first paragraph of your cover letter to demonstrate genuine interest in the company.'
      },
      {
        expression: 'strong fit',
        meaning: '高度匹配',
        context: '形容自己是该职位的理想人选',
        example: 'I believe my technical background and leadership skills make me a strong fit for this team.'
      },
      {
        expression: 'bullet point',
        meaning: '项目符号 / 简历要点',
        context: '简历中描述经历的每一个点',
        example: 'Each bullet point should be concise and focused on a single achievement.'
      },
      {
        expression: 'quantifiable results',
        meaning: '可量化的结果',
        context: '强调结果的客观性和可证明性',
        example: 'Whenever possible, include quantifiable results to add credibility.'
      },
      {
        expression: 'transferable skills',
        meaning: '可迁移技能',
        context: '在跨行或转岗简历中非常关键',
        example: 'Emphasize your transferable skills if you are changing industries.'
      },
      {
        expression: 'header',
        meaning: '页眉 / 顶部信息',
        context: '简历最上面的联系方式等信息',
        example: 'Ensure your header includes your professional LinkedIn profile URL.'
      },
      {
        expression: 'font / layout',
        meaning: '字体 / 布局',
        context: '简历的视觉呈现',
        example: 'A clean layout and professional font make your resume much easier to read.'
      },
      {
        expression: 'keywords',
        meaning: '关键词',
        context: 'JD 中出现的术语，有助于通过 ATS 筛选',
        example: 'Integrate relevant keywords from the JD into your skills section.'
      },
      {
        expression: 'soft copy / hard copy',
        meaning: '电子版 / 纸质版',
        context: '简历的提交形式',
        example: 'Please send a soft copy of your resume in PDF format.'
      },
      {
        expression: 'reference',
        meaning: '证明人 / 推荐人',
        context: '有时简历末尾会提到 "References available upon request"',
        example: 'Prepare a separate list of professional references in case they ask.'
      },
      {
        expression: 'gap year / career break',
        meaning: '空档期 / 职业休止期',
        context: '解释简历中的时间空白',
        example: 'Be prepared to briefly explain any career breaks during the interview.'
      },
      {
        expression: 'concise',
        meaning: '简洁的',
        context: '简历写作的核心原则',
        example: 'Keep your cover letter concise; one page is usually enough.'
      }
    ],
    sentencePatterns: [
      {
        pattern: "Led [Project Name], resulting in [quantifiable outcome].",
        meaning: "领导了[项目名]，导致了[可量化的结果]。",
        usage: "描述管理和领导力成就",
        example: "Led a team of five to launch a new mobile app, resulting in 50,000 downloads in the first month."
      },
      {
        pattern: "Developed [System/Tool] to [Goal/Purpose].",
        meaning: "开发了[系统/工具]以实现[目标/目的]。",
        usage: "描述技术开发或流程优化",
        example: "Developed an automated inventory tracking system to reduce manual errors by 30%."
      },
      {
        pattern: "Collaborated with [Team] to [Action], which [Impact].",
        meaning: "与[团队]合作进行[动作]，从而[产生的影响]。",
        usage: "描述协作能力及其价值",
        example: "Collaborated with the product team to redesign the user dashboard, which improved user retention by 15%."
      },
      {
        pattern: "Managed [Task/Budget], delivering [Result] within [Timeline].",
        meaning: "管理了[任务/预算]，在[时间线]内交付了[结果]。",
        usage: "描述运营和执行力",
        example: "Managed a $10,000 monthly marketing budget, delivering a 25% increase in lead generation within 6 months."
      },
      {
        pattern: "I am writing to express my strong interest in the [Role] position at [Company].",
        meaning: "我写信是为了表达我对[公司]的[职位]岗位的浓厚兴趣。",
        usage: "Cover Letter 的标准开场白",
        example: "I am writing to express my strong interest in the Data Scientist position at ABC Tech."
      },
      {
        pattern: "My background in [Field] and my experience with [Skill] make me an ideal candidate for this role.",
        meaning: "我在[领域]的背景以及在[技能]方面的经验使我成为该职位的理想人选。",
        usage: "建立个人与职位的联系",
        example: "My background in civil engineering and my experience with CAD software make me an ideal candidate for this project."
      },
      {
        pattern: "I am particularly impressed by [Company's Achievement/Value], and I would welcome the opportunity to contribute to [Goal].",
        meaning: "我对[公司的成就/价值观]印象深刻，我非常欢迎能有机会为[目标]做出贡献。",
        usage: "展示对公司的了解和热情",
        example: "I am particularly impressed by your commitment to sustainable energy, and I would welcome the opportunity to contribute to your upcoming solar projects."
      },
      {
        pattern: "Through [Previous Role], I have gained a deep understanding of [Area], which I plan to apply to [New Role].",
        meaning: "通过[之前的职位]，我获得了对[领域]的深刻理解，我计划将其应用到[新职位]中。",
        usage: "展示经验的延续性和价值",
        example: "Through my role as a customer success manager, I have gained a deep understanding of client retention strategies, which I plan to apply to this account executive role."
      },
      {
        pattern: "I have included my resume for your review and look forward to the possibility of discussing my application with you.",
        meaning: "我随信附上了我的简历供您审阅，并期待有机会与您讨论我的申请。",
        usage: "Cover Letter 的标准结尾",
        example: "I have included my resume for your review and look forward to the possibility of discussing how I can add value to your team."
      },
      {
        pattern: "One of my proudest accomplishments was when I [Specific Achievement].",
        meaning: "我最引以为傲的成就之一是当我[具体成就]时。",
        usage: "在求职信中详细描述重点案例",
        example: "One of my proudest accomplishments was when I successfully negotiated a contract that saved the company $50,000 annually."
      }
    ],
    formalDialogue: {
      title: '正式辅导：Career Advisor 修改 Cover Letter',
      context: 'Career Advisor (职业顾问) 正在帮助 Student (学生) 修改一段过于笼统的 Cover Letter 开头。',
      conversation: [
        {
          speaker: 'Advisor',
          text: "I've reviewed your draft. Your opening paragraph says, 'I am a hard worker and I really want this job.' It's a bit too generic. How can we make it more specific to the company?"
        },
        {
          speaker: 'Student',
          text: "I see what you mean. I was trying to show my enthusiasm. Should I mention their recent expansion into the Asian market?"
        },
        {
          speaker: 'Advisor',
          text: "Exactly. That shows you've done your research. Instead of 'I want this job,' try something like, 'I am particularly impressed by your recent expansion into the Asian market and would welcome the opportunity to contribute my bilingual skills to this growth.'"
        },
        {
          speaker: 'Student',
          text: "That sounds much more professional. It connects my skills directly to their current goals."
        },
        {
          speaker: 'Advisor',
          text: "Precisely. Also, in the next section, you mentioned you 'helped with marketing.' Can we quantify that? Did you increase followers or engagement?"
        },
        {
          speaker: 'Student',
          text: "Yes, I actually managed the Instagram account and increased the follower count by about 20% in three months."
        },
        {
          speaker: 'Advisor',
          text: "That's a fantastic bullet point! Use it: 'Managed social media presence and grew Instagram following by 20% through targeted content strategy.' Numbers add instant credibility."
        },
        {
          speaker: 'Student',
          text: "Got it. So 'Managed' is the action verb, 'Instagram following' is the task, and '20%' is the quantifiable impact."
        },
        {
          speaker: 'Advisor',
          text: "Perfect. You've got the formula down. Now apply that to the rest of your resume."
        }
      ],
      learnableExpressions: [
        {
          expression: "A bit too generic",
          explanation: "有点太笼统了（常用的反馈词）"
        },
        {
          expression: "Done your research",
          explanation: "做了调研（表示你对公司很了解）"
        },
        {
          expression: "Connect skills to goals",
          explanation: "将技能与目标相连接。"
        },
        {
          expression: "Quantify that",
          explanation: "将其量化（职场沟通的核心技巧）"
        },
        {
          expression: "Bullet point",
          explanation: "简历中的要点。"
        },
        {
          expression: "Instant credibility",
          explanation: "瞬间的公信力/可信度。"
        },
        {
          expression: "Action verb",
          explanation: "强力动词（Led, Managed 等）"
        },
        {
          expression: "Formula",
          explanation: "公式/套路（指达成某种效果的固定方法）"
        }
      ],
      analysis: '在这段对话中，顾问通过引导学生将"态度词"（hard worker）转化为"成果词"（grew following by 20%）和"对齐词"（expansion into the Asian market），展示了简历优化的核心逻辑：具体化（Specific）、量化（Quantifiable）和针对性（Tailored）。'
    },
    smallTalkDialogue: {
      title: 'Small Talk：与同学讨论 Resume Bullet Points',
      context: '两个同学在图书馆休息时，自然地聊起如何把简历写得更 professional，互相给出建议。',
      conversation: [
        {
          speaker: 'Friend A',
          text: "I'm looking at my resume and 'helped with events' just sounds so... boring. Any ideas on how to spice it up?"
        },
        {
          speaker: 'Friend B',
          text: "Hmm, what kind of events were they? And what was your actual part in it?"
        },
        {
          speaker: 'Friend A',
          text: "It was for the Business Club. I basically sent out emails to guest speakers and booked the rooms."
        },
        {
          speaker: 'Friend B',
          text: "Okay, so you weren't just 'helping.' You were coordinating logistics. Why not say, 'Coordinated logistics for monthly guest speaker events, including venue booking and speaker outreach'?"
        },
        {
          speaker: 'Friend A',
          text: "Ooh, 'coordinated logistics' sounds way better than 'helped with.' It makes me sound like I was actually in charge of something."
        },
        {
          speaker: 'Friend B',
          text: "Right! And did you have a budget or a number of attendees?"
        },
        {
          speaker: 'Friend A',
          text: "We usually had about 50 people per event. No budget really, we just used school funds."
        },
        {
          speaker: 'Friend B',
          text: "Even better. 'Coordinated monthly events for 50+ attendees.' It gives the recruiter a sense of the scale."
        },
        {
          speaker: 'Friend A',
          text: "That's so helpful. I was overthinking it. It's just about finding the right action verbs, isn't it?"
        },
        {
          speaker: 'Friend B',
          text: "Exactly. It's not exaggerating, it's just describing your work more accurately."
        }
      ],
      learnableExpressions: [
        {
          expression: "Spice it up",
          explanation: "让它变得更有趣/更吸引人（非正式表达）"
        },
        {
          expression: "What was your actual part in it?",
          explanation: "你实际负责的部分是什么？"
        },
        {
          expression: "Coordinating logistics",
          explanation: "协调后勤/流程（非常专业且常用的表达）"
        },
        {
          expression: "Speaker outreach",
          explanation: "联系演讲嘉宾/外联。"
        },
        {
          expression: "In charge of something",
          explanation: "负责某事。"
        },
        {
          expression: "Sense of the scale",
          explanation: "规模感（让对方了解事情的大小）"
        },
        {
          expression: "Finding the right action verbs",
          explanation: "找到正确的强力动词。"
        },
        {
          expression: "Not exaggerating",
          explanation: "不是在夸大。"
        }
      ],
      analysis: '这段 Small Talk 展示了如何在同伴之间进行建设性的讨论。通过使用专业的职场词汇（logistics, outreach, scale），原本平平无奇的校园经历变得极具职场价值。语气自然、亲切，但讨论的核心逻辑非常专业。'
    },
    commonMistakes: [
      {
        wrong: "I am a very good team player.",
        better: "Collaborated with a cross-functional team of 6 to complete a marketing project under a tight deadline.",
        explanation: "不要直接标榜自己是 'team player'（这是主观评价）。用具体的协作案例来证明。"
      },
      {
        wrong: "Responsibility: Sending emails.",
        better: "Managed daily communication with 50+ clients via email, ensuring a 24-hour response time.",
        explanation: "简历中不要写 'Responsibility:'，直接用动词开头。并加上数字量化工作量。"
      },
      {
        wrong: "To whom it may concern,",
        better: "Dear [Hiring Manager Name], / Dear Hiring Manager,",
        explanation: "'To whom it may concern' 已经过时且太冷漠。尽量找到具体名字，或者用 'Dear Hiring Manager'。"
      },
      {
        wrong: "I want to apply this job because I need money.",
        better: "I am excited to apply for this role as it aligns with my passion for sustainable technology and my background in engineering.",
        explanation: "永远不要在求职信里说你需要钱或工作。要说你为什么能为公司创造价值。"
      },
      {
        wrong: "I did a lot of research for my manager.",
        better: "Conducted extensive market research and prepared summary reports to support executive decision-making.",
        explanation: "用 'Conducted' 替换 'did'，并说明研究的用途（support decision-making）。"
      }
    ],
    expressionUpgrades: [
      {
        basic: "Helped with the new website.",
        better: "Supported the development of the new company website.",
        professional: "Contributed to the full-lifecycle development of the corporate website, ensuring a seamless user experience across all devices.",
        explanation: "从'帮忙'到'支持开发'，再到'全生命周期开发'和'确保无缝用户体验'，专业度呈指数级增长。"
      },
      {
        basic: "Talked to customers.",
        better: "Communicated with clients regularly.",
        professional: "Managed high-level stakeholder communication and resolved complex client inquiries to maintain a 95% satisfaction rate.",
        explanation: "将简单的'说话'升级为'管理沟通'和'解决复杂咨询'，并附带量化指标。"
      },
      {
        basic: "I am good at time management.",
        better: "I have strong organizational and time management skills.",
        professional: "Highly skilled at prioritizing multiple projects under tight deadlines while maintaining a high standard of accuracy.",
        explanation: "从抽象的技能名称升级为描述你在高压环境下的具体表现（prioritizing under tight deadlines）。"
      },
      {
        basic: "I saw your job on LinkedIn.",
        better: "I am writing to apply for the position I saw on LinkedIn.",
        professional: "I am writing to express my enthusiastic interest in the [Role Name] position as advertised on LinkedIn.",
        explanation: "开场白使用 enthusiastic interest 和 advertised on，显得更加正式且充满热情。"
      },
      {
        basic: "I want to work for you.",
        better: "I am interested in joining your team.",
        professional: "I am eager to bring my expertise to [Company Name] and contribute to your continued success in the [Industry] sector.",
        explanation: "将重心从'我想为你工作'转移到'我想为你创造价值'和'贡献于你的成功'。"
      }
    ],
    practiceTasks: [
      {
        title: '任务 1：量化你的成就',
        instruction: '选取你目前简历上的一个 Bullet Point，尝试加入至少一个数字（%, $, 时间, 数量）。',
        example: 'Before: Answered customer calls.\nAfter: Handled 40+ customer inquiries daily with a 98% positive feedback rating.'
      },
      {
        title: '任务 2：撰写 Cover Letter 开头',
        instruction: '针对你心仪的一家公司，写一段 50-80 词的求职信开头。要求：包含职位名、你从哪里看到的、以及一句展示你对该公司"独家调研"的话。',
        example: 'I am writing to express my strong interest in the Product Marketing Manager position at TechVision Inc., which I discovered on LinkedIn last week. Having followed TechVision\'s recent launch of your AI-driven analytics platform, I was particularly impressed by how you positioned it not merely as a tool, but as a strategic growth partner for SMEs — a narrative I find both compelling and highly differentiated in today\'s market.'
      },
      {
        title: '任务 3：强力动词替换',
        instruction: '将以下句子中的 "did" 或 "helped" 替换为更专业的强力动词（如 Orchestrated, Spearheaded, Mentored, Streamlined 等）：\n1. I helped with the project organization.\n2. I did the team training last week.\n3. I helped to make the process faster.',
        example: '1. ✗ I helped with the project organization. → ✓ I orchestrated the end-to-end project coordination, aligning stakeholders across three departments.\n2. ✗ I did the team training last week. → ✓ I facilitated a hands-on training session for eight team members, covering new workflow tools and best practices.\n3. ✗ I helped to make the process faster. → ✓ I streamlined the approval workflow by introducing an automated tracking system, reducing turnaround time by 40%.'
      }
    ],
    saveablePhrases: [
      {
        phrase: "Led [Project Name], resulting in [quantifiable outcome].",
        category: "汇报",
        meaning: "领导了[项目名]，导致了[可量化的结果]。"
      },
      {
        phrase: "Developed an automated [System] to reduce [Issue] by [Percentage].",
        category: "汇报",
        meaning: "开发了自动化的[系统]以减少[问题]达[百分比]。"
      },
      {
        phrase: "I am writing to express my strong interest in the [Role] position at [Company].",
        category: "邮件",
        meaning: "我写信是为了表达我对[公司]的[职位]岗位的浓厚兴趣。"
      },
      {
        phrase: "My background in [Field] and my experience with [Skill] make me an ideal candidate for this role.",
        category: "面试",
        meaning: "我在[领域]的背景和技能经验使我成为该职位的理想人选。"
      },
      {
        phrase: "Collaborated with a cross-functional team to [Action], which improved [Outcome].",
        category: "汇报",
        meaning: "与跨职能团队合作[动作]，从而改善了[结果]。"
      },
      {
        phrase: "I am particularly impressed by [Company's Achievement] and would welcome the opportunity to contribute.",
        category: "邮件",
        meaning: "我对[公司的成就]印象深刻，并欢迎能有机会做出贡献。"
      },
      {
        phrase: "I have included my resume for your review and look forward to hearing from you.",
        category: "邮件",
        meaning: "随信附上我的简历供您审阅，期待收到您的回复。"
      },
      {
        phrase: "Successfully managed a [Amount] budget while delivering a [Percentage] growth.",
        category: "汇报",
        meaning: "成功管理了[金额]的预算，同时实现了[百分比]的增长。"
      }
    ],
    resources: [
      {
        name: "British Council — You're Hired",
        type: '英语学习系列',
        description: '招聘与选拔、面试语言、录用与跟进',
        why: '围绕真实求职流程，适合练习 job application、interview、follow-up language 和 interview communication。',
        url: 'https://learnenglish.britishcouncil.org/free-resources/business/youre-hired/episode-01'
      },
      {
        name: 'British Council — Business English',
        type: '学习资源合集',
        description: '工作与职位、招聘、邮件、面试',
        why: '覆盖 interview skills、business emails、business topics，适合作为求职路径的综合学习资源。',
        url: 'https://learnenglish.britishcouncil.org/free-resources/business'
      },
      {
        name: 'Harvard — Resumes & Cover Letter Guide',
        type: '大学 career guide',
        description: '简历与求职信、工作经历描述、求职材料准备',
        why: '适合学习 resume / cover letter 的结构、内容和表达，尤其适合把经历写得更具体、更 professional。',
        url: 'https://careerservices.fas.harvard.edu/resources/harvard-college-guide-to-resumes-cover-letters/'
      },
      {
        name: 'MIT — How to Write an Effective Cover Letter',
        type: '大学 career article',
        description: '求职信、申请邮件、职位匹配表达',
        why: '强调 cover letter 要针对具体职位，并用经历例子突出相关技能，适合训练 tailored application writing。',
        url: 'https://capd.mit.edu/resources/how-to-write-an-effective-cover-letter/'
      },
      {
        name: 'MIT — STAR Method for Behavioral Interviews',
        type: '大学 interview guide',
        description: '技能与资质、面试语言、behavioral interview',
        why: '适合训练 STAR 面试回答，让用户的答案更具体、更有结构，避免只说 "I learned a lot" 或 "I am good at communication"。',
        url: 'https://capd.mit.edu/resources/the-star-method-for-behavioral-interviews/'
      },
      {
        name: 'Berkeley Career Engagement — Interview Preparation',
        type: '大学 career guide',
        description: '面试语言、招聘与选拔、技能与资质',
        why: '系统整理了面试准备、常见问题、面试礼仪、结尾提问和 thank-you letter 等内容，适合帮助用户准备完整英文面试流程。',
        url: 'https://career.berkeley.edu/prepare-for-success/interviewing/interview-preparation/'
      }
    ]
  },

  // Placeholder units for u5, u6, and remaining paths
  // Unit 5: 面试语言 / Interview Language
  'u5': {
    id: 'u5',
    title: '面试语言',
    englishTitle: 'Interview Language',
    level: 'B2',
    objectives: [
      '学会用 STAR 原则（Situation, Task, Action, Result）结构化描述经历',
      '掌握如何礼貌地要求面试官澄清（Clarification）问题',
      '学习如何用积极、专业的语调处理棘手的面试问题',
      '掌握面试开场与结尾的社交礼仪（Social Etiquette）',
      '提升在面试中进行双向沟通（Asking Questions）的主动性'
    ],
    scenarios: [
      '面试开场时的 Small Talk',
      '回答行为面试题（Behavioral Questions）',
      '处理没听清或不理解的问题',
      '向面试官提问（Reverse Interviewing）',
      '讨论期望薪资与入职时间（初步阶段）',
      '视频面试中的技术沟通（网速、声音等）',
      '面试结束时的礼貌道别'
    ],
    vocabulary: [
      {
        expression: 'STAR technique',
        meaning: 'STAR 法则',
        context: 'Situation, Task, Action, Result 的缩写，行为面试的核心公式',
        example: 'To structure your behavioral answers, always follow the STAR technique.'
      },
      {
        expression: 'clarify / clarification',
        meaning: '澄清 / 解释',
        context: '用于没听清或不确定的情况',
        example: 'Could you please clarify what you mean by "stakeholder alignment"?'
      },
      {
        expression: 'behavioral question',
        meaning: '行为面试题',
        context: '通常以 "Tell me about a time when..." 开头的问题',
        example: 'Behavioral questions are designed to assess your past performance as a predictor of future success.'
      },
      {
        expression: 'social etiquette',
        meaning: '社交礼仪',
        context: '面试中展现出的修养和礼貌',
        example: 'Proper social etiquette in an interview starts with a firm handshake or a polite virtual greeting.'
      },
      {
        expression: 'reverse interviewing',
        meaning: '反向提问',
        context: '候选人向面试官提问环节',
        example: 'Reverse interviewing is your chance to evaluate if the company is a good fit for you.'
      },
      {
        expression: 'strengths and weaknesses',
        meaning: '优点与缺点',
        context: '经典的面试考察点',
        example: 'Be honest but strategic when discussing your strengths and weaknesses.'
      },
      {
        expression: 'career aspirations',
        meaning: '职业抱负',
        context: '关于未来计划和动力的描述',
        example: 'The interviewer will likely ask about your long-term career aspirations.'
      },
      {
        expression: 'conflict resolution',
        meaning: '冲突解决',
        context: '考察软技能的常见话题',
        example: 'Give an example that demonstrates your conflict resolution skills within a team.'
      },
      {
        expression: 'take initiative',
        meaning: '主动采取行动',
        context: '描述积极工作态度的核心词',
        example: 'I take initiative by identifying problems before they escalate.'
      },
      {
        expression: 'adaptability',
        meaning: '适应能力',
        context: '在多变环境下的竞争力',
        example: 'My adaptability helped me transition smoothly during the company merger.'
      },
      {
        expression: 'firm handshake',
        meaning: '有力的握手',
        context: '传统线下面试的第一印象（网面可用眼神交流替代）',
        example: 'A firm handshake conveys confidence and professionalism.'
      },
      {
        expression: 'eye contact',
        meaning: '眼神交流',
        context: '展现自信的重要非言语沟通',
        example: 'Maintaining good eye contact shows that you are engaged in the conversation.'
      },
      {
        expression: 'follow-up question',
        meaning: '跟进问题',
        context: '基于面试官回答的深入提问',
        example: 'Asking a smart follow-up question shows that you were listening carefully.'
      },
      {
        expression: 'panel interview',
        meaning: '小组面试',
        context: '多名面试官对一名的形式',
        example: 'In a panel interview, try to address each interviewer individually.'
      },
      {
        expression: 'first impression',
        meaning: '第一印象',
        context: '面试前 30 秒的关键',
        example: 'Your attire and punctuality contribute significantly to your first impression.'
      },
      {
        expression: 'wrap up',
        meaning: '结束、收尾',
        context: '面试最后的总结陈述',
        example: 'Let\'s wrap up the session with any final questions you might have.'
      },
      {
        expression: 'stand out',
        meaning: '脱颖而出',
        context: '在众多候选人中表现优异',
        example: 'A well-prepared candidate will naturally stand out from the rest.'
      },
      {
        expression: 'vibe / atmosphere',
        meaning: '氛围 / 气息',
        context: '描述公司 culture 给你的感觉',
        example: 'I really enjoyed the collaborative vibe I sensed during the office tour.'
      },
      {
        expression: 'rapport',
        meaning: '融洽关系',
        context: '与面试官建立的良好互动',
        example: 'Building rapport early in the interview can make the whole process much smoother.'
      },
      {
        expression: 'closing statement',
        meaning: '结束语',
        context: '最后重申兴趣和感谢的陈述',
        example: 'Prepare a strong closing statement to leave a lasting positive impression.'
      }
    ],
    sentencePatterns: [
      {
        pattern: "To give you more context, in my previous role at [Company]...",
        meaning: "为了给您提供更多背景信息，在我之前在[公司]的职位中...",
        usage: "在回答具体问题前铺垫背景",
        example: "To give you more context, in my previous role at ABC Tech, we were facing a major decline in user engagement."
      },
      {
        pattern: "Could you please elaborate on [specific point]?",
        meaning: "您能详细说明一下[特定点]吗？",
        usage: "礼貌要求面试官提供更多细节",
        example: "Could you please elaborate on the day-to-day responsibilities of this position?"
      },
      {
        pattern: "I'm not sure I quite followed. Are you asking about [Interpretation A] or [Interpretation B]?",
        meaning: "我不确定我是否完全理解了。您是在问[解读 A]还是[解读 B]？",
        usage: "确认理解，避免答非所问",
        example: "I'm not sure I quite followed. Are you asking about my technical skills or my leadership experience in that project?"
      },
      {
        pattern: "That's a great question. Let me take a moment to consider that.",
        meaning: "这是一个很好的问题。请让我花一点时间思考一下。",
        usage: "争取思考时间，显得沉稳而不慌张",
        example: "That's a great question. Let me take a moment to consider a specific example that fits."
      },
      {
        pattern: "The result was that we [quantifiable outcome], which led to [business impact].",
        meaning: "结果是我们[量化结果]，这导致了[业务影响]。",
        usage: "STAR 法则中的 R 部分，强调产出",
        example: "The result was that we increased efficiency by 20%, which led to a cost saving of $50k annually."
      },
      {
        pattern: "I believe my skills in [Skill A] and [Skill B] would allow me to [Solve a Problem] for your team.",
        meaning: "我相信我在[技能 A]和[技能 B]方面的能力将使我能够为您的团队[解决某个问题]。",
        usage: "将个人优势与公司需求挂钩",
        example: "I believe my skills in data analysis and visualization would allow me to provide clearer insights for your marketing team."
      },
      {
        pattern: "What does success look like for someone in this role after [Number] months?",
        meaning: "对于这个职位的候选人来说，[数字]个月后的成功标准是什么？",
        usage: "反向提问，展示对结果的关注",
        example: "What does success look like for someone in this role after the first six months?"
      },
      {
        pattern: "Thank you for the detailed overview. It sounds like a challenging yet exciting opportunity.",
        meaning: "感谢您的详细概述。这听起来是一个充满挑战但也令人兴奋的机会。",
        usage: "积极反馈面试官的介绍",
        example: "Thank you for the detailed overview of the team structure. It sounds like a challenging yet exciting opportunity."
      },
      {
        pattern: "If I may ask, how would you describe the [company culture] here?",
        meaning: "如果可以问的话，您会如何描述这里的[公司文化]？",
        usage: "礼貌开启反向提问环节",
        example: "If I may ask, how would you describe the management style within the engineering department?"
      },
      {
        pattern: "I really appreciate your time today and look forward to hearing about the next steps.",
        meaning: "我非常感激您今天的时间，并期待听到关于下一步的消息。",
        usage: "面试结束时的完美礼貌用语",
        example: "I really appreciate your time and the insights you shared today. I look forward to hearing about the next steps."
      }
    ],
    formalDialogue: {
      title: '面试实战：回答行为面试题',
      context: 'Interviewer 问 Candidate 一个经典的挑战类问题："Tell me about a time when you had to deal with a difficult colleague."',
      conversation: [
        {
          speaker: 'Interviewer',
          text: "Tell me about a time when you faced a conflict with a team member. How did you handle it?"
        },
        {
          speaker: 'Candidate',
          text: "That's a great question. To give you some context, last year we were working on a tight deadline for a product launch."
        },
        {
          speaker: 'Interviewer',
          text: "Okay, what was the specific situation?"
        },
        {
          speaker: 'Candidate',
          text: "The lead designer and I had different ideas about the user interface. He felt my data-driven suggestions were limiting his creativity. My task was to ensure the design stayed user-friendly while respecting his artistic vision."
        },
        {
          speaker: 'Interviewer',
          text: "And what action did you take?"
        },
        {
          speaker: 'Candidate',
          text: "Instead of arguing in the group meeting, I invited him for a coffee chat. I started by acknowledging his expertise and explained that my goal was to support the design with data, not replace it. We decided to A/B test both versions."
        },
        {
          speaker: 'Interviewer',
          text: "Interesting. What was the result?"
        },
        {
          speaker: 'Candidate',
          text: "The result was that the A/B test showed a clear preference for a hybrid version. Not only did we launch on time, but our relationship improved significantly. It taught me the importance of building rapport outside of formal meetings."
        },
        {
          speaker: 'Interviewer',
          text: "That's a very professional way to handle conflict. Thank you for sharing."
        }
      ],
      learnableExpressions: [
        {
          expression: "Deal with a difficult colleague",
          explanation: "处理与难相处的同事的关系。"
        },
        {
          expression: "Data-driven suggestions",
          explanation: "基于数据的建议（展现专业性）"
        },
        {
          expression: "Artistic vision",
          explanation: "艺术愿景/审美追求（表示对他人的尊重）"
        },
        {
          expression: "Acknowledging his expertise",
          explanation: "认可他的专业知识（冲突解决的关键一步）"
        },
        {
          expression: "A/B test both versions",
          explanation: "对两个版本进行 A/B 测试（用数据说话的客观方法）"
        },
        {
          expression: "Hybrid version",
          explanation: "混合版本（折中/融合的方案）"
        },
        {
          expression: "Building rapport",
          explanation: "建立融洽关系。"
        },
        {
          expression: "Outside of formal meetings",
          explanation: "在正式会议之外（展现灵活的沟通策略）"
        }
      ],
      analysis: '候选人完美使用了 STAR 原则。Situation（项目上线压力）、Task（协调数据与设计）、Action（线下私下沟通 + A/B 测试）、Result（上线成功 + 关系改善）。语气始终保持中立，没有贬低同事，而是专注于"解决问题"和"团队目标"，展现了极高的情商和专业度。'
    },
    smallTalkDialogue: {
      title: 'Small Talk：面试开始前的寒暄',
      context: '面试官接通了视频电话，在正式提问前进行简短的破冰。',
      conversation: [
        {
          speaker: 'Interviewer',
          text: "Hi there! Can you hear and see me clearly?"
        },
        {
          speaker: 'Candidate',
          text: "Hi! Yes, I can hear you perfectly. The connection seems great on my end. How's your morning going so far?"
        },
        {
          speaker: 'Interviewer',
          text: "It's been a busy one, but good! Thanks for asking. Did you have any trouble getting onto the platform?"
        },
        {
          speaker: 'Candidate',
          text: "Not at all. The instructions you sent were very clear. I actually enjoyed reading the latest company update on your blog while I was waiting."
        },
        {
          speaker: 'Interviewer',
          text: "Oh, that's great to hear! Our PR team just published that. What did you think of the new partnership we announced?"
        },
        {
          speaker: 'Candidate',
          text: "It's quite impressive. It seems like a major step toward your expansion in the EU market. I'm excited to learn more about how that affects the product roadmap today."
        },
        {
          speaker: 'Interviewer',
          text: "I love that initiative. Alright, let's dive into the formal part of the interview, shall we?"
        }
      ],
      learnableExpressions: [
        {
          expression: "On my end",
          explanation: "在我这边（视频会议常用语）"
        },
        {
          expression: "Busy one",
          explanation: "忙碌的一天（指代 day 或 morning）"
        },
        {
          expression: "Trouble getting onto...",
          explanation: "登录/进入...有困难吗？"
        },
        {
          expression: "Latest company update",
          explanation: "公司最新的动态（展示你一直在关注）"
        },
        {
          expression: "Quite impressive",
          explanation: "非常令人印象深刻。"
        },
        {
          expression: "Major step toward...",
          explanation: "朝向...迈出的一大步。"
        },
        {
          expression: "Product roadmap",
          explanation: "产品路线图。"
        },
        {
          expression: "Dive into...",
          explanation: "潜入/进入...（指开始正式讨论）"
        }
      ],
      analysis: '这段寒暄中，候选人不仅回答了技术性问题（声音画面），还巧妙地提到了公司最新的博客内容。这是一种高级的 Small Talk，既展示了积极主动（Initiative），又向面试官暗示了自己对岗位的深切热情。面试官最后说 "I love that initiative"，说明这种破冰非常成功。'
    },
    commonMistakes: [
      {
        wrong: "I don't have any questions for you.",
        better: "Actually, I have a couple of questions. What does a typical day look like for this team?",
        explanation: "永远不要说'没问题'。这会被解读为对岗位缺乏兴趣或准备不足。哪怕问团队文化也可以。"
      },
      {
        wrong: "I want to know how much I will be paid.",
        better: "I was wondering what the typical salary range is for this position at this stage.",
        explanation: "太早且太直接地问薪资（尤其是第一轮）会显得目的性过强。使用 'I was wondering...' 且放在面试后半段。"
      },
      {
        wrong: "I am a very hard worker, you should hire me.",
        better: "Given my experience in [X], I believe I can contribute to your [Y] goals effectively.",
        explanation: "不要只是自吹自擂。要给出理由（Given my experience）并说明你能带来的价值（contribute to goals）。"
      },
      {
        wrong: "Wait, I don't understand your word.",
        better: "I'm sorry, could you please clarify what you mean by that term?",
        explanation: "不要说 'don't understand your word'，这听起来像是在质疑面试官。用 'clarify' 表示是你想更准确地理解。"
      },
      {
        wrong: "My last boss was very bad.",
        better: "I am looking for a new challenge where I can have more room for professional growth.",
        explanation: "绝对不要在面试中吐槽前东家或老板。要把离职原因转化为对'新挑战'和'成长'的追求。"
      }
    ],
    expressionUpgrades: [
      {
        basic: "I did a lot of things in my last job.",
        better: "I held various responsibilities in my previous role.",
        professional: "I managed a diverse portfolio of tasks, ranging from project coordination to stakeholder engagement.",
        explanation: "使用 diverse portfolio（多元化的任务组合）和 ranging from... to... 展示工作的深度和广度。"
      },
      {
        basic: "I am good at fixing problems.",
        better: "I have strong problem-solving skills.",
        professional: "I excel at identifying operational bottlenecks and implementing strategic solutions to improve efficiency.",
        explanation: "使用 bottlenecks（瓶颈）和 strategic solutions（战略方案）比简单的 'fixing problems' 更有管理高度。"
      },
      {
        basic: "Tell me about the company.",
        better: "What can you tell me about the company culture?",
        professional: "Could you provide some insights into how the company supports professional development and long-term career growth?",
        explanation: "从泛泛的“告诉我公司的情况”升级为具体的“职业发展支持和长期成长”，展示你的职业规划。"
      },
      {
        basic: "I am nervous but ready.",
        better: "I'm a bit excited to be here today.",
        professional: "I'm very enthusiastic about this opportunity and look forward to a productive conversation.",
        explanation: "不要说 nervous。用 enthusiastic（热情）代替，并强调 productive conversation（多产/有效的对话）。"
      },
      {
        basic: "I can start next month.",
        better: "I am available to start in four weeks.",
        professional: "I have a standard four-week notice period, but I am eager to transition as smoothly as possible.",
        explanation: "提及 notice period（通知期/离职期）和 transition（过渡），展示你对当前雇主的专业态度。"
      }
    ],
    practiceTasks: [
      {
        title: '任务 1：STAR 原则练习',
        instruction: '选取你过去的一个成功案例，按照 STAR（背景、任务、行动、结果）四个部分各写 1-2 句话。',
        example: 'S: Our team was losing 20% of customers.\nT: I had to find why and fix it.\nA: I interviewed 50 customers and found a UI bug.\nR: We fixed it and retention grew by 15%.'
      },
      {
        title: '任务 2：准备 3 个反向提问',
        instruction: '针对你感兴趣的职位，写下 3 个你想问面试官的问题。要求：一个关于团队，一个关于成功标准，一个关于未来规划。',
        example: '1. How does the team handle conflicting priorities?\n2. What are the top qualities of someone who excels in this role?\n3. Where do you see this department heading in the next 2 years?'
      },
      {
        title: '任务 3：录制破冰 Small Talk',
        instruction: '模拟面试开始，面试官问："How are you today?"。请给出一个包含“心情不错 + 提到一点公司研究 + 反观”的 3 句话回答。',
        example: 'I\'m doing really well, thank you for asking! I had a productive morning — I was actually reading about your company\'s recent expansion into Southeast Asia, which I found genuinely exciting and closely aligned with my own career interests. How about yourself — how has your day been going so far?'
      }
    ],
    saveablePhrases: [
      {
        phrase: "To give you more context, in my previous role at [Company]...",
        category: "面试",
        meaning: "为了给您提供更多背景信息，在我之前在[公司]的职位中..."
      },
      {
        phrase: "The result was that we [Outcome], which led to a [Benefit].",
        category: "汇报",
        meaning: "结果是我们[结果]，这导致了[好处]。"
      },
      {
        phrase: "Could you please elaborate on the day-to-day responsibilities of this position?",
        category: "面试",
        meaning: "您能详细说明一下这个职位的日常职责吗？"
      },
      {
        phrase: "What does success look like for someone in this role after six months?",
        category: "面试",
        meaning: "对于这个职位的候选人来说，六个月后的成功标准是什么？"
      },
      {
        phrase: "That's a great question. Let me take a moment to consider that.",
        category: "Small Talk",
        meaning: "这是一个很好的问题。请让我花一点时间思考一下。"
      },
      {
        phrase: "I'm not sure I quite followed. Are you asking about [A] or [B]?",
        category: "面试",
        meaning: "我不确定我是否完全理解了。您是在问[A]还是[B]？"
      },
      {
        phrase: "I really appreciate your time today and look forward to hearing about the next steps.",
        category: "邮件",
        meaning: "我非常感激您今天的时间，并期待听到关于下一步的消息。"
      },
      {
        phrase: "I believe my background in [Field] aligns perfectly with the goals of this team.",
        category: "面试",
        meaning: "我相信我在[领域]的背景与这个团队的目标完全吻合。"
      }
    ],
    resources: [
      {
        name: "British Council — You're Hired",
        type: '英语学习系列',
        description: '招聘与选拔、面试语言、录用与跟进',
        why: '围绕真实求职流程，适合练习 job application、interview、follow-up language 和 interview communication。',
        url: 'https://learnenglish.britishcouncil.org/free-resources/business/youre-hired/episode-01'
      },
      {
        name: 'British Council — Business English',
        type: '学习资源合集',
        description: '工作与职位、招聘、邮件、面试',
        why: '覆盖 interview skills、business emails、business topics，适合作为求职路径的综合学习资源。',
        url: 'https://learnenglish.britishcouncil.org/free-resources/business'
      },
      {
        name: 'Harvard — Resumes & Cover Letter Guide',
        type: '大学 career guide',
        description: '简历与求职信、工作经历描述、求职材料准备',
        why: '适合学习 resume / cover letter 的结构、内容和表达，尤其适合把经历写得更具体、更 professional。',
        url: 'https://careerservices.fas.harvard.edu/resources/harvard-college-guide-to-resumes-cover-letters/'
      },
      {
        name: 'MIT — How to Write an Effective Cover Letter',
        type: '大学 career article',
        description: '求职信、申请邮件、职位匹配表达',
        why: '强调 cover letter 要针对具体职位，并用经历例子突出相关技能，适合训练 tailored application writing。',
        url: 'https://capd.mit.edu/resources/how-to-write-an-effective-cover-letter/'
      },
      {
        name: 'MIT — STAR Method for Behavioral Interviews',
        type: '大学 interview guide',
        description: '技能与资质、面试语言、behavioral interview',
        why: '适合训练 STAR 面试回答，让用户的答案更具体、更有结构，避免只说 "I learned a lot" 或 "I am good at communication"。',
        url: 'https://capd.mit.edu/resources/the-star-method-for-behavioral-interviews/'
      },
      {
        name: 'Berkeley Career Engagement — Interview Preparation',
        type: '大学 career guide',
        description: '面试语言、招聘与选拔、技能与资质',
        why: '系统整理了面试准备、常见问题、面试礼仪、结尾提问和 thank-you letter 等内容，适合帮助用户准备完整英文面试流程。',
        url: 'https://career.berkeley.edu/prepare-for-success/interviewing/interview-preparation/'
      }
    ]
  },
  // Unit 6: 录用与跟进 / Job Offer and Follow-Up
  'u6': {
    id: 'u6',
    title: '录用与跟进',
    englishTitle: 'Job Offer and Follow-Up',
    level: 'B2',
    objectives: [
      '掌握接到录取通知（Job Offer）时的专业回应话术',
      '学会礼貌且专业地协商薪资与福利（Salary Negotiation）',
      '学习如何撰写正式的录用确认函或有礼貌的拒绝信',
      '掌握入职前的准备性沟通，包括确认入职细节和材料',
      '学会在入职前与未来的团队成员或经理保持适度的专业互动'
    ],
    scenarios: [
      '接到录用电话时的口头回应',
      '就 Offer 中的特定条款进行邮件沟通',
      '薪资谈判（Negotiation Chat）',
      '确认入职日期与远程/办公安排',
      '撰写正式的 Offer Acceptance Email',
      '有礼貌地拒绝一个 Offer',
      '入职前向新经理发送问候并确认准备工作'
    ],
    vocabulary: [
      {
        expression: 'job offer',
        meaning: '录取通知',
        context: '公司正式表示愿意雇用你的通知',
        example: 'I am delighted to extend a formal job offer to you for the Analyst position.'
      },
      {
        expression: 'compensation package',
        meaning: '薪酬方案',
        context: '包括工资、奖金、福利、股票等全套方案',
        example: 'We are still finalizing the compensation package, but it will include health insurance.'
      },
      {
        expression: 'base salary',
        meaning: '底薪 / 基本工资',
        context: '固定薪资部分',
        example: 'The base salary for this role is very competitive for the local market.'
      },
      {
        expression: 'benefits',
        meaning: '福利',
        context: '除工资外的补贴、保险、带薪休假等',
        example: 'The company offers a robust benefits package, including remote work flexibility.'
      },
      {
        expression: 'counter-offer',
        meaning: '柜台出价 / 反向提议',
        context: '在薪资协商中提出的更高要求',
        example: 'I am considering making a counter-offer to better align with my experience.'
      },
      {
        expression: 'negotiate / negotiation',
        meaning: '谈判 / 协商',
        context: '就合同条款达成一致的过程',
        example: 'Negotiation is a standard part of the hiring process; don\'t be afraid to ask.'
      },
      {
        expression: 'onboarding',
        meaning: '入职引导 / 入职流程',
        context: '新员工加入公司初期的过程',
        example: 'Our onboarding process starts with a three-day orientation program.'
      },
      {
        expression: 'start date',
        meaning: '入职日期',
        context: '正式上班的第一天',
        example: 'We would like you to have a start date of June 1st.'
      },
      {
        expression: 'acceptance email',
        meaning: '录用接受邮件',
        context: '正式回复接受 Offer 的邮件',
        example: 'Please send your signed contract and acceptance email by end of day Friday.'
      },
      {
        expression: 'rejection letter',
        meaning: '拒绝信',
        context: '有礼貌地告知对方你不接受该 Offer',
        example: 'Writing a polite rejection letter helps maintain professional relationships.'
      },
      {
        expression: 'sign-on bonus',
        meaning: '签约奖金',
        context: '入职时一次性发放的奖金',
        example: 'They offered a sign-on bonus to sweeten the deal.'
      },
      {
        expression: 'equity / stock options',
        meaning: '股权 / 股票期权',
        context: '初创公司或大厂常见的激励方式',
        example: 'The offer includes 5,000 stock options vesting over four years.'
      },
      {
        expression: 'notice period',
        meaning: '离职通知期',
        context: '离职前需要留给原单位的提前告知时间',
        example: 'I need to check my current contract for the exact notice period.'
      },
      {
        expression: 'vesting period',
        meaning: '授予期 / 归属期',
        context: '股权可以正式归属给你的等待时间',
        example: 'There is a one-year cliff on the vesting period of these options.'
      },
      {
        expression: 'non-compete clause',
        meaning: '竞业禁止条款',
        context: '限制离职后去竞争对手公司的条款',
        example: 'Please review the non-compete clause carefully before signing.'
      },
      {
        expression: 'relocation allowance',
        meaning: '搬迁补贴',
        context: '为异地入职提供的搬家或临时住宿费用',
        example: 'Does the offer include a relocation allowance for moving from Shanghai to Beijing?'
      },
      {
        expression: 'probation period',
        meaning: '试用期',
        context: '入职后考察双方契合度的时间段',
        example: 'There is a standard three-month probation period for all new hires.'
      },
      {
        expression: 'written confirmation',
        meaning: '书面确认',
        context: '非口头的正式记录',
        example: 'I will send you the written confirmation of our discussed terms via email.'
      },
      {
        expression: 'professional references',
        meaning: '职业推荐人',
        context: '用于背景调查的相关联系人',
        example: 'We are currently contacting your professional references as the final step.'
      },
      {
        expression: 'smooth transition',
        meaning: '平稳过渡',
        context: '从旧工作切换到新工作的理想状态',
        example: 'My priority is ensuring a smooth transition for my current team before I leave.'
      }
    ],
    sentencePatterns: [
      {
        pattern: "I am absolutely thrilled to receive this offer for [Role].",
        meaning: "收到[职位]的录用通知，我感到非常激动。",
        usage: "初次听到 Offer 时的积极回应",
        example: "I am absolutely thrilled to receive this offer for the Senior Design role."
      },
      {
        pattern: "Thank you for the detailed offer. I would like to [review the terms] before getting back to you.",
        meaning: "感谢详尽的录用方案。在回复您之前，我想先[审阅一下条款]。",
        usage: "礼貌争取考虑时间",
        example: "Thank you for the detailed offer. I would like to review the benefits package and discuss it with my family before getting back to you tomorrow."
      },
      {
        pattern: "Based on [my experience and current market data], I was looking for a salary closer to [Amount].",
        meaning: "基于[我的经验和当前市场数据]，我期待的薪资更接近[金额]。",
        usage: "薪资谈判的礼貌开头",
        example: "Based on my five years of experience in data science, I was looking for a base salary closer to $120k."
      },
      {
        pattern: "Are the [benefits/equity/bonus] terms open for negotiation?",
        meaning: "[福利/期权/奖金]条款是可以协商的吗？",
        usage: "询问是否有谈判空间",
        example: "I appreciate the base salary offer. Are the relocation benefits also open for negotiation?"
      },
      {
        pattern: "I am happy to [formally accept] the offer as discussed.",
        meaning: "我很开心能按照讨论的内容[正式接受]该 Offer。",
        usage: "正式接受录用的核心句型",
        example: "I am happy to formally accept the offer as discussed in our call yesterday."
      },
      {
        pattern: "While I am impressed by the company, I have decided to accept [another opportunity].",
        meaning: "虽然公司给我留下了深刻印象，但我已决定接受[另一个机会]。",
        usage: "礼貌拒绝 Offer",
        example: "While I am impressed by the team's vision, I have decided to accept another opportunity that aligns more closely with my current goals."
      },
      {
        pattern: "Could we confirm the [start date] and any [onboarding requirements]?",
        meaning: "我们能确认一下[入职日期]和任何[入职要求]吗？",
        usage: "确认入职细节",
        example: "Could we confirm the start date and any documents I need to provide for the onboarding process?"
      },
      {
        pattern: "I'm looking forward to [joining the team] and contributing to [Company's success].",
        meaning: "我期待[加入团队]并为[公司的成功]做出贡献。",
        usage: "入职前的积极表态",
        example: "I'm looking forward to joining the team next Monday and contributing to your upcoming growth projects."
      },
      {
        pattern: "Is there anything [I can prepare] before my first day?",
        meaning: "在我第一天上班前，有什么[我可以准备]的吗？",
        usage: "展示主动性和专业度",
        example: "Is there anything specific I can prepare or any reading materials you recommend before my first day?"
      },
      {
        pattern: "I would appreciate [written confirmation] of our verbal agreement.",
        meaning: "如果您能对我们的口头协议提供[书面确认]，我将不胜感激。",
        usage: "确保口头承诺落地",
        example: "I would appreciate written confirmation of the remote-work flexibility we discussed earlier."
      }
    ],
    formalDialogue: {
      title: '正式通话：接受录用通知',
      context: 'Recruiter 拨通了 Candidate 的电话，口头通知对方获得了录用。',
      conversation: [
        {
          speaker: 'Recruiter',
          text: "Hi Alex, I have some great news! We'd like to officially offer you the position of Senior Analyst."
        },
        {
          speaker: 'Candidate',
          text: "Wow, that's fantastic! Thank you so much for the update, Sarah. I'm really excited about this opportunity."
        },
        {
          speaker: 'Recruiter',
          text: "We're excited to have you. The base salary will be $90,000, plus a 10% annual bonus and full health benefits."
        },
        {
          speaker: 'Candidate',
          text: "I appreciate the details. The compensation package sounds competitive. When would you need a formal decision by?"
        },
        {
          speaker: 'Recruiter',
          text: "We'd love to hear back by this Friday. I'll send the full contract to your email right after this call."
        },
        {
          speaker: 'Candidate',
          text: "Perfect. I'll review everything as soon as it arrives. Does the contract also include the remote work policy we discussed?"
        },
        {
          speaker: 'Recruiter',
          text: "Yes, the 'hybrid model' is explicitly mentioned in the agreement. You'll see it under Section 4."
        },
        {
          speaker: 'Candidate',
          text: "Great. Thank you for walking me through it. I'll be in touch by Friday at the latest."
        },
        {
          speaker: 'Recruiter',
          text: "Sounds good, Alex. Talk to you soon!"
        }
      ],
      learnableExpressions: [
        {
          expression: "Fantastic news",
          explanation: "极好的消息（表达兴奋的自然反应）"
        },
        {
          expression: "Competitive package",
          explanation: "有竞争力的（薪酬）方案。"
        },
        {
          expression: "Formal decision",
          explanation: "正式决定（用于确认答复时间）"
        },
        {
          expression: "Hear back by...",
          explanation: "在...之前收到回复。"
        },
        {
          expression: "Send right after this call",
          explanation: "通话结束后立即发送。"
        },
        {
          expression: "Explicitly mentioned",
          explanation: "被明确提及（用于确认关键条款）"
        },
        {
          expression: "Hybrid model",
          explanation: "混合办公模式。"
        },
        {
          expression: "In touch by...",
          explanation: "在...之前联系。"
        }
      ],
      analysis: '在这段对话中，候选人表现得既热情又专业。面对 Offer，Alex 并没有因为兴奋而立即口头签约，而是礼貌地询问了决策期限（formal decision）和具体的远程办公条款（explicitly mentioned）。这种做法确保了双方对核心承诺有一致的理解，为后续签约打下了稳固基础。'
    },
    smallTalkDialogue: {
      title: 'Small Talk：入职前的团队问候',
      context: '候选人已接受 Offer，在正式入职前给未来的经理发信息或在 LinkedIn 上互动。',
      conversation: [
        {
          speaker: 'Future Manager',
          text: "Hi Alex! So glad to see you've accepted the offer. We're all looking forward to having you on board."
        },
        {
          speaker: 'Candidate',
          text: "Thanks, Mark! I'm really happy it's all finalized. I've already started reading up on your latest product launch."
        },
        {
          speaker: 'Future Manager',
          text: "That's great! No rush though, enjoy your transition time. Are you all set for the first day?"
        },
        {
          speaker: 'Candidate',
          text: "Almost! I'm just wrapping up a few things at my current company. Is there anything specific you suggest I look into before Monday?"
        },
        {
          speaker: 'Future Manager',
          text: "Not really. Just make sure you've filled out the HR portal stuff. We'll grab lunch together on your first day to introduce you to the team."
        },
        {
          speaker: 'Candidate',
          text: "Sounds like a plan! I'm really excited to meet everyone. See you on Monday morning!"
        }
      ],
      learnableExpressions: [
        {
          expression: "On board",
          explanation: "加入团队（职场常用表达）"
        },
        {
          expression: "Finalized",
          explanation: "定下来了/最终敲定了。"
        },
        {
          expression: "No rush",
          explanation: "不急（展现上级的体谅）"
        },
        {
          expression: "Transition time",
          explanation: "过渡期。"
        },
        {
          expression: "All set",
          explanation: "准备就绪。"
        },
        {
          expression: "Grab lunch",
          explanation: "一起吃顿午饭（职场社交常用）"
        },
        {
          expression: "Sounds like a plan",
          explanation: "听起来不错/就这么定了。"
        }
      ],
      analysis: '入职前的 Small Talk 旨在建立好感和降低双方的不确定性。候选人通过询问 "Is there anything I can prepare?" 展示了积极的工作态度，而经理通过邀请午餐（Grab lunch）传递了欢迎的信号。这种沟通有助于缓解第一天入职的紧张感。'
    },
    commonMistakes: [
      {
        wrong: "I accept the job. When do I get the money?",
        better: "I am happy to accept the offer. Could you clarify the typical payroll cycle?",
        explanation: "不要问 'get the money'，这太粗鲁。用 'accept the offer' 搭配询问 'payroll cycle'（发薪周期）。"
      },
      {
        wrong: "I want more salary because I am expensive.",
        better: "Given the specialized skills I bring to the role, I was hoping to discuss a base salary closer to [Amount].",
        explanation: "永远不要说自己 'expensive'。要强调你带来的 'specialized skills'（专业技能）和 'value'（价值）。"
      },
      {
        wrong: "I cannot join you. Bye.",
        better: "Thank you for the offer, but I have decided to go in a different direction at this time. I hope our paths cross again.",
        explanation: "拒绝 Offer 时要保持体面。'Go in a different direction' 是通用的职场拒绝语，末尾祝愿 'paths cross again' 留有余地。"
      },
      {
        wrong: "I will sign it now without reading.",
        better: "I'll take some time to review the details and return the signed copy by [Date].",
        explanation: "不要说不看就签，这显得你不严谨。无论多兴奋，都要表示会 'review the details'（查看细节）。"
      },
      {
        wrong: "Where is my computer and desk?",
        better: "I'm curious about the hardware and workspace setup for the first day.",
        explanation: "不要直接索要电脑和桌子。用 'workspace setup'（工位设置）这种更职业化的词。"
      }
    ],
    expressionUpgrades: [
      {
        basic: "I accept the job.",
        better: "I am pleased to formally accept your offer.",
        professional: "I am delighted to accept the offer for the [Role Name] position and look forward to contributing to the team's success.",
        explanation: "从简单的“接受”升级为“很高兴正式接受”并重申对团队的贡献。"
      },
      {
        basic: "I want more pay.",
        better: "I'd like to negotiate the salary.",
        professional: "I would like to discuss whether there is any flexibility in the base salary component of the offer.",
        explanation: "使用 flexibility（灵活性）和 component（组成部分）会让薪资谈判听起来更客观、更不具有攻击性。"
      },
      {
        basic: "When is my first day?",
        better: "Could you confirm my start date?",
        professional: "Could we finalize the logistical details regarding my start date and first-day reporting instructions?",
        explanation: "使用 logistical details（后勤细节）和 reporting instructions（报到说明）展现出极强的职业化沟通水平。"
      },
      {
        basic: "I need to talk to my current boss first.",
        better: "I need to finalize my resignation process.",
        professional: "I need to ensure a professional handover and finalize my transition with my current employer before confirming the date.",
        explanation: "使用 professional handover（专业交接）展示了你对职业道德的重视，这会让新东家更欣赏你。"
      },
      {
        basic: "I hope we can work together later.",
        better: "I hope we can stay in touch.",
        professional: "I would appreciate staying connected and hope our professional paths cross in the future.",
        explanation: "使用 stay connected 和 professional paths cross 展现了高阶的职场人际连接意识。"
      }
    ],
    practiceTasks: [
      {
        title: '任务 1：撰写接受 Offer 邮件',
        instruction: '撰写一封 50-80 词的录用接受邮件。包含：确认职位名、表达兴奋、确认入职日期、询问后续入职材料。',
        example: 'Subject: Offer Acceptance - [Your Name] - [Role Name]\n\nDear [Name],\n\nI am delighted to formally accept the offer for the [Role Name] position...'
      },
      {
        title: '任务 2：薪资谈判话术模拟',
        instruction: '如果你拿到的 Offer 薪资低于你的预期 $5,000，尝试写一段话礼貌地向 HR 提出协商请求。要求：先肯定 Offer，再给出理由，最后提出具体数字。',
        example: 'I am very excited about the role. However, given my background in [X], I was wondering if there is any flexibility to bring the base salary to [Amount]?'
      },
      {
        title: '任务 3：录制入职前问候',
        instruction: '给新经理发一段语音或文字问候。内容：表达对入职的期待，询问是否需要提前阅读什么资料。',
        example: 'Hi Sarah, I hope this message finds you well. I\'m reaching out ahead of my start date on Monday — I just wanted to say how genuinely excited I am to be joining the team. I was also wondering if there are any documents, tools, or reading resources you\'d recommend I look at beforehand, so I can hit the ground running from day one. Please feel free to point me in any direction you think would be most helpful. Looking forward to meeting you in person!'
      }
    ],
    saveablePhrases: [
      {
        phrase: "I am absolutely thrilled to receive this offer and look forward to joining the team.",
        category: "面试",
        meaning: "收到录用通知我非常激动，并期待加入团队。"
      },
      {
        phrase: "I would appreciate a moment to review the terms before providing a formal decision.",
        category: "邮件",
        meaning: "如果您能给我一点时间审阅条款后再做正式决定，我将不胜感激。"
      },
      {
        phrase: "I was hoping for something closer to [Amount], based on my experience and current market rates.",
        category: "面试",
        meaning: "我期待的薪资更接近[金额]，基于我的经验和当前市场水平。"
      },
      {
        phrase: "I am happy to formally accept the offer as discussed.",
        category: "邮件",
        meaning: "我很开心能按照讨论的内容正式接受该 Offer。"
      },
      {
        phrase: "Is there anything specific I can prepare or look into before my first day?",
        category: "Small Talk",
        meaning: "在我第一天上班前，有什么具体的事情是我可以准备或了解的吗？"
      },
      {
        phrase: "I would like to discuss whether there is any flexibility in the benefits package.",
        category: "面试",
        meaning: "我想讨论一下福利方案中是否有任何灵活调整的空间。"
      },
      {
        phrase: "I have decided to accept another opportunity that aligns more closely with my current goals.",
        category: "邮件",
        meaning: "我已决定接受另一个与我当前目标更契合的机会。"
      },
      {
        phrase: "I look forward to ensuring a smooth transition and contributing to your success.",
        category: "汇报",
        meaning: "我期待能确保平稳过渡并为您的成功做出贡献。"
      }
    ],
    resources: [
      {
        name: "British Council — You're Hired",
        type: '英语学习系列',
        description: '招聘与选拔、面试语言、录用与跟进',
        why: '围绕真实求职流程，适合练习 job application、interview、follow-up language 和 interview communication。',
        url: 'https://learnenglish.britishcouncil.org/free-resources/business/youre-hired/episode-01'
      },
      {
        name: 'British Council — Business English',
        type: '学习资源合集',
        description: '工作与职位、招聘、邮件、面试',
        why: '覆盖 interview skills、business emails、business topics，适合作为求职路径的综合学习资源。',
        url: 'https://learnenglish.britishcouncil.org/free-resources/business'
      },
      {
        name: 'Harvard — Resumes & Cover Letter Guide',
        type: '大学 career guide',
        description: '简历与求职信、工作经历描述、求职材料准备',
        why: '适合学习 resume / cover letter 的结构、内容和表达，尤其适合把经历写得更具体、更 professional。',
        url: 'https://careerservices.fas.harvard.edu/resources/harvard-college-guide-to-resumes-cover-letters/'
      },
      {
        name: 'MIT — How to Write an Effective Cover Letter',
        type: '大学 career article',
        description: '求职信、申请邮件、职位匹配表达',
        why: '强调 cover letter 要针对具体职位，并用经历例子突出相关技能，适合训练 tailored application writing。',
        url: 'https://capd.mit.edu/resources/how-to-write-an-effective-cover-letter/'
      },
      {
        name: 'MIT — STAR Method for Behavioral Interviews',
        type: '大学 interview guide',
        description: '技能与资质、面试语言、behavioral interview',
        why: '适合训练 STAR 面试回答，让用户的答案更具体、更有结构，避免只说 "I learned a lot" 或 "I am good at communication"。',
        url: 'https://capd.mit.edu/resources/the-star-method-for-behavioral-interviews/'
      },
      {
        name: 'Berkeley Career Engagement — Interview Preparation',
        type: '大学 career guide',
        description: '面试语言、招聘与选拔、技能与资质',
        why: '系统整理了面试准备、常见问题、面试礼仪、结尾提问和 thank-you letter 等内容，适合帮助用户准备完整英文面试流程。',
        url: 'https://career.berkeley.edu/prepare-for-success/interviewing/interview-preparation/'
      }
    ]
  },
  
  // Unit 7: 入职第一天 / Onboarding & First Day
  'n1': {
    id: 'n1',
    title: '入职第一天',
    englishTitle: 'Onboarding & First Day',
    level: 'B1-B2',
    objectives: [
      '掌握不同场合下的自我介绍模版（电梯演讲、团队会议、非正式寒暄）',
      '学会礼貌地询问新同事的职位、职责和团队结构',
      '掌握如何用专业的方式向他人介绍自己的专业背景和过往经验',
      '学习入职第一天常见的社交礼仪与沟通禁忌',
      '掌握基本的破冰（Ice-breaking）话术，建立初步职场人际关系'
    ],
    scenarios: [
      '入职第一天的全员邮件或群组打招呼',
      '在部门会议上的正式自我介绍',
      '在茶水间或走廊遇到的非正式寒暄',
      '向邻座同事询问基础行政信息（如打印机、系统账号）',
      '参加新员工入职培训（Orientation）时的互动',
      '与经理的第一次 1-on-1 沟通',
      '向跨部门合作伙伴介绍自己'
    ],
    vocabulary: [
      {
        expression: 'onboarding / orientation',
        meaning: '入职引导 / 迎新培训',
        context: '加入新公司时的适应过程',
        example: 'Our orientation session starts at 9 AM in the main conference room.'
      },
      {
        expression: 'elevator pitch',
        meaning: '电梯演讲',
        context: '用 30 秒左右时间清晰介绍自己的精华版本',
        example: 'Prepare a short elevator pitch for when you meet senior management.'
      },
      {
        expression: 'ice-breaker',
        meaning: '破冰话题',
        context: '开启陌生谈话的简短话题',
        example: '"Is this your first time at this office?" is a great ice-breaker.'
      },
      {
        expression: 'reporting line',
        meaning: '汇报线',
        context: '组织架构中你的上级是谁',
        example: 'Can you clarify my reporting line? Do I report directly to you?'
      },
      {
        expression: 'cross-functional',
        meaning: '跨职能 / 跨部门',
        context: '涉及不同部门之间的协作',
        example: 'I love working on cross-functional projects because I learn so much.'
      },
      {
        expression: 'workflow',
        meaning: '工作流程',
        context: '任务从开始到完成的一系列步骤',
        example: 'I\'m still getting used to the team\'s specific workflow for approvals.'
      },
      {
        expression: 'colleague / peer',
        meaning: '同事 / 同级',
        context: '在同一公司或同一层级工作的人',
        example: 'My peers are very supportive and always willing to help.'
      },
      {
        expression: 'department / division',
        meaning: '部门',
        context: '公司内的职能划分',
        example: 'Which department are you in? I\'m in the Marketing division.'
      },
      {
        expression: 'point of contact (POC)',
        meaning: '联系人 / 接口人',
        context: '负责某项具体业务的人',
        example: 'Who is the main point of contact for IT support here?'
      },
      {
        expression: 'office tour',
        meaning: '办公室参观',
        context: '带新员工熟悉办公环境',
        example: 'Our HR manager gave us a quick office tour after the meeting.'
      },
      {
        expression: 'get up to speed',
        meaning: '跟上进度 / 熟悉情况',
        context: '快速学习并达到正常工作水平',
        example: 'It usually takes about two weeks to get up to speed on this software.'
      },
      {
        expression: 'role and responsibilities',
        meaning: '职位与职责',
        context: '你被雇用来具体做什么',
        example: 'Let\'s sit down and discuss your key role and responsibilities for this quarter.'
      },
      {
        expression: 'probation',
        meaning: '试用期',
        context: '新工作的考察阶段',
        example: 'I\'m currently in my probation period, so I\'m focusing on learning as much as I can.'
      },
      {
        expression: 'mentorship',
        meaning: '师徒制 / 导师制',
        context: '由经验丰富的人指导新人的制度',
        example: 'The company has a great mentorship program for new hires.'
      },
      {
        expression: 'company culture',
        meaning: '公司文化',
        context: '公司的核心价值观和氛围',
        example: 'Our company culture is very collaborative and low-hierarchy.'
      },
      {
        expression: 'socialize',
        meaning: '社交 / 联络感情',
        context: '工作之外的职场互动',
        example: 'We often socialize after work on Fridays at the nearby cafe.'
      },
      {
        expression: 'introductions',
        meaning: '介绍',
        context: '使人互相认识的过程',
        example: 'Let\'s start the meeting with some quick introductions.'
      },
      {
        expression: 'workspace',
        meaning: '工位 / 工作空间',
        context: '你办公的具体地方',
        example: 'You can set up your workspace at this desk for now.'
      },
      {
        expression: 'handover',
        meaning: '交接',
        context: '任务或岗位的移交',
        example: 'I\'ll be handling the handover for the previous project manager.'
      },
      {
        expression: 'background / experience',
        meaning: '背景 / 经验',
        context: '你过往的职业履历',
        example: 'My background is mainly in digital marketing and SEO.'
      }
    ],
    sentencePatterns: [
      {
        pattern: "I've recently joined the team as a [Job Title].",
        meaning: "我最近加入了团队，担任[职位]。",
        usage: "最标准的入职开场白",
        example: "I've recently joined the team as a Senior UX Designer."
      },
      {
        pattern: "Before this, I was working at [Company] where I [Key Achievement].",
        meaning: "在这之前，我在[公司]工作，在那里我[关键成就]。",
        usage: "简述过往经验",
        example: "Before this, I was working at Google where I led the mobile app optimization project."
      },
      {
        pattern: "I'm really looking forward to [collaborating/learning/contributing] with you all.",
        meaning: "我非常期待与大家[协作/学习/贡献]。",
        usage: "表达积极的态度",
        example: "I'm really looking forward to collaborating with the engineering team on the new launch."
      },
      {
        pattern: "Who would be the best person to talk to regarding [Topic]?",
        meaning: "关于[话题]，我应该找谁谈最合适？",
        usage: "入职初期寻找对应联系人",
        example: "Who would be the best person to talk to regarding our expense reimbursement policy?"
      },
      {
        pattern: "Could you please give me a brief overview of how [System/Process] works?",
        meaning: "您能简要向我介绍一下[系统/流程]是如何运作的吗？",
        usage: "礼貌请求指导",
        example: "Could you please give me a brief overview of how the CRM system works here?"
      },
      {
        pattern: "I'm still getting my head around [Process], so please bear with me.",
        meaning: "我还在努力熟悉[流程]，请多多包涵。",
        usage: "委婉表达自己是新人，可能动作稍慢",
        example: "I'm still getting my head around the internal approval process, so please bear with me."
      },
      {
        pattern: "Nice to meet you! How long have you been with [Company]?",
        meaning: "很高兴认识你！你在[公司]工作多久了？",
        usage: "经典的破冰问题",
        example: "Nice to meet you, Sarah! How long have you been with the Marketing team?"
      },
      {
        pattern: "If you have a moment later, I'd love to learn more about [your role/the team].",
        meaning: "如果您晚些时候有空，我想更多地了解一下[您的职责/团队]。",
        usage: "邀约简短的交流或 Coffee Chat",
        example: "If you have a moment later, I'd love to learn more about the sales targets for this month."
      },
      {
        pattern: "What's the best way to reach you if I have any quick questions?",
        meaning: "如果我有简短的问题，联系您的最佳方式是什么？",
        usage: "确认沟通偏好（Slack/邮件/面谈）",
        example: "What's the best way to reach you if I have any quick questions about the data report?"
      },
      {
        pattern: "Thanks for the warm welcome! I'm happy to be on board.",
        meaning: "谢谢热情的欢迎！我很高兴加入公司。",
        usage: "回复他人的欢迎辞",
        example: "Thanks for the warm welcome, everyone! I'm happy to be on board and get started."
      }
    ],
    formalDialogue: {
      title: '正式场景：部门会议上的自我介绍',
      context: 'Team Lead 介绍新入职的成员 Alex 给全组同事认识。',
      conversation: [
        {
          speaker: 'Team Lead',
          text: "Everyone, I'd like to introduce Alex, our new Data Analyst who just joined us today."
        },
        {
          speaker: 'Alex',
          text: "Hi everyone! I'm thrilled to be part of the team. My name is Alex, and as Mark mentioned, I'll be working on the business intelligence reports."
        },
        {
          speaker: 'Colleague A',
          text: "Welcome, Alex! Where were you before joining us?"
        },
        {
          speaker: 'Alex',
          text: "Thanks! Before this, I spent three years at a fintech startup, focusing on customer behavior analysis. I'm really looking forward to bringing some of those insights here."
        },
        {
          speaker: 'Team Lead',
          text: "Alex has a lot of experience with SQL and Tableau, so he'll be a great resource for our upcoming project."
        },
        {
          speaker: 'Alex',
          text: "Exactly. If anyone has questions about data visualization or needs a hand with reports, feel free to reach out. I'm excited to collaborate with all of you!"
        }
      ],
      learnableExpressions: [
        {
          expression: "I'd like to introduce...",
          explanation: "我想介绍...（正式介绍他人的标准句式）"
        },
        {
          expression: "Thrilled to be part of the team",
          explanation: "非常激动能成为团队的一员。"
        },
        {
          expression: "Where were you before joining us?",
          explanation: "在加入我们之前你在哪里（工作）？"
        },
        {
          expression: "Focusing on...",
          explanation: "专注于...（描述过往职责的核心动词）"
        },
        {
          expression: "Great resource",
          explanation: "很好的资源（指某人在某方面非常有帮助）"
        },
        {
          expression: "Feel free to reach out",
          explanation: "随时联系我。"
        }
      ],
      analysis: 'Alex 的介绍非常平衡：第一部分是“身份确认”和“入职兴奋感”；第二部分是“过往背景”；第三部分是“能为团队提供的价值”。这种介绍不仅让人记住了他的名字，还让同事们知道在什么情况下可以寻求他的帮助，是非常成功的职场开场。'
    },
    smallTalkDialogue: {
      title: '非正式场景：茶水间的破冰',
      context: 'Alex 在茶水间接咖啡，遇到了另一位不认识的同事 Jane。',
      conversation: [
        {
          speaker: 'Alex',
          text: "Hi! I'm Alex. I just started today with the Data team. I'm still trying to figure out how this coffee machine works!"
        },
        {
          speaker: 'Jane',
          text: "Haha, welcome! I'm Jane from HR. It's a bit tricky, isn't it? Here, let me show you. You have to press this button twice."
        },
        {
          speaker: 'Alex',
          text: "Ah, I see! Thanks, Jane. That's a lifesaver. How long have you been working here?"
        },
        {
          speaker: 'Jane',
          text: "I've been here for about two years now. How's your first day going so far?"
        },
        {
          speaker: 'Alex',
          text: "It's been great! Everyone is very welcoming. I'm just trying to get up to speed on the internal systems today."
        },
        {
          speaker: 'Jane',
          text: "I remember my first day, it can be overwhelming! If you have any questions about the office or where to find good lunch spots, just let me know."
        },
        {
          speaker: 'Alex',
          text: "That's very kind of you. I'll definitely take you up on that lunch suggestion! By the way, do people usually head out for lunch or eat at their desks?"
        },
        {
          speaker: 'Jane',
          text: "A bit of both. Most of us head to the deli around the corner on Fridays. It's a nice way to decompress. You're welcome to join us this week if you're free!"
        },
        {
          speaker: 'Alex',
          text: "I'd love to! Count me in. It'll be great to meet more people in a relaxed setting."
        },
        {
          speaker: 'Jane',
          text: "Perfect! I'll ping you on Slack with the details. Oh, and if you need anything else—like where the supply closet is or how to book a conference room—just ask!"
        },
        {
          speaker: 'Alex',
          text: "Thanks so much, Jane. I really appreciate the warm welcome. See you around!"
        }
      ],
      learnableExpressions: [
        {
          expression: "Figure out how [Something] works",
          explanation: "弄明白某物是如何运作的（很好的破冰借口）"
        },
        {
          expression: "It's a bit tricky",
          explanation: "有点复杂/有点难搞。"
        },
        {
          expression: "Lifesaver",
          explanation: "救星（非正式场合的幽默夸张）"
        },
        {
          expression: "Get up to speed on...",
          explanation: "熟悉/跟上...的进度。"
        },
        {
          expression: "Overwhelming",
          explanation: "让人应接不暇的/压力大的。"
        },
        {
          expression: "Lunch spots",
          explanation: "吃午饭的好去处。"
        },
        {
          expression: "Take you up on that",
          explanation: "接受（你的提议/建议）。"
        }
      ],
      analysis: 'Alex 巧妙地利用“不会用咖啡机”作为一个自然的破冰借口。在 Small Talk 中，适度展示新人的“小困难”反而能迅速拉近关系，因为这给了对方提供帮助的机会。Jane 的回复也非常友好，两人迅速建立了跨部门的初步联系。'
    },
    commonMistakes: [
      {
        wrong: "I am the new staff.",
        better: "I've recently joined as the new [Job Title].",
        explanation: "'Staff' 是不可数名词或指代全体员工。个人应该说 'member of staff' 或更具体的 'new [Job Title]'。"
      },
      {
        wrong: "My English is not good, sorry.",
        better: "I'm still getting used to the specific terminology here, so please bear with me.",
        explanation: "不要一上来就否定自己的语言能力。换成“还在熟悉专业术语”，既解释了沟通中的迟滞，又显得专业。"
      },
      {
        wrong: "Tell me what I should do now.",
        better: "What are the priority tasks for me to focus on during my first week?",
        explanation: "不要像学生问老师一样。用 'priority tasks'（优先任务）和 'focus on'（专注于）体现你的主动规划意识。"
      },
      {
        wrong: "Nice to meet you, [Boss Name]. Can I leave early today?",
        better: "What are the standard working hours and expectations regarding flexibility here?",
        explanation: "第一天就问早退是非常不礼貌的。应该问 'working hours'（工作时间）和 'expectations'（预期）来间接了解。"
      },
      {
        wrong: "I don't know who to ask.",
        better: "Could you point me in the right direction for [Topic]?",
        explanation: "使用 'point me in the right direction' 是一种非常地道的职场请求，比单纯说 'don't know' 积极得多。"
      }
    ],
    expressionUpgrades: [
      {
        basic: "I worked at a bank before.",
        better: "My previous background is in the banking sector.",
        professional: "I bring extensive experience from the financial services industry, specifically focusing on risk management.",
        explanation: "使用 bring extensive experience（带来丰富的经验）和 industry sector 展示你的专业厚度。"
      },
      {
        basic: "I will try my best.",
        better: "I'm eager to contribute to the team.",
        professional: "I'm committed to leveraging my skills to drive results and support the team's strategic goals.",
        explanation: "将“努力”升级为 leveraging skills（杠杆化利用技能）和 drive results（驱动结果），更符合现代职场语境。"
      },
      {
        basic: "Hello, I am new here.",
        better: "Hi, I'm Alex, the new recruit in the IT department.",
        professional: "Allow me to introduce myself; I've recently joined the organization as part of the IT infrastructure team.",
        explanation: "Allow me to introduce myself 是一种非常优雅的正式开场，配合 organization 和 infrastructure 显得很有分量。"
      },
      {
        basic: "Thanks for helping me.",
        better: "I really appreciate your guidance.",
        professional: "Thank you for your invaluable support during my onboarding process; it's made my transition much smoother.",
        explanation: "使用 invaluable support（无价的支持）和 transition（过渡）来表达深层的感激，能建立更好的职场信誉。"
      },
      {
        basic: "I don't understand the rules.",
        better: "I'm still learning the ropes.",
        professional: "I'm currently familiarizing myself with the company policies and internal protocols.",
        explanation: "learning the ropes（摸门路）是地道的职场俚语，而 internal protocols（内部协议/规章）则是对应的正式表达。"
      }
    ],
    practiceTasks: [
      {
        title: '任务 1：设计你的电梯演讲',
        instruction: '写一个 3-4 句的自我介绍。要求：包含你的名字、职位、之前的一个亮点背景、以及你对现在的职位最期待的一点。',
        example: 'Hi, I\'m Alex. I\'ve just joined as a Data Analyst. Previously, I worked at ABC Tech where I optimized their user growth data. I\'m really excited to apply my analytics skills to our new product line here.'
      },
      {
        title: '任务 2：跨部门打招呼练习',
        instruction: '想象你在电梯里遇到另一个部门的经理，请用“确认身份 + 介绍自己 + 一个破冰问题”的结构写出你的对话。',
        example: 'Are you Mark from the Sales department? Hi Mark, I\'m Alex, the new analyst in Finance. How\'s the team preparing for the end-of-year rush?'
      },
      {
        title: '任务 3：录制一段入职感言',
        instruction: '模拟在入职第一天的团队会议末尾，大家让你说两句。录制一段 30 秒的语音，表达感谢、兴奋以及愿意学习的态度。',
        example: 'Thank you so much for the warm welcome, everyone — I\'m genuinely thrilled to be here. I know there\'s a lot for me to learn about the team, the workflows, and the culture, and I\'m fully committed to listening carefully and contributing as quickly as I can. I\'m really excited about what we\'ll build together, and I can\'t wait to get started. Thank you again!'
      }
    ],
    saveablePhrases: [
      {
        phrase: "I've recently joined the team as a [Job Title].",
        category: "面试",
        meaning: "我最近加入了团队，担任[职位]。"
      },
      {
        phrase: "I'm still getting my head around the internal processes, so please bear with me.",
        category: "Small Talk",
        meaning: "我还在努力熟悉内部流程，请多多包涵。"
      },
      {
        phrase: "Who would be the best person to talk to regarding [Topic]?",
        category: "汇报",
        meaning: "关于[话题]，我应该找谁谈最合适？"
      },
      {
        phrase: "I'm really looking forward to collaborating with you all and contributing to the project.",
        category: "汇报",
        meaning: "我非常期待与大家协作，并为项目做出贡献。"
      },
      {
        phrase: "If you have a moment later, I'd love to learn more about your role in the team.",
        category: "Small Talk",
        meaning: "如果您晚些时候有空，我想更多地了解一下您在团队中的职责。"
      },
      {
        phrase: "Allow me to introduce myself; I've recently joined the organization as [Title].",
        category: "面试",
        meaning: "请允许我自我介绍一下；我最近加入了公司，担任[职位]。"
      },
      {
        phrase: "Could you please point me in the right direction for the [Service/Item]?",
        category: "Small Talk",
        meaning: "您能指点我一下去哪里找[服务/物品]吗？"
      },
      {
        phrase: "I'm eager to leverage my background in [Field] to support our team's goals.",
        category: "汇报",
        meaning: "我很渴望利用我在[领域]的背景来支持我们团队的目标。"
      }
    ],
    resources: [
      {
        name: 'British Council — Meeting New People',
        type: '视频 + speaking practice',
        description: '入职与自我介绍、small talk、认识同事',
        why: '适合练习第一次见同事、介绍自己、开启自然对话和基本 workplace small talk。',
        url: 'https://learnenglish.britishcouncil.org/free-resources/speaking/a1/meeting-new-people'
      },
      {
        name: 'British Council — English for Emails',
        type: '职场邮件课程',
        description: '基础职场邮件、请求确认、日程沟通',
        why: '专门训练 A2-B1 工作邮件，包括组织内容、表达请求、检查语气和写清楚邮件目的。',
        url: 'https://learnenglish.britishcouncil.org/free-resources/business/english-emails'
      },
      {
        name: 'Purdue OWL — Email Etiquette',
        type: '写作指南',
        description: '基础职场邮件、向上沟通、正式请求',
        why: '适合学习给上级、老师、陌生人或同事写邮件时的 subject line、greeting、tone、grammar 和 professionalism。',
        url: 'https://owl.purdue.edu/owl/general_writing/academic_writing/email_etiquette.html'
      },
      {
        name: 'Harvard DCE — Communicate More Effectively in the Workplace',
        type: 'workplace communication article',
        description: '请求确认、会议参与、周报更新、职场沟通基础',
        why: '适合学习 workplace communication 的基本原则，例如清楚表达目的、提前准备 agenda、明确 decision-making 和 next steps。',
        url: 'https://professional.dce.harvard.edu/blog/how-to-communicate-more-effectively-in-the-workplace/'
      },
      {
        name: 'BBC Learning English — English at Work Playlist',
        type: 'YouTube 视频系列',
        description: '入职、会议、同事沟通、职场礼仪、职场 small talk',
        why: '用办公室情景讲 English-speaking workplace 的语言和 etiquette，很适合职场新人学习真实语境中的表达。',
        url: 'https://www.youtube.com/playlist?list=PLcetZ6gSk969oGvAI0e4_PgVnlGbm64bp'
      },
      {
        name: 'Asana — Status Report Template for Projects',
        type: 'workplace blog / template',
        description: '周报与进度更新、日程与时间管理、请求与确认',
        why: '清楚展示 status report 应该包含 progress、blockers、risks、next steps 等信息，特别适合职场新人学习 weekly update 和向 manager 汇报进度。',
        url: 'https://asana.com/templates/status-report'
      }
    ]
  },
  // Unit 8: 团队自我介绍 / Introducing Yourself
  'n2': {
    id: 'n2',
    title: '团队自我介绍',
    englishTitle: 'Introducing Yourself',
    level: 'B1-B2',
    objectives: [
      '学会使用不同程度的委婉语气（Softening Language）提出请求',
      '掌握在没听懂、听不清或不确定时的礼貌澄清（Clarification）技巧',
      '学习如何确认工作优先级（Prioritization）和截止日期',
      '掌握在会议或讨论中礼貌地打断（Interrupting）并提问的方式',
      '学会通过“复述确认”（Paraphrasing）确保对任务要求的准确理解'
    ],
    scenarios: [
      '请求同事帮忙查看一份文档',
      '在电话或视频会议中信号不佳时要求对方重复',
      '不确定经理给出的缩写词（Acronyms）或术语含义',
      '任务太多时请求经理明确优先级',
      '确认会议时间或地点的最后变动',
      '在头脑风暴中礼貌地打断以表达不同见解',
      '完成沟通后通过邮件总结并确认双方共识'
    ],
    vocabulary: [
      {
        expression: 'clarify / clarification',
        meaning: '澄清 / 解释',
        context: '要求对方把事情说得更明白',
        example: 'Could you please clarify what you mean by "high-level overview"?'
      },
      {
        expression: 'elaborate',
        meaning: '详述 / 进一步说明',
        context: '请求对方提供更多细节',
        example: 'Would you mind elaborating on the budget constraints for this project?'
      },
      {
        expression: 'on the same page',
        meaning: '达成共识 / 进度一致',
        context: '确认双方理解是否相同',
        example: 'I just want to make sure we are both on the same page regarding the deadline.'
      },
      {
        expression: 'wrap my head around',
        meaning: '理解 / 弄明白',
        context: '用于处理复杂或陌生的信息',
        example: 'I\'m still trying to wrap my head around the new software architecture.'
      },
      {
        expression: 'prioritize',
        meaning: '优先处理',
        context: '决定事情的轻重缓急',
        example: 'How should I prioritize these three tasks you\'ve assigned today?'
      },
      {
        expression: 'deadline / due date',
        meaning: '截止日期',
        context: '任务必须完成的时间',
        example: 'Is the deadline for the report flexible, or is it a hard deadline?'
      },
      {
        expression: 'soften the tone',
        meaning: '委婉语气 / 语气软化',
        context: '使请求听起来不像是命令',
        example: 'Using "I was wondering if..." helps to soften the tone of your request.'
      },
      {
        expression: 'inquiry',
        meaning: '询问 / 咨询',
        context: '正式的提问',
        example: 'Thank you for your inquiry; I will look into it and get back to you.'
      },
      {
        expression: 'paraphrase',
        meaning: '复述 / 转述',
        context: '用自己的话再说一遍以确认理解',
        example: 'Let me paraphrase what you said to make sure I understand correctly.'
      },
      {
        expression: 'consensus',
        meaning: '共识 / 一致意见',
        context: '群体达成的协议',
        example: 'The team reached a consensus on the new marketing strategy.'
      },
      {
        expression: 'vague',
        meaning: '含糊的 / 不明确的',
        context: '描述信息不足或不清晰',
        example: 'The instructions were a bit vague, so I had to ask for more details.'
      },
      {
        expression: 'ambiguous',
        meaning: '有歧义的',
        context: '可以有多种理解方式',
        example: 'This sentence is quite ambiguous; could you rephrase it?'
      },
      {
        expression: 'interrupt / interruption',
        meaning: '打断',
        context: '在别人说话时切入',
        example: 'Sorry to interrupt, but I have a quick question about that last slide.'
      },
      {
        expression: 'reiterate',
        meaning: '重申 / 反复说',
        context: '为了强调或确认而再说一遍',
        example: 'I\'d like to reiterate the importance of meeting the safety standards.'
      },
      {
        expression: 'discrepancy',
        meaning: '差异 / 不一致',
        context: '发现两个信息源不符',
        example: 'There seems to be a discrepancy between these two sets of data.'
      },
      {
        expression: 'ascertain',
        meaning: '查明 / 确定',
        context: '正式地弄清楚实情',
        example: 'We need to ascertain the cause of the system failure immediately.'
      },
      {
        expression: 'misinterpretation',
        meaning: '误解',
        context: '错误的理解',
        example: 'I apologize if there was any misinterpretation of my earlier comments.'
      },
      {
        expression: 'tentative',
        meaning: '暂定的 / 试探性的',
        context: '尚未最终确定的安排',
        example: 'Let\'s set a tentative date for the next meeting for next Tuesday.'
      },
      {
        expression: 'hard deadline',
        meaning: '严格截止日期',
        context: '没有任何延期空间的截止日',
        example: 'This is a hard deadline because the launch is already scheduled.'
      },
      {
        expression: 'follow-up',
        meaning: '跟进 / 后续行动',
        context: '在最初互动之后的动作',
        example: 'I\'ll send a follow-up email with the notes from our discussion.'
      }
    ],
    sentencePatterns: [
      {
        pattern: "I was wondering if you could [do something]?",
        meaning: "我在想您是否可以[做某事]？",
        usage: "最经典的委婉请求方式",
        example: "I was wondering if you could help me review this draft before I send it to the client?"
      },
      {
        pattern: "Could you please clarify what you mean by [Term/Phrase]?",
        meaning: "您能澄清一下您说的[术语/短语]是什么意思吗？",
        usage: "请求澄清不确定的内容",
        example: "Could you please clarify what you mean by 'organic growth' in this context?"
      },
      {
        pattern: "Just to make sure I'm on the same page, are you saying that [Paraphrase]?",
        meaning: "只是为了确保我们的理解一致，您是说[复述内容]吗？",
        usage: "通过复述来确认理解",
        example: "Just to make sure I'm on the same page, are you saying that the project has been delayed by two weeks?"
      },
      {
        pattern: "Sorry to interrupt, but could I just ask [Question]?",
        meaning: "抱歉打断一下，我能问个[问题]吗？",
        usage: "礼貌地在讨论中切入提问",
        example: "Sorry to interrupt, but could I just ask if this budget includes the travel expenses?"
      },
      {
        pattern: "Would you mind giving me a bit more detail on [Topic]?",
        meaning: "您介意给我多讲讲关于[话题]的细节吗？",
        usage: "请求对方详述",
        example: "Would you mind giving me a bit more detail on the technical requirements for the new site?"
      },
      {
        pattern: "If I understand you correctly, the priority should be [Task A]. Is that right?",
        meaning: "如果我理解得没错，优先事项应该是[任务 A]。对吗？",
        usage: "确认优先级",
        example: "If I understand you correctly, the priority should be fixing the bug before adding new features. Is that right?"
      },
      {
        pattern: "Could you possibly walk me through [Process] one more time?",
        meaning: "您能不能再带我过一遍[流程]？",
        usage: "请求再次演示或讲解",
        example: "Could you possibly walk me through the submission process one more time?"
      },
      {
        pattern: "I'd appreciate it if you could get back to me by [Time/Date].",
        meaning: "如果您能在[时间/日期]前回复我，我将不胜感激。",
        usage: "礼貌设定回复截止期限",
        example: "I'd appreciate it if you could get back to me by tomorrow afternoon."
      },
      {
        pattern: "Is it okay if I [Action]? I want to be certain I'm following the protocol.",
        meaning: "我[做某事]可以吗？我想确定我遵循了规程。",
        usage: "询问是否可以执行某操作，并给出“想遵循规程”的合理解释",
        example: "Is it okay if I use this template for the report? I want to be certain I'm following the company protocol."
      },
      {
        pattern: "Thank you for the clarification. That makes much more sense now.",
        meaning: "谢谢您的澄清。现在明白多了。",
        usage: "得到解释后的礼貌回应",
        example: "Thank you for the clarification on the acronyms. That makes much more sense now."
      }
    ],
    formalDialogue: {
      title: '正式场景：向经理确认任务优先级',
      context: 'Alex 是一名入职两周的新人，他发现手里堆积了四个任务，不确定该先做哪个。',
      conversation: [
        {
          speaker: 'Alex',
          text: "Hi Sarah, do you have a quick minute? I wanted to check in regarding my tasks for this week."
        },
        {
          speaker: 'Sarah',
          text: "Sure, Alex. What's on your mind?"
        },
        {
          speaker: 'Alex',
          text: "Currently, I'm working on the data cleanup, the monthly report, and the team presentation. I was wondering how I should prioritize these?"
        },
        {
          speaker: 'Sarah',
          text: "Well, they are all important, but the monthly report is due this Wednesday."
        },
        {
          speaker: 'Alex',
          text: "Just to make sure I'm on the same page, should the monthly report be my absolute priority for the next two days?"
        },
        {
          speaker: 'Sarah',
          text: "Yes, exactly. The data cleanup can wait until Thursday."
        },
        {
          speaker: 'Alex',
          text: "Understood. And regarding the presentation, is there a hard deadline for the first draft?"
        },
        {
          speaker: 'Sarah',
          text: "Next Monday would be fine. No rush on that one."
        },
        {
          speaker: 'Alex',
          text: "Perfect. Thanks for the clarification, Sarah. I'll focus on the report now."
        }
      ],
      learnableExpressions: [
        {
          expression: "Do you have a quick minute?",
          explanation: "你有（哪怕是一分钟的）时间吗？（非常实用的职场询问）"
        },
        {
          expression: "Check in regarding...",
          explanation: "就...进行确认/沟通。"
        },
        {
          expression: "Absolute priority",
          explanation: "绝对的优先事项。"
        },
        {
          expression: "Can wait until...",
          explanation: "可以等到...（表示该任务不紧急）"
        },
        {
          expression: "No rush",
          explanation: "不急。"
        },
        {
          expression: "Focus on...",
          explanation: "专注于...（明确目标后的表态）"
        }
      ],
      analysis: 'Alex 的沟通非常高效。他没有直接抱怨“任务太多”，而是列举了任务并询问“如何优先级化”（how should I prioritize）。他通过“复述确认”（should it be my absolute priority?）消除了任何潜在的误解。最后，他还顺带确认了其他任务的截止日期性质（hard deadline），完美管理了上级的预期。'
    },
    smallTalkDialogue: {
      title: '非正式场景：在 Zoom 会议中礼貌打断提问',
      context: '在一个跨部门的线上会议中，Alex 对一个缩写词感到困惑，决定礼貌打断。',
      conversation: [
        {
          speaker: 'Presenter',
          text: "...and then the KPI will be reviewed by the BOD before the QBR starts."
        },
        {
          speaker: 'Alex',
          text: "Sorry to interrupt, Mark, but I'm still learning the ropes here. Could you please clarify what BOD stands for?"
        },
        {
          speaker: 'Presenter',
          text: "Oh, sorry! My mistake. BOD stands for Board of Directors. I should have been clearer."
        },
        {
          speaker: 'Alex',
          text: "No worries at all, thank you! And just to be certain, the QBR is the Quarterly Business Review, right?"
        },
        {
          speaker: 'Presenter',
          text: "Yes, you've got it. Good catch!"
        },
        {
          speaker: 'Alex',
          text: "Thanks for that. Please go ahead!"
        }
      ],
      learnableExpressions: [
        {
          expression: "Sorry to interrupt",
          explanation: "抱歉打断一下（线上会议切入的标准姿势）"
        },
        {
          expression: "Learning the ropes",
          explanation: "还在摸门路/学习规矩（给自己提问找一个谦虚的理由）"
        },
        {
          expression: "Stands for",
          explanation: "代表/是...的缩写。"
        },
        {
          expression: "Just to be certain",
          explanation: "只是为了确定一下。"
        },
        {
          expression: "Good catch",
          explanation: "问得好/敏锐的观察。"
        },
        {
          expression: "Please go ahead",
          explanation: "请继续（打断并得到解答后的礼貌归还发言权）"
        }
      ],
      analysis: '在线上会议中，新人往往不敢提问。Alex 巧妙地使用了“摸门路”（learning the ropes）作为理由，让提问显得非常合情合理。他不仅确认了不认识的词，还顺带确认了自己猜想的词（just to be certain），不仅消除了知识盲区，还展示了自己的细心（Good catch）。'
    },
    commonMistakes: [
      {
        wrong: "I don't understand. Explain again.",
        better: "I'm not sure I fully grasped that. Could you please explain it again from a different angle?",
        explanation: "'I don't understand' 听起来像是指责对方没说清楚。用 'not sure I fully grasped that'（我不确定我是否完全掌握了）将责任揽在自己身上，语气更温和。"
      },
      {
        wrong: "Wait! I have a question.",
        better: "Excuse me, may I ask a quick clarifying question before we move on?",
        explanation: "'Wait!' 太过生硬。使用 'Excuse me' 和 'clarifying question'（澄清性问题）显得更有礼貌和专业。"
      },
      {
        wrong: "Give me the file now.",
        better: "Would it be possible to receive the file by end of day so I can start my review?",
        explanation: "不要用祈使句。使用 'Would it be possible' 和给出理由 'so I can start...' 会让对方更愿意配合。"
      },
      {
        wrong: "What is this word?",
        better: "I'm unfamiliar with this specific term. Could you elaborate on its meaning in this context?",
        explanation: "不要说 'What is this word'（显得词汇量不足）。用 'unfamiliar with this term'（不熟悉这个专业术语）显得更专业。"
      },
      {
        wrong: "I missed that because you spoke too fast.",
        better: "I'm sorry, I missed that last part. Would you mind repeating it for me?",
        explanation: "不要指责对方语速。用 'I missed that last part' 承认自己没跟上，礼貌请求重复。"
      }
    ],
    expressionUpgrades: [
      {
        basic: "Tell me more about this.",
        better: "Could you provide more details on this?",
        professional: "I would appreciate it if you could provide some further insights or documentation regarding this topic.",
        explanation: "使用 insights（见解）和 documentation（文档支持）比简单的“更多细节”更有职场深度。"
      },
      {
        basic: "I want to know the deadline.",
        better: "When do you need this by?",
        professional: "Could you please confirm the expected delivery date and if there is any flexibility in the timeline?",
        explanation: "使用 expected delivery date（预期交付日期）和 flexibility in the timeline（时间线灵活性）是高阶的进度管理语言。"
      },
      {
        basic: "Yes, I understand.",
        better: "Understood. That's clear now.",
        professional: "Thank you for the detailed explanation; I have a much clearer understanding of the expectations now.",
        explanation: "不仅说“明白了”，还感谢对方的“详尽解释”，并提到对“预期”（expectations）有了清晰理解。"
      },
      {
        basic: "I am busy, I can't do it.",
        better: "I'm a bit tied up right now.",
        professional: "My current capacity is a bit limited due to several high-priority tasks. Could we discuss adjusting the timeline?",
        explanation: "使用 capacity（负荷/能力）和 high-priority tasks（高优先级任务）来解释无法承接新任务的原因，非常专业。"
      },
      {
        basic: "What do you want me to do?",
        better: "What are the next steps for me?",
        professional: "Could you please outline the key milestones and action items you'd like me to focus on?",
        explanation: "使用 milestones（里程碑）和 action items（行动项）是标准的项目管理词汇，显示你的结果导向。"
      }
    ],
    practiceTasks: [
      {
        title: '任务 1：复述确认练习',
        instruction: '想象经理对你说："We need to revamp the landing page by Friday to boost the conversion rate." 请用“复述确认”的结构写一段话回馈经理。',
        example: 'Just to make sure I\'m on the same page, are you saying the main goal for this week is to update the landing page UI specifically to improve conversions?'
      },
      {
        title: '任务 2：委婉请求协助',
        instruction: '你需要向 IT 部门请求重置你的系统密码。请用 "I was wondering if..." 结构写一封 3 句话的请求。',
        example: 'Hi IT team, I was wondering if you could help me reset my internal portal password? I seem to be locked out and would appreciate it if you could look into it today.'
      },
      {
        title: '任务 3：录制澄清提问',
        instruction: '录制一段语音，模拟你在会议中没听清对方说的“数据来源”。要求：使用“抱歉打断 + 没听清最后一点 + 礼貌请求重复”的结构。',
        example: 'Sorry to interrupt — I just want to make sure I\'m following along correctly. I missed the very last part about the data source. Could you possibly repeat that for me? I want to make sure I have the right reference before we move on. Thank you!'
      }
    ],
    saveablePhrases: [
      {
        phrase: "I was wondering if you could [do something]?",
        category: "邮件",
        meaning: "我在想您是否可以[做某事]？"
      },
      {
        phrase: "Could you please clarify what you mean by [Term] in this context?",
        category: "Small Talk",
        meaning: "您能澄清一下在这种情况下，您说的[术语]是什么意思吗？"
      },
      {
        phrase: "Just to make sure I'm on the same page, are you saying that [Paraphrase]?",
        category: "汇报",
        meaning: "只是为了确保我们的理解一致，您是说[复述内容]吗？"
      },
      {
        phrase: "Would you mind giving me a bit more detail on [Topic]?",
        category: "Small Talk",
        meaning: "您介意给我多讲讲关于[话题]的细节吗？"
      },
      {
        phrase: "I'd appreciate it if you could get back to me by [Time/Date].",
        category: "邮件",
        meaning: "如果您能在[时间/日期]前回复我，我将不胜感激。"
      },
      {
        phrase: "Sorry to interrupt, but could I just ask a quick clarifying question?",
        category: "Small Talk",
        meaning: "抱歉打断一下，我能问个简单的澄清性问题吗？"
      },
      {
        phrase: "Could you please confirm the expected delivery date for this task?",
        category: "汇报",
        meaning: "您能确认一下这项任务的预期交付日期吗？"
      },
      {
        phrase: "I'm still getting my head around the [Process], so please bear with me.",
        category: "Small Talk",
        meaning: "我还在努力熟悉[流程]，请多多包涵。"
      }
    ],
    resources: [
      {
        name: 'British Council — Meeting New People',
        type: '视频 + speaking practice',
        description: '入职与自我介绍、small talk、认识同事',
        why: '适合练习第一次见同事、介绍自己、开启自然对话和基本 workplace small talk。',
        url: 'https://learnenglish.britishcouncil.org/free-resources/speaking/a1/meeting-new-people'
      },
      {
        name: 'British Council — English for Emails',
        type: '职场邮件课程',
        description: '基础职场邮件、请求确认、日程沟通',
        why: '专门训练 A2-B1 工作邮件，包括组织内容、表达请求、检查语气和写清楚邮件目的。',
        url: 'https://learnenglish.britishcouncil.org/free-resources/business/english-emails'
      },
      {
        name: 'Purdue OWL — Email Etiquette',
        type: '写作指南',
        description: '基础职场邮件、向上沟通、正式请求',
        why: '适合学习给上级、老师、陌生人或同事写邮件时的 subject line、greeting、tone、grammar 和 professionalism。',
        url: 'https://owl.purdue.edu/owl/general_writing/academic_writing/email_etiquette.html'
      },
      {
        name: 'Harvard DCE — Communicate More Effectively in the Workplace',
        type: 'workplace communication article',
        description: '请求确认、会议参与、周报更新、职场沟通基础',
        why: '适合学习 workplace communication 的基本原则，例如清楚表达目的、提前准备 agenda、明确 decision-making 和 next steps。',
        url: 'https://professional.dce.harvard.edu/blog/how-to-communicate-more-effectively-in-the-workplace/'
      },
      {
        name: 'BBC Learning English — English at Work Playlist',
        type: 'YouTube 视频系列',
        description: '入职、会议、同事沟通、职场礼仪、职场 small talk',
        why: '用办公室情景讲 English-speaking workplace 的语言和 etiquette，很适合职场新人学习真实语境中的表达。',
        url: 'https://www.youtube.com/playlist?list=PLcetZ6gSk969oGvAI0e4_PgVnlGbm64bp'
      },
      {
        name: 'Asana — Status Report Template for Projects',
        type: 'workplace blog / template',
        description: '周报与进度更新、日程与时间管理、请求与确认',
        why: '清楚展示 status report 应该包含 progress、blockers、risks、next steps 等信息，特别适合职场新人学习 weekly update 和向 manager 汇报进度。',
        url: 'https://asana.com/templates/status-report'
      }
    ]
  },
  // Unit 9: 了解团队流程 / Workflow & Process
  'n3': {
    id: 'n3',
    title: '了解团队流程',
    englishTitle: 'Workflow & Process',
    level: 'B1-B2',
    objectives: [
      '掌握职场邮件的标准结构（Subject Line, Salutation, Body, Closing）',
      '学会编写清晰、具有行动导向的邮件主题（Subject Lines）',
      '掌握不同关系远近下的礼貌称呼与结尾（Sign-offs）',
      '学习如何礼貌地发送附件、确认收到邮件以及跟进（Follow-up）未回复的邮件',
      '掌握职场邮件中的常见缩写（如 FYI, CC, BCC, EOD）及其正确用法'
    ],
    scenarios: [
      '入职第一天向团队发送自我介绍邮件',
      '请求同事提供某份文件或数据',
      '确认收到重要信息并表示感谢',
      '发送带有附件的进度报告',
      '由于生病或突发状况请求请假',
      '对上周发送但未得到回复的邮件进行礼貌跟进',
      '邀请同事参加会议或确认会议邀请（RSVP）'
    ],
    vocabulary: [
      {
        expression: 'subject line',
        meaning: '邮件主题',
        context: '决定对方是否打开邮件的关键',
        example: 'Please make sure your subject line is concise and descriptive.'
      },
      {
        expression: 'salutation',
        meaning: '称呼 / 问候语',
        context: '邮件开头的礼貌语',
        example: '"Dear [Name]" is a standard formal salutation for business emails.'
      },
      {
        expression: 'sign-off / closing',
        meaning: '结尾礼貌语 / 署名',
        context: '邮件末尾的结束语',
        example: '"Best regards" is a safe and professional sign-off for most situations.'
      },
      {
        expression: 'attachment',
        meaning: '附件',
        context: '随邮件发送的文件',
        example: 'Please find the revised project plan in the attachment.'
      },
      {
        expression: 'FYI (For Your Information)',
        meaning: '供参考',
        context: '表示这封邮件只需了解，无需回复',
        example: 'FYI, the meeting room has been moved to the second floor.'
      },
      {
        expression: 'CC (Carbon Copy)',
        meaning: '抄送',
        context: '让相关人员知晓信息',
        example: 'I will CC our manager on this thread so she is kept in the loop.'
      },
      {
        expression: 'BCC (Blind Carbon Copy)',
        meaning: '密送',
        context: '在不让主收件人知道的情况下发送副本',
        example: 'Use BCC when sending an announcement to a large group of external clients.'
      },
      {
        expression: 'EOD (End of Day)',
        meaning: '今天下班前',
        context: '职场中常用的截止时间表述',
        example: 'I will send you the final version of the report by EOD today.'
      },
      {
        expression: 'RSVP',
        meaning: '请回复',
        context: '用于确认是否参加活动/会议',
        example: 'Please RSVP to the team dinner invitation by Thursday morning.'
      },
      {
        expression: 'concise',
        meaning: '简洁的',
        context: '职场邮件的核心要求',
        example: 'Try to keep your emails concise and to the point.'
      },
      {
        expression: 'action-oriented',
        meaning: '行动导向的',
        context: '明确告诉对方需要做什么',
        example: 'Use action-oriented language in your emails to drive better results.'
      },
      {
        expression: 'follow-up',
        meaning: '跟进',
        context: '对之前的沟通进行后续确认',
        example: 'I am writing to follow up on my previous email regarding the contract.'
      },
      {
        expression: 'thread',
        meaning: '邮件往来记录 / 邮件链',
        context: '同一主题下的一系列邮件',
        example: 'I\'ve attached the full email thread for your reference.'
      },
      {
        expression: 'recipient',
        meaning: '收件人',
        context: '收到邮件的人',
        example: 'Double-check the recipient\'s email address before clicking send.'
      },
      {
        expression: 'in the loop',
        meaning: '知情',
        context: '让某人了解项目进展',
        example: 'Thanks for keeping me in the loop regarding the client feedback.'
      },
      {
        expression: 'placeholder',
        meaning: '占位符 / 预留位置',
        context: '表示信息稍后填入',
        example: 'I have put a placeholder in the calendar for our weekly meeting.'
      },
      {
        expression: 'loop in',
        meaning: '把某人拉进讨论',
        context: '增加新的抄送人',
        example: 'I\'m looping in Mark from Finance as he might have more details on the budget.'
      },
      {
        expression: 'look forward to',
        meaning: '期待',
        context: '礼貌的结尾期待',
        example: 'I look forward to hearing from you soon.'
      },
      {
        expression: 'professionalism',
        meaning: '专业度',
        context: '在邮件中体现出的职场素养',
        example: 'Maintaining professionalism in your writing reflects well on your personal brand.'
      },
      {
        expression: 'disclaimer',
        meaning: '免责声明',
        context: '邮件末尾常见的法律声明',
        example: 'Most corporate emails include a standard confidentiality disclaimer at the bottom.'
      }
    ],
    sentencePatterns: [
      {
        pattern: "I am writing to [Purpose: request/confirm/inform]...",
        meaning: "我写这封邮件是想[目的：请求/确认/通知]...",
        usage: "直接明了地阐述邮件目的",
        example: "I am writing to request a copy of the final project budget."
      },
      {
        pattern: "I've attached [Document Name] for your review.",
        meaning: "我随信附上了[文档名]供您审阅。",
        usage: "告知附件存在",
        example: "I've attached the draft proposal for your review; please let me know your thoughts."
      },
      {
        pattern: "Please find [Document Name] attached below.",
        meaning: "请查收下方附带的[文档名]。",
        usage: "另一种地道的告知附件方式",
        example: "Please find the meeting minutes from yesterday attached below."
      },
      {
        pattern: "Just a quick follow-up on [Topic/Email]...",
        meaning: "只是就[话题/邮件]进行一次简短的跟进...",
        usage: "礼貌跟进未回复的邮件",
        example: "Just a quick follow-up on my request for the Q3 sales data."
      },
      {
        pattern: "Thank you for the quick turnaround on [Task/Email].",
        meaning: "感谢您对[任务/邮件]的快速处理。",
        usage: "表扬对方回复迅速",
        example: "Thank you for the quick turnaround on the client contract revisions."
      },
      {
        pattern: "Could you please let me know if [Time/Date] works for you?",
        meaning: "请告知我[时间/日期]对您是否方便？",
        usage: "确认会议或约见时间",
        example: "Could you please let me know if Thursday at 2 PM works for you for a quick sync?"
      },
      {
        pattern: "I would appreciate your feedback by [Time/Date] so that we can move forward.",
        meaning: "我希望能在[时间/日期]前得到您的反馈，以便我们能继续推进。",
        usage: "礼貌设定截止期限并给出理由",
        example: "I would appreciate your feedback by EOD tomorrow so that we can move forward with the printing."
      },
      {
        pattern: "Please let me know if you have any questions or need further information.",
        meaning: "如果您有任何问题或需要进一步信息，请告知我。",
        usage: "万能的邮件结尾",
        example: "I hope this helps. Please let me know if you have any questions or need further information."
      },
      {
        pattern: "I'm looping in [Name] to help with [Topic].",
        meaning: "我把[名字]拉进这封邮件，以协助处理[话题]。",
        usage: "中间增加新的收件人/抄送人",
        example: "I'm looping in Sarah from Design to help with the UI feedback."
      },
      {
        pattern: "Thank you in advance for your help.",
        meaning: "提前感谢您的帮助。",
        usage: "在提出请求后礼貌收尾",
        example: "Could you please check this data? Thank you in advance for your help."
      }
    ],
    formalDialogue: {
      title: '正式邮件：请求数据支持',
      context: 'Alex 给财务部的 Mark 发邮件，请求提供上个季度的销售数据。',
      conversation: [
        {
          speaker: 'Subject Line',
          text: "Request: Q1 Sales Data Report"
        },
        {
          speaker: 'Alex',
          text: "Dear Mark,\n\nI hope this email finds you well.\n\nI am writing to request the Q1 Sales Data Report for our upcoming department presentation. We need this information to finalize our growth projections for the next half of the year.\n\nCould you please let me know if you can share this file with me? I would appreciate it if you could send it over by EOD Thursday.\n\nThank you in advance for your help!\n\nBest regards,\n\nAlex"
        },
        {
          speaker: 'Mark',
          text: "Hi Alex,\n\nNo problem at all. Please find the requested report attached below. I've also CC'd Sarah as she helped compile some of the regional data.\n\nLet me know if you have any questions regarding the figures.\n\nBest,\n\nMark"
        }
      ],
      learnableExpressions: [
        {
          expression: "I hope this email finds you well",
          explanation: "希望这封邮件收到时你一切都好（非常经典的邮件开场白）"
        },
        {
          expression: "Finalize our growth projections",
          explanation: "敲定我们的增长预测。"
        },
        {
          expression: "By EOD Thursday",
          explanation: "在周四下班前。"
        },
        {
          expression: "No problem at all",
          explanation: "没问题/一点也不麻烦。"
        },
        {
          expression: "Requested report",
          explanation: "被请求的报告（指代对方要的那份文件）"
        },
        {
          expression: "Compile some of the regional data",
          explanation: "汇总了一些区域数据。"
        }
      ],
      analysis: '这组邮件往来非常规范。Alex 的邮件包含了：清晰的主题（带有 Request 前缀）、礼貌的问候、明确的目的、理由以及截止日期。Mark 的回复也很利落，告知了附件位置并说明了抄送人的原因。两人都使用了标准的职场结尾（Best regards/Best）。'
    },
    smallTalkDialogue: {
      title: '非正式场景：IM 沟通后的邮件确认',
      context: 'Alex 在 Slack 上跟同事讨论完后，发邮件做正式记录。',
      conversation: [
        {
          speaker: 'Subject Line',
          text: "Notes: Today's coffee chat regarding project timeline"
        },
        {
          speaker: 'Alex',
          text: "Hi Team,\n\nJust wanted to send a quick follow-up to our chat this morning regarding the project timeline. To recap, we agreed on the following:\n\n- The UI draft is due by Friday.\n- We'll move the testing phase to next Tuesday.\n\nI've put a placeholder in the calendar for our review session. Let me know if I've missed anything!\n\nCheers,\n\nAlex"
        }
      ],
      learnableExpressions: [
        {
          expression: "Just wanted to send a quick follow-up",
          explanation: "只是想进行一次简短的跟进。"
        },
        {
          expression: "To recap",
          explanation: "简单回顾一下（用于总结讨论要点）"
        },
        {
          expression: "Agreed on the following",
          explanation: "就以下内容达成一致。"
        },
        {
          expression: "Testing phase",
          explanation: "测试阶段。"
        },
        {
          expression: "Placeholder",
          explanation: "占位符/预留（在日历中先占个位置）"
        },
        {
          expression: "Cheers",
          explanation: "再见/谢了（团队内部或非正式场合常用的结尾语）"
        }
      ],
      analysis: '这封邮件虽然简短，但非常有价值。它将非正式的“咖啡聊天”内容转化为了书面记录（To recap），确保了责任明确和信息对齐。在职场中，这种“讨论后必有记录”的习惯是非常加分的。'
    },
    commonMistakes: [
      {
        wrong: "Subject: Help",
        better: "Subject: Request: Assistance with IT Login Issue",
        explanation: "邮件主题不能只有一个词。要包含“动作（Request/Question/FYI）+ 具体内容”。"
      },
      {
        wrong: "Hi Alex, give me the report.",
        better: "Hi Alex, hope you're having a good week. Could you please send over the report when you have a moment?",
        explanation: "职场邮件忌讳命令式。即使是平级，也要加一句问候和 'Could you please' 这种请求语气。"
      },
      {
        wrong: "I send you the file yesterday.",
        better: "As mentioned in my email yesterday, I have attached the file for your reference.",
        explanation: "不要只是说“我昨天发了”。使用 'As mentioned'（如前所述）显得更客观，并重申附件已带上。"
      },
      {
        wrong: "Sorry for my slow email.",
        better: "Apologies for the delayed response.",
        explanation: "'Slow email' 是中式英语。标准的表达是 'delayed response'（延迟的回复）。"
      },
      {
        wrong: "Regards, Me",
        better: "Best regards, [Full Name]",
        explanation: "结尾要完整。'Regards' 虽然可以用，但对于不熟的人 'Best regards' 更稳妥。且不要只签 First Name，对于跨部门沟通应签全名。"
      }
    ],
    expressionUpgrades: [
      {
        basic: "Thanks for your email.",
        better: "Thank you for getting back to me.",
        professional: "I appreciate your prompt response and the detailed information provided.",
        explanation: "使用 prompt response（及时的回复）和 appreciate 显得更有修养且专业。"
      },
      {
        basic: "I want to ask a question.",
        better: "I have a quick inquiry about the project.",
        professional: "I am writing to seek clarification on several points mentioned in the latest project briefing.",
        explanation: "使用 seek clarification（寻求澄清）和 briefing（简报/说明）是高级的职场书面语。"
      },
      {
        basic: "Wait for me to reply later.",
        better: "I'll get back to you soon.",
        professional: "I will look into this and provide a comprehensive update by tomorrow afternoon.",
        explanation: "使用 look into（调查/查看）和 comprehensive update（全面的更新）显示了你对工作的负责态度。"
      },
      {
        basic: "See the attachment.",
        better: "Please see the attached file.",
        professional: "For your reference, please find the supporting documents attached to this email.",
        explanation: "使用 For your reference（供您参考）和 supporting documents（证明/支持性文档）增加了邮件的正式感。"
      },
      {
        basic: "I can't go to the meeting.",
        better: "I'm afraid I can't attend the meeting.",
        professional: "Unfortunately, due to a prior commitment, I will be unable to attend the scheduled meeting. My apologies for any inconvenience.",
        explanation: "使用 prior commitment（已有安排）和 inconvenience（不便）是拒绝会议邀请的“满分”话术。"
      }
    ],
    practiceTasks: [
      {
        title: '任务 1：优化邮件主题',
        instruction: '将以下三个模糊的主题修改为清晰的职场主题：\n1. Meeting\n2. Report\n3. Question',
        example: '1. Invitation: Marketing Strategy Brainstorming Session\n2. Draft: Q2 Financial Performance Report\n3. Inquiry: Clarification on Remote Work Policy'
      },
      {
        title: '任务 2：撰写附件发送邮件',
        instruction: '撰写一封邮件给经理。内容：发送本周工作进度表（附件）、提到目前进展顺利、请求对方在周五前给反馈。',
        example: 'Hi [Name],\n\nPlease find my weekly progress tracker attached for your review. Things are moving along smoothly as planned.\n\nI would appreciate your feedback by EOD Friday.\n\nBest,\n[Your Name]'
      },
      {
        title: '任务 3：礼貌跟进邮件',
        instruction: '如果你三天前发了一封求助邮件，但对方一直没回，请写一段 2-3 句话的礼貌跟进话术。',
        example: 'Hi [Name], I hope you\'re doing well. I just wanted to follow up on my email from a few days ago regarding [topic] — I completely understand how busy things can get. Whenever you have a moment, I\'d really appreciate your thoughts or a quick heads-up on timing. Thank you so much!'
      }
    ],
    saveablePhrases: [
      {
        phrase: "I hope this email finds you well.",
        category: "邮件",
        meaning: "希望这封邮件收到时你一切都好。"
      },
      {
        phrase: "I am writing to request [Information/Action] regarding [Topic].",
        category: "邮件",
        meaning: "我写这封邮件是想就[话题]请求[信息/行动]。"
      },
      {
        phrase: "I've attached the [Document Name] for your review.",
        category: "邮件",
        meaning: "我随信附上了[文档名]供您审阅。"
      },
      {
        phrase: "Just a quick follow-up on our previous discussion about [Topic].",
        category: "邮件",
        meaning: "只是就我们之前关于[话题]的讨论进行一次简短的跟进。"
      },
      {
        phrase: "I would appreciate your feedback by EOD [Day] so that we can move forward.",
        category: "汇报",
        meaning: "我希望能在[周几]下班前得到您的反馈，以便我们能继续推进。"
      },
      {
        phrase: "Please let me know if you have any questions or need further information.",
        category: "邮件",
        meaning: "如果您有任何问题或需要进一步信息，请告知我。"
      },
      {
        phrase: "Apologies for the delayed response; it's been a busy week here.",
        category: "邮件",
        meaning: "抱歉回复晚了；我这边这一周非常忙。"
      },
      {
        phrase: "Thank you in advance for your help with this request.",
        category: "邮件",
        meaning: "提前感谢您对此项请求的帮助。"
      }
    ],
    resources: [
      {
        name: 'British Council — Meeting New People',
        type: '视频 + speaking practice',
        description: '入职与自我介绍、small talk、认识同事',
        why: '适合练习第一次见同事、介绍自己、开启自然对话和基本 workplace small talk。',
        url: 'https://learnenglish.britishcouncil.org/free-resources/speaking/a1/meeting-new-people'
      },
      {
        name: 'British Council — English for Emails',
        type: '职场邮件课程',
        description: '基础职场邮件、请求确认、日程沟通',
        why: '专门训练 A2-B1 工作邮件，包括组织内容、表达请求、检查语气和写清楚邮件目的。',
        url: 'https://learnenglish.britishcouncil.org/free-resources/business/english-emails'
      },
      {
        name: 'Purdue OWL — Email Etiquette',
        type: '写作指南',
        description: '基础职场邮件、向上沟通、正式请求',
        why: '适合学习给上级、老师、陌生人或同事写邮件时的 subject line、greeting、tone、grammar 和 professionalism。',
        url: 'https://owl.purdue.edu/owl/general_writing/academic_writing/email_etiquette.html'
      },
      {
        name: 'Harvard DCE — Communicate More Effectively in the Workplace',
        type: 'workplace communication article',
        description: '请求确认、会议参与、周报更新、职场沟通基础',
        why: '适合学习 workplace communication 的基本原则，例如清楚表达目的、提前准备 agenda、明确 decision-making 和 next steps。',
        url: 'https://professional.dce.harvard.edu/blog/how-to-communicate-more-effectively-in-the-workplace/'
      },
      {
        name: 'BBC Learning English — English at Work Playlist',
        type: 'YouTube 视频系列',
        description: '入职、会议、同事沟通、职场礼仪、职场 small talk',
        why: '用办公室情景讲 English-speaking workplace 的语言和 etiquette，很适合职场新人学习真实语境中的表达。',
        url: 'https://www.youtube.com/playlist?list=PLcetZ6gSk969oGvAI0e4_PgVnlGbm64bp'
      },
      {
        name: 'Asana — Status Report Template for Projects',
        type: 'workplace blog / template',
        description: '周报与进度更新、日程与时间管理、请求与确认',
        why: '清楚展示 status report 应该包含 progress、blockers、risks、next steps 等信息，特别适合职场新人学习 weekly update 和向 manager 汇报进度。',
        url: 'https://asana.com/templates/status-report'
      }
    ]
  },
  // Unit 10: 工作场所设置 / Tech & HR Setup
  'n4': {
    id: 'n4',
    title: '工作场所设置',
    englishTitle: 'Tech & HR Setup',
    level: 'B1-B2',
    objectives: [
      '学会礼貌地发起、确认、更改或取消会议邀请',
      '掌握如何描述日程安排（Busy, Available, Flexible）及冲突处理',
      '学习如何提出多个可选时间（Multiple Time Slots）并征求他人意见',
      '掌握管理截止日期（Deadlines）和延期（Extension）的专业表达',
      '学会使用共享日历术语，如 Tentative, Out of Office (OOO), Conflict'
    ],
    scenarios: [
      '通过邮件或 Slack 发起一个会议邀约',
      '发现会议时间有冲突，请求调整（Reschedule）',
      '临时生病或紧急情况，需要取消已定的会议',
      '向经理申请任务截止日期的延期',
      '告知团队自己将在某段时间 OOO（不在办公室）',
      '协调跨时区（Time Zones）的国际会议',
      '确认下周的工作计划与时间块（Time Blocks）分配'
    ],
    vocabulary: [
      {
        expression: 'reschedule',
        meaning: '重新安排时间',
        context: '将已定的会议改到另一个时间',
        example: 'Something urgent came up; would it be possible to reschedule our 2 PM call?'
      },
      {
        expression: 'conflict',
        meaning: '冲突',
        context: '两个会议时间重叠',
        example: 'I have a calendar conflict at 3 PM, but I can join you at 4 PM instead.'
      },
      {
        expression: 'availability',
        meaning: '可用时间',
        context: '你什么时候有空',
        example: 'Please let me know your availability for a quick sync next week.'
      },
      {
        expression: 'time slot',
        meaning: '时间段',
        context: '日历中的一个具体块',
        example: 'Do you have a 30-minute time slot available on Tuesday morning?'
      },
      {
        expression: 'postpone',
        meaning: '推迟',
        context: '将计划延后',
        example: 'We decided to postpone the launch until we receive final approval.'
      },
      {
        expression: 'cancel',
        meaning: '取消',
        context: '不再进行某项计划',
        example: 'I\'m sorry, but we have to cancel the meeting due to technical issues.'
      },
      {
        expression: 'Out of Office (OOO)',
        meaning: '不在办公室',
        context: '请假或出差的自动状态',
        example: 'I will be OOO from Monday to Wednesday with limited access to email.'
      },
      {
        expression: 'deadline extension',
        meaning: '截止日期延期',
        context: '请求更多时间完成任务',
        example: 'I\'d like to request a short deadline extension to ensure the data is accurate.'
      },
      {
        expression: 'tentative',
        meaning: '暂定的',
        context: '尚未最终确认的安排',
        example: 'Let\'s put a tentative meeting on the calendar for Friday at 10 AM.'
      },
      {
        expression: 'time zone',
        meaning: '时区',
        context: '跨国协作中的关键因素',
        example: 'Just a reminder that the meeting time is in EST, not GMT.'
      },
      {
        expression: 'back-to-back',
        meaning: '连续的 / 一个接一个的',
        context: '形容会议非常满',
        example: 'I\'m in back-to-back meetings all afternoon, so I might respond late.'
      },
      {
        expression: 'blocked out',
        meaning: '预留 / 锁死时间',
        context: '在日历上标记为不可用',
        example: 'I have blocked out 2 PM to 4 PM for deep work on the project.'
      },
      {
        expression: 'flexible',
        meaning: '灵活的',
        context: '表示时间可以根据对方调整',
        example: 'I\'m quite flexible on Friday afternoon; anytime after 2 PM works.'
      },
      {
        expression: 'propose',
        meaning: '提议',
        context: '正式提出建议',
        example: 'I would like to propose a new timeline for the implementation phase.'
      },
      {
        expression: 'clash',
        meaning: '（时间）冲突',
        context: '与 conflict 类似，多用于英式表达',
        example: 'The training session clashes with our team weekly update.'
      },
      {
        expression: 'buffer',
        meaning: '缓冲时间',
        context: '两个会议之间的休息时间',
        example: 'I always leave a 15-minute buffer between meetings to catch up on notes.'
      },
      {
        expression: 'recurring',
        meaning: '循环的 / 定期的',
        context: '每周或每月固定进行的会议',
        example: 'This will be a recurring meeting every Monday at 9 AM.'
      },
      {
        expression: 'logistics',
        meaning: '后勤 / 具体安排',
        context: '会议的地点、链接等细节',
        example: 'Let\'s discuss the logistics of the workshop during our 1-on-1.'
      },
      {
        expression: 'overlap',
        meaning: '重叠',
        context: '两个时区或两个计划的交叉点',
        example: 'We have a two-hour overlap with the London team each afternoon.'
      },
      {
        expression: 'confirmation',
        meaning: '确认',
        context: '最后的定夺',
        example: 'I am waiting for confirmation from the client before we finalize the date.'
      }
    ],
    sentencePatterns: [
      {
        pattern: "I'd like to schedule a meeting to discuss [Topic].",
        meaning: "我想安排一个会议来讨论[话题]。",
        usage: "发起会议邀约的标准开头",
        example: "I'd like to schedule a meeting to discuss the feedback on the design mockups."
      },
      {
        pattern: "Does [Time/Date] work for you?",
        meaning: "[时间/日期]对您方便吗？",
        usage: "询问对方是否有空",
        example: "Does Wednesday morning at 10 AM work for you?"
      },
      {
        pattern: "I have a conflict at that time. How about [Alternative Time]?",
        meaning: "那个时间我有个冲突。改为[备选时间]怎么样？",
        usage: "礼貌拒绝并提出备选时间",
        example: "I have a conflict at 2 PM. How about we move it to 4 PM instead?"
      },
      {
        pattern: "I am writing to request a [Number]-day extension on [Task].",
        meaning: "我写这封邮件是想就[任务]请求延长[数字]天。",
        usage: "请求延期",
        example: "I am writing to request a two-day extension on the financial report."
      },
      {
        pattern: "Would it be possible to push our meeting back by [Time]?",
        meaning: "是否可以将我们的会议往后推迟[时间]？",
        usage: "微调会议时间（往后移）",
        example: "Would it be possible to push our meeting back by 30 minutes? I'm running a bit late."
      },
      {
        pattern: "Please let me know which of the following time slots works best for you.",
        meaning: "请告诉我以下哪个时间段最适合您。",
        usage: "给出多个选项供对方选择",
        example: "Please let me know which of the following time slots works best for you: Monday at 3 PM or Tuesday at 10 AM."
      },
      {
        pattern: "Something urgent has come up, and I'll need to [reschedule/cancel] our call.",
        meaning: "发生了一些紧急情况，我需要[重新安排/取消]我们的通话。",
        usage: "临时变动的专业说辞",
        example: "Something urgent has come up, and I'll need to reschedule our call to later this week."
      },
      {
        pattern: "I'll be OOO from [Date] to [Date]. For any urgent matters, please contact [Name].",
        meaning: "我将从[日期]到[日期]休假。如有紧急事务，请联系[名字]。",
        usage: "自动回复或提前告知休假",
        example: "I'll be OOO from July 1st to July 5th. For any urgent matters, please contact Sarah."
      },
      {
        pattern: "Just wanted to confirm that we are still on for [Time/Date].",
        meaning: "只是想确认一下我们[时间/日期]的会议照常进行。",
        usage: "会前确认",
        example: "Just wanted to confirm that we are still on for our project review at 2 PM today."
      },
      {
        pattern: "I'm fairly flexible next week, so please suggest a time that suits you.",
        meaning: "我下周的时间比较灵活，所以请提一个适合您的时间。",
        usage: "展现高度配合的态度",
        example: "I'm fairly flexible next week, so please suggest a time that suits your schedule."
      }
    ],
    formalDialogue: {
      title: '正式场景：请求任务延期',
      context: 'Alex 发现因为原始数据有误，无法按时在周五提交报告，决定向经理 Sarah 申请延期。',
      conversation: [
        {
          speaker: 'Alex',
          text: "Hi Sarah, do you have a moment? I need to give you an update on the Q2 report."
        },
        {
          speaker: 'Sarah',
          text: "Sure, Alex. Is everything on track for Friday?"
        },
        {
          speaker: 'Alex',
          text: "Actually, we found some major discrepancies in the raw data this morning. I'm working with the IT team to fix it, but it will take some time."
        },
        {
          speaker: 'Sarah',
          text: "I see. How much longer do you think you'll need?"
        },
        {
          speaker: 'Alex',
          text: "I was wondering if I could request a two-day extension? That would allow me to ensure the numbers are 100% accurate before the presentation."
        },
        {
          speaker: 'Sarah',
          text: "A two-day extension sounds reasonable. Let's aim for next Tuesday EOD then."
        },
        {
          speaker: 'Alex',
          text: "Thank you for understanding, Sarah. I'll make sure to have the final version ready by Tuesday."
        }
      ],
      learnableExpressions: [
        {
          expression: "Give you an update on...",
          explanation: "就...给你一个最新的进展（比“汇报”听起来更平等）"
        },
        {
          expression: "On track",
          explanation: "在轨道上/按计划进行。"
        },
        {
          expression: "Major discrepancies",
          explanation: "重大的差异/不符之处（展现你发现了问题）"
        },
        {
          expression: "How much longer",
          explanation: "还需要多久？"
        },
        {
          expression: "Sounds reasonable",
          explanation: "听起来很合理。"
        },
        {
          expression: "Aim for...",
          explanation: "目标定在...（指新的完成时间）"
        }
      ],
      analysis: 'Alex 申请延期的方式非常专业：1. 提前沟通（没有等到周五才说）；2. 给出了具体的理由（数据有误，正在修复）；3. 给出了具体的延期请求（2天）；4. 强调了延期是为了“质量”（ensure numbers are accurate）。这种“有理由、有方案”的请求通常很容易被获准。'
    },
    smallTalkDialogue: {
      title: '非正式场景：协调多个人的会议时间',
      context: 'Alex 在团队群组里协调下周的一个头脑风暴会议。',
      conversation: [
        {
          speaker: 'Alex',
          text: "Hi guys, I'd like to get the team together for a quick brainstorm next week. Please let me know which time slot works best for everyone."
        },
        {
          speaker: 'Team Member A',
          text: "Monday afternoon works for me!"
        },
        {
          speaker: 'Team Member B',
          text: "I have a conflict on Monday. I'm back-to-back all day."
        },
        {
          speaker: 'Alex',
          text: "No worries. How about Tuesday at 10 AM? Is everyone available then?"
        },
        {
          speaker: 'Team Member C',
          text: "Tuesday at 10 AM is a bit tight for me. Could we push it back to 11 AM?"
        },
        {
          speaker: 'Alex',
          text: "Tuesday at 11 AM sounds like a plan. I'll send out the calendar invite now."
        }
      ],
      learnableExpressions: [
        {
          expression: "Get the team together",
          explanation: "把团队聚在一起（发起会议的随和说法）"
        },
        {
          expression: "Works best for everyone",
          explanation: "对大家都最合适。"
        },
        {
          expression: "Back-to-back all day",
          explanation: "全天会议一个接一个（表示非常忙）"
        },
        {
          expression: "A bit tight",
          explanation: "时间有点紧（表示虽然可以，但很仓促）"
        },
        {
          expression: "Push it back",
          explanation: "（将会议）往后推。"
        },
        {
          expression: "Sounds like a plan",
          explanation: "就这么办/听起来不错。"
        }
      ],
      analysis: '在协调团队时间时，灵活（flexible）是关键。Alex 没有强加一个时间，而是给出了选项并根据反馈调整。使用 "Push it back" 和 "Sounds like a plan" 等地道口语让沟通氛围变得轻松且高效。'
    },
    commonMistakes: [
      {
        wrong: "I want to change the meeting time.",
        better: "Would it be possible to reschedule our meeting to a different time?",
        explanation: "'I want to change' 听起来太自我中心。'Would it be possible to reschedule' 询问了对方的意见，更显礼貌。"
      },
      {
        wrong: "The meeting is canceled. I am busy.",
        better: "I'm so sorry, but I have to cancel our meeting due to an unforeseen conflict. My apologies for the late notice.",
        explanation: "取消会议必须给出解释（due to conflict）并道歉（my apologies），尤其是如果通知得比较晚（late notice）。"
      },
      {
        wrong: "Give me more time to do the work.",
        better: "I would appreciate a bit more time to complete this task. Is the deadline flexible?",
        explanation: "直接要时间很没礼貌。问 'Is the deadline flexible?'（截止日期灵活吗？）是一种更巧妙的试探。"
      },
      {
        wrong: "I am free all day Tuesday.",
        better: "I'm available most of Tuesday, but I have a small block from 1 PM to 2 PM.",
        explanation: "很少有人真的“全天有空”。给出一个大概范围并说明例外，显得你对时间管理很严谨。"
      },
      {
        wrong: "Let's meet at 9.",
        better: "Let's meet at 9 AM EST to ensure there's no confusion with time zones.",
        explanation: "如果是跨国或远程团队，永远要带上时区（EST, CST 等），否则极易产生误解。"
      }
    ],
    expressionUpgrades: [
      {
        basic: "I am busy now.",
        better: "I have a calendar conflict at the moment.",
        professional: "I'm currently tied up with a high-priority commitment, but I can certainly follow up later this afternoon.",
        explanation: "使用 high-priority commitment（高优先级任务）和 tied up（被占用）显得你非常专业且忙得有意义。"
      },
      {
        basic: "Can we move the meeting to later?",
        better: "Could we postpone the meeting to perhaps 3 PM?",
        professional: "Would it be convenient to postpone our meeting to around 3 PM? Please let me know if that works for you.",
        explanation: "使用 convenient（方便）和 postpone（延后）提升了沟通的正式感和对他人的尊重。"
      },
      {
        basic: "The work is late because I have a lot to do.",
        better: "The project is slightly behind schedule due to my heavy workload.",
        professional: "We are currently facing some delays in the project timeline due to unforeseen resource constraints.",
        explanation: "将“我太忙”转化为 behind schedule（进度落后）和 resource constraints（资源受限），将问题客观化。"
      },
      {
        basic: "I'll be gone next week.",
        better: "I will be away from the office next week.",
        professional: "Please be advised that I will be out of the office starting next Monday, with a scheduled return on Friday.",
        explanation: "使用 Please be advised 和 out of the office 是标准的商务公告口吻。"
      },
      {
        basic: "Tell me if you can come.",
        better: "Please let me know if you are available.",
        professional: "I would appreciate a confirmation of your attendance at your earliest convenience.",
        explanation: "使用 confirmation of your attendance（确认出席）和 at your earliest convenience（在您方便时尽快）展现了高度的专业礼仪。"
      }
    ],
    practiceTasks: [
      {
        title: '任务 1：回复会议冲突',
        instruction: '对方发来周三下午 2 点的会议邀请，但你那个时间要参加培训。请写一段话拒绝该邀请并提议周四上午 10 点作为替代方案。',
        example: 'Hi [Name], unfortunately I have a conflict on Wednesday at 2 PM as I\'ll be in a training session. Would Thursday at 10 AM work for you instead?'
      },
      {
        title: '任务 2：设置 OOO 自动回复',
        instruction: '撰写一个标准的 OOO（Out of Office）自动回复。要求：包含开始/结束日期、是否查看邮件、以及紧急事务联系人。',
        example: 'Thank you for your email. I am currently out of the office from Oct 1st to Oct 5th. I will be checking emails sporadically. For urgent matters, please contact [Name] at [Email].'
      },
      {
        title: '任务 3：录制延期申请',
        instruction: '录制一段 30 秒的语音申请延期。场景：因为需要等待客户的确认函，你无法在今天 EOD 前发报告。请求延期到明天中午。',
        example: 'Hi [Name], I wanted to flag something before end of day. I\'m still waiting on the client\'s written confirmation, which is a required attachment for the final report — and unfortunately it hasn\'t come through yet. As a result, I won\'t be able to submit by tonight\'s deadline. I\'d like to request a one-day extension to tomorrow at noon. Everything else is finalised and ready to go the moment that confirmation arrives. Please let me know if that works — and thank you for your understanding.'
      }
    ],
    saveablePhrases: [
      {
        phrase: "I'd like to schedule a quick meeting to discuss [Topic].",
        category: "邮件",
        meaning: "我想安排一个简短的会议来讨论[话题]。"
      },
      {
        phrase: "Does [Time/Date] work for you, or do you have a conflict?",
        category: "Small Talk",
        meaning: "[时间/日期]对您方便吗，还是您有冲突？"
      },
      {
        phrase: "I have a conflict at that time. Would [Alternative Time] be possible?",
        category: "Small Talk",
        meaning: "那个时间我有个冲突。改为[备选时间]可以吗？"
      },
      {
        phrase: "I am writing to request a short extension on the deadline for [Task].",
        category: "汇报",
        meaning: "我写这封邮件是想就[任务]请求稍微延长一下截止日期。"
      },
      {
        phrase: "Please let me know which of these time slots suits your schedule best.",
        category: "邮件",
        meaning: "请告诉我这些时间段中哪个最适合您的日程安排。"
      },
      {
        phrase: "Something urgent has come up, and I'm afraid I'll need to reschedule our call.",
        category: "Small Talk",
        meaning: "发生了一些紧急情况，恐怕我需要重新安排我们的通话。"
      },
      {
        phrase: "I'll be OOO from [Date] to [Date] with limited access to email.",
        category: "邮件",
        meaning: "我将从[日期]到[日期]休假，其间查看邮件不便。"
      },
      {
        phrase: "Just wanted to confirm that we are still on for our meeting tomorrow.",
        category: "Small Talk",
        meaning: "只是想确认一下我们明天的会议照常进行。"
      }
    ],
    resources: [
      {
        name: 'British Council — Meeting New People',
        type: '视频 + speaking practice',
        description: '入职与自我介绍、small talk、认识同事',
        why: '适合练习第一次见同事、介绍自己、开启自然对话和基本 workplace small talk。',
        url: 'https://learnenglish.britishcouncil.org/free-resources/speaking/a1/meeting-new-people'
      },
      {
        name: 'British Council — English for Emails',
        type: '职场邮件课程',
        description: '基础职场邮件、请求确认、日程沟通',
        why: '专门训练 A2-B1 工作邮件，包括组织内容、表达请求、检查语气和写清楚邮件目的。',
        url: 'https://learnenglish.britishcouncil.org/free-resources/business/english-emails'
      },
      {
        name: 'Purdue OWL — Email Etiquette',
        type: '写作指南',
        description: '基础职场邮件、向上沟通、正式请求',
        why: '适合学习给上级、老师、陌生人或同事写邮件时的 subject line、greeting、tone、grammar 和 professionalism。',
        url: 'https://owl.purdue.edu/owl/general_writing/academic_writing/email_etiquette.html'
      },
      {
        name: 'Harvard DCE — Communicate More Effectively in the Workplace',
        type: 'workplace communication article',
        description: '请求确认、会议参与、周报更新、职场沟通基础',
        why: '适合学习 workplace communication 的基本原则，例如清楚表达目的、提前准备 agenda、明确 decision-making 和 next steps。',
        url: 'https://professional.dce.harvard.edu/blog/how-to-communicate-more-effectively-in-the-workplace/'
      },
      {
        name: 'BBC Learning English — English at Work Playlist',
        type: 'YouTube 视频系列',
        description: '入职、会议、同事沟通、职场礼仪、职场 small talk',
        why: '用办公室情景讲 English-speaking workplace 的语言和 etiquette，很适合职场新人学习真实语境中的表达。',
        url: 'https://www.youtube.com/playlist?list=PLcetZ6gSk969oGvAI0e4_PgVnlGbm64bp'
      },
      {
        name: 'Asana — Status Report Template for Projects',
        type: 'workplace blog / template',
        description: '周报与进度更新、日程与时间管理、请求与确认',
        why: '清楚展示 status report 应该包含 progress、blockers、risks、next steps 等信息，特别适合职场新人学习 weekly update 和向 manager 汇报进度。',
        url: 'https://asana.com/templates/status-report'
      }
    ]
  },
  // Unit 11: 经理同步会议 / First Week Sync
  'n5': {
    id: 'n5',
    title: '经理同步会议',
    englishTitle: 'First Week Sync',
    level: 'B1-B2',
    objectives: [
      '学会在线上（Virtual）和线下（In-person）会议中礼貌地开场与自我介绍',
      '掌握会议中常见的互动话术，如表示同意、提出异议或请求补充',
      '学习如何礼貌地处理视频会议中的技术问题（静音、网速、共享屏幕等）',
      '掌握如何在会议中有效地进行笔记（Note-taking）并总结行动项（Action Items）',
      '学会在会议结束时礼貌地确认后续步骤（Next Steps）并表示感谢'
    ],
    scenarios: [
      '作为新成员在跨部门会议上被点名介绍',
      '在视频会议中发现麦克风未开启或画面卡顿时的沟通',
      '对同事提出的建议表示认同并给出理由',
      '委婉地对一个观点提出不同看法或疑虑',
      '请求主讲人针对某个复杂的图表进行详细解释',
      '在会议接近尾声时询问：“我们接下来的具体动作是什么？”',
      '会议结束后向与会者发送感谢并确认自己领取的任务'
    ],
    vocabulary: [
      {
        expression: 'virtual / hybrid meeting',
        meaning: '线上 / 混合会议',
        context: '目前职场最常见的会议形式',
        example: 'We will be holding a hybrid meeting tomorrow to include the remote team.'
      },
      {
        expression: 'mute / unmute',
        meaning: '静音 / 取消静音',
        context: '视频会议中的核心操作',
        example: 'I think you are on mute; we can\'t hear you.'
      },
      {
        expression: 'share screen',
        meaning: '共享屏幕',
        context: '演示 PPT 或文档时的操作',
        example: 'Let me share my screen so you can see the latest dashboard.'
      },
      {
        expression: 'agenda',
        meaning: '议程',
        context: '会议要讨论的事项清单',
        example: 'Has the agenda for this afternoon\'s meeting been sent out yet?'
      },
      {
        expression: 'minutes',
        meaning: '会议纪要',
        context: '会议内容的正式记录',
        example: 'Could you please take the minutes for today\'s session?'
      },
      {
        expression: 'action items',
        meaning: '行动项',
        context: '会议后需要具体执行的任务',
        example: 'Let\'s review the action items and assign owners to each task.'
      },
      {
        expression: 'input / feedback',
        meaning: '意见 / 反馈',
        context: '在会上提供的想法',
        example: 'I\'d love to get your input on the new logo design.'
      },
      {
        expression: 'jump in',
        meaning: '切入话题 / 参与讨论',
        context: '礼貌地加入对话',
        example: 'May I jump in here to add a point about the budget?'
      },
      {
        expression: 'consensus',
        meaning: '共识',
        context: '会议中达成的统一意见',
        example: 'It seems we have a consensus on moving forward with Option B.'
      },
      {
        expression: 'facilitator / moderator',
        meaning: '主持人 / 协调人',
        context: '负责引导会议流程的人',
        example: 'As the facilitator, Sarah did a great job keeping us on track.'
      },
      {
        expression: 'side-track / tangent',
        meaning: '跑题 / 离题',
        context: '偏离了主要议程',
        example: 'Let\'s not get side-tracked; we can discuss the other issue later.'
      },
      {
        expression: 'follow-up',
        meaning: '跟进',
        context: '会后的后续动作',
        example: 'I\'ll send a follow-up email with the recording of this call.'
      },
      {
        expression: 'wrap up',
        meaning: '结束 / 收尾',
        context: '会议最后的总结',
        example: 'Let\'s wrap up the meeting since we\'ve covered all the items.'
      },
      {
        expression: 'breakout room',
        meaning: '分组讨论室',
        context: '线上会议中的小群组讨论功能',
        example: 'We will now move into breakout rooms for ten minutes of brainstorming.'
      },
      {
        expression: 'stay on track',
        meaning: '保持在轨道上',
        context: '确保讨论不偏离主题',
        example: 'We only have 15 minutes left, so let\'s try to stay on track.'
      },
      {
        expression: 'elaborate',
        meaning: '详述',
        context: '请求对方多讲一些细节',
        example: 'Could you elaborate on how this change will affect the timeline?'
      },
      {
        expression: 'acknowledge',
        meaning: '确认收到 / 认可',
        context: '表示你听到了或理解了',
        example: 'I acknowledge your concern, but I believe we have a mitigation plan.'
      },
      {
        expression: 'second that',
        meaning: '赞同 / 支持那一点',
        context: '表示你也持相同看法',
        example: 'I second that! I think Sarah\'s idea is excellent.'
      },
      {
        expression: 'table it',
        meaning: '搁置 / 以后再议',
        context: '暂时不讨论某个有争议或次要的话题',
        example: 'Since we can\'t decide now, let\'s table it for the next meeting.'
      },
      {
        expression: 'recap',
        meaning: '简述回顾',
        context: '在会议末尾重复重点',
        example: 'To recap, we are going to hire two new interns by next month.'
      }
    ],
    sentencePatterns: [
      {
        pattern: "I'd like to share a few thoughts on [Topic].",
        meaning: "关于[话题]，我想分享几点想法。",
        usage: "礼貌地开启自己的发言",
        example: "I'd like to share a few thoughts on the proposed marketing budget."
      },
      {
        pattern: "I completely agree with [Name]'s point about [Subject].",
        meaning: "我完全同意[名字]关于[主题]的观点。",
        usage: "表示支持他人的看法",
        example: "I completely agree with Alex's point about simplifying the user interface."
      },
      {
        pattern: "That's a valid point, but I'm concerned about [Potential Issue].",
        meaning: "那很有道理，但我对[潜在问题]有些担心。",
        usage: "委婉地提出异议",
        example: "That's a valid point, but I'm concerned about the impact on our server costs."
      },
      {
        pattern: "Could you please go back to the previous slide/point?",
        meaning: "能麻烦您回到上一个幻灯片/观点吗？",
        usage: "请求回溯以便更好地理解",
        example: "I missed the chart on the last page. Could you please go back to the previous slide?"
      },
      {
        pattern: "I'm sorry, I think you're on mute. We can't hear you.",
        meaning: "抱歉，我想你静音了。我们听不到你说话。",
        usage: "提醒对方开启麦克风",
        example: "Mark, I'm sorry, I think you're on mute. Could you please check your mic?"
      },
      {
        pattern: "Is everyone able to see my screen clearly?",
        meaning: "大家能清晰地看到我的屏幕吗？",
        usage: "共享屏幕时的确认话术",
        example: "I've just started sharing. Is everyone able to see my screen clearly?"
      },
      {
        pattern: "To summarize our discussion, we have agreed to [Action].",
        meaning: "总结一下我们的讨论，我们已同意[行动]。",
        usage: "在会议末尾总结共识",
        example: "To summarize our discussion, we have agreed to postpone the launch by one week."
      },
      {
        pattern: "What are the next steps regarding [Topic]?",
        meaning: "关于[话题]，接下来的步骤是什么？",
        usage: "确认后续计划",
        example: "Thank you for the update. What are the next steps regarding the client onboarding?"
      },
      {
        pattern: "Could I just jump in for a second to clarify [Point]?",
        meaning: "我能插一句话澄清一下[某点]吗？",
        usage: "礼貌地切入讨论",
        example: "Could I just jump in for a second to clarify the timeline for the testing phase?"
      },
      {
        pattern: "I'll take the lead on [Task] and follow up with everyone by [Date].",
        meaning: "我将负责领头做[任务]，并在[日期]前跟进大家。",
        usage: "主动领取任务（Action Item）",
        example: "I'll take the lead on the competitor research and follow up with everyone by Friday EOD."
      }
    ],
    formalDialogue: {
      title: '正式场景：在视频会议中讨论方案',
      context: 'Alex 参加项目周会，正在就新设计的首页方案发表意见。',
      conversation: [
        {
          speaker: 'Facilitator',
          text: "So, that's the new design. Does anyone have any input before we move on?"
        },
        {
          speaker: 'Alex',
          text: "If I may jump in, I'd like to share a few thoughts. I think the layout is very clean, which is great for user experience."
        },
        {
          speaker: 'Designer',
          text: "Thanks, Alex. Any specific concerns?"
        },
        {
          speaker: 'Alex',
          text: "That's a valid point about the cleanliness, but I'm concerned that the 'Call to Action' button is a bit too small on mobile. Have we tested that yet?"
        },
        {
          speaker: 'Designer',
          text: "Good catch. We actually haven't done the mobile-specific testing yet."
        },
        {
          speaker: 'Alex',
          text: "I completely agree with the overall direction, but maybe we could enlarge that button slightly. I'd be happy to help review the mobile version next week."
        },
        {
          speaker: 'Facilitator',
          text: "Great suggestion. Designer, can you add that as an action item? Let's recap: Alex will review the mobile layout with the design team next Wednesday."
        }
      ],
      learnableExpressions: [
        {
          expression: "Does anyone have any input?",
          explanation: "有人有意见/建议吗？（征求反馈的常用语）"
        },
        {
          expression: "If I may jump in",
          explanation: "如果我可以插句话的话（礼貌开启发言）"
        },
        {
          expression: "Call to Action (CTA) button",
          explanation: "行动呼吁按钮（互联网职场高频词）"
        },
        {
          expression: "Good catch",
          explanation: "问得好/敏锐的观察。"
        },
        {
          expression: "Overall direction",
          explanation: "整体的方向。"
        },
        {
          expression: "Add that as an action item",
          explanation: "把那个加入到行动项中。"
        }
      ],
      analysis: '在这段会议互动中，Alex 表现得非常有技巧。他先给予肯定（layout is clean），然后使用“That\'s a valid point, but...”引出自己的疑虑。这种“先肯定后建议”的方式让对方更容易接受。最后，他不仅提出了问题，还主动提出协助（happy to help review），展示了协作精神。'
    },
    smallTalkDialogue: {
      title: '非正式场景：处理线上会议的技术小插曲',
      context: '会议刚开始，Alex 的网络似乎有点问题，大家正在互相确认状态。',
      conversation: [
        {
          speaker: 'Host',
          text: "Hi Alex, you're breaking up a bit. Can you hear us?"
        },
        {
          speaker: 'Alex',
          text: "Oh, sorry! My connection is a bit unstable today. Is it better now?"
        },
        {
          speaker: 'Host',
          text: "A little, but your video is lagging. Maybe try turning off your camera?"
        },
        {
          speaker: 'Alex',
          text: "Good idea. Let me try that. (Turns off camera) How about now? Is the audio clearer?"
        },
        {
          speaker: 'Host',
          text: "Much better! We can hear you perfectly now. Also, Sarah, you're on mute."
        },
        {
          speaker: 'Sarah',
          text: "(Unmutes) My apologies! I was talking to myself. Let's get started with the agenda."
        }
      ],
      learnableExpressions: [
        {
          expression: "Breaking up",
          explanation: "（声音/信号）断断续续。"
        },
        {
          expression: "Unstable connection",
          explanation: "不稳定的连接（网速不好）"
        },
        {
          expression: "Lagging",
          explanation: "（画面/系统）卡顿、延迟。"
        },
        {
          expression: "Audio is clearer",
          explanation: "音频更清晰了。"
        },
        {
          expression: "Talking to myself",
          explanation: "在自言自语（用于自嘲忘记开麦克风的尴尬）"
        }
      ],
      analysis: '处理线上会议的技术问题是现代职场人的必备技能。Alex 使用了正确的术语（breaking up, unstable, lagging）来描述问题，并迅速采取了“关闭摄像头”的有效行动。Sarah 用一句幽默的 "Talking to myself" 缓解了忘开麦克的尴尬，这些都是非常自然的职场社交细节。'
    },
    commonMistakes: [
      {
        wrong: "I want to speak now.",
        better: "May I add something here?",
        explanation: "不要直接宣布你要说话。使用 'May I add something'（我能加一点内容吗）更显礼貌。"
      },
      {
        wrong: "You are wrong about the data.",
        better: "I have a different perspective on those numbers. Could we double-check the source?",
        explanation: "职场中不要直呼其非。用 'different perspective'（不同的视角）引出异议，并建议 'double-check'（双重确认）。"
      },
      {
        wrong: "My internet is bad. Bye.",
        better: "I'm having some connectivity issues. I'll drop off and try to rejoin in a minute.",
        explanation: "掉线前要解释清楚并说明会尝试重连（try to rejoin）。"
      },
      {
        wrong: "What did you say? I didn't listen.",
        better: "I'm sorry, I missed that last part. Could you please repeat it for me?",
        explanation: "承认没听到时要客气，不要说 'didn't listen'。用 'missed the last part' 表示是由于某些原因没跟上。"
      },
      {
        wrong: "The meeting is too long. Stop.",
        better: "I noticed we're running over time. Perhaps we should wrap up or schedule a follow-up session?",
        explanation: "不要直接叫停。提醒大家 'running over time'（超时了）并提议 'wrap up'（收尾）或 'follow-up'（跟进）。"
      }
    ],
    expressionUpgrades: [
      {
        basic: "I agree with you.",
        better: "I'm on the same page as you.",
        professional: "I completely echo your sentiments regarding the need for more efficient resource allocation.",
        explanation: "使用 echo your sentiments（呼应你的观点）和 regarding（关于）提升了表达的正式度和力度。"
      },
      {
        basic: "Can you explain this chart?",
        better: "Could you walk us through this chart?",
        professional: "Could you please provide some additional context regarding the key metrics shown in this visualization?",
        explanation: "使用 additional context（额外的背景）和 key metrics（关键指标）展示你具备深厚的专业素养。"
      },
      {
        basic: "We need to finish.",
        better: "Let's wrap things up.",
        professional: "In the interest of time, let's conclude this session and outline the immediate action items.",
        explanation: "使用 In the interest of time（为了节省时间/由于时间关系）是一个非常职业化的会议引导短语。"
      },
      {
        basic: "I'll do this task.",
        better: "I'll take care of this.",
        professional: "I'm happy to take ownership of this action item and will provide an update during our next sync.",
        explanation: "使用 take ownership（承担责任/认领）和 during our next sync（在下次同步中）体现了极强的执行力和闭环意识。"
      },
      {
        basic: "Sorry for interrupting.",
        better: "Pardon the interruption.",
        professional: "My apologies for the interruption; I just wanted to ensure we clarify this point before moving on to the next agenda item.",
        explanation: "使用 ensure we clarify（确保我们澄清）给你的打断提供了一个“为了项目质量”的专业理由。"
      }
    ],
    practiceTasks: [
      {
        title: '任务 1：会议开场自我介绍',
        instruction: '想象你被拉入一个有 10 人的线上会议，主持人说："Welcome, Alex. Tell the group a bit about your role." 录制一段 20 秒的英语回答。',
        example: 'Hi everyone, thanks for having me! I\'m Alex, the new Data Analyst. I\'ll be supporting this project by handling the performance reporting and data insights.'
      },
      {
        title: '任务 2：练习委婉异议',
        instruction: '同事提议把项目发布时间提前到周一，但你觉得时间太赶。请用 "That\'s a valid point, but I\'m concerned..." 结构写一段话。',
        example: 'That\'s a valid point about wanting to launch early, but I\'m concerned that we won\'t have enough time for the final QA check. Could we perhaps aim for Wednesday instead?'
      },
      {
        title: '任务 3：总结行动项',
        instruction: '模拟会议结束，你作为笔记员，请用 3 个 Bullet Points 总结出“谁、在什么时候、要做什么”。',
        example: '- Alex to fix the login bug by Friday EOD.\n- Sarah to send the client presentation by Monday morning.\n- Mark to schedule a follow-up meeting for next Thursday.'
      }
    ],
    saveablePhrases: [
      {
        phrase: "I'd like to share a few thoughts on the proposed strategy.",
        category: "汇报",
        meaning: "我想分享几点关于提议战略的想法。"
      },
      {
        phrase: "That's a valid point, but I'm concerned about the potential impact on our timeline.",
        category: "Small Talk",
        meaning: "那很有道理，但我对可能对时间线产生的影响有些担心。"
      },
      {
        phrase: "I'm sorry, I think you're on mute. We can't hear you clearly.",
        category: "Small Talk",
        meaning: "抱歉，我想你静音了。我们听不清你说话。"
      },
      {
        phrase: "To summarize our discussion, we have agreed to [Action Item].",
        category: "汇报",
        meaning: "总结一下我们的讨论，我们已同意[行动项]。"
      },
      {
        phrase: "What are the next steps and immediate action items for this project?",
        category: "汇报",
        meaning: "这项任务接下来的步骤和立即要做的行动项是什么？"
      },
      {
        phrase: "I'll take ownership of this task and provide an update by next Monday.",
        category: "汇报",
        meaning: "我将负责这项任务并在下周一前提供最新进展。"
      },
      {
        phrase: "In the interest of time, let's wrap up this discussion and move to the next item.",
        category: "Small Talk",
        meaning: "为了节省时间，让我们结束这次讨论并进入下一项。"
      },
      {
        phrase: "Could you please go back to the previous slide? I have a quick question.",
        category: "Small Talk",
        meaning: "能麻烦您回到上一个幻灯片吗？我有个简短的问题。"
      }
    ],
    resources: [
      {
        name: 'British Council — Meeting New People',
        type: '视频 + speaking practice',
        description: '入职与自我介绍、small talk、认识同事',
        why: '适合练习第一次见同事、介绍自己、开启自然对话和基本 workplace small talk。',
        url: 'https://learnenglish.britishcouncil.org/free-resources/speaking/a1/meeting-new-people'
      },
      {
        name: 'British Council — English for Emails',
        type: '职场邮件课程',
        description: '基础职场邮件、请求确认、日程沟通',
        why: '专门训练 A2-B1 工作邮件，包括组织内容、表达请求、检查语气和写清楚邮件目的。',
        url: 'https://learnenglish.britishcouncil.org/free-resources/business/english-emails'
      },
      {
        name: 'Purdue OWL — Email Etiquette',
        type: '写作指南',
        description: '基础职场邮件、向上沟通、正式请求',
        why: '适合学习给上级、老师、陌生人或同事写邮件时的 subject line、greeting、tone、grammar 和 professionalism。',
        url: 'https://owl.purdue.edu/owl/general_writing/academic_writing/email_etiquette.html'
      },
      {
        name: 'Harvard DCE — Communicate More Effectively in the Workplace',
        type: 'workplace communication article',
        description: '请求确认、会议参与、周报更新、职场沟通基础',
        why: '适合学习 workplace communication 的基本原则，例如清楚表达目的、提前准备 agenda、明确 decision-making 和 next steps。',
        url: 'https://professional.dce.harvard.edu/blog/how-to-communicate-more-effectively-in-the-workplace/'
      },
      {
        name: 'BBC Learning English — English at Work Playlist',
        type: 'YouTube 视频系列',
        description: '入职、会议、同事沟通、职场礼仪、职场 small talk',
        why: '用办公室情景讲 English-speaking workplace 的语言和 etiquette，很适合职场新人学习真实语境中的表达。',
        url: 'https://www.youtube.com/playlist?list=PLcetZ6gSk969oGvAI0e4_PgVnlGbm64bp'
      },
      {
        name: 'Asana — Status Report Template for Projects',
        type: 'workplace blog / template',
        description: '周报与进度更新、日程与时间管理、请求与确认',
        why: '清楚展示 status report 应该包含 progress、blockers、risks、next steps 等信息，特别适合职场新人学习 weekly update 和向 manager 汇报进度。',
        url: 'https://asana.com/templates/status-report'
      }
    ]
  },
  // Unit 12: 企业文化与价值观 / Culture & Values
  'n6': {
    id: 'n6',
    title: '企业文化与价值观',
    englishTitle: 'Culture & Values',
    level: 'B1-B2',
    objectives: [
      '学会使用“过去、现在、未来”（PPP）框架撰写简练的周报',
      '掌握如何用专业的方式汇报成就（Achievements）与里程碑（Milestones）',
      '学习如何清晰地描述工作中的障碍（Blockers）并请求支持',
      '掌握量化结果（Quantifiable Results）的表达方式，增加报告的说服力',
      '学会根据汇报对象（经理 vs 全组）调整报告的详细程度和语气'
    ],
    scenarios: [
      '在每周五下午向直属经理发送书面周报',
      '在周一早会（Stand-up Meeting）上进行口头进度同步',
      '就某个长期项目的阶段性进展撰写里程碑报告',
      '当项目进度落后于计划（Behind Schedule）时的预警沟通',
      '向团队通报自己本周解决了哪些关键的技术障碍',
      '在跨部门群组中分享项目的最新达成数据',
      '请求经理对下周的重点工作计划进行确认'
    ],
    vocabulary: [
      {
        expression: 'weekly update / report',
        meaning: '周报 / 周动态',
        context: '职场最常见的定期沟通形式',
        example: 'Please submit your weekly update to the shared folder by EOD Friday.'
      },
      {
        expression: 'milestone',
        meaning: '里程碑',
        context: '项目中具有重大意义的节点',
        example: 'We have reached a major milestone: the beta version is now live.'
      },
      {
        expression: 'blocker / obstacle',
        meaning: '障碍 / 阻碍',
        context: '阻止你继续推进工作的因素',
        example: 'The delay in legal approval is currently our main blocker.'
      },
      {
        expression: 'on track',
        meaning: '按计划进行',
        context: '一切顺利，没有延误',
        example: 'Despite the challenges, the project remains on track for the June launch.'
      },
      {
        expression: 'behind schedule',
        meaning: '进度落后',
        context: '晚于原定计划',
        example: 'We are currently two days behind schedule due to server issues.'
      },
      {
        expression: 'ahead of schedule',
        meaning: '进度领先',
        context: '早于原定计划完成',
        example: 'Thanks to the team\'s hard work, we are actually ahead of schedule.'
      },
      {
        expression: 'KPI (Key Performance Indicator)',
        meaning: '关键绩效指标',
        context: '衡量工作成果的量化标准',
        example: 'Our primary KPI for this month is reducing the churn rate by 5%.'
      },
      {
        expression: 'status update',
        meaning: '状态更新',
        context: '简短的进展说明',
        example: 'Could you give us a quick status update on the hiring process?'
      },
      {
        expression: 'accomplishment / achievement',
        meaning: '成就 / 达成项',
        context: '本周完成的主要工作',
        example: 'My main accomplishment this week was finalizing the client contract.'
      },
      {
        expression: 'bottleneck',
        meaning: '瓶颈',
        context: '流程中限制整体效率的环节',
        example: 'The manual data entry process is creating a major bottleneck in our workflow.'
      },
      {
        expression: 'next steps / upcoming tasks',
        meaning: '后续步骤 / 即将进行的任务',
        context: '未来的计划安排',
        example: 'My upcoming tasks include drafting the Q4 marketing budget.'
      },
      {
        expression: 'quantifiable',
        meaning: '可量化的',
        context: '用数据说话',
        example: 'Try to include quantifiable results in your report, like percentages or dollar amounts.'
      },
      {
        expression: 'resource allocation',
        meaning: '资源分配',
        context: '人力、财力或时间的安排',
        example: 'We need to review our resource allocation to speed up the development.'
      },
      {
        expression: 'low-priority / high-priority',
        meaning: '低优先级 / 高优先级',
        context: '任务的重要性程度',
        example: 'I have moved the documentation to a low-priority task for this week.'
      },
      {
        expression: 'summary / overview',
        meaning: '总结 / 概览',
        context: '简要的说明',
        example: 'Here is a high-level overview of our progress over the last month.'
      },
      {
        expression: 'work in progress (WIP)',
        meaning: '进行中的工作',
        context: '尚未完成但正在处理的任务',
        example: 'The design mockup is still a work in progress, but I can show you a draft.'
      },
      {
        expression: 'stand-up meeting',
        meaning: '站立会议',
        context: '通常每日或每周一次的快速对齐会议',
        example: 'During the morning stand-up, everyone gives a 60-second update.'
      },
      {
        expression: 'escalate',
        meaning: '升级（问题）',
        context: '将解决不了的问题提交给上级',
        example: 'If we don\'t hear back by noon, I will escalate this issue to the director.'
      },
      {
        expression: 'recap',
        meaning: '回顾',
        context: '对过去一段时间的简要重复',
        example: 'Let\'s start with a quick recap of what we achieved last week.'
      },
      {
        expression: 'deliverable',
        meaning: '交付物',
        context: '工作中产生的产品、报告或文档',
        example: 'The final deliverable for this phase is a comprehensive market analysis report.'
      }
    ],
    sentencePatterns: [
      {
        pattern: "This week, I focused on [Main Task] and managed to [Outcome].",
        meaning: "本周，我专注于[主要任务]并成功[结果]。",
        usage: "总结本周工作重点与产出",
        example: "This week, I focused on the data migration and managed to complete 90% of the cleanup."
      },
      {
        pattern: "I'm pleased to report that we have [Achievement/Milestone].",
        meaning: "我很荣幸地报告，我们已经[达成项/里程碑]。",
        usage: "正式汇报好消息",
        example: "I'm pleased to report that we have exceeded our monthly sales target by 15%."
      },
      {
        pattern: "I am currently facing a blocker regarding [Topic], which might delay [Task].",
        meaning: "我目前在[话题]方面遇到了障碍，这可能会延误[任务]。",
        usage: "及时汇报困难与风险",
        example: "I am currently facing a blocker regarding the API access, which might delay the dashboard update."
      },
      {
        pattern: "The project is currently [on track / behind schedule / ahead of schedule].",
        meaning: "该项目目前[按计划进行 / 落后于计划 / 领先于计划]。",
        usage: "汇报整体进度状态",
        example: "The project is currently on track for the final review next Thursday."
      },
      {
        pattern: "My primary focus for next week will be [Upcoming Task].",
        meaning: "下周我的主要重心将是[即将进行的任务]。",
        usage: "规划下周重点",
        example: "My primary focus for next week will be preparing the budget proposal for the board meeting."
      },
      {
        pattern: "Compared to last week, we've seen a [Percentage] increase in [Metric].",
        meaning: "与上周相比，我们在[指标]方面看到了[百分比]的增长。",
        usage: "用数据进行对比分析",
        example: "Compared to last week, we've seen a 20% increase in user sign-ups."
      },
      {
        pattern: "Could you please provide some guidance on [Blocker]? It would help me move forward.",
        meaning: "您能就[障碍]提供一些指导吗？这会帮我继续推进。",
        usage: "请求上级协助解决问题",
        example: "Could you please provide some guidance on the client approval process? It would help me move forward with the launch."
      },
      {
        pattern: "I have successfully resolved the issue with [Problem] that we discussed earlier.",
        meaning: "我已经成功解决了我们之前讨论过的关于[问题]的事宜。",
        usage: "确认问题已解决",
        example: "I have successfully resolved the issue with the server latency that we discussed earlier."
      },
      {
        pattern: "To recap my week: [Point 1], [Point 2], and [Point 3].",
        meaning: "总结一下我这一周：[要点 1]、[要点 2] 和 [要点 3]。",
        usage: "口头或书面快速总结",
        example: "To recap my week: finished the audit, met with three new clients, and drafted the Q3 plan."
      },
      {
        pattern: "Please let me know if you'd like more details on any of these items.",
        meaning: "如果您想了解其中任何一项的更多细节，请告知我。",
        usage: "报告结尾的客套话",
        example: "I hope this update is useful. Please let me know if you'd like more details on any of these items."
      }
    ],
    formalDialogue: {
      title: '正式场景：1-on-1 进度同步',
      context: 'Alex 在每周的 1-on-1 会议上向经理 Sarah 汇报本周进展。',
      conversation: [
        {
          speaker: 'Sarah',
          text: "Hi Alex, let's go over your progress for this week. How are things looking?"
        },
        {
          speaker: 'Alex',
          text: "Hi Sarah. It's been a productive week. My main focus was the user feedback analysis, and I've successfully completed the first draft of the report."
        },
        {
          speaker: 'Sarah',
          text: "That's great. Did you encounter any obstacles?"
        },
        {
          speaker: 'Alex',
          text: "Yes, I'm currently facing a blocker regarding the regional data from the Asia team. They haven't sent over their final figures yet, which might delay the total summary."
        },
        {
          speaker: 'Sarah',
          text: "I see. I'll reach out to their manager this afternoon to speed things up."
        },
        {
          speaker: 'Alex',
          text: "I appreciate that. Other than that, everything is on track. For next week, my primary focus will be finalizing the visualization once I have those numbers."
        },
        {
          speaker: 'Sarah',
          text: "Excellent. Keep up the good work!"
        }
      ],
      learnableExpressions: [
        {
          expression: "Go over your progress",
          explanation: "过一遍你的进度（汇报进度的常用语）"
        },
        {
          expression: "Productive week",
          explanation: "高产的一周（正向的开场评价）"
        },
        {
          expression: "Encounter any obstacles",
          explanation: "遇到任何障碍吗？"
        },
        {
          expression: "Facing a blocker",
          explanation: "面临一个阻碍（非常地道的表达）"
        },
        {
          expression: "Speed things up",
          explanation: "加速进程。"
        },
        {
          expression: "Keep up the good work",
          explanation: "保持良好表现（上级对下级的标准鼓励语）"
        }
      ],
      analysis: 'Alex 的汇报非常专业：1. 先说产出（completed the first draft）；2. 诚实且具体地汇报了障碍（blocker regarding Asia team）；3. 说明了障碍的后果（might delay the summary）；4. 规划了下周重心。Sarah 作为经理也给出了积极的支持（reach out to their manager）。这是一种非常健康的职场反馈闭环。'
    },
    smallTalkDialogue: {
      title: '非正式场景：在 Slack 群组中的周五小结',
      context: '周五下午，Alex 在团队频道里发了一段简短的工作小结。',
      conversation: [
        {
          speaker: 'Alex',
          text: "Happy Friday, team! 🚀 Quick recap of my week:\n- Finished the UI audit for the mobile app.\n- Fixed 5 high-priority bugs in the login flow.\n- Onboarded two new beta testers.\n\nEverything is on track. Have a great weekend everyone! 🍻"
        },
        {
          speaker: 'Colleague A',
          text: "Nice work on those bugs, Alex! That was a huge relief for the tech team."
        },
        {
          speaker: 'Alex',
          text: "Thanks! Happy to help. See you all on Monday!"
        }
      ],
      learnableExpressions: [
        {
          expression: "Happy Friday",
          explanation: "周五快乐（周五常用的社交开场）"
        },
        {
          expression: "Quick recap",
          explanation: "快速回顾。"
        },
        {
          expression: "Huge relief",
          explanation: "巨大的解脱（表示对方解决了一个让人头疼的问题）"
        },
        {
          expression: "Happy to help",
          explanation: "很高兴能帮上忙。"
        }
      ],
      analysis: '在非正式渠道（如 Slack/Teams）发周报时，应保持简洁、使用 Bullet Points，并适当添加 Emoji 来增加亲和力。这种做法不仅让团队知道你在做什么，还增加了你的可见度（Visibility）并能收获及时的正向反馈。'
    },
    commonMistakes: [
      {
        wrong: "I did many things this week.",
        better: "This week, I achieved several key milestones, including [Project X].",
        explanation: "'Did many things' 太空泛。使用 'achieved key milestones'（达成了关键里程碑）并具体化内容，显得更有成就感。"
      },
      {
        wrong: "I have problems. Help me.",
        better: "I've run into a few technical challenges. Could we discuss some potential solutions during our sync?",
        explanation: "不要直接喊救命。描述为 'technical challenges'（技术挑战）并提议讨论 'potential solutions'（潜在解决方案），显得你有思考过。"
      },
      {
        wrong: "Next week I will work.",
        better: "Looking ahead to next week, my main priorities are [Task A] and [Task B].",
        explanation: "'Will work' 是废话。使用 'Looking ahead'（展望）和 'priorities'（优先级事项）展示你的规划性。"
      },
      {
        wrong: "The project is bad and slow.",
        better: "The project is currently behind schedule due to resource constraints, but I am working on a mitigation plan.",
        explanation: "不要用负面形容词。使用 'behind schedule'（进度落后）描述现状，并主动提到 'mitigation plan'（缓解/补救方案）。"
      },
      {
        wrong: "I am finished with my tasks.",
        better: "I have successfully wrapped up all my assigned deliverables for this week.",
        explanation: "'Finished' 很普通。使用 'wrapped up'（圆满完成）和 'deliverables'（交付物）更具职场范儿。"
      }
    ],
    expressionUpgrades: [
      {
        basic: "I worked on the marketing project.",
        better: "I made significant progress on the marketing campaign.",
        professional: "I spearheaded the development of the new marketing campaign, resulting in a 10% increase in lead generation.",
        explanation: "使用 spearheaded（带头/主导）和 resulting in（导致了...结果）将工作描述为带有明确成果的行动。"
      },
      {
        basic: "Tell me if this is okay.",
        better: "Please let me know if you approve of this approach.",
        professional: "I would welcome your feedback on this proposal and hope to align on the next steps by EOD.",
        explanation: "使用 welcome your feedback（欢迎您的反馈）和 align on the next steps（就后续步骤达成对齐）是高级的经理管理语言。"
      },
      {
        basic: "I solved the error.",
        better: "I fixed the bug in the system.",
        professional: "I identified the root cause of the system error and implemented a permanent fix to prevent recurrence.",
        explanation: "使用 root cause（根本原因）和 permanent fix（永久性修复）展示了你的问题解决深度。"
      },
      {
        basic: "I am waiting for Mark.",
        better: "I am currently dependent on Mark's input.",
        professional: "The project is currently pending Mark's final sign-off, which is a critical dependency for our next phase.",
        explanation: "使用 pending sign-off（等待签字/确认）和 critical dependency（关键依赖项）准确描述了协作中的制约关系。"
      },
      {
        basic: "Everything is fine.",
        better: "Everything is moving along well.",
        professional: "All project streams are currently operating within the established timeline and budget parameters.",
        explanation: "使用 operating within parameters（在参数范围内运行）显得极其严谨和专业。"
      }
    ],
    practiceTasks: [
      {
        title: '任务 1：撰写 PPP 周报',
        instruction: '按照 Progress（本周进展）、Plans（下周计划）、Problems（目前问题）的框架，为自己虚拟一个职位写一份 100 词左右的周报。',
        example: 'Progress: Completed the UI audit.\nPlans: Finalize the design mockup.\nProblems: Waiting for the API documentation from the backend team.'
      },
      {
        title: '任务 2：量化你的成就',
        instruction: '将以下句子改写为包含数字的专业汇报语：\n"I helped a lot of customers this week and they were happy."',
        example: 'Managed 50+ customer support tickets this week with a 95% satisfaction rating, exceeding the team average by 10%.'
      },
      {
        title: '任务 3：录制 60 秒 Stand-up 更新',
        instruction: '录制一段语音，模拟每日站立会议。要求：包含“昨天做了什么、今天打算做什么、目前有什么困难”。',
        example: 'Good morning, everyone! Quick update from my side. Yesterday, I completed the first draft of the Q3 user research report and shared it with the design team for initial review. Today, I\'ll be incorporating their feedback and preparing the summary slides for Thursday\'s presentation. One blocker to flag — I\'m still waiting on dashboard access from IT, which I need for the final data pull. If anyone has a contact there who could expedite it, that would be a huge help. That\'s it from me!'
      }
    ],
    saveablePhrases: [
      {
        phrase: "This week, I focused on [Task] and managed to [Outcome].",
        category: "汇报",
        meaning: "本周，我专注于[任务]并成功[结果]。"
      },
      {
        phrase: "I'm pleased to report that we have reached a major milestone ahead of schedule.",
        category: "汇报",
        meaning: "我很荣幸地报告，我们已经提前达到了一个重大的里程碑。"
      },
      {
        phrase: "I am currently facing a blocker regarding [Topic], which might delay the timeline.",
        category: "汇报",
        meaning: "我目前在[话题]方面遇到了障碍，这可能会延误时间线。"
      },
      {
        phrase: "Looking ahead to next week, my primary focus will be [Task].",
        category: "汇报",
        meaning: "展望下周，我的主要重心将是[任务]。"
      },
      {
        phrase: "The project remains on track, and we've seen a [Percentage] increase in efficiency.",
        category: "汇报",
        meaning: "项目仍在按计划进行，我们的效率提升了[百分比]。"
      },
      {
        phrase: "I've successfully resolved the [Issue] and will follow up with the results shortly.",
        category: "汇报",
        meaning: "我已经成功解决了[问题]并将很快跟进结果。"
      },
      {
        phrase: "Could you please provide some guidance on [Blocker]? It would help me move forward.",
        category: "汇报",
        meaning: "您能就[障碍]提供一些指导吗？这会帮我继续推进。"
      },
      {
        phrase: "To recap my week: [Item A], [Item B], and [Item C]. Everything is moving along well.",
        category: "汇报",
        meaning: "总结一下我这一周：[A]、[B] 和 [C]。一切进展顺利。"
      }
    ],
    resources: [
      {
        name: 'British Council — Meeting New People',
        type: '视频 + speaking practice',
        description: '入职与自我介绍、small talk、认识同事',
        why: '适合练习第一次见同事、介绍自己、开启自然对话和基本 workplace small talk。',
        url: 'https://learnenglish.britishcouncil.org/free-resources/speaking/a1/meeting-new-people'
      },
      {
        name: 'British Council — English for Emails',
        type: '职场邮件课程',
        description: '基础职场邮件、请求确认、日程沟通',
        why: '专门训练 A2-B1 工作邮件，包括组织内容、表达请求、检查语气和写清楚邮件目的。',
        url: 'https://learnenglish.britishcouncil.org/free-resources/business/english-emails'
      },
      {
        name: 'Purdue OWL — Email Etiquette',
        type: '写作指南',
        description: '基础职场邮件、向上沟通、正式请求',
        why: '适合学习给上级、老师、陌生人或同事写邮件时的 subject line、greeting、tone、grammar 和 professionalism。',
        url: 'https://owl.purdue.edu/owl/general_writing/academic_writing/email_etiquette.html'
      },
      {
        name: 'Harvard DCE — Communicate More Effectively in the Workplace',
        type: 'workplace communication article',
        description: '请求确认、会议参与、周报更新、职场沟通基础',
        why: '适合学习 workplace communication 的基本原则，例如清楚表达目的、提前准备 agenda、明确 decision-making 和 next steps。',
        url: 'https://professional.dce.harvard.edu/blog/how-to-communicate-more-effectively-in-the-workplace/'
      },
      {
        name: 'BBC Learning English — English at Work Playlist',
        type: 'YouTube 视频系列',
        description: '入职、会议、同事沟通、职场礼仪、职场 small talk',
        why: '用办公室情景讲 English-speaking workplace 的语言和 etiquette，很适合职场新人学习真实语境中的表达。',
        url: 'https://www.youtube.com/playlist?list=PLcetZ6gSk969oGvAI0e4_PgVnlGbm64bp'
      },
      {
        name: 'Asana — Status Report Template for Projects',
        type: 'workplace blog / template',
        description: '周报与进度更新、日程与时间管理、请求与确认',
        why: '清楚展示 status report 应该包含 progress、blockers、risks、next steps 等信息，特别适合职场新人学习 weekly update 和向 manager 汇报进度。',
        url: 'https://asana.com/templates/status-report'
      }
    ]
  },
  
  // PATH 3 & 4 placeholders (c1-c6, m1-m6) - similar structure
  // Unit 13: 高效会议主导 / Running Meetings
  'c1': {
    id: 'c1',
    title: '高效会议主导',
    englishTitle: 'Running Meetings',
    level: 'C1',
    objectives: [
      '学会如何设定清晰的会议议程（Agenda）并引导讨论节奏',
      '掌握有效开启会议（Opening）并介绍背景与目标的技巧',
      '学习如何礼貌地把控发言时间，防止讨论跑题（Sidetracking）',
      '掌握在会议中总结共识（Building Consensus）并分配行动项的方式',
      '学会优雅地结束会议（Closing）并确保后续跟进（Follow-up）流程'
    ],
    scenarios: [
      '作为项目经理主持每周的项目复盘会',
      '发起一个跨部门的头脑风暴会议讨论新方案',
      '在会议开始前进行 5 分钟的专业破冰（Warm-up）',
      '当两位同事发生激烈争论时，作为主持人进行调解和引导',
      '发现讨论超时时，礼貌地提议“以后再议”（Table it）',
      '会议结束前总结并确认每个人的责任（Accountability）',
      '通过邮件发送会议纪要（Meeting Minutes）并列出截止日期'
    ],
    vocabulary: [
      {
        expression: 'chair / lead a meeting',
        meaning: '主持会议',
        context: '作为主导者掌控会议流程',
        example: 'Sarah will be chairing today\'s session on the annual budget.'
      },
      {
        expression: 'set the stage',
        meaning: '铺垫背景 / 作开场白',
        context: '在深入细节前提供宏观背景',
        example: 'Let me set the stage by giving you a brief history of this project.'
      },
      {
        expression: 'off-topic / sidetracked',
        meaning: '跑题 / 离题',
        context: '讨论内容偏离了议程',
        example: 'We are getting a bit off-topic here; let\'s return to the main agenda.'
      },
      {
        expression: 'time-keeper',
        meaning: '时间记录员',
        context: '负责提醒讨论时长的人',
        example: 'Alex, could you act as the time-keeper for this brainstorming session?'
      },
      {
        expression: 'floor is open',
        meaning: '开放发言',
        context: '邀请大家提问或发表意见',
        example: 'The floor is now open for any questions or feedback.'
      },
      {
        expression: 'wrap up',
        meaning: '总结 / 结束',
        context: '会议末尾的收尾动作',
        example: 'Let\'s start to wrap up so we can finish on time.'
      },
      {
        expression: 'action item / takeaway',
        meaning: '行动项 / 会后任务',
        context: '会议后需要具体执行的工作',
        example: 'Each person should leave this meeting with at least one clear action item.'
      },
      {
        expression: 'consensus',
        meaning: '共识',
        context: '全体成员达成的一致意见',
        example: 'Do we have a consensus on moving the launch date to October?'
      },
      {
        expression: 'facilitate',
        meaning: '引导 / 促进',
        context: '帮助团队更高效地沟通和达成目标',
        example: 'My role today is to facilitate a productive discussion among the departments.'
      },
      {
        expression: 'table it',
        meaning: '以后再议 / 搁置',
        context: '因为时间或分歧暂时停止讨论某项',
        example: 'That\'s a complex issue; let\'s table it for our next deep-dive session.'
      },
      {
        expression: 'follow-up',
        meaning: '跟进',
        context: '会后的后续动作',
        example: 'I\'ll send a follow-up email with the notes and recording by tomorrow.'
      },
      {
        expression: 'input / contribution',
        meaning: '意见 / 贡献',
        context: '与会者提供的想法或建议',
        example: 'Thank you for your valuable input during the brainstorming.'
      },
      {
        expression: 'adjourn',
        meaning: '（会议）结束 / 休会',
        context: '正式宣布会议结束',
        example: 'Since we\'ve covered all items, I declare this meeting adjourned.'
      },
      {
        expression: 'stick to the agenda',
        meaning: '紧扣议程',
        context: '防止随意扩大会议范围',
        example: 'To be efficient, we really need to stick to the agenda today.'
      },
      {
        expression: 'interrupt politely',
        meaning: '礼貌打断',
        context: '在不冒犯他人的情况下切入话题',
        example: 'May I interrupt politely for a second to clarify the timeline?'
      },
      {
        expression: 'briefing',
        meaning: '简报 / 情况说明',
        context: '对某项事宜的快速说明',
        example: 'I\'ll give you a quick briefing on the client\'s new requirements.'
      },
      {
        expression: 'roundtable',
        meaning: '圆桌讨论 / 轮流发言',
        context: '每个人都有机会表达意见的形式',
        example: 'Let\'s have a quick roundtable where everyone shares their top priority.'
      },
      {
        expression: 'minutes',
        meaning: '会议纪要',
        context: '对会议过程的详细记录',
        example: 'I\'ll share the meeting minutes via email by end of day.'
      },
      {
        expression: 'attendance',
        meaning: '出席 / 与会人员',
        context: '参加会议的人员名单',
        example: 'We have full attendance today, which is great for decision-making.'
      },
      {
        expression: 'deep dive',
        meaning: '深度探讨',
        context: '对某个特定话题的详尽分析',
        example: 'Next week we\'ll have a deep dive into the technical architecture.'
      }
    ],
    sentencePatterns: [
      {
        pattern: "Thank you all for coming. The purpose of today's meeting is to [Goal].",
        meaning: "感谢大家光临。今天会议的目的是[目标]。",
        usage: "会议开场的标准陈述",
        example: "Thank you all for coming. The purpose of today's meeting is to finalize the product roadmap for Q4."
      },
      {
        pattern: "To keep us on track, I'd like to stick to the agenda we sent out.",
        meaning: "为了不偏离轨道，我想紧扣我们发出的议程。",
        usage: "主持人把控讨论范围",
        example: "To keep us on track, I'd like to stick to the agenda and spend no more than 10 minutes on each item."
      },
      {
        pattern: "I think we're drifting a bit. Let's get back to [Main Topic].",
        meaning: "我觉得我们有点跑题了。让我们回到[主话题]上来。",
        usage: "礼貌地制止跑题",
        example: "I think we're drifting a bit. Let's get back to the budget discussion for now."
      },
      {
        pattern: "Does anyone else have anything to add before we move on to the next item?",
        meaning: "在进入下一项之前，还有人要补充吗？",
        usage: "确保每个人都有发言机会",
        example: "Does anyone else have anything to add before we move on to the marketing strategy?"
      },
      {
        pattern: "In the interest of time, let's table this for a separate discussion.",
        meaning: "为了节省时间，让我们把这个放在以后单独讨论。",
        usage: "中止过长的枝节讨论",
        example: "In the interest of time, let's table the technical details for a separate discussion later this week."
      },
      {
        pattern: "To summarize, our main consensus is that [Key Decision].",
        meaning: "总结一下，我们的主要共识是[关键决定]。",
        usage: "会议结束前的总结话术",
        example: "To summarize, our main consensus is that we will prioritize mobile development this month."
      },
      {
        pattern: "So, the key action items for this meeting are [Item A] and [Item B].",
        meaning: "所以，本次会议的关键行动项是[项 A]和[项 B]。",
        usage: "明确分配会后任务",
        example: "So, the key action items are for Alex to fix the login bug and for Sarah to send the deck."
      },
      {
        pattern: "Who is the lead/owner for this specific task?",
        meaning: "这项具体任务的主管/责任人是谁？",
        usage: "确认责任归属",
        example: "Who is the owner for the client communication task? We need a clear POC."
      },
      {
        pattern: "I'll send out a summary of the meeting and the action items shortly.",
        meaning: "我会尽快发出会议总结和行动项列表。",
        usage: "承诺会后跟进",
        example: "I'll send out a summary of the meeting and the action items via email shortly."
      },
      {
        pattern: "Let's wrap up here. Thank you all for your valuable contributions today.",
        meaning: "我们就到这里。感谢大家今天的宝贵贡献。",
        usage: "正式且有礼貌的散会",
        example: "Let's wrap up here. Thank you all for your valuable contributions and see you next week."
      }
    ],
    formalDialogue: {
      title: '正式场景：作为 PM 主持周会',
      context: 'Alex 正在主持团队的周进度同步会，需要处理跑题情况。',
      conversation: [
        {
          speaker: 'Alex',
          text: "Good morning everyone. Let's kick off. The main objective today is to review our progress on Project Titan. Sarah, do you want to start?"
        },
        {
          speaker: 'Sarah',
          text: "Sure. We've finished the frontend draft, but we had a long discussion about the color scheme yesterday..."
        },
        {
          speaker: 'Mark',
          text: "Oh, speaking of colors, did you see the new competitor's website? Their blue is much brighter."
        },
        {
          speaker: 'Alex',
          text: "I'm sorry to interrupt, Mark, but I think we're drifting into a competitor analysis, which isn't on the agenda today. Let's get back to our project timeline."
        },
        {
          speaker: 'Mark',
          text: "My apologies, Alex. You're right. Please continue, Sarah."
        },
        {
          speaker: 'Alex',
          text: "Thanks. Sarah, please focus on the deliverables. To keep us on track, we have 15 minutes left for this item."
        },
        {
          speaker: 'Sarah',
          text: "Understood. Our main deliverable is the API integration, which is 80% complete."
        },
        {
          speaker: 'Alex',
          text: "Great. To summarize, we're mostly on track. Sarah will finalize the API by Friday. Let's wrap up and I'll send the minutes shortly."
        }
      ],
      learnableExpressions: [
        {
          expression: "Kick off",
          explanation: "开始/启动（会议常用动词）"
        },
        {
          expression: "Main objective",
          explanation: "主要目标。"
        },
        {
          expression: "Drifting into...",
          explanation: "漂移到...（指讨论逐渐偏离主题）"
        },
        {
          expression: "Keep us on track",
          explanation: "让我们保持在轨道上。"
        },
        {
          expression: "Mostly on track",
          explanation: "基本在按计划进行。"
        },
        {
          expression: "Send the minutes shortly",
          explanation: "很快就会发出会议纪要。"
        }
      ],
      analysis: '在这段主持过程中，Alex 表现出了极强的控制力。他通过 "kick off" 明确开始，并在同事 Mark 跑题时礼貌且坚定地使用了 "I\'m sorry to interrupt... but I think we\'re drifting..."。他始终关注议程（agenda）和时间（15 minutes left），并在结束时提供了清晰的总结（To summarize），展现了专业的主持能力。'
    },
    smallTalkDialogue: {
      title: '非正式场景：会议前的 5 分钟暖场',
      context: '在等待所有与会者上线时，Alex 主动开启了轻松的谈话。',
      conversation: [
        {
          speaker: 'Alex',
          text: "Hi guys! While we wait for Mark to join, how was everyone's weekend?"
        },
        {
          speaker: 'Sarah',
          text: "It was great! I went hiking. How about you, Alex?"
        },
        {
          speaker: 'Alex',
          text: "I just relaxed at home. By the way, Sarah, I saw your post about the new cafe in town. Was the coffee as good as it looked?"
        },
        {
          speaker: 'Sarah',
          text: "Actually, it was! We should definitely have our next team coffee chat there. They have these amazing pastries too."
        },
        {
          speaker: 'Alex',
          text: "Pastries? Now you've really sold me on the idea. I'm a sucker for a good croissant. Do they have the ones with almond filling?"
        },
        {
          speaker: 'Sarah',
          text: "They do! And they're usually still warm in the morning. I'll send you the address after this meeting."
        },
        {
          speaker: 'Alex',
          text: "Please do! That's my favorite. Oh, it looks like Mark is joining now. Alright, everyone, let's get down to business and dive into today's agenda."
        }
      ],
      learnableExpressions: [
        {
          expression: "While we wait for...",
          explanation: "在我们等待...的时候（开启暖场的自然方式）"
        },
        {
          expression: "How was your weekend?",
          explanation: "周末过得怎么样？（经典的破冰问题）"
        },
        {
          expression: "In town",
          explanation: "城里/本地（常用的口语限定）"
        },
        {
          expression: "Sounds like a plan",
          explanation: "听起来是个好主意/就这么办。"
        },
        {
          expression: "Get down to business",
          explanation: "言归正传/开始谈正事。"
        }
      ],
      analysis: '会议前的 5 分钟暖场对于建立团队关系至关重要。Alex 通过简单的周末询问和对同事社交动态的关注，成功营造了友好的氛围。当人到齐后，他使用 "Get down to business" 丝滑地切换到正式议程，展示了收放自如的沟通节奏。'
    },
    commonMistakes: [
      {
        wrong: "Now we start. Listen to me.",
        better: "Let's kick things off. I'd like to walk you through today's agenda.",
        explanation: "不要用命令语气。使用 'kick things off'（开始）和 'walk you through'（带你过一遍）显得更具引导性和亲和力。"
      },
      {
        wrong: "You are talking too much. Stop.",
        better: "That's a very interesting point, but to keep us on track, let's hear from someone else.",
        explanation: "直接叫人闭嘴是职场大忌。先肯定对方的观点 'interesting point'，再以 'keep us on track'（保持进度）为由引导他人发言。"
      },
      {
        wrong: "I don't know who does this work.",
        better: "Could we clarify who will take ownership of this specific action item?",
        explanation: "不要说 'I don't know'（显得没主见）。用 'Could we clarify'（我们能澄清一下吗）和 'take ownership'（承担责任）体现你对责任落实的关注。"
      },
      {
        wrong: "The meeting is over. Bye.",
        better: "That covers everything for today. I'll follow up with the notes shortly. Thanks everyone!",
        explanation: "不要只是说拜拜。总结一下 'That covers everything'（所有内容都涵盖了），并承诺 'follow up with notes'（跟进纪要），展现专业闭环。"
      },
      {
        wrong: "Wait, we forgot the most important thing.",
        better: "Before we wrap up, I'd like to raise one last critical point for consideration.",
        explanation: "不要用 'Wait'（显得慌张）。用 'Before we wrap up'（在结束前）和 'raise a critical point'（提出一个关键点）显得有条理。"
      }
    ],
    expressionUpgrades: [
      {
        basic: "I want to talk about the budget.",
        better: "I'd like to address the budget concerns.",
        professional: "I'd like to devote some time to discussing the budget allocation and potential cost-saving measures.",
        explanation: "使用 devote some time（投入时间）和 allocation（分配）/ measures（措施）展现了高阶的管理语境。"
      },
      {
        basic: "Is that okay with everyone?",
        better: "Does anyone have any reservations about this?",
        professional: "I'd like to ensure we have a full consensus on this approach before moving to the implementation phase.",
        explanation: "使用 reservations（保留意见/疑虑）和 consensus（共识）比简单的 'okay' 更能捕捉到团队的真实反馈。"
      },
      {
        basic: "Let's stop talking about this now.",
        better: "Let's table this discussion for another time.",
        professional: "In the interest of efficiency, let's postpone this deep dive and focus on the immediate priorities on our agenda.",
        explanation: "使用 In the interest of efficiency（为了效率）和 deep dive（深度探讨）为中止讨论提供了一个极具说服力的“专业理由”。"
      },
      {
        basic: "I will tell you what we decided.",
        better: "I'll send a summary of our decisions.",
        professional: "I will disseminate the key outcomes and associated action items to the broader group by EOD.",
        explanation: "使用 disseminate（分发/传播）和 associated action items（关联的行动项）展示了极强的专业文书水平。"
      },
      {
        basic: "We need more people to help.",
        better: "We need more resources for this task.",
        professional: "This project requires additional resource allocation to ensure we meet our established milestones on time.",
        explanation: "将“缺人”转化为 resource allocation（资源分配）和 established milestones（已确立的里程碑），显得更客观、更具战略性。"
      }
    ],
    practiceTasks: [
      {
        title: '任务 1：设计会议议程',
        instruction: '为一个 30 分钟的“新产品发布筹备会”设计 3 个核心议程项，并用英语写出你的开场陈述。',
        example: 'Agenda:\n1. Recap of last week\'s progress (5 min)\n2. Discussion on social media assets (15 min)\n3. Review of the launch timeline (10 min)\n\nOpening: "Thank you all for joining. The main objective today is to finalize our social media plan and confirm the launch sequence."'
      },
      {
        title: '任务 2：练习制止跑题',
        instruction: '如果你正在讨论“预算”，但同事开始聊“下周的团建”。请用“肯定对方 + 提议以后再议 + 回归议程”的结构写一段话。',
        example: 'That sounds like a fun team-building idea, but to keep us on track with our budget discussion, let\'s table that for our social committee meeting later today. Let\'s get back to the Q4 figures.'
      },
      {
        title: '任务 3：录制会议总结',
        instruction: '录制一段 30 秒的语音总结。内容：感谢大家、重申一项核心共识、确认你会发会议纪要。',
        example: 'Thank you all for such a productive session today. Before we close, I just want to confirm the key agreement we reached: the engineering team will deliver the API documentation by next Friday, and the product team will share updated wireframes by Wednesday. I\'ll send out a concise meeting summary with all action items and owners to everyone within the hour. Thanks again — great discussion, team!'
      }
    ],
    saveablePhrases: [
      {
        phrase: "The purpose of today's meeting is to [Goal] and [Outcome].",
        category: "汇报",
        meaning: "今天会议的目的是[目标]和[产出]。"
      },
      {
        phrase: "To keep us on track, I'd like to stick to the agenda and spend [Time] on each item.",
        category: "Small Talk",
        meaning: "为了不偏离轨道，我想紧扣议程，并在每项上花费[时长]。"
      },
      {
        phrase: "I'm sorry to interrupt, but I think we're drifting a bit from the main topic.",
        category: "Small Talk",
        meaning: "抱歉打断一下，我觉得我们讨论得有点偏离主话题了。"
      },
      {
        phrase: "In the interest of time, let's table this for a separate discussion later.",
        category: "Small Talk",
        meaning: "为了节省时间，让我们把这个放在以后单独讨论。"
      },
      {
        phrase: "To summarize, our main consensus today is to [Action/Decision].",
        category: "汇报",
        meaning: "总结一下，今天我们的主要共识是[行动/决定]。"
      },
      {
        phrase: "Who is the lead for this action item? We need a clear owner by [Date].",
        category: "汇报",
        meaning: "谁是这项任务的责任人？我们需要在[日期]前确定清楚。"
      },
      {
        phrase: "I'll send out the meeting minutes and associated action items shortly.",
        category: "邮件",
        meaning: "我会很快发出会议纪要和关联的行动项。"
      },
      {
        phrase: "Let's wrap up here. Thank you all for your valuable input today.",
        category: "Small Talk",
        meaning: "我们就到这里。感谢大家今天的宝贵意见。"
      }
    ],
    resources: [
      {
        name: 'British Council — Podcasts for Professionals',
        type: '听力 + transcript',
        description: '跨团队协作、客户沟通、演示与汇报',
        why: '覆盖 business topics、talks、presentations、dialogues，适合 B2 进阶用户训练商务听力、专业表达和 workplace discussion。',
        url: 'https://learnenglish.britishcouncil.org/free-resources/business/podcasts-professionals'
      },
      {
        name: 'British Council — Meetings: Getting Down to Business',
        type: 'meeting lesson / role-play',
        description: '主导会议、会议 small talk、正式进入议题',
        why: '直接讲 meeting opening、small talk、getting down to business，并包含 role-play，非常适合正式职场对话与 small talk 结构训练。',
        url: 'https://www.teachingenglish.org.uk/teaching-resources/teaching-adults/english-business/meetings-1-getting-down-business'
      },
      {
        name: 'BBC Learning English — Office English Playlist',
        type: 'YouTube 视频系列',
        description: '主导会议、催进度、冲突沟通、办公室表达',
        why: '包含 meetings、chasing people、conflict 等真实办公室主题，适合做进阶场景练习和口语输入。',
        url: 'https://www.youtube.com/playlist?list=PLvJsXpfD2S82ZlthZb0LMlw8JgoN9Vczu'
      },
      {
        name: 'Harvard DCE — 8 Ways to Improve Your Communication Skills',
        type: 'workplace communication article',
        description: '跨团队沟通、客户沟通、棘手对话、演示表达',
        why: '适合提炼 clear communication、active listening、audience awareness、concise wording 等进阶沟通原则。',
        url: 'https://professional.dce.harvard.edu/blog/8-ways-you-can-improve-your-communication-skills/'
      },
      {
        name: 'Atlassian — Project Collaboration Best Practices',
        type: 'workplace blog/article',
        description: '跨团队协作、项目更新、action items、shared ownership',
        why: '适合学习 status updates、action items、shared project communication 和团队协作流程，能支撑 cross-team collaboration 单元。',
        url: 'https://www.atlassian.com/software/confluence/resources/guides/best-practices/project-collaboration'
      },
      {
        name: 'Harvard Business Review — What It Takes to Give a Great Presentation',
        type: 'business communication article',
        description: '演示与汇报、主导会议、客户沟通',
        why: '适合训练 presentation structure、audience awareness、clear message 和 persuasive delivery，帮助用户把英文汇报从"把内容说完"提升到"让听众真正理解并被说服"。',
        url: 'https://hbr.org/2020/01/what-it-takes-to-give-a-great-presentation'
      }
    ]
  },
  // Unit 14: 跨部门协作 / Cross-Team Collaboration
  'c2': {
    id: 'c2',
    title: '跨部门协作',
    englishTitle: 'Cross-Team Collaboration',
    level: 'C1',
    objectives: [
      '学会如何在没有直接管理权（Authority）的情况下影响跨部门同事',
      '掌握跨团队沟通中的利益对齐（Alignment）与需求平衡技巧',
      '学习如何礼貌地处理部门间的冲突与资源竞争（Resource Competition）',
      '掌握撰写跨部门协作邮件与项目启动（Project Kick-off）的专业话术',
      '学会如何建立跨部门的信任关系，确保项目里程碑的顺利达成'
    ],
    scenarios: [
      '作为 PM 请求技术部门在紧迫的时间内提供支持',
      '在跨部门会议上对齐各方的项目目标与截止日期',
      '当另一个部门的延误影响到你的项目进度时进行礼貌催促',
      '协调营销部与产品部对新功能推广方案的分歧',
      '向跨部门合作伙伴分享关键数据并请求反馈',
      '主持跨部门的项目复盘会（Retrospective）',
      '在多个部门竞争同一项内部资源时进行沟通协商'
    ],
    vocabulary: [
      {
        expression: 'cross-functional',
        meaning: '跨职能 / 跨部门',
        context: '涉及不同部门之间的协作',
        example: 'We are building a cross-functional team to handle the new product launch.'
      },
      {
        expression: 'alignment / align on',
        meaning: '对齐 / 达成共识',
        context: '确保各方的目标和理解一致',
        example: 'We need to align on the key deliverables before the end of the week.'
      },
      {
        expression: 'stakeholder',
        meaning: '利益相关方',
        context: '受项目影响或能影响项目的所有人',
        example: 'It\'s important to keep all stakeholders informed about the latest changes.'
      },
      {
        expression: 'buy-in',
        meaning: '认可 / 支持',
        context: '获得他人的同意并愿意配合',
        example: 'We need to get buy-in from the leadership team before we proceed.'
      },
      {
        expression: 'bottleneck',
        meaning: '瓶颈',
        context: '阻碍整体进度的一个环节',
        example: 'The slow approval process is becoming a bottleneck for our team.'
      },
      {
        expression: 'dependency',
        meaning: '依赖项',
        context: '一项任务必须等另一项完成后才能开始',
        example: 'We have a major dependency on the design team for the final mockups.'
      },
      {
        expression: 'silo',
        meaning: '部门墙 / 信息孤岛',
        context: '部门间缺乏沟通的状态',
        example: 'We need to break down the silos between Marketing and Sales to improve efficiency.'
      },
      {
        expression: 'leverage',
        meaning: '杠杆化 / 利用',
        context: '利用现有资源达成更好的结果',
        example: 'We can leverage the IT team\'s expertise to automate this process.'
      },
      {
        expression: 'point of contact (POC)',
        meaning: '联系人 / 接口人',
        context: '某项业务的具体对接人',
        example: 'Who is the main point of contact in the Legal department for this contract?'
      },
      {
        expression: 'synergy',
        meaning: '协同效应',
        context: '1+1>2 的合作结果',
        example: 'The synergy between our two teams led to a record-breaking quarter.'
      },
      {
        expression: 'compromise',
        meaning: '妥协 / 折中方案',
        context: '双方各退一步达成协议',
        example: 'We had to reach a compromise on the project scope to meet the deadline.'
      },
      {
        expression: 'friction',
        meaning: '摩擦 / 分歧',
        context: '合作中的不愉快或阻力',
        example: 'There was some friction between the teams regarding the budget allocation.'
      },
      {
        expression: 'kick-off',
        meaning: '启动 / 开始',
        context: '项目或合作的正式开始',
        example: 'The cross-departmental kick-off meeting is scheduled for Monday.'
      },
      {
        expression: 'resource allocation',
        meaning: '资源分配',
        context: '人力或资金的安排',
        example: 'Efficient resource allocation is key to managing multiple projects.'
      },
      {
        expression: 'bandwidth',
        meaning: '（人力的）负荷 / 精力',
        context: '是否有时间做某事',
        example: 'Does your team have the bandwidth to take on an extra task this month?'
      },
      {
        expression: 'streamline',
        meaning: '精简 / 优化流程',
        context: '使协作更顺畅',
        example: 'We are trying to streamline the feedback process to save time.'
      },
      {
        expression: 'escalate',
        meaning: '升级（问题）',
        context: '将解决不了的问题交给上级',
        example: 'If we can\'t resolve this conflict, we may need to escalate it to the directors.'
      },
      {
        expression: 'transparent',
        meaning: '透明的',
        context: '信息公开分享',
        example: 'We need a more transparent way to track project progress across teams.'
      },
      {
        expression: 'mutual goals',
        meaning: '共同目标',
        context: '双方都追求的利益',
        example: 'Focusing on our mutual goals helped us overcome the initial disagreement.'
      },
      {
        expression: 'accountability',
        meaning: '问责性 / 责任归属',
        context: '明确谁该为结果负责',
        example: 'Defining clear accountability for each task prevented any confusion.'
      }
    ],
    sentencePatterns: [
      {
        pattern: "I'm reaching out from the [Your Department] team to discuss a potential collaboration on [Project].",
        meaning: "我是代表[你的部门]团队，想就[项目]的潜在合作进行讨论。",
        usage: "跨部门协作的正式开场",
        example: "I'm reaching out from the Marketing team to discuss a potential collaboration on the upcoming holiday campaign."
      },
      {
        pattern: "To ensure we're fully aligned, could you please confirm your team's [Deadline/Requirement]?",
        meaning: "为了确保我们完全对齐，您能确认一下贵团队的[截止日期/要求]吗？",
        usage: "对齐信息以防误解",
        example: "To ensure we're fully aligned, could you please confirm your team's deadline for the technical specifications?"
      },
      {
        pattern: "What is the best way for our teams to share information and [Task]?",
        meaning: "我们团队之间共享信息和[任务]的最佳方式是什么？",
        usage: "建立沟通机制",
        example: "What is the best way for our teams to share information and track bug reports?"
      },
      {
        pattern: "I understand that your team is busy, but this task is a critical dependency for [Project].",
        meaning: "我理解贵团队很忙，但这项任务是[项目]的关键依赖项。",
        usage: "在请求支持时强调重要性",
        example: "I understand your team is busy, but this data cleanup is a critical dependency for our Q4 financial audit."
      },
      {
        pattern: "Could we jump on a quick call to iron out the details regarding [Conflict]?",
        meaning: "我们能快速通话来解决关于[分歧点]的细节吗？",
        usage: "提议解决冲突的沟通方式",
        example: "Could we jump on a quick call to iron out the details regarding the budget split?"
      },
      {
        pattern: "I'd like to suggest a middle ground that meets both of our requirements.",
        meaning: "我想建议一个能满足我们双方要求的折中方案。",
        usage: "在分歧中提出建设性方案",
        example: "I'd like to suggest a middle ground that meets both of our requirements for the launch date."
      },
      {
        pattern: "I'll be the main point of contact for our side; who would be the best person to talk to in your team?",
        meaning: "我将是我们这边的主要联系人；贵团队最适合对接的人是谁？",
        usage: "确认跨部门对接人",
        example: "I'll be the main point of contact for our side; who would be the best person to talk to in the Engineering team?"
      },
      {
        pattern: "Thank you for the support on this; the synergy between our teams has been fantastic.",
        meaning: "感谢对此的支持；我们团队间的协作真的太棒了。",
        usage: "肯定合作成果",
        example: "Thank you for the support on the event; the synergy between our teams has been fantastic so far."
      },
      {
        pattern: "Just following up to ensure we're still on track for the milestone on [Date].",
        meaning: "只是跟进一下，确保我们仍在按计划在[日期]达成里程碑。",
        usage: "礼貌催促与进度确认",
        example: "Just following up to ensure we're still on track for the milestone on Friday."
      },
      {
        pattern: "If there are any blockers on your end, please let me know so we can assist.",
        meaning: "如果您那边有任何障碍，请告知我，以便我们提供协助。",
        usage: "展现主动协助的态度而非指责",
        example: "If there are any blockers on your end regarding the data access, please let me know so we can assist."
      }
    ],
    formalDialogue: {
      title: '正式场景：请求跨部门资源支持',
      context: 'Alex 作为 PM，需要向技术主管 Mark 请求人手支持一个紧急的项目需求。',
      conversation: [
        {
          speaker: 'Alex',
          text: "Hi Mark, do you have a few minutes? I'd like to discuss the upcoming Q4 feature launch."
        },
        {
          speaker: 'Mark',
          text: "Sure, Alex. I heard it's quite an ambitious timeline. What's on your mind?"
        },
        {
          speaker: 'Alex',
          text: "It is. We've realized that the user authentication piece is a critical dependency for the whole project. I was wondering if we could leverage one of your senior devs for a two-week sprint?"
        },
        {
          speaker: 'Mark',
          text: "I'd love to help, but my team's bandwidth is completely maxed out right now with the server migration."
        },
        {
          speaker: 'Alex',
          text: "I completely understand the pressure on your team. However, if we miss this window, the launch will be delayed by a month, affecting the whole company's Q4 targets."
        },
        {
          speaker: 'Mark',
          text: "I see the urgency. Let's look at the resource allocation again. Maybe we can find a middle ground."
        },
        {
          speaker: 'Alex',
          text: "That would be great. Could we perhaps assign a junior dev to shadow one of our contractors? I'd appreciate your guidance on the best approach."
        },
        {
          speaker: 'Mark',
          text: "That might work. Let me check the schedule and get back to you by EOD."
        }
      ],
      learnableExpressions: [
        {
          expression: "Critical dependency",
          explanation: "关键依赖项（强调任务的不可或缺）"
        },
        {
          expression: "Leverage one of your senior devs",
          explanation: "借调/利用你的一位高级开发人员。"
        },
        {
          expression: "Bandwidth is completely maxed out",
          explanation: "带宽（精力/人力）已完全达到极限。"
        },
        {
          expression: "Miss this window",
          explanation: "错过这个窗口期（指错失良机）"
        },
        {
          expression: "Find a middle ground",
          explanation: "找到折中方案。"
        },
        {
          expression: "Get back to you by EOD",
          explanation: "在今天下班前回复你。"
        }
      ],
      analysis: '在这次跨部门沟通中，Alex 展示了极强的非职权影响力。当 Mark 提出“人手不足”时，他没有直接妥协，而是强调了项目的“全局影响”（affecting company\'s Q4 targets），将问题从“两个部门的竞争”提升到了“公司整体利益”。同时，他主动提出了一个“折中方案”（junior dev shadow），降低了 Mark 的资源压力。'
    },
    smallTalkDialogue: {
      title: '非正式场景：与跨部门接口人的初步对齐',
      context: 'Alex 在茶水间遇到了刚被指派为项目接口人的设计团队成员 Jane。',
      conversation: [
        {
          speaker: 'Alex',
          text: "Hi Jane! I heard you're our new point of contact for the Project Titan UI. Great to have you on board!"
        },
        {
          speaker: 'Jane',
          text: "Thanks, Alex! I'm excited to dive in. It looks like a fun project."
        },
        {
          speaker: 'Alex',
          text: "It definitely is. I was wondering, what's the best way for us to align on the design feedback? Should we use Figma comments or have a weekly sync?"
        },
        {
          speaker: 'Jane',
          text: "Figma is usually better for specific tweaks, but a quick 15-minute sync on Tuesdays might help us stay in the loop on bigger changes."
        },
        {
          speaker: 'Alex',
          text: "That sounds like a plan. I'll set that up. Also, if you run into any bottlenecks with the marketing assets, just let me know."
        },
        {
          speaker: 'Jane',
          text: "Will do! I appreciate the heads-up. Looking forward to working together."
        }
      ],
      learnableExpressions: [
        {
          expression: "Point of contact (POC)",
          explanation: "联系人/对接人。"
        },
        {
          expression: "Dive in",
          explanation: "投入（工作/项目）中。"
        },
        {
          expression: "Stay in the loop",
          explanation: "保持知情/不掉队。"
        },
        {
          expression: "Run into any bottlenecks",
          explanation: "遇到任何瓶颈。"
        },
        {
          expression: "Appreciate the heads-up",
          explanation: "感谢提前提醒/告知。"
        }
      ],
      analysis: 'Alex 巧妙地利用非正式场合建立了初步的协作规则。他通过询问“最佳方式”尊重了 Jane 的工作习惯，同时主动提出解决“瓶颈”的承诺，建立了跨部门的信任。这种前置的规则设定能有效减少后期协作中的摩擦。'
    },
    commonMistakes: [
      {
        wrong: "You must finish this by Friday.",
        better: "Could we align on a Friday deadline to ensure we don't delay the next phase?",
        explanation: "跨部门协作没有直接指挥权，忌讳用命令式。使用 'align on'（对齐）并给出‘为什么’，更能获得配合。"
      },
      {
        wrong: "Your team is late again.",
        better: "I noticed the deliverables are slightly delayed. Are there any blockers we can help with?",
        explanation: "指责对方会导致防御心理。用‘观察到的事实’（noticed the delay）开头，并提供协助，更具建设性。"
      },
      {
        wrong: "I will tell your boss if you don't help.",
        better: "If we can't find a solution here, I may need to escalate this to get some strategic guidance.",
        explanation: "不要威胁“告状”。用 'escalate for strategic guidance'（为获得战略指导而升级）来中性地表达需要上级介入。"
      },
      {
        wrong: "We don't care about your goals.",
        better: "I want to make sure our plan also supports your team's core objectives.",
        explanation: "不要无视对方部门的 KPI。展示出你的计划对他们也有利（supports your objectives），是获得 'Buy-in' 的关键。"
      },
      {
        wrong: "Just send me the file.",
        better: "Could you please provide a brief walkthrough of the data so we're on the same page?",
        explanation: "只拿文件不沟通容易产生误解。请求一个 'walkthrough'（讲解）能确保双方理解一致。"
      }
    ],
    expressionUpgrades: [
      {
        basic: "We need to talk more.",
        better: "We need better communication between departments.",
        professional: "We should implement a more structured communication framework to break down silos and ensure cross-functional transparency.",
        explanation: "使用 structured communication framework（结构化的沟通框架）和 break down silos（打破部门墙）显得非常具有管理视野。"
      },
      {
        basic: "I want you to agree with me.",
        better: "I need your support on this.",
        professional: "I'm seeking your buy-in on this initiative as your team's expertise is crucial for its success.",
        explanation: "使用 seeking your buy-in（寻求你的认可）和 expertise is crucial（专业知识至关重要）能让对方感到被尊重且重要。"
      },
      {
        basic: "Tell me who is doing what.",
        better: "We need to know the responsibilities.",
        professional: "Let's establish a clear RACI matrix to define accountability and streamline our decision-making process.",
        explanation: "使用 RACI matrix（责任分配矩阵）和 streamline decision-making（精简决策流程）是高阶项目管理语言。"
      },
      {
        basic: "The work is not matching.",
        better: "There is a gap between our goals.",
        professional: "I've identified a strategic misalignment between our current workflows and the overarching project objectives.",
        explanation: "使用 strategic misalignment（战略性不匹配）和 overarching objectives（全局/首要目标）将小摩擦提升到了战略高度。"
      },
      {
        basic: "We can help each other.",
        better: "Let's work together better.",
        professional: "We should explore ways to create greater synergy between our teams to maximize the project's impact.",
        explanation: "使用 create greater synergy（创造更大的协同效应）和 maximize impact（最大化影响）更具职场动员力。"
      }
    ],
    practiceTasks: [
      {
        title: '任务 1：撰写协作请求邮件',
        instruction: '撰写一封邮件给另一个部门的经理，请求他们指派一名接口人。要求：说明项目重要性、明确工作量（轻量）、询问最佳联系人。',
        example: 'Hi [Name], I\'m leading the Project Titan kick-off and it would be great to have an engineering perspective. The time commitment would be minimal—just a 30-min sync per week. Who would be the best person to loop in?'
      },
      {
        title: '任务 2：处理进度推诿',
        instruction: '对方部门说“太忙了没法按时交”。请写一段包含“理解 + 强调后果 + 提议微调/协助”的话。',
        example: 'I completely understand the resource constraints you\'re facing. However, this piece is a critical dependency for our launch. Could we perhaps prioritize the core components first, or is there any specific data we can provide to speed things up?'
      },
      {
        title: '任务 3：录制成功对齐后的致谢',
        instruction: '录制一段 30 秒的语音。内容：感谢对方部门的支持、提到这次合作产生的协同效应、表达对未来继续合作的期待。',
        example: 'I just want to take a moment to sincerely thank the Operations team for your flexibility and support throughout this process. The synergy between our two teams — combining your operational expertise with our client-facing insights — really made a measurable difference in the final outcome. I genuinely believe this kind of cross-functional collaboration is what sets us apart, and I\'m already looking forward to our next opportunity to work together.'
      }
    ],
    saveablePhrases: [
      {
        phrase: "I'm reaching out from the [Department] team to align on the [Project] goals.",
        category: "汇报",
        meaning: "我是代表[部门]团队，想就[项目]目标进行对齐。"
      },
      {
        phrase: "This task is a critical dependency for the whole project, so your support is vital.",
        category: "汇报",
        meaning: "这项任务是整个项目的关键依赖项，所以您的支持至关重要。"
      },
      {
        phrase: "I'd like to suggest a middle ground that addresses both of our teams' concerns.",
        category: "Small Talk",
        meaning: "我想建议一个能同时解决我们两个团队顾虑的折中方案。"
      },
      {
        phrase: "What is the best communication channel for us to stay in the loop on progress?",
        category: "Small Talk",
        meaning: "我们之间保持进度知情的最佳沟通渠道是什么？"
      },
      {
        phrase: "If you run into any bottlenecks or bandwidth issues, please don't hesitate to reach out.",
        category: "Small Talk",
        meaning: "如果您遇到任何瓶颈或人力负荷问题，请随时联系。"
      },
      {
        phrase: "I'm seeking your buy-in on this proposal as your expertise is crucial here.",
        category: "汇报",
        meaning: "我正在就这项提议寻求您的支持，因为您的专业知识在这里非常关键。"
      },
      {
        phrase: "Let's establish clear accountability for each action item to ensure success.",
        category: "汇报",
        meaning: "让我们为每个行动项建立清晰的责任归属以确保成功。"
      },
      {
        phrase: "The synergy between our departments on this project has been exceptional.",
        category: "Small Talk",
        meaning: "我们部门之间在这个项目上的协同效应非常出色。"
      }
    ],
    resources: [
      {
        name: 'British Council — Podcasts for Professionals',
        type: '听力 + transcript',
        description: '跨团队协作、客户沟通、演示与汇报',
        why: '覆盖 business topics、talks、presentations、dialogues，适合 B2 进阶用户训练商务听力、专业表达和 workplace discussion。',
        url: 'https://learnenglish.britishcouncil.org/free-resources/business/podcasts-professionals'
      },
      {
        name: 'British Council — Meetings: Getting Down to Business',
        type: 'meeting lesson / role-play',
        description: '主导会议、会议 small talk、正式进入议题',
        why: '直接讲 meeting opening、small talk、getting down to business，并包含 role-play，非常适合正式职场对话与 small talk 结构训练。',
        url: 'https://www.teachingenglish.org.uk/teaching-resources/teaching-adults/english-business/meetings-1-getting-down-business'
      },
      {
        name: 'BBC Learning English — Office English Playlist',
        type: 'YouTube 视频系列',
        description: '主导会议、催进度、冲突沟通、办公室表达',
        why: '包含 meetings、chasing people、conflict 等真实办公室主题，适合做进阶场景练习和口语输入。',
        url: 'https://www.youtube.com/playlist?list=PLvJsXpfD2S82ZlthZb0LMlw8JgoN9Vczu'
      },
      {
        name: 'Harvard DCE — 8 Ways to Improve Your Communication Skills',
        type: 'workplace communication article',
        description: '跨团队沟通、客户沟通、棘手对话、演示表达',
        why: '适合提炼 clear communication、active listening、audience awareness、concise wording 等进阶沟通原则。',
        url: 'https://professional.dce.harvard.edu/blog/8-ways-you-can-improve-your-communication-skills/'
      },
      {
        name: 'Atlassian — Project Collaboration Best Practices',
        type: 'workplace blog/article',
        description: '跨团队协作、项目更新、action items、shared ownership',
        why: '适合学习 status updates、action items、shared project communication 和团队协作流程，能支撑 cross-team collaboration 单元。',
        url: 'https://www.atlassian.com/software/confluence/resources/guides/best-practices/project-collaboration'
      },
      {
        name: 'Harvard Business Review — What It Takes to Give a Great Presentation',
        type: 'business communication article',
        description: '演示与汇报、主导会议、客户沟通',
        why: '适合训练 presentation structure、audience awareness、clear message 和 persuasive delivery，帮助用户把英文汇报从"把内容说完"提升到"让听众真正理解并被说服"。',
        url: 'https://hbr.org/2020/01/what-it-takes-to-give-a-great-presentation'
      }
    ]
  },
  // Unit 15: 专业邮件与通讯 / Emails & IM
  'c3': {
    id: 'c3',
    title: '专业邮件与通讯',
    englishTitle: 'Emails & IM',
    level: 'C1',
    objectives: [
      '掌握面向客户的正式邮件礼仪与专业措辞（Tone and Style）',
      '学会如何在电话或视频通话中通过积极聆听（Active Listening）获取客户真实需求',
      '学习礼貌地应对客户投诉（Complaints）并提供解决方案的专业话术',
      '掌握如何用英语引导客户进行演示（Demo）或产品讲解',
      '学会处理通话中的技术突发状况及结束通话后的纪要跟进'
    ],
    scenarios: [
      '向潜在客户发送第一封商务开发邮件（Cold Email/Outreach）',
      '与客户进行初步的需求对接电话（Discovery Call）',
      '在 Zoom 会议中引导客户观看产品 Demo 展示',
      '收到客户关于服务延迟的投诉邮件并进行危机公关回复',
      '在通话结束前与客户确认后续行动（Next Steps）及时间表',
      '向长期合作伙伴写信询问对现有服务满意度的反馈',
      '由于不可抗力需要更改与客户已约定的会面时间'
    ],
    vocabulary: [
      {
        expression: 'prospect / potential client',
        meaning: '潜在客户',
        context: '尚未达成合作但有兴趣的目标',
        example: 'We are reaching out to several prospects in the fintech sector this week.'
      },
      {
        expression: 'discovery call',
        meaning: '需求挖掘电话',
        context: '初次接触以了解客户痛点和需求的通话',
        example: 'During the discovery call, focus on asking questions rather than selling.'
      },
      {
        expression: 'pain point',
        meaning: '痛点',
        context: '客户在业务中遇到的具体困难或烦恼',
        example: 'Our software is designed to solve the main pain points in supply chain management.'
      },
      {
        expression: 'tailor-made / customized',
        meaning: '量身定制的',
        context: '根据客户特定需求提供的方案',
        example: 'We can offer a customized solution that fits your budget and requirements.'
      },
      {
        expression: 'value proposition',
        meaning: '价值主张',
        context: '向客户解释为什么你的服务值得买',
        example: 'You need to communicate a clear value proposition in your first email.'
      },
      {
        expression: 'follow-up',
        meaning: '跟进',
        context: '在通话或会议后的后续沟通',
        example: 'I\'ll send a follow-up email with the pricing details by EOD.'
      },
      {
        expression: 'wrap up',
        meaning: '（通话）收尾',
        context: '结束沟通前的最后确认',
        example: 'Let\'s wrap up the call by summarizing the key action items.'
      },
      {
        expression: 'rapport',
        meaning: '融洽关系 / 默契',
        context: '与客户建立的互信氛围',
        example: 'Building rapport with clients is essential for long-term retention.'
      },
      {
        expression: 'inquiry',
        meaning: '咨询 / 询问',
        context: '客户主动提出的问题或请求',
        example: 'Thank you for your inquiry regarding our subscription plans.'
      },
      {
        expression: 'resolution',
        meaning: '解决方案 / 解决',
        context: '解决冲突或问题的最终结果',
        example: 'We are committed to finding a satisfactory resolution to your technical issue.'
      },
      {
        expression: 'apologize / apologies',
        meaning: '道歉',
        context: '正式承认错误或不足',
        example: 'Please accept our sincere apologies for the delay in your shipment.'
      },
      {
        expression: 'demo / walkthrough',
        meaning: '演示 / 讲解',
        context: '向客户展示产品如何使用',
        example: 'Would you like a quick walkthrough of our new dashboard features?'
      },
      {
        expression: 'benchmark',
        meaning: '基准 / 参照点',
        context: '用于对比的行业标准',
        example: 'Our performance metrics are consistently above the industry benchmark.'
      },
      {
        expression: 'upsell',
        meaning: '追加销售',
        context: '向现有客户推荐更高价值的产品/服务',
        example: 'We have a great opportunity to upsell additional storage to this account.'
      },
      {
        expression: 'retention',
        meaning: '留存 / 维护',
        context: '保持现有客户不流失',
        example: 'Customer retention is just as important as acquiring new leads.'
      },
      {
        expression: 'turnaround time',
        meaning: '周转时间 / 响应时间',
        context: '从客户请求到交付的时间间隔',
        example: 'We aim for a 24-hour turnaround time on all support tickets.'
      },
      {
        expression: 'point of contact (POC)',
        meaning: '项目接口人',
        context: '固定的沟通对接人员',
        example: 'I will be your primary point of contact throughout the implementation phase.'
      },
      {
        expression: 'objection',
        meaning: '反对意见 / 异议',
        context: '客户提出的拒绝理由或担心',
        example: 'Handling price objections requires a strong focus on the ROI.'
      },
      {
        expression: 'deliverable',
        meaning: '交付物',
        context: '按合同规定给客户的东西（报告、软件等）',
        example: 'The final deliverables will be sent to you via a secure link next Friday.'
      },
      {
        expression: 'onboard / onboarding',
        meaning: '入驻 / 引导开始使用',
        context: '帮助新客户开始使用服务的过程',
        example: 'Our customer success team will guide you through the onboarding process.'
      }
    ],
    sentencePatterns: [
      {
        pattern: "I'm writing to you because I noticed your team is [Action/Goal], and we might be able to help with [Solution].",
        meaning: "我写信给您是因为我注意到贵团队正在[动作/目标]，我们也许能在[方案]上提供帮助。",
        usage: "商务开发（Outreach）的专业开场",
        example: "I'm writing to you because I noticed your team is expanding into Europe, and we might be able to help with local compliance."
      },
      {
        pattern: "Thank you for taking the time to speak with me today. It was great to learn about [Client Need].",
        meaning: "感谢您今天抽空与我交谈。很高兴能了解到关于[客户需求]的情况。",
        usage: "通话后的跟进礼貌用语",
        example: "Thank you for taking the time to speak with me today. It was great to learn about your goals for the rebranding project."
      },
      {
        pattern: "I completely understand your concerns regarding [Issue]. Let me check with our team and get back to you.",
        meaning: "我完全理解您关于[问题]的顾虑。请让我和团队确认一下并回复您。",
        usage: "稳住客户情绪并争取解决时间",
        example: "I completely understand your concerns regarding the security patch. Let me check with our IT team and get back to you by noon."
      },
      {
        pattern: "Could you please elaborate on what you're looking for in a [Product/Service]?",
        meaning: "您能详细说明一下您对[产品/服务]的具体要求吗？",
        usage: "挖掘客户的详细需求",
        example: "Could you please elaborate on what you're looking for in a project management tool?"
      },
      {
        pattern: "To make sure I've got this right, your main priority is [Priority A]. Is that correct?",
        meaning: "为了确保我的理解正确，您的主要优先事项是[A]。对吗？",
        usage: "确认客户的核心痛点",
        example: "To make sure I've got this right, your main priority is reducing the response time for end-users. Is that correct?"
      },
      {
        pattern: "How about we schedule a brief 15-minute demo to walk you through the platform?",
        meaning: "不如我们安排一个 15 分钟的简短演示，带您熟悉一下我们的平台？",
        usage: "提出进一步行动方案",
        example: "How about we schedule a brief 15-minute demo to walk you through the analytics dashboard and see how it fits your workflow? I'm available anytime this week to speak."
      },
      {
        pattern: "We sincerely apologize for the inconvenience caused by [Issue]. We are working on a fix as we speak.",
        meaning: "对于由[问题]引起的不便，我们深表歉意。我们正在全力修复。",
        usage: "正式的危机处理道歉话术",
        example: "We sincerely apologize for the inconvenience caused by the server downtime. We are working on a fix as we speak."
      },
      {
        pattern: "What would be the best next step from your perspective?",
        meaning: "从您的角度来看，下一步最佳的行动是什么？",
        usage: "将主动权交给客户以显示尊重",
        example: "Thank you for the feedback. What would be the best next step from your perspective for our collaboration?"
      },
      {
        pattern: "I'll be your main point of contact for this project, and you can reach me anytime at [Email/Phone].",
        meaning: "我将是这个项目您的主要联系人，您可以随时通过[邮件/电话]联系我。",
        usage: "建立长期服务的信任感",
        example: "I'll be your main point of contact for this migration, and you can reach me anytime at this email address."
      },
      {
        pattern: "Thank you for choosing [Company Name]. We look forward to a successful partnership.",
        meaning: "感谢您选择[公司名]。我们期待一次成功的合作。",
        usage: "达成合作后的标准结语",
        example: "Thank you for choosing ABC Solutions. We look forward to a successful partnership and growing together."
      }
    ],
    formalDialogue: {
      title: '正式场景：处理客户投诉电话',
      context: '客户对系统宕机导致的业务损失表示非常不满，Alex 需要进行危机公关。',
      conversation: [
        {
          speaker: 'Client',
          text: "Alex, the system was down for three hours this morning! We've lost several key leads because of this. I need an explanation."
        },
        {
          speaker: 'Alex',
          text: "I hear you, and I sincerely apologize for the frustration and loss this has caused your team. I've already spoken with our engineering lead to get to the root of the problem."
        },
        {
          speaker: 'Client',
          text: "Frustration is an understatement. What are you doing to make sure this doesn't happen again?"
        },
        {
          speaker: 'Alex',
          text: "I completely understand. We are currently implementing a new redundancy protocol to prevent similar issues. I'll send you a formal Incident Report with the full resolution by EOD."
        },
        {
          speaker: 'Client',
          text: "I expect that report. And we need to discuss a credit for our subscription for this month."
        },
        {
          speaker: 'Alex',
          text: "That's a fair point. I'll discuss the service credit with my manager and include our proposal in the email. Our goal is to ensure you feel supported."
        },
        {
          speaker: 'Client',
          text: "Alright, I'll wait for your email then."
        }
      ],
      learnableExpressions: [
        {
          expression: "I hear you",
          explanation: "我听到了/我理解（非常有效的共情开场）"
        },
        {
          expression: "Get to the root of the problem",
          explanation: "找到问题的根本原因。"
        },
        {
          expression: "Understatement",
          explanation: "轻描淡写/说得太含蓄了。"
        },
        {
          expression: "Redundancy protocol",
          explanation: "冗余协议/备份机制（专业的技术补救术语）"
        },
        {
          expression: "Incident Report",
          explanation: "故障报告/事故报告。"
        },
        {
          expression: "Service credit",
          explanation: "服务额度抵扣（常见的客户赔偿方式）"
        }
      ],
      analysis: '在处理投诉时，Alex 遵循了“承认、共情、解决、跟进”的原则。他没有找借口，而是先用 "I hear you" 确认客户情绪，然后给出具体的技术解决方案（redundancy protocol），并承诺了具体的时间节点（EOD）。最后，面对赔偿要求，他没有一口回绝，而是用 "That\'s a fair point" 稳住客户，展现了高度的职业素养。'
    },
    smallTalkDialogue: {
      title: '非正式场景：Discovery Call 之前的破冰',
      context: '通话刚开始，Alex 在等待客户另一位同事加入，与当前的对接人闲聊。',
      conversation: [
        {
          speaker: 'Alex',
          text: "Hi Sarah! Good to finally connect. How's the weather over in London today?"
        },
        {
          speaker: 'Sarah',
          text: "It's surprisingly sunny for once! A rare treat. How about things on your side?"
        },
        {
          speaker: 'Alex',
          text: "Typical office day here, but I can't complain! By the way, I saw the news about your company's latest acquisition. Huge congratulations to the team!"
        },
        {
          speaker: 'Sarah',
          text: "Oh, thank you! It's been a hectic few weeks, but we're all very excited. How did you hear about it?"
        },
        {
          speaker: 'Alex',
          text: "I follow your CEO on LinkedIn, he shares some great insights. It seems like a very strategic move."
        },
        {
          speaker: 'Sarah',
          text: "It definitely is. Oh, it looks like my colleague Mark is joining now. Ready to start?"
        },
        {
          speaker: 'Alex',
          text: "Absolutely. Let's dive in."
        }
      ],
      learnableExpressions: [
        {
          expression: "Good to finally connect",
          explanation: "很高兴终于（在线上/电话中）联系上了。"
        },
        {
          expression: "A rare treat",
          explanation: "难得的享受/款待（形容好天气）"
        },
        {
          expression: "Acquisition",
          explanation: "收购（商务谈话的高频词）"
        },
        {
          expression: "Hectic",
          explanation: "忙乱的/忙得不可开交的。"
        },
        {
          expression: "Strategic move",
          explanation: "战略性的举措。"
        }
      ],
      analysis: 'Alex 表现出了极好的前期调研习惯。他不仅聊了天气，还提到了客户公司最近的“收购新闻”，这瞬间拉近了距离，显示出他对客户业务的真正关心。这种基于事实的赞美（CEO 的洞察、战略举措）比单纯的寒暄更能赢得客户的职业好感。'
    },
    commonMistakes: [
      {
        wrong: "You have to pay now.",
        better: "We would appreciate it if you could settle the outstanding invoice at your earliest convenience.",
        explanation: "催款不要用命令式。使用 'settle the outstanding invoice'（结算未结发票）和 'at your earliest convenience'（在您方便时尽快）更体面。"
      },
      {
        wrong: "I don't know the price.",
        better: "I don't have the exact pricing figures in front of me right now. Let me confirm and send over a formal quote.",
        explanation: "不要直接说不知道。说明目前手里没有 'exact figures'（精确数字），并承诺发送 'formal quote'（正式报价）。"
      },
      {
        wrong: "Our product is the best in the world.",
        better: "Our platform offers a unique set of features that directly address your current workflow challenges.",
        explanation: "避免吹嘘。将优势与客户的 'workflow challenges'（工作流挑战）挂钩，更有说服力。"
      },
      {
        wrong: "Can you hear me? Hello?",
        better: "Is the audio coming through clearly on your end? I want to make sure you catch everything.",
        explanation: "确认音频时要委婉。'Is the audio coming through clearly?' 显得更专业，并在末尾加上“为了不让您错过任何内容”的理由。"
      },
      {
        wrong: "Sorry for the delay.",
        better: "Thank you for your patience while we finalized the details.",
        explanation: "在客户沟通中，“感谢耐心”往往比“不停道歉”效果更好，能引导积极的心理暗示。"
      }
    ],
    expressionUpgrades: [
      {
        basic: "We will help you use the software.",
        better: "We will guide you through the onboarding process.",
        professional: "Our dedicated Customer Success team will facilitate a seamless transition and onboarding experience for your organization.",
        explanation: "使用 dedicated（专门的/专注的）、seamless transition（无缝衔接）和 facilitate 显著提升了服务的专业感。"
      },
      {
        basic: "What do you want to change?",
        better: "What are your specific requirements for the update?",
        professional: "Could you please outline the key modifications or enhancements you'd like to see in the next iteration?",
        explanation: "使用 modifications（修改）、enhancements（增强）和 iteration（迭代）是互联网和商务沟通中的高阶词汇。"
      },
      {
        basic: "We can do a discount.",
        better: "We can offer a preferred rate for long-term partners.",
        professional: "Given our valued partnership, I am authorized to offer a tailored pricing structure that aligns with your budget parameters.",
        explanation: "使用 valued partnership（珍视的伙伴关系）和 pricing structure（价格结构）让“打折”听起来像是一种特权的“战略对齐”。"
      },
      {
        basic: "Tell me if you like it.",
        better: "Please let me know your thoughts on the proposal.",
        professional: "I would welcome your feedback and would be happy to adjust the proposal based on your strategic priorities.",
        explanation: "使用 strategic priorities（战略优先事项）展示了你作为咨询者而非单纯销售的定位。"
      },
      {
        basic: "This is very important for you.",
        better: "This feature is a key benefit for your team.",
        professional: "Implementing this specific module will deliver significant ROI and drive operational efficiency across your department.",
        explanation: "使用 ROI（投资回报率）和 drive operational efficiency（驱动运营效率）是能够直接打动客户决策层的话术。"
      }
    ],
    practiceTasks: [
      {
        title: '任务 1：撰写 Discovery Call 邀约',
        instruction: '撰写一封邮件给一个潜在客户。内容：提到你看了他们的网站、发现他们在扩大规模、提议一个 15 分钟的通话来讨论如何优化他们的招聘流程。',
        example: 'Hi [Name], I\'ve been following your recent expansion and noticed you\'re hiring rapidly. We\'ve helped similar firms reduce their time-to-hire by 20%. Would you be open to a 15-minute chat next Tuesday to see if we can do the same for you?'
      },
      {
        title: '任务 2：练习应对拒绝',
        instruction: '客户说：“你们的价格太贵了，我们没预算。”请写一段话，不降价但强调“长期价值”和“ROI”。',
        example: 'I understand budget is a key concern. However, our clients typically see a full ROI within the first six months due to the efficiency gains. Could we look at the potential long-term savings instead of just the upfront cost?'
      },
      {
        title: '任务 3：录制 Demo 结束语',
        instruction: '录制一段语音，模拟 Demo 刚讲完。要求：询问客户最喜欢哪个功能、询问是否有疑问、确认你会发录像。',
        example: 'And that wraps up today\'s demo — thank you so much for your time and attention! I\'d love to hear your initial impressions: is there a particular feature that resonated most with your team\'s current needs? Please feel free to ask any questions at all, big or small — this is absolutely the right moment for them. And of course, I\'ll send over the full recording along with a written summary of everything we covered within 24 hours, so your team can review it at your own pace.'
      }
    ],
    saveablePhrases: [
      {
        phrase: "I'm reaching out because I noticed your team is focusing on [Goal] recently.",
        category: "邮件",
        meaning: "我写信给您是因为我注意到贵团队最近正在关注[目标]。"
      },
      {
        phrase: "Thank you for the quick turnaround on the contract; we're excited to get started.",
        category: "邮件",
        meaning: "感谢您对合同的快速处理；我们非常期待开始（合作）。"
      },
      {
        phrase: "I completely understand your concerns regarding [Issue]. We're prioritizing a resolution.",
        category: "汇报",
        meaning: "我完全理解您关于[问题]的顾虑。我们正在优先解决。"
      },
      {
        phrase: "How about we schedule a brief demo to walk you through the core features of the platform?",
        category: "Small Talk",
        meaning: "不如我们安排一个简短的演示，带您熟悉一下平台的核心功能？"
      },
      {
        phrase: "What would be the best next step from your perspective to move this partnership forward?",
        category: "汇报",
        meaning: "从您的角度来看，推动这一伙伴关系向前发展的下一步最佳行动是什么？"
      },
      {
        phrase: "We sincerely apologize for the inconvenience and are working on a permanent fix as we speak.",
        category: "汇报",
        meaning: "对于引起的不便我们深表歉意，我们正全力寻求永久性的解决方案。"
      },
      {
        phrase: "Could you please elaborate on the specific pain points your team is currently facing?",
        category: "Small Talk",
        meaning: "您能详细说明一下贵团队目前面临的具体痛点吗？"
      },
      {
        phrase: "Our goal is to ensure you feel fully supported throughout the entire onboarding process.",
        category: "Small Talk",
        meaning: "我们的目标是确保您在整个入驻过程中都能感受到充分的支持。"
      }
    ],
    resources: [
      {
        name: 'British Council — Podcasts for Professionals',
        type: '听力 + transcript',
        description: '跨团队协作、客户沟通、演示与汇报',
        why: '覆盖 business topics、talks、presentations、dialogues，适合 B2 进阶用户训练商务听力、专业表达和 workplace discussion。',
        url: 'https://learnenglish.britishcouncil.org/free-resources/business/podcasts-professionals'
      },
      {
        name: 'British Council — Meetings: Getting Down to Business',
        type: 'meeting lesson / role-play',
        description: '主导会议、会议 small talk、正式进入议题',
        why: '直接讲 meeting opening、small talk、getting down to business，并包含 role-play，非常适合正式职场对话与 small talk 结构训练。',
        url: 'https://www.teachingenglish.org.uk/teaching-resources/teaching-adults/english-business/meetings-1-getting-down-business'
      },
      {
        name: 'BBC Learning English — Office English Playlist',
        type: 'YouTube 视频系列',
        description: '主导会议、催进度、冲突沟通、办公室表达',
        why: '包含 meetings、chasing people、conflict 等真实办公室主题，适合做进阶场景练习和口语输入。',
        url: 'https://www.youtube.com/playlist?list=PLvJsXpfD2S82ZlthZb0LMlw8JgoN9Vczu'
      },
      {
        name: 'Harvard DCE — 8 Ways to Improve Your Communication Skills',
        type: 'workplace communication article',
        description: '跨团队沟通、客户沟通、棘手对话、演示表达',
        why: '适合提炼 clear communication、active listening、audience awareness、concise wording 等进阶沟通原则。',
        url: 'https://professional.dce.harvard.edu/blog/8-ways-you-can-improve-your-communication-skills/'
      },
      {
        name: 'Atlassian — Project Collaboration Best Practices',
        type: 'workplace blog/article',
        description: '跨团队协作、项目更新、action items、shared ownership',
        why: '适合学习 status updates、action items、shared project communication 和团队协作流程，能支撑 cross-team collaboration 单元。',
        url: 'https://www.atlassian.com/software/confluence/resources/guides/best-practices/project-collaboration'
      },
      {
        name: 'Harvard Business Review — What It Takes to Give a Great Presentation',
        type: 'business communication article',
        description: '演示与汇报、主导会议、客户沟通',
        why: '适合训练 presentation structure、audience awareness、clear message 和 persuasive delivery，帮助用户把英文汇报从"把内容说完"提升到"让听众真正理解并被说服"。',
        url: 'https://hbr.org/2020/01/what-it-takes-to-give-a-great-presentation'
      }
    ]
  },
  // Unit 16: 演示与汇报技巧 / Presentations
  'c4': {
    id: 'c4',
    title: '演示与汇报技巧',
    englishTitle: 'Presentations',
    level: 'C1',
    objectives: [
      '掌握演示文稿的标准逻辑结构（Hook, Context, Solution, Conclusion）',
      '学会使用各种视觉化语言（Visual Language）描述数据趋势与图表',
      '掌握如何进行自然的过渡（Transitioning）并吸引听众注意力',
      '学习礼貌且有效地回答 Q&A 环节中具有挑战性的提问',
      '掌握汇报后的总结（Recap）与行动呼吁（Call to Action）话术'
    ],
    scenarios: [
      '在全公司会议（All-hands Meeting）上展示新产品功能',
      '向经理汇报上一季度的市场增长数据与 KPI 达成情况',
      '主持一个关于流程优化的头脑风暴并展示初步方案',
      '作为项目组代表，向客户汇报项目的最新里程碑进展',
      '在 Q&A 环节应对关于预算超支或进度延误的质询',
      '通过视频会议向远程团队演示新系统的操作流程',
      '在演示结束时引导听众进行下一步的注册或反馈动作'
    ],
    vocabulary: [
      {
        expression: 'hook',
        meaning: '开场钩子',
        context: '演示开头用于吸引听众注意力的故事或数据',
        example: 'Let\'s start with a hook: Did you know that 70% of users drop off at this stage?'
      },
      {
        expression: 'overview / agenda',
        meaning: '概览 / 议程',
        context: '演示的内容大纲',
        example: 'Here is a quick overview of what we will cover in the next 20 minutes.'
      },
      {
        expression: 'metric',
        meaning: '指标',
        context: '用于衡量表现的数据',
        example: 'The key metric we are tracking this quarter is the user retention rate.'
      },
      {
        expression: 'visualize',
        meaning: '视觉化 / 形象化',
        context: '将复杂数据转化为图表',
        example: 'This graph helps to visualize the steady increase in our monthly active users.'
      },
      {
        expression: 'trend',
        meaning: '趋势',
        context: '数据在一段时间内的走向',
        example: 'We can see a clear upward trend in mobile traffic since the update.'
      },
      {
        expression: 'outlier',
        meaning: '异常值',
        context: '数据中显著偏离正常范围的点',
        example: 'This spike in sales is an outlier caused by a one-time viral campaign.'
      },
      {
        expression: 'transition',
        meaning: '过渡',
        context: '从一个话题平滑转移到下一个话题',
        example: 'Now that we\'ve discussed the problem, let\'s transition to our proposed solution.'
      },
      {
        expression: 'takeaway',
        meaning: '核心收获 / 关键结论',
        context: '希望听众记住的重点',
        example: 'The main takeaway from this presentation is that we need to focus on local SEO.'
      },
      {
        expression: 'call to action (CTA)',
        meaning: '行动呼吁',
        context: '演示结束时要求听众执行的动作',
        example: 'My call to action is for everyone to sign up for the beta testing by Friday.'
      },
      {
        expression: 'Q&A session',
        meaning: '问答环节',
        context: '演示后的互动提问时间',
        example: 'We will have a 10-minute Q&A session at the end of the presentation.'
      },
      {
        expression: 'clarify',
        meaning: '澄清',
        context: '进一步解释一个模糊的点',
        example: 'Let me clarify that point with a more detailed example.'
      },
      {
        expression: 'elaborate',
        meaning: '详述',
        context: '提供更多细节',
        example: 'Could you elaborate on how you calculated the ROI for this project?'
      },
      {
        expression: 'breakdown',
        meaning: '细目分类 / 解析',
        context: '将整体数据拆分成小部分',
        example: 'Here is a breakdown of our marketing spend by channel.'
      },
      {
        expression: 'plateau',
        meaning: '（进入）平台期 / 停滞期',
        context: '数据停止增长进入平稳状态',
        example: 'Our user growth seems to have hit a plateau in the last two months.'
      },
      {
        expression: 'projection / forecast',
        meaning: '预测 / 预估',
        context: '对未来表现的推测',
        example: 'Based on current trends, our projection for Q4 is very optimistic.'
      },
      {
        expression: 'alignment',
        meaning: '一致性 / 对齐',
        context: '汇报内容与战略目标的符合度',
        example: 'This project is in perfect alignment with our company\'s mission.'
      },
      {
        expression: 'vocal variety',
        meaning: '语音语调的变化',
        context: '通过改变语速、音量来吸引听众',
        example: 'Effective speakers use vocal variety to highlight important points.'
      },
      {
        expression: 'signposting',
        meaning: '路标词 / 引导语',
        context: '告诉听众你现在讲到哪里的词汇（如 First, Next, Finally）',
        example: 'Good signposting helps the audience follow your logic during a long presentation.'
      },
      {
        expression: 'engagement',
        meaning: '参与度 / 互动',
        context: '听众的专注和互动程度',
        example: 'To increase engagement, I\'ve included a few interactive polls in the deck.'
      },
      {
        expression: 'recap',
        meaning: '简短回顾',
        context: '在结尾处快速总结要点',
        example: 'Let\'s do a quick recap of the three main pillars of our strategy.'
      }
    ],
    sentencePatterns: [
      {
        pattern: "To give you some context, I'd like to share a brief background on [Project].",
        meaning: "为了给各位一些背景信息，我想分享一下关于[项目]的简要背景。",
        usage: "在演示初期提供背景",
        example: "To give you some context, I'd like to share a brief background on the user research we conducted last month."
      },
      {
        pattern: "As you can see from this chart, there is a steady [Increase/Decrease] in [Metric].",
        meaning: "正如大家从这张图表中看到的，[指标]呈现出稳定的[增加/减少]趋势。",
        usage: "描述图表趋势",
        example: "As you can see from this chart, there is a steady increase in customer satisfaction scores."
      },
      {
        pattern: "This brings me to my next point, which is [Topic].",
        meaning: "这引出了我的下一个观点，即[话题]。",
        usage: "自然的段落过渡",
        example: "This brings me to my next point, which is the budget allocation for the next phase."
      },
      {
        pattern: "If we look closer at the data, we'll notice that [Specific Finding].",
        meaning: "如果我们仔细观察数据，我们会注意到[具体发现]。",
        usage: "引导听众关注细节",
        example: "If we look closer at the data, we'll notice that the churn rate is highest in the first week."
      },
      {
        pattern: "What this means for the team is that [Implication/Action].",
        meaning: "这对团队意味着[影响/行动]。",
        usage: "将数据转化为实际意义",
        example: "What this means for the team is that we need to prioritize the mobile app updates."
      },
      {
        pattern: "I'd like to highlight one key takeaway from this slide: [Conclusion].",
        meaning: "我想强调本页幻灯片的一个关键结论：[结论]。",
        usage: "强调核心重点",
        example: "I'd like to highlight one key takeaway from this slide: our organic search is now our top source of leads."
      },
      {
        pattern: "That's a great question. Let me address that by [Action/Explanation].",
        meaning: "问得好。让我通过[动作/解释]来回答这个问题。",
        usage: "礼貌开启 Q&A 回答",
        example: "That's a great question. Let me address that by sharing some additional data we gathered."
      },
      {
        pattern: "To summarize our findings, we have identified three main areas for improvement.",
        meaning: "总结一下我们的发现，我们确定了三个主要的改进领域。",
        usage: "进行末尾总结",
        example: "To summarize our findings, we have identified three main areas for improvement: speed, security, and UI."
      },
      {
        pattern: "In conclusion, we recommend [Action] to achieve our [Goal].",
        meaning: "总之，我们建议[行动]以达成我们的[目标]。",
        usage: "正式给出建议",
        example: "In conclusion, we recommend increasing the marketing budget to achieve our Q4 sales target."
      },
      {
        pattern: "Thank you for your attention. I'd be happy to take any questions now.",
        meaning: "感谢各位的聆听。我现在很乐意回答任何问题。",
        usage: "结束演示并转入提问环节",
        example: "Thank you for your attention. I'd be happy to take any questions or comments you might have."
      }
    ],
    formalDialogue: {
      title: '正式场景：向管理层汇报 Q3 数据',
      context: 'Alex 正在向 VP 和各位经理汇报上个季度的业绩表现。',
      conversation: [
        {
          speaker: 'Alex',
          text: "Good afternoon, everyone. Today, I'm going to walk you through our Q3 performance metrics. Let's start with the user growth chart on the screen."
        },
        {
          speaker: 'VP',
          text: "Alex, looking at that dip in August, could you explain what happened there?"
        },
        {
          speaker: 'Alex',
          text: "That's a great question. To give you some context, that dip was actually expected due to the server maintenance we performed. However, as you can see, we bounced back strongly in September, surpassing our previous peaks."
        },
        {
          speaker: 'Manager B',
          text: "What about the conversion rate? Did the new landing page help?"
        },
        {
          speaker: 'Alex',
          text: "If we look closer at the data, we'll notice that the conversion rate increased by 15% immediately after the launch. This brings me to my next point: our value proposition is clearly resonating with the target audience."
        },
        {
          speaker: 'VP',
          text: "Impressive. What are the next steps?"
        },
        {
          speaker: 'Alex',
          text: "In conclusion, we recommend scaling our ad spend in October to leverage this momentum. Thank you for your time, and I'm happy to take any further questions."
        }
      ],
      learnableExpressions: [
        {
          expression: "Walk you through...",
          explanation: "带你过一遍...（讲解演示的常用动词）"
        },
        {
          expression: "Dip",
          explanation: "下降/低谷（描述图表波动的生动词汇）"
        },
        {
          expression: "Bounced back",
          explanation: "反弹/恢复。"
        },
        {
          expression: "Surpassing our previous peaks",
          explanation: "超过了我们之前的巅峰。"
        },
        {
          expression: "Resonating with...",
          explanation: "与...产生共鸣/受到...认可。"
        },
        {
          expression: "Leverage this momentum",
          explanation: "利用这种势头。"
        }
      ],
      analysis: 'Alex 的汇报非常专业：1. 使用视觉引导（on the screen）；2. 坦诚面对“负面”数据（dip in August）并给出合理的专业解释（server maintenance）；3. 灵活运用过渡句（This brings me to my next point）保持逻辑连贯；4. 最后给出了基于数据的明确建议（scale ad spend）。面对 VP 的质疑，他不仅回答了“是什么”，还解释了“为什么”和“接下来怎么办”。'
    },
    smallTalkDialogue: {
      title: '非正式场景：演示后的反馈收集',
      context: '演示结束后，Alex 在休息区遇到了刚才听汇报的一位同事。',
      conversation: [
        {
          speaker: 'Colleague',
          text: "Great job on the presentation, Alex! The charts were really clear."
        },
        {
          speaker: 'Alex',
          text: "Thanks! I appreciate that. I was a bit worried the technical breakdown might be too much for the group."
        },
        {
          speaker: 'Colleague',
          text: "Not at all. Actually, that 'one key takeaway' slide was very helpful. It simplified everything."
        },
        {
          speaker: 'Alex',
          text: "Glad to hear that. Did you feel the pace was okay? I felt I might have rushed the Q&A a bit."
        },
        {
          speaker: 'Colleague',
          text: "Maybe a little, but the content was so solid no one seemed to mind. By the way, could you send me the deck? I'd love to show it to my team."
        },
        {
          speaker: 'Alex',
          text: "Absolutely. I'll shoot it over to you this afternoon. Thanks for the feedback!"
        }
      ],
      learnableExpressions: [
        {
          expression: "Technical breakdown",
          explanation: "技术细节解析。"
        },
        {
          expression: "Rushed the Q&A",
          explanation: "把问答环节弄得太仓促了。"
        },
        {
          expression: "Content was solid",
          explanation: "内容非常充实/过硬。"
        },
        {
          expression: "Shoot it over to you",
          explanation: "发（邮件/信息）给你。"
        }
      ],
      analysis: 'Alex 在演示后并没有“拔腿就跑”，而是主动询问同事的感受（Did you feel the pace was okay?）。这种谦逊的态度和对“用户体验”的关注，不仅能让他获得真实改进建议，还能建立良好的人际关系。同时，同事主动索要 Deck 也证明了他的演示非常成功。'
    },
    commonMistakes: [
      {
        wrong: "Look at the screen. You see numbers.",
        better: "I'd like to draw your attention to the charts on the screen, which represent our Q3 metrics.",
        explanation: "不要用命令式。使用 'draw your attention to'（请大家看...）和 'represent'（代表）显得更正式。"
      },
      {
        wrong: "I am finished. Any questions?",
        better: "That concludes my presentation. Thank you for your time. I'd be happy to take any questions now.",
        explanation: "结尾要有仪式感。宣布 'That concludes my presentation'（我的演示到此结束）并致谢，再开启 Q&A。"
      },
      {
        wrong: "I don't know the answer to that.",
        better: "That's an interesting point. I don't have that specific data on hand, but I'll find out and get back to you after the meeting.",
        explanation: "不要生硬拒绝。肯定问题 'interesting point'，说明目前 'don't have data on hand'，并承诺 'get back to you'。"
      },
      {
        wrong: "The data is good.",
        better: "The data indicates a significant improvement in our operational efficiency.",
        explanation: "'Good' 太宽泛。使用 'indicates'（显示/表明）和 'significant improvement'（显著提升）更具体、更专业。"
      },
      {
        wrong: "Next slide is about budget.",
        better: "Moving on to our next topic, let's take a look at the budget allocation.",
        explanation: "过渡要顺滑。使用 'Moving on to our next topic'（进入下一个话题）比直白说“下一页是...”要连贯得多。"
      }
    ],
    expressionUpgrades: [
      {
        basic: "I will talk about three things.",
        better: "I have divided my presentation into three main parts.",
        professional: "My presentation today will cover three core strategic pillars that define our vision for the coming year.",
        explanation: "使用 core strategic pillars（核心战略支柱）和 define our vision（定义我们的愿景）能瞬间拔高演示的档次。"
      },
      {
        basic: "Sales went up a lot.",
        better: "We saw a significant increase in sales.",
        professional: "We experienced a substantial surge in revenue, exceeding our initial quarterly projections by 25%.",
        explanation: "使用 substantial surge（大幅增长）和 revenue（收入）/ projections（预测）展示了高阶的商业语感。"
      },
      {
        basic: "This is a big problem.",
        better: "This is a critical issue we need to solve.",
        professional: "This represents a significant challenge that requires immediate strategic intervention to mitigate potential risks.",
        explanation: "使用 strategic intervention（战略干预）和 mitigate risks（减轻风险）是顶尖咨询公司的汇报风格。"
      },
      {
        basic: "I want to show you the plan.",
        better: "Let's look at the proposed plan.",
        professional: "I'd like to present a comprehensive roadmap that outlines our tactical approach to market expansion.",
        explanation: "使用 comprehensive roadmap（全面路线图）和 tactical approach（战术方法）显得非常有计划性和专业度。",
        example: "I'd like to present a comprehensive roadmap that outlines our tactical approach to market expansion in the Southeast Asian region."
      },
      {
        basic: "Please remember this.",
        better: "The most important point is...",
        professional: "If there is one thing I would like you to take away from today's session, it is the imperative of digital transformation.",
        explanation: "使用 If there is one thing I would like you to take away（如果希望大家记住一件事的话）是非常强力的结尾话术。"
      }
    ],
    practiceTasks: [
      {
        title: '任务 1：设计汇报开场白',
        instruction: '想象你要向全公司汇报“远程办公的新规定”。写一个包含 Hook、背景以及演示大纲的 4-5 句话开场白。',
        example: 'Did you know that 80% of our staff prefer a hybrid model? Today, I\'ll share our new remote work policy. First, we\'ll look at the data, then the new rules, and finally, how to apply.'
      },
      {
        title: '任务 2：描述图表趋势',
        instruction: '将以下趋势改写为专业英语：\n1. 缓慢增长\n2. 突然下降\n3. 保持平稳\n4. 达到顶峰',
        example: '1. Steady increase / gradual growth\n2. Sudden drop / sharp decline\n3. Plateaued / remained stable\n4. Reached a peak / hit an all-time high'
      },
      {
        title: '任务 3：录制 Q&A 应对',
        instruction: '录制一段语音应对挑战性提问。场景：听众问：“为什么这个项目超支了？”要求：肯定问题、解释外部原因（如汇率或原材料）、承诺发后续报告。',
        example: 'That\'s a really important question, and I\'m glad you raised it. The overrun was primarily driven by two factors outside our direct control: a significant currency fluctuation between Q2 and Q3, and an unexpected 20% spike in raw material costs due to global supply chain disruptions. We made real-time adjustments wherever possible, but fully absorbing the impact wasn\'t feasible within the original scope. I\'ll include a detailed financial breakdown in the follow-up report I\'m sending to all attendees this week, so you\'ll have the full picture to review.'
      }
    ],
    saveablePhrases: [
      {
        phrase: "To give you some context, I'd like to share a brief background on our Q3 research.",
        category: "汇报",
        meaning: "为了给各位一些背景信息，我想分享一下关于我们第三季度研究的简要背景。"
      },
      {
        phrase: "As you can see from this chart, there is a steady upward trend in user engagement.",
        category: "汇报",
        meaning: "正如大家从这张图表中看到的，用户参与度呈现出稳定的上升趋势。"
      },
      {
        phrase: "This brings me to my next point, which is the proposed budget for the new initiative.",
        category: "汇报",
        meaning: "这引出了我的下一个观点，即新举措的提议预算。"
      },
      {
        phrase: "What this means for our department is that we need to prioritize efficiency over scale.",
        category: "汇报",
        meaning: "这对我们部门意味着我们需要优先考虑效率而非规模。"
      },
      {
        phrase: "That's a great question. Let me address that by sharing our latest findings from the field.",
        category: "Small Talk",
        meaning: "问得好。让我通过分享我们最新的实地调研结果来回答这个问题。"
      },
      {
        phrase: "To summarize our findings, we've identified three core pillars for our strategy moving forward.",
        category: "汇报",
        meaning: "总结一下我们的发现，我们为未来的战略确定了三个核心支柱。"
      },
      {
        phrase: "If there's one thing I'd like you to take away today, it's the importance of customer-centric design.",
        category: "汇报",
        meaning: "如果今天我希望大家能记住一件事，那就是以客户为中心的设计的重要性。"
      },
      {
        phrase: "That concludes my presentation. Thank you for your time and I'm happy to take any questions.",
        category: "Small Talk",
        meaning: "我的演示到此结束。感谢各位的时间，我很乐意回答任何提问。"
      }
    ],
    resources: [
      {
        name: 'British Council — Podcasts for Professionals',
        type: '听力 + transcript',
        description: '跨团队协作、客户沟通、演示与汇报',
        why: '覆盖 business topics、talks、presentations、dialogues，适合 B2 进阶用户训练商务听力、专业表达和 workplace discussion。',
        url: 'https://learnenglish.britishcouncil.org/free-resources/business/podcasts-professionals'
      },
      {
        name: 'British Council — Meetings: Getting Down to Business',
        type: 'meeting lesson / role-play',
        description: '主导会议、会议 small talk、正式进入议题',
        why: '直接讲 meeting opening、small talk、getting down to business，并包含 role-play，非常适合正式职场对话与 small talk 结构训练。',
        url: 'https://www.teachingenglish.org.uk/teaching-resources/teaching-adults/english-business/meetings-1-getting-down-business'
      },
      {
        name: 'BBC Learning English — Office English Playlist',
        type: 'YouTube 视频系列',
        description: '主导会议、催进度、冲突沟通、办公室表达',
        why: '包含 meetings、chasing people、conflict 等真实办公室主题，适合做进阶场景练习和口语输入。',
        url: 'https://www.youtube.com/playlist?list=PLvJsXpfD2S82ZlthZb0LMlw8JgoN9Vczu'
      },
      {
        name: 'Harvard DCE — 8 Ways to Improve Your Communication Skills',
        type: 'workplace communication article',
        description: '跨团队沟通、客户沟通、棘手对话、演示表达',
        why: '适合提炼 clear communication、active listening、audience awareness、concise wording 等进阶沟通原则。',
        url: 'https://professional.dce.harvard.edu/blog/8-ways-you-can-improve-your-communication-skills/'
      },
      {
        name: 'Atlassian — Project Collaboration Best Practices',
        type: 'workplace blog/article',
        description: '跨团队协作、项目更新、action items、shared ownership',
        why: '适合学习 status updates、action items、shared project communication 和团队协作流程，能支撑 cross-team collaboration 单元。',
        url: 'https://www.atlassian.com/software/confluence/resources/guides/best-practices/project-collaboration'
      },
      {
        name: 'Harvard Business Review — What It Takes to Give a Great Presentation',
        type: 'business communication article',
        description: '演示与汇报、主导会议、客户沟通',
        why: '适合训练 presentation structure、audience awareness、clear message 和 persuasive delivery，帮助用户把英文汇报从"把内容说完"提升到"让听众真正理解并被说服"。',
        url: 'https://hbr.org/2020/01/what-it-takes-to-give-a-great-presentation'
      }
    ]
  },
  // Unit 17: 应对棘手对话 / Difficult Conversations
  'c5': {
    id: 'c5',
    title: '应对棘手对话',
    englishTitle: 'Difficult Conversations',
    level: 'C1',
    objectives: [
      '学会处理职场中的高压沟通场景（如拒绝不合理请求、指出同事错误）',
      '掌握“事实优先”的反馈方法，避免情绪化对抗',
      '学习如何礼貌且坚定地设定界限（Setting Boundaries）',
      '掌握应对职场批评（Handling Criticism）并将其转化为改进动力的技巧',
      '学会如何在冲突中寻找“利益公约数”，通过谈判化解僵局'
    ],
    scenarios: [
      '由于任务过重，礼貌地拒绝经理临时指派的额外工作',
      '向一名表现不佳或配合度低的跨部门同事提出改进要求',
      '当你的创意被他人“掠夺”或未被公正署名时，进行严肃沟通',
      '在面对客户的无理要求或超限索赔时，进行谈判和博弈',
      '应对上级在公开场合对你的尖锐批评或误解',
      '与工作习惯完全不同的同事讨论如何调整协作方式',
      '在资源有限的情况下，与其他部门主管争夺关键人手'
    ],
    vocabulary: [
      {
        expression: 'constructive feedback',
        meaning: '建设性反馈',
        context: '旨在帮助改进而非单纯指责的意见',
        example: 'I\'d like to offer some constructive feedback on the design process.'
      },
      {
        expression: 'set boundaries',
        meaning: '设定界限',
        context: '明确告知对方你的接受范围（时间、职责等）',
        example: 'Setting boundaries early is crucial for maintaining work-life balance.'
      },
      {
        expression: 'defensive',
        meaning: '防御性的 / 戒备的',
        context: '受到批评时下意识地反驳或找借口',
        example: 'Try not to get defensive when your work is being reviewed.'
      },
      {
        expression: 'objective',
        meaning: '客观的',
        context: '基于事实而非个人感情',
        example: 'We need to keep the discussion as objective as possible.'
      },
      {
        expression: 'friction',
        meaning: '摩擦 / 分歧',
        context: '合作中的不愉快或阻力',
        example: 'There was some friction between the teams regarding the project scope.'
      },
      {
        expression: 'misalignment',
        meaning: '不匹配 / 缺乏对齐',
        context: '双方的目标或理解不一致',
        example: 'The conflict stemmed from a misalignment of expectations.'
      },
      {
        expression: 'mediate / mediation',
        meaning: '调解',
        context: '在冲突双方之间进行协调',
        example: 'The HR manager had to mediate the dispute between the two coworkers.'
      },
      {
        expression: 'resolution',
        meaning: '解决 / 决议',
        context: '冲突的最终处理结果',
        example: 'We are committed to finding a fair resolution for everyone involved.'
      },
      {
        expression: 'assertive',
        meaning: '坚定而自信的',
        context: '有礼貌地坚持自己的立场和需求',
        example: 'Being assertive means expressing your needs without being aggressive.'
      },
      {
        expression: 'passive-aggressive',
        meaning: '冷暴力 / 阴阳怪气的',
        context: '间接表达不满而非正面沟通',
        example: 'Passive-aggressive behavior can quickly ruin a team\'s culture.'
      },
      {
        expression: 'compromise',
        meaning: '妥协 / 折中',
        context: '双方各退一步以达成一致',
        example: 'To reach a compromise, we decided to push the deadline by two days.'
      },
      {
        expression: 'underperformer',
        meaning: '表现不佳者',
        context: '工作产出低于预期的人',
        example: 'Managing an underperformer requires clear goals and frequent check-ins.'
      },
      {
        expression: 'accountability',
        meaning: '问责性 / 责任心',
        context: '为自己的行为和结果负责',
        example: 'Accountability is the foundation of any high-performing team.'
      },
      {
        expression: 'vulnerability',
        meaning: '脆弱性 / 坦诚',
        context: '承认自己的不足，建立深度信任',
        example: 'Showing a little vulnerability can actually make you a stronger leader.'
      },
      {
        expression: 'gaslighting',
        meaning: '心理操纵',
        context: '否定对方对事实的认知（职场PUA常见手段）',
        example: 'Professional gaslighting often involves denying that previous instructions were given.'
      },
      {
        expression: 'micro-management',
        meaning: '事无巨细的管理',
        context: '过分干预下属的具体操作',
        example: 'Micro-management can demotivate senior employees who value autonomy.'
      },
      {
        expression: 'non-negotiable',
        meaning: '不可商量的',
        context: '底线，没有退让空间',
        example: 'The safety standards of our products are non-negotiable.'
      },
      {
        expression: 'empathy',
        meaning: '同理心',
        context: '站在对方角度理解其难处',
        example: 'Having empathy for your colleagues makes difficult conversations easier.'
      },
      {
        expression: 'de-escalate',
        meaning: '降级（冲突）/ 降温',
        context: '缓和紧张气氛，防止冲突升级',
        example: 'The manager used calm language to de-escalate the heated argument.'
      },
      {
        expression: 'stand one\'s ground',
        meaning: '坚持立场 / 不退缩',
        context: '在压力下守住自己的底线',
        example: 'Even under pressure from the client, Alex stood his ground on the pricing.'
      }
    ],
    sentencePatterns: [
      {
        pattern: "I value our collaboration, but I'm concerned about [Issue].",
        meaning: "我很看重我们的合作，但我对[问题]感到担忧。",
        usage: "在指出对方问题前先进行正面肯定",
        example: "I value our collaboration, but I'm concerned about the recurring delays in the data transfer."
      },
      {
        pattern: "To ensure the quality of [Project], I'll need to decline [Request] for now.",
        meaning: "为了确保[项目]的质量，我现在需要拒绝[请求]。",
        usage: "给出“为了工作质量”的正当拒绝理由",
        example: "To ensure the quality of the report, I'll need to decline the extra data analysis task for now."
      },
      {
        pattern: "I've noticed a pattern where [Behavior], and I'd like to understand the cause.",
        meaning: "我注意到一个现象：[某种行为]，我想了解一下原因。",
        usage: "描述事实而非直接指责人品",
        example: "I've noticed a pattern where the feedback is sent after the deadline, and I'd like to understand the cause."
      },
      {
        pattern: "Could we agree on a process that works for both of us regarding [Topic]?",
        meaning: "关于[话题]，我们能商定一个对我们双方都行之有效的流程吗？",
        usage: "将冲突引向建设性的规则制定",
        example: "Could we agree on a process that works for both of us regarding late-night urgent requests?"
      },
      {
        pattern: "I'm not comfortable with [Behavior/Action] as it [Impact].",
        meaning: "我对[行为/动作]感到不适，因为它[负面影响]。",
        usage: "清晰且专业地设定界限",
        example: "I'm not comfortable with the aggressive tone in our meetings as it discourages open discussion."
      },
      {
        pattern: "Thank you for the feedback. Let me reflect on that and we can discuss it further.",
        meaning: "感谢您的反馈。让我反思一下，之后我们可以进一步讨论。",
        usage: "在面对尖锐批评时争取缓冲时间",
        example: "Thank you for the feedback on my presentation style. Let me reflect on that and we can discuss it during our next sync."
      },
      {
        pattern: "What can we do to make sure this doesn't happen again in the future?",
        meaning: "我们能做些什么来确保以后不再发生这种情况？",
        usage: "从纠结过去转向解决未来",
        example: "I understand the error occurred. What can we do to make sure this doesn't happen again in the next launch?"
      },
      {
        pattern: "If I understand correctly, your main frustration is [Issue]. Is that right?",
        meaning: "如果我理解得没错，您最感挫败的点是[问题]。对吗？",
        usage: "通过确认对方情绪焦点来降温",
        example: "If I understand correctly, your main frustration is the lack of communication from our IT team. Is that right?"
      },
      {
        pattern: "My current capacity is full, but I could prioritize this if we postpone [Task B].",
        meaning: "我目前的负荷已满，但如果我们推迟[任务 B]，我可以优先处理这个。",
        usage: "在拒绝的同时提供灵活的解决方案",
        example: "My current capacity is full, but I could prioritize this audit if we postpone the training session until next week."
      },
      {
        pattern: "I'd like to align on the definition of 'urgent' so we can collaborate better.",
        meaning: "我想就‘紧急’的定义达成共识，以便我们能更好地协作。",
        usage: "消除模糊词汇带来的期望差异",
        example: "I'd like to align on the definition of 'urgent' so we can avoid midnight calls for non-critical tasks."
      }
    ],
    formalDialogue: {
      title: '正式场景：拒绝不合理的工作指派',
      context: 'Alex 已经超负荷工作，经理 Sarah 却又想把一个紧急的跨部门协调工作交给他。',
      conversation: [
        {
          speaker: 'Sarah',
          text: "Alex, I know you're busy, but the Sales team needs a POC for the new region launch. I'd like you to take the lead on that starting tomorrow."
        },
        {
          speaker: 'Alex',
          text: "I appreciate you trusting me with this, Sarah. However, I have to be honest about my current capacity."
        },
        {
          speaker: 'Sarah',
          text: "It's a high-priority project, though. We really need someone with your experience."
        },
        {
          speaker: 'Alex',
          text: "I understand the priority. But currently, I'm 100% committed to the Q4 audit and the client migration. If I take this on, I'm concerned the quality of all three projects will suffer."
        },
        {
          speaker: 'Sarah',
          text: "We can't really delay the Sales launch. What do you suggest?"
        },
        {
          speaker: 'Alex',
          text: "To ensure the audit is completed on time, could we perhaps delegate the client migration tasks to Mark? If he can handle the day-to-day there, I can free up enough bandwidth for the Sales team."
        },
        {
          speaker: 'Sarah',
          text: "That's a fair point. Let me talk to Mark and see if he's up for it. Thanks for being direct, Alex."
        }
      ],
      learnableExpressions: [
        {
          expression: "Be honest about my capacity",
          explanation: "对我的负荷量保持诚实（礼貌拒绝的铺垫）"
        },
        {
          expression: "Quality will suffer",
          explanation: "质量会受损（强调勉强承接的后果）"
        },
        {
          expression: "Free up enough bandwidth",
          explanation: "腾出足够的精力/时间。"
        },
        {
          expression: "Being direct",
          explanation: "有话直说/直率（被视为一种积极的职场品质）"
        }
      ],
      analysis: '在这场棘手对话中，Alex 成功运用了“事实+后果+方案”的策略。他没有直接说“我不干”，而是说明了“三个项目质量都会受损”的事实，这比单纯说“我累”更有说服力。同时，他主动提出了资源调配的方案（让 Mark 接手部分工作），将自己从“拒绝者”变成了“问题的解决者”。'
    },
    smallTalkDialogue: {
      title: '非正式场景：指出同事的工作失误',
      context: 'Alex 发现同事 Mark 发送的数据报表里有一个明显的计算错误，需要在正式提交前提醒他。',
      conversation: [
        {
          speaker: 'Alex',
          text: "Hey Mark, do you have a quick second? I was just reviewing the draft for the board meeting."
        },
        {
          speaker: 'Mark',
          text: "Sure, Alex. Is everything okay with the numbers?"
        },
        {
          speaker: 'Alex',
          text: "Actually, I noticed a slight discrepancy in the growth formula on slide 5. It looks like it might be calculating the gross instead of the net."
        },
        {
          speaker: 'Mark',
          text: "Oh, really? Let me see... damn, you're right. I must have missed that in the rush."
        },
        {
          speaker: 'Alex',
          text: "No worries at all, I've been there! I just wanted to catch it before it went to the VP. Do you want me to help you re-run those figures?"
        },
        {
          speaker: 'Mark',
          text: "That would be a lifesaver. Thanks for having my back, Alex. I really appreciate you being so discreet about it."
        }
      ],
      learnableExpressions: [
        {
          expression: "Slight discrepancy",
          explanation: "微小的差异/不符之处（比使用 error 更温和）"
        },
        {
          expression: "I've been there",
          explanation: "我也经历过/我也犯过类似的错（用于化解对方的尴尬）"
        },
        {
          expression: "Have my back",
          explanation: "支持我/在背后罩着我（非正式表达）"
        },
        {
          expression: "Discreet",
          explanation: "谨慎的/不张扬的（感激对方私下提醒而非公开纠错）"
        }
      ],
      analysis: '纠正同事错误是一门艺术。Alex 使用了“私下沟通”（discreet）的方式，并用 "slight discrepancy" 这种弱化词汇来减轻 Mark 的防御心理。通过一句 "I\'ve been there"，他迅速建立了情感共鸣。这种做法保护了同事的面子，同时也确保了工作产出的质量。'
    },
    commonMistakes: [
      {
        wrong: "You are being very unprofessional.",
        better: "I'm concerned that the current communication style is affecting our team's productivity.",
        explanation: "不要攻击人品（unprofessional）。描述这种行为产生的具体负面后果（affecting productivity）。"
      },
      {
        wrong: "I am too stressed to do this.",
        better: "Currently, my priority is [Task A]. Adding [Task B] would impact the delivery of both.",
        explanation: "职场不关心你的情绪（stressed），但关心交付（delivery）。用优先级的逻辑来解释为什么不能承接。"
      },
      {
        wrong: "It's not my fault, Mark did it.",
        better: "There was a gap in our handover process. Let's look at how we can clarify responsibilities next time.",
        explanation: "不要甩锅（blame）。将错误归因于流程（handover process）并寻求解决方案。"
      },
      {
        wrong: "Why did you ignore my email?",
        better: "I'm following up as I haven't heard back. Is there any blocker I can help you with?",
        explanation: "不要用审问的语气。用“提供帮助”的态度进行跟进（follow-up），通常更能促使对方回复。"
      },
      {
        wrong: "You should have known better.",
        better: "Let's align on the expectations for this type of task moving forward.",
        explanation: "不要事后诸葛亮。将焦点放在“未来”（moving forward）和“期望对齐”（align on expectations）。"
      }
    ],
    expressionUpgrades: [
      {
        basic: "I don't like your idea.",
        better: "I have some reservations about this approach.",
        professional: "While I appreciate the creative direction, I have some strategic reservations regarding the scalability of this model.",
        explanation: "使用 reservations（保留意见/疑虑）和 strategic（战略上的）显示了你的反对是基于理性的专业判断。"
      },
      {
        basic: "You need to fix this error.",
        better: "There are some points that need adjustment.",
        professional: "I've identified a few areas where the current output doesn't quite meet our quality standards. Could we look at refining these specific points?",
        explanation: "使用 quality standards（质量标准）和 refining（完善/打磨）比简单的“改错”听起来更有追求卓越的职场范。"
      },
      {
        basic: "I can't talk to you now.",
        better: "I'm tied up at the moment.",
        professional: "I'm currently focused on a high-stakes task. Could we schedule a 10-minute session later this afternoon to give your topic the attention it deserves?",
        explanation: "不仅是拒绝，还解释了是为了给对方“应有的关注”（attention it deserves），让对方感到被重视而非被排斥。"
      },
      {
        basic: "Stop bothering me with small things.",
        better: "I'd prefer if we could focus our syncs on high-level strategy.",
        professional: "To maximize our time, let's empower the junior team members to handle the tactical details while we focus on the overarching vision.",
        explanation: "使用 tactical details（战术细节）和 overarching vision（全局愿景）来委婉地要求减少琐碎事务的干扰。"
      },
      {
        basic: "I disagree because I'm right.",
        better: "Based on my experience, I think we should [Action].",
        professional: "Based on the historical data and current market trends, I would suggest a more conservative approach to mitigate potential downside risks.",
        explanation: "使用 historical data（历史数据）和 market trends（市场趋势）作为支撑，比单纯说“根据经验”更有说服力。"
      }
    ],
    practiceTasks: [
      {
        title: '任务 1：委婉拒绝请求练习',
        instruction: '同事请你下午 5 点帮他改个 PPT，但你今晚有重要私事必须按时下班。请用“感谢信任 + 陈述负荷/困难 + 提供替代建议”的结构写一段话。',
        example: 'Thanks for thinking of me! I\'d love to help, but I have a hard deadline for another project today and must leave on time. Could I take a look first thing tomorrow morning, or is Sarah available to help now?'
      },
      {
        title: '任务 2：指出同事迟到问题',
        instruction: '作为小组长，你发现一名组员最近连续三次会议迟到。请写一段话，旨在通过“描述现象 + 询问原因 + 强调影响”来解决问题，而非指责。',
        example: 'I noticed you\'ve missed the start of our last few morning syncs. Is everything okay? These meetings are crucial for our team alignment, and I want to make sure you have the support you need to attend.'
      },
      {
        title: '任务 3：录制应对上级批评',
        instruction: '录制一段语音应对批评。场景：上级批评你的方案“不够创新”。要求：保持冷静、感谢反馈、询问具体的改进方向（获取更多信息）。',
        example: 'Thank you for the direct feedback — I genuinely appreciate it. I hear your point about the proposal needing to push further on innovation, and I want to make sure the next version addresses exactly what you have in mind. Could I ask a quick follow-up question? When you say more innovative, are you thinking more in terms of the delivery mechanism, the technology we\'re leveraging, or the overall strategic angle? Any clarity you can give me would really help me sharpen the next iteration in the right direction.'
      }
    ],
    saveablePhrases: [
      {
        phrase: "I value our professional relationship, but I have some concerns about [Topic].",
        category: "Small Talk",
        meaning: "我很看重我们的职业关系，但我对[话题]有些担忧。"
      },
      {
        phrase: "To maintain the quality of our deliverables, I'll need to decline this request for now.",
        category: "汇报",
        meaning: "为了保持交付物的质量，我现在需要拒绝这项请求。"
      },
      {
        phrase: "I've noticed a pattern regarding the [Behavior], and I'd like to understand how we can improve.",
        category: "汇报",
        meaning: "我注意到一个关于[行为]的现象，我想了解一下我们该如何改进。"
      },
      {
        phrase: "Could we align on a communication protocol that works for both of our teams?",
        category: "Small Talk",
        meaning: "关于沟通协议，我们能商定一个对我们双方都行之有效的方案吗？"
      },
      {
        phrase: "I'm not comfortable with the current approach as it might create long-term risks.",
        category: "汇报",
        meaning: "我对目前的方法感到不适，因为它可能会产生长期风险。"
      },
      {
        phrase: "Thank you for being so direct; I appreciate the constructive feedback on my work.",
        category: "Small Talk",
        meaning: "感谢您如此直率；我很感激您对我的工作提出的建设性反馈。"
      },
      {
        phrase: "Let's focus on finding a resolution that serves our mutual project goals.",
        category: "汇报",
        meaning: "让我们专注于寻找一个符合我们共同项目目标的解决方案。"
      },
      {
        phrase: "My current capacity is full, but I can prioritize this if we adjust our other timelines.",
        category: "汇报",
        meaning: "我目前的负荷已满，但如果我们调整其他时间线，我可以优先处理这个。"
      }
    ],
    resources: [
      {
        name: 'British Council — Podcasts for Professionals',
        type: '听力 + transcript',
        description: '跨团队协作、客户沟通、演示与汇报',
        why: '覆盖 business topics、talks、presentations、dialogues，适合 B2 进阶用户训练商务听力、专业表达和 workplace discussion。',
        url: 'https://learnenglish.britishcouncil.org/free-resources/business/podcasts-professionals'
      },
      {
        name: 'British Council — Meetings: Getting Down to Business',
        type: 'meeting lesson / role-play',
        description: '主导会议、会议 small talk、正式进入议题',
        why: '直接讲 meeting opening、small talk、getting down to business，并包含 role-play，非常适合正式职场对话与 small talk 结构训练。',
        url: 'https://www.teachingenglish.org.uk/teaching-resources/teaching-adults/english-business/meetings-1-getting-down-business'
      },
      {
        name: 'BBC Learning English — Office English Playlist',
        type: 'YouTube 视频系列',
        description: '主导会议、催进度、冲突沟通、办公室表达',
        why: '包含 meetings、chasing people、conflict 等真实办公室主题，适合做进阶场景练习和口语输入。',
        url: 'https://www.youtube.com/playlist?list=PLvJsXpfD2S82ZlthZb0LMlw8JgoN9Vczu'
      },
      {
        name: 'Harvard DCE — 8 Ways to Improve Your Communication Skills',
        type: 'workplace communication article',
        description: '跨团队沟通、客户沟通、棘手对话、演示表达',
        why: '适合提炼 clear communication、active listening、audience awareness、concise wording 等进阶沟通原则。',
        url: 'https://professional.dce.harvard.edu/blog/8-ways-you-can-improve-your-communication-skills/'
      },
      {
        name: 'Atlassian — Project Collaboration Best Practices',
        type: 'workplace blog/article',
        description: '跨团队协作、项目更新、action items、shared ownership',
        why: '适合学习 status updates、action items、shared project communication 和团队协作流程，能支撑 cross-team collaboration 单元。',
        url: 'https://www.atlassian.com/software/confluence/resources/guides/best-practices/project-collaboration'
      },
      {
        name: 'Harvard Business Review — What It Takes to Give a Great Presentation',
        type: 'business communication article',
        description: '演示与汇报、主导会议、客户沟通',
        why: '适合训练 presentation structure、audience awareness、clear message 和 persuasive delivery，帮助用户把英文汇报从"把内容说完"提升到"让听众真正理解并被说服"。',
        url: 'https://hbr.org/2020/01/what-it-takes-to-give-a-great-presentation'
      }
    ]
  },
  // Unit 18: 跨文化沟通 / Intercultural Communication
  'c6': {
    id: 'c6',
    title: '跨文化沟通',
    englishTitle: 'Intercultural Communication',
    level: 'C1',
    objectives: [
      '理解高语境（High-context）与低语境（Low-context）文化在职场表达中的差异',
      '学会识别并尊重不同文化中的时间观念（Punctuality）与等级制度（Hierarchy）',
      '掌握在全球化团队中进行包容性表达（Inclusive Language）的技巧',
      '学习如何用英语委婉地进行跨文化说服（Persuasion）与反馈',
      '掌握跨文化会议中的礼仪，避开宗教、习俗及禁忌等社交雷区'
    ],
    scenarios: [
      '在跨国视频会议中，与来自不同时区的同事协调截止日期',
      '初次与海外合作伙伴会面，进行礼貌的破冰谈话与文化交换',
      '向一名更倾向于“间接表达”的同事（如来自高语境文化）提出修改建议',
      '由于文化差异导致的工作习惯误解，进行解释与调和',
      '在国际团队中主持会议，确保每位成员（无论英语是否为母语）都能参与讨论',
      '邀请海外客户共进晚餐，并考虑其宗教或饮食禁忌（Dietary Restrictions）',
      '在跨文化商务谈判中，识别对方表达中的“言外之意”'
    ],
    vocabulary: [
      {
        expression: 'cultural sensitivity',
        meaning: '文化敏感度',
        context: '对他种文化保持觉察、尊重且不带偏见',
        example: 'Intercultural communication requires a high degree of cultural sensitivity.'
      },
      {
        expression: 'high-context culture',
        meaning: '高语境文化',
        context: '信息隐藏在环境和关系中，表达委婉（如中日韩）',
        example: 'In high-context cultures, what is unsaid is often as important as what is said.'
      },
      {
        expression: 'low-context culture',
        meaning: '低语境文化',
        context: '信息通过文字直接传达，直截了当（如美德）',
        example: 'If you work with someone from a low-context culture, be prepared for direct feedback.'
      },
      {
        expression: 'time-oriented',
        meaning: '时间导向的',
        context: '形容对时间准时性或效率的重视程度',
        example: 'German business culture is highly time-oriented and values punctuality.'
      },
      {
        expression: 'hierarchy',
        meaning: '等级制度',
        context: '职场中职级的高低排列',
        example: 'Understanding the company hierarchy is crucial when operating in traditional markets.'
      },
      {
        expression: 'nuance',
        meaning: '细微差别 / 弦外之音',
        context: '语言或行为中不易察觉的微妙之处',
        example: 'To succeed in international sales, you must pick up on cultural nuances.'
      },
      {
        expression: 'inclusive language',
        meaning: '包容性语言',
        context: '不带歧视、顾及各方感受的措辞',
        example: 'Using inclusive language helps build a more welcoming global team.'
      },
      {
        expression: 'etiquette',
        meaning: '礼仪 / 礼节',
        context: '特定文化背景下的社交准则',
        example: 'Business etiquette in Japan often involves a formal exchange of business cards.'
      },
      {
        expression: 'dietary restrictions',
        meaning: '饮食禁忌',
        context: '宗教或健康原因导致的不吃某些食物',
        example: 'Please let us know if you have any dietary restrictions before the business dinner.'
      },
      {
        expression: 'misconception',
        meaning: '误解 / 偏见',
        context: '基于不完全信息产生的错误认知',
        example: 'Cultural misconceptions can lead to friction during cross-border negotiations.'
      },
      {
        expression: 'inclusive / inclusion',
        meaning: '包容性的 / 包容性',
        context: '尊重并整合多样性',
        example: 'Inclusion is about creating an environment where everyone feels they belong.'
      },
      {
        expression: 'unconscious bias',
        meaning: '无意识偏见',
        context: '潜意识中对他人的刻板印象',
        example: 'Training can help managers recognize and mitigate unconscious bias.'
      },
      {
        expression: 'common ground',
        meaning: '共同点',
        context: '不同背景下双方都认可的共识',
        example: 'Despite our cultural differences, we found common ground in our passion for innovation.'
      },
      {
        expression: 'diplomatic',
        meaning: '外交手腕的 / 委婉周全的',
        context: '在处理敏感问题时既礼貌又有效',
        example: 'Being diplomatic is key when giving negative feedback to an international partner.'
      },
      {
        expression: 'global mindset',
        meaning: '全球化心态',
        context: '能跨越国界和文化界限思考的能力',
        example: 'A global mindset is a highly valued trait in today\'s interconnected economy.'
      },
      {
        expression: 'stereotype',
        meaning: '刻板印象',
        context: '对某一群体简单化的概括',
        example: 'We must challenge stereotypes and see each colleague as an individual.'
      },
      {
        expression: 'diversity',
        meaning: '多样性',
        context: '团队中成员背景的不同',
        example: 'Our team\'s diversity is our greatest strength when solving complex problems.'
      },
      {
        expression: 'rapport',
        meaning: '融洽关系',
        context: '跨文化社交中首先要建立的互信',
        example: 'Small talk about travel or food is a great way to build rapport cross-culturally.'
      },
      {
        expression: 'negotiating style',
        meaning: '谈判风格',
        context: '不同文化在博弈时的习惯做法',
        example: 'American negotiating styles tend to be more competitive and fast-paced.'
      },
      {
        expression: 'collectivism / individualism',
        meaning: '集体主义 / 个人主义',
        context: '衡量社会对个人或集体的重视程度',
        example: 'In a collectivist culture, team achievements are celebrated over individual ones.'
      }
    ],
    sentencePatterns: [
      {
        pattern: "I'd like to ensure I'm being culturally sensitive. Is there anything I should keep in mind when [Action]?",
        meaning: "我想确保我遵循了文化礼仪。在[做某事]时，有什么我需要注意的吗？",
        usage: "主动询问并展示对他种文化的尊重",
        example: "I'd like to ensure I'm being culturally sensitive. Is there anything I should keep in mind when hosting a dinner for the Saudi team?"
      },
      {
        pattern: "In my culture, we usually [Practice]. How does that compare to your local custom?",
        meaning: "在我们的文化中，我们通常[做法]。这和你们当地的习俗相比如何？",
        usage: "通过对比来启动文化层面的深度沟通",
        example: "In my culture, we usually start meetings with small talk. How does that compare to your local custom?"
      },
      {
        pattern: "To make sure nothing is lost in translation, could we recap the main points?",
        meaning: "为了确保没有由于语言差异产生误解，我们能总结一下要点吗？",
        usage: "礼貌地进行最后的核对",
        example: "To make sure nothing is lost in translation, could we recap the main points before we end the call?"
      },
      {
        pattern: "I appreciate the indirect feedback, but to be sure I understand, are you suggesting [Action]?",
        meaning: "我很感激这些委婉的反馈，但为了确信我理解了，您是在建议[行动]吗？",
        usage: "在面对高语境文化时进行清晰确认",
        example: "I appreciate the indirect feedback, but to be sure I understand, are you suggesting that we should redo the entire design?"
      },
      {
        pattern: "I understand that in your region, [Topic] is handled differently. Could you share some insights?",
        meaning: "我了解到在你们地区，[话题]的处理方式不同。您能分享一些见解吗？",
        usage: "以学习的心态请求对方提供文化洞察",
        example: "I understand that in your region, contract negotiations are handled differently. Could you share some insights?"
      },
      {
        pattern: "Would [Time/Date] work for your team? I want to be mindful of the time difference.",
        meaning: "[时间/日期]对贵团队方便吗？我希望能考虑到时差问题。",
        usage: "体现对远程/异国团队的关怀",
        example: "Would 8 AM Monday work for your team? I want to be mindful of the time difference between New York and Shanghai."
      },
      {
        pattern: "Let's use clear and concise language to ensure everyone is on the same page.",
        meaning: "让我们使用清晰简洁的语言，以确保每个人都在同一个节奏上。",
        usage: "在多元文化背景下倡导简单有效的沟通",
        example: "Let's use clear and concise language and avoid idioms to ensure everyone is on the same page."
      },
      {
        pattern: "I apologize if I unintentionally caused any offense; it was certainly not my intention.",
        meaning: "如果我无意中造成了冒犯，我深表歉意；那绝对不是我的本意。",
        usage: "发现文化误判时的通用道歉词",
        example: "I apologize if I unintentionally caused any offense by mentioning that topic; it was certainly not my intention."
      },
      {
        pattern: "How do you prefer to receive feedback—directly or in a more private setting?",
        meaning: "您更喜欢以哪种方式接收反馈——直接指出，还是在更私密的场合？",
        usage: "尊重不同文化对“面子”的看重程度",
        example: "To ensure our collaboration is smooth, how do you prefer to receive feedback—directly or in a more private setting?"
      },
      {
        pattern: "It's important that we build a foundation of mutual respect across our global offices.",
        meaning: "在我们全球办公室之间建立互惠互利和相互尊重的基石是非常重要的。",
        usage: "强调全球化团队的核心价值观",
        example: "It's important that we build a foundation of mutual respect and trust across our global offices."
      }
    ],
    formalDialogue: {
      title: '正式场景：处理跨国时区与习惯的误解',
      context: 'Alex 需要协调美国团队与日本合作伙伴的会议，双方对“截止日期”的理解产生了偏差。',
      conversation: [
        {
          speaker: 'Alex',
          text: "Hi Hiroshi, thank you for the report. However, I noticed it arrived about 24 hours later than the US team expected. Was there a misunderstanding on the deadline?"
        },
        {
          speaker: 'Hiroshi',
          text: "My apologies, Alex. In our team, 'Friday EOD' usually means the end of our working day here in Tokyo. I didn't realize the US team needed it by their EOD."
        },
        {
          speaker: 'Alex',
          text: "Ah, I see. That makes sense. It's a classic case of 'lost in translation' with time zones. Moving forward, should we specify deadlines in a single time zone, like UTC, to avoid this?"
        },
        {
          speaker: 'Hiroshi',
          text: "That would be very helpful. We want to ensure we don't cause any delays for the global project."
        },
        {
          speaker: 'Alex',
          text: "Great. Also, I'd like to ensure I'm being culturally sensitive. I noticed you were very quiet during the last group call. Is there a better way for us to solicit your team's input?"
        },
        {
          speaker: 'Hiroshi',
          text: "In our culture, we tend to listen more and speak only when we have a final conclusion. Perhaps we could provide our feedback in writing after the call instead?"
        },
        {
          speaker: 'Alex',
          text: "That's a fantastic insight. I'll make sure to include a 'written feedback window' for all future meetings. Thank you for sharing that, Hiroshi."
        }
      ],
      learnableExpressions: [
        {
          expression: "Lost in translation",
          explanation: "在翻译（或文化转换）中丢失了/产生了误解。"
        },
        {
          expression: "Classic case",
          explanation: "典型案例。"
        },
        {
          expression: "Moving forward",
          explanation: "今后/从现在开始。"
        },
        {
          expression: "Solicit your input",
          explanation: "征求你的意见。"
        },
        {
          expression: "Insight",
          explanation: "见解/洞察。"
        },
        {
          expression: "Written feedback window",
          explanation: "书面反馈窗口期（一种具体的包容性管理工具）"
        }
      ],
      analysis: 'Alex 的沟通非常具有文化敏感度：1. 他没有指责对方迟到，而是用 "misunderstanding" 给对方留台阶；2. 他主动建议了标准化的时区对齐（UTC），解决实际问题；3. 最重要的是，他观察到了对方文化的参与特征（倾向于先听后说），并主动调整了流程（written feedback），这体现了极高的高阶领导力。'
    },
    smallTalkDialogue: {
      title: '非正式场景：商务晚餐前的禁忌确认',
      context: 'Alex 正在安排与印度和中东客户的晚餐，他需要确认客户的饮食习惯。',
      conversation: [
        {
          speaker: 'Alex',
          text: "Hi Omar, I'm just finalizing the reservation for our team dinner tomorrow. I wanted to double-check if there are any specific dietary restrictions I should inform the chef about?"
        },
        {
          speaker: 'Omar',
          text: "That's very thoughtful of you, Alex. Yes, a couple of our team members only eat Halal, and I personally avoid spicy food."
        },
        {
          speaker: 'Alex',
          text: "Got it. I'll make sure to select a restaurant that offers a wide range of Halal options and we'll steer clear of anything too spicy. Is there anything else culturally significant we should be aware of?"
        },
        {
          speaker: 'Omar',
          text: "Actually, we usually prefer to start with some tea and general conversation before we even look at the menu. We value the social connection."
        },
        {
          speaker: 'Alex',
          text: "I appreciate you sharing that! I'll ensure the evening is paced accordingly. It's important to us that you feel at home while you're here."
        },
        {
          speaker: 'Omar',
          text: "Thank you, Alex. We really appreciate the effort you're putting into this."
        }
      ],
      learnableExpressions: [
        {
          expression: "Dietary restrictions",
          explanation: "饮食限制/禁忌。"
        },
        {
          expression: "Thoughtful",
          explanation: "周到的/体贴的。"
        },
        {
          expression: "Halal",
          explanation: "清真饮食。"
        },
        {
          expression: "Steer clear of",
          explanation: "避开/远离。"
        },
        {
          expression: "Culturally significant",
          explanation: "文化上具有重要意义的事项。"
        },
        {
          expression: "Paced accordingly",
          explanation: "相应地调整节奏。"
        }
      ],
      analysis: 'Alex 展现了极好的“服务意识”和“文化尊重”。他没有自作主张订餐厅，而是先询问 "dietary restrictions" 和 "culturally significant" 的习惯。听到客户喜欢“先喝茶聊天再看菜单”后，他立即承诺调整晚餐节奏（paced accordingly），这种细致的文化体察是赢得国际客户信任的捷径。'
    },
    commonMistakes: [
      {
        wrong: "Why don't you guys just say what you mean?",
        better: "I've noticed that communication styles differ. How can we ensure clear understanding between our offices?",
        explanation: "不要抱怨对方表达不直接。承认“沟通风格差异”（communication styles differ）并寻求共建规则。"
      },
      {
        wrong: "In America, we do it this way, so it's better.",
        better: "Each region has its own strengths. I'm curious to learn more about the best practices in your market.",
        explanation: "不要有“文化优越感”。保持好奇心（curious to learn）并称赞对方的“本地最佳实践”（best practices）。"
      },
      {
        wrong: "Let's meet at 9 AM, it's convenient for me.",
        better: "Could we find a time slot that is reasonable for both time zones? I want to avoid anyone having to join at midnight.",
        explanation: "不要只考虑自己时区。展现“跨时区关怀”（reasonable for both time zones）是全球团队管理的基本功。"
      },
      {
        wrong: "I'll use some local slang to sound cool.",
        better: "I will use clear, standard English to avoid any confusion or misinterpretation.",
        explanation: "跨文化沟通中不要用俚语（slang）或成语（idioms），这会让非母语者感到被排斥。坚持使用“标准英语”（standard English）。"
      },
      {
        wrong: "You should not be offended by this joke.",
        better: "I apologize if my comment was insensitive. I'm still learning about the cultural context here.",
        explanation: "不要替对方决定是否该被冒犯。如果不小心造成不快，坦诚道歉并说明自己在学习（still learning）。"
      }
    ],
    expressionUpgrades: [
      {
        basic: "People here are slow.",
        better: "The decision-making process here is more collaborative and requires more consensus.",
        professional: "We've observed a consensus-driven approach in this region, which ensures long-term commitment but requires a more deliberate timeline.",
        explanation: "将“慢”升级为“共识驱动”（consensus-driven），将贬义转化为对某种管理文化的客观描述。"
      },
      {
        basic: "Your email was confusing.",
        better: "I'm having some trouble interpreting the nuances in your last message.",
        professional: "I'd like to clarify a few points in your previous correspondence to ensure our understanding is fully aligned with the local context.",
        explanation: "使用 interpreting the nuances（解读细节）和 local context（当地语境）显得你非常专业且细腻。"
      },
      {
        basic: "Don't use your local habits here.",
        better: "Let's adopt a unified global standard for our project documentation.",
        professional: "To maximize our cross-border efficiency, it's imperative that we harmonize our operational protocols across all global offices.",
        explanation: "使用 harmonize our protocols（调和/统一我们的协议）和 cross-border efficiency（跨境效率）比指责“本地习惯”高端得多。"
      },
      {
        basic: "He is too bossy because of the hierarchy.",
        better: "The leadership style here reflects a more traditional hierarchical structure.",
        professional: "The prevailing corporate culture in this region prioritizes a top-down leadership model, which streamlines directive execution.",
        explanation: "使用 prevailing culture（盛行的文化）和 top-down model（自上而下模式）客观地分析了层级制文化的优劣。"
      },
      {
        basic: "I like your culture.",
        better: "I'm deeply interested in the rich heritage of your country.",
        professional: "I find the cultural nuances of your region to be incredibly fascinating and look forward to integrating these insights into our strategy.",
        explanation: "使用 integrating insights（整合见解）将单纯的“喜欢”提升到了“对业务有帮助的战略洞察”高度。"
      }
    ],
    practiceTasks: [
      {
        title: '任务 1：编写包容性会议邀约',
        instruction: '你需要邀请伦敦、东京和纽约的三方团队开会。请写一段话，提议一个轮流照顾各方时区的方案，并询问是否有重要节日需要避开。',
        example: 'To be mindful of our global team, I propose we rotate the meeting times each month. For the next session, does 1 PM UTC work? Also, are there any local holidays we should be aware of?'
      },
      {
        title: '任务 2：回应委婉的拒绝',
        instruction: '你向日本客户提议周五签合同，对方回：“周五可能有点困难，我们需要再评估一下。”（其实是拒绝）。请写一段既表示尊重又询问具体障碍的话。',
        example: 'I appreciate you being open about the timeline. I understand that a careful review is necessary. Could you share what specific areas need more evaluation so I can provide the right support?'
      },
      {
        title: '任务 3：录制文化破冰开场',
        instruction: '录制一段 30 秒语音。场景：第一次和海外同事视频。内容：称赞对方所在城市的某个著名特色（如食物或地标）、表达对跨文化合作的兴奋、提议先简单聊聊双方的工作习惯。',
        example: 'Hi everyone, it\'s so great to finally meet you all face to face — or screen to screen, I should say! I have to mention, I\'ve always heard that Tokyo has some of the world\'s best ramen, and I\'m genuinely jealous right now. I\'m really excited about what we\'re going to build together across our teams. Before we dive into the agenda, would you be open to spending five minutes sharing how each of our teams likes to communicate and work day-to-day? I think it\'ll make our collaboration a lot smoother from the start.'
      }
    ],
    saveablePhrases: [
      {
        phrase: "I'd like to ensure I'm being culturally sensitive; is there anything I should keep in mind?",
        category: "Small Talk",
        meaning: "我想确保我遵循了文化礼仪；有什么我需要注意的吗？"
      },
      {
        phrase: "To ensure nothing is lost in translation, could we recap the main action items?",
        category: "汇报",
        meaning: "为了确保没有由于语言差异产生误解，我们能总结一下主要行动项吗？"
      },
      {
        phrase: "I appreciate the indirect feedback, but to be sure I understand, are you suggesting [Action]?",
        category: "Small Talk",
        meaning: "我很感激这些委婉的反馈，但为了确信我理解了，您是在建议[行动]吗？"
      },
      {
        phrase: "Would this time slot work for your team? I want to be mindful of the time difference.",
        category: "Small Talk",
        meaning: "这个时间段对贵团队方便吗？我希望能考虑到时差问题。"
      },
      {
        phrase: "Let's use clear and standard language to ensure everyone across our global offices is aligned.",
        category: "汇报",
        meaning: "让我们使用清晰标准的语言，以确保全球办公室的每个人都能对齐信息。"
      },
      {
        phrase: "I apologize if I unintentionally caused any offense; it was certainly not my intention.",
        category: "Small Talk",
        meaning: "如果我无意中造成了冒犯，我深表歉意；那绝对不是我的本意。"
      },
      {
        phrase: "I've observed a consensus-driven approach in this region, which ensures long-term commitment.",
        category: "汇报",
        meaning: "我观察到该地区采用共识驱动的方法，这确保了长期的承诺。"
      },
      {
        phrase: "We should focus on building a foundation of mutual respect to drive our global success.",
        category: "汇报",
        meaning: "我们应该专注于建立相互尊重的基石，以推动我们的全球成功。"
      }
    ],
    resources: [
      {
        name: 'British Council — Podcasts for Professionals',
        type: '听力 + transcript',
        description: '跨团队协作、客户沟通、演示与汇报',
        why: '覆盖 business topics、talks、presentations、dialogues，适合 B2 进阶用户训练商务听力、专业表达和 workplace discussion。',
        url: 'https://learnenglish.britishcouncil.org/free-resources/business/podcasts-professionals'
      },
      {
        name: 'British Council — Meetings: Getting Down to Business',
        type: 'meeting lesson / role-play',
        description: '主导会议、会议 small talk、正式进入议题',
        why: '直接讲 meeting opening、small talk、getting down to business，并包含 role-play，非常适合正式职场对话与 small talk 结构训练。',
        url: 'https://www.teachingenglish.org.uk/teaching-resources/teaching-adults/english-business/meetings-1-getting-down-business'
      },
      {
        name: 'BBC Learning English — Office English Playlist',
        type: 'YouTube 视频系列',
        description: '主导会议、催进度、冲突沟通、办公室表达',
        why: '包含 meetings、chasing people、conflict 等真实办公室主题，适合做进阶场景练习和口语输入。',
        url: 'https://www.youtube.com/playlist?list=PLvJsXpfD2S82ZlthZb0LMlw8JgoN9Vczu'
      },
      {
        name: 'Harvard DCE — 8 Ways to Improve Your Communication Skills',
        type: 'workplace communication article',
        description: '跨团队沟通、客户沟通、棘手对话、演示表达',
        why: '适合提炼 clear communication、active listening、audience awareness、concise wording 等进阶沟通原则。',
        url: 'https://professional.dce.harvard.edu/blog/8-ways-you-can-improve-your-communication-skills/'
      },
      {
        name: 'Atlassian — Project Collaboration Best Practices',
        type: 'workplace blog/article',
        description: '跨团队协作、项目更新、action items、shared ownership',
        why: '适合学习 status updates、action items、shared project communication 和团队协作流程，能支撑 cross-team collaboration 单元。',
        url: 'https://www.atlassian.com/software/confluence/resources/guides/best-practices/project-collaboration'
      },
      {
        name: 'Harvard Business Review — What It Takes to Give a Great Presentation',
        type: 'business communication article',
        description: '演示与汇报、主导会议、客户沟通',
        why: '适合训练 presentation structure、audience awareness、clear message 和 persuasive delivery，帮助用户把英文汇报从"把内容说完"提升到"让听众真正理解并被说服"。',
        url: 'https://hbr.org/2020/01/what-it-takes-to-give-a-great-presentation'
      }
    ]
  },
  
  // Unit 19: 领导力与愿景 / Leadership & Vision
  'm1': {
    id: 'm1',
    title: '领导力与愿景',
    englishTitle: 'Leadership & Vision',
    level: 'C1',
    objectives: [
      '学会如何撰写并传达具有感染力的团队愿景陈述（Vision Statement）',
      '掌握从管理者（Manager）向领导者（Leader）转变的核心思维与话术',
      '学习如何在变革或危机时期通过战略性沟通（Strategic Communication）稳定军心',
      '掌握鼓舞人心的动员演讲（Inspirational Speech）结构与地道表达',
      '学会如何将公司大目标拆解为团队可执行的阶段性里程碑'
    ],
    scenarios: [
      '在财年开始时的全体会议上宣布部门的新年度战略愿景',
      '面对公司架构调整（Restructuring），向团队解释变化并激发积极性',
      '在项目启动会上通过描绘“大图景”（Big Picture）来提升成员的使命感',
      '与核心成员进行一对一谈话，讨论其个人成长如何与团队愿景对齐',
      '在团队遭遇重大失败时，以领导者身份承担责任并重塑信心',
      '向高级管理层汇报团队的长期路线图（Long-term Roadmap）',
      '在外部行业活动中代表团队分享对行业未来的前瞻性观点'
    ],
    vocabulary: [
      {
        expression: 'vision statement',
        meaning: '愿景陈述',
        context: '描述组织未来蓝图的简短声明',
        example: 'A powerful vision statement should be both ambitious and achievable.'
      },
      {
        expression: 'big picture',
        meaning: '大局 / 全景',
        context: '事物的整体情况，而非局部细节',
        example: 'As a leader, you need to step back and look at the big picture.'
      },
      {
        expression: 'alignment / align',
        meaning: '对齐 / 使一致',
        context: '确保个人目标与组织愿景相符',
        example: 'We need to align our team goals with the company\'s global strategy.'
      },
      {
        expression: 'inspiration / inspirational',
        meaning: '鼓舞人心（的）',
        context: '能激发他人热情和创造力的',
        example: 'Her inspirational speech motivated the whole department to exceed their targets.'
      },
      {
        expression: 'strategic communication',
        meaning: '战略沟通',
        context: '有目的、成体系的沟通方式，旨在达成特定长期目标',
        example: 'Strategic communication is key during times of organizational change.'
      },
      {
        expression: 'empower / empowerment',
        meaning: '赋能 / 授权',
        context: '给下属足够的资源和自主权去完成任务',
        example: 'True leadership is about empowering others to make their own decisions.'
      },
      {
        expression: 'roadmap',
        meaning: '路线图',
        context: '达成愿景的具体阶段性计划',
        example: 'Our technology roadmap outlines our main focus areas for the next three years.'
      },
      {
        expression: 'buy-in',
        meaning: '认可 / 接受',
        context: '让团队成员从内心接受并支持某个想法',
        example: 'Without team buy-in, even the best strategy will fail to execute.'
      },
      {
        expression: 'resilience',
        meaning: '韧性 / 恢复力',
        context: '面对挫折和变革时的适应能力',
        example: 'The leader\'s calm demeanor helped build team resilience during the crisis.'
      },
      {
        expression: 'transparency',
        meaning: '透明度',
        context: '信息公开、诚实的态度',
        example: 'Radical transparency about our challenges builds trust within the team.'
      },
      {
        expression: 'thought leadership',
        meaning: '思想领导力',
        context: '在特定领域输出深度见解、影响他人的能力',
        example: 'Our CTO has established thought leadership in the field of sustainable AI.'
      },
      {
        expression: 'north star',
        meaning: '北极星指标 / 指引方向',
        context: '团队最核心的奋斗目标',
        example: 'Customer satisfaction is our North Star; every decision should support it.'
      },
      {
        expression: 'stakeholder',
        meaning: '利益相关方',
        context: '所有与愿景达成相关的个人或组织',
        example: 'We need to communicate our vision clearly to all internal and external stakeholders.'
      },
      {
        expression: 'mentorship',
        meaning: '导师制 / 指导',
        context: '通过经验分享培养下一代领导者的过程',
        example: 'Mentorship is a core pillar of our leadership development program.'
      },
      {
        expression: 'culture carrier',
        meaning: '文化承载者',
        context: '能身体力行实践公司价值观的员工',
        example: 'Our senior managers must be culture carriers for our new core values.'
      },
      {
        expression: 'disruption',
        meaning: '颠覆 / 突破',
        context: '彻底改变现有的市场或工作模式',
        example: 'Innovation often requires a willingness to embrace positive disruption.'
      },
      {
        expression: 'pioneering',
        meaning: '先驱的 / 开创性的',
        context: '在没人去过的领域带头尝试',
        example: 'We are taking a pioneering approach to decentralized work models.'
      },
      {
        expression: 'impactful',
        meaning: '有影响力的',
        context: '能产生显著、正面结果的',
        example: 'A good leader focuses on impactful tasks that move the needle.'
      },
      {
        expression: 'catalyst',
        meaning: '催化剂',
        context: '促使变化发生的人或事物',
        example: 'The new manager acted as a catalyst for much-needed cultural change.'
      },
      {
        expression: 'synergy',
        meaning: '协同效应',
        context: '团队合作产出的 1+1>2 的结果',
        example: 'The synergy between our design and engineering teams is a key competitive advantage.'
      }
    ],
    sentencePatterns: [
      {
        pattern: "Our collective vision is to [Action] and become the [Position] in [Market].",
        meaning: "我们的共同愿景是[行动]并成为[市场]中的[地位]。",
        usage: "正式陈述团队/部门愿景",
        example: "Our collective vision is to leverage AI and become the most user-centric platform in the fintech market."
      },
      {
        pattern: "To achieve this, we need to focus on three strategic pillars: [A, B, and C].",
        meaning: "为了达成这一目标，我们需要关注三个战略支柱：[A, B 和 C]。",
        usage: "将抽象愿景拆解为具体支柱",
        example: "To achieve this, we need to focus on three strategic pillars: operational excellence, customer intimacy, and product innovation."
      },
      {
        pattern: "I want to challenge us to rethink how we approach [Problem/Process].",
        meaning: "我想挑战大家，让我们重新思考处理[问题/流程]的方式。",
        usage: "鼓励团队打破常规、追求突破",
        example: "I want to challenge us to rethink how we approach customer support in a digital-first world."
      },
      {
        pattern: "It's not just about the numbers; it's about the [Impact/Value] we are creating for [Stakeholders].",
        meaning: "这不仅仅关乎数字，更关乎我们为[利益相关方]创造的[影响/价值]。",
        usage: "赋予工作更高层次的意义感",
        example: "It's not just about the revenue numbers; it's about the financial freedom we are creating for our users."
      },
      {
        pattern: "I'm fully committed to supporting your growth as we move toward this vision.",
        meaning: "在我们迈向这一愿景的过程中，我全力支持你们的成长。",
        usage: "将团队愿景与个人成长绑定",
        example: "I'm fully committed to supporting your growth as we move toward this digital transformation."
      },
      {
        pattern: "In times of [Change/Crisis], our strength lies in our [Core Value].",
        meaning: "在[变革/危机]时期，我们的力量源于我们的[核心价值观]。",
        usage: "在困难时期通过价值观凝聚团队",
        example: "In times of rapid restructuring, our strength lies in our radical transparency and mutual trust."
      },
      {
        pattern: "What does success look like for us five years from now?",
        meaning: "五年后，我们的成功看起来会是什么样子的？",
        usage: "引导团队进行前瞻性思考",
        example: "What does success look like for our team five years from now? Let's paint that picture together."
      },
      {
        pattern: "Every action we take today should move us one step closer to our North Star.",
        meaning: "我们今天采取的每一项行动都应该让我们离北极星目标更近一步。",
        usage: "强调日常工作与长期愿景的关联",
        example: "Every small feature we launch today should move us one step closer to being the world's most accessible tool."
      },
      {
        pattern: "I welcome your feedback and buy-in as we refine this roadmap together.",
        meaning: "在我们共同完善这份路线图的过程中，我欢迎大家的反馈和认可。",
        usage: "体现民主决策，获得团队成员的真心支持",
        example: "I welcome your input and buy-in as we refine this expansion roadmap together."
      },
      {
        pattern: "Together, I am confident that we can redefine the standards of our industry.",
        meaning: "我有信心，我们共同努力可以重新定义行业的标准。",
        usage: "强有力的动员演讲结语",
        example: "Together, I am confident that we can redefine the standards of customer service in the e-commerce space."
      }
    ],
    formalDialogue: {
      title: '正式场景：向团队宣布年度战略愿景',
      context: 'Alex 作为部门总监，在财年伊始的 Town Hall 会议上向 50 名成员发表动员讲话。',
      conversation: [
        {
          speaker: 'Alex',
          text: "Team, as we kick off the new fiscal year, I want us to look beyond our daily tickets and focus on the big picture. Our North Star for this year is to become the industry benchmark for data security."
        },
        {
          speaker: 'Team Member A',
          text: "That sounds ambitious, Alex. How do we get there while managing our current workload?"
        },
        {
          speaker: 'Alex',
          text: "It is ambitious, and it should be. To achieve this, we are aligning our resources around three strategic pillars: automation, rigorous auditing, and thought leadership. This isn't just about avoiding breaches; it's about building an unshakeable trust with our users."
        },
        {
          speaker: 'Team Member B',
          text: "Will there be opportunities for us to lead specific initiatives within this roadmap?"
        },
        {
          speaker: 'Alex',
          text: "Absolutely. I am fully committed to empowering each of you to own parts of this vision. Every line of code you write this year should move us closer to that goal. I'm confident that together, we will redefine what 'secure' means in our field."
        },
        {
          speaker: 'Alex',
          text: "I'll be sharing a detailed roadmap by EOD, and I welcome your buy-in and feedback during our upcoming syncs. Let's make this a pioneering year."
        }
      ],
      learnableExpressions: [
        {
          expression: "Look beyond daily tickets",
          explanation: "超越日常琐事（跳出舒适区/细节）"
        },
        {
          expression: "Industry benchmark",
          explanation: "行业基准/标杆。"
        },
        {
          expression: "Unshakeable trust",
          explanation: "不可撼动的信任。"
        },
        {
          expression: "Own parts of this vision",
          explanation: "主导愿景的一部分（鼓励主人翁意识）"
        },
        {
          expression: "Move the needle",
          explanation: "产生显著改变（原意为移动表盘指针）"
        },
        {
          expression: "Pioneering year",
          explanation: "开创性的一年。"
        }
      ],
      analysis: '在这场领导力演讲中，Alex 成功完成了从“执行者”到“愿景家”的转变。他首先确立了一个高远的目标（North Star），并赋予了工作崇高的意义（unshakeable trust）。面对员工关于压力的疑问，他用“战略支柱”（strategic pillars）和“赋能”（empowering）给出了解决方案和成长空间。这种沟通能显著提升团队的士气和凝聚力。'
    },
    smallTalkDialogue: {
      title: '非正式场景：在变革期间稳定核心员工',
      context: '公司宣布裁员和架构重组后，Alex 与团队中的核心骨干 Mark 在咖啡间进行私下交谈。',
      conversation: [
        {
          speaker: 'Alex',
          text: "Mark, I know the news yesterday was a lot to take in. I wanted to check in and see how you're feeling about the restructuring."
        },
        {
          speaker: 'Mark',
          text: "To be honest, Alex, the morale is pretty low. People are worried about their roles and the future of the project."
        },
        {
          speaker: 'Alex',
          text: "I hear you, and I appreciate your honesty. Transparency is my priority right now. While the changes are difficult, they are necessary to align us with the long-term growth of the company."
        },
        {
          speaker: 'Mark',
          text: "Do you really think our project is still a priority for the leadership?"
        },
        {
          speaker: 'Alex',
          text: "More than ever. You are a key culture carrier for this team, Mark. I've personally seen to it that our core roadmap remains intact. We need your resilience to help the rest of the team through this transition."
        },
        {
          speaker: 'Mark',
          text: "Thanks, Alex. Knowing you're still fighting for us makes a big difference. I'll do my best to keep the energy up. Is there anything specific you want me to focus on this week?"
        },
        {
          speaker: 'Alex',
          text: "Just keep the lines of communication open. If people have concerns, I'd rather hear them early. And let's make sure we celebrate the small wins in our next sprint demo. We need to maintain that momentum."
        },
        {
          speaker: 'Mark',
          text: "Will do. Celebrating the wins will definitely help morale. I'll make a note of that. Thanks for the chat, Alex. It helps a lot."
        },
        {
          speaker: 'Alex',
          text: "Anytime, Mark. My door is always open. Let's keep moving forward together."
        }
      ],
      learnableExpressions: [
        {
          expression: "A lot to take in",
          explanation: "（信息量/冲击）太大，难以消化。"
        },
        {
          expression: "Check in",
          explanation: "（非正式地）询问近况/关心。"
        },
        {
          expression: "I hear you",
          explanation: "我理解你/我听到了你的顾虑（极具同理心的领导者用语）"
        },
        {
          expression: "Intact",
          explanation: "完好无损的。"
        },
        {
          expression: "Through this transition",
          explanation: "度过这段过渡期。"
        },
        {
          expression: "Make a big difference",
          explanation: "产生很大影响/起很大作用。"
        }
      ],
      analysis: '在危机时刻，领导者的私下沟通（One-on-one）比全体会议更有效。Alex 运用了“主动关心+透明化沟通+肯定价值”的策略。他承认了变化的困难（difficult but necessary），重申了项目的优先级，并给 Mark 戴上了 "culture carrier" 的高帽，成功激发起骨干成员的责任感和韧性。'
    },
    commonMistakes: [
      {
        wrong: "Just do what I say, the boss ordered it.",
        better: "This directive comes from the board, but I want to explain how it aligns with our core mission.",
        explanation: "不要单纯做信息的传声筒。要解释上级指令如何与团队愿景“对齐”（aligns with mission），赋予指令合理性。"
      },
      {
        wrong: "The future is good, don't worry.",
        better: "We are facing some headwinds, but our long-term roadmap remains robust and achievable.",
        explanation: "不要空谈好听的话。承认面临的“逆风/困难”（headwinds），并强调计划的“稳健性”（robust）和“可达成性”。"
      },
      {
        wrong: "I don't care about your feelings, just results.",
        better: "I value your input and want to ensure you feel empowered to achieve these results.",
        explanation: "现代领导力强调“赋能”（empowered）而非单纯的“指令”。关注员工的参与感和自主权。"
      },
      {
        wrong: "I am the only one who knows the plan.",
        better: "I'd like to share our strategic roadmap and get your buy-in on the execution phase.",
        explanation: "不要垄断信息。分享路线图并寻求“认可/共识”（buy-in），能显著减少执行阶段的阻力。"
      },
      {
        wrong: "We will change everything tomorrow.",
        better: "We are initiating a strategic pivot to better position ourselves for future disruption.",
        explanation: "频繁的变动会让人疲惫。将变化定义为“战略转型/调整”（strategic pivot）并解释是为了应对未来的“颠覆”（disruption）。"
      }
    ],
    expressionUpgrades: [
      {
        basic: "I want to lead the team well.",
        better: "I want to inspire my team to achieve greatness.",
        professional: "My goal is to cultivate a high-performance culture where every individual feels a profound sense of purpose and alignment with our vision.",
        explanation: "使用 cultivate culture（培养文化）、profound sense of purpose（深刻的使命感）是顶级领导者的语言风格。"
      },
      {
        basic: "The plan is to sell more.",
        better: "Our strategy is to increase market share significantly.",
        professional: "We are embarking on an aggressive growth trajectory, aiming to secure market dominance through disruptive innovation.",
        explanation: "使用 growth trajectory（增长轨迹）、market dominance（市场主导地位）和 disruptive innovation（颠覆性创新）极具感染力。"
      },
      {
        basic: "We will help our users.",
        better: "We will focus on user satisfaction.",
        professional: "Our North Star is to deliver unparalleled value to our global user base, redefining the customer experience standard.",
        explanation: "使用 North Star（北极星目标）、unparalleled value（无与伦比的价值）体现了追求卓越的领导者姿态。"
      },
      {
        basic: "Tell me your ideas.",
        better: "I'd like to hear your thoughts on this.",
        professional: "I welcome your diverse perspectives as we co-create a future-proof roadmap that balances short-term wins with long-term impact.",
        explanation: "使用 co-create（共同创造）、future-proof（面向未来的）和 balance wins with impact 展现了开放且平衡的领导风格。"
      },
      {
        basic: "Don't be afraid of the change.",
        better: "We should embrace the changes coming.",
        professional: "In an era of rapid disruption, our ability to remain agile and embrace strategic transformation will be our greatest competitive advantage.",
        explanation: "使用 agile（敏捷）、strategic transformation（战略转型）和 competitive advantage（竞争优势）将变动转化为一种优势。"
      }
    ],
    practiceTasks: [
      {
        title: '任务 1：起草愿景陈述',
        instruction: '为你的团队（或模拟一个团队）写一段 2-3 句话的愿景陈述。要求包含：核心行动、目标地位、以及最终为客户带来的价值。',
        example: 'Our vision is to revolutionize professional learning through AI-driven personalization, becoming the world\'s most trusted career coach and empowering millions to unlock their full potential.'
      },
      {
        title: '任务 2：回应团队疑虑',
        instruction: '团队成员问：“为什么我们要突然改变用了三年的软件系统？”请写一段话，用“应对未来趋势 + 长期提效 + 个人技能提升”的角度来回答。',
        example: 'I understand it\'s a major shift, but this new platform is essential to remain agile in a cloud-first industry. In the long run, it will automate 30% of our manual tasks and add a highly valued skill to your professional portfolios.'
      },
      {
        title: '任务 3：录制动员演讲结语',
        instruction: '录制一段 30 秒的语音，作为项目启动会的结尾。要求：展现自信、肯定团队能力、重申大图景（Big Picture）、发出行动号召。',
        example: 'As we close out today\'s kickoff, I want to leave you all with this: what we\'re building here isn\'t just a product — it\'s a solution that will genuinely improve how our users work every single day. I\'ve worked alongside many talented teams over the years, and I am absolutely confident that this team has everything it takes to make it happen. The road ahead will have its challenges, but every great achievement starts with exactly this kind of moment — a shared commitment to a big goal. So let\'s go build something remarkable together. Thank you!'
      }
    ],
    saveablePhrases: [
      {
        phrase: "Our North Star for this year is to become the industry benchmark for [Metric].",
        category: "汇报",
        meaning: "我们今年的北极星目标是成为[指标]方面的行业基准。"
      },
      {
        phrase: "I want to challenge us to rethink the big picture and the impact we're creating.",
        category: "Small Talk",
        meaning: "我想挑战大家，让我们重新思考大局以及我们所产生的影响。"
      },
      {
        phrase: "Transparency is my priority as we navigate this transition period together.",
        category: "汇报",
        meaning: "在我们共同度过这个过渡期时，透明度是我的首要任务。"
      },
      {
        phrase: "We need to align our individual goals with the overarching vision of the company.",
        category: "汇报",
        meaning: "我们需要将个人目标与公司的全局愿景相对齐。"
      },
      {
        phrase: "I'm fully committed to empowering each of you to lead key parts of this roadmap.",
        category: "Small Talk",
        meaning: "我全力支持并赋予你们每个人领导这份路线图中关键部分的能力。"
      },
      {
        phrase: "Every small action we take today should move us one step closer to our long-term goals.",
        category: "汇报",
        meaning: "我们今天采取的每一项微小行动都应该让我们离长期目标更近一步。"
      },
      {
        phrase: "In an era of rapid disruption, our resilience is our greatest competitive advantage.",
        category: "汇报",
        meaning: "在一个快速变革的时代，我们的韧性是我们最大的竞争优势。"
      },
      {
        phrase: "I welcome your feedback and buy-in as we co-create a future-proof strategy.",
        category: "Small Talk",
        meaning: "在我们共同创造这份面向未来的战略时，我欢迎大家的反馈和支持。"
      }
    ],
    resources: [
      {
        name: 'HBS Online — 8 Essential Leadership Communication Skills',
        type: 'leadership article',
        description: '战略汇报、利益相关方更新、管理沟通',
        why: '适合学习管理者如何建立 trust、align efforts、adapt communication style、listen actively 和 communicate with clarity。',
        url: 'https://online.hbs.edu/blog/post/leadership-communication'
      },
      {
        name: 'HBS Online — How to Give Feedback Effectively',
        type: 'leadership article',
        description: '反馈与建设性批评、绩效沟通、1:1 沟通',
        why: '适合学习 constructive feedback、empathy、specific examples 和 improvement-focused language。',
        url: 'https://online.hbs.edu/blog/post/how-to-give-feedback-effectively'
      },
      {
        name: 'HBS Online — How to Delegate Effectively',
        type: 'leadership article',
        description: '授权与任务分配、期望管理、团队协作',
        why: '适合学习如何说明 desired outcome、expectation、timeline、resources、authority 和 check-in structure。',
        url: 'https://online.hbs.edu/blog/post/how-to-delegate-effectively'
      },
      {
        name: 'HBS Online — Navigate Difficult Conversations with Employees',
        type: 'leadership article',
        description: '棘手对话、绩效沟通、冲突处理',
        why: '适合学习 trust-building、active listening、difficult conversation structure，以及如何在管理沟通中保持清楚和尊重。',
        url: 'https://online.hbs.edu/blog/post/how-to-have-difficult-conversations-with-employees'
      },
      {
        name: 'Harvard Business Publishing — How to Communicate for Impact',
        type: 'leadership article / video',
        description: '利益相关方更新、战略与决策汇报、高层沟通',
        why: '适合学习 senior update、executive summary、decision briefing 和 high-impact communication。',
        url: 'https://www.harvardbusiness.org/insight/how-to-communicate-for-impact/'
      },
      {
        name: 'MindTools — What Is Stakeholder Management?',
        type: 'management article',
        description: '利益相关方更新、期望管理、战略与决策汇报',
        why: '解释 stakeholder management 的核心：识别关键相关方，并用合适的方式沟通、维持关系和获得支持。很适合 alignment、expectation management 和 stakeholder communication 内容。',
        url: 'https://www.mindtools.com/at2o1co/what-is-stakeholder-management/'
      }
    ]
  },
  // Unit 20: 授权与团队赋能 / Delegating
  'm2': {
    id: 'm2',
    title: '授权与团队赋能',
    englishTitle: 'Delegating',
    level: 'C1',
    objectives: [
      '学会识别哪些任务适合授权（Delegation），哪些必须亲力亲为',
      '掌握清晰的任务描述（Briefing）技巧，确保下属完全理解预期结果',
      '学习如何根据员工的能力等级（Skill Level）匹配合适的任务难度',
      '掌握在授权过程中通过设定检查点（Checkpoints）来平衡控制与自主',
      '学会如何处理授权后的失败，将其转化为辅导（Coaching）的机会'
    ],
    scenarios: [
      '由于日程过满，需要将周报的整理工作授权给团队助理',
      '指派一名核心成员负责新客户的初步对接与需求调研',
      '在项目繁忙期，将部分技术审核任务分配给高级开发人员',
      '由于需要出差，授权一名副手在部门周会上代表你进行汇报',
      '发现分配的任务进度严重滞后，与负责员工进行纠偏谈话',
      '给一名渴望成长的初级员工指派一个具有挑战性（Stretch）的小型项目',
      '在多个下属之间公平地分配突发的紧急任务'
    ],
    vocabulary: [
      {
        expression: 'delegate / delegation',
        meaning: '授权 / 委派',
        context: '将任务和权力下放给他人',
        example: 'Effective delegation is the key to scaling your leadership impact.'
      },
      {
        expression: 'empower',
        meaning: '赋能 / 给与自主权',
        context: '不仅仅是给任务，还要给决策权',
        example: 'Empower your team to handle minor issues without asking for approval every time.'
      },
      {
        expression: 'briefing',
        meaning: '任务简报 / 讲解',
        context: '详细解释任务背景和要求的过程',
        example: 'Let\'s have a quick briefing session to align on the project goals.'
      },
      {
        expression: 'outcome-oriented',
        meaning: '结果导向的',
        context: '关注最终产出，而非具体过程',
        example: 'Focus on being outcome-oriented when you delegate creative tasks.'
      },
      {
        expression: 'accountability',
        meaning: '问责制 / 责任归属',
        context: '明确谁该为最终结果负责',
        example: 'While you delegate the task, you still hold final accountability as a manager.'
      },
      {
        expression: 'autonomy',
        meaning: '自主权 / 独立性',
        context: '员工自行决定如何完成任务的自由',
        example: 'High performers usually value autonomy more than financial rewards.'
      },
      {
        expression: 'set checkpoints',
        meaning: '设置检查点 / 里程碑节点',
        context: '定期检查项目进展以确保按计划推进',
        example: 'Set weekly checkpoints to ensure the project stays on track.'
      },
      {
        expression: 'micromanagement',
        meaning: '微观管理 / 事无巨细',
        context: '过度干预工作细节，导致员工动力下降',
        example: 'Avoid micromanagement if you want your team to take initiative.'
      },
      {
        expression: 'stretch goal / task',
        meaning: '挑战性目标 / 任务',
        context: '略高于员工当前能力、能促进成长的任务',
        example: 'I\'ll give you this project as a stretch task to help you prepare for a senior role.'
      },
      {
        expression: 'bottleneck',
        meaning: '瓶颈',
        context: '如果不授权，管理者自己会成为工作的阻碍',
        example: 'Don\'t let yourself become a bottleneck for the whole team\'s progress.'
      },
      {
        expression: 'deliverable',
        meaning: '交付物',
        context: '任务完成后需要交出的具体成果',
        example: 'What are the main deliverables for this assigned task?'
      },
      {
        expression: 'skill gap',
        meaning: '能力差距',
        context: '任务要求与员工现状之间的差距',
        example: 'We identified a small skill gap in data analysis that we can address through coaching.'
      },
      {
        expression: 'bandwidth',
        meaning: '精力 / 处理负荷',
        context: '员工是否有空闲时间接新任务',
        example: 'Before delegating, check if the employee has enough bandwidth.'
      },
      {
        expression: 'oversight',
        meaning: '监督 / 统筹',
        context: '对授权任务的整体观察而非干预',
        example: 'The manager provides high-level oversight while the team executes the plan.'
      },
      {
        expression: 'resource allocation',
        meaning: '资源分配',
        context: '将任务分配给最合适的人',
        example: 'Effective delegation is essentially a strategic resource allocation.'
      },
      {
        expression: 'scope creep',
        meaning: '范围蔓延',
        context: '授权的任务要求不断增加，超出初始约定',
        example: 'Be clear about the scope to avoid scope creep during execution.'
      },
      {
        expression: 'handover',
        meaning: '交接',
        context: '将任务信息和权限转移的过程',
        example: 'The handover process should include all necessary logins and documentation.'
      },
      {
        expression: 'corrective action',
        meaning: '纠偏行动',
        context: '发现进度偏离预期时采取的补救措施',
        example: 'If the checkpoint shows a delay, we need to take immediate corrective action.'
      },
      {
        expression: 'professional growth',
        meaning: '职业成长',
        context: '授权的重要目的之一是培养人才',
        example: 'Delegation is not just about offloading work; it\'s about fostering professional growth.'
      },
      {
        expression: 'trusted advisor',
        meaning: '信任的顾问',
        context: '授权后，管理者应扮演的角色',
        example: 'Instead of a boss, try to be a trusted advisor for the tasks you delegate.'
      }
    ],
    sentencePatterns: [
      {
        pattern: "I'd like to assign [Task] to you because I've seen your great work on [Previous Task].",
        meaning: "我想把[任务]分配给你，因为我看到了你在[之前任务]中的出色表现。",
        usage: "通过肯定对方能力来开启授权",
        example: "I'd like to assign the client outreach to you because I've seen your great work on the communication strategy."
      },
      {
        pattern: "The desired outcome for this task is [Clear Result]. How you get there is up to you.",
        meaning: "这项任务的预期结果是[明确结果]。如何达成由你决定。",
        usage: "强调结果导向，给予过程自主权",
        example: "The desired outcome for this task is a 10% increase in conversion. How you get there is up to you."
      },
      {
        pattern: "I want to challenge you with this [Project] as it will help you develop [Skill].",
        meaning: "我想用这个[项目]来挑战你，因为它能帮你提升[技能]。",
        usage: "将授权解释为一种成长机会",
        example: "I want to challenge you with this presentation as it will help you develop your public speaking skills."
      },
      {
        pattern: "Let's set a weekly checkpoint every [Day] to review progress and handle any blockers.",
        meaning: "让我们在每周[周几]设定一个检查点，以审视进度并处理任何障碍。",
        usage: "建立监督机制，平衡风险",
        example: "Let's set a weekly checkpoint every Tuesday to review progress and handle any blockers."
      },
      {
        pattern: "I'll be available for high-level guidance, but I want you to take full ownership of this.",
        meaning: "我会提供高层指导，但我希望你对这件事全权负责。",
        usage: "明确授权边界与责任归属",
        example: "I'll be available for high-level guidance, but I want you to take full ownership of the budget proposal."
      },
      {
        pattern: "Do you feel you have the necessary resources and bandwidth to take this on?",
        meaning: "你觉得你有必要的资源和精力来承接这项任务吗？",
        usage: "尊重员工的负荷，确认可行性",
        example: "Do you feel you have the necessary resources and bandwidth to take on the server migration this month?"
      },
      {
        pattern: "What kind of support or training would you need from my side to succeed?",
        meaning: "为了获得成功，你需要我这边提供什么样的支持或培训？",
        usage: "主动提供资源，消除员工顾虑",
        example: "What kind of support or training would you need from my side to succeed with the new CRM system?"
      },
      {
        pattern: "To make sure we're on the same page, could you summarize your understanding of the brief?",
        meaning: "为了确保我们理解一致，你能总结一下你对任务简报的理解吗？",
        usage: "确认沟通效果，防止偏差",
        example: "To make sure we're on the same page, could you summarize your understanding of the client's key requirements?"
      },
      {
        pattern: "If you encounter any major issues, please escalate them to me immediately.",
        meaning: "如果你遇到任何重大问题，请立即向我反馈/升级。",
        usage: "设定异常处理机制",
        example: "If you encounter any major security issues, please escalate them to me immediately."
      },
      {
        pattern: "I'm confident in your ability to handle this, and I look forward to seeing your results.",
        meaning: "我对你处理这件事的能力充满信心，并期待看到你的成果。",
        usage: "通过信任给予员工正向激励",
        example: "I'm confident in your ability to handle the internal audit, and I look forward to seeing your results."
      }
    ],
    formalDialogue: {
      title: '正式场景：将关键项目授权给核心成员',
      context: 'Alex 决定将一个重要的新产品调研任务授权给表现优异的团队成员 Mark。',
      conversation: [
        {
          speaker: 'Alex',
          text: "Mark, do you have a few minutes? I'd like to talk to you about the upcoming Project Nexus."
        },
        {
          speaker: 'Mark',
          text: "Sure, Alex. I've heard some buzz about it. Is there something I can help with?"
        },
        {
          speaker: 'Alex',
          text: "Actually, I'd like to assign the lead role for the initial market discovery phase to you. I've seen how well you handled the competitor analysis last month, and I think you're ready for more ownership."
        },
        {
          speaker: 'Mark',
          text: "Wow, thanks! I appreciate the trust. What are the specific expectations?"
        },
        {
          speaker: 'Alex',
          text: "The desired outcome is a comprehensive report on user pain points. I want you to define the methodology yourself. I'll provide high-level oversight, but the execution is entirely yours."
        },
        {
          speaker: 'Mark',
          text: "I'm excited, but I'm also currently handling the Q3 maintenance. Will I have enough bandwidth?"
        },
        {
          speaker: 'Alex',
          text: "That's a fair point. Let's delegate the routine maintenance tasks to Sarah for now so you can focus 80% of your time on Project Nexus. Does that sound reasonable?"
        },
        {
          speaker: 'Mark',
          text: "Definitely. That helps a lot. Let's set a weekly checkpoint to keep you in the loop."
        },
        {
          speaker: 'Alex',
          text: "Perfect. Let's meet every Friday morning. I'm confident you'll do a great job."
        }
      ],
      learnableExpressions: [
        {
          expression: "Initial market discovery phase",
          explanation: "初始市场调研阶段。"
        },
        {
          expression: "Ready for more ownership",
          explanation: "准备好承担更多责任/主导权。"
        },
        {
          expression: "Define the methodology",
          explanation: "自行定义方法论（给予高度自主权的标志）"
        },
        {
          expression: "High-level oversight",
          explanation: "高层统筹/宏观监督。"
        },
        {
          expression: "Keep you in the loop",
          explanation: "让你保持知情（汇报进度的地道说法）"
        }
      ],
      analysis: 'Alex 的授权过程非常规范且具激励性：1. 肯定过去表现（competitor analysis）；2. 明确结果（comprehensive report）但给予过程自由（define methodology）；3. 主动解决资源冲突（将琐事转给 Sarah），确保员工有“带宽”；4. 设定定期检查点（weekly checkpoint）以控风险。这种授权方式既培养了 Mark，也释放了 Alex 的精力。'
    },
    smallTalkDialogue: {
      title: '非正式场景：任务进度落后时的纠偏谈话',
      context: 'Alex 发现授权给初级员工 Leo 的调研报告进度严重滞后，在走廊遇到他时进行了一次轻微的提醒。',
      conversation: [
        {
          speaker: 'Alex',
          text: "Hey Leo! How's it going with the market report? I noticed we haven't seen an update in the shared folder lately."
        },
        {
          speaker: 'Leo',
          text: "Oh, hi Alex. To be honest, I've run into some bottlenecks with the data collection. It's taking much longer than I expected."
        },
        {
          speaker: 'Alex',
          text: "I understand. Data can be tricky. Is there any specific support you need from my side? Maybe I can get you access to the premium research tools."
        },
        {
          speaker: 'Leo',
          text: "That would be a lifesaver! I was struggling with the manual scraping."
        },
        {
          speaker: 'Alex',
          text: "No problem. Let's get that set up. Why don't you summarize where we are by tomorrow morning? We can adjust the final deadline if needed, but I want to make sure we're moving forward."
        },
        {
          speaker: 'Leo',
          text: "Thanks, Alex. I'll have that summary for you. I appreciate you checking in."
        }
      ],
      learnableExpressions: [
        {
          expression: "Run into some bottlenecks",
          explanation: "遇到了一些瓶颈。"
        },
        {
          expression: "Data can be tricky",
          explanation: "数据这东西可能挺棘手的（表示理解难处）"
        },
        {
          expression: "Lifesaver",
          explanation: "救命稻草 / 大救星。"
        },
        {
          expression: "Manual scraping",
          explanation: "手动抓取（数据）"
        },
        {
          expression: "Adjust the final deadline",
          explanation: "调整最终截止日期。"
        }
      ],
      analysis: '当发现进度落后时，Alex 没有直接指责，而是用“关心+解决障碍”的方式切入。他先用 "noticed" 描述客观事实，然后主动询问 "support you need"，并提供了具体工具。通过要求“明早总结”，他既给予了 Leo 压力，又通过“调整截止日期”的可能性给予了支持。这种“恩威并施”能有效推动任务重回正轨。'
    },
    commonMistakes: [
      {
        wrong: "Do this exactly like this. Don't change anything.",
        better: "The goal is [Outcome]. I'm interested to see how you decide to approach it.",
        explanation: "不要进行微观管理（Micromanagement）。授权的真谛是授权“结果”而非“过程”，给予员工自主发挥的空间。"
      },
      {
        wrong: "I'm too busy, you do it all.",
        better: "I'd like to delegate this task to you. I'll still be available for support and final review.",
        explanation: "授权不是“甩锅”。管理者仍需提供支持（available for support）并承担最终责任。"
      },
      {
        wrong: "Why isn't it finished? You are lazy.",
        better: "I noticed a delay. Are there any unforeseen blockers we should discuss?",
        explanation: "不要攻击员工人品。询问是否有“不可预见的障碍”（unforeseen blockers），寻求解决之道。"
      },
      {
        wrong: "I'll do it myself, it's faster.",
        better: "It might take more time to explain now, but this is a great growth opportunity for you.",
        explanation: "不要因为短期效率而牺牲长期培养。授权不仅是为了省力，更是为了人才的“职业成长”（growth opportunity）。"
      },
      {
        wrong: "Just finish it whenever.",
        better: "Let's agree on a clear deadline and a few key milestones along the way.",
        explanation: "不要给模糊的时间。明确的“截止日期”（deadline）和“里程碑”（milestones）是任务达成的保障。"
      }
    ],
    expressionUpgrades: [
      {
        basic: "I want you to do this job.",
        better: "I'd like to delegate this responsibility to you.",
        professional: "I'm assigning you the lead on this initiative as I believe it aligns perfectly with your career development goals.",
        explanation: "使用 lead on this initiative（主导这项倡议）和 career development goals（职业发展目标）让任务看起来更像是一项荣誉。"
      },
      {
        basic: "Tell me what you are doing.",
        better: "Please keep me updated on the progress.",
        professional: "Let's establish a regular reporting cadence to ensure transparency and address any potential risks early on.",
        explanation: "使用 reporting cadence（汇报节奏）和 transparency（透明度）让监督听起来像是一种科学的流程管理。"
      },
      {
        basic: "You can decide yourself.",
        better: "You have the autonomy to make decisions.",
        professional: "I'm empowering you with full decision-making authority for this project scope to streamline our execution.",
        explanation: "使用 decision-making authority（决策权）和 streamline execution（精简执行流程）体现了对员工的高度信任。"
      },
      {
        basic: "Don't mess up.",
        better: "I want to ensure this is successful.",
        professional: "Let's define clear quality benchmarks to ensure our deliverables meet the highest professional standards.",
        explanation: "将“别搞砸”升级为“定义质量基准”（quality benchmarks），从负面警告转向正面追求卓越。"
      },
      {
        basic: "I'll check your work.",
        better: "I will provide feedback on the draft.",
        professional: "I'll offer high-level strategic oversight and act as a sounding board for any challenges you might encounter.",
        explanation: "使用 strategic oversight（战略统筹）和 sounding board（交流意见的对象）将管理者定位为支持者和顾问。"
      }
    ],
    practiceTasks: [
      {
        title: '任务 1：撰写授权 Briefing',
        instruction: '你需要把“下周团队团建的策划”交给一名组员。请写一段 50-80 字的要求，包含：预算、参与人数、你最看重的一点（如：大家都要参与）、以及截止日期。',
        example: 'Hi [Name], I\'d like you to lead the planning for next Friday\'s team building. Our budget is $500 for 12 people. My main priority is high team engagement. Could you share a draft plan by Wednesday EOD?'
      },
      {
        title: '任务 2：应对下属的压力反馈',
        instruction: '你分了一个任务，下属说：“我手头已经有三个项目了，可能做不完。”请写一段话，旨在通过“重新排优先级 + 资源协调”来解决问题。',
        example: 'I hear your concerns about bandwidth. Let\'s review your current task list together. If we postpone the Q3 audit prep, would that free up enough time for this urgent client request?'
      },
      {
        title: '任务 3：录制检查点谈话',
        instruction: '录制一段语音。场景：周五检查点会议。要求：询问目前进展、赞美已完成的部分、询问下周计划、询问是否需要任何资源。',
        example: 'Hey, great to connect for our Friday check-in! How\'s the overall progress looking from your end this week? I had a chance to review the updated documents and I have to say, the team has done outstanding work on the data model — that\'s a significant piece to have locked down. Looking ahead, what are your main priorities going into next week? And is there anything I can do to remove blockers or get you additional resources? My goal is to make sure you have everything you need to move forward with full confidence.'
      }
    ],
    saveablePhrases: [
      {
        phrase: "I'd like to assign the lead role on this project to you because of your recent performance.",
        category: "汇报",
        meaning: "鉴于你最近的表现，我想让你担任这个项目的主导角色。"
      },
      {
        phrase: "The desired outcome is [Result], but I want you to have full autonomy over the process.",
        category: "Small Talk",
        meaning: "预期的结果是[结果]，但我希望你在过程中拥有充分的自主权。"
      },
      {
        phrase: "Let's set a bi-weekly checkpoint to review progress and handle any potential blockers.",
        category: "汇报",
        meaning: "让我们每两周设定一个检查点，以审视进度并处理任何潜在的障碍。"
      },
      {
        phrase: "I'll be available for high-level guidance, but I want you to take full ownership of the results.",
        category: "Small Talk",
        meaning: "我会提供高层指导，但我希望你对结果全权负责。"
      },
      {
        phrase: "Do you feel you have the necessary bandwidth and tools to succeed in this role?",
        category: "Small Talk",
        meaning: "你觉得你有必要的精力负荷和工具来胜任这个角色吗？"
      },
      {
        phrase: "To ensure we're fully aligned, could you summarize your understanding of the deliverables?",
        category: "汇报",
        meaning: "为了确保我们完全对齐，你能总结一下你对交付物的理解吗？"
      },
      {
        phrase: "I'm confident in your expertise and I look forward to seeing your unique approach to this.",
        category: "Small Talk",
        meaning: "我对你的专业知识充满信心，并期待看到你处理这件事的独特方法。"
      },
      {
        phrase: "If you encounter any unforeseen issues, please escalate them to me as soon as possible.",
        category: "汇报",
        meaning: "如果你遇到任何不可预见的问题，请尽快向我反馈。"
      }
    ],
    resources: [
      {
        name: 'HBS Online — 8 Essential Leadership Communication Skills',
        type: 'leadership article',
        description: '战略汇报、利益相关方更新、管理沟通',
        why: '适合学习管理者如何建立 trust、align efforts、adapt communication style、listen actively 和 communicate with clarity。',
        url: 'https://online.hbs.edu/blog/post/leadership-communication'
      },
      {
        name: 'HBS Online — How to Give Feedback Effectively',
        type: 'leadership article',
        description: '反馈与建设性批评、绩效沟通、1:1 沟通',
        why: '适合学习 constructive feedback、empathy、specific examples 和 improvement-focused language。',
        url: 'https://online.hbs.edu/blog/post/how-to-give-feedback-effectively'
      },
      {
        name: 'HBS Online — How to Delegate Effectively',
        type: 'leadership article',
        description: '授权与任务分配、期望管理、团队协作',
        why: '适合学习如何说明 desired outcome、expectation、timeline、resources、authority 和 check-in structure。',
        url: 'https://online.hbs.edu/blog/post/how-to-delegate-effectively'
      },
      {
        name: 'HBS Online — Navigate Difficult Conversations with Employees',
        type: 'leadership article',
        description: '棘手对话、绩效沟通、冲突处理',
        why: '适合学习 trust-building、active listening、difficult conversation structure，以及如何在管理沟通中保持清楚和尊重。',
        url: 'https://online.hbs.edu/blog/post/how-to-have-difficult-conversations-with-employees'
      },
      {
        name: 'Harvard Business Publishing — How to Communicate for Impact',
        type: 'leadership article / video',
        description: '利益相关方更新、战略与决策汇报、高层沟通',
        why: '适合学习 senior update、executive summary、decision briefing 和 high-impact communication。',
        url: 'https://www.harvardbusiness.org/insight/how-to-communicate-for-impact/'
      },
      {
        name: 'MindTools — What Is Stakeholder Management?',
        type: 'management article',
        description: '利益相关方更新、期望管理、战略与决策汇报',
        why: '解释 stakeholder management 的核心：识别关键相关方，并用合适的方式沟通、维持关系和获得支持。很适合 alignment、expectation management 和 stakeholder communication 内容。',
        url: 'https://www.mindtools.com/at2o1co/what-is-stakeholder-management/'
      }
    ]
  },
  // Unit 21: 利益相关者管理 / Stakeholder Management
  'm3': {
    id: 'm3',
    title: '利益相关者管理',
    englishTitle: 'Stakeholder Management',
    level: 'C1',
    objectives: [
      '学会如何在项目初期设定明确、可衡量的成功标准',
      '掌握向上管理（Managing Up）技巧，学会如何与上级沟通资源缺口',
      '学习如何礼貌地管理客户或平级部门的“不切实际”需求',
      '掌握动态管理（Dynamic Management）技巧，在计划变更时及时对齐期望',
      '学会使用“Yes, and...”或“Yes, if...”策略来应对突发的额外任务'
    ],
    scenarios: [
      '在项目启动会上与利益相关方明确最终交付物的范围（Scope）',
      '由于技术瓶颈，需要向上级解释为什么之前的进度承诺无法达成',
      '面对客户在合同外提出的额外功能需求，进行专业的回绝或谈判',
      '与平级部门协调资源时，明确告知对方你目前能提供的支持上限',
      '在任务截止日期前，主动向经理同步可能的风险及备选方案',
      '面对上级临时增加的急件，沟通其对现有高优先级项目的影响',
      '向团队成员明确季度考核的具体指标与奖励标准'
    ],
    vocabulary: [
      {
        expression: 'manage expectations',
        meaning: '管理期望',
        context: '主动引导各方对结果、时间、质量的心理预期',
        example: 'It\'s better to under-promise and over-deliver to manage expectations effectively.'
      },
      {
        expression: 'scope creep',
        meaning: '范围蔓延',
        context: '项目需求在执行过程中不断增加，超出初始约定',
        example: 'We need to guard against scope creep to ensure we hit our October deadline.'
      },
      {
        expression: 'alignment / align',
        meaning: '对齐',
        context: '确保各方对目标的理解是一致的',
        example: 'Let\'s have a quick sync to align on the project priorities.'
      },
      {
        expression: 'deliverable',
        meaning: '交付物',
        context: '承诺给对方的具体成果',
        example: 'The primary deliverable for this phase is the user research report.'
      },
      {
        expression: 'trade-off',
        meaning: '权衡 / 取舍',
        context: '为了获得 A 必须牺牲 B（如：时间换质量）',
        example: 'There is always a trade-off between speed and perfect code quality.'
      },
      {
        expression: 'realistic / unrealistic',
        meaning: '现实的 / 不切实际的',
        context: '评估计划或目标的可行性',
        example: 'Given our current resources, a two-day turnaround is unrealistic.'
      },
      {
        expression: 'under-promise',
        meaning: '保守承诺',
        context: '为了留有余地而给出的较低预期',
        example: 'I prefer to under-promise on the launch date just in case of server issues.'
      },
      {
        expression: 'over-deliver',
        meaning: '超预期交付',
        context: '最终产出好于最初的承诺',
        example: 'They under-promised the savings but over-delivered on the actual ROI.'
      },
      {
        expression: 'bottleneck',
        meaning: '瓶颈',
        context: '阻碍进展的关键因素',
        example: 'The legal review is currently our main bottleneck for the contract.'
      },
      {
        expression: 'stakeholder',
        meaning: '利益相关方',
        context: '项目涉及的所有权力方和相关者',
        example: 'We must manage the expectations of all internal stakeholders early on.'
      },
      {
        expression: 'contingency plan',
        meaning: '应急预案',
        context: '如果主计划失败时的备选方案',
        example: 'What is our contingency plan if the main vendor fails to deliver?'
      },
      {
        expression: 'bandwidth',
        meaning: '精力 / 负荷',
        context: '是否有余力处理新任务',
        example: 'I\'d love to help, but I don\'t have the bandwidth this week.'
      },
      {
        expression: 'feasible',
        meaning: '可行的',
        context: '技术或资源上能做到的',
        example: 'A 20% growth rate is feasible if we double our ad spend.'
      },
      {
        expression: 'transparency',
        meaning: '透明度 / 坦诚',
        context: '在期望管理中至关重要，不隐瞒风险',
        example: 'Radical transparency about our delays helped maintain the client\'s trust.'
      },
      {
        expression: 'buffer',
        meaning: '缓冲（时间或预算）',
        context: '为不可预见因素预留的余地',
        example: 'I\'ve included a two-week buffer in the project schedule.'
      },
      {
        expression: 'push back',
        meaning: '推回 / 拒绝 / 抵制',
        context: '由于不合理而礼貌地拒绝需求',
        example: 'We had to push back on the client\'s request for a free redesign.'
      },
      {
        expression: 'trade-off',
        meaning: '权衡',
        context: '在多个变量间寻找平衡',
        example: 'Managing expectations is often about facilitating difficult trade-offs.'
      },
      {
        expression: 'out of scope',
        meaning: '在范围之外',
        context: '不属于目前约定的任务范围',
        example: 'Adding a new payment gateway is currently out of scope for this sprint.'
      },
      {
        expression: 'milestone',
        meaning: '里程碑',
        context: '用于对齐期望的阶段性关键节点',
        example: 'Sharing small milestones helps keep the client calm during long projects.'
      },
      {
        expression: 'benchmark',
        meaning: '基准',
        context: '用于衡量期望是否合理的参照',
        example: 'We should use last year\'s data as a benchmark for our expectations.'
      }
    ],
    sentencePatterns: [
      {
        pattern: "To ensure a successful launch, we need to be realistic about the [Timeline/Budget].",
        meaning: "为了确保成功启动，我们需要对[时间表/预算]保持现实的态度。",
        usage: "在项目初期降低不切实际的预期",
        example: "To ensure a successful launch, we need to be realistic about the development timeline."
      },
      {
        pattern: "I want to manage expectations early: [Issue] might impact our [Goal].",
        meaning: "我想尽早管理期望：[问题]可能会影响我们的[目标]。",
        usage: "预警潜在风险，让项目相关方有心理准备",
        example: "I want to manage expectations early: the integration complexity might impact our Q3 launch date."
      },
      {
        pattern: "We could certainly add [Feature], but that would require a trade-off with [Existing Priority].",
        meaning: "我们当然可以添加[功能]，但那需要对[现有优先项]进行权衡。",
        usage: "面对新需求时，引导对方意识到资源局限",
        example: "We could certainly add the chat feature, but that would require a trade-off with the security updates."
      },
      {
        pattern: "If we prioritize [Task A], then [Task B] will likely be moved to [Date].",
        meaning: "如果我们优先处理[任务 A]，那么[任务 B]可能需要移至[日期]。",
        usage: "让对方在多个需求中做选择，而非全盘接受",
        example: "If we prioritize the mobile app fix, then the desktop update will likely be moved to next month."
      },
      {
        pattern: "Currently, our team has the bandwidth to handle [Amount], but not [Extra Amount].",
        meaning: "目前，我们团队有精力处理[量]，但无法处理[额外的量]。",
        usage: "明确告知资源上限",
        example: "Currently, our team has the bandwidth to handle three major clients, but not a fourth one this quarter."
      },
      {
        pattern: "What is your main priority for this project: speed, cost, or quality?",
        meaning: "这个项目你最优先考虑的是什么：速度、成本还是质量？",
        usage: "通过提问让利益相关方明确核心需求",
        example: "I understand you want everything, but what is your main priority for the MVP: speed or quality?"
      },
      {
        pattern: "I'd like to suggest a phased approach to manage the [Risk/Workload].",
        meaning: "我想建议一种分阶段的方法来管理[风险/工作量]。",
        usage: "将大需求化整为零，降低交付压力",
        example: "I'd like to suggest a phased approach to manage the global rollout to minimize technical risks."
      },
      {
        pattern: "Just to be clear, the current budget does not cover [Service/Feature].",
        meaning: "先明确一下，目前的预算不包含[服务/功能]。",
        usage: "明确划定范围边界",
        example: "Just to be clear, the current budget does not cover ongoing maintenance after the launch."
      },
      {
        pattern: "We are on track for [Goal], but I'll keep you updated if that changes.",
        meaning: "我们目前正按计划推进[目标]，但如有变动我会随时同步您。",
        usage: "维持正常预期的同时留有沟通余地",
        example: "We are on track for the Friday release, but I'll keep you updated if the testing results change that."
      },
      {
        pattern: "I value your input, but I want to ensure our goals remain achievable for the team.",
        meaning: "我很看重您的意见，但我希望确保我们的目标对团队来说是可达成的。",
        usage: "礼貌拒绝上级或同事的过高要求",
        example: "I value your input, but I want to ensure our sales targets remain achievable for the new team members."
      }
    ],
    formalDialogue: {
      title: '正式场景：向上级管理进度期望',
      context: 'Alex 负责的项目遇到了意料之外的技术障碍，他需要向上级 VP 解释进度可能延误，并管理其期望。',
      conversation: [
        {
          speaker: 'Alex',
          text: "Hi Sarah, do you have a moment? I want to give you a transparent update on Project Titan's progress."
        },
        {
          speaker: 'Sarah',
          text: "Sure, Alex. I'm assuming we're still on track for the end-of-month launch?"
        },
        {
          speaker: 'Alex',
          text: "I want to manage expectations early on that. We've run into a significant bottleneck with the third-party API integration."
        },
        {
          speaker: 'Sarah',
          text: "That's not what I wanted to hear. Can we just throw more people at it?"
        },
        {
          speaker: 'Alex',
          text: "To be realistic, adding more people now might actually delay us further due to the onboarding time. I'd like to suggest a trade-off: we can launch the core features on time, but move the advanced analytics to a Phase 2 update."
        },
        {
          speaker: 'Sarah',
          text: "How much of a delay are we talking about for the analytics?"
        },
        {
          speaker: 'Alex',
          text: "About two weeks. This phased approach ensures a stable initial launch while keeping our commitment to the primary deliverables."
        },
        {
          speaker: 'Sarah',
          text: "I appreciate the honesty and the solution, Alex. Let's go with the phased approach. I'll update the board."
        }
      ],
      learnableExpressions: [
        {
          expression: "Transparent update",
          explanation: "透明的/诚实的进度更新。"
        },
        {
          expression: "Manage expectations early on",
          explanation: "尽早管理期望（职业素养的体现）"
        },
        {
          expression: "Significant bottleneck",
          explanation: "重大的瓶颈。"
        },
        {
          expression: "Throw more people at it",
          explanation: "向该项目投入更多人手（常见的管理层直白表达）"
        },
        {
          expression: "Phased approach",
          explanation: "分阶段的方法。"
        },
        {
          expression: "Commitment to the primary deliverables",
          explanation: "对主要交付物的承诺。"
        }
      ],
      analysis: '在这场向上管理中，Alex 做得非常到位：1. 及时主动沟通（transparent update），不等到最后一刻才说；2. 直面问题（manage expectations early），不含糊其辞；3. 给出专业判断（adding more people now might delay us further）；4. 提供替代方案（trade-off / phased approach）。他不仅报告了坏消息，还带去了能落地的解决方案，从而赢得了上级的信任。'
    },
    smallTalkDialogue: {
      title: '非正式场景：应对同事的额外请求',
      context: 'Alex 正在忙一个高优先级项目，同事 Mark 跑来想让他顺便帮个小忙。',
      conversation: [
        {
          speaker: 'Mark',
          text: "Hey Alex! I've got a small favor to ask. Could you quickly review this 20-page report for me by this afternoon?"
        },
        {
          speaker: 'Alex',
          text: "I'd love to help out, Mark, but I have to be realistic about my bandwidth today. I'm deep in the Q4 budget planning."
        },
        {
          speaker: 'Mark',
          text: "It'll only take 10 minutes, I promise!"
        },
        {
          speaker: 'Alex',
          text: "To give it the attention it deserves, it would take more than 10 minutes. If I prioritize this now, it will delay my budget submission."
        },
        {
          speaker: 'Mark',
          text: "I didn't realize you were that busy. No worries."
        },
        {
          speaker: 'Alex',
          text: "How about this: if you can wait until Friday morning, I'll have a buffer in my schedule to give it a proper look. Does that work for you?"
        },
        {
          speaker: 'Mark',
          text: "That works! Friday is fine. Thanks for being straight with me, Alex."
        }
      ],
      learnableExpressions: [
        {
          expression: "Small favor",
          explanation: "小忙（请求者常用的心理减压词）"
        },
        {
          expression: "Deep in...",
          explanation: "正深陷于/忙于...之中。"
        },
        {
          expression: "Attention it deserves",
          explanation: "它应得的关注（体面拒绝的理由）"
        },
        {
          expression: "Have a buffer",
          explanation: "有缓冲时间/空档。"
        },
        {
          expression: "Being straight with me",
          explanation: "对我直说（认可对方坦诚的态度）"
        }
      ],
      analysis: '面对平级同事的请求，Alex 既守住了自己的工作优先级，又没有破坏人际关系。他拒绝的理由非常专业：1. 强调当前工作的优先级（budget planning）；2. 强调对对方工作的尊重（attention it deserves）；3. 给出了具体的替代时间（Friday morning）。这种“有条件的拒绝”比生硬的 "No" 或是勉强接受却做不好要高效得多。'
    },
    commonMistakes: [
      {
        wrong: "I will try my best to finish everything.",
        better: "I will prioritize [Task A] and [Task B]. However, [Task C] might be at risk given the current resources.",
        explanation: "不要用模糊的“尽力而为”。明确告知哪些能做，哪些“有风险”（at risk），给对方一个清晰的预期。"
      },
      {
        wrong: "Sure, no problem! We can do that.",
        better: "We can certainly look into that. Let me review the scope and see how it affects our current timeline.",
        explanation: "不要立刻答应（Yes-man 倾向）。先承诺“研究一下”（look into that）并评估对“范围和时间”（scope and timeline）的影响。"
      },
      {
        wrong: "It's late because Mark was slow.",
        better: "We experienced some unforeseen technical challenges. We've adjusted our roadmap to prevent further delays.",
        explanation: "不要甩锅给具体的人。归因于“不可预见的挑战”（unforeseen challenges）并展示“调整后的路线图”（adjusted roadmap）。"
      },
      {
        wrong: "I think it will be done soon.",
        better: "Based on our current progress, we are targeting a completion date of [Date].",
        explanation: "不要用“很快”这种主观词。使用“基于目前进度”（Based on current progress）并给出“目标日期”（targeting a date）。"
      },
      {
        wrong: "The client is always right, just do it.",
        better: "We need to explain the trade-offs to the client so they understand the impact on quality.",
        explanation: "不要盲从不合理需求。向对方解释“权衡”（trade-offs）和对“质量”（quality）的影响，是专业服务的体现。"
      }
    ],
    expressionUpgrades: [
      {
        basic: "I want everything to be perfect.",
        better: "I have high quality standards for this project.",
        professional: "My goal is to ensure our deliverables exceed the industry benchmark while maintaining a sustainable workload for the team.",
        explanation: "使用 industry benchmark（行业基准）和 sustainable workload（可持续的工作量）展示了平衡结果与团队健康的成熟管理观。"
      },
      {
        basic: "The project is getting too big.",
        better: "We are seeing some scope creep.",
        professional: "I've identified several instances of scope creep that could jeopardize our primary milestones. We need to realign on the core priorities.",
        explanation: "使用 jeopardize milestones（危害里程碑）和 realign on core priorities（重新对齐核心优先级）显得非常有危机感和控制力。"
      },
      {
        basic: "We can't do this now.",
        better: "This is currently out of scope.",
        professional: "While this is a valuable feature, it is currently outside the agreed-upon project scope. We can evaluate it as part of our Phase 2 roadmap.",
        explanation: "使用 outside the agreed-upon scope（在约定的范围外）提供了一个坚实的、基于合同/协议的拒绝理由。"
      },
      {
        basic: "I will tell you if we are late.",
        better: "I'll keep you updated on any risks.",
        professional: "I'm committed to providing you with proactive risk assessments to ensure there are no surprises as we approach the deadline.",
        explanation: "使用 proactive risk assessments（主动风险评估）和 no surprises（没有意外/惊吓）是高阶期望管理的金句。"
      },
      {
        basic: "We need to choose: fast or cheap?",
        better: "We need to make a trade-off.",
        professional: "We are at a point where we must facilitate a strategic trade-off between the speed of delivery and the depth of the initial feature set.",
        explanation: "使用 facilitate a strategic trade-off（引导战略性权衡）将简单的“二选一”提升到了战略决策的高度。"
      }
    ],
    practiceTasks: [
      {
        title: '任务 1：起草范围确认邮件',
        instruction: '撰写一封邮件给客户，确认下周启动的项目范围。要求：明确列出包含的 3 个功能，并明确列出不包含的 1 个功能（为了防止范围蔓延）。',
        example: 'Hi [Name], just to align expectations for next week: the scope includes [A, B, C]. Please note that [D] is currently out of scope, but we can discuss it for a later update.'
      },
      {
        title: '任务 2：练习向上管理风险',
        instruction: '你发现项目可能要延期 3 天。请写一段话给老板，内容：承认延期可能性、解释原因（如：测试发现 Bug）、提供解决方案（如：加班或分批交付）。',
        example: 'I want to manage expectations: we might see a 3-day delay as we found a bug during testing. To minimize the impact, I suggest we release a beta version on Friday as planned, with the full fix by Monday.'
      },
      {
        title: '任务 3：录制拒绝加班请求',
        instruction: '录制一段语音回复同事。场景：周五下午 4 点，同事让你帮他弄个报表。要求：表达同理心、陈述自己的现有高优先级任务、提议周一处理。',
        example: 'Hey, I totally hear you — I can see this report is time-sensitive and I really do want to help. Unfortunately I have two high-priority deliverables due first thing Monday morning that I need to protect my weekend to finalise. What I\'d propose is: let\'s connect first thing Monday — I can turn this around quickly before our standups, probably within the first hour. Would that timeline work for you? And if it\'s genuinely urgent before then, let me know and we can figure something out.'
      }
    ],
    saveablePhrases: [
      {
        phrase: "I want to manage expectations early: we may need to adjust the timeline due to [Issue].",
        category: "汇报",
        meaning: "我想尽早管理期望：由于[问题]，我们可能需要调整时间表。"
      },
      {
        phrase: "We could certainly add that feature, but it would require a trade-off with our current priority.",
        category: "Small Talk",
        meaning: "我们当然可以添加那个功能，但那需要对我们目前的优先事项进行权衡。"
      },
      {
        phrase: "To be realistic, the current resource allocation doesn't allow for a faster turnaround.",
        category: "汇报",
        meaning: "现实点说，目前的资源分配不允许更快的周转时间。"
      },
      {
        phrase: "Just to be clear, the current project scope does not cover the additional [Task/Feature].",
        category: "汇报",
        meaning: "先明确一下，目前的项目范围不包含额外的[任务/功能]。"
      },
      {
        phrase: "I'd like to suggest a phased approach to ensure we hit our primary milestones on time.",
        category: "汇报",
        meaning: "我想建议一种分阶段的方法，以确保我们按时达成主要里程碑。"
      },
      {
        phrase: "I'll keep you updated proactively to ensure there are no surprises as we approach the deadline.",
        category: "Small Talk",
        meaning: "我会主动为您同步进展，以确保在临近截止日期时没有任何意外。"
      },
      {
        phrase: "Currently, my bandwidth is maxed out with [Task], so I can't take on extra requests this week.",
        category: "Small Talk",
        meaning: "目前我的精力已完全被[任务]占据，所以本周无法承接额外的请求。"
      },
      {
        phrase: "What is your main priority here: speed of delivery or the depth of the initial features?",
        category: "Small Talk",
        meaning: "你现在的首要任务是什么：交付速度还是初始功能的深度？"
      }
    ],
    resources: [
      {
        name: 'HBS Online — 8 Essential Leadership Communication Skills',
        type: 'leadership article',
        description: '战略汇报、利益相关方更新、管理沟通',
        why: '适合学习管理者如何建立 trust、align efforts、adapt communication style、listen actively 和 communicate with clarity。',
        url: 'https://online.hbs.edu/blog/post/leadership-communication'
      },
      {
        name: 'HBS Online — How to Give Feedback Effectively',
        type: 'leadership article',
        description: '反馈与建设性批评、绩效沟通、1:1 沟通',
        why: '适合学习 constructive feedback、empathy、specific examples 和 improvement-focused language。',
        url: 'https://online.hbs.edu/blog/post/how-to-give-feedback-effectively'
      },
      {
        name: 'HBS Online — How to Delegate Effectively',
        type: 'leadership article',
        description: '授权与任务分配、期望管理、团队协作',
        why: '适合学习如何说明 desired outcome、expectation、timeline、resources、authority 和 check-in structure。',
        url: 'https://online.hbs.edu/blog/post/how-to-delegate-effectively'
      },
      {
        name: 'HBS Online — Navigate Difficult Conversations with Employees',
        type: 'leadership article',
        description: '棘手对话、绩效沟通、冲突处理',
        why: '适合学习 trust-building、active listening、difficult conversation structure，以及如何在管理沟通中保持清楚和尊重。',
        url: 'https://online.hbs.edu/blog/post/how-to-have-difficult-conversations-with-employees'
      },
      {
        name: 'Harvard Business Publishing — How to Communicate for Impact',
        type: 'leadership article / video',
        description: '利益相关方更新、战略与决策汇报、高层沟通',
        why: '适合学习 senior update、executive summary、decision briefing 和 high-impact communication。',
        url: 'https://www.harvardbusiness.org/insight/how-to-communicate-for-impact/'
      },
      {
        name: 'MindTools — What Is Stakeholder Management?',
        type: 'management article',
        description: '利益相关方更新、期望管理、战略与决策汇报',
        why: '解释 stakeholder management 的核心：识别关键相关方，并用合适的方式沟通、维持关系和获得支持。很适合 alignment、expectation management 和 stakeholder communication 内容。',
        url: 'https://www.mindtools.com/at2o1co/what-is-stakeholder-management/'
      }
    ]
  },
  // Unit 22: 项目更新与风险汇报 / Updates & Risks
  'm4': {
    id: 'm4',
    title: '项目更新与风险汇报',
    englishTitle: 'Updates & Risks',
    level: 'C1',
    objectives: [
      '学会根据不同利益相关方（如高管、客户、跨部门同事）调整汇报深度与侧重点',
      '掌握撰写简洁、结构化项目状态报告（Status Report）的专业模板',
      '学习如何“包装”坏消息，在指出风险的同时提供缓解措施（Mitigation）',
      '掌握在短时间内向高管进行“高价值汇报”（Executive Briefing）的话术',
      '学会如何建立定期的更新机制，通过透明度增强利益相关方的信任感'
    ],
    scenarios: [
      '向公司 VP 发送一份本月核心项目的两分钟简明摘要',
      '给客户发送周报，总结已完成的任务、遇到的障碍及下周计划',
      '在跨部门项目协调会上，向平级部门同步最新的进度变更',
      '面对项目预算可能超支的风险，向财务部和直接上级进行预警汇报',
      '由于市场环境变化，向内部利益相关方解释项目战略调整的原因',
      '在项目达成关键里程碑后，向所有相关方发送庆祝与致谢邮件',
      '在面对质疑时，向受影响的部门解释为什么某个功能被排在了优先级末尾'
    ],
    vocabulary: [
      {
        expression: 'stakeholder',
        meaning: '利益相关方',
        context: '所有受项目影响或能影响项目的个人或团队',
        example: 'We need to identify all key stakeholders before the project kick-off.'
      },
      {
        expression: 'status report',
        meaning: '进度报告 / 状态报告',
        context: '定期汇总项目进展的文档',
        example: 'I will send out the weekly status report every Friday by 5 PM.'
      },
      {
        expression: 'executive summary',
        meaning: '执行摘要',
        context: '为高管提供的极简版报告，侧重结论和决策',
        example: 'Start your presentation with an executive summary for the VP.'
      },
      {
        expression: 'mitigation plan',
        meaning: '缓解计划 / 补救措施',
        context: '针对已知风险采取的减轻影响的行动',
        example: 'If the supplier fails, our mitigation plan is to use a local vendor.'
      },
      {
        expression: 'milestone',
        meaning: '里程碑',
        context: '项目中的重大阶段性成果',
        example: 'Reaching this milestone means we are 50% through the development phase.'
      },
      {
        expression: 'bottleneck',
        meaning: '瓶颈',
        context: '阻碍项目整体进度的环节',
        example: 'The slow approval process has become a major bottleneck.'
      },
      {
        expression: 'transparency',
        meaning: '透明度',
        context: '在汇报中保持诚实、公开的态度',
        example: 'Radical transparency builds trust, especially when things go wrong.'
      },
      {
        expression: 'alignment',
        meaning: '对齐 / 一致',
        context: '确保所有利益相关方对目标的理解相同',
        example: 'Let\'s have a brief sync to ensure alignment on the Q4 targets.'
      },
      {
        expression: 'cadence',
        meaning: '节奏 / 频率',
        context: '沟通或汇报的定期频率',
        example: 'We will maintain a bi-weekly cadence for our stakeholder updates.'
      },
      {
        expression: 'high-level update',
        meaning: '高层级更新 / 概括性更新',
        context: '不纠结细节，只讲重点和方向的汇报',
        example: 'This is just a high-level update; we can discuss details in the breakout session.'
      },
      {
        expression: 'blocker',
        meaning: '障碍物',
        context: '导致任务无法继续进行的问题',
        example: 'Do you have any blockers that the leadership team can help resolve?'
      },
      {
        expression: 'KPI (Key Performance Indicator)',
        meaning: '关键绩效指标',
        context: '用于衡量项目成功的具体量化指标',
        example: 'Our primary KPI for this update is the decrease in page load time.'
      },
      {
        expression: 'forecast / projection',
        meaning: '预测 / 展望',
        context: '基于目前数据对未来的推测',
        example: 'Our current forecast suggests we will exceed the sales target by 10%.'
      },
      {
        expression: 'visibility',
        meaning: '可见性 / 知晓度',
        context: '让利益相关方了解项目内部运作的程度',
        example: 'Using a shared dashboard increases visibility for the whole team.'
      },
      {
        expression: 'risk assessment',
        meaning: '风险评估',
        context: '对项目中潜在威胁的识别和分析',
        example: 'We performed a thorough risk assessment before entering the new market.'
      },
      {
        expression: 'recap',
        meaning: '简短回顾',
        context: '对已发生事情的快速总结',
        example: 'Here is a quick recap of the decisions made during the last steering committee.'
      },
      {
        expression: 'action item',
        meaning: '待办事项',
        context: '更新中明确列出的需要某人执行的任务',
        example: 'Each action item should have a clear owner and a deadline.'
      },
      {
        expression: 'on track / off track',
        meaning: '按计划进行 / 偏离计划',
        context: '描述项目进度状态的最常用术语',
        example: 'While the design is on track, the backend development is slightly off track.'
      },
      {
        expression: 'steering committee',
        meaning: '指导委员会',
        context: '由高管组成的决策机构',
        example: 'The steering committee approved our budget increase this morning.'
      },
      {
        expression: 'buy-in',
        meaning: '认可 / 支持',
        context: '获得利益相关方对方案的同意',
        example: 'We need to get stakeholder buy-in before we pivot our strategy.'
      }
    ],
    sentencePatterns: [
      {
        pattern: "I'd like to provide a brief update on [Project] to keep you in the loop on our progress.",
        meaning: "我想向您提供关于[项目]的简短更新，让您随时了解我们的进度。",
        usage: "主动发起汇报的专业开场",
        example: "I'd like to provide a brief update on the CRM migration to keep you in the loop on our progress."
      },
      {
        pattern: "To summarize the current status, we are on track for [Milestone A] but seeing some risks in [Area B].",
        meaning: "总结一下现状，我们正按计划推进[里程碑 A]，但在[领域 B]看到一些风险。",
        usage: "“好坏结合”的结构化总结",
        example: "To summarize the current status, we are on track for the beta release but seeing some risks in the API stability."
      },
      {
        pattern: "The key takeaway from this month is that [Main Finding/Achievement].",
        meaning: "本月最核心的结论/成就是[内容]。",
        usage: "为忙碌的利益相关方提炼重点",
        example: "The key takeaway from this month is that our organic traffic has surpassed our initial targets."
      },
      {
        pattern: "We have identified [Issue] as a potential blocker and are implementing [Mitigation] as a response.",
        meaning: "我们已将[问题]识别为潜在障碍，并正采取[缓解措施]作为应对。",
        usage: "在报告问题时同步提供解决方案",
        example: "We have identified the hardware delay as a potential blocker and are implementing a cloud-based workaround as a response."
      },
      {
        pattern: "I want to highlight that [Fact/Data] to ensure we're fully aligned on the project direction.",
        meaning: "我想强调一下[事实/数据]，以确保我们对项目方向的理解完全一致。",
        usage: "通过强调关键信息来对齐认知",
        example: "I want to highlight that our user retention is 15% above the benchmark to ensure we're fully aligned on the project direction."
      },
      {
        pattern: "In terms of the timeline, we are currently [Number] days [Ahead of/Behind] schedule.",
        meaning: "在时间表方面，我们目前比计划[提前/落后][天数]。",
        usage: "清晰量化项目进度",
        example: "In terms of the timeline, we are currently three days ahead of schedule thanks to the automation tool."
      },
      {
        pattern: "What I need from the leadership team at this stage is [Request/Approval].",
        meaning: "现阶段我需要领导层提供的是[请求/审批]。",
        usage: "明确汇报目的，引导上级动作",
        example: "What I need from the leadership team at this stage is a formal approval for the additional cloud budget."
      },
      {
        pattern: "Just a heads-up that we've made a strategic adjustment to [Feature/Process] due to [Reason].",
        meaning: "提个醒，由于[原因]，我们对[功能/流程]进行了战略调整。",
        usage: "及时告知变动，防止“惊喜”变“惊吓”",
        example: "Just a heads-up that we've made a strategic adjustment to the launch date due to the new security audit requirements."
      },
      {
        pattern: "I'll be providing these updates on a [Weekly/Bi-weekly] cadence moving forward.",
        meaning: "今后我将按[每周/每两周]的频率提供这些更新。",
        usage: "确立长期的汇报机制",
        example: "I'll be providing these updates on a monthly cadence moving forward to ensure transparency."
      },
      {
        pattern: "Thank you for your ongoing support; I'll keep you posted as we approach the next milestone.",
        meaning: "感谢您一直以来的支持；在临近下一个里程碑时，我会随时同步您进度。",
        usage: "职业化的汇报结语",
        example: "Thank you for your ongoing support; I'll keep you posted as we approach the product launch."
      }
    ],
    formalDialogue: {
      title: '正式场景：向高管进行季度项目简报',
      context: 'Alex 只有 5 分钟时间向忙碌的 VP Sarah 汇报核心项目的季度进展。',
      conversation: [
        {
          speaker: 'Alex',
          text: "Hi Sarah, do you have a few minutes for a high-level update on the Global Rollout project?"
        },
        {
          speaker: 'Sarah',
          text: "Yes, Alex. Keep it brief—I have another meeting in five minutes."
        },
        {
          speaker: 'Alex',
          text: "Understood. The key takeaway is that we are on track for the European launch next month. Our conversion metrics in the pilot phase actually exceeded our target by 10%."
        },
        {
          speaker: 'Sarah',
          text: "That's great news. Any risks I should be aware of?"
        },
        {
          speaker: 'Alex',
          text: "We've identified a potential bottleneck with the local payment gateways. However, our mitigation plan is already in motion—we're working with a backup provider to ensure no delays."
        },
        {
          speaker: 'Sarah',
          text: "Good proactive thinking. What do you need from me?"
        },
        {
          speaker: 'Alex',
          text: "I just need your sign-off on the revised budget for the backup provider by EOD tomorrow. I'll send the summary email right now."
        },
        {
          speaker: 'Sarah',
          text: "Perfect. Send it over, and I'll review it tonight. Thanks for the update, Alex."
        }
      ],
      learnableExpressions: [
        {
          expression: "High-level update",
          explanation: "高层级/概括性的更新。"
        },
        {
          expression: "Exceeded our target",
          explanation: "超过了我们的目标。"
        },
        {
          expression: "Mitigation plan is already in motion",
          explanation: "缓解计划/补救方案已经在执行中。"
        },
        {
          expression: "Proactive thinking",
          explanation: "有预见性的/主动的思考。"
        },
        {
          expression: "Sign-off",
          explanation: "签字确认/正式批准。"
        }
      ],
      analysis: '在这场高效汇报中，Alex 展现了顶尖的沟通能力：1. 尊重对方时间（Keep it brief）；2. 结论先行（key takeaway is...）；3. 好坏结合（好消息+已解决的风险）；4. 明确诉求（need your sign-off）。这种“带着答案来汇报”的风格是高层利益相关方最喜欢的。'
    },
    smallTalkDialogue: {
      title: '非正式场景：在走廊向平级利益相关方同步变动',
      context: 'Alex 在去开会的路上遇到了另一个部门的经理 Mark，由于项目范围微调会影响 Mark 的团队，Alex 决定先口头同步一下。',
      conversation: [
        {
          speaker: 'Alex',
          text: "Hey Mark! I was just about to email you. Just a quick heads-up about the Titan project."
        },
        {
          speaker: 'Mark',
          text: "Oh, hey Alex. Is everything still on schedule for the integration?"
        },
        {
          speaker: 'Alex',
          text: "Mostly, but we've made a slight strategic adjustment to the API scope to ensure a more stable launch. It shouldn't delay your side, but the data format might be slightly different."
        },
        {
          speaker: 'Mark',
          text: "I appreciate the heads-up. Different in what way? My team needs to know for the mapping."
        },
        {
          speaker: 'Alex',
          text: "It's just the date-time format. I'll send over the updated documentation this afternoon so we're fully aligned. I wanted to make sure you heard it from me first."
        },
        {
          speaker: 'Mark',
          text: "Thanks, Alex. I appreciate the transparency. It saves us a lot of rework later."
        }
      ],
      learnableExpressions: [
        {
          expression: "Quick heads-up",
          explanation: "快速提醒/预警。"
        },
        {
          expression: "Strategic adjustment",
          explanation: "战略性的调整（比单纯说‘变了’更有专业感）"
        },
        {
          expression: "Fully aligned",
          explanation: "完全对齐/一致。"
        },
        {
          expression: "Heard it from me first",
          explanation: "让你第一个听到消息（体现尊重，防止谣言）"
        },
        {
          expression: "Saves us a lot of rework",
          explanation: "让我们省去了很多返工。"
        }
      ],
      analysis: '跨部门协作中，最忌讳的是“意外惊喜”。Alex 通过口头预警（heads-up）展现了极高的透明度和尊重。虽然是一个小的调整（data format），但他强调了目的是“为了更稳定的启动”，并承诺“下午发文档”，这种主动对齐（alignment）极大减少了未来的摩擦和返工风险。'
    },
    commonMistakes: [
      {
        wrong: "I don't have time to write a report today.",
        better: "I'll send a brief bulleted summary today instead of a full report to ensure you get the key updates on time.",
        explanation: "即使忙也不要完全不更新。用“简要的要点总结”（bulleted summary）代替长篇报告，保证信息流不断。"
      },
      {
        wrong: "The project is broken. We failed.",
        better: "We have encountered a significant challenge, but we have already identified a potential mitigation strategy.",
        explanation: "不要只报丧不报喜。指出“重大挑战”（significant challenge）的同时，必须紧跟“缓解策略”（mitigation strategy）。"
      },
      {
        wrong: "You don't need to know the details.",
        better: "To keep this update concise for the leadership team, I'll focus on the high-level milestones.",
        explanation: "不要生硬地拒绝提供细节。说明是为了“保持简洁”（keep it concise）并关注“高层级里程碑”（high-level milestones）。"
      },
      {
        wrong: "Why are you asking me for updates again?",
        better: "I appreciate your interest in the project's progress. Let's establish a regular cadence for these updates to keep everyone informed.",
        explanation: "不要反感被催更。通过建立“定期节奏”（regular cadence）来主动控制信息流，减少被打扰。"
      },
      {
        wrong: "We changed the plan yesterday.",
        better: "I'm writing to inform you of a slight pivot in our project direction to better align with the new company goals.",
        explanation: "变动后要立刻告知受影响方。使用“方向微调”（slight pivot）并给出“对齐公司目标”的正面理由。"
      }
    ],
    expressionUpgrades: [
      {
        basic: "I want to tell you about the project.",
        better: "I'd like to provide an update on the project status.",
        professional: "I'm reaching out to provide a strategic progress report to ensure continued alignment among all key stakeholders.",
        explanation: "使用 strategic progress report（战略进度报告）和 continued alignment（持续对齐）显著提升了专业形象。"
      },
      {
        basic: "We had a big problem but it's okay now.",
        better: "We resolved a major issue successfully.",
        professional: "We have successfully navigated a critical project risk and have implemented robust safeguards to prevent future occurrences.",
        explanation: "使用 navigated a risk（化解风险）、robust safeguards（稳健的保障措施）体现了极强的抗风险管理能力。"
      },
      {
        basic: "The project is moving slowly.",
        better: "The project is slightly behind schedule.",
        professional: "We are experiencing a temporary deceleration in the development phase, but we are optimizing our workflows to regain momentum.",
        explanation: "使用 temporary deceleration（暂时性减速）和 regain momentum（恢复势头）比“慢”听起来要有希望得多。"
      },
      {
        basic: "Thanks for your help.",
        better: "I appreciate your support.",
        professional: "Your ongoing advocacy and strategic support have been instrumental in our team's ability to reach this milestone.",
        explanation: "使用 advocacy（拥护/支持）和 instrumental（起关键作用的）能让利益相关方感到被深度肯定。"
      },
      {
        basic: "Tell me what you think.",
        better: "I'd like to hear your feedback.",
        professional: "I welcome your high-level perspective on our current trajectory to ensure we are maximizing our long-term impact.",
        explanation: "使用 high-level perspective（高屋建瓴的视角）和 trajectory（轨迹/走向）是向上管理的高阶话术。"
      }
    ],
    practiceTasks: [
      {
        title: '任务 1：起草 Executive Summary',
        instruction: '为一个名为“用户反馈系统”的项目写一份 100 字以内的执行摘要。包含：目前进度（80%）、一个关键成就（收集了 500 条建议）、以及下周的一个关键目标。',
        example: 'Project Update: User Feedback System. Status: 80% complete. Key Achievement: Successfully captured 500+ unique user insights this week. Next Goal: Finalize the data analysis dashboard by Friday EOD.'
      },
      {
        title: '任务 2：包装“坏消息”练习',
        instruction: '项目因为服务器问题要延期两天。请写一段话，内容：承认延期、解释是因为要确保安全性、承诺在延期期间先给出一份初步分析报告作为补偿。',
        example: 'I want to manage expectations: the final report will be delayed by two days to ensure a thorough security audit. In the meantime, I\'ll share an interim summary today so you can start reviewing the core data.'
      },
      {
        title: '任务 3：录制里程碑庆祝致谢',
        instruction: '录制一段 30 秒语音。场景：项目正式上线。要求：宣布成功上线、提到这离不开大家的跨部门协作、表达对下一阶段合作的期待。',
        example: 'Team, I am thrilled to announce — we are officially live! This is a huge milestone, and I mean that. What we\'ve accomplished here wouldn\'t have been possible without the extraordinary cross-functional effort from every corner of this organisation — engineering, design, marketing, and operations all firing together. Every late review session, every quick pivot, every piece of sharp feedback led us to this moment. This is just the beginning of what we can do together. I can\'t wait to see what phase two brings. Congratulations to all of you — you deserve this!'
      }
    ],
    saveablePhrases: [
      {
        phrase: "I'd like to provide a high-level update to keep you in the loop on our current progress.",
        category: "汇报",
        meaning: "我想提供一个高层级的更新，让您随时了解我们的当前进度。"
      },
      {
        phrase: "The key takeaway from this phase is that we are on track for our primary milestones.",
        category: "汇报",
        meaning: "这一阶段的核心结论是我们正按计划达成主要里程碑。"
      },
      {
        phrase: "We've identified a potential blocker and are implementing a robust mitigation plan.",
        category: "汇报",
        meaning: "我们已识别出一个潜在障碍，并正执行一套稳健的缓解计划。"
      },
      {
        phrase: "Just a quick heads-up: we've made a strategic adjustment to the project direction.",
        category: "Small Talk",
        meaning: "提个醒：我们对项目方向进行了战略调整。"
      },
      {
        phrase: "What I need from the leadership team at this stage is your formal sign-off on the revised budget.",
        category: "汇报",
        meaning: "现阶段我需要领导层提供的是对修订后预算的正式批准。"
      },
      {
        phrase: "Thank you for the ongoing advocacy; your support has been instrumental to our success.",
        category: "Small Talk",
        meaning: "感谢您一直以来的鼎力支持；您的支持对我们的成功至关重要。"
      },
      {
        phrase: "I'll be providing these strategic reports on a bi-weekly cadence to ensure transparency.",
        category: "汇报",
        meaning: "我将每两周提供一次这些战略报告，以确保透明度。"
      },
      {
        phrase: "To ensure we're fully aligned, let's recap the main findings and next steps.",
        category: "Small Talk",
        meaning: "为了确保我们完全对齐，让我们总结一下主要发现和下一步行动。"
      }
    ],
    resources: [
      {
        name: 'HBS Online — 8 Essential Leadership Communication Skills',
        type: 'leadership article',
        description: '战略汇报、利益相关方更新、管理沟通',
        why: '适合学习管理者如何建立 trust、align efforts、adapt communication style、listen actively 和 communicate with clarity。',
        url: 'https://online.hbs.edu/blog/post/leadership-communication'
      },
      {
        name: 'HBS Online — How to Give Feedback Effectively',
        type: 'leadership article',
        description: '反馈与建设性批评、绩效沟通、1:1 沟通',
        why: '适合学习 constructive feedback、empathy、specific examples 和 improvement-focused language。',
        url: 'https://online.hbs.edu/blog/post/how-to-give-feedback-effectively'
      },
      {
        name: 'HBS Online — How to Delegate Effectively',
        type: 'leadership article',
        description: '授权与任务分配、期望管理、团队协作',
        why: '适合学习如何说明 desired outcome、expectation、timeline、resources、authority 和 check-in structure。',
        url: 'https://online.hbs.edu/blog/post/how-to-delegate-effectively'
      },
      {
        name: 'HBS Online — Navigate Difficult Conversations with Employees',
        type: 'leadership article',
        description: '棘手对话、绩效沟通、冲突处理',
        why: '适合学习 trust-building、active listening、difficult conversation structure，以及如何在管理沟通中保持清楚和尊重。',
        url: 'https://online.hbs.edu/blog/post/how-to-have-difficult-conversations-with-employees'
      },
      {
        name: 'Harvard Business Publishing — How to Communicate for Impact',
        type: 'leadership article / video',
        description: '利益相关方更新、战略与决策汇报、高层沟通',
        why: '适合学习 senior update、executive summary、decision briefing 和 high-impact communication。',
        url: 'https://www.harvardbusiness.org/insight/how-to-communicate-for-impact/'
      },
      {
        name: 'MindTools — What Is Stakeholder Management?',
        type: 'management article',
        description: '利益相关方更新、期望管理、战略与决策汇报',
        why: '解释 stakeholder management 的核心：识别关键相关方，并用合适的方式沟通、维持关系和获得支持。很适合 alignment、expectation management 和 stakeholder communication 内容。',
        url: 'https://www.mindtools.com/at2o1co/what-is-stakeholder-management/'
      }
    ]
  },
  // Unit 23: 绩效评估与辅导 / Performance & Coaching
  'm5': {
    id: 'm5',
    title: '绩效评估与辅导',
    englishTitle: 'Performance & Coaching',
    level: 'C1',
    objectives: [
      '掌握正面反馈（Positive Reinforcement）与建设性批评（Constructive Criticism）的平衡技巧',
      '学会使用 SBI 模型（Situation, Behavior, Impact）进行客观、具体的绩效评估',
      '学习如何与员工共同制定 SMART 目标，并建立持续的跟进机制',
      '掌握处理“绩效不达标”（Underperformance）对话的专业话术与心理策略策略',
      '学会如何在沟通中展现共情（Empathy），建立基于信任的教练式领导关系'
    ],
    scenarios: [
      '在季度绩效回顾（Quarterly Review）中肯定员工的杰出贡献',
      '向一名近期表现下滑的员工指出具体问题并讨论改进方案',
      '与渴望晋升的员工讨论其能力差距及职业发展路径（Career Path）',
      '在年度评估中处理员工对评分等级（Rating）的异议或不满',
      '指派一个新的挑战性任务，并将其作为下一阶段的考核重点',
      '与整个团队进行集体复盘，讨论如何提升整体运营效率',
      '进行“非正式”的即时反馈（Real-time Feedback），纠正工作细节'
    ],
    vocabulary: [
      {
        expression: 'performance review',
        meaning: '绩效评估 / 回顾',
        context: '定期对员工工作表现进行的正式评价',
        example: 'During the performance review, we will look at both your results and your behaviors.'
      },
      {
        expression: 'constructive feedback',
        meaning: '建设性反馈',
        context: '旨在帮助员工改进而非单纯指责的意见',
        example: 'Constructive feedback should be specific, timely, and actionable.'
      },
      {
        expression: 'underperformer',
        meaning: '表现不佳者',
        context: '工作产出持续低于预期标准的员工',
        example: 'How to manage an underperformer is a key challenge for new managers.'
      },
      {
        expression: 'SMART goals',
        meaning: 'SMART 目标',
        context: '具体的、可衡量的、可达成的、相关的、有期限的目标',
        example: 'Let\'s ensure your Q4 objectives are SMART goals.'
      },
      {
        expression: 'career path / development',
        meaning: '职业路径 / 发展',
        context: '员工在组织内的成长和晋升方向',
        example: 'We need to discuss your long-term career path within the marketing team.'
      },
      {
        expression: 'positive reinforcement',
        meaning: '正向激励 / 强化',
        context: '通过肯定好的行为来鼓励其再次发生',
        example: 'Positive reinforcement is more effective than punishment for long-term motivation.'
      },
      {
        expression: 'KPI (Key Performance Indicator)',
        meaning: '关键绩效指标',
        context: '用于量化评估工作结果的指标',
        example: 'Your primary KPI for this year is the customer retention rate.'
      },
      {
        expression: 'competency / skill gap',
        meaning: '胜任力 / 技能差距',
        context: '现有能力与目标职位要求之间的距离',
        example: 'We identified a small competency gap in public speaking that we can work on.'
      },
      {
        expression: 'coaching',
        meaning: '教练 / 辅导',
        context: '通过提问和引导而非直接指挥来帮助员工成长',
        example: 'A manager\'s role is shifting more towards coaching than directing.'
      },
      {
        expression: 'accountability',
        meaning: '问责性 / 责任归属',
        context: '个人对工作结果承担责任的程度',
        example: 'Building a culture of accountability starts with clear expectations.'
      },
      {
        expression: 'appraisal',
        meaning: '考核 / 评价',
        context: '对工作价值和表现的正式估量',
        example: 'The annual appraisal process is completed every December.'
      },
      {
        expression: 'milestone',
        meaning: '里程碑',
        context: '个人成长或项目中关键的阶段性成果',
        example: 'Completing the advanced Java certification was a great milestone for you.'
      },
      {
        expression: 'improvement plan (PIP)',
        meaning: '绩效改进计划',
        context: '针对表现严重不达标员工的正式观察计划',
        example: 'If performance doesn\'t improve, we might have to put the employee on a PIP.'
      },
      {
        expression: 'empathy',
        meaning: '同理心',
        context: '理解员工处境和情感的能力',
        example: 'Leading with empathy builds stronger trust during difficult feedback sessions.'
      },
      {
        expression: 'bias',
        meaning: '偏见 / 偏好',
        context: '在评价中可能产生的不公正倾向',
        example: 'We must use data-driven metrics to avoid unconscious bias in reviews.'
      },
      {
        expression: 'self-assessment',
        meaning: '自我评估',
        context: '员工先对自己表现进行的评价',
        example: 'Please complete your self-assessment before our meeting on Friday.'
      },
      {
        expression: 'growth mindset',
        meaning: '成长型思维',
        context: '相信能力可以通过努力而不断提升的观念',
        example: 'Cultivating a growth mindset helps teams embrace difficult feedback.'
      },
      {
        expression: 'one-on-one (1:1)',
        meaning: '一对一谈话',
        context: '管理者与下属之间的定期私下沟通',
        example: 'Our weekly one-on-ones are a good time for real-time feedback.'
      },
      {
        expression: 'recognition',
        meaning: '认可 / 赞赏',
        context: '公开或私下表达对员工工作的肯定',
        example: 'Employee recognition is key to maintaining high morale.'
      },
      {
        expression: 'incentive',
        meaning: '激励 / 奖励机制',
        context: '用于驱动员工表现的物质或非物质奖励',
        example: 'The new incentive program is designed to reward high performers.'
      }
    ],
    sentencePatterns: [
      {
        pattern: "I'd like to highlight your exceptional performance in [Project], specifically how you [Action].",
        meaning: "我想强调你在[项目]中的卓越表现，特别是你如何[动作]的。",
        usage: "具体化、针对性的正面反馈",
        example: "I'd like to highlight your exceptional performance in the launch, specifically how you handled the sudden server issues."
      },
      {
        pattern: "Based on the data, we've noticed a gap in [Skill/Metric], and I want to discuss how we can bridge it.",
        meaning: "根据数据，我们注意到在[技能/指标]方面存在差距，我想讨论一下我们该如何弥补。",
        usage: "用数据支撑建设性批评，降低对抗性",
        example: "Based on the data, we've noticed a gap in the response time, and I want to discuss how we can bridge it together."
      },
      {
        pattern: "When you [Behavior] in the [Situation], it had an [Impact] on the team. Let's look at why that happened.",
        meaning: "当你在[场景]中[行为]时，对团队产生了[影响]。让我们看看为什么会发生这种情况。",
        usage: "使用 SBI 模型进行客观反馈",
        example: "When you missed the deadline in the last sprint, it had an impact on the testing phase. Let's look at why that happened."
      },
      {
        pattern: "What can I do as your manager to better support your growth in [Area]?",
        meaning: "作为你的经理，我能做些什么来更好地支持你在[领域]的成长？",
        usage: "展现支持态度，建立合作伙伴关系",
        example: "What can I do as your manager to better support your growth in leadership skills?"
      },
      {
        pattern: "Let's set a SMART goal for the next quarter: to achieve [Result] by [Date].",
        meaning: "让我们为下季度设定一个 SMART 目标：在[日期]前达成[结果]。",
        usage: "明确目标设定，确保可衡量性",
        example: "Let's set a SMART goal for the next quarter: to achieve a 95% customer satisfaction rate by December 31st."
      },
      {
        pattern: "How do you feel about your own progress recently? I'd love to hear your self-assessment.",
        meaning: "你觉得你最近的进展如何？我很想听听你的自我评估。",
        usage: "引导员工自我反思，增强参与感",
        example: "How do you feel about your own progress on the Project Titan? I'd love to hear your self-assessment."
      },
      {
        pattern: "I see a lot of potential in you for [Higher Role], provided we work on [Requirement].",
        meaning: "我看到你在[更高职位]方面很有潜力，前提是我们要在[要求]上多下功夫。",
        usage: "给出明确的职业晋升诱因与条件",
        example: "I see a lot of potential in you for a Senior PM role, provided we work on your strategic thinking."
      },
      {
        pattern: "I hear your concerns regarding [Issue]. Let's find a middle ground to ensure you feel motivated.",
        meaning: "我听到了你关于[问题]的顾虑。让我们找个折中方案，以确保你感到有动力。",
        usage: "展现同理心并解决员工的后顾之忧",
        example: "I hear your concerns regarding the workload. Let's find a middle ground to ensure you feel motivated and balanced."
      },
      {
        pattern: "To move forward, I need to see a more consistent commitment to [Value/Behavior].",
        meaning: "为了继续前进，我需要看到你在[价值观/行为]上表现出更持久的投入。",
        usage: "在绩效不达标时给出明确的警示或要求",
        example: "To move forward, I need to see a more consistent commitment to our team's communication protocols."
      },
      {
        pattern: "Thank you for the open and honest conversation today. I'm excited about your growth plan.",
        meaning: "感谢今天坦诚而真实的交流。我对你的成长计划感到兴奋。",
        usage: "以积极且具有展望性的方式结束绩效谈话",
        example: "Thank you for the open and honest conversation today. I'm excited about your growth plan and supporting your journey."
      }
    ],
    formalDialogue: {
      title: '正式场景：季度绩效回顾（SBI 模型应用）',
      context: 'Alex 正在与团队成员 Mark 进行季度绩效回顾，Mark 的整体表现不错，但在沟通透明度上仍有提升空间。',
      conversation: [
        {
          speaker: 'Alex',
          text: "Hi Mark, thanks for the self-assessment you sent over. Overall, your technical output this quarter has been exceptional."
        },
        {
          speaker: 'Mark',
          text: "Thanks, Alex. I've really put in the hours to master the new framework."
        },
        {
          speaker: 'Alex',
          text: "It shows. However, I'd like to give you some constructive feedback using the SBI model. During the server migration last week (Situation), you made a configuration change without notifying the rest of the team (Behavior)."
        },
        {
          speaker: 'Mark',
          text: "I thought it was a minor fix, so I just did it to save time."
        },
        {
          speaker: 'Alex',
          text: "I understand the intent, but the impact was that the QA team spent four hours debugging a problem they didn't know existed. It created a lot of unnecessary friction (Impact)."
        },
        {
          speaker: 'Mark',
          text: "I see. I didn't realize it affected them that much. I apologize."
        },
        {
          speaker: 'Alex',
          text: "I appreciate the apology. Moving forward, let's set a SMART goal: 100% of non-emergency changes must be logged in the team channel before execution. What can I do to support you in this?"
        },
        {
          speaker: 'Mark',
          text: "Actually, a quick automated template for the logs would help. I can set that up."
        },
        {
          speaker: 'Alex',
          text: "Great idea. Let's implement that. I'm confident that with this adjustment, your performance will be top-tier."
        }
      ],
      learnableExpressions: [
        {
          expression: "Technical output",
          explanation: "技术产出（量化绩效的常用表达）"
        },
        {
          expression: "SBI model",
          explanation: "绩效评估模型（情境、行为、影响）"
        },
        {
          expression: "Configuration change",
          explanation: "配置更改。"
        },
        {
          expression: "Unnecessary friction",
          explanation: "不必要的摩擦/内耗。"
        },
        {
          expression: "Logged in the team channel",
          explanation: "在团队频道中记录/备案。"
        },
        {
          expression: "Top-tier",
          explanation: "顶尖的/一等的。"
        }
      ],
      analysis: '在这场绩效谈话中，Alex 展示了成熟的管理技巧。他先用“正面激励”（technical output）开场，然后使用 SBI 模型冷静地指出具体错误，避免了对 Mark 人格的攻击。通过将反馈转化为具体的 SMART 目标，并主动询问“如何支持”，他将自己定位为 Mark 成长的伙伴而非审判者。这种方法既解决了问题，又保持了员工的动力。'
    },
    smallTalkDialogue: {
      title: '非正式场景：即时反馈（Real-time Feedback）',
      context: '会议刚刚结束，Alex 走到下属 Leo 身边，对他刚才在会议中的表现进行了一次简短的正面反馈。',
      conversation: [
        {
          speaker: 'Alex',
          text: "Hey Leo, great job in there! I noticed how you handled the CFO's aggressive questions about the budget."
        },
        {
          speaker: 'Leo',
          text: "Thanks, Alex. I was a bit nervous, to be honest."
        },
        {
          speaker: 'Alex',
          text: "You didn't show it. Your data was very solid, and you remained calm. That kind of poise is exactly what we need for the upcoming board meeting."
        },
        {
          speaker: 'Leo',
          text: "That means a lot coming from you. I was worried I might have been too direct."
        },
        {
          speaker: 'Alex',
          text: "Not at all. You were assertive, not aggressive. Keep that energy up. If you need any prep for the next one, let's chat."
        },
        {
          speaker: 'Leo',
          text: "Will do. Thanks for the heads-up, Alex!"
        }
      ],
      learnableExpressions: [
        {
          expression: "Great job in there",
          explanation: "刚才表现得不错！（即时反馈的万能开场）"
        },
        {
          expression: "Poise",
          explanation: "沉着/泰然自若。"
        },
        {
          expression: "Means a lot coming from you",
          explanation: "这话从您嘴里说出来（对我来说）意义重大。"
        },
        {
          expression: "Assertive, not aggressive",
          explanation: "坚定而非具有侵略性（非常高级的职场称赞）"
        },
        {
          expression: "Keep that energy up",
          explanation: "保持那种劲头。"
        }
      ],
      analysis: '即时反馈（Real-time Feedback）是绩效管理中最有效但也最容易被忽视的一环。Alex 抓住了 Leo 表现优异的瞬间给予肯定。这种针对特定行为（poise, solid data）的称赞能让员工明确知道什么是正确的。最后的“提供准备支持”也体现了教练式领导的关怀，能显著提升员工的忠诚度。'
    },
    commonMistakes: [
      {
        wrong: "You are lazy. You need to work harder.",
        better: "I've noticed your output has decreased by 20% this month. Let's discuss the blockers you're facing.",
        explanation: "不要进行人身攻击。描述“客观事实”（output decreased）并询问“障碍”（blockers），引导共同解决问题。"
      },
      {
        wrong: "You did a good job overall. That's it.",
        better: "You did a great job on the Q3 report, especially the detailed competitor analysis which helped us pivot our strategy.",
        explanation: "称赞不要太笼统。具体的称赞（detailed competitor analysis）才具有指导意义，能让员工知道该坚持什么。"
      },
      {
        wrong: "I think everyone likes you.",
        better: "Your peer feedback indicates that the team values your ability to mediate conflicts.",
        explanation: "反馈要基于数据或他人的真实意见。使用 'peer feedback indicates'（同僚反馈显示）比“我觉得”更有说服力。"
      },
      {
        wrong: "We will decide your promotion next year.",
        better: "To be ready for promotion, we need to see you taking ownership of cross-departmental projects in the next six months.",
        explanation: "不要给模糊的承诺。给出具体的“前提条件”（taking ownership）和“时间范围”（next six months），让目标变的可执行。"
      },
      {
        wrong: "Feedback is a waste of time.",
        better: "Regular performance conversations are a strategic tool for individual growth and team success.",
        explanation: "不要表现出对绩效流程的敷衍。将其视为一种“战略工具”（strategic tool），能展现你的专业管理素养。"
      }
    ],
    expressionUpgrades: [
      {
        basic: "I want to talk about your work.",
        better: "I'd like to review your performance metrics.",
        professional: "I've scheduled this session to facilitate a comprehensive review of your contributions and align our expectations for your career trajectory.",
        explanation: "使用 facilitate a comprehensive review（促成全面回顾）和 career trajectory（职业轨迹）展示了作为导师的高度。"
      },
      {
        basic: "You are not doing well.",
        better: "Your performance is currently below the target.",
        professional: "I've identified some performance gaps that need strategic intervention to ensure you remain on track with our core objectives.",
        explanation: "使用 performance gaps（表现差距）和 strategic intervention（战略性干预）显得非常客观、科学，减少了个人情绪冲突。"
      },
      {
        basic: "You are a hard worker.",
        better: "I appreciate your dedication to the team.",
        professional: "Your unwavering commitment to excellence and proactive approach to problem-solving have been instrumental to our success this quarter.",
        explanation: "使用 unwavering commitment（毫不动摇的投入）和 instrumental（起关键作用的）是高阶的职场赞美辞。"
      },
      {
        basic: "Tell me what you want to learn.",
        better: "What are your development goals?",
        professional: "I'd like to explore how we can tailor your upcoming tasks to better align with your long-term professional aspirations and core competencies.",
        explanation: "使用 professional aspirations（职业志向）和 core competencies（核心竞争力）体现了对员工长期利益的深度关怀。"
      },
      {
        basic: "We need to fix this together.",
        better: "Let's find a solution together.",
        professional: "I'm committed to partnering with you to develop a robust growth plan that addresses these challenges while leveraging your unique strengths.",
        explanation: "使用 partnering with you（与你合伙/共进）和 leveraging unique strengths（利用独特优势）是教练式领导的标配语言。"
      }
    ],
    practiceTasks: [
      {
        title: '任务 1：编写正面反馈邮件',
        instruction: '写一封简短邮件给下属，感谢他昨晚临时加班处理了服务器故障。要求：具体描述其行为的影响（如：避免了客户流失）、表达感谢、肯定其责任心。',
        example: 'Hi [Name], thank you for jumping in late last night to fix the server issue. Your quick action prevented a major outage and saved our client relationship. I really appreciate your accountability!'
      },
      {
        title: '任务 2：使用 SBI 模型练习反馈',
        instruction: '场景：一名组员在昨天的部门会议上多次打断别人发言，导致气氛尴尬。请用 SBI（情景、行为、影响）的结构写一段 50 字左右的沟通话术。',
        example: 'During yesterday\'s meeting (S), you interrupted Sarah three times before she finished (B). This made the team feel hesitant to share ideas and slowed our decision-making (I). Let\'s work on active listening.'
      },
      {
        title: '任务 3：录制绩效改进目标设定',
        instruction: '录制一段语音。场景：和一名表现下滑的员工定下季度的 SMART 目标。要求：明确目标（如：销售额增长 10%）、明确时间、询问对方的难处、表达对其潜力的信心。',
        example: 'I appreciate you coming in today — I want this to be a genuine two-way conversation, not just a top-down review. Looking at the data from last quarter, I\'d like us to set a shared target together: a 10% improvement in your sales conversion rate, from 8% to above 9.5%, by the end of Q3. That\'s a realistic but meaningful stretch based on your current pipeline. Before we formalise anything, I really want to ask — what\'s felt most challenging lately? I want to make sure we\'re tackling the root cause, not just the symptoms. I\'ve seen what you\'re capable of, and I\'m fully committed to supporting you in getting there.'
      }
    ],
    saveablePhrases: [
      {
        phrase: "I'd like to highlight your exceptional contribution to [Project] and how it impacted the team.",
        category: "汇报",
        meaning: "我想强调你对[项目]的卓越贡献以及它对团队的影响。"
      },
      {
        phrase: "Based on the data, we've identified a performance gap that I'd like to help you bridge.",
        category: "汇报",
        meaning: "根据数据，我们发现了一个表现差距，我很乐意帮你弥补。"
      },
      {
        phrase: "When you [Behavior] in [Situation], it created a [Impact]. Let's discuss why that happened.",
        category: "Small Talk",
        meaning: "当你在[场景]中[行为]时，产生了[影响]。让我们讨论一下为什么会那样。"
      },
      {
        phrase: "What can I do as your manager to better support your growth and professional aspirations?",
        category: "Small Talk",
        meaning: "作为你的经理，我能做些什么来更好地支持你的成长和职业志向？"
      },
      {
        phrase: "Let's set a SMART goal for the coming quarter: to achieve [Result] by [Date].",
        category: "汇报",
        meaning: "让我们为下个季度设定一个 SMART 目标：在[日期]前达成[结果]。"
      },
      {
        phrase: "I see a lot of potential in you, and I'm committed to partnering with you on your growth plan.",
        category: "Small Talk",
        meaning: "我看到你很有潜力，我承诺在你的成长计划中做你的伙伴。"
      },
      {
        phrase: "I hear your concerns about [Issue]; let's find a middle ground that ensures you stay motivated.",
        category: "Small Talk",
        meaning: "我听到了你关于[问题]的顾虑；让我们找个折中方案，以确保你保持动力。"
      },
      {
        phrase: "Thank you for the transparent self-assessment; it's a great foundation for our conversation today.",
        category: "Small Talk",
        meaning: "感谢你透明的自我评估；这为我们今天的谈话打下了很好的基础。"
      }
    ],
    resources: [
      {
        name: 'HBS Online — 8 Essential Leadership Communication Skills',
        type: 'leadership article',
        description: '战略汇报、利益相关方更新、管理沟通',
        why: '适合学习管理者如何建立 trust、align efforts、adapt communication style、listen actively 和 communicate with clarity。',
        url: 'https://online.hbs.edu/blog/post/leadership-communication'
      },
      {
        name: 'HBS Online — How to Give Feedback Effectively',
        type: 'leadership article',
        description: '反馈与建设性批评、绩效沟通、1:1 沟通',
        why: '适合学习 constructive feedback、empathy、specific examples 和 improvement-focused language。',
        url: 'https://online.hbs.edu/blog/post/how-to-give-feedback-effectively'
      },
      {
        name: 'HBS Online — How to Delegate Effectively',
        type: 'leadership article',
        description: '授权与任务分配、期望管理、团队协作',
        why: '适合学习如何说明 desired outcome、expectation、timeline、resources、authority 和 check-in structure。',
        url: 'https://online.hbs.edu/blog/post/how-to-delegate-effectively'
      },
      {
        name: 'HBS Online — Navigate Difficult Conversations with Employees',
        type: 'leadership article',
        description: '棘手对话、绩效沟通、冲突处理',
        why: '适合学习 trust-building、active listening、difficult conversation structure，以及如何在管理沟通中保持清楚和尊重。',
        url: 'https://online.hbs.edu/blog/post/how-to-have-difficult-conversations-with-employees'
      },
      {
        name: 'Harvard Business Publishing — How to Communicate for Impact',
        type: 'leadership article / video',
        description: '利益相关方更新、战略与决策汇报、高层沟通',
        why: '适合学习 senior update、executive summary、decision briefing 和 high-impact communication。',
        url: 'https://www.harvardbusiness.org/insight/how-to-communicate-for-impact/'
      },
      {
        name: 'MindTools — What Is Stakeholder Management?',
        type: 'management article',
        description: '利益相关方更新、期望管理、战略与决策汇报',
        why: '解释 stakeholder management 的核心：识别关键相关方，并用合适的方式沟通、维持关系和获得支持。很适合 alignment、expectation management 和 stakeholder communication 内容。',
        url: 'https://www.mindtools.com/at2o1co/what-is-stakeholder-management/'
      }
    ]
  },
  // Unit 24: 战略决策与汇报 / Strategy & Decision
  'm6': {
    id: 'm6',
    title: '战略决策与汇报',
    englishTitle: 'Strategy & Decision',
    level: 'C1',
    objectives: [
      '掌握向高管或董事会进行“自上而下”（Top-down）汇报的逻辑框架',
      '学会如何在汇报中进行情景分析（Scenario Analysis）并提供多套备选方案',
      '学习如何利用数据支撑长期的战略决策，并解释其背后的风险权衡',
      '掌握在面临尖锐质询时，保持冷静并引导谈话回到核心决策点的技巧',
      '学会撰写精炼的决策建议书（Decision Memorandum）及项目复盘报告'
    ],
    scenarios: [
      '向执行委员会（Steering Committee）提交明年的部门扩招计划与预算',
      '面对竞争对手的突发行动，向管理层提议临时的战略转向（Pivot）',
      '主持一个关于是否进入新市场或开发新产品的决策闭门会',
      '在项目失败后进行正式的复盘汇报（Post-mortem），分析原因并提出改进',
      '向投资人或高层利益相关方解释项目的长期投资回报率（ROI）预测',
      '当两个高优先级项目发生资源冲突时，提请管理层进行决策裁定',
      '在全公司范围内推广一种新的工作流程或数字化转型战略'
    ],
    vocabulary: [
      {
        expression: 'strategic alignment',
        meaning: '战略对齐',
        context: '确保决策与公司的长期愿景和目标一致',
        example: 'Every decision we make must ensure strategic alignment with our core mission.'
      },
      {
        expression: 'scenario analysis',
        meaning: '情景分析',
        context: '考虑不同假设下的多种可能结果',
        example: 'We performed a thorough scenario analysis to prepare for market volatility.'
      },
      {
        expression: 'mitigate risks',
        meaning: '缓解风险',
        context: '采取行动减少潜在损失的可能性或严重程度',
        example: 'Our primary goal is to mitigate risks while maximizing growth potential.'
      },
      {
        expression: 'ROI (Return on Investment)',
        meaning: '投资回报率',
        context: '衡量决策带来的经济效益',
        example: 'We expect a positive ROI within the first 18 months of the rollout.'
      },
      {
        expression: 'decision-making framework',
        meaning: '决策框架',
        context: '一套逻辑化的系统，用于评估和选择方案',
        example: 'Using a data-driven decision-making framework reduces bias.'
      },
      {
        expression: 'trade-off',
        meaning: '权衡 / 取舍',
        context: '在不同优点或缺点之间寻找平衡点',
        example: 'Managing a project involves making constant trade-offs between speed and cost.'
      },
      {
        expression: 'pivot',
        meaning: '（战略性）转向',
        context: '由于外部环境变化，彻底改变原本的路线',
        example: 'The startup decided to pivot from B2C to B2B after the first pilot.'
      },
      {
        expression: 'post-mortem / retrospective',
        meaning: '复盘 / 事后总结',
        context: '在项目结束后分析得失的过程',
        example: 'Let\'s schedule a post-mortem to discuss why the launch was delayed.'
      },
      {
        expression: 'scaling / scalability',
        meaning: '扩张 / 可扩展性',
        context: '业务或系统在压力下增长的能力',
        example: 'Scalability is a critical factor in our choice of infrastructure.'
      },
      {
        expression: 'stakeholder buy-in',
        meaning: '利益相关方认可',
        context: '获得核心人物对战略决策的支持',
        example: 'Getting stakeholder buy-in early on saved us months of debate.'
      },
      {
        expression: 'disruption',
        meaning: '颠覆',
        context: '对现有行业格局的重大改变',
        example: 'We need a strategy that prepares us for potential disruption from AI.'
      },
      {
        expression: 'competitive advantage',
        meaning: '竞争优势',
        context: '使组织优于对手的独特属性',
        example: 'Our deep proprietary data is our greatest competitive advantage.'
      },
      {
        expression: 'resource allocation',
        meaning: '资源分配',
        context: '对人力、财力的战略性部署',
        example: 'Effective resource allocation is the engine of strategic execution.'
      },
      {
        expression: 'KPI (Key Performance Indicator)',
        meaning: '关键绩效指标',
        context: '用于衡量战略达成情况的指标',
        example: 'We have defined three primary KPIs to track our global expansion.'
      },
      {
        expression: 'value proposition',
        meaning: '价值主张',
        context: '向市场或管理层解释为什么这个决策有意义',
        example: 'A strong value proposition is essential for any internal funding request.'
      },
      {
        expression: 'benchmarking',
        meaning: '基准测试',
        context: '将自己的表现与行业顶尖水平进行对比',
        example: 'Benchmarking against our competitors shows we have a gap in mobile speed.'
      },
      {
        expression: 'long-term trajectory',
        meaning: '长期轨迹',
        context: '对未来数年走向的宏观预测',
        example: 'This decision will define our long-term trajectory for the next decade.'
      },
      {
        expression: 'high-stakes',
        meaning: '高风险的 / 赌注很高的',
        context: '涉及重大利益且不确定性强的决策',
        example: 'Negotiating with a global partner is always a high-stakes scenario.'
      },
      {
        expression: 'consensus-driven',
        meaning: '共识驱动的',
        context: '通过全员达成一致来做出决定的方式',
        example: 'Our culture is consensus-driven, which ensures broad buy-in but takes time.'
      },
      {
        expression: 'feasibility study',
        meaning: '可行性研究',
        context: '在做决策前对方案成败可能性的调查',
        example: 'We need a proper feasibility study before we invest in the new warehouse.'
      }
    ],
    sentencePatterns: [
      {
        pattern: "To maintain our competitive advantage, I recommend a strategic shift toward [Topic].",
        meaning: "为了保持我们的竞争优势，我建议向[话题]进行战略转向。",
        usage: "在汇报中提出高层建议",
        example: "To maintain our competitive advantage, I recommend a strategic shift toward cloud-native architecture."
      },
      {
        pattern: "We have analyzed three possible scenarios: Option A, B, and C. Here is the risk-benefit breakdown.",
        meaning: "我们分析了三种可能的情景：A、B 和 C。这是风险与收益的解析。",
        usage: "进行多方案的情景分析",
        example: "We have analyzed three possible scenarios for the launch date: early, scheduled, and delayed. Here is the risk-benefit breakdown."
      },
      {
        pattern: "Based on our current trajectory, if we don't [Action], we risk falling behind the market benchmark.",
        meaning: "基于我们目前的轨迹，如果我们不[行动]，我们将面临落后于市场基准的风险。",
        usage: "通过后果分析（Consequence Analysis）推动决策",
        example: "Based on our current trajectory, if we don't invest in mobile AI now, we risk falling behind the market benchmark by 2026."
      },
      {
        pattern: "The primary trade-off we are facing here is between [Factor 1] and [Factor 2].",
        meaning: "我们目前面临的主要权衡是在[因素 1]和[因素 2]之间。",
        usage: "清晰揭示决策的难点与代价",
        example: "The primary trade-off we are facing here is between aggressive growth and short-term profitability."
      },
      {
        pattern: "This decision is fully aligned with our overarching goal of [Company Mission].",
        meaning: "这一决策与我们[公司使命]的全局目标完全一致。",
        usage: "强调决策的合规性与战略高度",
        example: "This decision to acquire the startup is fully aligned with our overarching goal of becoming the leader in renewable energy."
      },
      {
        pattern: "I'd like to draw your attention to the projected ROI over the next three fiscal years.",
        meaning: "我想请各位关注未来三个财年的预期投资回报率（ROI）。",
        usage: "用财务数据打动高级决策层",
        example: "I'd like to draw your attention to the projected ROI of 25% over the next three fiscal years."
      },
      {
        pattern: "How does this proposed change mitigate the risks we identified in the last quarter?",
        meaning: "这项提议的变更如何缓解我们上季度识别出的风险？",
        usage: "在汇报中主动回应之前的关注点",
        example: "How does this proposed change mitigate the security risks we identified in the last audit?"
      },
      {
        pattern: "To summarize, our recommended action item is [Action], and we need [Resource/Approval] to proceed.",
        meaning: "总结一下，我们建议的行动项是[行动]，我们需要[资源/审批]以继续进行。",
        usage: "以极简的总结结束汇报并引导决策",
        example: "To summarize, our recommended action item is a phased global rollout, and we need a 15% budget increase to proceed."
      },
      {
        pattern: "I welcome your feedback and challenge on the assumptions behind these projections.",
        meaning: "我欢迎各位对这些预测背后的假设提出反馈和挑战。",
        usage: "展现自信，邀请高层进行深度的“智力博弈”",
        example: "I welcome your challenge on the market growth assumptions behind these projections."
      },
      {
        pattern: "Thank you for the strategic guidance. We will move forward with the agreed-upon pivot.",
        meaning: "感谢各位的战略指导。我们将按照商定好的转向计划继续前进。",
        usage: "确认决策结果并表达后续执行力",
        example: "Thank you for the strategic guidance today. We will move forward with the agreed-upon digital transformation pivot."
      }
    ],
    formalDialogue: {
      title: '正式场景：向董事会汇报战略转向建议',
      context: 'Alex 作为 CTO，需要向公司高管和董事会解释为什么公司应该放弃一个运营三年的旧产品，转而投入新兴的 AI 领域。',
      conversation: [
        {
          speaker: 'Alex',
          text: "Good morning. Today, I'm proposing a strategic pivot. Based on our scenario analysis, our current product line will reach a plateau within 18 months."
        },
        {
          speaker: 'Chairman',
          text: "That's a bold claim, Alex. We've invested millions in that platform. Why change now?"
        },
        {
          speaker: 'Alex',
          text: "I understand the historical investment. However, to maintain our competitive advantage, we must look at the long-term trajectory. If we don't shift toward AI-native services now, we risk total disruption by smaller, more agile competitors."
        },
        {
          speaker: 'CEO',
          text: "What's the primary trade-off? If we pivot, what do we lose?"
        },
        {
          speaker: 'Alex',
          text: "The main trade-off is short-term revenue stability. We will need to reallocate 40% of our R&D budget. However, the projected ROI for the new AI suite is double that of our current offerings over a three-year period."
        },
        {
          speaker: 'Chairman',
          text: "And the risks? How do we mitigate them?"
        },
        {
          speaker: 'Alex',
          text: "We've developed a phased roadmap. We won't shut down the old platform overnight; we'll transition our legacy users gradually. This minimizes churn while maximizing our pioneering impact in the new market."
        },
        {
          speaker: 'CEO',
          text: "It's a high-stakes move, but the data is compelling. Let's move forward with a feasibility study for Phase 1."
        }
      ],
      learnableExpressions: [
        {
          expression: "Bold claim",
          explanation: "大胆的断言/主张。"
        },
        {
          expression: "Historical investment",
          explanation: "历史投入（对应经济学中的‘沉没成本’概念）"
        },
        {
          expression: "Long-term trajectory",
          explanation: "长期轨迹。"
        },
        {
          expression: "AI-native services",
          explanation: "AI 原生服务。"
        },
        {
          expression: "Churn",
          explanation: "（客户）流失。"
        },
        {
          expression: "Compelling data",
          explanation: "极具说服力的数据。"
        }
      ],
      analysis: '在这场极高难度的汇报中，Alex 展现了顶尖的“战略沟通”能力：1. 坦诚面对“沉没成本”（historical investment），但坚持“长期视角”（long-term trajectory）；2. 清晰揭示“权衡”（trade-off），不回避短期的收入损失；3. 用数据支撑“愿景”（projected ROI）；4. 提供务实的风险对策（phased roadmap）。他不仅仅是报告情况，更是在引导一场关于公司生存的深度博弈。'
    },
    smallTalkDialogue: {
      title: '非正式场景：决策会后的非正式共识达成',
      context: '在决定性的会议结束后，Alex 在停车场遇到了刚才投了赞成票的 CEO Sarah。',
      conversation: [
        {
          speaker: 'Alex',
          text: "Hi Sarah! Thanks for the sign-off today. I know it wasn't an easy decision for the committee."
        },
        {
          speaker: 'Sarah',
          text: "You're welcome, Alex. Your presentation was very structured. That risk-benefit breakdown really helped us see the big picture."
        },
        {
          speaker: 'Alex',
          text: "Glad to hear that. I wanted to ensure there were no surprises regarding the resource allocation."
        },
        {
          speaker: 'Sarah',
          text: "The board was impressed by your transparency about the potential downside. It builds a lot of trust."
        },
        {
          speaker: 'Alex',
          text: "I appreciate that. I'm already meeting with the engineering leads tomorrow to kick off the feasibility study. We won't lose any momentum."
        },
        {
          speaker: 'Sarah',
          text: "Great. Keep that energy up. We're counting on your leadership for this pivot."
        }
      ],
      learnableExpressions: [
        {
          expression: "Sign-off",
          explanation: "签字认可/正式批准。"
        },
        {
          expression: "Risk-benefit breakdown",
          explanation: "风险与收益的详细解析。"
        },
        {
          expression: "No surprises",
          explanation: "没有任何意外/惊吓。"
        },
        {
          expression: "Potential downside",
          explanation: "潜在的负面风险/下行压力。"
        },
        {
          expression: "Lose any momentum",
          explanation: "失去势头/进度停滞。"
        }
      ],
      analysis: '汇报后的非正式沟通同样重要。Alex 及时表达了感谢，并重申了“透明度”（transparency）的重要性，这进一步巩固了 CEO 对他的信任。同时，他通过告知明天的“具体动作”（meeting engineering leads），展现了极强的执行力，让决策层感到这个高风险决定是掌握在可靠的人手中的。'
    },
    commonMistakes: [
      {
        wrong: "I think we should do this because I have a feeling.",
        better: "Based on our scenario analysis and market benchmarking, I recommend [Action].",
        explanation: "高层决策不能靠“直觉”。必须基于“情景分析”（scenario analysis）和“基准对比”（benchmarking）。"
      },
      {
        wrong: "The plan is 100% safe. No risks.",
        better: "While this is our recommended path, we have identified several risks and developed corresponding mitigation plans.",
        explanation: "不要说“绝对安全”。高级决策者知道任何战略都有风险，展示你的“缓解计划”（mitigation plans）反而显得更靠谱。"
      },
      {
        wrong: "It's too complicated to explain the data.",
        better: "Let's look at the high-level trajectory; the underlying data is available in the appendix for your review.",
        explanation: "不要说“太复杂”。提供“高层级轨迹”（high-level trajectory）并在“附录”（appendix）准备好细节数据。"
      },
      {
        wrong: "Just give me the money, I will handle it.",
        better: "I'm seeking your sign-off on the resource allocation to ensure strategic alignment for the upcoming fiscal year.",
        explanation: "不要像要钱一样。这是在请求“资源分配”的“正式批准”（sign-off），目的是为了“战略对齐”。"
      },
      {
        wrong: "The competitor is bad.",
        better: "The competitor's recent moves represent a significant disruption that requires us to pivot our current roadmap.",
        explanation: "不要贬低对手。客观描述其“颠覆性”（disruption）并以此作为己方“转向”（pivot）的动力。"
      }
    ],
    expressionUpgrades: [
      {
        basic: "The plan is to change the direction.",
        better: "We are proposing a strategic pivot.",
        professional: "We are initiating a comprehensive strategic realignment to capitalize on emerging market opportunities and mitigate long-term systemic risks.",
        explanation: "使用 strategic realignment（战略重新对齐）和 capitalize on opportunities（利用机会）显得极其专业且具有前瞻性。"
      },
      {
        basic: "We will make more money.",
        better: "The project will have a high ROI.",
        professional: "Our financial modeling indicates a significant upside potential, with a projected ROI that substantially outperforms our internal hurdle rate.",
        explanation: "使用 financial modeling（财务建模）、upside potential（上升空间）和 hurdle rate（最低预期回报率）是投行级别的专业术语。"
      },
      {
        basic: "We need to choose between two things.",
        better: "We are facing a difficult trade-off.",
        professional: "We have reached a critical juncture where we must facilitate a strategic trade-off between near-term cash flow and long-term market dominance.",
        explanation: "使用 critical juncture（关键关头）和 market dominance（市场主导地位）将决策的严重性和重要性凸显出来。"
      },
      {
        basic: "The project failed, let's learn.",
        better: "We are conducting a post-mortem to learn from the project.",
        professional: "We are performing a rigorous retrospective to deconstruct the root causes of the deviation from our initial milestones and optimize our future execution.",
        explanation: "使用 rigorous retrospective（严谨的复盘）和 deconstruct root causes（解构根本原因）体现了对失败的理性分析和负责任态度。"
      },
      {
        basic: "This is a big change for the company.",
        better: "This is a major strategic transformation.",
        professional: "This initiative represents a fundamental paradigm shift in our operational model, designed to ensure future-proof scalability.",
        explanation: "使用 paradigm shift（范式转移）和 future-proof scalability（面向未来的可扩展性）是最高阶的愿景构建语言。"
      }
    ],
    practiceTasks: [
      {
        title: '任务 1：撰写决策备忘录摘要',
        instruction: '写一段 100 字左右的决策建议摘要。内容：提议进入东南亚市场、原因（当地增长率 30%）、风险（法律合规）、以及缓解措施（与当地律所合作）。',
        example: 'Recommendation: Strategic expansion into the SE Asian market. Rationale: 30% YoY growth in digital services. Key Risk: Complex local compliance. Mitigation: Partner with a top-tier local legal firm to ensure full regulatory alignment.'
      },
      {
        title: '任务 2：练习情景分析汇报',
        instruction: '场景：项目超支了。请写出三个情景（Scenario）：\n1. 继续投入（追加 20% 预算，按时完成）\n2. 削减功能（不加钱，按时完成，但功能少）\n3. 延期（不加钱，三个月后全功能上线）',
        example: 'Scenario A: Aggressive completion (Add 20% budget, stay on track). Scenario B: Scaled-back MVP (Fixed budget, reduced scope, stay on track). Scenario C: Delayed full launch (Fixed budget, full scope, 3-month delay).'
      },
      {
        title: '任务 3：录制尖锐质询应对',
        instruction: '录制一段语音。场景：老板问：“如果这个 AI 项目失败了，我们要损失一千万，你拿什么保证成功？”要求：承认高风险、重申长期收益、强调风险缓解措施和阶段性止损点。',
        example: 'That\'s exactly the right question to pressure-test, and I respect the directness. You\'re right — this is a significant investment and the risk is real. I won\'t minimise that. What I can tell you is that we\'ve built a phased approach with explicit go/no-go checkpoints at the 90-day and 180-day marks, which limits our maximum exposure to roughly 30% of the total budget before we validate core assumptions. We\'ve also secured three paying pilot customers who have agreed to co-develop with us, which substantially de-risks the demand side. I\'m committed to fortnightly transparent progress reporting so there are no surprises. My goal isn\'t just success — it\'s accountable, measurable success at every stage.'
      }
    ],
    saveablePhrases: [
      {
        phrase: "To maintain our competitive advantage, we recommend a strategic pivot toward [Topic].",
        category: "汇报",
        meaning: "为了保持我们的竞争优势，我们建议向[话题]进行战略转向。"
      },
      {
        phrase: "We've analyzed three possible scenarios: each carries its own set of risks and rewards.",
        category: "汇报",
        meaning: "我们分析了三种可能的情景：每种都有其自身的风险和回报。"
      },
      {
        phrase: "The primary trade-off we are facing is between immediate revenue and long-term scalability.",
        category: "汇报",
        meaning: "我们目前面临的主要权衡是在即时收入和长期可扩展性之间。"
      },
      {
        phrase: "I'd like to draw your attention to the projected ROI which substantially outperforms the benchmark.",
        category: "汇报",
        meaning: "我想请各位关注一下预期投资回报率，它显著优于行业基准。"
      },
      {
        phrase: "We've developed a robust mitigation plan to ensure our primary milestones remain intact.",
        category: "汇报",
        meaning: "我们已经制定了一套稳健的缓解计划，以确保我们的主要里程碑保持不变。"
      },
      {
        phrase: "This decision is fully aligned with our overarching mission and future-proof strategy.",
        category: "汇报",
        meaning: "这一决策与我们的全局使命和面向未来的战略完全一致。"
      },
      {
        phrase: "Thank you for the strategic guidance; we will move forward with the agreed-upon roadmap.",
        category: "Small Talk",
        meaning: "感谢各位的战略指导；我们将按照商定好的路线图继续前进。"
      },
      {
        phrase: "I welcome your challenge on the market assumptions behind these financial projections.",
        category: "Small Talk",
        meaning: "我欢迎各位对这些财务预测背后的市场假设提出质疑。"
      }
    ],
    resources: [
      {
        name: 'HBS Online — 8 Essential Leadership Communication Skills',
        type: 'leadership article',
        description: '战略汇报、利益相关方更新、管理沟通',
        why: '适合学习管理者如何建立 trust、align efforts、adapt communication style、listen actively 和 communicate with clarity。',
        url: 'https://online.hbs.edu/blog/post/leadership-communication'
      },
      {
        name: 'HBS Online — How to Give Feedback Effectively',
        type: 'leadership article',
        description: '反馈与建设性批评、绩效沟通、1:1 沟通',
        why: '适合学习 constructive feedback、empathy、specific examples 和 improvement-focused language。',
        url: 'https://online.hbs.edu/blog/post/how-to-give-feedback-effectively'
      },
      {
        name: 'HBS Online — How to Delegate Effectively',
        type: 'leadership article',
        description: '授权与任务分配、期望管理、团队协作',
        why: '适合学习如何说明 desired outcome、expectation、timeline、resources、authority 和 check-in structure。',
        url: 'https://online.hbs.edu/blog/post/how-to-delegate-effectively'
      },
      {
        name: 'HBS Online — Navigate Difficult Conversations with Employees',
        type: 'leadership article',
        description: '棘手对话、绩效沟通、冲突处理',
        why: '适合学习 trust-building、active listening、difficult conversation structure，以及如何在管理沟通中保持清楚和尊重。',
        url: 'https://online.hbs.edu/blog/post/how-to-have-difficult-conversations-with-employees'
      },
      {
        name: 'Harvard Business Publishing — How to Communicate for Impact',
        type: 'leadership article / video',
        description: '利益相关方更新、战略与决策汇报、高层沟通',
        why: '适合学习 senior update、executive summary、decision briefing 和 high-impact communication。',
        url: 'https://www.harvardbusiness.org/insight/how-to-communicate-for-impact/'
      },
      {
        name: 'MindTools — What Is Stakeholder Management?',
        type: 'management article',
        description: '利益相关方更新、期望管理、战略与决策汇报',
        why: '解释 stakeholder management 的核心：识别关键相关方，并用合适的方式沟通、维持关系和获得支持。很适合 alignment、expectation management 和 stakeholder communication 内容。',
        url: 'https://www.mindtools.com/at2o1co/what-is-stakeholder-management/'
      }
    ]
  }
};
