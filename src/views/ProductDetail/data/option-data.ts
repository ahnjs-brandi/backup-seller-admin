const colors = [
  'Black',
  'White',
  'Gray',
  'Ivory',
  'Navy',
  'Brown',
  'Wine',
  'Purple',
  'Green',
  'Blue',
  'Red',
  'Pink',
  'Khaki',
  'Yellow',
  'Beige',
  'Light Pink',
  'Light Blue',
  'Light Green',
  'Peach',
  'Silver',
  'Gold',
  'Orange',
  '유광',
  '무광',
  'Violet',
  'Middle Blue',
  'Mint',
  'Deep Blue',
  'Lime',
  'Mustard',
  'Light Purple',
  'IndiPink',
  'Camel',
  'Charcoal',
  'Sky Blue',
  'Deep Pink',
  'Dark Blue',
  'Rose Gold',
  'Dark Brown',
  'Light Brown',
  'Light Gray',
  'Dark Gray',
  'Brick Red',
  'Olive',
  'Burgundy',
  'Dark Green',
  'Cocoa',
  'atmeal',
  'Light Beige',
  'Bluegreen',
  'Marsala',
  'Cream',
  'Mocha',
  'DeepGreen',
  'Lavender',
  'LightKhaki',
  'Lemon',
  'RoseBrown',
  'DarkBeige',
  'Stripe',
  'Check',
  'Melange',
  'Denim',
  'VioletPink',
  'KhakiGray',
  'Taupe',
  'Deepbeige',
  'Melangegray',
  '고방체크',
  '글랜체크',
  'Stripe Red',
  'flower',
  'Dot',
  'Lilac',
  'Cappuccino',
  'Bright green',
  'Hot pink',
  'Blue Denim',
  'Leopard',
  '블랙',
  '화이트',
  '그레이',
  '아이보리',
  '네이비',
  '블루',
  '레드',
  '핑크',
  '옐로우',
  '베이지',
  '연청',
  '민트',
  '진청',
  '연베이지',
  '중청',
  '소라',
  '그린',
  '연퍼플',
  '머스터트',
  '퍼플',
  '청록',
  'COMOUFLAGE',
  'ETHNIC-WHITE',
  '연핑크',
  '딥핑크',
  '인디핑크',
  '딥그린',
  '카키',
  '와인',
  '브라운',
  '실버',
  '크림',
  '차콜',
  '오렌지',
  'BBB',
  'BLUEJEAN',
  'CARGO',
  'GWR',
  'INCA',
  'IQUASSU',
  'MAYA',
  'NON',
  'NWN',
  'NWR',
  'NWRWN',
  'NYN',
  'YRB',
  'BLACK STRIPE',
  'RED STRIPE',
  'BLACK DOT',
  'NAVY DOT',
  'BK D+NA D',
  'BK S+RED S',
  'NWR+BLACK',
  'BLACK+BLACK',
  'NWR+NWN',
  'BEIGE+GREY',
  'NWN+NWN',
  'BK D+BLACK',
  'NWR+NWR',
  'CARGO+BEIGE',
  'GREY+GREY',
  'BK D+BK D',
  'BK S+BK S',
  '올리브',
  '라이트베이지',
  '다크베이지',
  '골드',
  '라임',
  '트블루',
  'pinkbeige',
  '그레이/끈탱크탑(탱크탑)',
  '그레이/숏탱크탑(미니브라탑)',
  '그레이/탱크탑(기본탱크탑)',
  '그레이/튜브탑(튜브탑)',
  '베이지/끈탱크탑(탱크탑)',
  '베이지/숏탱크탑(미니브라탑)',
  '베이지/탱크탑(기본탱크탑)',
  '베이지/튜브탑(튜브탑)',
  '블랙(착샷)/숏탱크탑(미니브라탑)',
  '블랙(착샷)/튜브탑(튜브탑)',
  '블랙/끈탱크탑(탱크탑)',
  '블랙/탱크탑(기본탱크탑)',
  '아이보리/끈탱크탑(탱크탑)',
  '아이보리/숏탱크탑(미니브라탑)',
  '아이보리/탱크탑(기본탱크탑)',
  '아이보리/튜브탑(튜브탑)',
  '피치핑크',
  '오트밀',
  'bokashi gray',
  'navy/stripe',
];

const sizes = [
  'Free',
  'XS',
  'S',
  'M',
  'L',
  'XL',
  'XXL',
  'XXXL',
  'XXXXL',
  'M(44-55)',
  'L(55-66)',
  'L(55-마른66)',
  '85',
  '90',
  '95',
  '100',
  '105',
  '25',
  '26',
  '27',
  '28',
  '29',
  '30',
  '32',
  '34',
  '35',
  '36',
  '37',
  '38',
  '39',
  '40',
  '210',
  '215',
  '220',
  '225',
  '230',
  '235',
  '240',
  '245',
  '250',
  '255',
  '260',
  '265',
  '270',
  '275',
  '280',
  '285',
  '290',
  '1호',
  '2호',
  '3호',
  '4호',
  '5호',
  '6호',
  '7호',
  '8호',
  '9호',
  '10호',
  '11호',
  '12호',
  '13호',
  '14호',
  '15호',
  '16호',
  '17호',
  '18호',
  '19호',
  '34[220~225]',
  '35[225~230]',
  '36[230~235]',
  '37[235~240]',
  '38[240~245]',
  '39[245~250]',
  '40[250~255]',
  '40.5[255-260]',
  '41[260~265]',
  '41.5[265-270]',
  '42[270~275]',
  '42.5[275-280]',
  '43[280~285]',
  '43.5[285-290]',
  '44[290~295]',
  '44.5[295-300]',
  '45[300~305]',
  'A컵',
  'B컵',
  'C컵',
  'D컵',
  '70ab',
  '70a',
  '70b',
  '70c',
  '70d',
  '70e',
  '70f',
  '70g',
  '75a',
  '75b',
  '75c',
  '75d',
  '75e',
  '75f',
  '75g',
  '75ab',
  '75bc',
  '80a',
  '85ab',
  '80b',
  '80c',
  '80d',
  '80e',
  '80f',
  '80g',
  '80ab',
  '80bc',
  '85a',
  '85b',
  '85c',
  '85d',
  '85e',
  '85f',
  '85g',
  '90a',
  '90b',
  '90c',
  '90d',
  '90e',
  '90f',
  '90g',
  '95a',
  '95b',
  '95c',
  '95d',
  '95e',
  '95f',
  '95g',
  '100a',
  '100b',
  '100c',
  '100d',
  '100e',
  '100f',
  '100g',
  '105a',
  '105b',
  '105c',
  '105d',
  '105e',
  '105f',
  '105g',
  '아이폰5s/SE',
  '아이폰6/6S',
  '아이폰6플러스/6s플러스',
  '아이폰7',
  '아이폰7플러스',
  '갤럭시S7',
  '갤럭시S7엣지',
  '갤럭시S8',
  '갤럭시S8플러스',
  '갤럭시노트5',
  '아이폰6s플러스/7플러스',
  '13인치',
  '15인치',
  '아이폰8',
  '아이폰8플러스',
  '아이폰X',
  '갤럭시S9',
  '갤럭시S9플러스',
  '갤럭시노트7',
  '갤럭시노트8',
  '아이폰 11',
  '아이폰 11 프로',
  '아이폰 11 프로 맥스',
  '아이폰 SE 2',
  '아이폰 12',
  '아이폰 12 미니',
  '아이폰 12 프로',
  '아이폰 12 프로 맥스',
  '갤럭시 S10e',
  '갤럭시 S10',
  '갤럭시 S10+',
  '갤럭시 S10 5G',
  '갤럭시 Z 폴드',
  '갤럭시 노트 10',
  '갤럭시 노트 10+',
  '갤럭시 A9 Pro',
  '갤럭시 A8s',
  '갤럭시 A10',
  '갤럭시 A10e',
  '갤럭시 Jean2',
  '갤럭시 A20e',
  '갤럭시 와이드4',
  '갤럭시 A20',
  '갤럭시 A30',
  '갤럭시 A40',
  '갤럭시 A50',
  '갤럭시 A80',
  '갤럭시 A90 5G',
  '갤럭시 M20',
  '갤럭시 S20',
  '갤럭시 S20+',
  '갤럭시 S20 Ultra 5G',
  '갤럭시 S20 FE',
  '갤럭시 S21',
  '갤럭시 S21+',
  '갤럭시 S21 Ultra',
  '갤럭시 Z 폴드2',
  '갤럭시 Z 플립',
  '갤럭시 노트20',
  '갤럭시 노트20 Ultra',
  '갤럭시 A21s',
  '갤럭시 A31',
  '갤럭시 A51',
  '갤럭시 A 퀀텀&갤럭시 A71',
  '갤럭시 A12',
  '갤럭시 A32',
  '갤럭시 A42',
  '갤럭시 M02s',
  'LG G8 ThinQ',
  'LG V50 ThinQ',
  'LG V50S ThinQ',
  'LG Q9',
  'LG Q9 One',
  'LG Q70',
  'LG X2(2019)',
  'LG VELVET',
  'LG WING',
  'LG Q51',
  'LG Q61',
  'LG Q92',
  'LG Q52',
];


export default {
  colors,
  sizes
};
