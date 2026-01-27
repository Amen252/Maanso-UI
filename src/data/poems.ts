export interface Poem {
    id: string;
    poetId: string;
    title: string;
    description: string;
    content: string[]; // Array of strings, each string is a stanza/line-group
    year?: string;
}

export const POEMS: Poem[] = [
    // Hadraawi
    {
        id: "beled-weyn",
        poetId: "hadraawi",
        title: "Beled Weyn",
        description: "One of Hadraawi's most famous romantic poems, describing a journey and a memorable encounter in the city of Beledweyne.",
        year: "1970s",
        content: [
            `Beerlula Hallow
      
      Degmadii Beledweyn
      Webigaa dhex, maroo
      Dhirtaa ku hareeraysan
      Dhulkeeduna waa beero
      
      Biyo dhex ceegagaan
      Dhulkeeduna waa beero`,

            `Baxsaney dhex martoo
      Buundoyinka hoostiyo
      Biyo dhex ceegagaan
      
      Bilicdaada haween
      Baalashaada timaha`,

            `Bulshaa kugu soo hirta
      Bilicdaada haween`,

            "Haddaan soo bixiyaa\nBaxsaneey tixahaaga\nQalbigaygu ba'aa\nOo waan beer dillaacaa"
        ]
    },
    {
        id: "hooyo",
        poetId: "hadraawi",
        title: "Hooyo (Mother)",
        description: "A tribute to mothers everywhere, acknowledging their sacrifices and unconditional love.",
        year: "1980s",
        content: [
            `Hooyooy la'aantaa
      Adduunyadu hubaal
      Habeen kama baxdeen
      Iftiinka hayada
      Hooyooy la'aantaa
      
      Hanaqaadka geedigu
      Hedi ma uu heleen
      Hooyooy la'aantaa`,

            `Haldhaan ma liseene
      Hashu ma ay irmaaneen
      Hooyooy la'aantaa`
        ]
    },

    // Gaarriye
    {
        id: "hagar-laawe",
        poetId: "gaarriye",
        title: "Hagar Laawe",
        description: "A poem about self-worth and resilience.",
        year: "1970s",
        content: [
            `Naftaydaan u hagar bixin
      Halyey weyni kuma jiro
      Haweenkuna ma liidaan
      Hantidiisu way dhiman
      
      Nin habaar qabaan ahay`,

            `Haddii aanan hiil u galin
      Hagar laawe noqon maayo
      Haddaanan u hiil galin`
        ]
    },

    // Timacadde
    {
        id: "kana-siib-kana-saar",
        poetId: "timacadde",
        title: "Kana Siib Kana Saar",
        description: "The historic poem recited on Independence Day, June 26, 1960. A symbol of Somali unity and sovereignty.",
        year: "1960",
        content: [
            `Sareeyoow ma nusqaamoow
      Aan siduu yahay fiirinee
      Kaana siib kanna saar
      
      Sareeyoow ma nusqaamoow
      Aan siduu yahay fiirinee
      Kaana siib kanna saar`,

            `Calankaan surayee
      Sida qorax soo baxdaye
      Saxansaxo udgoon badane
      
      Sareeyoow ma nusqaamoow
      Aan siduu yahay fiirinee
      Kaana siib kanna saar`
        ]
    },

    // Yam Yam
    {
        id: "soomaaligu-waa-mid",
        poetId: "yam-yam",
        title: "Soomaaligu Waa Mid",
        description: "A poem emphasizing the unity of the Somali people despite artificial borders.",
        year: "1980s",
        content: [
            `Soomaaligu waa mid
        Marna ma kala maarmo
        Meel uu joogaba`,

            `Midabkiisu waa mid
        Muuqiisu waa mid
        Afkiisuna waa mid`
        ]
    },

    // Dhoodaan
    {
        id: "giriyaad",
        poetId: "dhoodaan",
        title: "Giriyaad",
        description: "A satirical commentary on social interactions and human behavior.",
        year: "1990s",
        content: [
            `Nin gadh weyn
        Oo gunti xun
        Yaa ku gartay`,

            `Gabdhahaa u eeg
        Gidaaradaa u eeg
        Guryahaa u eeg`
        ]
    }
];
