import { CinemaModel } from "../models/cinema.model";

export class CinemaServices {
    static getCinemas(): CinemaModel[] {
        return [
            {
                id: 1,
                name: 'Cineplexx Galerija',
                location: 'Bulevar Vudro Vilson 12,11070 Beograd',
                workTime:'pon - pet 15-23h, sub - ned 11-23h',
                phone: '011 4500999',
                mapUrl:'https://www.google.com/maps/place/Cineplexx+Galerija/@44.8027469,20.442999,17z/data=!3m1!4b1!4m6!3m5!1s0x475a7b3644dcb6ff:0x8f2c75f6ef890a41!8m2!3d44.8027469!4d20.4455739!16s%2Fg%2F11lgdr198f?entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoASAFQAw%3D%3D'
            },
            {
                id: 2,
                name: 'Cineplexx BEO Shopping Center',
                location: 'Voji​slava Ilića 141i, Beograd 11000',
                workTime:'pon - pet 15-23h, sub - ned 11-23h',
                phone: '011 4231110',
                mapUrl:'https://www.google.com/maps/place/Cineplexx+BEO+Shopping+Center/@44.7868095,20.4996663,17z/data=!3m1!4b1!4m6!3m5!1s0x475a71cf3e884025:0xc1ceea4526c135ef!8m2!3d44.7868095!4d20.5022412!16s%2Fg%2F11k2q3hqq4?entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoASAFQAw%3D%3D'
            },
            {
                id: 3,
                name: 'Cineplexx UŠĆE Shopping Center',
                location: 'Bulevar Mihajla Pupina, Beograd 11070',
                workTime:'pon - pet 15-23h, sub - ned 11-23h',
                phone:'011 3113370',
                mapUrl:'https://www.google.com/maps/place/Cineplexx+U%C5%A0%C4%86E+Shopping+Center/@44.8153972,20.435662,17z/data=!3m1!4b1!4m6!3m5!1s0x475a655a4540fae7:0xf42dd2e559e04f2e!8m2!3d44.8153972!4d20.4382369!16s%2Fg%2F11b67dcnjf?entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoASAFQAw%3D%3D'
            },
            {
                id: 4,
                name: 'Cineplexx BIG Beograd',
                location: 'Višnjička 84, Beograd 11000',
                workTime:'pon - pet 15-23h, sub - ned 11-23h',
                phone:'011 4040780',
                mapUrl:'https://www.google.com/maps/place/Cineplexx+BIG+Beograd/@44.8171378,20.5048665,17z/data=!3m1!4b1!4m6!3m5!1s0x475a7af500f1f8b5:0xf6682e5399b6fd90!8m2!3d44.8171379!4d20.5097374!16s%2Fg%2F11dymvnvf7?entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoASAFQAw%3D%3D'
            },
            {
                id: 5,
                name: 'Cineplexx 4D Delta City',
                location: 'Jurija Gagarina 16-16a, Beograd 11070',
                workTime:'pon - pet 15-23h, sub - ned 11-23h',
                phone:'011 2203400',
                mapUrl:'https://www.google.com/maps/place/Cineplexx+4D+Delta+City/@44.8057763,20.4016261,17z/data=!3m1!4b1!4m6!3m5!1s0x475a6f8551e932ad:0x7247a33f2a131ad2!8m2!3d44.8057763!4d20.404201!16s%2Fg%2F1vj5y_gq?entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoASAFQAw%3D%3D'
            }
        ];
    }

    static getCinemaById(id: number) {
        return this.getCinemas().find(cinema=>cinema.id === id)
    }

    static getCinemaNames(): Promise<string[]> {
        return new Promise((resolve) => {
            resolve(this.getCinemas().map(cinema => cinema.name));
        });
    }
}