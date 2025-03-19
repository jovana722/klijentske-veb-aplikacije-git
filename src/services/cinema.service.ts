import { CinemaModel } from "../models/cinema.model";

export class CinemaServices {
    static getCinemas(): CinemaModel[] {
        return [
            {
                id: 1,
                name: 'Cineplexx Galerija',
                location: 'Bulevar Vudro Vilson 12,11070 Beograd',
                workTime:'pon - pet 15-23h, sub - ned 11-23h',
                phone: '011 4500999'
            },
            {
                id: 2,
                name: 'Cineplexx BEO Shopping Center',
                location: 'Voji​slava Ilića 141i, Beograd 11000',
                workTime:'pon - pet 15-23h, sub - ned 11-23h',
                phone: '011 4231110'
            },
            {
                id: 3,
                name: 'Cineplexx UŠĆE Shopping Center',
                location: 'Bulevar Mihajla Pupina, Beograd 11070',
                workTime:'pon - pet 15-23h, sub - ned 11-23h',
                phone:'011 3113370'
            },
            {
                id: 4,
                name: 'Cineplexx BIG Beograd',
                location: 'Višnjička 84, Beograd 11000',
                workTime:'pon - pet 15-23h, sub - ned 11-23h',
                phone:'011 4040780'
            },
            {
                id: 5,
                name: 'Cineplexx 4D Delta City',
                location: 'Jurija Gagarina 16-16a, Beograd 11070',
                workTime:'pon - pet 15-23h, sub - ned 11-23h',
                phone:'011 2203400'
            },
            {
                id: 6,
                name: 'Cine Star',
                location: 'Radnička 9, Beograd 11030 ',
                workTime:'pon - pet 15-23h, sub - ned 11-23h',
                phone:'0901 011011'
            }
        ];
    }
}