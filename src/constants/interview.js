const wording = {
  headerList: [
    {
      title: "面試課程",
      href: "/interview",
      isActive: true,
      content: [
        { title: "寺尾老師學經歷", href: "#resume" },
        { title: "學員錄取心得", href: "#resume" },
      ],
    },
    { title: "國高中生APCS初學課程", href: "/apcs", isActive: false },
  ],
  landing: {
    title: ["寺尾", "程式家教"],
    subtitle: ["前 GOOGLE 面試官", "一對一線上家教"],
  },
  resume: [
    {
      name: "經歷",
      title: ["Google 工程師"],
      subtitle: [
        "東京，2019 - 2021",
        "台北，2015 - 2019",
        "加州 Mountain View，2013 - 2015",
        "在 Google 內執行過 50 場以上的面試",
      ],
    },
    {
      name: "學歷",
      title: [
        "Carnegie Mellon University 軟體工程碩士",
        "台大資工系學士（b95）",
      ],
    },
    {
      name: "成績",
      title: ["台大資工系畢業名次 Top 5%，書卷獎三次"],
    },
  ],
  reviews: [
    {
      name: "K.-T. Chen",
      background: "交大電機系，台大電機所計算機組",
      avatar: "",
      student: [
        "十分感謝寺尾老師的幫忙，讓我順利從台灣面試上 Amazon Canada 的軟體工程師職位（with relocation package）！",
        "我在要面試 FAANG 的一個月前，每周跟老師約一個時間模擬面試。除了熟悉面試感覺不要緊張外，老師每次都會藉由不同的角度來詢問演算法或是 Low Level Design 的問題，讓我藉由模擬面試了解自己演算法的盲區。一周一周下來，我慢慢補齊我無腦刷 Leetcode 的漏洞，讓我更能游刃有餘的面對 FAANG 的面試。",
      ],
      teacher: [
        "K.-T. Chen 原本在台北某網路服務公司擔任資安工程師，經過了五週的模擬面試訓練之後，他補齊了之前刷題的盲點，並且充分適應外商面試的節奏，成功錄取了 Amazon Canada。他的成功經驗也證明了，就算你沒有任何國外留學經驗或是身份，仍可以透過「直接面試」獲得北美軟體工程師職缺。這條路一直都是可能的！",
      ],
    },
  ],
  features: [
    {
      title: "[Leetcode](https://leetcode.com/) 解題指導與面試導向演算法教學",
      content: [
        {
          title: "涵蓋面試常考的 12 大主題",
          description: [
            "將 Leetcode 題目分門別類，整理出 12 大常考主題，地毯式一ㄧ攻克",
          ],
        },
        {
          title: "一對一指導，針對弱點徹底加強",
          description: [
            "不會寫 Recursion？DP（Dynamic Programming）常常想不到？每個人的思考盲點都不同，一對一指導能夠完全貼合您的需求設計課程和練習，不浪費任何時間",
          ],
        },
        {
          title: "面試解題不（只）是程式競賽",
          description: [
            "面試解題除了正確和速度，還重視程式碼的簡潔和可讀性，您的目標是寫出 Production level 的程式碼。寺尾老師會在課程中傳授學生攻略 Leetcode 題目的正確心態和練習方法",
          ],
        },
        {
          title: "豐富的課堂練習和作業",
          description: [
            "我們重視上課過程中的即時 Coding 練習，唯有如此，老師才能察覺學生遭遇到的真正盲點，對症下藥解決困難",
          ],
        },
      ],
    },
    {
      title: "模擬面試",
      content: [
        {
          title: "完全擬真的面試體感",
          description: [
            "一堂課一小時，包含 45 分鐘的英文模擬面試（演算法、Coding 實作）和 15 分鐘檢討。完全擬真的面試體感，是您在真實面試前不可或缺的練習機會",
          ],
        },
        {
          title: "發覺弱點，持續進步",
          description: [
            "面試後的檢討可以幫助您了解目前的程度和盲點，以及外商科技公司真正在意的點，幫助您百戰百勝，順利獲取心目中的夢想職缺",
          ],
        },
        {
          title: "熟練是克服緊張的不二法門",
          description: [
            "外商面試強調「Think out loud」，您必須一邊解題一邊以英語口述思考過程。透過模擬面試的練習，可以幫助您克服緊張，臨場不再失常",
          ],
        },
      ],
    },
  ],
  plans: [
    {
      title: ["Leetcode 解題指導", "面試導向演算法教學"],
      content: [
        "包含 12 大常考主題，共 12 堂課，一堂課兩小時",
        "若有預算或時間上的限制，可以可以縮減總時數，只涵蓋最常考的 top N 個演算法主題。例如，預算只能購買六小時（三堂課），那就來學最常考的前三大主題",
      ],
      color: "#a7b9d8",
    },
    {
      title: ["模擬面試"],
      content: [
        "一次一小時，包含 45 分鐘的英文演算法解題模擬面試，15 分鐘的中文檢討",
      ],
      color: "#CDD8E9",
    },
  ],
  charging: "收費方式｜一小時 2500 元",
  steps: [
    {
      title: "Leetcode 解題指導與面試導向演算法教學",
      // 此處圖片路徑放在 ./public 資料夾下方
      cover: "/asstes/steps-cover-1.jpg",
      steps: [
        {
          icon: "/asstes/steps-icon-1.svg",
          title: "Step 1",
          content:
            "聯絡我們，安排 30 分鐘免費試聽，讓老師了解您目前的程度和需求，也讓您了解老師的教學方式",
        },
        {
          icon: "/asstes/steps-icon-2.svg",
          title: "Step 2",
          content:
            "老師根據您的程度和需求設計課程。若有時間上或預算上的限制，可以一併討論",
        },
        {
          icon: "/asstes/steps-icon-3.svg",
          title: "Step 3",
          content: "付費並開始上課！",
        },
        {
          icon: "/asstes/steps-icon-4.svg",
          title: "Step 4",
          content:
            "完成基礎課程後，可以繼續 Leetcode 進階課程，或是進行模擬面試",
        },
      ],
    },
    {
      title: "模擬面試",
      cover: "/asstes/steps-cover-2.jpg",
      steps: [
        {
          icon: "/asstes/steps-icon-1.svg",
          title: "Step 1",
          content: "聯絡我們，安排模擬面試的時間",
        },
        {
          icon: "/asstes/steps-icon-2.svg",
          title: "Step 2",
          content: "付費並於約定時間進行線上模擬面試和檢討",
        },
      ],
    },
  ],
  qaList: [
    {
      question:
        "我是自學的軟體工程師，沒有讀過資訊相關科系，也可以上這個課程嗎？",
      answer:
        "面試導向演算法教學課程極度適合「自學程式」且「已經在工作」的工程師！對於演算法和資料結構，老師會針對您不會的地方從零教起，已經會的部分則可以跳過節省時間",
    },
    {
      question: "這個課程是線上的嗎？有實體課？",
      answer: "我們全部課程都是 100% 純線上，目前沒有實體課程喔。",
    },
    {
      question: "我已經寫了 500/1000/2000 題 Leetcode 了，還有需要上課嗎？",
      answer:
        "可以考慮「模擬面試」，進行仿真的實戰演練。面試畢竟不是程式競賽，有一些正確性和速度以外的眉角，可以透過模擬面試來感受喔。",
    },
    {
      question: "整個課程要多久才能學完？",
      answer:
        "以我們的過往經驗估計，一個「已經具有基本程式能力但不熟演算法」的工程師，大約需 12 堂課（一堂課兩小時），可以完成 12 大常考主題的課程。當然，每個人程度不同，學習速度不同，課程設計也不會相同。主要還是要與老師討論您個人的狀況會比較準確喔",
    },
  ],
};

export { wording };
