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
      explanation: 'type「〜を入力する」は他動詞でMy homeworkという動作を受ける側が主語となる受動態。ここでは完了形の受動態（have[has] been done）となる①has not been typedを選ぶ。④has been not typedはnotの位置が誤り。'
    },
    {
      id: 'f014', type: 'choice', section: 'frames', sectionName: 'FRAME',
      label: 'FRAME 014', tagClass: 'tag-f',
      question: 'The joker at the party ( ) everybody.',
      options: ['laughed', 'laughed at', 'laughed at by', 'was laughed at by'],
      answer: 3, source: '',
      translation: '後のジョーカーは、パーティーでだれからも笑われていた。',
      explanation: '群動詞はともに①前置詞や副詞をまとめて1つの動詞として扱われる。群動詞laugh atの受動態はbe laughed atとなるので、このあとにbyを続けて④was laughed at byを選ぶ。'
    },
    {
      id: 'f015', type: 'choice', section: 'frames', sectionName: 'FRAME',
      label: 'FRAME 015', tagClass: 'tag-f',
      question: 'Mary seemed to ( ) the result.',
      options: ['be satisfied at', 'be satisfied with', 'satisfy with', 'satisfy at'],
      answer: 1, source: '',
      translation: 'メアリーはその結果に満足しているようだった。',
      explanation: 'satisfy「〜を満足させる」という意味の他動詞。「(主語が)〜に満足する」というときはbe satisfied with〜とwithを用いて表すので、②be satisfied withを選ぶ。'
    },
    {
      id: 'f016', type: 'choice', section: 'frames', sectionName: 'FRAME',
      label: 'FRAME 016', tagClass: 'tag-f',
      question: 'I was made ( ) to the doctor against my will.',
      options: ['go', 'going', 'went', 'to go'],
      answer: 3, source: '',
      translation: '私は意見に反して医者に泣いても行かされた。',
      explanation: '使役動詞make（make＋O＋do）「Oに〜させる」の形をとる。これが受動態になった場合はbe made to doと不定詞になるので、④to goを選ぶ。'
    },
    {
      id: 'f017', type: 'choice', section: 'frames', sectionName: 'FRAME',
      label: 'FRAME 017', tagClass: 'tag-f',
      question: '( ) you believe that he bought a sports car?',
      options: ['Can', 'Must', 'Should', 'Would'],
      answer: 0, source: '',
      translation: '彼はスポーツカーを買ったなんて信じられますか。',
      explanation: 'believeがあることから、「〜できる」という可能の意味の助動詞①Canを選ぶ。'
    },
    {
      id: 'f018', type: 'choice', section: 'frames', sectionName: 'FRAME',
      label: 'FRAME 018', tagClass: 'tag-f',
      question: 'Traffic is heavy around there, so you ( ) go to the museum by car.',
      options: ['should not', 'must not', 'had better not', 'would not'],
      answer: 2, source: '',
      translation: 'そのあたりでは交通が渋滞しているので、車で博物館に行かないほうがよい。',
      explanation: 'had betterは「〜したほうがよい」。否定形はhad better notとなるので、③had better notを選ぶ。'
    },
    {
      id: 'f019', type: 'choice', section: 'frames', sectionName: 'FRAME',
      label: 'FRAME 019', tagClass: 'tag-f',
      question: 'You ( ) be serious. You must be joking.',
      options: ['must', 'should', 'can\'t', 'may not'],
      answer: 2, source: '',
      translation: 'あなたは本気で言っているはずがない。冗談で言っているにちがいない。',
      explanation: '第2文より「(冗談で言っている)」という確信を表す②can\'tを選ぶ。mustは「〜に違いない」。'
    },
    {
      id: 'f020', type: 'choice', section: 'frames', sectionName: 'FRAME',
      label: 'FRAME 020', tagClass: 'tag-f',
      question: 'We all tried to push the truck, but it ( ) move.',
      options: ['must not', 'wouldn\'t', 'shouldn\'t', 'couldn\'t have'],
      answer: 1, source: '',
      translation: '私たちはみんなでトラックを押そうとしたが、どうしても動かなかった。',
      explanation: '「みんなでトラックを押そうとした」に続けてbutとあることから考え、「(物が)どうしても(〜しなかった)」という意味の②wouldn\'tを選ぶ。'
    },
    {
      id: 'f021', type: 'choice', section: 'frames', sectionName: 'FRAME',
      label: 'FRAME 021', tagClass: 'tag-f',
      question: 'When I was a child, my father ( ) tell me fairy tales.',
      options: ['would', 'should', 'might', 'used to'],
      answer: 3, source: '',
      translation: '私が子どものころ、父はよく私におとぎ話をしてくれた。',
      explanation: '「以前はよく〜(したものだ)」という過去の習慣的な動作を表すused toを用いた④を選ぶ。be used to doing「〜することに慣れている」と混同しないように注意する。'
    },
    {
      id: 'f022', type: 'choice', section: 'frames', sectionName: 'FRAME',
      label: 'FRAME 022', tagClass: 'tag-f',
      question: 'He hasn\'t remembered yet. He ( ) forgotten all our promises.',
      options: ['should have', 'can have', 'may have', 'must have'],
      answer: 3, source: '',
      translation: '彼はまだ覚えていない。彼は私たちの約束を全部忘れてしまったに違いない。',
      explanation: 'must have doneの形を用いて「〜したに違いない」という過去の事柄に対する推量を表せばいいので、④must haveを選ぶ。'
    },
    {
      id: 'f023', type: 'choice', section: 'frames', sectionName: 'FRAME',
      label: 'FRAME 023', tagClass: 'tag-f',
      question: 'This morning I ( ) called someone, but I was too busy to do so.',
      options: ['would have', 'could have', 'might have', 'should have'],
      answer: 3, source: '',
      translation: '今朝、誰かに電話するべきだったが、私はしすぎてそうすることができなかった。',
      explanation: 'should have doneを用いて「〜すべきだったのに(しなかった)」という過去の行為に対する後悔を表せばいいので、③should haveを選ぶ。'
    },
    {
      id: 'f024', type: 'choice', section: 'frames', sectionName: 'FRAME',
      label: 'FRAME 024', tagClass: 'tag-f',
      question: 'It looks threatening. I would rather ( ) a walk today.',
      options: ['not take', 'not to take', 'not taking', 'don\'t take'],
      answer: 0, source: '',
      translation: '明日が雨になりそうな天気を見込んでいる。今日の午後は散歩したくない。',
      explanation: 'would rather not do「〜したくない」という意味。would rather notのあとには動詞の原形がくるので、①not takeを選ぶ。'
    },
    {
      id: 'f025', type: 'choice', section: 'frames', sectionName: 'FRAME',
      label: 'FRAME 025', tagClass: 'tag-f',
      question: 'I suggested that she ( ) her original plan immediately.',
      options: ['changes', 'would change', 'should change', 'has changed'],
      answer: 2, source: '',
      translation: '私は当初の計画をすぐに変更するべきであると提案した。',
      explanation: '「(提案)」を表す動詞suggestに続くthat節中では、((should＋)do)が使われるので、③should changeを選ぶ。'
    }
  ],

  /* ───── EXERCISE A (STEP 02: 01–13 / STEP 03: 01–07) ───── */
  exA: [
    {
      id: 'a01', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 01', tagClass: 'tag-a',
      question: 'The FIFA World Cup ( ) once every four years.',
      options: ['holds', 'is held', 'has held', 'held'],
      answer: 1, source: '',
      translation: 'FIFAワールドカップは4年に1度開催される。',
      explanation: 'hold「〜を開く」は他動詞なので、The FIFA World Cupという動作を受ける側が主語になっているので、受動態②is heldを選ぶ。'
    },
    {
      id: 'a02', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 02', tagClass: 'tag-a',
      question: 'Cures for many more types of cancer ( ) very soon.',
      options: ['discover', 'are discovered', 'will be discovered', 'will discover'],
      answer: 2, source: '',
      translation: '多くの種類のがんの治療法がもうすぐ見つかるだろう。',
      explanation: 'discover「〜を見つける」は他動詞で、cures…という動作を受ける側が主語。文意より「もうすぐ（見つかるだろう）」という意味になるように、③will be discoveredを選ぶ。'
    },
    {
      id: 'a03', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 03', tagClass: 'tag-a',
      question: 'He ( ) while he was playing rugby.',
      options: ['injured', 'was injuring', 'was injured', 'has been injured'],
      answer: 2, source: '',
      translation: '彼はラグビーをしている間にけがをした。',
      explanation: 'injure「〜にけがをさせる」という意味の他動詞。while以下が過去の内容を表すので、過去の受動態③was injuredを選ぶ。'
    },
    {
      id: 'a04', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 04', tagClass: 'tag-a',
      question: 'These DVDs ( ) taken out.',
      options: ['must', 'must be', 'mustn\'t', 'mustn\'t be'],
      answer: 3, source: '',
      translation: 'これらのDVDは貸し出し禁止です。',
      explanation: 'take out「〜を貸り出す」という群動詞の受動態。助動詞mustn\'tを用いて、（助動詞＋be done）の形になっている④mustn\'t be takenを選ぶ。'
    },
    {
      id: 'a05', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 05', tagClass: 'tag-a',
      question: 'The phone ( ) connected since last week.',
      options: ['has not been', 'has been not', 'was not', 'is not'],
      answer: 0, source: '',
      translation: '電話が先週からつながらなかった。',
      explanation: 'disconnect「(電話)を切る」は他動詞。since last weekより(継続)を表す完了形の受動態(have[has] been done)の形になるように、①has beenを選ぶ。'
    },
    {
      id: 'a06', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 06', tagClass: 'tag-a',
      question: 'Yesterday I ( ) in Japanese by a foreigner.',
      options: ['spoke to', 'was speaking to', 'was spoken', 'was spoken to'],
      answer: 3, source: '',
      translation: '昨日私は外国人に日本語で話しかけられた。',
      explanation: 'speak to「〜に話しかける」という意味の群動詞。群動詞は1つの動詞とみなして受動態にするので、④spoken toを選ぶ。'
    },
    {
      id: 'a07', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 07', tagClass: 'tag-a',
      question: 'Music ( ) more and more to treat children with mental problems.',
      options: ['is being used', 'uses', 'is used', 'has used'],
      answer: 0, source: '',
      translation: '病院前の問題を持つ子どもを治療するのに、音楽がますます用いられている。',
      explanation: 'use「〜を使う」は他動詞。Musicという動作を受ける側が主語なので、進行形の受動態(be being done)の形になっている①is being usedを選ぶ。'
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
      translation: '今年の1年の今ごろは雪でおおわれているように思われない。',
      explanation: 'The mountainという動作を受ける側が主語になる受動態。「おおう」側を表すにはbyではなくwithを用いるので、④with snowを選ぶ。'
    },
    {
      id: 'a10', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 10', tagClass: 'tag-a',
      question: 'I was made ( ) my brother\'s room.',
      options: ['clean', 'cleaning', 'to clean', 'cleaned'],
      answer: 2, source: '',
      translation: '私は兄[弟]の部屋を掃除させられた。',
      explanation: '使役動詞make（make＋O＋do）「Oに〜させる」の形をとる。これが受動態になった場合はbe made to doと不定詞になるので、③to cleanを選ぶ。'
    },
    {
      id: 'a11', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 11', tagClass: 'tag-a',
      question: 'These rooms are always ( ) clean and tidy.',
      options: ['keeping', 'kept', 'keep', 'to keep'],
      answer: 1, source: '',
      translation: 'これらの部屋はいつも清潔で整とんして保たれた。',
      explanation: 'keepは「〜を〜に保つ」という意味の他動詞。These roomsという動作を受ける側が主語となる受動態にするので、(be kept＋C)の形になる②keptを選ぶ。'
    },
    {
      id: 'a12', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 12', tagClass: 'tag-a',
      question: 'Because the weather was very bad yesterday, the game ( ) until next week.',
      options: ['put off', 'was put', 'had to be put off', 'put'],
      answer: 2, source: '',
      translation: '昨日は天気がとても悪かったので、試合は来週まで延期しなければならなかった。',
      explanation: 'put off〜「〜を延期する」という群動詞。the gameという動作を受ける側が主語。had to do「〜しなければならなかった」を全体の1つの動詞と考える。(助動詞＋be done)の形になっている③had to be put offを選ぶ。'
    },
    {
      id: 'a13', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 13', tagClass: 'tag-a',
      question: 'The girl was heard ( ) in her room.',
      options: ['sing', 'singing', 'to sing', 'sang'],
      answer: 2, source: '',
      translation: 'その女の子は彼女の歌う歌で部屋に聞かれた。',
      explanation: 'hear(hear＋O＋do)「〜がするのを聞く」の形をとる。これが受動態になると、be heard to doと不定詞になるので、③to singを選ぶ。'
    },
    {
      id: 'a14', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 14', tagClass: 'tag-a',
      question: 'You ( ) jogging after dark in this area.',
      options: ['would better not go', 'had not better go', 'had better not go', 'better not go'],
      answer: 2, source: '',
      translation: 'この地区では暗くなった後ジョギングはしないほうがよい。',
      explanation: 'had betterの否定形は(had better not＋do)となるので、②had better notを選ぶ。'
    },
    {
      id: 'a15', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 15', tagClass: 'tag-a',
      question: 'You ( ) drive without a license. It\'s against the law.',
      options: ['must', 'must not', 'don\'t have to', 'had better'],
      answer: 1, source: '',
      translation: '免許なしで運転してはいけない。法律に違反している。',
      explanation: 'must notは強い禁止を表す③must notを選ぶ。①don\'t have toは「〜する必要がない」という意味なので、文意に合わない。'
    },
    {
      id: 'a16', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 16', tagClass: 'tag-a',
      question: 'Lucy ( ) be happy; she just got married to a great guy.',
      options: ['must', 'would', 'can\'t', 'should'],
      answer: 2, source: '',
      translation: 'ルーシーは幸せなはずがない、すばらしい男性と結婚しばかりだ。',
      explanation: '文意より「〜のはずがない」という確信を表す③can\'tを選ぶ。'
    },
    {
      id: 'a17', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 17', tagClass: 'tag-a',
      question: 'He was dissatisfied somewhere. He ( ) listen to me at all.',
      options: ['must not', 'should not', 'wouldn\'t', 'couldn\'t'],
      answer: 2, source: '',
      translation: '彼のどこかに不満があった。どうしても聞かない。',
      explanation: '「(物が)どうしても(〜しなかった)」という意味のwould notを用いて「彼が聞かない」という意味を表すように、③wouldn\'tを選ぶ。'
    },
    {
      id: 'a18', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 18', tagClass: 'tag-a',
      question: 'When I was a boy, there ( ) a large pond in front of the church.',
      options: ['would be', 'should be', 'must be', 'used to be'],
      answer: 3, source: '',
      translation: '私が少年だったころ、教会の前に大な池があった。',
      explanation: 'There used to be〜「(今はそうではないが)以前は〜があった」という意味になるので、④used to beを選ぶ。'
    },
    {
      id: 'a19', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 19', tagClass: 'tag-a',
      question: 'This letter is written in English that is too good. He ( ) written it himself.',
      options: ['must have', 'should have', 'can\'t have', 'would have'],
      answer: 2, source: '',
      translation: 'この手紙の英語はうますぎる。彼が自分で書いたということはありえない。',
      explanation: '「〜ではずがない」という③can\'t have doneの形を用いて「自分で書いたとは考えられない」という意味の形になるように、③haveが選ばれる。'
    },
    {
      id: 'a20', type: 'choice', section: 'exA', sectionName: 'Exercise A',
      label: 'Ex. A 20', tagClass: 'tag-a',
      question: 'That movie was wonderful. You ( ) come with me.',
      options: ['should have', 'must have', 'would have', 'might have'],
      answer: 0, source: '',
      translation: 'その映画はすばらしかった。あなたは私と一緒に来るべきでした。',
      explanation: 'should have doneの形を用いて「〜すべきだったのに（実際はしなかった）」という過去の行為に対する後悔を表せばいいよ。①shouldを選ぶ。'
    }
  ],

  /* ───── EXERCISE B ───── */
  exB: [
    {
      id: 'b01', type: 'error', section: 'exB', sectionName: 'Exercise B',
      label: 'Ex. B 01', tagClass: 'tag-b',
      question: 'The lecture on evolutionary biology ①was ②hold in a very cold room ③last night.',
      errorNum: 2, errorText: 'hold', correction: 'held',
      source: '',
      translation: '進化生物学の講義が、昨夜かなり寒い部屋で行われた。',
      explanation: 'hold「〜を開く」という意味の他動詞。The lecture on evolutionary biologyという動作を受ける側が主語になっているので、受動態になるように、②holdは過去分詞heldにする。'
    },
    {
      id: 'b02', type: 'error', section: 'exB', sectionName: 'Exercise B',
      label: 'Ex. B 02', tagClass: 'tag-b',
      question: 'If my husband calls, tell him ①I\'m ②attending an important meeting and ③cannot ④disturb.',
      errorNum: 4, errorText: 'disturb', correction: 'be disturbed',
      source: '',
      translation: 'もし夫が電話をかけてきたら、私は重要な会議に出席していてで中座できないと彼に伝えてください。',
      explanation: 'disturb「〜を邪魔する」という意味の他動詞。ここでは主語の「が」が動作を受ける側と考えられる。助動詞cannotがあるので、助動詞を含む受動態(助動詞＋be done)の形になる④disturb → be disturbedとする。'
    },
    {
      id: 'b03', type: 'error', section: 'exB', sectionName: 'Exercise B',
      label: 'Ex. B 03', tagClass: 'tag-b',
      question: 'Such topics as politics and religion ①should ②avoid in ③everyday ④conversation.',
      errorNum: 2, errorText: 'avoid', correction: 'be avoided',
      source: '',
      translation: '政治や宗教や他の人の人口のような話題は、日常会話では避けるべきだ。',
      explanation: 'avoidは「〜を避ける」という意味の他動詞。ここでは主語の「が」が動作を受ける側と考えられる。助動詞shouldがあるので、助動詞を含む受動態(助動詞＋be done)の形になるように、②should avoid → should be avoidedとする。'
    },
    {
      id: 'b04', type: 'error', section: 'exB', sectionName: 'Exercise B',
      label: 'Ex. B 04', tagClass: 'tag-b',
      question: 'It seems unavoidable that a great number of employees will have ①to lay off ②due to ③the poor business ④conditions.',
      errorNum: 1, errorText: 'to lay off', correction: 'to be laid off',
      source: '',
      translation: '会社が不況に見舞われたため、多数の従業員が解雇されなければならないであろうことは、避けられないだろう。',
      explanation: 'lay off「〜を解雇する」という意味の群動詞。主語のa great number of employeesが動作を受ける側。will have to doのあとに受動態の形が続くように、①to lay off → to be laid offとする。'
    },
    {
      id: 'b05', type: 'error', section: 'exB', sectionName: 'Exercise B',
      label: 'Ex. B 05', tagClass: 'tag-b',
      question: 'You ①should not have ②said such a thing to her. ③She looks very ④sad.',
      errorNum: 2, errorText: 'said', correction: 'said → shouldn\'t have said',
      source: '',
      translation: 'あなたはそのようなことを彼女に言うべきではなかった。彼女はとても悲しそうだ。',
      explanation: 'should not have doneの形を用いて「〜すべきではなかったのに（実際にはしてしまった）」という過去の行為に対する後悔を表せばいいので、④shouldn\'t have saidを選ぶ。'
    },
    {
      id: 'b06', type: 'error', section: 'exB', sectionName: 'Exercise B',
      label: 'Ex. B 06', tagClass: 'tag-b',
      question: 'Peter would ①rather stay home ②than go to ③a movie because he ④would prefer A to B.',
      errorNum: 1, errorText: 'rather stay', correction: 'rather stay (→ would rather A than B)',
      source: '',
      translation: 'ピーターは映画に行くよりはむしろ家にいたい。',
      explanation: 'would rather A than Bの「BよりAをしたほうがよい」という意味。A・Bにくる動詞は原形になるので、②goを選ぶ。'
    },
    {
      id: 'b07', type: 'error', section: 'exB', sectionName: 'Exercise B',
      label: 'Ex. B 07', tagClass: 'tag-b',
      question: 'Your teacher demanded that you ①should ②finish your homework ③by tomorrow ④afternoon.',
      errorNum: 2, errorText: 'finish', correction: 'finish (should + do)',
      source: '',
      translation: '君の先生は彼に明日の午後までに宿題を終わらせるように要求した。',
      explanation: '「(要求)を表す動詞demandに続くthat節では、((should＋)do)が使われるので、①finishを選ぶ。'
    },
    {
      id: 'b08', type: 'error', section: 'exB', sectionName: 'Exercise B',
      label: 'Ex. B 08', tagClass: 'tag-b',
      question: 'It is essential that the money ①be ②kept in a safe ③and be ④available when needed.',
      errorNum: 1, errorText: 'be', correction: 'be (should + do)',
      source: '',
      translation: '書籍が金庫に保管されていることはきわめて重要である。',
      explanation: 'essentialに続くthat節中では、((should＋)do)が使われるので、③beを選ぶ。'
    },
    {
      id: 'b09', type: 'error', section: 'exB', sectionName: 'Exercise B',
      label: 'Ex. B 09', tagClass: 'tag-b',
      question: '"The show starts at 7:30 and it\'s already 10 minutes past." "We ①must hurry. I ②really don\'t want ③to miss ④anything."',
      errorNum: 1, errorText: 'must', correction: 'have to',
      source: '',
      translation: '「早く、ショーは7時半の始まりなのに、もう10分過ぎだ」「急がなければ、少しも見逃したくないもの」',
      explanation: '文意から「〜しなければならない」という意味の④have toを選ぶ。'
    },
    {
      id: 'b10', type: 'error', section: 'exB', sectionName: 'Exercise B',
      label: 'Ex. B 10', tagClass: 'tag-b',
      question: 'According to the forecast, we ①needn\'t have ②brought ③raincoats or ④umbrellas.',
      errorNum: 1, errorText: 'needn\'t have', correction: 'needn\'t have (不要だったが持ってきた)',
      source: '',
      translation: '天気予報から見ると、私たちはレインコートや傘を持ってくる必要はなかった。',
      explanation: 'needは「〜する必要がある」という意味の助動詞として用いられる。「持ってくる必要がなかった(けれど持ってきてしまった)」という意味になるように③needn\'t have broughtを選ぶ。'
    },
    {
      id: 'b11', type: 'error', section: 'exB', sectionName: 'Exercise B',
      label: 'Ex. B 11', tagClass: 'tag-b',
      question: 'Since you have met him before, you ①don\'t ②have to introduce ③him to ④the professor.',
      errorNum: 2, errorText: 'have to', correction: 'need to (do not have to)',
      source: '',
      translation: 'もうすでに会ったことがあるので、あなたは彼をその教授に紹介する必要はない。',
      explanation: '「〜する必要はない」という意味になるように②do not have toを選ぶ。'
    },
    {
      id: 'b12', type: 'error', section: 'exB', sectionName: 'Exercise B',
      label: 'Ex. B 12', tagClass: 'tag-b',
      question: 'When we were children, we ①would go ②skating every winter ③at the rink ④nearby.',
      errorNum: 1, errorText: 'would go', correction: 'would go (過去の習慣)',
      source: '',
      translation: '私たちが子どもだったころ、毎年冬にはスケート場に行ったものだ。',
      explanation: '「私たちが子どもの頃の」という過去の事柄を表す②wouldを選ぶ。'
    },
    {
      id: 'b13', type: 'error', section: 'exB', sectionName: 'Exercise B',
      label: 'Ex. B 13', tagClass: 'tag-b',
      question: 'I ①cooking would rather ②eat out than ③cook at ④home.',
      errorNum: 1, errorText: 'cooking', correction: 'cook',
      source: '',
      translation: '私は家で料理をするよりはむしろ外食したい。',
      explanation: 'would rather A than Bの「BよりAを好む」という意味。A・Bにくる動詞は、ともに原形になるので、③cookingはcookにしなければならない。'
    },
    {
      id: 'b14', type: 'error', section: 'exB', sectionName: 'Exercise B',
      label: 'Ex. B 14', tagClass: 'tag-b',
      question: 'It is essential that you ①to attend ②tomorrow\'s meeting because ③important issues ④will be discussed.',
      errorNum: 1, errorText: 'to attend', correction: 'attend',
      source: '',
      translation: 'あなたが明日の会議に出席することが不可欠です。なぜなら重要問題が話し合われる予定だからです。',
      explanation: 'essentialに続くthat節中では、((should＋)do)が使われるので、①to attend → attendにしなければならない。'
    },
    {
      id: 'b15', type: 'error', section: 'exB', sectionName: 'Exercise B',
      label: 'Ex. B 15', tagClass: 'tag-b',
      question: 'Studying abroad used to ①being ②limited to ③wealthy ④people.',
      errorNum: 1, errorText: 'being', correction: 'be',
      source: '',
      translation: '外国の大学で勉強することは以前は裕福な人々に限られていた。',
      explanation: 'used toの後は動詞の原形がくるので、②beingはbeにしなければならない。'
    }
  ],

  /* ───── EXERCISE C ───── */
  exC: [
    {
      id: 'c01', type: 'exC', section: 'exC', sectionName: 'Exercise C',
      label: 'Ex. C 01', tagClass: 'tag-c',
      japanese: '語句を並べかえて英文を完成させなさい。',
      translation: '彼は自分の失敗が決意の欠如によって引き起こされたことを認めた。',
      prefix: 'He admitted that his failure',
      words: ['was', 'caused', 'by', 'his', 'lack', 'of', 'determination'],
      answer: 'was caused by his lack of determination',
      explanation: 'that節が後の失敗が(後の決意のなさによって)引き起こされたを表すと考える。受動態はbe＋過去分詞で表す。was caused by ～ は「〜によって引き起こされた」。'
    },
    {
      id: 'c02', type: 'exC', section: 'exC', sectionName: 'Exercise C',
      label: 'Ex. C 02', tagClass: 'tag-c',
      japanese: '語句を並べかえて英文を完成させなさい。',
      translation: '西サハラの自然の富は、その地域の将来が決まるまで利用されるべきではない。',
      prefix: 'The western Sahara\'s natural wealth',
      words: ['should', 'not', 'be', 'utilized', 'until', 'the', 'territory\'s', 'future', 'is', 'decided'],
      answer: 'should not be utilized until the territory\'s future is decided',
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
      explanation: '「〜を高く評価する」は群動詞speak highly of ～。受動態にするとis spoken highly of ～となり、このあとにbyを続ける。'
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
      words: ['had', 'better', 'not', 'walk', 'alone', 'at', 'night'],
      answer: 'had better not walk alone at night',
      explanation: 'had better not doで「〜しないほうがよい」という意味。notはbetterの後、動詞の前に置く。'
    },
    {
      id: 'c07', type: 'exC', section: 'exC', sectionName: 'Exercise C',
      label: 'Ex. C 07', tagClass: 'tag-c',
      japanese: '語句を並べかえて英文を完成させなさい。',
      translation: '試験はこれ以上難しくなりえなかった。',
      prefix: 'The examination',
      words: ['could', 'not', 'have', 'been', 'more', 'difficult'],
      answer: 'could not have been more difficult',
      explanation: 'could not have been more ～は「これ以上〜ではあり得なかった（＝最高に〜だった）」という慣用表現。'
    },
    {
      id: 'c08', type: 'exC', section: 'exC', sectionName: 'Exercise C',
      label: 'Ex. C 08', tagClass: 'tag-c',
      japanese: '語句を並べかえて英文を完成させなさい。',
      translation: '今年の時期にしては気候が暖かすぎる。',
      prefix: 'The weather is warmer than',
      words: ['it', 'ought', 'to', 'be', 'for', 'this', 'time', 'of', 'year'],
      answer: 'it ought to be for this time of year',
      explanation: 'ought to doで「〜すべき（はずの）」という意味。「この時期であるべき気温より暖かい」という比較表現。'
    },
    {
      id: 'c09', type: 'exC', section: 'exC', sectionName: 'Exercise C',
      label: 'Ex. C 09', tagClass: 'tag-c',
      japanese: '語句を並べかえて英文を完成させなさい。',
      translation: 'ケンジは地域でトップの大学に入学したのだから、試験ですごくよくできたに違いない。',
      prefix: 'Kenji',
      words: ['must', 'have', 'done', 'extremely', 'well', 'in', 'his', 'exams'],
      answer: 'must have done extremely well in his exams',
      explanation: 'must have doneで「〜したに違いない」という過去の事柄に対する強い推量を表す。'
    }
  ]
};

const EIGO_SENTENCES = [];
