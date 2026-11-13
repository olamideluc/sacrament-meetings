import type { SacramentMeeting } from './types';

const meetings: SacramentMeeting[] = [
    {
        id: 1,
        date: '2026-05-03',
        meetingType: 'regular',
        presiding: 'Bishop Smith',
        conducting: 'Brother Jones',
        announcements: ['Ward temple night: May 10'],
        openingHymn: { number: 2, title: 'The Spirit of God' },
        openingPrayer: 'Sister Williams',
        wardBusiness: [
            { description: 'Sustaining of new Primary president' },
        ],
        stakeBusiness: false,
        sacramentHymn: {
            number: 169,
            title: 'In Remembrance of Thy Suffering',
        },
        speakers: [
            {
                name: 'Sister Brown',
                topic: 'Faith in Jesus Christ',
                type: 'speaker',
            },
            {
                name: 'Youth Choir',
                topic: '',
                type: 'musical-number',
            },
        ],
        closingHymn: {
            number: 31,
            title: 'O God, Our Help in Ages Past',
        },
        closingPrayer: 'Brother Davis',
    },
    {
        id: 2,
        date: '2026-05-10',
        meetingType: 'testimony',
        presiding: 'Bishop Smith',
        conducting: 'Brother Johnson',
        announcements: ['Mother’s Day celebration after the meeting'],
        openingHymn: { number: 19, title: 'We Thank Thee, O God, for a Prophet' },
        openingPrayer: 'Sister Anderson',
        wardBusiness: [],
        stakeBusiness: false,
        sacramentHymn: { number: 181, title: 'Jesus of Nazareth, Savior and King' },
        speakers: [
            {
                name: 'Ward Members',
                topic: '',
                type: 'speaker',
            },
        ],
        closingHymn: { number: 30, title: 'Come, Come, Ye Saints' },
        closingPrayer: 'Brother Thomas',
    },
    {
        id: 3,
        date: '2026-05-17',
        meetingType: 'regular',
        presiding: 'Bishop Smith',
        conducting: 'Brother Jones',
        announcements: ['Youth activity: May 22'],
        openingHymn: { number: 3, title: 'Now Let Us Rejoice' },
        openingPrayer: 'Brother Williams',
        wardBusiness: [
            { description: 'Presentation of Primary children' },
        ],
        stakeBusiness: true,
        sacramentHymn: { number: 193, title: 'I Stand All Amazed' },
        speakers: [
            {
                name: 'Sister Miller',
                topic: 'The Power of Prayer',
                type: 'speaker',
            },
            {
                name: 'Brother Clark',
                topic: 'Serving Others',
                type: 'speaker',
            },
        ],
        closingHymn: { number: 85, title: 'How Firm a Foundation' },
        closingPrayer: 'Sister Davis',
    },
    {
        id: 4,
        date: '2026-05-24',
        meetingType: 'stake',
        presiding: 'Stake President Wilson',
        conducting: 'Brother Harris',
        announcements: ['Stake conference preparation meeting'],
        openingHymn: { number: 27, title: 'Praise to the Man' },
        openingPrayer: 'Brother White',
        wardBusiness: [],
        stakeBusiness: true,
        sacramentHymn: { number: 185, title: 'Reverently and Meekly Now' },
        speakers: [
            {
                name: 'Stake Choir',
                topic: '',
                type: 'musical-number',
            },
            {
                name: 'President Wilson',
                topic: 'Strengthening Our Faith',
                type: 'speaker',
            },
        ],
        closingHymn: { number: 66, title: 'Rejoice, the Lord Is King!' },
        closingPrayer: 'Sister Harris',
    },
    {
        id: 5,
        date: '2026-05-31',
        meetingType: 'general',
        presiding: 'Elder Brown',
        conducting: 'Elder Davis',
        announcements: ['Regional leadership meeting next Sunday'],
        openingHymn: { number: 1, title: 'The Morning Breaks' },
        openingPrayer: 'Brother Clark',
        wardBusiness: [],
        stakeBusiness: false,
        sacramentHymn: { number: 174, title: 'While of These Emblems We Partake' },
        speakers: [
            {
                name: 'Elder Brown',
                topic: 'Following the Savior',
                type: 'speaker',
            },
            {
                name: 'Sister Green',
                topic: 'Living the Gospel Daily',
                type: 'speaker',
            },
        ],
        closingHymn: { number: 89, title: 'The Lord Is My Light' },
        closingPrayer: 'Brother Green',
    },
];

export function getMeetings(date?: string | null): SacramentMeeting[] {
    if (date) {
        return meetings.filter((meeting) => meeting.date === date);
    }

    return meetings;
}

export function getMeetingById(id: number): SacramentMeeting | null {
    return meetings.find((meeting) => meeting.id === id) ?? null;
}