// 2008/7/3 Scripted by K-Factory@migiwa
// 2009/1/27 Modified by K-Factory@migiwa

// *****************************************************************************
str_CenterT = 'Tie!';
str_CenterB = 'Undo last choice';

str_ImgPath = 'img/';
// 0:順番に　1:昔の
var bln_ResultMode = 1;
// 0:テキスト　1:イラスト　2:テキスト＋イラスト
var int_ResultImg = 2;
// イラスト表示時、何位までをイラスト表示にするか。
var int_ResultRank = 3;

// ソート用のテーブルを
// 0:残す　1:消す
var bln_ResultStyle = 0;

// ソート進捗バーの表示
// 0:表示　1:消す
var bln_ProgessBar = 1;

// Maximum number of result rows before being broken off into another table.
var maxRows = 35;

// * タイトル情報（編集可能。最後の行に”,”を付けないようにしてください）
var int_Colspan = 3;
var ary_TitleData = [
  "Cherry blossoms are blooming",
  "Girls Reform Manifest",
  "Reborn Superstar",
  "various"
];

// * キャラクター情報（編集可能。最後の行に”,”を付けないようにしてください）
// * 使用フラグ（0にするとソートに入りません）, 
//   "タイトルID"（先頭から0, 1, 2...）, 
//   {タイトル別参加フラグ}（1を入れると対象タイトルに入ります）,
//   "キャラクター名", "画像（空白の場合、キャラクター名が使用されます）"
//                                      [1,2,3,4,5,6,7,8,9,
var ary_CharacterData = [
  [1, "ghost mania",                                      [1,0,0,0], "Sorter/cherry.jpg"],
  [1, "Envy",                                             [1,0,0,0], "Sorter/cherry.jpg"],
  [1, "Cherry blossoms are blooming(Instrumental)",       [1,0,0,0], "Sorter/cherry.jpg"],
  [1, "Time Out",                                         [1,0,0,0], "Sorter/cherry.jpg"],
  [1, "ZERO",                                             [1,0,0,0], "Sorter/cherry.jpg"],
  [1, "Drastic Nadeshiko",                                [1,0,0,0], "Sorter/cherry.jpg"],

  [1, "Sunrise MISO-SOUP",                                [0,1,0,0], "Sorter/GRM.jpg"],
  [1, "Sentimental Heroine",                              [0,1,0,0], "Sorter/GRM.jpg"],
  [1, "Bukkowasu!!",                                      [0,1,0,0], "Sorter/GRM.jpg"],
  [1, "Our 7days war",                                    [0,1,0,0], "Sorter/GRM.jpg"],
  [1, "REIWA dating apps generation",                     [0,1,0,0], "Sorter/GRM.jpg"],
  [1, "Invisible wall",                                   [0,1,0,0], "Sorter/GRM.jpg"],
  [1, "We love sweets",                                   [0,1,0,0], "Sorter/GRM.jpg"],
  [1, "L.C.G",                                            [0,1,0,0], "Sorter/GRM.jpg"],
  [1, "Genkai numa life",                                 [0,1,0,0], "Sorter/GRM.jpg"],
  [1, "Want to TIE-UP",                                   [0,1,0,0], "Sorter/GRM.jpg"],

  [1, "Blast Off",                                        [0,0,1,0], "Sorter/RS.jpg"],
  [1, "Hyperdimension Galaxy",                            [0,0,1,0], "Sorter/RS.jpg"],
  [1, "NEET GAME",                                        [0,0,1,0], "Sorter/RS.jpg"],
  [1, "Be the Gal ~early summer ver.~",                   [0,0,1,0], "Sorter/RS.jpg"],
  [1, "Tales of Villain",                                 [0,0,1,0], "Sorter/RS.jpg"],
  [1, "Warning!!",                                        [0,0,1,0], "Sorter/RS.jpg"],
  [1, "Me, The Ultimate Invader of the Universe",         [0,0,1,0], "Sorter/RS.jpg"],
  [1, "Tousou",                                           [0,0,1,0], "Sorter/RS.jpg"],
  [1, "Pardon Me, I have to go now",                      [0,0,1,0], "Sorter/RS.jpg"],
  [1, "Today's Good Day & So Epic",                       [0,0,1,0], "Sorter/RS.jpg"],

  [1, "Believer (Imagine Dragons Cover",                  [0,0,0,1], "Sorter/believer.jpg"],
  [1, "Love Ranbu",                                       [0,0,0,1], "Sorter/LR.jpg"],
];
