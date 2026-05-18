import { Rocket, GraduationCap, TrendingUp, Users } from 'lucide-react';

export const pathData: Record<string, any> = {
  'job-seeker': {
    id: 'job-seeker',
    title: '求职路径',
    englishTitle: 'Prepare for a Job',
    level: 'B1-B2',
    icon: Rocket,
    description: '聚焦招聘广告、投递、面试与录用沟通。适合准备实习、校招、跳槽的用户。',
    target: '在校生、应届生、转行求职者',
    focus: '职位描述与招聘流程、简历与求职信、面试问答与跟进邮件、录用与入职前沟通',
    units: [
      { id: 'u1', title: '工作与职位', english: 'Work and Jobs', duration: '50-70 分钟', focus: ['job title', 'role', 'responsibility', 'internship'] },
      { id: 'u2', title: '招聘与选拔', english: 'Recruitment and Selection', duration: '50-70 分钟', focus: ['apply for a job', 'job posting', 'interview process', 'offer'] },
      { id: 'u3', title: '技能与资质', english: 'Skills and Qualifications', duration: '50-70 分钟', focus: ['transferable skills', 'qualification', 'relevant experience'] },
      { id: 'u4', title: '简历与求职信', english: 'CVs and Cover Letters', duration: '50-70 分钟', focus: ['action verbs', 'professional summary', 'cover letter tone'] },
      { id: 'u5', title: '面试语言', english: 'Interview Language', duration: '50-70 分钟', focus: ['tell me about yourself', 'strengths and weaknesses', 'STAR method'] },
      { id: 'u6', title: '录用与跟进', english: 'Job Offer and Follow-Up', duration: '50-70 分钟', focus: ['thank-you email', 'follow-up email', 'negotiation basics'] },
    ]
  },
  'newcomer': {
    id: 'newcomer',
    title: '职场新人路径',
    englishTitle: 'Start Your First Workplace Role',
    level: 'B1',
    icon: GraduationCap,
    description: '入职、请教、日程周报、基础会议与邮件礼仪。',
    target: '入职 0-1 年新人',
    focus: '入职融入、礼貌请求、工作汇报、会议发言',
    units: [
      { id: 'n1', title: '入职第一天', english: 'Onboarding & First Day', duration: '50-70 分钟', focus: ['first day', 'office tour', 'introductions', 'IT setup'] },
      { id: 'n2', title: '团队自我介绍', english: 'Introducing Yourself', duration: '50-70 分钟', focus: ['self-introduction', 'elevator pitch', 'team lunch', 'background'] },
      { id: 'n3', title: '了解团队流程', english: 'Workflow & Process', duration: '50-70 分钟', focus: ['how we work', 'daily stand-up', 'Slack etiquette', 'Jira basics'] },
      { id: 'n4', title: '工作场所设置', english: 'Tech & HR Setup', duration: '50-70 分钟', focus: ['help desk', 'benefits', 'insurance', 'payroll'] },
      { id: 'n5', title: '经理同步会议', english: 'First Week Sync', duration: '50-70 分钟', focus: ['manager sync', 'one-on-one', 'clarifying goals', 'feedback'] },
      { id: 'n6', title: '企业文化与价值观', english: 'Culture & Values', duration: '50-70 分钟', focus: ['core values', 'mission', 'social events', 'etiquette'] },
    ]
  },
  'communicator': {
    id: 'communicator',
    title: '职场沟通进阶',
    englishTitle: 'Communicate Better at Work',
    level: 'B2',
    icon: TrendingUp,
    description: '跨部门协作、客户沟通、演示与棘手对话。',
    target: '有基础、希望提升专业度的职场人',
    focus: '会议主导、跨团队沟通、客户维护、演示技巧',
    units: [
      { id: 'c1', title: '高效会议主导', english: 'Running Meetings', duration: '50-70 分钟', focus: ['agenda', 'facilitation', 'follow-up', 'consensus'] },
      { id: 'c2', title: '跨部门协作', english: 'Cross-Team Collaboration', duration: '50-70 分钟', focus: ['alignment', 'shared goals', 'silos', 'cooperation'] },
      { id: 'c3', title: '专业邮件与通讯', english: 'Emails & IM', duration: '50-70 分钟', focus: ['professional tone', 'conciseness', 'CC etiquette', 'urgent matters'] },
      { id: 'c4', title: '演示与汇报技巧', english: 'Presentations', duration: '50-70 分钟', focus: ['visual aids', 'storytelling', 'Q&A', 'data presentation'] },
      { id: 'c5', title: '应对棘手对话', english: 'Difficult Conversations', duration: '50-70 分钟', focus: ['conflict resolution', 'bad news', 'negotiation', 'assertiveness'] },
      { id: 'c6', title: '跨文化沟通', english: 'Intercultural Communication', duration: '50-70 分钟', focus: ['cultural nuances', 'global teams', 'indirect communication', 'idioms'] },
    ]
  },
  'manager': {
    id: 'manager',
    title: '管理者路径',
    englishTitle: 'Grow into a Manager',
    level: 'B2-C1',
    icon: Users,
    description: '反馈、授权、绩效沟通与高层汇报。',
    target: 'Team Lead / 经理',
    focus: '建设性反馈、授权管理、Stakeholder 更新、战略汇报',
    units: [
      { id: 'm1', title: '领导力与愿景', english: 'Leadership & Vision', duration: '50-70 分钟', focus: ['inspiring teams', 'mission statement', 'values alignment', 'setting tone'] },
      { id: 'm2', title: '授权与团队赋能', english: 'Delegating', duration: '50-70 分钟', focus: ['effective delegation', 'autonomy', 'accountability', 'trust'] },
      { id: 'm3', title: '利益相关者管理', english: 'Stakeholder Management', duration: '50-70 分钟', focus: ['managing up', 'influencing', 'status updates', 'buy-in'] },
      { id: 'm4', title: '项目更新与风险汇报', english: 'Updates & Risks', duration: '50-70 分钟', focus: ['risk mitigation', 'executive summaries', 'milestones', 'course correction'] },
      { id: 'm5', title: '绩效评估与辅导', english: 'Performance & Coaching', duration: '50-70 分钟', focus: ['constructive feedback', 'career growth', 'coaching models', 'ratings'] },
      { id: 'm6', title: '战略决策与汇报', english: 'Strategy & Decision', duration: '50-70 分钟', focus: ['strategic roadmap', 'resource allocation', 'quarterly planning', 'executive brief'] },
    ]
  }
};
