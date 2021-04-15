const tokens = {
    mrat: '0x6D949f9297A522c0f97C232CC209a67Bd7CfA471',
    avengec: '0x83CB33E78Bf03Fc07A6370e45a2C406222F0d410',
    rx: '0x8891de345808E77228677f0eFb56125DB1E93a49',
    mash: '0x787732f27D18495494cea3792ed7946BbCFF8db2',
    fairrocket: '0x9E8BbE508Cb5DB41a23a962398405c71436FDF28',
    fairfox: '0xF89E58400e4726DFa63B04c9e2b34c808270ffbf',
    fairhoge: '0x6fDb74841B167ff6A58552D2E00365dC554eD656',
    fairbsc: '0xcBfB07B453c52A287f42E1270eE1eBCc7C5eE823',
    mndao: '0x069B2619Eb24367A46Fda638Bd1b88Aa4daD7879',
    fairspace: '0x4D691BBEcE09A34BA5175639639146B25739cf35',
    mtp: '0xe56F12123c583De823720A603b2DC11D659C12fC',
    orfano: '0xEF2ec90e0b8D4CdFdB090989EA1Bc663F0D680BF',
    spe: '0xdBaAa36B347d56b77Ce0e36f050fCeEBbF9fbc38',
    shieldfinance: '0x5A054554b3F0C75063D29250984A921402E1E3a7',
    sode: '0x6e2307de122cd9465b7f47dd73a5F89BB29E4285',
    cold: '0x4c2377102a6fFE6150878b222a39D20b1e528290',
    gen: '0xB0F2939A1c0e43683E5954c9Fe142F7df9F8D967',
    bafe: '0x7bb362962F2a4E2089466C79566572B37CFc5D78',
    bscw: '0xCc5B7e738FaD86AB75821A9cE3494cd1786aE944',
    highnoon: '0xd96F875B7B9C95eEE51c8D01C11DEE6a8bb4F5c3',
    savemoon: '0xf4351554e76cF3Eb2280F3D7AdA9699B23D964C3',
    unf: '0x18D883F6647cB3195F55EB93BF9EE8ae824E3a6f',
    mmp: '0xEcB81D9a0fDD532440b8BfEEBaCC25e2035C5Db4',
    rm: '0x716690CE67379C2563508DCf5e0C4485B550A589',
    snowb: '0x7fdd3C80d4aE8C3B5D71aab17E13077E65037170',
    supern: '0x0C038Bc02C8C9945f194b17C703f800526900A74',
    hmdx: '0xAEE4164c1ee46ed0bbC34790f1a3d1Fc87796668',
    sv3mrs: '0x429F10b5a78De398E039d313c4CEaC4D7E51cdCB',
    gmne: '0xDD13bC4b81A4d4B9ac2DBDBcBB8150F7e351E018',
    straightmoon: '0x332552BBa8816CEbB5B1bDd0B9A2697b75C73831',
    degen: '0x661F09989485a671749A6444Ac5b7B032B468B88',
    rocket: '0x55472f6d96a371Bd0Bc4D40a305d9f5b294E34d9',
    jetmoon: '0x2e841bF1a959F5eDCDC320053810Ad86396F05eD',
    bafi: '0xA2f46fe221f34Dac4Cf078e6946A7cb4e373AD28',
    dnd: '0x34EA3F7162E6f6Ed16bD171267eC180fD5c848da',
    acorp: '0xc16EE527648E06676C90831Bed44512E0Db85Fe8',
    spacestation: '0x9cf571F3F3809e396b68f2e454aFF83914665db1',
    oddz: '0xCD40F2670CF58720b694968698A5514e924F742d',
    mdx: '0x9C65AB58d8d978DB963e63f2bfB7121627e3a739',
    llt: '0xD37c1417DA7Bf5b02ffDEa8d5427022DC88A0eE2',
    bgo: '0x579A6277a6c2c63a5b25006F63Bce5DC8D9c25e7',
    mooni: '0xEd438051437c22A9Ef249B68c7E292435fE8B858',
    yarrr: '0x6F0C00185D476Dd1D6D547e15Ae42bEeAE9b15c8',
    tulpar: '0x98D183c6B8B58976A38D5525F0A25fEc6a7e9989',
    sbgo: '0x53F39324Fbb209693332B87aA94D5519A1a49aB0',
    rupee: '0x7B0409A3A3f79bAa284035d48E1DFd581d7d7654',
    auto: '0xa184088a740c695E156F91f5cC086a06bb78b827',
    astro: '0x3835943D4013EF994E3062E6049D2a7415DaFf9e',
    jazz: '0x77F2a1E63054c45093abcB0B83f16a0CE79b7018',
    safelambo: '0x677f67907173Fc8ad1fcdd182418169cd8e9f80a',
    fls: '0x09879f54b11121CE0457258023401A4CeeF59cfD',
    foxy: '0x4354a4F710182966E55EA30CFa807FA1b821a67b',
    mib: '0xAb18C9FC3575664cB11b5DEF477212C9A1ceA809',
    wlqx: '0x4495e673eE53c61CE79c35D5e299733639362aEc',
    unicorn: '0xe3E1FabEaBD48491bD6902B0c32FDEee8D2Ff12b',
    water: '0x57f81252D1187754048F5aF1938226B9034B599f',
    srads: '0xbe3C147a45D731154B18dc0Ff5e119c9b84e6699',
    dot: '0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402',
    gya: '0x9458784486fb00C2D1a8740d5579207c42DBd602',
    euler: '0x3920123482070C1a2dff73AaD695c60e7c6F6862',
    pluto: '0x97a436E3d1544DcceD1fC879D7BB3a5Ef00C29Eb',
    totoro: '0x83C43fDc737541196C6085Ae4378dB3Dbaa90c99',
    satoshimoon: '0x433794e21A67a6e526597019eF70685D79eaB10b',
    jdi: '0x0491648C910ad2c1aFaab733faF71D30313Df7FC',
    fairbtc: '0x10E027343977e55BEBEAA6FC65804021829D41d4',
    magi: '0xc603b1fba6A5b502Be4f1Ab27591bF4e75A3460c',
    bta: '0xAd9787017e82f6368BbE4893b475CaadA2258564',
    ccake: '0x47C4f3ffc31c135AFC0C157068f6E0eEA90b7dC9',
    pekc: '0x050787DE0cF5Da03D9387b344334D51cAE5DD0Fd',
    bpdot: '0x557b3aB377bbD68DFC6dADEFafA3CC4e4B6677c6',
    ast: '0xa872E0a44BBd66c1486a756CB5BD3F0bEEC4e32e',
    dfr: '0x814C2A11f57c56A06b8F32b5daE255cc7dD51aA0',
    eps: '0xA7f552078dcC247C2684336020c03648500C6d9F',
    riskmoon: '0xa96f3414334F5A0A529ff5d9D8ea95f42147b8C9',
    scake: '0x2084907e318C6c45f74ae20792b366559FAAa791',
    zefi: '0x0288D3E353fE2299F11eA2c2e1696b4A648eCC07',
    swirl: '0x52d86850bc8207b520340B7E39cDaF22561b9E56',
    rads: '0x7ca1eBC56496E3D78E56D71A127ea9d1717c4bE0',
    ket: '0x5ddAe05d2f854926E8070b435d2dfe5edCa246D9',
    gofi: '0x6B8227A0E18bd35A10849601dB194B24aAB2C8ea',
    alloy: '0x5eF5994fA33FF4eB6c82d51ee1DC145c546065Bd',
    tfc: '0x339f6e1553E923FD27412dfaF18b5721EA580A15',
    diesel: '0xe1eA2E1907d93F154234CE3b5A7418faf175fE11',
    brn: '0x5749085C36A521f71AD2050Cb600B2165aabdF68',
    aioz: '0x33d08D8C7a168333a85285a68C0042b39fC3741D',
    pnix: '0xc25D94fc3f8D7bD1d88f89802fe075338F71dEC7',
    beam: '0x38d8b1ac6967C5714F935074DA9Ed63B16a65Edc',
    koth: '0x068968b263fCBD260b73175e930c6C920E7E1ba0',
    sbscs: '0xDC5e956bfFEf5Eab77357713bb5ED1c9B8cFc67C',
    vbswap: '0x4f0ed527e8A95ecAA132Af214dFd41F30b361600',
    drk: '0xE354dd77B58471F99795803aC06dBd5236632756',
    smoke: '0x5239fE1A8c0b6ece6AD6009D15315e02B1E7c4Ea',
    wbnb: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    cue: '0x9b9D617D3445f0147Ece2322BaCe8db2768D2770',
    kpad: '0xCFEfA64B0dDD611b125157C41cD3827f2e8e8615',
    belt: '0xE0e514c71282b6f4e823703a39374Cf58dc3eA4f',
    yfuni: '0x7EF548Ee7cA0855B18cC5372BD9A34678da43658',
    ybhoney: '0x5b147AD94f3f25f6aA94a58aBCcd6745Df36d7F7',
    chz006: '0x706954491EBFD6b38e5B1e6F079dBEfae0F5EBa0',
    rrr: '0x06037b7991836f5c25557ed59F2e18CDBCBF4767',
    bmxx: '0x4131b87F74415190425ccD873048C708F8005823',
    chow: '0x925f2C11b99c1A4c46606898ee91eD3D450cFedA',
    stri: '0x9b93c29595dd603f75854EbA3C5f4EE078EE4454',
    dcsx: '0x79191D164F4D9c689C47aa16f99Bf0e5a955c676',
    cake: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
    mir: '0x5B6DcF557E2aBE2323c48445E8CC948910d8c2c9',
    ybear: '0xA8dA060eBD32A753005c6Ee476A0D79177C6EA8b',
    mdg3: '0x5e8499d884B3086D0fC0c21423Fc427e31b7382C',
    bifi: '0xCa3F508B8e4Dd382eE878A314789373D80A5190A',
    eswap: '0x1b79708EeA29900DbbbcA8A5Ae620aC741618ae4',
    satan: '0xdC5A820A4b37521B00B69a9b069553A463a89d85',
    mdg: '0xC1eDCc306E6faab9dA629efCa48670BE4678779D',
    $messi: '0x05C6947918f6ac75920bC73bdcbd4D7Ee5b04C50',
    bcu: '0xC294a07Df611CFc515DcdC7D377648a7a0d85c8f',
    mdg2: '0x075FFCe0f10428C4d929032b37597b24f2a3ED51',
    light: '0x7B9c3Df47F3326FbC0674d51dc3EB0f2Df29F37F',
    wsa: '0x53b3bE80206DFC1E82389ebE656aF2e6f81c6BE6',
    sbdo: '0x0d9319565be7f53CeFE84Ad201Be3f40feAE2740',
    eth: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
    mee: '0x57aE681cF079740d1f2d7E0078a779B7443c2a21',
    start: '0x31D0a7AdA4d4c131Eb612DB48861211F63e57610',
    dsl: '0x72FEAC4C0887c12db21CEB161533Fd8467469e6b',
    pts: '0x35c36D08046BB21Ab4a1386842614220ddD18804',
    slme: '0x4fCfA6cC8914ab455B5b33Df916d90BFe70b6AB1',
    nar: '0xA1303E6199b319a891b79685F0537D289af1FC83',
    poocoin: '0xB27ADAfFB9fEa1801459a1a81B17218288c097cc',
    bfie: '0x81859801b01764D4f0Fa5E64729f5a6C3b91435b',
    sail: '0x8148b58393f00b4B379cBEb8018d3445E0b636a0',
    plz: '0x9ce15E6AC4b22b9163a668747b8D93ceFBAE5099',
    busd: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    bdo: '0x190b589cf9Fb8DDEabBFeae36a813FFb2A702454',
    ox: '0xE968C2EB5D39F2Ada89b43E109E313ACddF03F96',
    alpaca: '0x8F0528cE5eF7B51152A59745bEfDD91D97091d2F',
    watch: '0x7A9f28EB62C791422Aa23CeAE1dA9C847cBeC9b0',
    taste: '0xF34b702924751434Bdf83Acc2766947d4c38fBEE',
    btbb: '0xB1aC5dAC9099fDA18390901371Ce03c5eC637C89',
    soul: '0x67d012F731c23F0313CEA1186d0121779c77fcFE',
    mes: '0x5573d653Dd0b7265Af26D77055F4F6E9AeA291fC',
    ani: '0xaC472D0EED2B8a2f57a6E304eA7eBD8E88D1d36f',
    bake: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    naut: '0x05B339B0A346bF01f851ddE47a5d485c34FE220c',
    exp: '0x21F2d04191cC95718ebDb166C53Ef8B8E5F21DEa',
    mds: '0x242E46490397ACCa94ED930F2C4EdF16250237fa',
    ramen: '0x4F47A0d15c1E53F3d94c069C7D16977c29F9CB6B',
    bry: '0xf859Bf77cBe8699013d6Dbc7C2b926Aaf307F830',
    mss: '0xAcABD3f9b8F76fFd2724604185Fa5AFA5dF25aC6',
    ust: '0x23396cF899Ca06c4472205fC903bDB4de249D6fC',
    steel: '0x9001eE054F1692feF3A48330cB543b6FEc6287eb',
    daft: '0x8E83EB3cC2585b9648687C3d1D9C7a2d17448772',
    blimpsrock: '0xdF6d9fC61Bd8163b59d6381EC93aE1D3a4D95bB2',
    gren: '0x937Ec4c10d072633D4672855B1837BC45879c51D',
    wynaut: '0x067a5ad3f0f91AcF512fFE66Ea77f37b4DcaaF18',
    btd: '0xD1102332a213E21faF78B69C03572031F3552c33',
    banana: '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95',
    soups: '0x69F27E70E820197A6e495219D9aC34C8C6dA7EeE',
    zep: '0x2E291e1c9f85a86d0C58Ae15621aaC005a8b2EAD',
    kebab: '0x7979F6C54ebA05E18Ded44C4F986F49a5De551c2',
    nyac: '0x7E3656fcCf19583dc432FB3AF813E53EA566814B',
    wsote: '0x541E619858737031A1244A5d0Cd47E5ef480342c',
    d100: '0x9d8AAC497A4b8fe697dd63101d793F0C6A6EEbB6',
    iron: '0x7b65B489fE53fCE1F6548Db886C08aD73111DDd8',
    ebrh: '0xEae68564C96b1e1c471093A539836ae8Bf7C1B65',
    glto: '0x096901973AC5b4dd14728fAE04597b90B2a47da9',
    bts: '0xc2e1acef50aE55661855E8dcB72adB182A3cC259',
    ypanda: '0x9806aec346064183b5cE441313231DFf89811f7A',
    nyas: '0xD7410C38a86DCf3D5EC0F75e9763111E07D9C95b',
    swoon: '0x88f4f207F5DF54E95b53663829412Fc4F85a682e',
    imoon: '0x7DA85C84b8191A977750382f1B8f4de13dD79E3f',
    bwsb: '0x37F188beB2D6098AFcb9E2714691B9Afa937B01A',
    btcb: '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
    nya: '0xbFa0841F7a90c4CE6643f651756EE340991F99D5',
    mdo: '0x35e869B7456462b81cdB5e6e42434bD27f3F788c',
    msc: '0x8C784C49097Dcc637b93232e15810D53871992BF',
    rugbust: '0x57bb0f40479D7Dd0caa67f2A579273A8e9c038Ee',
    spore: '0x33A3d962955A3862C8093D1273344719f03cA17C',
    xblzd: '0x9a946c3Cb16c08334b69aE249690C236Ebd5583E',
    beth: '0x250632378E573c6Be1AC2f97Fcdf00515d0Aa91B',
    sushi: '0x947950BcC74888a40Ffa2593C5798F11Fc9124C4',
    soup: '0x94F559aE621F1c810F31a6a620Ad7376776fe09E',
    rasta: '0xE3e8cC42DA487d1116D26687856e9FB684817c52',
    usdt: '0x55d398326f99059fF775485246999027B3197955',
    bwjup: '0x0231f91e02DebD20345Ae8AB7D71A41f8E140cE7',
    fuel: '0x2090c8295769791ab7A3CF1CC6e0AA19F35e441A',
}
module.exports = tokens
