// data.js — STEP 02: 態 (Voice) / STEP 03: 助動詞 (Auxiliary Verbs)

const QUIZ_DATA = {

  /* ───── FRAME 010–025 ───── */
  frames: [
    {
      id: 'f010', type: 'choice', section: 'frames', sectionName: 'FRAME',
      label: 'FRAME 010', tagClass: 'tag-f',
      question: 'The tallest building in my town ( ) 50 years ago.',
      options: ['builds', 'built', 'is built', 'was built'],
      answer: 3, source: '',
      translation: '私の町でいちばん高い建物は、50年前に建てられた。',
      explanation: 'build「〜を建てる」は他動詞。The tallest building in my townという動作を受ける側が主語になっているので、受動態④was builtを選ぶ。'
    },
    {
      id: 'f011', type: 'choice', section: 'frames', sectionName: 'FRAME',
      label: 'FRAME 011', tagClass: 'tag-f',
      question: 'Let\'s get going. Nothing ( ) by just waiting.',
      options: ['will be gained', 'will gain', 'is gaining', 'gains'],
      answer: 0, source: '',
      translation: 'さっさとそれをやってしまおう。待っているだけでは何も得られないよ。',
      explanation: 'gain「〜を得る」は他動詞。Nothingという動作を受ける側が主語なので、助動詞を含む受動態（助動詞＋be done）になっている①will be gainedを選ぶ。'
    },
    {
      id: 'f012', type: 'choice', section: 'frames', sectionName: 'FRAME',
      label: 'FRAME 012', tagClass: 'tag-f',
      question: 'This room has 50 computers and most of them ( ) now.',
      options: ['are used', 'used', 'are being used', 'have used'],
      answer: 2, source: '',
      translation: 'この部屋には50台のコンピュータがあり、それらのほとんどが現在使用中だ。',
      explanation: 'use「〜を使う」は他動詞。ここでは「今〜されているところだ」という進行形の受動態の形になっている③are being usedを選ぶ。'
    },
    {
      id: 'f013', type: 'choice', section: 'frames', sectionName: 'FRAME',
      label: 'FRAME 013', tagClass: 'tag-f',
      question: 'My homework ( ) yet.',
      options: ['has not been typed', 'have not been typed', 'has not typed', 'has been not typed'],
      answer: 0, source: '',
      translation: '私の宿題はまだ入力されていない。',
      explanation: 'type「〜を入力する」は他動詞でMy homeworkという動作を受ける側が主語となる受動態。完了形の受動態（have[has] been done）となる①has not been typedを選ぶ。④has been not typedはnotの位置が誤り。'
    },
    {
      id: 'f014', type: 'choice', section: 'frames', sectionName: 'FRAME',
      label: 'FRAME 014', tagClass: 'tag-f',
      question: 'The joker at the party ( ) everybody.',
      options: ['laughed', 'laughed at', 'laughed at by', 'was laughed at by'],
      answer: 3, source: '',
      translation: '後のジョーカーは、パーティーでだれからも笑われていた。',
      explanation: '群動詞laugh atの受動態はbe laughed atとなるので、このあとにbyを続けて④was laughed at byを選ぶ。'
    },
    {
      id: 'f015', type: 'choice', section: 'frames', sectionName: 'FRAME',
      label: 'FRAME 015', tagClass: 'tag-f',
      question: 'Mary seemed to ( ) the result.',
      options: ['be satisfied at', 'be satisfied with', 'satisfy with', 'satisfy at'],
      answer: 1, source: '',
      translation: 'メアリーはその結果に満足しているようだった。',
      explanation: 'satisfy「〜を満足させる」の受動態。「〜に満足する」はbe satisfied with〜とwithを用いて表すので、②be satisfied withを選ぶ。'
    },
    {
      id: 'f016', type: 'choice', section: 'frames', sectionName: 'FRAME',
      label: 'FRAME 016', tagClass: 'tag-f',
      question: 'I was made ( ) to the doctor against my will.',
      options: ['go', 'going', 'went', 'to go'],
      answer: 3, source: '',
      translation: '私は意見に反して医者に行かされた。',
      explanation: '使役動詞make（make＋O＋do）が受動態になった場合はbe made to doと不定詞になるので、④to goを選ぶ。'
    },
    {
      id: 'f017', type: 'choice', section: 'frames', sectionName: 'FRAME',
      label: 'FRAME 017', tagClass: 'tag-f',
      question: '( ) you believe that he bought a sports car?',
      options: ['Can', 'Must', 'Should', 'Would'],
      answer: 0, source: '',
      translation: '彼はスポーツカーを買ったなんて信じられますか。',
      explanation: 'believeがあることから、「〜できる」という意味の助動詞①Canを選ぶ。'
    },
    {
      id: 'f018', type: 'choice', section: 'frames', sectionName: 'FRAME',
      label: 'FRAME 018', tagClass: 'tag-f',
      question: 'Traffic is heavy around there, so you ( ) go to the museum by car.',
      options: ['should not', 'must not', 'had better not', 'would not'],
      answer: 2, source: '',
      translation: 'そのあたりでは交通が渋滞しているので、車で博物館に行かないほうがよい。',
      explanation: 'had betterの否定形はhad better notとなるので、③had better notを選ぶ。'
    },
    {
      id: 'f019', type: 'choice', section: 'frames', sectionName: 'FRAME',
      label: 'FRAME 019', tagClass: 'tag-f',
      question: 'You ( ) be serious. You must be joking.',
      options: ['must', 'should', 'can\'t', 'may not'],
      answer: 2, source: '',
      translation: 'あなたは本気で言っているはずがない。冗談で言っているにちがいない。',
      explanation: '第2文より「冗談で言っている」という確信から、「〜のはずがない」を表す③can\'tを選ぶ。mustは「〜に違いない」。'
    },
    {
      id: 'f020', type: 'choice', section: 'frames', sectionName: 'FRAME',
      label: 'FRAME 020', tagClass: 'tag-f',
      question: 'We all tried to push the truck, but it ( ) move.',
      options: ['must not', 'wouldn\'t', 'shouldn\'t', 'couldn\'t have'],
      answer: 1, source: '',
      translation: '私たちはみんなでトラックを押そうとしたが、どうしても動かなかった。',
      explanation: '「(物が)どうしても(〜しなかった)」という意味の②wouldn\'tを選ぶ。'
    },
    {
      id: 'f021', type: 'choice', section: 'frames', sectionName: 'FRAME',
      label: 'FRAME 021', tagClass: 'tag-f',
      question: 'When I was a child, my father ( ) tell me fairy tales.',
      options: ['would', 'should', 'might', 'used to'],
      answer: 3, source: '',
      translation: '私が子どものころ、父はよく私におとぎ話をしてくれた。',
      explanation: '「以前はよく〜(したものだ)」という過去の習慣を表すused toを用いた④を選ぶ。be used to doing「〜することに慣れている」と混同しないよう注意。'
    },
    {
      id: 'f022', type: 'choice', section: 'frames', sectionName: 'FRAME',
      label: 'FRAME 022', tagClass: 'tag-f',
      question: 'He hasn\'t remembered yet. He ( ) forgotten all our promises.',
      options: ['should have', 'can have', 'may have', 'must have'],
      answer: 3, source: '',
      translation: '彼はまだ覚えていない。彼は私たちの約束を全部忘れてしまったに違いない。',
      explanation: 'must have doneの形を用いて「〜したに違いない」という過去の推量を表す④must haveを選ぶ。'
    },
    {
      id: 'f023', type: 'choice', section: 'frames', sectionName: 'FRAME',
      label: 'FRAME 023', tagClass: 'tag-f',
      question: 'This morning I ( ) called someone, but I was too busy to do so.',
      options: ['would have', 'could have', 'might have', 'should have'],
      answer: 3, source: '',
      translation: '今朝、誰かに電話するべきだったが、忙しすぎてそうすることができなかった。',
      explanation: 'should have doneを用いて「〜すべきだったのに(しなかった)」という後悔を表す④should haveを選ぶ。'
    },
    {
      id: 'f024', type: 'choice', section: 'frames', sectionName: 'FRAME',
      label: 'FRAME 024', tagClass: 'tag-f',
      question: 'It looks threatening. I would rather ( ) a walk today.',
      options: ['not take', 'not to take', 'not taking', 'don\'t take'],
      answer: 0, source: '',
      translation: '雨になりそうな天気だ。今日の午後は散歩したくない。',
      explanation: 'would rather not doで「〜したくない」という意味。would rather notのあとには動詞の原形がくるので、①not takeを選ぶ。'
    },
    {
      id: 'f025', type: 'choice', section: 'frames', sectionName: 'FRAME',
      label: 'FRAME 025', tagClass: 'tag-f',
      question: 'I suggested that she ( ) her original plan immediately.',
      options: ['changes', 'would change', 'should change', 'has changed'],
      answer: 2, source: '',
      translation: '私は当初の計画をすぐに変更するべきであると提案した。',
      explanation: '「提案」を表す動詞suggestに続くthat節中では、((should＋)do)が使われるので、③should changeを選ぶ。'
    }
  ],

  /* ───── EXERCISE A ─────
     STEP 02 態: 01–13
     STEP 03 助動詞: 01–20 (→ a14–a33)
  ───────────────────────── */
  exA: [
    // ── STEP 02 態 ──
    {
      id: 'a01', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 01', tagClass: 'tag-a',
      question: 'The FIFA World Cup ( ) once every four years.',
      options: ['holds', 'is held', 'has held', 'held'],
      answer: 1, source: '',
      translation: 'FIFAワールドカップは4年に1度開催される。',
      explanation: 'hold「〜を開く」は他動詞なので、The FIFA World Cupという動作を受ける側が主語になっており、受動態②is heldを選ぶ。'
    },
    {
      id: 'a02', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 02', tagClass: 'tag-a',
      question: 'Cures for many more types of cancer ( ) very soon.',
      options: ['discover', 'are discovered', 'will be discovered', 'will discover'],
      answer: 2, source: '',
      translation: '多くの種類のがんの治療法がもうすぐ見つかるだろう。',
      explanation: 'discover「〜を見つける」は他動詞。文意より「もうすぐ（見つかるだろう）」を表す③will be discoveredを選ぶ。'
    },
    {
      id: 'a03', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 03', tagClass: 'tag-a',
      question: 'He ( ) while he was playing rugby.',
      options: ['injured', 'was injuring', 'was injured', 'has been injured'],
      answer: 2, source: '',
      translation: '彼はラグビーをしている間にけがをした。',
      explanation: 'injure「〜にけがをさせる」は他動詞。while以下が過去の内容を表すので、過去の受動態③was injuredを選ぶ。'
    },
    {
      id: 'a04', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 04', tagClass: 'tag-a',
      question: 'These DVDs ( ) taken out.',
      options: ['must', 'must be', 'mustn\'t', 'mustn\'t be'],
      answer: 3, source: '',
      translation: 'これらのDVDは貸し出し禁止です。',
      explanation: 'take out「〜を貸り出す」の群動詞の受動態。助動詞mustn\'tを用いた（助動詞＋be done）の形④mustn\'t be takenを選ぶ。'
    },
    {
      id: 'a05', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 05', tagClass: 'tag-a',
      question: 'The phone ( ) connected since last week.',
      options: ['has not been', 'has been not', 'was not', 'is not'],
      answer: 0, source: '',
      translation: '電話が先週からつながらなかった。',
      explanation: 'since last weekより(継続)を表す完了形の受動態(have[has] been done)の形になるように、①has not beenを選ぶ。'
    },
    {
      id: 'a06', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 06', tagClass: 'tag-a',
      question: 'Yesterday I ( ) in Japanese by a foreigner.',
      options: ['spoke to', 'was speaking to', 'was spoken', 'was spoken to'],
      answer: 3, source: '',
      translation: '昨日私は外国人に日本語で話しかけられた。',
      explanation: 'speak to「〜に話しかける」の群動詞は1つの動詞とみなして受動態にするので、④was spoken toを選ぶ。'
    },
    {
      id: 'a07', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 07', tagClass: 'tag-a',
      question: 'Music ( ) more and more to treat children with mental problems.',
      options: ['is being used', 'uses', 'is used', 'has used'],
      answer: 0, source: '',
      translation: '音楽が精神的な問題を持つ子どもを治療するのにますます用いられている。',
      explanation: 'use「〜を使う」は他動詞。進行形の受動態(be being done)の形になっている①is being usedを選ぶ。'
    },
    {
      id: 'a08', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 08', tagClass: 'tag-a',
      question: 'She was ( ) in a shower on her way to the railway station.',
      options: ['catched', 'caught in', 'catch in', 'catching'],
      answer: 1, source: '',
      translation: '彼女は鉄道の駅に向かう途中でにわか雨にあった。',
      explanation: '「(雨など)にあう」はbe caught in〜とinを用いて表すので、②caught inを選ぶ。'
    },
    {
      id: 'a09', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 09', tagClass: 'tag-a',
      question: 'The mountain ( ) with snow this time of year.',
      options: ['covers', 'is covered', 'is covered by', 'is covered with'],
      answer: 3, source: '',
      translation: '今年の今ごろは山が雪でおおわれている。',
      explanation: 'The mountainという動作を受ける側が主語になる受動態。「おおう」側を表すにはbyではなくwithを用いるので、④is covered withを選ぶ。'
    },
    {
      id: 'a10', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 10', tagClass: 'tag-a',
      question: 'I was made ( ) my brother\'s room.',
      options: ['clean', 'cleaning', 'to clean', 'cleaned'],
      answer: 2, source: '',
      translation: '私は兄[弟]の部屋を掃除させられた。',
      explanation: '使役動詞makeが受動態になった場合はbe made to doと不定詞になるので、③to cleanを選ぶ。'
    },
    {
      id: 'a11', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 11', tagClass: 'tag-a',
      question: 'These rooms are always ( ) clean and tidy.',
      options: ['keeping', 'kept', 'keep', 'to keep'],
      answer: 1, source: '',
      translation: 'これらの部屋はいつも清潔で整とんして保たれた。',
      explanation: 'keepは「〜を〜に保つ」の他動詞。受動態にするので(be kept＋C)の形になる②keptを選ぶ。'
    },
    {
      id: 'a12', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 12', tagClass: 'tag-a',
      question: 'Because the weather was very bad yesterday, the game ( ) until next week.',
      options: ['put off', 'was put', 'had to be put off', 'put'],
      answer: 2, source: '',
      translation: '昨日は天気がとても悪かったので、試合は来週まで延期しなければならなかった。',
      explanation: 'put off〜「〜を延期する」の群動詞。had to doのあとに受動態が続く③had to be put offを選ぶ。'
    },
    {
      id: 'a13', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 13', tagClass: 'tag-a',
      question: 'The girl was heard ( ) in her room.',
      options: ['sing', 'singing', 'to sing', 'sang'],
      answer: 2, source: '',
      translation: 'その女の子は部屋で歌っているのを聞かれた。',
      explanation: 'hear(hear＋O＋do)が受動態になるとbe heard to doと不定詞になるので、③to singを選ぶ。'
    },
    // ── STEP 03 助動詞 ──
    {
      id: 'a14', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 14', tagClass: 'tag-a',
      question: 'You ( ) jogging after dark in this area.',
      options: ['would better not go', 'had not better go', 'had better not go', 'better not go'],
      answer: 2, source: '',
      translation: 'この地区では暗くなった後ジョギングはしないほうがよい。',
      explanation: 'had betterの否定形は(had better not＋do)となるので、③had better not goを選ぶ。'
    },
    {
      id: 'a15', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 15', tagClass: 'tag-a',
      question: 'You ( ) drive without a license. It\'s against the law.',
      options: ['must', 'must not', 'don\'t have to', 'had better'],
      answer: 1, source: '',
      translation: '免許なしで運転してはいけない。法律に違反している。',
      explanation: 'must notは強い禁止を表す②must notを選ぶ。①don\'t have toは「〜する必要がない」で文意に合わない。'
    },
    {
      id: 'a16', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 16', tagClass: 'tag-a',
      question: 'Lucy ( ) be happy; she just got married to a great guy.',
      options: ['must', 'would', 'can\'t', 'should'],
      answer: 2, source: '',
      translation: 'ルーシーは幸せなはずがない、すばらしい男性と結婚したばかりだ。',
      explanation: '文意より「〜のはずがない」という確信を表す③can\'tを選ぶ。'
    },
    {
      id: 'a17', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 17', tagClass: 'tag-a',
      question: 'He was dissatisfied somewhere. He ( ) listen to me at all.',
      options: ['must not', 'should not', 'wouldn\'t', 'couldn\'t'],
      answer: 2, source: '',
      translation: '彼のどこかに不満があった。どうしても聞かない。',
      explanation: '「(物が)どうしても(〜しなかった)」という意味の③wouldn\'tを選ぶ。'
    },
    {
      id: 'a18', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 18', tagClass: 'tag-a',
      question: 'When I was a boy, there ( ) a large pond in front of the church.',
      options: ['would be', 'should be', 'must be', 'used to be'],
      answer: 3, source: '',
      translation: '私が少年だったころ、教会の前に大きな池があった。',
      explanation: 'There used to be〜「(今はそうではないが)以前は〜があった」という意味になるので、④used to beを選ぶ。'
    },
    {
      id: 'a19', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 19', tagClass: 'tag-a',
      question: 'This letter is written in English that is too good. He ( ) written it himself.',
      options: ['must have', 'should have', 'can\'t have', 'would have'],
      answer: 2, source: '',
      translation: 'この手紙の英語はうますぎる。彼が自分で書いたということはありえない。',
      explanation: '「〜したはずがない」という③can\'t have doneの形を用いる。③haveを選ぶ。'
    },
    {
      id: 'a20', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 20', tagClass: 'tag-a',
      question: 'That movie was wonderful. You ( ) come with me.',
      options: ['should have', 'must have', 'would have', 'might have'],
      answer: 0, source: '',
      translation: 'その映画はすばらしかった。あなたは私と一緒に来るべきでした。',
      explanation: 'should have doneの形で「〜すべきだったのに（実際はしなかった）」という後悔を表す。①shouldを選ぶ。'
    },
    {
      id: 'a21', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 21', tagClass: 'tag-a',
      question: 'You ( ) such a thing to her. She looks very sad.',
      options: ['might not have said', 'must not have said', 'wouldn\'t have said', 'shouldn\'t have said'],
      answer: 3, source: '',
      translation: 'あなたはそのようなことを彼女に言うべきではなかった。彼女はとても悲しそうだ。',
      explanation: 'should not have doneの形で「〜すべきではなかったのに（実際にはしてしまった）」という後悔を表す。④shouldn\'t have saidを選ぶ。'
    },
    {
      id: 'a22', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 22', tagClass: 'tag-a',
      question: 'Peter would rather stay home than ( ) to a movie.',
      options: ['going', 'go', 'went', 'will go'],
      answer: 1, source: '',
      translation: 'ピーターは映画に行くよりはむしろ家にいたい。',
      explanation: 'would rather A than Bの「BよりAをしたほうがよい」という意味。A・Bにくる動詞は原形になるので、②goを選ぶ。'
    },
    {
      id: 'a23', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 23', tagClass: 'tag-a',
      question: 'Your teacher demanded that he ( ) his homework by tomorrow afternoon.',
      options: ['finish', 'finishes', 'finished', 'to finish'],
      answer: 0, source: '',
      translation: '君の先生は彼に明日の午後までに宿題を終わらせるように要求した。',
      explanation: '「要求」を表す動詞demandに続くthat節中では、((should＋)do)が使われるので①finishを選ぶ。'
    },
    {
      id: 'a24', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 24', tagClass: 'tag-a',
      question: 'It is essential that the money ( ) kept in a safe.',
      options: ['is', 'was', 'be', 'been'],
      answer: 2, source: '',
      translation: '書籍が金庫に保管されていることはきわめて重要である。',
      explanation: 'essentialに続くthat節中では、((should＋)do)が使われるので③beを選ぶ。'
    },
    {
      id: 'a25', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 25', tagClass: 'tag-a',
      question: '"The show starts at 7:30 and it\'s already 10 minutes past." "We ( ) hurry."',
      options: ['might', 'should', 'would', 'have to'],
      answer: 3, source: '',
      translation: '「早く、ショーは7時半の始まりなのに、もう10分過ぎだ」「急がなければ」',
      explanation: '文意から「〜しなければならない」という意味の④have toを選ぶ。'
    },
    {
      id: 'a26', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 26', tagClass: 'tag-a',
      question: 'According to the forecast, we ( ) raincoats or umbrellas.',
      options: ['must not have brought', 'shouldn\'t have brought', 'needn\'t have brought', 'can\'t have brought'],
      answer: 2, source: '',
      translation: '天気予報から見ると、私たちはレインコートや傘を持ってくる必要はなかった。',
      explanation: 'needn\'t have doneで「〜する必要がなかった(けれど持ってきてしまった)」を表す。③needn\'t have broughtを選ぶ。'
    },
    {
      id: 'a27', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 27', tagClass: 'tag-a',
      question: 'Since you have met him before, you ( ) introduce him to the professor.',
      options: ['are supposed to', 'don\'t have to', 'must', 'ought to'],
      answer: 1, source: '',
      translation: 'もうすでに会ったことがあるので、あなたは彼をその教授に紹介する必要はない。',
      explanation: '「〜する必要はない」を表す②don\'t have toを選ぶ。①are supposed toは「〜することになっている」で文意に合わない。'
    },
    {
      id: 'a28', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 28', tagClass: 'tag-a',
      question: 'When we were children, we ( ) go skating every winter.',
      options: ['used to', 'would', 'could', 'should'],
      answer: 1, source: '',
      translation: '私たちが子どもだったころ、毎年冬にはスケート場に行ったものだ。',
      explanation: '過去の習慣を表す②wouldを選ぶ。'
    },
    {
      id: 'a29', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 29', tagClass: 'tag-a',
      question: 'He missed the train. Otherwise he ( ) arrived by now.',
      options: ['ought to have', 'must have', 'would have', 'should have'],
      answer: 0, source: '',
      translation: '彼は電車に乗り遅れた。さもなければ今ごろには到着しているはずだ。',
      explanation: '過去の事柄に対する帰結を表す①ought to haveを選ぶ。'
    },
    {
      id: 'a30', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 30', tagClass: 'tag-a',
      question: 'It takes about 15 hours by train. You ( ) go by plane.',
      options: ['had better', 'might as well', 'must', 'should'],
      answer: 1, source: '',
      translation: '電車では15時間ほどかかります。飛行機で行ったほうがよいかもしれない。',
      explanation: 'might as well doで「〜したほうがよい（どうせなら）」という意味になる②を選ぶ。'
    },
    {
      id: 'a31', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 31', tagClass: 'tag-a',
      question: '"Why is this letter still here?" "Oh, ( ) it yesterday afternoon but I forgot."',
      options: ['I must\'ve mailed', 'I should\'ve mailed', 'I can\'t have mailed', 'I would\'ve mailed'],
      answer: 1, source: '',
      translation: '「なぜこの手紙がまだここにある？」「昨日の午後に投函すべきだったけれど忘れてしまった」',
      explanation: 'should have doneの形で「〜すべきだったのに（実際はしなかった）」という後悔を表す。②I should\'ve mailedを選ぶ。'
    },
    {
      id: 'a32', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 32', tagClass: 'tag-a',
      question: 'Ken\'s car was stolen, so he ( ) taken her to the airport by car.',
      options: ['shouldn\'t have', 'couldn\'t have', 'wouldn\'t have', 'needn\'t have'],
      answer: 1, source: '',
      translation: 'ケンは車を盗まれてしまったので、彼女を車で空港に送ったはずがない。',
      explanation: 'couldn\'t have doneで「〜したはずがない」という推量を表す。②couldn\'t haveを選ぶ。'
    },
    {
      id: 'a33', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 33', tagClass: 'tag-a',
      question: '"Didn\'t you often go to the movies?" "Yes, ( ) go a lot."',
      options: ['I used to', 'I would', 'I might', 'I could'],
      answer: 0, source: '',
      translation: '「よく映画に行きませんでしたか？」「はい、以前はよく行っていました。」',
      explanation: '過去の習慣を表すused toを用いた①I used toを選ぶ。I used toのあとにgo to the moviesが省略されている。'
    }
  ],

  /* ───── EXERCISE B ─────
     STEP 02 態: 01–04
     STEP 03 助動詞: 01–03
  ───────────────────────── */
  exB: [
    {
      id: 'b01', type: 'error', section: 'exB', sectionName: 'Exercise B',
      label: 'Ex. B 01', tagClass: 'tag-b',
      question: 'The lecture on evolutionary biology ①was ②hold in a very cold ③room ④last night.',
      errorNum: 2, errorText: 'hold', correction: 'held',
      source: '',
      translation: '進化生物学の講義が、昨夜かなり寒い部屋で行われた。',
      explanation: 'hold「〜を開く」は他動詞。The lectureが動作を受ける側なので、受動態になるように②holdは過去分詞heldにする。'
    },
    {
      id: 'b02', type: 'error', section: 'exB', sectionName: 'Exercise B',
      label: 'Ex. B 02', tagClass: 'tag-b',
      question: 'If my husband calls, tell him I\'m ①attending an important meeting and ②cannot ③disturb and ④cannot leave.',
      errorNum: 3, errorText: 'disturb', correction: 'be disturbed',
      source: '',
      translation: 'もし夫が電話をかけてきたら、私は重要な会議に出席していて中座できないと彼に伝えてください。',
      explanation: 'disturb「〜を邪魔する」は他動詞。主語の「が」が動作を受ける側なので、助動詞cannotを含む受動態（助動詞＋be done）の形になる③disturb → be disturbedとする。'
    },
    {
      id: 'b03', type: 'error', section: 'exB', sectionName: 'Exercise B',
      label: 'Ex. B 03', tagClass: 'tag-b',
      question: 'Such topics as politics and religion ①should ②avoid in ③everyday ④conversation.',
      errorNum: 2, errorText: 'avoid', correction: 'be avoided',
      source: '',
      translation: '政治や宗教のような話題は、日常会話では避けるべきだ。',
      explanation: 'avoidは「〜を避ける」の他動詞。主語が動作を受ける側なので、助動詞shouldを含む受動態の形になるように②avoid → be avoidedとする。'
    },
    {
      id: 'b04', type: 'error', section: 'exB', sectionName: 'Exercise B',
      label: 'Ex. B 04', tagClass: 'tag-b',
      question: 'It seems unavoidable that a great number of employees will have ①to lay off ②due to ③the poor ④business conditions.',
      errorNum: 1, errorText: 'to lay off', correction: 'to be laid off',
      source: '',
      translation: '会社が不況に見舞われたため、多数の従業員が解雇されなければならないであろうことは避けられないだろう。',
      explanation: 'lay off「〜を解雇する」の群動詞。主語のa great number of employeesが動作を受ける側。will have to doのあとに受動態が続くように、①to lay off → to be laid offとする。'
    },
    {
      id: 'b05', type: 'error', section: 'exB', sectionName: 'Exercise B',
      label: 'Ex. B 05', tagClass: 'tag-b',
      question: 'I ①would rather ②eat out ③than ④cooking at home.',
      errorNum: 4, errorText: 'cooking', correction: 'cook',
      source: '',
      translation: '私は家で料理をするよりはむしろ外食したい。',
      explanation: 'would rather A than BのA・Bにくる動詞はともに原形になるので、④cookingはcookにしなければならない。'
    },
    {
      id: 'b06', type: 'error', section: 'exB', sectionName: 'Exercise B',
      label: 'Ex. B 06', tagClass: 'tag-b',
      question: 'It is essential that you ①to attend ②tomorrow\'s meeting because ③important issues ④will be discussed.',
      errorNum: 1, errorText: 'to attend', correction: 'attend',
      source: '',
      translation: 'あなたが明日の会議に出席することが不可欠です。なぜなら重要な問題が話し合われる予定だからです。',
      explanation: 'essentialに続くthat節中では、((should＋)do)が使われるので①to attend → attendにしなければならない。'
    },
    {
      id: 'b07', type: 'error', section: 'exB', sectionName: 'Exercise B',
      label: 'Ex. B 07', tagClass: 'tag-b',
      question: 'Studying abroad ①used to ②being ③limited to ④wealthy people.',
      errorNum: 2, errorText: 'being', correction: 'be',
      source: '',
      translation: '外国の大学で勉強することは以前は裕福な人々に限られていた。',
      explanation: 'used toの後には動詞の原形がくるので、②beingはbeにしなければならない。'
    }
  ],

  /* ───── EXERCISE C ─────
     STEP 02 態: 01–04
     STEP 03 助動詞: 01–07
  ───────────────────────── */
  exC: [
    {
      id: 'c01', type: 'exC', section: 'exC', sectionName: 'Exercise C',
      label: 'Ex. C 01', tagClass: 'tag-c',
      japanese: '語句を並べかえて英文を完成させなさい。',
      translation: '彼は自分の失敗が決意の欠如によって引き起こされたことを認めた。',
      prefix: 'He admitted that his failure',
      words: ['was', 'caused', 'by', 'his', 'lack', 'of', 'determination'],
      answer: 'was caused by his lack of determination',
      explanation: 'that節の中で「失敗が決意のなさによって引き起こされた」を受動態で表す。was caused by ～は「〜によって引き起こされた」。'
    },
    {
      id: 'c02', type: 'exC', section: 'exC', sectionName: 'Exercise C',
      label: 'Ex. C 02', tagClass: 'tag-c',
      japanese: '語句を並べかえて英文を完成させなさい。',
      translation: '西サハラの自然の富は、その地域の将来が決まるまで利用されるべきではない。',
      prefix: 'The western Sahara\'s natural wealth',
      words: ['should', 'not', 'be', 'utilized', 'until', 'the', "territory's", 'future', 'is', 'decided'],
      answer: "should not be utilized until the territory's future is decided",
      explanation: 'utilizeは他動詞。「西サハラの自然の富」が主語なので受動態で表す。shouldを使い「すべきでない」という意味を加える。'
    },
    {
      id: 'c03', type: 'exC', section: 'exC', sectionName: 'Exercise C',
      label: 'Ex. C 03', tagClass: 'tag-c',
      japanese: '語句を並べかえて英文を完成させなさい。',
      translation: '泥棒は窓から逃げたと思われている。',
      prefix: 'The thief',
      words: ['is', 'thought', 'to', 'have', 'escaped', 'through', 'the', 'window'],
      answer: 'is thought to have escaped through the window',
      explanation: '「〜と思われる」はbe thought to doで表せる。「逃げた」という過去の出来事なので、完了不定詞to have escapedとする。'
    },
    {
      id: 'c04', type: 'exC', section: 'exC', sectionName: 'Exercise C',
      label: 'Ex. C 04', tagClass: 'tag-c',
      japanese: '語句を並べかえて英文を完成させなさい。',
      translation: '彼は同僚たちから高く評価されている。',
      prefix: 'He',
      words: ['is', 'spoken', 'highly', 'of', 'by', 'his', 'colleagues'],
      answer: 'is spoken highly of by his colleagues',
      explanation: '群動詞speak highly of ～の受動態。is spoken highly of ～となり、このあとにbyを続ける。'
    },
    {
      id: 'c05', type: 'exC', section: 'exC', sectionName: 'Exercise C',
      label: 'Ex. C 05', tagClass: 'tag-c',
      japanese: '語句を並べかえて英文を完成させなさい。',
      translation: '私の祖父はかつてここで薬局を経営していた。',
      prefix: 'My grandfather',
      words: ['used', 'to', 'run', 'a', 'pharmacy', 'here'],
      answer: 'used to run a pharmacy here',
      explanation: 'used to doで「以前は〜していた」という過去の習慣を表す。run a pharmacyは「薬局を経営する」。'
    },
    {
      id: 'c06', type: 'exC', section: 'exC', sectionName: 'Exercise C',
      label: 'Ex. C 06', tagClass: 'tag-c',
      japanese: '語句を並べかえて英文を完成させなさい。',
      translation: '夜一人で歩かないほうがよい。とても危険だ。',
      prefix: 'You',
      suffix: '. It\'s very dangerous.',
      words: ['had', 'better', 'not', 'walk', 'alone', 'at', 'night'],
      answer: 'had better not walk alone at night',
      explanation: 'had better not doで「〜しないほうがよい」という意味。notはbetterの後、動詞の前に置く。'
    },
    {
      id: 'c07', type: 'exC', section: 'exC', sectionName: 'Exercise C',
      label: 'Ex. C 07', tagClass: 'tag-c',
      japanese: '語句を並べかえて英文を完成させなさい。',
      translation: 'そこに行く前に私の家に電話すべきだった。',
      prefix: 'You',
      suffix: 'before you went there.',
      words: ['ought', 'to', 'have', 'called', 'my', 'home'],
      answer: 'ought to have called my home',
      explanation: 'ought to have doneで「〜すべきだった（しなかった）」という過去の後悔を表す。'
    },
    {
      id: 'c08', type: 'exC', section: 'exC', sectionName: 'Exercise C',
      label: 'Ex. C 08', tagClass: 'tag-c',
      japanese: '語句を並べかえて英文を完成させなさい。',
      translation: '試験はこれ以上難しくなりえなかった。',
      prefix: 'The examination',
      words: ['could', 'not', 'have', 'been', 'more', 'difficult'],
      answer: 'could not have been more difficult',
      explanation: 'could not have been more ～は「これ以上〜ではあり得なかった（＝最高に〜だった）」という慣用表現。'
    },
    {
      id: 'c09', type: 'exC', section: 'exC', sectionName: 'Exercise C',
      label: 'Ex. C 09', tagClass: 'tag-c',
      japanese: '語句を並べかえて英文を完成させなさい。',
      translation: '今年の時期にしては気候が暖かすぎる。',
      prefix: 'The weather is warmer than',
      words: ['it', 'ought', 'to', 'be', 'for', 'this', 'time', 'of', 'year'],
      answer: 'it ought to be for this time of year',
      explanation: 'ought to doで「〜すべき（はずの）」という意味。「この時期であるべき気温より暖かい」という比較表現。'
    },
    {
      id: 'c10', type: 'exC', section: 'exC', sectionName: 'Exercise C',
      label: 'Ex. C 10', tagClass: 'tag-c',
      japanese: '語句を並べかえて英文を完成させなさい。',
      translation: 'これら5か国がビジネスを異なる方法で行っていることを発見したかもしれない。',
      prefix: 'You',
      words: ['might', 'have', 'discovered', 'these', 'five', 'countries', 'do', 'business', 'differently'],
      answer: 'might have discovered these five countries do business differently',
      explanation: 'might have doneで「〜だったかもしれない」という過去の事柄に対する推量を表す。'
    },
    {
      id: 'c11', type: 'exC', section: 'exC', sectionName: 'Exercise C',
      label: 'Ex. C 11', tagClass: 'tag-c',
      japanese: '語句を並べかえて英文を完成させなさい。',
      translation: 'ケンジは地域でトップの大学に入学したのだから、試験ですごくよくできたに違いない。',
      prefix: 'Kenji',
      suffix: 'because he got into the top university in his area.',
      words: ['must', 'have', 'done', 'extremely', 'well', 'in', 'his', 'exams'],
      answer: 'must have done extremely well in his exams',
      explanation: 'must have doneで「〜したに違いない」という過去の事柄に対する強い推量を表す。'
    }
  ]
};

const EIGO_SENTENCES = [];
