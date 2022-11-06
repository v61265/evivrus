const wording = {
  signUpLink: 'https://www.facebook.com/tetsuya.terao2',
  headerList: [
    {
      title: '面試課程',
      href: 'interview',
      isActive: false,
    },
    {
      title: '國高中生APCS初學課程',
      href: 'apcs',
      isActive: true,
      content: [
        { title: '什麼是APCS?', href: 'introduction' },
        { title: '課程方案', href: 'plan' },
        { title: '教學特色', href: 'feature' },
        { title: '進行方式', href: 'step' },
        { title: '寺尾老師學經歷', href: 'experience' },
        { title: 'Q&A', href: 'qa' },
      ],
    },
  ],
  intro: {
    title: '什麼是 APCS ?',
    description:
      'APCS 為 Advanced Placement Computer Science 的英文縮寫，是指「大學程式設計先修檢測」。',
    subtitle: 'APCS 成績可用於大學申請入學。',
    paragraph: [
      {
        description:
          '110 學年度計 95 個名額，有 31 所大學 38 校系（國立 18 校/ 21系/ 51名、私立 13校/ 17系/ 44名）參與，包括**台大、清大、交大、成大的資工系**，皆有參與其中。',
        button: {
          name: '更多校系詳見',
          href: '',
        },
      },
      {
        description:
          'APCS 成績除了是申請入學 APCS 組必要成績外，也是多校特殊選才等多元入學管道重要參考資料',
        button: {
          name: '了解更多',
          href: '',
        },
      },
    ],
  },
  plans: [
    {
      title: '第一階段',
      content: [
        '熟悉 C/C++ 語法，打底程式基礎能力。',
        '以 APCS 觀念題 5 級分，實作題 3 級分為目標。',
        '約 10 - 15 堂課（一堂課兩小時）。',
        '每堂課後需花二至四小時練習客製化的作業。',
      ],
    },
    {
      title: '第二階段',
      content: [
        '學習基礎演算法、資料結構，強化實作能力。',
        '以  APCS 觀念題 5 級分，實作題 5 級分。',
        '約 10 - 15 堂課（一堂課兩小時）。',
        '每堂課後需花二至四小時練習客製化的作業。',
      ],
    },
  ],
  planHint: '已經有學過程式的學生，歡迎直接和老師洽談需求，擬定專屬的課程規劃',
  charging: [2000, '元/小時'],
  features: [
    {
      colorList: ['#FFA8A1', '#FFD8B1', '#E9E9E9', '#CAD5D7'],
      content: [
        {
          title: ['一對一指導', '完全客製化的教材'],
          description: [
            '每次上課的教材、回家作業，皆是老師針對個別學生設計的，對於學生的弱點、盲點加強，才能達到最佳的學習效果',
          ],
        },
        {
          title: ['豐富的課堂練習', '與回家作業'],
          description: [
            '學習程式就像學游泳或騎腳踏車，最重要的是練習！練習！練習！唯有親自動手做，才能真正習得這門技藝。本課程秉持著 Learn by doing 的精神，設計豐富的課堂即時練習和回家作業，讓學生的程式能力絕不流於紙上談兵',
          ],
        },
        {
          title: ['講人話'],
          description: [
            '「講人話」是寺尾老師的專長。擁有十位學生以上程式家教的經驗，寺尾老師深知初學者學習 C/C++ 會遇到的困難、容易犯的錯誤，因此能夠用最清晰、對症下藥的方式，讓學生徹底理解並克服。',
          ],
        },
        {
          title: ['全線上教學'],
          description: [
            '完全線上教學，自動化的作業練習與批改系統，不怕疫情攪局',
          ],
        },
      ],
    },
  ],
  steps: [
    {
      // 此處圖片路徑放在 ./public 資料夾下方
      coverList: {
        mobile: '/asstes/steps-cover-apcs.png',
        desktop: '/asstes/steps-cover-apcs-desktop.png',
      },
      steps: [
        {
          title: '01',
          content:
            '聯絡我們，安排 30 分鐘免費試聽，讓老師了解學生目前的程度和需求，也讓學生了解老師的教學方式。',
        },
        {
          title: '02',
          content:
            '老師根據學生的程度和需求設計課程。若有時間上或預算上的限制，可以一併討論。',
        },
        {
          title: '03',
          content: '付費並開始上課！',
        },
      ],
    },
  ],
  resume: [
    {
      name: '成績',
      title: '台大資工系畢業名次 Top 5%，書卷獎三次',
    },
    {
      name: '學歷',
      title: [
        'Carnegie Mellon University',
        '軟體工程碩士',
        '台大資工系學士（b95）',
      ],
    },
    {
      name: '經歷',
      title: [
        'Google 工程師',
        '東京，2019 - 2021',
        '台北，2015 - 2019',
        '加州 Mountain View，2013 - 2015',
        '.',
        '在 Google 內執行過 50 場以上的面試',
      ],
    },
  ],
  qaList: [
    {
      question: '要上這個課程之前，有什麼先決條件嗎？',
      answer:
        '學生需要有一點英文基礎，大約是「可以透過查字典看懂編譯器錯誤訊息」的程度',
    },
    {
      question: '完全沒學過程式可以上嗎？',
      answer: '沒問題！本課程就是設計給零基礎的初學者喔。',
    },
    {
      question: '已經有學過一些程式了，還適合這個課程嗎？',
      answer: '可以直接和老師洽談需求，老師會幫您規劃專屬的課程喔。',
    },
    {
      question: '有實體課嗎？',
      answer: '本課程是完全線上的，沒有實體課喔。',
    },
    {
      question: '價格多少？',
      answer: '一個小時 2000 元。',
    },
    {
      question: '國小生可以上嗎？',
      answer:
        '學生需要有一點英文基礎，大約是「可以透過查字典看懂編譯器錯誤訊息」的程度。另外，因為是全線上教學，所以要有一定程度的專注力和自制力，早熟的國小高年級學生可能可以，再更小就不太適合。',
    },
    {
      question: '大學生／社會人士可以上嗎？',
      answer: '可以！如果您的需求是「從零開始學 C/C++」，那就適合這個課程',
    },
    {
      question: '我想要學網頁製作／Python／手機 App 程式⋯⋯，也可以嗎？',
      answer: '歡迎和老師洽談需求，設計專屬的課程，視情況價格可能會不同。',
    },
  ],
};

export { wording };
