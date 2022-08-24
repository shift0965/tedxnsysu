import conference2017 from './imgs/Conference2017.jpg'
import conference2018 from './imgs/Conference2018.png'
import xiecaini from './imgs/xiecaini.jpeg'
import huangshanliao from './imgs/huangshanliao.jpeg'
import nana from './imgs/nana.jpeg'
import disha from './imgs/disha.jpeg'
import hezhaoti from './imgs/hezhaoti.jpeg'
import qianshan from './imgs/qianshan.jpeg'
import liutianhao from './imgs/liutianhao.jpeg'

export const conference_over_years= [
    {   
        title:'2017年度大會',
        name:'「共生」',
        image: <img src={conference2017} alt='conference 2017'></img>,
        describe:[
            '共生，一詞共分為共存、共榮與互賴。',
            '共存，指不同的人類或其團體在同一個空間裡一起生活的現象。不排斥多樣，包容差異，強調和平與和諧，記憶過去衝突，反思其中問題，以促成理解共生。',
            '共榮，這個字是從生物學來的，是指異種生物不僅在互利的基礎上共同生活，同時體現大自然和諧。',
            '互賴，每個個體的努力成就，大群體才得圓滿，成就個人同時也成就群體，反之亦然。'
        ]
    },

    {
        title:'2018年度大會',
        name:'「迴游」',
        image:<img src={conference2018} alt='conference 2018'></img>,
        describe:[
        '洄游，是生物的本能，是對根源的追尋；洄游，代表的不只是數典不忘祖，懷抱感恩心外，更深一層的意義為審思、珍惜自己過去擁有的一切，不再欣羨抽象而迷幻的未來。',
        '回歸安全、初始的地方，萬物皆然。但環境的險惡、有意無意的阻撓，迫使追尋洄游之路成了奢望。時空前行，身陷誘惑與紛擾的囹圄，儘管苟存於世，卻在偌大世界中迷失方向。',
        '從兒時的天馬行空，到現今被現實綁架的無奈，想像的框架與限制正一層層加諸於身；赤子之心正逐漸被文化的五光十色渲染而淡卻。'
        ]
    },
]


export const conference = [
    {
        title: '千禧世代',
        videos:[
            {
                title: '面對茫然的一生',
                speaker: '珊茜 - 創作歌手',
                image: <img src={qianshan} alt='珊茜'></img>,
                link:'https://www.youtube.com/watch?v=1ifRn_9nOqY'
            },
            {
                title: '除了加油，你還可以對病人說什麼？',
                speaker: '謝采倪 - 病友社群創辦人',
                image: <img src={xiecaini} alt='謝采倪'></img>,
                link:'https://www.youtube.com/watch?v=kOF9URS59bc&t=19s'
            },
            {
                title: '心之所向處，就是成功',
                speaker: '黃山料 - 暢銷作家',
                image: <img src={huangshanliao} alt='黃山料'></img>,
                link:'https://www.youtube.com/watch?v=vTUGbW70En0&t=289s'
            },
            {
                title: '一個人，一場與世界的抗爭',
                speaker: '劉天浩 - 素人講者',
                image: <img src={liutianhao} alt='劉天浩'></img>,
                link:'https://www.youtube.com/watch?v=HpnM-IsHhrM'
            }
        ]
    },
    {
        title: '孤獨',
        videos:[
            {
                title: '獨處，聆聽內心的聲音',
                speaker: '蔡佳璇 - 心理師',
                image: <img src={nana} alt='nana'></img>,
                link:'https://www.youtube.com/watch?v=LJYR6gVDh2E&t=21s'
            },
            {
                title: 'Loneliness: A friend or foe',
                speaker: 'Deeksha Sharma - Doctor',
                image: <img src={disha} alt='Deeksha Sharma'></img>,
                link:'https://www.youtube.com/watch?v=H7r1vFi9kXY'
            },
        ]
    },
    {
        title: '惡勢力',
        videos:[
            {
                title: '不要害怕跳進深水區',
                speaker: '賀照緹 - 導演',
                image: <img src={hezhaoti} alt='賀照緹'></img>,
                link:'https://www.youtube.com/watch?v=Wd1XUzkT7d8'
            },
        ]
    }



]
