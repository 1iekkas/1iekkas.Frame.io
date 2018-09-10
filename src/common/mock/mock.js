//引入mockjs
const Mock = require('mockjs')

const swiper = [
  'http://p1.music.126.net/blJL8aQsWjuDtCMbj-ifIw==/109951163526119219.jpg',
  'http://p1.music.126.net/C6_Djlp_lmUEGA5ZHjr1Vg==/109951163525665428.jpg',
  'http://p1.music.126.net/GFKjQtcMeHdw-hWqoNfkNQ==/109951163529593867.jpg',
  'http://p1.music.126.net/nav3AsmqxmF7q-yE38Q8qQ==/109951163527668004.jpg',
  'http://p1.music.126.net/zhthZh4RoM4JzgRe9iORvg==/109951163540855429.jpg',
  'http://p1.music.126.net/9zkP-doJwB4Zmv3ZPekRuQ==/109951163540860481.jpg',
]

const img = [
  'http://p1.music.126.net/KS7kCUfX3ydJ5bSwCMXC_w==/3417282145777733.jpg',
  'http://p1.music.126.net/5azQhYfgzdjac91H5cKdYg==/109951163277552304.jpg',
  'http://p1.music.126.net/t50H2fILq2AsxFrbeUjg-Q==/109951163137399025.jpg',
  'http://p1.music.126.net/BWQ0KbnXghA1b_71BifA2g==/109951163527295881.jpg',
  'http://p1.music.126.net/JGcyWxeFzA6Y59YD9_fBkQ==/109951162827912088.jpg',
  'http://p1.music.126.net/hH4UmteuzsqZHacrr3YS_g==/18358545649308968.jpg',
  'http://p1.music.126.net/fq_QMxWD6oRTh26y9HnZWg==/109951163515540840.jpg',
  'http://p1.music.126.net/oTHN_AKNBq9Cny_QD7rw1Q==/109951163515998853.jpg',
  'http://p1.music.126.net/ffKurGMmgRRY0BqTjf9XgQ==/109951163517968369.jpg',
  'http://p1.music.126.net/EulP3RBqbC8ZIV2r63iyog==/19138099393702171.jpg',
  'http://p1.music.126.net/Wj6bbOY93ZEWp2ESWodzKA==/109951163456883415.jpg',
  'http://p1.music.126.net/wCzxhMLkMUPus3s0e4r01w==/109951163518300546.jpg',
  'http://p1.music.126.net/tcYpiTo8Eu4mFVYbpiGSNQ==/109951163464916632.jpg',
  'http://p3.music.126.net/aoqkUm5eD_cES6pOp68fgg==/109951163433322377.jpg?param=200y200',
  'http://p1.music.126.net/La4hQSYIGIBbzQmHrRwUxg==/3426078232161392.jpg?param=140y140',
  'http://p1.music.126.net/ifnqiZLE99D8ZlPNnKftWg==/18806046883195668.jpg?param=140y140'
]

const name = [
  '总有人的梦想是星辰大海，总有人让梦想照进现实！',
  '「日系电子」瞬间心动！如梦似幻的极致旋律',
  '最是粤语最为情深 也唯独你最难忘怀',
  '夏天结束了，我们在霓虹灯下跳最后一支舞吧',
  '日系小清新恋歌｜想把世界送给你',
  'Dubstep/brostep【断头不歇.狂炸致命】',
  '奇 异 告 白，脱 单 灵 药',
  'Bass Institute｜Future Bass',
  '关门! 开启躲在房间听歌发呆模式啦喂',
  '一个渣男的自述：我出轨的那九年',
  '旧时光里的情歌｜我有了猫，也有了你',
  '⚡️18年7月新热电音推送',
  '节奏女声♬ 奏响快乐的旋律，活出真我的风采',
  'Tropic House‖夏日清新电子',
]

const avatarUrl = [
  'http://p1.music.126.net/itKGQZjyXuRCTynXQohBIA==/1382086120458223.jpg',
  'http://p1.music.126.net/TiyvESXsxEKIFGGoGsn_lA==/109951163528021868.jpg',
  'http://p1.music.126.net/nREKtke5skolFoaFlGsE2Q==/109951163199652304.jpg',
  'http://p2.music.126.net/3aBS-5MbmtCR4Ax0MbTm9w==/109951163032972993.jpg',
  'http://p2.music.126.net/sPXm1r4MQ_U1U1-NFlNunA==/109951163184684112.jpg',
  'http://p1.music.126.net/mmnNCKubbc5LA53ZWSWieA==/18758767883354777.jpg',
  'http://p1.music.126.net/TanC-GGOT1i2y1P2w9BIPw==/109951163055686115.jpg',
]

const nickname = [
  '1iekkas',
  'The Chainsmokers',
  '接个吻开一枪',
  'ROZAY',
  'Martin Garrix',
  'Zedd'
]

const tags = [
  '电子',
  '流行',
  '粤语',
  '推荐',
  '电台',
  '日系',
  '单曲',
]

//使用mockjs模拟数据
Mock.mock('/api/data',{
    'code':200,
    'playlists|6':[{
      'name|1':name,
      'coverImgUrl|1':img,
      }]  
})

Mock.mock('/api/personalized/song',{
  'code':200,
  'playlists|6':[{
    'name|1':name,
    'coverImgUrl|1':img,
    'creator':{
      'avatarUrl|1':avatarUrl,
      'nickname|1':nickname,
      'tag|1':tags
    }
    }]  
})

Mock.mock('/api/swiper',{
  'code':200,
  'swiper|4':[{
    'name|1':swiper
  }],  
})

Mock.mock('/api/mv',{
  'code':200,
  'playlists|6':[{
    'name|1':name,
    'coverImgUrl|1':img,
    'creator':{
      'avatarUrl|1':avatarUrl,
      'nickname|1':nickname,
      'tag|1':tags
    }
    }]  
})

Mock.mock('/api/scene',{
  'code':200,
  'playlists|6':[{
    'name|1':name,
    'coverImgUrl|1':img,
    'creator':{
      'avatarUrl|1':avatarUrl,
      'nickname|1':nickname,
      'tag|1':tags
    }
    }]  
})

Mock.mock('/api/dance',{
  'code':200,
  'playlists|6':[{
    'name|1':name,
    'coverImgUrl|1':img,
    'creator':{
      'avatarUrl|1':avatarUrl,
      'nickname|1':nickname,
      'tag|1':tags
    }
    }]  
})