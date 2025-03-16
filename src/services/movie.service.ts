import axios from 'axios';
import { MovieResponse } from '../models/movie.model'; 

const client = axios.create({
    baseURL: 'https://movie.pequla.com/api',
    headers: {
        'Accept': 'application/json',
        'X-Client-Name': 'KVA/2025'
    },
  
    validateStatus: (status: number) => {
        return status === 200
    }
})
export class MovieService {
    static async getMovies(page = 0, size = 10): Promise<{ data: MovieResponse }> {
      return {
        data: {
          content: [
            {
              "movieId": 2,
              "internalId": "HO00014037",
              "corporateId": "A000015163",
              "directorId": 2,
              "title": "Bridžet Džouns: Luda za njim",
              "originalTitle": "Bridget Jones: Mad About the Boy",
              "description": "Dvostruka dobitnica Oskara Rene Zelveger vraća se ulozi koja je zauvek stvorila heroinu romantične komedije, ženu čiji je neponovljiv pristup životu i ljubavi redefinisao čitav filmski žanr.\n\nBridžet Džouns se prvi put pojavila na policama u književnom fenomenu Helen Filding „Dnevnik Bridžet Džouns“, koji je postao globalni bestseler i filmski blokbaster. Kao samohrana žena koja živi u Londonu, Bridžet Džouns je na specifičan način upoznala svet sa svojim romantičnim avanturama, a njena sposobnost da trijumfuje uprkos nedaćama dovela ju je do toga da se konačno uda za vrhunskog advokata Marka Darsija i postane majka njihovog dečaka. Konačno srećni.\n\nAli u filmu „Bridžet Džouns – Luda za njim“, Bridžet je ponovo sama, udovica je već četiri godine, jer je Mark ubijen u humanitarnoj misiji u Sudanu. Ona je sada samohrana majka devetogodišnjeg Bilija i četvorogodišnje Mejbl i zaglavljena je u emocionalnom vrtlogu, odgajajući svoju decu uz pomoć svojih odanih prijatelja, pa čak i svog bivšeg ljubavnika Danijela Klivera (Hju Grant).\n\nPod pritiskom svojih najbližih — Šaz, Džud i Toma, njene koleginice Mirande, majke i njenog ginekologa doktorke Rolings (dobitnica Oskara Ema Tompson) — da prokrče novi put ka životu i ljubavi, Bridžet se vraća na posao, isprobavajući čak i aplikacije za upoznavanje, gde ubrzo počne da je proganja sanjivi i entuzijastični mlađi muškarac (Leo Vudal iz Belog Lotusa). Žonglirajući između posla, kuće i romanse, Bridžet se bori sa osudom savršenih majki u školi, brine za Bilija kome nedostaje njegov otac i upušta se u niz neprijatnih susreta sa Bilijevim nastavnikom nauke (kandidat za Oskara Čuitel Edžiofor).",
              "shortDescription": "Četvrti nastavak poznate i veoma uspešne romantične komedije, zasnovan na istoimenom romanu.",
              "poster": "https://s3proxygw.cineplexx.at/cms-live/asset/_default_upload_bucket/BJMATB%20veci_712px446_1.jpg",
              "startDate": "2025-02-13",
              "shortUrl": "bridzet-dzouns-luda-za-njim",
              "runTime": 125,
              "createdAt": "2025-03-03T21:49:29.000Z",
              "updatedAt": null,
              "director": {
                "directorId": 2,
                "name": "Michael Morris",
                "createdAt": "2025-03-03T21:49:28.000Z"
              },
              "movieActors": [
                {
                  "movieActorId": 7,
                  "movieId": 2,
                  "actorId": 7,
                  "actor": {
                    "actorId": 7,
                    "name": "Emma Thompson",
                    "createdAt": "2025-03-03T21:49:28.000Z"
                  }
                },
                {
                  "movieActorId": 8,
                  "movieId": 2,
                  "actorId": 8,
                  "actor": {
                    "actorId": 8,
                    "name": "Hugh Grant",
                    "createdAt": "2025-03-03T21:49:28.000Z"
                  }
                },
                {
                  "movieActorId": 9,
                  "movieId": 2,
                  "actorId": 9,
                  "actor": {
                    "actorId": 9,
                    "name": "Chiwetel Ejiofor",
                    "createdAt": "2025-03-03T21:49:29.000Z"
                  }
                },
                {
                  "movieActorId": 10,
                  "movieId": 2,
                  "actorId": 10,
                  "actor": {
                    "actorId": 10,
                    "name": "Renée Zellweger",
                    "createdAt": "2025-03-03T21:49:29.000Z"
                  }
                },
                {
                  "movieActorId": 11,
                  "movieId": 2,
                  "actorId": 11,
                  "actor": {
                    "actorId": 11,
                    "name": "Leo Woodall",
                    "createdAt": "2025-03-03T21:49:29.000Z"
                  }
                }
              ],
              "movieGenres": [
                {
                  "movieGenreId": 4,
                  "movieId": 2,
                  "genreId": 4,
                  "genre": {
                    "genreId": 4,
                    "name": "Komedija",
                    "createdAt": "2025-03-03T21:49:29.000Z"
                  }
                },
                {
                  "movieGenreId": 5,
                  "movieId": 2,
                  "genreId": 1,
                  "genre": {
                    "genreId": 1,
                    "name": "Drama",
                    "createdAt": "2025-03-03T21:48:48.000Z"
                  }
                }
              ]
            },
            {
              "movieId": 3,
              "internalId": "HO00015421",
              "corporateId": "A000016655",
              "directorId": 3,
              "title": "Brutalista",
              "originalTitle": "The Brutalist",
              "description": "Emigrirajući iz Evrope posle Drugog svetskog rata, vizionarski arhitekta, Laslo Tot (Adrijen Brodi), dolazi u Ameriku, kako bi ponovo izgradio svoj život, profesiju i bio sa suprugom, Eržebet (Felisiti Džouns), od koje je tokom rata bio razdvojen, usled promena granica i režima. Sam, u tuđoj, čudnoj zemlji, Laslo se nastanjuje u Pensilvaniju, gde bogati industrijalac, Harison Li van Bjuren (Gaj Pirs), prepoznaje njegov talenat. Ali moć i nasleđe imaju i ogromnu cenu.\n\nFilm BRUTALISTA nakon 10 nominacija za Oskara i osvojena tri Zlatna globusa, za najbolji film, najbolju režiju (Brejdi Korbet) i za najboljeg glavnog glumca (Adrijen Brodi), mnogi nazivaju kinematografskim događajem godine.",
              "shortDescription": "10 nominacija za Oskara i osvojena tri Zlatna globusa, za najbolji film, najbolju režiju (Brejdi Korbet) i za najboljeg glavnog glumca (Adrijen Brodi)!",
              "poster": "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Brutalist/posterImage.jpg",
              "startDate": "2025-02-27",
              "shortUrl": "brutalista",
              "runTime": 215,
              "createdAt": "2025-03-03T21:49:32.000Z",
              "updatedAt": null,
              "director": {
                "directorId": 3,
                "name": "Brady Corbet",
                "createdAt": "2025-03-03T21:49:30.000Z"
              },
              "movieActors": [
                {
                  "movieActorId": 12,
                  "movieId": 3,
                  "actorId": 12,
                  "actor": {
                    "actorId": 12,
                    "name": "Felicity Jones",
                    "createdAt": "2025-03-03T21:49:31.000Z"
                  }
                },
                {
                  "movieActorId": 13,
                  "movieId": 3,
                  "actorId": 13,
                  "actor": {
                    "actorId": 13,
                    "name": "Raffey Cassidy",
                    "createdAt": "2025-03-03T21:49:31.000Z"
                  }
                },
                {
                  "movieActorId": 14,
                  "movieId": 3,
                  "actorId": 14,
                  "actor": {
                    "actorId": 14,
                    "name": "Stacy Martin",
                    "createdAt": "2025-03-03T21:49:31.000Z"
                  }
                },
                {
                  "movieActorId": 15,
                  "movieId": 3,
                  "actorId": 15,
                  "actor": {
                    "actorId": 15,
                    "name": "Guy Pearce",
                    "createdAt": "2025-03-03T21:49:31.000Z"
                  }
                },
                {
                  "movieActorId": 16,
                  "movieId": 3,
                  "actorId": 16,
                  "actor": {
                    "actorId": 16,
                    "name": "Joe Alwyn",
                    "createdAt": "2025-03-03T21:49:31.000Z"
                  }
                },
                {
                  "movieActorId": 17,
                  "movieId": 3,
                  "actorId": 17,
                  "actor": {
                    "actorId": 17,
                    "name": "Adrien Brody",
                    "createdAt": "2025-03-03T21:49:32.000Z"
                  }
                },
                {
                  "movieActorId": 18,
                  "movieId": 3,
                  "actorId": 18,
                  "actor": {
                    "actorId": 18,
                    "name": "Alessandro Nivola",
                    "createdAt": "2025-03-03T21:49:32.000Z"
                  }
                },
                {
                  "movieActorId": 19,
                  "movieId": 3,
                  "actorId": 19,
                  "actor": {
                    "actorId": 19,
                    "name": "Emma Laird",
                    "createdAt": "2025-03-03T21:49:32.000Z"
                  }
                },
                {
                  "movieActorId": 20,
                  "movieId": 3,
                  "actorId": 20,
                  "actor": {
                    "actorId": 20,
                    "name": "Isaach De Bankolé",
                    "createdAt": "2025-03-03T21:49:32.000Z"
                  }
                }
              ],
              "movieGenres": [
                {
                  "movieGenreId": 6,
                  "movieId": 3,
                  "genreId": 1,
                  "genre": {
                    "genreId": 1,
                    "name": "Drama",
                    "createdAt": "2025-03-03T21:48:48.000Z"
                  }
                }
              ]
            },  

            {
              "movieId": 4,
              "internalId": "HO00014957",
              "corporateId": "A000016174",
              "directorId": 4,
              "title": "Dogmen",
              "originalTitle": "Dog Man",
              "description": "Iz studija Drimvorks Animejšn, koji je stvorio omiljene blokbaster franšize, među kojima su Kung fu panda, Kako da dresirate svog zmaja i Mali šef, stiže nam filmska adaptacija literarnog fenomena Dejva Pilkija – DOGMEN. U pitanju je animirani film, inspirisan serijalom bestselera Njujork tajmsa koji nas upoznaje sa borbom kuca protiv strašnih kriminalaca!\n\nKada su verni policijski pas i njegov policajac, tokom zajedničke akcije doživeli veliku povredu, njih dvojica se spajaju šašavom operacijom koja im je spasila život i tako nastaje Dogmen. Dogmen se zakleo da će čuvati i služiti – i slušati komande „donesi“, „sedi“ i „prevrni se“.\n\nDok Dogmen prihvata svoj novi identitet i trudi se da oduševi svog šefa, moraće i da zaustavi prilično zle planove superzlikovca, mačka Pitija. Pitijev najnoviji plan je da se klonira, stvori mače, Malog Pitija i tako duplira svoje šanse u pravljenju zločina. Ali, kada Mali Piti ostvari neočekivani odnos sa Dogmenom, stvari će se zakomplikovati. \n\nKada Mali Piti padne u kandže zajedničkog neprijatelja, Dogmen i Piti nerado udružuju snage i kreću u trku sa vremenom, kako bi spasili mače. Tokom ove akcije, oni će otkriti moć porodice (i mačića!) koja je u stanju da spoji i pomiri čak i najveće neprijatelje.\n\nDejv Pilki, autor bestselera i dobitnik brojnih nagrada za ilustraciju, prvu priču o Dogmenu lansirao je 2016. godine, da bi do danas, ovaj omiljeni serijal imao 12 knjiga. Knjige su prodate u više od 60 miliona primeraka širom sveta i prevedene su na 47 jezika.",
              "shortDescription": "Pola čovek, pola pas, savršen junak.",
              "poster": "https://s3proxygw.cineplexx.at/cms-live/asset/_default_upload_bucket/Dog%20Man%20veci_712px446_3.jpg",
              "startDate": "2025-02-06",
              "shortUrl": "dogmen",
              "runTime": 95,
              "createdAt": "2025-03-03T21:49:36.000Z",
              "updatedAt": null,
              "director": {
                "directorId": 4,
                "name": "Peter Hastings",
                "createdAt": "2025-03-03T21:49:34.000Z"
              },
              "movieActors": [
                {
                  "movieActorId": 21,
                  "movieId": 4,
                  "actorId": 21,
                  "actor": {
                    "actorId": 21,
                    "name": "Stephen Root",
                    "createdAt": "2025-03-03T21:49:34.000Z"
                  }
                },
                {
                  "movieActorId": 22,
                  "movieId": 4,
                  "actorId": 22,
                  "actor": {
                    "actorId": 22,
                    "name": "Ricky Gervais",
                    "createdAt": "2025-03-03T21:49:34.000Z"
                  }
                },
                {
                  "movieActorId": 23,
                  "movieId": 4,
                  "actorId": 23,
                  "actor": {
                    "actorId": 23,
                    "name": "Pete Davidson",
                    "createdAt": "2025-03-03T21:49:35.000Z"
                  }
                },
                {
                  "movieActorId": 24,
                  "movieId": 4,
                  "actorId": 24,
                  "actor": {
                    "actorId": 24,
                    "name": "Isla Fisher",
                    "createdAt": "2025-03-03T21:49:35.000Z"
                  }
                },
                {
                  "movieActorId": 25,
                  "movieId": 4,
                  "actorId": 25,
                  "actor": {
                    "actorId": 25,
                    "name": "Billy Boyd",
                    "createdAt": "2025-03-03T21:49:35.000Z"
                  }
                },
                {
                  "movieActorId": 26,
                  "movieId": 4,
                  "actorId": 26,
                  "actor": {
                    "actorId": 26,
                    "name": "Lil Rel Howery",
                    "createdAt": "2025-03-03T21:49:35.000Z"
                  }
                },
                {
                  "movieActorId": 27,
                  "movieId": 4,
                  "actorId": 27,
                  "actor": {
                    "actorId": 27,
                    "name": "Poppy Liu",
                    "createdAt": "2025-03-03T21:49:35.000Z"
                  }
                }
              ],
              "movieGenres": [
                {
                  "movieGenreId": 7,
                  "movieId": 4,
                  "genreId": 4,
                  "genre": {
                    "genreId": 4,
                    "name": "Komedija",
                    "createdAt": "2025-03-03T21:49:29.000Z"
                  }
                },
                {
                  "movieGenreId": 8,
                  "movieId": 4,
                  "genreId": 5,
                  "genre": {
                    "genreId": 5,
                    "name": "Fantazija",
                    "createdAt": "2025-03-03T21:49:36.000Z"
                  }
                },
                {
                  "movieGenreId": 9,
                  "movieId": 4,
                  "genreId": 6,
                  "genre": {
                    "genreId": 6,
                    "name": "Animirani",
                    "createdAt": "2025-03-03T21:49:36.000Z"
                  }
                }
              ]
            }, 
            {
              "movieId": 5,
              "internalId": "HO00013351",
              "corporateId": "A000014394",
              "directorId": 5,
              "title": "Gladijator II",
              "originalTitle": "Gladiator 2",
              "description": "Legendarni reditelj, Ridli Skot, predstavlja nam svoj najnoviji film, „GLADIJATOR II“, nastavak epske sage o moći, intrigama i osveti, čija je radnja smeštena u drevnom Rimu. Nakon mnogo godina od trenutka kada je prisustvovao ubistvu odlikovanog junaka Maksimusa, koga je ubio njegov ujak, Lucije (Pol Meskal) je primoran da uđe u Koloseum. Njegov dom pokorio je imperator - tiranin, koji sada gvozdenom pesnicom upravlja Rimom. Sa gnevom u srcu, dok je budućnost Rima dovedena u pitanje, Lucije će morati da se osvrne ka svojoj prošlosti kako bi našao snagu i čast i kako bi vratio slavu Rimu i njegovom narodu.",
              "shortDescription": "Nakon mnogo godina od trenutka kada je prisustvovao ubistvu odlikovanog junaka Maksimusa, koga je ubio njegov ujak, Lucije (Pol Meskal) je primoran da uđe u Koloseum.",
              "poster": "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Gladiator%202/posterImage.jpg",
              "startDate": "2024-11-14",
              "shortUrl": "gladijator-II",
              "runTime": 148,
              "createdAt": "2025-03-03T21:49:40.000Z",
              "updatedAt": null,
              "director": {
                "directorId": 5,
                "name": "Ridley Scott",
                "createdAt": "2025-03-03T21:49:37.000Z"
              },
              "movieActors": [
                {
                  "movieActorId": 28,
                  "movieId": 5,
                  "actorId": 28,
                  "actor": {
                    "actorId": 28,
                    "name": "Connie Nielsen",
                    "createdAt": "2025-03-03T21:49:38.000Z"
                  }
                },
                {
                  "movieActorId": 29,
                  "movieId": 5,
                  "actorId": 29,
                  "actor": {
                    "actorId": 29,
                    "name": "Derek Jacobi",
                    "createdAt": "2025-03-03T21:49:38.000Z"
                  }
                },
                {
                  "movieActorId": 30,
                  "movieId": 5,
                  "actorId": 30,
                  "actor": {
                    "actorId": 30,
                    "name": "Denzel Washington",
                    "createdAt": "2025-03-03T21:49:38.000Z"
                  }
                },
                {
                  "movieActorId": 31,
                  "movieId": 5,
                  "actorId": 31,
                  "actor": {
                    "actorId": 31,
                    "name": "Pedro Pascal",
                    "createdAt": "2025-03-03T21:49:38.000Z"
                  }
                },
                {
                  "movieActorId": 32,
                  "movieId": 5,
                  "actorId": 32,
                  "actor": {
                    "actorId": 32,
                    "name": "Paul Mescal",
                    "createdAt": "2025-03-03T21:49:38.000Z"
                  }
                },
                {
                  "movieActorId": 33,
                  "movieId": 5,
                  "actorId": 33,
                  "actor": {
                    "actorId": 33,
                    "name": "Fred Hechinger",
                    "createdAt": "2025-03-03T21:49:39.000Z"
                  }
                },
                {
                  "movieActorId": 34,
                  "movieId": 5,
                  "actorId": 34,
                  "actor": {
                    "actorId": 34,
                    "name": "Joseph Quinn",
                    "createdAt": "2025-03-03T21:49:39.000Z"
                  }
                },
                {
                  "movieActorId": 35,
                  "movieId": 5,
                  "actorId": 35,
                  "actor": {
                    "actorId": 35,
                    "name": "Lior Raz",
                    "createdAt": "2025-03-03T21:49:39.000Z"
                  }
                }
              ],
              "movieGenres": [
                {
                  "movieGenreId": 10,
                  "movieId": 5,
                  "genreId": 1,
                  "genre": {
                    "genreId": 1,
                    "name": "Drama",
                    "createdAt": "2025-03-03T21:48:48.000Z"
                  }
                },
                {
                  "movieGenreId": 11,
                  "movieId": 5,
                  "genreId": 2,
                  "genre": {
                    "genreId": 2,
                    "name": "Akcija",
                    "createdAt": "2025-03-03T21:48:48.000Z"
                  }
                },
                {
                  "movieGenreId": 12,
                  "movieId": 5,
                  "genreId": 7,
                  "genre": {
                    "genreId": 7,
                    "name": "Avantura",
                    "createdAt": "2025-03-03T21:49:39.000Z"
                  }
                }
              ]
            },
            {
              "movieId": 6,
              "internalId": "HO00014336",
              "corporateId": "A000015495",
              "directorId": 6,
              "title": "Izolacija",
              "originalTitle": "Izolacija",
              "description": "Ova filmska priča koja ostavlja bez daha, vodi nas u zabačenu naučnu stanicu, smeštenu u napuštenim šumskim dubinama, u koju stiže istraživač Jovan (Miloš Biković), kako bi se bavio proučavanjem divljih životinja. Na početku, samoća mu se čini kao idealan beg od civilizacije, ali ubrzo počinju da ga uznemiravaju neobjašnjivi događaji. Kako vreme prolazi, Jovan postaje svestan da nije sam.",
              "shortDescription": "Ova filmska priča koja ostavlja bez daha, vodi nas u zabačenu naučnu stanicu, smeštenu u napuštenim šumskim dubinama, u koju stiže istraživač Jovan.",
              "poster": "https://s3proxygw.cineplexx.at/cms-live/asset/_default_upload_bucket/Izolacija%20poster%20B1_1920px446_3.jpg",
              "startDate": "2024-10-31",
              "shortUrl": "izolacija",
              "runTime": 82,
              "createdAt": "2025-03-03T21:49:43.000Z",
              "updatedAt": null,
              "director": {
                "directorId": 6,
                "name": "Marko Bacovic",
                "createdAt": "2025-03-03T21:49:41.000Z"
              },
              "movieActors": [
                {
                  "movieActorId": 36,
                  "movieId": 6,
                  "actorId": 36,
                  "actor": {
                    "actorId": 36,
                    "name": "Miloš Biković",
                    "createdAt": "2025-03-03T21:49:41.000Z"
                  }
                },
                {
                  "movieActorId": 37,
                  "movieId": 6,
                  "actorId": 37,
                  "actor": {
                    "actorId": 37,
                    "name": "Milena Predić",
                    "createdAt": "2025-03-03T21:49:41.000Z"
                  }
                },
                {
                  "movieActorId": 38,
                  "movieId": 6,
                  "actorId": 38,
                  "actor": {
                    "actorId": 38,
                    "name": "Anđela Jovanović",
                    "createdAt": "2025-03-03T21:49:42.000Z"
                  }
                },
                {
                  "movieActorId": 39,
                  "movieId": 6,
                  "actorId": 39,
                  "actor": {
                    "actorId": 39,
                    "name": "Miodrag 'Miki' Krstovic",
                    "createdAt": "2025-03-03T21:49:42.000Z"
                  }
                },
                {
                  "movieActorId": 40,
                  "movieId": 6,
                  "actorId": 40,
                  "actor": {
                    "actorId": 40,
                    "name": "Mladen Andrejević",
                    "createdAt": "2025-03-03T21:49:42.000Z"
                  }
                },
                {
                  "movieActorId": 41,
                  "movieId": 6,
                  "actorId": 41,
                  "actor": {
                    "actorId": 41,
                    "name": "Milutin Dapčević",
                    "createdAt": "2025-03-03T21:49:42.000Z"
                  }
                },
                {
                  "movieActorId": 42,
                  "movieId": 6,
                  "actorId": 42,
                  "actor": {
                    "actorId": 42,
                    "name": "Marko 'Mak' Pantelić",
                    "createdAt": "2025-03-03T21:49:42.000Z"
                  }
                },
                {
                  "movieActorId": 43,
                  "movieId": 6,
                  "actorId": 43,
                  "actor": {
                    "actorId": 43,
                    "name": "Alisa Lacko",
                    "createdAt": "2025-03-03T21:49:43.000Z"
                  }
                }
              ],
              "movieGenres": [
                {
                  "movieGenreId": 13,
                  "movieId": 6,
                  "genreId": 8,
                  "genre": {
                    "genreId": 8,
                    "name": "Triler",
                    "createdAt": "2025-03-03T21:49:43.000Z"
                  }
                }
              ]
            },
            {
              "movieId": 7,
              "internalId": "HO00014036",
              "corporateId": "A000015162",
              "directorId": 7,
              "title": "Kapetan Amerika: Vrli novi svet",
              "originalTitle": "Captain America: Brave New World",
              "description": "Nakon što se sreće sa novoizabranim predsednikom Amerike Tadijusom Rosom, koga igra Harison Ford koji se prvi put pojavljuje u Marvelovom filmskom univerzumu, Sem postaje svestan da se nalazi usred međunarodnog incidenta. On mora da otkrije razloge podle globalne zavere.",
              "shortDescription": "Nakon što se sreće sa novoizabranim predsednikom Amerike, koga igra Harison Ford, Sem postaje svestan da se nalazi usred međunarodnog incidenta.",
              "poster": "https://s3proxygw.cineplexx.at/cms-live/asset/_default_upload_bucket/ROCHE_007C_G_SRP-RS_70x100__712px446_1.jpg",
              "startDate": "2025-02-13",
              "shortUrl": "kapetan-amerika-vrli-novi-svet",
              "runTime": 118,
              "createdAt": "2025-03-03T21:49:46.000Z",
              "updatedAt": null,
              "director": {
                "directorId": 7,
                "name": "Julius Onah",
                "createdAt": "2025-03-03T21:49:44.000Z"
              },
              "movieActors": [
                {
                  "movieActorId": 44,
                  "movieId": 7,
                  "actorId": 44,
                  "actor": {
                    "actorId": 44,
                    "name": "Harrison Ford",
                    "createdAt": "2025-03-03T21:49:44.000Z"
                  }
                },
                {
                  "movieActorId": 45,
                  "movieId": 7,
                  "actorId": 45,
                  "actor": {
                    "actorId": 45,
                    "name": "Anthony Mackie",
                    "createdAt": "2025-03-03T21:49:45.000Z"
                  }
                },
                {
                  "movieActorId": 46,
                  "movieId": 7,
                  "actorId": 46,
                  "actor": {
                    "actorId": 46,
                    "name": "Tim Blake Nelson",
                    "createdAt": "2025-03-03T21:49:45.000Z"
                  }
                },
                {
                  "movieActorId": 47,
                  "movieId": 7,
                  "actorId": 47,
                  "actor": {
                    "actorId": 47,
                    "name": "Liv Tyler",
                    "createdAt": "2025-03-03T21:49:45.000Z"
                  }
                },
                {
                  "movieActorId": 48,
                  "movieId": 7,
                  "actorId": 48,
                  "actor": {
                    "actorId": 48,
                    "name": "Giancarlo Esposito",
                    "createdAt": "2025-03-03T21:49:45.000Z"
                  }
                },
                {
                  "movieActorId": 49,
                  "movieId": 7,
                  "actorId": 49,
                  "actor": {
                    "actorId": 49,
                    "name": "Shira Haas",
                    "createdAt": "2025-03-03T21:49:45.000Z"
                  }
                },
                {
                  "movieActorId": 50,
                  "movieId": 7,
                  "actorId": 50,
                  "actor": {
                    "actorId": 50,
                    "name": "Danny Ramirez",
                    "createdAt": "2025-03-03T21:49:46.000Z"
                  }
                },
                {
                  "movieActorId": 51,
                  "movieId": 7,
                  "actorId": 51,
                  "actor": {
                    "actorId": 51,
                    "name": "Carl Lumbly",
                    "createdAt": "2025-03-03T21:49:46.000Z"
                  }
                },
                {
                  "movieActorId": 52,
                  "movieId": 7,
                  "actorId": 52,
                  "actor": {
                    "actorId": 52,
                    "name": "Xosha Roquemore",
                    "createdAt": "2025-03-03T21:49:46.000Z"
                  }
                }
              ],
              "movieGenres": [
                {
                  "movieGenreId": 14,
                  "movieId": 7,
                  "genreId": 2,
                  "genre": {
                    "genreId": 2,
                    "name": "Akcija",
                    "createdAt": "2025-03-03T21:48:48.000Z"
                  }
                },
                {
                  "movieGenreId": 15,
                  "movieId": 7,
                  "genreId": 9,
                  "genre": {
                    "genreId": 9,
                    "name": "Naučna fantastika",
                    "createdAt": "2025-03-03T21:49:46.000Z"
                  }
                },
                {
                  "movieGenreId": 16,
                  "movieId": 7,
                  "genreId": 7,
                  "genre": {
                    "genreId": 7,
                    "name": "Avantura",
                    "createdAt": "2025-03-03T21:49:39.000Z"
                  }
                }
              ]
            },
            {
              "movieId": 8,
              "internalId": "HO00015063",
              "corporateId": "A000016285",
              "directorId": 8,
              "title": "Led Zeppelin",
              "originalTitle": "Becoming Led Zeppelin",
              "description": "Film za koji niko nije mislio da će biti snimljen. Uspon slavnog benda bio je brz i gotovo nedokumentovan. Pristupajući grupi i njihovim ličnim arhivama, uz punu podršku benda i nikad ranije viđenih snimaka ovaj film uvodi nas u zvuke i događaje rane karijere grupe Led Zeppelin.",
              "shortDescription": "Pristupajući grupi i njihovim ličnim arhivama, uz punu podršku benda i nikad ranije viđenih snimaka ovaj film uvodi nas u događaje rane karijere grupe Led Zeppelin.",
              "poster": "https://s3proxygw.cineplexx.at/cms-live/asset/_default_upload_bucket/led%20zeppelin%20POSTER%20ZA%20IMAX446.jpg",
              "startDate": "2025-02-07",
              "shortUrl": "led-zeppelin",
              "runTime": 121,
              "createdAt": "2025-03-03T21:49:49.000Z",
              "updatedAt": null,
              "director": {
                "directorId": 8,
                "name": "Bernard MacMahon",
                "createdAt": "2025-03-03T21:49:48.000Z"
              },
              "movieActors": [
                {
                  "movieActorId": 53,
                  "movieId": 8,
                  "actorId": 53,
                  "actor": {
                    "actorId": 53,
                    "name": "Jimmy Page",
                    "createdAt": "2025-03-03T21:49:48.000Z"
                  }
                },
                {
                  "movieActorId": 54,
                  "movieId": 8,
                  "actorId": 54,
                  "actor": {
                    "actorId": 54,
                    "name": "John Paul Jones",
                    "createdAt": "2025-03-03T21:49:48.000Z"
                  }
                },
                {
                  "movieActorId": 55,
                  "movieId": 8,
                  "actorId": 55,
                  "actor": {
                    "actorId": 55,
                    "name": "John Bonham",
                    "createdAt": "2025-03-03T21:49:49.000Z"
                  }
                },
                {
                  "movieActorId": 56,
                  "movieId": 8,
                  "actorId": 56,
                  "actor": {
                    "actorId": 56,
                    "name": "Robert Plant",
                    "createdAt": "2025-03-03T21:49:49.000Z"
                  }
                }
              ],
              "movieGenres": [
                {
                  "movieGenreId": 17,
                  "movieId": 8,
                  "genreId": 10,
                  "genre": {
                    "genreId": 10,
                    "name": "Dokumentarni film",
                    "createdAt": "2025-03-03T21:49:49.000Z"
                  }
                },
                {
                  "movieGenreId": 18,
                  "movieId": 8,
                  "genreId": 11,
                  "genre": {
                    "genreId": 11,
                    "name": "Muzički film",
                    "createdAt": "2025-03-03T21:49:49.000Z"
                  }
                }
              ]
            },
            {
              "movieId": 9,
              "internalId": "HO00015118",
              "corporateId": "A000016341",
              "directorId": 9,
              "title": "Majmun",
              "originalTitle": "The Monkey",
              "description": "Kada braća blizanci pronađu očevu staru igračku majmuna na tavanu, serija nečuvenih smrti rastura njihovu porodicu. Dvadeset pet godina kasnije, majmun počinje novi niz ubistava, primoravajući otuđenu braću da se suoče sa ukletom igračkom.",
              "shortDescription": "Zasnovan na kratkoj priči Stivena Kinga, u produkciji Džejmsa Vana (Prizivanje zla, Slagalica strave), MAJMUN je novo putovanje pisca i reditelja Osguda Perkinsa.",
              "poster": "https://s3proxygw.cineplexx.at/cms-live/asset/_default_upload_bucket/Monkey%20veci_712px446_1.jpg",
              "startDate": "2025-02-20",
              "shortUrl": "majmun",
              "runTime": 98,
              "createdAt": "2025-03-03T21:49:52.000Z",
              "updatedAt": null,
              "director": {
                "directorId": 9,
                "name": "Oz Perkins",
                "createdAt": "2025-03-03T21:49:50.000Z"
              },
              "movieActors": [
                {
                  "movieActorId": 57,
                  "movieId": 9,
                  "actorId": 57,
                  "actor": {
                    "actorId": 57,
                    "name": "Tatiana Maslany",
                    "createdAt": "2025-03-03T21:49:50.000Z"
                  }
                },
                {
                  "movieActorId": 58,
                  "movieId": 9,
                  "actorId": 58,
                  "actor": {
                    "actorId": 58,
                    "name": "Elijah  Wood ",
                    "createdAt": "2025-03-03T21:49:50.000Z"
                  }
                },
                {
                  "movieActorId": 59,
                  "movieId": 9,
                  "actorId": 59,
                  "actor": {
                    "actorId": 59,
                    "name": "Rohan Campbell",
                    "createdAt": "2025-03-03T21:49:51.000Z"
                  }
                },
                {
                  "movieActorId": 60,
                  "movieId": 9,
                  "actorId": 60,
                  "actor": {
                    "actorId": 60,
                    "name": "Theo James",
                    "createdAt": "2025-03-03T21:49:51.000Z"
                  }
                },
                {
                  "movieActorId": 61,
                  "movieId": 9,
                  "actorId": 61,
                  "actor": {
                    "actorId": 61,
                    "name": "Christian Convery",
                    "createdAt": "2025-03-03T21:49:51.000Z"
                  }
                },
                {
                  "movieActorId": 62,
                  "movieId": 9,
                  "actorId": 62,
                  "actor": {
                    "actorId": 62,
                    "name": "Sarah Levy",
                    "createdAt": "2025-03-03T21:49:51.000Z"
                  }
                },
                {
                  "movieActorId": 63,
                  "movieId": 9,
                  "actorId": 63,
                  "actor": {
                    "actorId": 63,
                    "name": "Laura Mennell",
                    "createdAt": "2025-03-03T21:49:51.000Z"
                  }
                },
                {
                  "movieActorId": 64,
                  "movieId": 9,
                  "actorId": 64,
                  "actor": {
                    "actorId": 64,
                    "name": "Colin O'Brien",
                    "createdAt": "2025-03-03T21:49:52.000Z"
                  }
                }
              ],
              "movieGenres": [
                {
                  "movieGenreId": 19,
                  "movieId": 9,
                  "genreId": 12,
                  "genre": {
                    "genreId": 12,
                    "name": "Horor",
                    "createdAt": "2025-03-03T21:49:52.000Z"
                  }
                }
              ]
            },
            {
              "movieId": 10,
              "internalId": "HO00015113",
              "corporateId": "A000016336",
              "directorId": 10,
              "title": "Marija",
              "originalTitle": "Maria",
              "description": "Burna, predivna i tragična priča o životu najveće operske pevačice, proživljena i zamišljena tokom njenih poslednjih dana u Parizu, sedamdesetih godina.",
              "shortDescription": "Film o Mariji Kalas.",
              "poster": "https://s3proxygw.cineplexx.at/cms-live/asset/_default_upload_bucket/maria%20rs%20446_1.jpg",
              "startDate": "2025-02-20",
              "shortUrl": "marija",
              "runTime": 124,
              "createdAt": "2025-03-03T21:49:55.000Z",
              "updatedAt": null,
              "director": {
                "directorId": 10,
                "name": "Pablo Larraín",
                "createdAt": "2025-03-03T21:49:53.000Z"
              },
              "movieActors": [
                {
                  "movieActorId": 65,
                  "movieId": 10,
                  "actorId": 65,
                  "actor": {
                    "actorId": 65,
                    "name": "Kodi Smit-McPhee",
                    "createdAt": "2025-03-03T21:49:53.000Z"
                  }
                },
                {
                  "movieActorId": 66,
                  "movieId": 10,
                  "actorId": 66,
                  "actor": {
                    "actorId": 66,
                    "name": "Haluk Bilginer",
                    "createdAt": "2025-03-03T21:49:54.000Z"
                  }
                },
                {
                  "movieActorId": 67,
                  "movieId": 10,
                  "actorId": 67,
                  "actor": {
                    "actorId": 67,
                    "name": "Angelina Jolie",
                    "createdAt": "2025-03-03T21:49:54.000Z"
                  }
                },
                {
                  "movieActorId": 68,
                  "movieId": 10,
                  "actorId": 68,
                  "actor": {
                    "actorId": 68,
                    "name": "Valeria Golino",
                    "createdAt": "2025-03-03T21:49:54.000Z"
                  }
                },
                {
                  "movieActorId": 69,
                  "movieId": 10,
                  "actorId": 69,
                  "actor": {
                    "actorId": 69,
                    "name": "Pierfrancesco Favino",
                    "createdAt": "2025-03-03T21:49:54.000Z"
                  }
                },
                {
                  "movieActorId": 70,
                  "movieId": 10,
                  "actorId": 70,
                  "actor": {
                    "actorId": 70,
                    "name": "Alba Rohrwacher",
                    "createdAt": "2025-03-03T21:49:54.000Z"
                  }
                }
              ],
              "movieGenres": [
                {
                  "movieGenreId": 20,
                  "movieId": 10,
                  "genreId": 1,
                  "genre": {
                    "genreId": 1,
                    "name": "Drama",
                    "createdAt": "2025-03-03T21:48:48.000Z"
                  }
                },
                {
                  "movieGenreId": 21,
                  "movieId": 10,
                  "genreId": 13,
                  "genre": {
                    "genreId": 13,
                    "name": "Biografija",
                    "createdAt": "2025-03-03T21:49:55.000Z"
                  }
                },
                {
                  "movieGenreId": 22,
                  "movieId": 10,
                  "genreId": 11,
                  "genre": {
                    "genreId": 11,
                    "name": "Muzički film",
                    "createdAt": "2025-03-03T21:49:49.000Z"
                  }
                }
              ]
            },
            {
              "movieId": 11,
              "internalId": "HO00014566",
              "corporateId": "A000015744",
              "directorId": 11,
              "title": "Meda Pedington u džungli",
              "originalTitle": "Paddington in Peru",
              "description": "Kad Pedington otkrije da je njegova voljena tetka Lusi nestala iz doma za penzionisane medvede, on i porodica Braun kreću u divljinu Perua da ne pronađu, a jedini trag do nje je mesto označeno na zagonetnoj karti. Odlučan u nameri da reši misteriju, Pedington kreće u uzbudljivu potragu kroz amazonske prašume kako bi pronašao svoju tetku... a možda otkrije i jedno od najlegendarnijih blaga na svetu.",
              "shortDescription": "Film Meda Pedington u džungli prikazuje omiljenog medveda i obožavaoca marmelade kako je sada izgubljen u džungli u uzbudljivoj pustolovini sa velikim izazovima.",
              "poster": "https://s3proxygw.cineplexx.at/cms-live/asset/_default_upload_bucket/PIP-Poster-B1-Boat-SRB-WEB_712px446_1.jpg",
              "startDate": "2025-01-09",
              "shortUrl": "meda-pedington-u-dzungli",
              "runTime": 107,
              "createdAt": "2025-03-03T21:49:59.000Z",
              "updatedAt": null,
              "director": {
                "directorId": 11,
                "name": "Dougal Wilson",
                "createdAt": "2025-03-03T21:49:56.000Z"
              },
              "movieActors": [
                {
                  "movieActorId": 71,
                  "movieId": 11,
                  "actorId": 71,
                  "actor": {
                    "actorId": 71,
                    "name": "Hugh Bonneville",
                    "createdAt": "2025-03-03T21:49:56.000Z"
                  }
                },
                {
                  "movieActorId": 72,
                  "movieId": 11,
                  "actorId": 72,
                  "actor": {
                    "actorId": 72,
                    "name": "Jim Broadbent",
                    "createdAt": "2025-03-03T21:49:56.000Z"
                  }
                },
                {
                  "movieActorId": 73,
                  "movieId": 11,
                  "actorId": 73,
                  "actor": {
                    "actorId": 73,
                    "name": "Emily Mortimer",
                    "createdAt": "2025-03-03T21:49:56.000Z"
                  }
                },
                {
                  "movieActorId": 74,
                  "movieId": 11,
                  "actorId": 74,
                  "actor": {
                    "actorId": 74,
                    "name": "Imelda Staunton",
                    "createdAt": "2025-03-03T21:49:57.000Z"
                  }
                },
                {
                  "movieActorId": 75,
                  "movieId": 11,
                  "actorId": 75,
                  "actor": {
                    "actorId": 75,
                    "name": "Olivia Colman",
                    "createdAt": "2025-03-03T21:49:57.000Z"
                  }
                },
                {
                  "movieActorId": 76,
                  "movieId": 11,
                  "actorId": 76,
                  "actor": {
                    "actorId": 76,
                    "name": "Antonio Banderas",
                    "createdAt": "2025-03-03T21:49:57.000Z"
                  }
                },
                {
                  "movieActorId": 77,
                  "movieId": 11,
                  "actorId": 77,
                  "actor": {
                    "actorId": 77,
                    "name": "Ben Whishaw",
                    "createdAt": "2025-03-03T21:49:57.000Z"
                  }
                },
                {
                  "movieActorId": 78,
                  "movieId": 11,
                  "actorId": 78,
                  "actor": {
                    "actorId": 78,
                    "name": "Julie Walters",
                    "createdAt": "2025-03-03T21:49:57.000Z"
                  }
                },
                {
                  "movieActorId": 79,
                  "movieId": 11,
                  "actorId": 79,
                  "actor": {
                    "actorId": 79,
                    "name": "Samuel Joslin",
                    "createdAt": "2025-03-03T21:49:58.000Z"
                  }
                },
                {
                  "movieActorId": 80,
                  "movieId": 11,
                  "actorId": 80,
                  "actor": {
                    "actorId": 80,
                    "name": "Madeleine  Harris",
                    "createdAt": "2025-03-03T21:49:58.000Z"
                  }
                },
                {
                  "movieActorId": 81,
                  "movieId": 11,
                  "actorId": 81,
                  "actor": {
                    "actorId": 81,
                    "name": "Carla Tous",
                    "createdAt": "2025-03-03T21:49:58.000Z"
                  }
                }
              ],
              "movieGenres": [
                {
                  "movieGenreId": 23,
                  "movieId": 11,
                  "genreId": 4,
                  "genre": {
                    "genreId": 4,
                    "name": "Komedija",
                    "createdAt": "2025-03-03T21:49:29.000Z"
                  }
                },
                {
                  "movieGenreId": 24,
                  "movieId": 11,
                  "genreId": 7,
                  "genre": {
                    "genreId": 7,
                    "name": "Avantura",
                    "createdAt": "2025-03-03T21:49:39.000Z"
                  }
                },
                {
                  "movieGenreId": 25,
                  "movieId": 11,
                  "genreId": 14,
                  "genre": {
                    "genreId": 14,
                    "name": "Porodični film",
                    "createdAt": "2025-03-03T21:49:58.000Z"
                  }
                }
              ]
            },
            {
              "movieId": 12,
              "internalId": "HO00012912",
              "corporateId": "A000013935",
              "directorId": 12,
              "title": "Mufasa: Kralj lavova",
              "originalTitle": "Mufasa: The Lion King",
              "description": "Mufasa: Kralj lavova osvrće se na Rafikija, poznatog šamana iz originalnog naslova, koji je zadužen da Simbinoj i Nalinoj ćerki Kiari prenese legendu o Mufasi. Ispričana u prisećanjima, priča predstavlja Mufasu kao mladunčeta bez roditelja, izgubljenog i samog sve dok ne upozna simpatičnog lava po imenu Taka, naslednika kraljeve loze, princa sa svetlom budućnošću koji pima Mufasu u svoju porodicu kao brata. Slučajan susret pokreće nevrovatno putovanje grupe u potrazi za svojom sudbinom, testirajući njihove veze dok zajedno rade na tome da izbegnu pretećeg i smrtonosnog neprijatelja.",
              "shortDescription": "Ispričana u prisećanjima, priča predstavlja Mufasu kao mladunčeta bez roditelja, izgubljenog i samog sve dok ne upozna simpatičnog lava po imenu Taka.",
              "poster": "https://s3proxygw.cineplexx.at/cms-live/asset/_default_upload_bucket/MUFAS_009D_G_SRP-RS_70x100__712px446_1.jpg",
              "startDate": "2024-12-19",
              "shortUrl": "mufasa-kralj-lavova",
              "runTime": 119,
              "createdAt": "2025-03-03T21:50:07.000Z",
              "updatedAt": null,
              "director": {
                "directorId": 12,
                "name": "Barry Jenkins",
                "createdAt": "2025-03-03T21:50:01.000Z"
              },
              "movieActors": [
                {
                  "movieActorId": 82,
                  "movieId": 12,
                  "actorId": 82,
                  "actor": {
                    "actorId": 82,
                    "name": "Anika Noni Rose",
                    "createdAt": "2025-03-03T21:50:01.000Z"
                  }
                },
                {
                  "movieActorId": 83,
                  "movieId": 12,
                  "actorId": 83,
                  "actor": {
                    "actorId": 83,
                    "name": "Seth  Rogen",
                    "createdAt": "2025-03-03T21:50:01.000Z"
                  }
                },
                {
                  "movieActorId": 84,
                  "movieId": 12,
                  "actorId": 84,
                  "actor": {
                    "actorId": 84,
                    "name": "Keith David",
                    "createdAt": "2025-03-03T21:50:02.000Z"
                  }
                },
                {
                  "movieActorId": 85,
                  "movieId": 12,
                  "actorId": 85,
                  "actor": {
                    "actorId": 85,
                    "name": "Mads Mikkelsen",
                    "createdAt": "2025-03-03T21:50:03.000Z"
                  }
                },
                {
                  "movieActorId": 86,
                  "movieId": 12,
                  "actorId": 86,
                  "actor": {
                    "actorId": 86,
                    "name": "Kelvin Harrison Jr.",
                    "createdAt": "2025-03-03T21:50:03.000Z"
                  }
                },
                {
                  "movieActorId": 87,
                  "movieId": 12,
                  "actorId": 87,
                  "actor": {
                    "actorId": 87,
                    "name": "Lennie James",
                    "createdAt": "2025-03-03T21:50:03.000Z"
                  }
                },
                {
                  "movieActorId": 88,
                  "movieId": 12,
                  "actorId": 88,
                  "actor": {
                    "actorId": 88,
                    "name": "Aaron Pierre",
                    "createdAt": "2025-03-03T21:50:04.000Z"
                  }
                },
                {
                  "movieActorId": 89,
                  "movieId": 12,
                  "actorId": 89,
                  "actor": {
                    "actorId": 89,
                    "name": "Billy Eichner",
                    "createdAt": "2025-03-03T21:50:04.000Z"
                  }
                },
                {
                  "movieActorId": 90,
                  "movieId": 12,
                  "actorId": 90,
                  "actor": {
                    "actorId": 90,
                    "name": "John Kani",
                    "createdAt": "2025-03-03T21:50:04.000Z"
                  }
                },
                {
                  "movieActorId": 91,
                  "movieId": 12,
                  "actorId": 91,
                  "actor": {
                    "actorId": 91,
                    "name": "Kagiso  Lediga",
                    "createdAt": "2025-03-03T21:50:05.000Z"
                  }
                },
                {
                  "movieActorId": 92,
                  "movieId": 12,
                  "actorId": 92,
                  "actor": {
                    "actorId": 92,
                    "name": "Beyoncé Knowles-Carter",
                    "createdAt": "2025-03-03T21:50:05.000Z"
                  }
                },
                {
                  "movieActorId": 93,
                  "movieId": 12,
                  "actorId": 93,
                  "actor": {
                    "actorId": 93,
                    "name": "Blue Ivy Carter",
                    "createdAt": "2025-03-03T21:50:05.000Z"
                  }
                },
                {
                  "movieActorId": 94,
                  "movieId": 12,
                  "actorId": 94,
                  "actor": {
                    "actorId": 94,
                    "name": "Thandiwe Newton",
                    "createdAt": "2025-03-03T21:50:06.000Z"
                  }
                },
                {
                  "movieActorId": 95,
                  "movieId": 12,
                  "actorId": 95,
                  "actor": {
                    "actorId": 95,
                    "name": "Tiffany Boone",
                    "createdAt": "2025-03-03T21:50:06.000Z"
                  }
                },
                {
                  "movieActorId": 96,
                  "movieId": 12,
                  "actorId": 96,
                  "actor": {
                    "actorId": 96,
                    "name": "Preston Nyman",
                    "createdAt": "2025-03-03T21:50:07.000Z"
                  }
                }
              ],
              "movieGenres": [
                {
                  "movieGenreId": 26,
                  "movieId": 12,
                  "genreId": 1,
                  "genre": {
                    "genreId": 1,
                    "name": "Drama",
                    "createdAt": "2025-03-03T21:48:48.000Z"
                  }
                },
                {
                  "movieGenreId": 27,
                  "movieId": 12,
                  "genreId": 7,
                  "genre": {
                    "genreId": 7,
                    "name": "Avantura",
                    "createdAt": "2025-03-03T21:49:39.000Z"
                  }
                },
                {
                  "movieGenreId": 28,
                  "movieId": 12,
                  "genreId": 6,
                  "genre": {
                    "genreId": 6,
                    "name": "Animirani",
                    "createdAt": "2025-03-03T21:49:36.000Z"
                  }
                }
              ]
            },
            {
              "movieId": 13,
              "internalId": "HO00014035",
              "corporateId": "A000015161",
              "directorId": 13,
              "title": "Nosferatu",
              "originalTitle": "Nosferatu",
              "description": "„NOSFERATU” po scenariju i u režiji Roberta Egersa je gotska priča o ukletoj mladoj ženi, zastrašujućem vampiru koji je zaljubljen u nju i njihovom opsesivnom odnosu koji uzrokuje neizrecivi užas.",
              "shortDescription": "„NOSFERATU” po scenariju i u režiji Roberta Egersa je gotska priča o ukletoj mladoj ženi, zastrašujućem vampiru koji je zaljubljen u nju i njihovom opsesivnom odnosu.",
              "poster": "https://s3proxygw.cineplexx.at/cms-live/asset/_default_upload_bucket/Nosferatu%20curtain%20veci_712px446_1.jpg",
              "startDate": "2025-01-02",
              "shortUrl": "nosferatu",
              "runTime": 133,
              "createdAt": "2025-03-03T21:50:14.000Z",
              "updatedAt": null,
              "director": {
                "directorId": 13,
                "name": "Robert Eggers",
                "createdAt": "2025-03-03T21:50:11.000Z"
              },
              "movieActors": [
                {
                  "movieActorId": 97,
                  "movieId": 13,
                  "actorId": 97,
                  "actor": {
                    "actorId": 97,
                    "name": "Willem Dafoe",
                    "createdAt": "2025-03-03T21:50:11.000Z"
                  }
                },
                {
                  "movieActorId": 98,
                  "movieId": 13,
                  "actorId": 98,
                  "actor": {
                    "actorId": 98,
                    "name": "Nicholas Hoult",
                    "createdAt": "2025-03-03T21:50:11.000Z"
                  }
                },
                {
                  "movieActorId": 99,
                  "movieId": 13,
                  "actorId": 99,
                  "actor": {
                    "actorId": 99,
                    "name": "Bill Skarsgård",
                    "createdAt": "2025-03-03T21:50:12.000Z"
                  }
                },
                {
                  "movieActorId": 100,
                  "movieId": 13,
                  "actorId": 100,
                  "actor": {
                    "actorId": 100,
                    "name": "Ralph Ineson",
                    "createdAt": "2025-03-03T21:50:13.000Z"
                  }
                },
                {
                  "movieActorId": 101,
                  "movieId": 13,
                  "actorId": 101,
                  "actor": {
                    "actorId": 101,
                    "name": "Aaron Taylor-Johnson",
                    "createdAt": "2025-03-03T21:50:13.000Z"
                  }
                },
                {
                  "movieActorId": 102,
                  "movieId": 13,
                  "actorId": 102,
                  "actor": {
                    "actorId": 102,
                    "name": "Emma Corrin",
                    "createdAt": "2025-03-03T21:50:13.000Z"
                  }
                },
                {
                  "movieActorId": 103,
                  "movieId": 13,
                  "actorId": 103,
                  "actor": {
                    "actorId": 103,
                    "name": "Simon McBurney",
                    "createdAt": "2025-03-03T21:50:13.000Z"
                  }
                },
                {
                  "movieActorId": 104,
                  "movieId": 13,
                  "actorId": 104,
                  "actor": {
                    "actorId": 104,
                    "name": "Lily-Rose  Depp",
                    "createdAt": "2025-03-03T21:50:13.000Z"
                  }
                }
              ],
              "movieGenres": [
                {
                  "movieGenreId": 29,
                  "movieId": 13,
                  "genreId": 1,
                  "genre": {
                    "genreId": 1,
                    "name": "Drama",
                    "createdAt": "2025-03-03T21:48:48.000Z"
                  }
                },
                {
                  "movieGenreId": 30,
                  "movieId": 13,
                  "genreId": 5,
                  "genre": {
                    "genreId": 5,
                    "name": "Fantazija",
                    "createdAt": "2025-03-03T21:49:36.000Z"
                  }
                },
                {
                  "movieGenreId": 31,
                  "movieId": 13,
                  "genreId": 12,
                  "genre": {
                    "genreId": 12,
                    "name": "Horor",
                    "createdAt": "2025-03-03T21:49:52.000Z"
                  }
                }
              ]
            },
            {
              "movieId": 14,
              "internalId": "HO00014563",
              "corporateId": "A000015741",
              "directorId": 14,
              "title": "Pored nas",
              "originalTitle": "Pored nas",
              "description": "Režija: Stevan Filipović\nUloge:  Slaven Došlo, Nikola Glišić, Darko Ivić, Gorica Regodić, Isidora Simijonović, Milica Majkić, Tihana Lazović, Milutin Mima Karadžić, Marko Panajotović\n\nStrahinja (Nikola Glišić) dobija poziv da učestvuje u „prvom pravom rijalitiju”, smeštenom u potpunoj divljini, izolovanom od civilizacije, na lokaciji za koju niko ne zna. Želeći da pobegne od senki svoje prošlosti, Strahinja prihvata poziv, nesvestan da će se uskoro suočiti sa svojim najvećim strahovima - uz neočekivano okupljanje bivših drugova iz srednje škole.\n\nI pre no što rijaliti počne, učesnici, koji se poznaju, ali godinama nisu bili u kontaktu, suočiće se izazovima i opasnostima, fizičkim i emotivnim bolom, i probudiće u sebi najdublje nagone, koji se graniče sa životinjskim.\n\nPodeljeni u dve grupe, svi imaju samo jedan cilj – da prežive, i sukob postaje neizbežan.\n\nSlaven Došlo, Nikola Glišić, Darko Ivić, Gorica Regodić, Milica Majkić i drugi ponovo su u ulogama koje smo zavoleli 2015. godine u filmu „Pored mene“.\n\n\nSada, kao odrasli ljudi, koji su na svojoj koži osetili svaki dodir sazrevanja, ljubavi, realnosti, odbačenosti, pohlepe i prijateljstva, biće u prilici da sebi postave ultimativno pitanje: koliko vredi svaki život i da li je lakše žrtvovati sebe ili drugog?\n\nIzvrsno pojačanje ekipi čine glumice Isidora Simijonović i Tihana Lazović. Specijalni gost u filmu je Milutin Mima Karadžić.",
              "shortDescription": "Posle više godina razdvojenosti, prijatelji iz srednje škole se sreću kao učesnici ekstremnog rijalitija. Cilj im je samo jedan – da prežive.",
              "poster": "https://s3proxygw.cineplexx.at/cms-live/asset/_default_upload_bucket/Pored%20nas%20za%20web446.jpg",
              "startDate": "2024-12-26",
              "shortUrl": "pored-nas",
              "runTime": 130,
              "createdAt": "2025-03-03T21:50:16.000Z",
              "updatedAt": null,
              "director": {
                "directorId": 14,
                "name": "Stevan Filipović",
                "createdAt": "2025-03-03T21:50:16.000Z"
              },
              "movieActors": [],
              "movieGenres": [
                {
                  "movieGenreId": 32,
                  "movieId": 14,
                  "genreId": 1,
                  "genre": {
                    "genreId": 1,
                    "name": "Drama",
                    "createdAt": "2025-03-03T21:48:48.000Z"
                  }
                },
                {
                  "movieGenreId": 33,
                  "movieId": 14,
                  "genreId": 2,
                  "genre": {
                    "genreId": 2,
                    "name": "Akcija",
                    "createdAt": "2025-03-03T21:48:48.000Z"
                  }
                },
                {
                  "movieGenreId": 34,
                  "movieId": 14,
                  "genreId": 7,
                  "genre": {
                    "genreId": 7,
                    "name": "Avantura",
                    "createdAt": "2025-03-03T21:49:39.000Z"
                  }
                }
              ]
            },
            {
              "movieId": 15,
              "internalId": "HO00015356",
              "corporateId": "A000016585",
              "directorId": 15,
              "title": "Poslednji udah",
              "originalTitle": "Last Breath",
              "description": "Zasnovan na istinitim događajima, film donosi impresivnu priču o timskom radu, izdržljivosti i trci s vremenom kako bi se postiglo nemoguće.",
              "shortDescription": "Napeti triler koji prati iskusne ronioce dok se suočavaju s izazovima okeana kako bi spasili člana posade zarobljenog stotinama metara ispod morske površine.",
              "poster": "https://s3proxygw.cineplexx.at/cms-live/asset/_default_upload_bucket/B1_LAST-BREATH_SRB_712px446_1.jpg",
              "startDate": "2025-02-27",
              "shortUrl": "poslednji-udah",
              "runTime": 93,
              "createdAt": "2025-03-03T21:50:19.000Z",
              "updatedAt": null,
              "director": {
                "directorId": 15,
                "name": "Alex Parkinson",
                "createdAt": "2025-03-03T21:50:17.000Z"
              },
              "movieActors": [
                {
                  "movieActorId": 105,
                  "movieId": 15,
                  "actorId": 105,
                  "actor": {
                    "actorId": 105,
                    "name": "Woody Harrelson",
                    "createdAt": "2025-03-03T21:50:18.000Z"
                  }
                },
                {
                  "movieActorId": 106,
                  "movieId": 15,
                  "actorId": 106,
                  "actor": {
                    "actorId": 106,
                    "name": "Simu Liu",
                    "createdAt": "2025-03-03T21:50:18.000Z"
                  }
                },
                {
                  "movieActorId": 107,
                  "movieId": 15,
                  "actorId": 107,
                  "actor": {
                    "actorId": 107,
                    "name": "Cliff Curtis",
                    "createdAt": "2025-03-03T21:50:18.000Z"
                  }
                },
                {
                  "movieActorId": 108,
                  "movieId": 15,
                  "actorId": 108,
                  "actor": {
                    "actorId": 108,
                    "name": "Finn Cole",
                    "createdAt": "2025-03-03T21:50:19.000Z"
                  }
                }
              ],
              "movieGenres": [
                {
                  "movieGenreId": 35,
                  "movieId": 15,
                  "genreId": 8,
                  "genre": {
                    "genreId": 8,
                    "name": "Triler",
                    "createdAt": "2025-03-03T21:49:43.000Z"
                  }
                }
              ]
            },
            {
              "movieId": 16,
              "internalId": "HO00014956",
              "corporateId": "A000016173",
              "directorId": 16,
              "title": "Požuda",
              "originalTitle": "Babygirl",
              "description": "Ugledna poslovna žena stavlja svoju karijeru i porodicu na kocku kada započne burnu aferu sa svojim mnogo mlađim pripravnikom.",
              "shortDescription": "Ugledna poslovna žena stavlja svoju karijeru i porodicu na kocku kada započne burnu aferu sa svojim mnogo mlađim pripravnikom.",
              "poster": "https://s3proxygw.cineplexx.at/cms-live/asset/_default_upload_bucket/Babygirl%20tizer%20veci_712px446_1.jpg",
              "startDate": "2025-01-16",
              "shortUrl": "pozuda",
              "runTime": 114,
              "createdAt": "2025-03-03T21:50:22.000Z",
              "updatedAt": null,
              "director": {
                "directorId": 16,
                "name": "Halina Reijn",
                "createdAt": "2025-03-03T21:50:20.000Z"
              },
              "movieActors": [
                {
                  "movieActorId": 109,
                  "movieId": 16,
                  "actorId": 109,
                  "actor": {
                    "actorId": 109,
                    "name": "Nicole Kidman",
                    "createdAt": "2025-03-03T21:50:20.000Z"
                  }
                },
                {
                  "movieActorId": 110,
                  "movieId": 16,
                  "actorId": 110,
                  "actor": {
                    "actorId": 110,
                    "name": "Harris Dickinson",
                    "createdAt": "2025-03-03T21:50:20.000Z"
                  }
                },
                {
                  "movieActorId": 111,
                  "movieId": 16,
                  "actorId": 76,
                  "actor": {
                    "actorId": 76,
                    "name": "Antonio Banderas",
                    "createdAt": "2025-03-03T21:49:57.000Z"
                  }
                },
                {
                  "movieActorId": 112,
                  "movieId": 16,
                  "actorId": 111,
                  "actor": {
                    "actorId": 111,
                    "name": "Jean Reno",
                    "createdAt": "2025-03-03T21:50:21.000Z"
                  }
                },
                {
                  "movieActorId": 113,
                  "movieId": 16,
                  "actorId": 112,
                  "actor": {
                    "actorId": 112,
                    "name": "Anoop Desai",
                    "createdAt": "2025-03-03T21:50:21.000Z"
                  }
                },
                {
                  "movieActorId": 114,
                  "movieId": 16,
                  "actorId": 113,
                  "actor": {
                    "actorId": 113,
                    "name": "Sophie Wilde",
                    "createdAt": "2025-03-03T21:50:21.000Z"
                  }
                }
              ],
              "movieGenres": [
                {
                  "movieGenreId": 36,
                  "movieId": 16,
                  "genreId": 8,
                  "genre": {
                    "genreId": 8,
                    "name": "Triler",
                    "createdAt": "2025-03-03T21:49:43.000Z"
                  }
                },
                {
                  "movieGenreId": 37,
                  "movieId": 16,
                  "genreId": 3,
                  "genre": {
                    "genreId": 3,
                    "name": "Kriminalistički",
                    "createdAt": "2025-03-03T21:48:48.000Z"
                  }
                },
                {
                  "movieGenreId": 38,
                  "movieId": 16,
                  "genreId": 15,
                  "genre": {
                    "genreId": 15,
                    "name": "Misterija",
                    "createdAt": "2025-03-03T21:50:21.000Z"
                  }
                }
              ]
            },
            {
              "movieId": 17,
              "internalId": "HO00014961",
              "corporateId": "A000016178",
              "directorId": 17,
              "title": "Pratnja",
              "originalTitle": "Companion",
              "description": "New Line Cinema — studio koji je zaslužan za veliki hit “Notebook” — i nekonvencionalni tvorci filma “Varvarin” srdačno vas pozivaju da doživite novu vrstu ljubavne priče…kakvu još niste videli na velikim platnima.",
              "shortDescription": "Nekonvencionalni tvorci filma “Varvarin” srdačno vas pozivaju da doživite novu vrstu ljubavne priče…kakvu još niste videli na velikim platnima.",
              "poster": "https://s3proxygw.cineplexx.at/cms-live/asset/_default_upload_bucket/RS_COMPAN_VERT_MAIN_2764x4096_INTL446_1.jpg",
              "startDate": "2025-01-30",
              "shortUrl": "pratnja",
              "runTime": 97,
              "createdAt": "2025-03-03T21:50:25.000Z",
              "updatedAt": null,
              "director": {
                "directorId": 17,
                "name": "Drew Hancock",
                "createdAt": "2025-03-03T21:50:23.000Z"
              },
              "movieActors": [
                {
                  "movieActorId": 115,
                  "movieId": 17,
                  "actorId": 114,
                  "actor": {
                    "actorId": 114,
                    "name": "Rupert Friend",
                    "createdAt": "2025-03-03T21:50:23.000Z"
                  }
                },
                {
                  "movieActorId": 116,
                  "movieId": 17,
                  "actorId": 115,
                  "actor": {
                    "actorId": 115,
                    "name": "Marc Menchaca",
                    "createdAt": "2025-03-03T21:50:24.000Z"
                  }
                },
                {
                  "movieActorId": 117,
                  "movieId": 17,
                  "actorId": 116,
                  "actor": {
                    "actorId": 116,
                    "name": "Harvey  Guillén",
                    "createdAt": "2025-03-03T21:50:24.000Z"
                  }
                },
                {
                  "movieActorId": 118,
                  "movieId": 17,
                  "actorId": 117,
                  "actor": {
                    "actorId": 117,
                    "name": "Sophie Thatcher",
                    "createdAt": "2025-03-03T21:50:24.000Z"
                  }
                },
                {
                  "movieActorId": 119,
                  "movieId": 17,
                  "actorId": 118,
                  "actor": {
                    "actorId": 118,
                    "name": "Lukas Gage",
                    "createdAt": "2025-03-03T21:50:24.000Z"
                  }
                },
                {
                  "movieActorId": 120,
                  "movieId": 17,
                  "actorId": 119,
                  "actor": {
                    "actorId": 119,
                    "name": "Jack Quaid",
                    "createdAt": "2025-03-03T21:50:25.000Z"
                  }
                },
                {
                  "movieActorId": 121,
                  "movieId": 17,
                  "actorId": 120,
                  "actor": {
                    "actorId": 120,
                    "name": "Woody Fu",
                    "createdAt": "2025-03-03T21:50:25.000Z"
                  }
                },
                {
                  "movieActorId": 122,
                  "movieId": 17,
                  "actorId": 121,
                  "actor": {
                    "actorId": 121,
                    "name": "Megan Suri",
                    "createdAt": "2025-03-03T21:50:25.000Z"
                  }
                }
              ],
              "movieGenres": [
                {
                  "movieGenreId": 39,
                  "movieId": 17,
                  "genreId": 8,
                  "genre": {
                    "genreId": 8,
                    "name": "Triler",
                    "createdAt": "2025-03-03T21:49:43.000Z"
                  }
                },
                {
                  "movieGenreId": 40,
                  "movieId": 17,
                  "genreId": 9,
                  "genre": {
                    "genreId": 9,
                    "name": "Naučna fantastika",
                    "createdAt": "2025-03-03T21:49:46.000Z"
                  }
                },
                {
                  "movieGenreId": 41,
                  "movieId": 17,
                  "genreId": 12,
                  "genre": {
                    "genreId": 12,
                    "name": "Horor",
                    "createdAt": "2025-03-03T21:49:52.000Z"
                  }
                }
              ]
            },
            {
              "movieId": 18,
              "internalId": "HO00015277",
              "corporateId": "A000016505",
              "directorId": 1,
              "title": "Princeza koju je oteo zmaj koji otima princeze",
              "originalTitle": "Rebellious",
              "description": "U ovoj modernoj bajci, Mina - svojeglava mlada princeza, prkosi kraljevskoj tradiciji i sama sebi bira muža, svog najboljeg prijatelja, Ronana. Međutim, kada se na njihovom venčanju iznenada pojavi legendarni zmaj i otme Minu, kralj obećava presto i ruku svoje kćeri onome ko je izbavi.\n\nRonan će se susresti sa mnogim preprekama na putu da spasi Minu, ali i steći prijatelje koji će mu u tome pomoći. Za to vreme, Mina pokušava sama da pronađe izlaz iz čarobnog zamka. Ko će prvi stići do princeze i osvojiti kraljevstvo?",
              "shortDescription": "U ovoj modernoj bajci, svojeglava princeza prkosi kraljevskoj tradiciji i sama sebi bira muža, svog najboljeg prijatelja. Međutim, na njihovom venčanju otima je zmaj.",
              "poster": "https://s3proxygw.cineplexx.at/cms-live/asset/_default_upload_bucket/PRINCEZA%20I%20ZMAJ_446x648.jpg",
              "startDate": "2025-02-27",
              "shortUrl": "princeza-koju-je-oteo-zmaj-koji-otima-princeze",
              "runTime": 94,
              "createdAt": "2025-03-03T21:50:30.000Z",
              "updatedAt": null,
              "director": {
                "directorId": 1,
                "name": "Christian  Gudegast",
                "createdAt": "2025-03-03T21:48:47.000Z"
              },
              "movieActors": [
                {
                  "movieActorId": 123,
                  "movieId": 18,
                  "actorId": 122,
                  "actor": {
                    "actorId": 122,
                    "name": "Dragan Marinković",
                    "createdAt": "2025-03-03T21:50:27.000Z"
                  }
                },
                {
                  "movieActorId": 124,
                  "movieId": 18,
                  "actorId": 123,
                  "actor": {
                    "actorId": 123,
                    "name": "Petar Strugar",
                    "createdAt": "2025-03-03T21:50:27.000Z"
                  }
                },
                {
                  "movieActorId": 125,
                  "movieId": 18,
                  "actorId": 124,
                  "actor": {
                    "actorId": 124,
                    "name": "Slobodan Boda Ninković",
                    "createdAt": "2025-03-03T21:50:28.000Z"
                  }
                },
                {
                  "movieActorId": 126,
                  "movieId": 18,
                  "actorId": 125,
                  "actor": {
                    "actorId": 125,
                    "name": "Anđelka Stević Žugić",
                    "createdAt": "2025-03-03T21:50:28.000Z"
                  }
                },
                {
                  "movieActorId": 127,
                  "movieId": 18,
                  "actorId": 126,
                  "actor": {
                    "actorId": 126,
                    "name": "Stevan Piale",
                    "createdAt": "2025-03-03T21:50:28.000Z"
                  }
                },
                {
                  "movieActorId": 128,
                  "movieId": 18,
                  "actorId": 127,
                  "actor": {
                    "actorId": 127,
                    "name": "Nikola Nemešević Nemeš",
                    "createdAt": "2025-03-03T21:50:28.000Z"
                  }
                },
                {
                  "movieActorId": 129,
                  "movieId": 18,
                  "actorId": 128,
                  "actor": {
                    "actorId": 128,
                    "name": "Alka Vuica",
                    "createdAt": "2025-03-03T21:50:29.000Z"
                  }
                },
                {
                  "movieActorId": 130,
                  "movieId": 18,
                  "actorId": 129,
                  "actor": {
                    "actorId": 129,
                    "name": "Vladimir Nićiforović",
                    "createdAt": "2025-03-03T21:50:29.000Z"
                  }
                },
                {
                  "movieActorId": 131,
                  "movieId": 18,
                  "actorId": 130,
                  "actor": {
                    "actorId": 130,
                    "name": "Nataša Aksentijević",
                    "createdAt": "2025-03-03T21:50:29.000Z"
                  }
                }
              ],
              "movieGenres": [
                {
                  "movieGenreId": 42,
                  "movieId": 18,
                  "genreId": 4,
                  "genre": {
                    "genreId": 4,
                    "name": "Komedija",
                    "createdAt": "2025-03-03T21:49:29.000Z"
                  }
                },
                {
                  "movieGenreId": 43,
                  "movieId": 18,
                  "genreId": 2,
                  "genre": {
                    "genreId": 2,
                    "name": "Akcija",
                    "createdAt": "2025-03-03T21:48:48.000Z"
                  }
                },
                {
                  "movieGenreId": 44,
                  "movieId": 18,
                  "genreId": 6,
                  "genre": {
                    "genreId": 6,
                    "name": "Animirani",
                    "createdAt": "2025-03-03T21:49:36.000Z"
                  }
                }
              ]
            },
            {
              "movieId": 19,
              "internalId": "HO00014971",
              "corporateId": "A000016188",
              "directorId": 18,
              "title": "Rizičan let",
              "originalTitle": "Flight Risk",
              "description": "Mark Valberg tumači lik pilota Derila Buta koji je zadužen za prevoz FBI agentkinje Medlin Haris (Dockery) i zaštićenog svedoka Vinstona (Grace), koji svedoči protiv mafijaške porodice s kojom je radio u prošlosti. Ali, stvari se zakomplikuju kada Haris i Vinston shvate da je But plaćeni ubica koga su poslali da ubije svedoka.",
              "shortDescription": "Novi film Mela Gibsona (Hrabro srce)… Mark Valberg glumi pilota zaduženog za prevoz FBI agenta i zaštićenog svedoka. Mafija ga plaća da tokom leta ubije svedoka.",
              "poster": "https://s3proxygw.cineplexx.at/cms-live/asset/_default_upload_bucket/SERBIA_FLTRSK_VERT_MAIN_2764x4096_INTL446_1.jpg",
              "startDate": "2025-01-23",
              "shortUrl": "rizican-let",
              "runTime": 91,
              "createdAt": "2025-03-03T21:50:33.000Z",
              "updatedAt": null,
              "director": {
                "directorId": 18,
                "name": "Mel Gibson",
                "createdAt": "2025-03-03T21:50:31.000Z"
              },
              "movieActors": [
                {
                  "movieActorId": 132,
                  "movieId": 19,
                  "actorId": 131,
                  "actor": {
                    "actorId": 131,
                    "name": "Mark Wahlberg",
                    "createdAt": "2025-03-03T21:50:32.000Z"
                  }
                },
                {
                  "movieActorId": 133,
                  "movieId": 19,
                  "actorId": 132,
                  "actor": {
                    "actorId": 132,
                    "name": "Michelle Dockery",
                    "createdAt": "2025-03-03T21:50:32.000Z"
                  }
                },
                {
                  "movieActorId": 134,
                  "movieId": 19,
                  "actorId": 133,
                  "actor": {
                    "actorId": 133,
                    "name": "Topher Grace",
                    "createdAt": "2025-03-03T21:50:32.000Z"
                  }
                },
                {
                  "movieActorId": 135,
                  "movieId": 19,
                  "actorId": 134,
                  "actor": {
                    "actorId": 134,
                    "name": "Monib Abhat",
                    "createdAt": "2025-03-03T21:50:32.000Z"
                  }
                }
              ],
              "movieGenres": [
                {
                  "movieGenreId": 45,
                  "movieId": 19,
                  "genreId": 8,
                  "genre": {
                    "genreId": 8,
                    "name": "Triler",
                    "createdAt": "2025-03-03T21:49:43.000Z"
                  }
                }
              ]
            },
            {
              "movieId": 20,
              "internalId": "HO00015115",
              "corporateId": "A000016338",
              "directorId": 19,
              "title": "Snežna kraljica: Čarobni portal",
              "originalTitle": "Snezhnaya koroleva: Razmorozka",
              "description": "Kai i Gerda živeli su u mirnom i toplom gradiću, sve dok se jednog dana nisu pojavili Ledeni duhovi, donoseći sa sobom večnu zimu i pretnju da zamrznu ceo svet. \n\nAli, nada stiže u obliku male, tajanstvene čarobnice po imenu Ila. S neverovatnom hrabrošću i magijom, Ila se udružuje s našim junacima i vodi ih u očaravajući, ali opasni svet Zemlje ogledala. Tamo ih čekaju neverovatni izazovi, skriveni odgovori i otkrivanje tajne o Ilinom pravom poreklu. \n\nPridružite se ovoj čarobnoj avanturi i otkrijte čuda koja će vas ostaviti bez daha!",
              "shortDescription": "Novi nastavak bajkovitog animiranog hita Snežna kraljica oduševiće vas i ove zime!",
              "poster": "https://s3proxygw.cineplexx.at/cms-live/asset/_default_upload_bucket/B1_SQ5_poster_003_SRB_712px446_1.jpg",
              "startDate": "2025-02-20",
              "shortUrl": "snezna-kraljica-carobni-portal",
              "runTime": 80,
              "createdAt": "2025-03-03T21:50:36.000Z",
              "updatedAt": null,
              "director": {
                "directorId": 19,
                "name": "Andrey  Korenkov",
                "createdAt": "2025-03-03T21:50:34.000Z"
              },
              "movieActors": [
                {
                  "movieActorId": 136,
                  "movieId": 20,
                  "actorId": 135,
                  "actor": {
                    "actorId": 135,
                    "name": "Polina Voychenko",
                    "createdAt": "2025-03-03T21:50:34.000Z"
                  }
                },
                {
                  "movieActorId": 137,
                  "movieId": 20,
                  "actorId": 136,
                  "actor": {
                    "actorId": 136,
                    "name": "Mariya Shustrova",
                    "createdAt": "2025-03-03T21:50:34.000Z"
                  }
                },
                {
                  "movieActorId": 138,
                  "movieId": 20,
                  "actorId": 137,
                  "actor": {
                    "actorId": 137,
                    "name": "Irina Chumanteva",
                    "createdAt": "2025-03-03T21:50:34.000Z"
                  }
                },
                {
                  "movieActorId": 139,
                  "movieId": 20,
                  "actorId": 138,
                  "actor": {
                    "actorId": 138,
                    "name": "Yuriy Romanov",
                    "createdAt": "2025-03-03T21:50:34.000Z"
                  }
                },
                {
                  "movieActorId": 140,
                  "movieId": 20,
                  "actorId": 139,
                  "actor": {
                    "actorId": 139,
                    "name": "Konstantin Panchenko",
                    "createdAt": "2025-03-03T21:50:35.000Z"
                  }
                },
                {
                  "movieActorId": 141,
                  "movieId": 20,
                  "actorId": 140,
                  "actor": {
                    "actorId": 140,
                    "name": "Svetlana Kuznecova",
                    "createdAt": "2025-03-03T21:50:35.000Z"
                  }
                },
                {
                  "movieActorId": 142,
                  "movieId": 20,
                  "actorId": 141,
                  "actor": {
                    "actorId": 141,
                    "name": "Andrey Tenetko",
                    "createdAt": "2025-03-03T21:50:35.000Z"
                  }
                },
                {
                  "movieActorId": 143,
                  "movieId": 20,
                  "actorId": 142,
                  "actor": {
                    "actorId": 142,
                    "name": "Maksim Sergeyev",
                    "createdAt": "2025-03-03T21:50:35.000Z"
                  }
                },
                {
                  "movieActorId": 144,
                  "movieId": 20,
                  "actorId": 143,
                  "actor": {
                    "actorId": 143,
                    "name": "Aleksandr Vasilev",
                    "createdAt": "2025-03-03T21:50:36.000Z"
                  }
                }
              ],
              "movieGenres": [
                {
                  "movieGenreId": 46,
                  "movieId": 20,
                  "genreId": 5,
                  "genre": {
                    "genreId": 5,
                    "name": "Fantazija",
                    "createdAt": "2025-03-03T21:49:36.000Z"
                  }
                },
                {
                  "movieGenreId": 47,
                  "movieId": 20,
                  "genreId": 7,
                  "genre": {
                    "genreId": 7,
                    "name": "Avantura",
                    "createdAt": "2025-03-03T21:49:39.000Z"
                  }
                },
                {
                  "movieGenreId": 48,
                  "movieId": 20,
                  "genreId": 6,
                  "genre": {
                    "genreId": 6,
                    "name": "Animirani",
                    "createdAt": "2025-03-03T21:49:36.000Z"
                  }
                }
              ]
            },
            {
              "movieId": 21,
              "internalId": "HO00014034",
              "corporateId": "A000015160",
              "directorId": 20,
              "title": "Sonikov film 3",
              "originalTitle": "Sonic the Hedgehog 3",
              "description": "Sonik, Nakls i Tejls ponovo se ujedinjuju protiv novog moćnog protivnika, Senke (Shadow), misterioznog negativca sa moćima koje su drugačije od svega sa čime su se ranije susretali. Kako su njihove moći nadmašene u svakom pogledu, Tim Sonik mora da sklopi neverovatan savez, u nadi da će zaustaviti Senku i zaštititi planetu.",
              "shortDescription": "Tokom ovogodišnje praznične sezone Sonik se vraća na velika platna, u svojoj najuzbudljivijoj avanturi do sada.",
              "poster": "https://s3proxygw.cineplexx.at/cms-live/asset/_default_upload_bucket/STH3_INTL_DGTL_1080x1350_INSTA_Payoff_KeyArt_CityRun_SRB446_1.jpg",
              "startDate": "2024-12-26",
              "shortUrl": "sonikov-film-3",
              "runTime": 111,
              "createdAt": "2025-03-03T21:50:42.000Z",
              "updatedAt": null,
              "director": {
                "directorId": 20,
                "name": "Jeff Fowler",
                "createdAt": "2025-03-03T21:50:38.000Z"
              },
              "movieActors": [
                {
                  "movieActorId": 145,
                  "movieId": 21,
                  "actorId": 144,
                  "actor": {
                    "actorId": 144,
                    "name": "Idris Elba",
                    "createdAt": "2025-03-03T21:50:39.000Z"
                  }
                },
                {
                  "movieActorId": 146,
                  "movieId": 21,
                  "actorId": 145,
                  "actor": {
                    "actorId": 145,
                    "name": "Jim Carrey",
                    "createdAt": "2025-03-03T21:50:39.000Z"
                  }
                },
                {
                  "movieActorId": 147,
                  "movieId": 21,
                  "actorId": 146,
                  "actor": {
                    "actorId": 146,
                    "name": "Keanu Reeves",
                    "createdAt": "2025-03-03T21:50:39.000Z"
                  }
                },
                {
                  "movieActorId": 148,
                  "movieId": 21,
                  "actorId": 147,
                  "actor": {
                    "actorId": 147,
                    "name": "Tika Sumpter",
                    "createdAt": "2025-03-03T21:50:39.000Z"
                  }
                },
                {
                  "movieActorId": 149,
                  "movieId": 21,
                  "actorId": 148,
                  "actor": {
                    "actorId": 148,
                    "name": "James Marsden",
                    "createdAt": "2025-03-03T21:50:39.000Z"
                  }
                },
                {
                  "movieActorId": 150,
                  "movieId": 21,
                  "actorId": 149,
                  "actor": {
                    "actorId": 149,
                    "name": "Ben Schwartz",
                    "createdAt": "2025-03-03T21:50:39.000Z"
                  }
                },
                {
                  "movieActorId": 151,
                  "movieId": 21,
                  "actorId": 150,
                  "actor": {
                    "actorId": 150,
                    "name": "Natasha Rothwell",
                    "createdAt": "2025-03-03T21:50:40.000Z"
                  }
                },
                {
                  "movieActorId": 152,
                  "movieId": 21,
                  "actorId": 151,
                  "actor": {
                    "actorId": 151,
                    "name": "Shemar Moore",
                    "createdAt": "2025-03-03T21:50:40.000Z"
                  }
                },
                {
                  "movieActorId": 153,
                  "movieId": 21,
                  "actorId": 152,
                  "actor": {
                    "actorId": 152,
                    "name": "Alyla Browne",
                    "createdAt": "2025-03-03T21:50:40.000Z"
                  }
                },
                {
                  "movieActorId": 154,
                  "movieId": 21,
                  "actorId": 153,
                  "actor": {
                    "actorId": 153,
                    "name": "Colleen O'Shaughnessey",
                    "createdAt": "2025-03-03T21:50:40.000Z"
                  }
                },
                {
                  "movieActorId": 155,
                  "movieId": 21,
                  "actorId": 154,
                  "actor": {
                    "actorId": 154,
                    "name": "Krysten Ritter",
                    "createdAt": "2025-03-03T21:50:41.000Z"
                  }
                },
                {
                  "movieActorId": 156,
                  "movieId": 21,
                  "actorId": 155,
                  "actor": {
                    "actorId": 155,
                    "name": "James Wolk",
                    "createdAt": "2025-03-03T21:50:41.000Z"
                  }
                },
                {
                  "movieActorId": 157,
                  "movieId": 21,
                  "actorId": 156,
                  "actor": {
                    "actorId": 156,
                    "name": "Adam Pally",
                    "createdAt": "2025-03-03T21:50:41.000Z"
                  }
                },
                {
                  "movieActorId": 158,
                  "movieId": 21,
                  "actorId": 157,
                  "actor": {
                    "actorId": 157,
                    "name": "Lee Majdoub",
                    "createdAt": "2025-03-03T21:50:41.000Z"
                  }
                }
              ],
              "movieGenres": [
                {
                  "movieGenreId": 49,
                  "movieId": 21,
                  "genreId": 2,
                  "genre": {
                    "genreId": 2,
                    "name": "Akcija",
                    "createdAt": "2025-03-03T21:48:48.000Z"
                  }
                },
                {
                  "movieGenreId": 50,
                  "movieId": 21,
                  "genreId": 7,
                  "genre": {
                    "genreId": 7,
                    "name": "Avantura",
                    "createdAt": "2025-03-03T21:49:39.000Z"
                  }
                },
                {
                  "movieGenreId": 51,
                  "movieId": 21,
                  "genreId": 6,
                  "genre": {
                    "genreId": 6,
                    "name": "Animirani",
                    "createdAt": "2025-03-03T21:49:36.000Z"
                  }
                }
              ]
            },
            {
              "movieId": 22,
              "internalId": "HO00015279",
              "corporateId": "A000016507",
              "directorId": 21,
              "title": "Super kućni patuljci",
              "originalTitle": "Die Heinzels – Neue Mützen, neue Mission",
              "description": "Elfi je devojčica patuljak uvek željna avantura i u stalnoj potrazi je za uzbudljivijim životom, u kome će moći, u isto vreme da se zabavlja i čuva tajnu patuljaka. A sve to radi na veliku žalost starijih članova njihovog plemena koji žele da sve ostane isto. \n\nMeđutim, kada jednog dana Elfi upozna Boa, sve kreće naopako. Bo pripada plemenu patuljaka koje se stalno zabavlja i koji koristi visokotehnološke sprave kako bi radili smele, ali ne i uvek legalne stvari, zbog čega ih jure opsednuta policajka Lanski i njena mačka Polipet. \n\nMože li Elfino prijateljstvo sa Boom uspeti da, posle više od 250 godina pomiri dva plemena i ostvari njen san, da živi kao \"Super kućni patuljak\"?",
              "shortDescription": "Elfi, patuljčica željna avantura, upoznaje Boa iz suparničkog plemena. Njihovo prijateljstvo postaje šansa za pomirenje i ostvarenje njenog sna o uzbudljivijem životu.",
              "poster": "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Super%20Elfkins/posterImage.jpg",
              "startDate": "2025-02-27",
              "shortUrl": "super-kucni-patuljci",
              "runTime": 77,
              "createdAt": "2025-03-03T21:50:46.000Z",
              "updatedAt": null,
              "director": {
                "directorId": 21,
                "name": "Ute von Münchow-Pohl",
                "createdAt": "2025-03-03T21:50:45.000Z"
              },
              "movieActors": [
                {
                  "movieActorId": 159,
                  "movieId": 22,
                  "actorId": 158,
                  "actor": {
                    "actorId": 158,
                    "name": "Jella Haase",
                    "createdAt": "2025-03-03T21:50:46.000Z"
                  }
                },
                {
                  "movieActorId": 160,
                  "movieId": 22,
                  "actorId": 159,
                  "actor": {
                    "actorId": 159,
                    "name": "Louis Hofmann",
                    "createdAt": "2025-03-03T21:50:46.000Z"
                  }
                },
                {
                  "movieActorId": 161,
                  "movieId": 22,
                  "actorId": 160,
                  "actor": {
                    "actorId": 160,
                    "name": "Elke Heidenreich",
                    "createdAt": "2025-03-03T21:50:46.000Z"
                  }
                }
              ],
              "movieGenres": [
                {
                  "movieGenreId": 52,
                  "movieId": 22,
                  "genreId": 6,
                  "genre": {
                    "genreId": 6,
                    "name": "Animirani",
                    "createdAt": "2025-03-03T21:49:36.000Z"
                  }
                },
                {
                  "movieGenreId": 53,
                  "movieId": 22,
                  "genreId": 14,
                  "genre": {
                    "genreId": 14,
                    "name": "Porodični film",
                    "createdAt": "2025-03-03T21:49:58.000Z"
                  }
                }
              ]
            },
            {
              "movieId": 23,
              "internalId": "HO00015357",
              "corporateId": "A000016586",
              "directorId": 22,
              "title": "Tri kilometra do kraja sveta",
              "originalTitle": "Trei kilometri până la capătul lumii",
              "description": "U konzervativnoj zajednici oko delte Dunava, jedan gej tinejdžer na putu upoznavanja sebe u sukobu je sa tradicionalnim vrednostima njegovih roditelja i suseda.",
              "shortDescription": "U konzervativnoj zajednici oko delte Dunava, jedan gej tinejdžer na putu upoznavanja sebe u sukobu je sa tradicionalnim vrednostima njegovih roditelja i suseda.",
              "poster": "https://s3proxygw.cineplexx.at/cms-live/asset/_default_upload_bucket/Keyart%20%288%29_712px446_1.jpg",
              "startDate": "2025-02-27",
              "shortUrl": "tri-kilometra-do-kraja-sveta",
              "runTime": 105,
              "createdAt": "2025-03-03T21:50:48.000Z",
              "updatedAt": null,
              "director": {
                "directorId": 22,
                "name": "Emanuel Parvu",
                "createdAt": "2025-03-03T21:50:47.000Z"
              },
              "movieActors": [
                {
                  "movieActorId": 162,
                  "movieId": 23,
                  "actorId": 161,
                  "actor": {
                    "actorId": 161,
                    "name": "Bogdan Dumitrache",
                    "createdAt": "2025-03-03T21:50:47.000Z"
                  }
                },
                {
                  "movieActorId": 163,
                  "movieId": 23,
                  "actorId": 162,
                  "actor": {
                    "actorId": 162,
                    "name": "Laura  Vasiliu",
                    "createdAt": "2025-03-03T21:50:48.000Z"
                  }
                },
                {
                  "movieActorId": 164,
                  "movieId": 23,
                  "actorId": 163,
                  "actor": {
                    "actorId": 163,
                    "name": "Ciprian Chiujdea",
                    "createdAt": "2025-03-03T21:50:48.000Z"
                  }
                }
              ],
              "movieGenres": [
                {
                  "movieGenreId": 54,
                  "movieId": 23,
                  "genreId": 1,
                  "genre": {
                    "genreId": 1,
                    "name": "Drama",
                    "createdAt": "2025-03-03T21:48:48.000Z"
                  }
                },
                {
                  "movieGenreId": 55,
                  "movieId": 23,
                  "genreId": 8,
                  "genre": {
                    "genreId": 8,
                    "name": "Triler",
                    "createdAt": "2025-03-03T21:49:43.000Z"
                  }
                }
              ]
            },
            {
              "movieId": 24,
              "internalId": "HO00012985",
              "corporateId": "A000014007",
              "directorId": 23,
              "title": "Zlica",
              "originalTitle": "Wicked",
              "description": "Posle dve decenije izvođenja, kao jednog od najomiljenijih i najdugotrajnijih mjuzikla na sceni, ove praznične sezone ZLICA započinje svoje dugoočekivano putovanje na veliko platno, kao spektakularan bioskopski doživljaj koji će oblikovati generacije.\n\nU filmu ZLICA do sada neispričanoj priči o vešticama iz Oza, Elfabi, mladoj ženi, neshvaćenoj zbog neobično zelene boje kože, koja još uvek nije otkrila svoju pravu moć, koju glumi dobitnica Emi, Gremi i Toni nagrada,  Sintija Erivo. Uz nju, tu je i osvajačica Gremi nagrade, svetska superzvezda i umetnica sa nekoliko platinastih albuma, Arijana Grande, kao Glinda, popularna mlada žena obasuta privilegijama i vođena ambicijom, ali koja još uvek nije otkrila svoje pravo srce.\nNjih dve se upoznaju na Univerzitetu Šiz, u fantastičnoj zemlji Oz, gde sklapaju neočekivano, ali snažno prijateljstvo. Nakon susreta sa čudesnim Čarobnjakom iz Oza, njihovo prijateljstvo dolazi do raskršća i životi im nastavljaju potpuno suprotnim stazama. Glindina nepokolebljiva želja za popularnošću i moći snažno je zavodi, dok će Elfabina odlučnost da ostane verna sebi i svima oko sebe imati neočekivane i šokantne posledice po njenu budućnost. Njihove izvanredne avanture u Ozu, dovešće ih do ispunjavanja njihovih sudbina, i tako postaju Dobra Glinda i Zla Veštica Zapada.\n\nU filmu takođe glume dobitnica Oskara, Mišel Jeo, kao kraljevska upravnica Univerziteta, Madam Moribl, Džonatan Bejli kao Fijero, nevaljali i bezbrižni princ, nominovan za nagradu Toni, Itan Slejter kao Bok, student altruista, Merisa Bode, u svom filmskom debiju kao Nesaroza, Elfabina omiljena sestra i ikona pop kulture, Džef Goldblum, kao legendarni Čarobnjak iz Oza.\n\nMeđu likovima takođe se nalaze i Fani i ŠenŠen, dva Glendina sunarodnika, koje tumače nominovan za Emi nagradu, Bouen Jang i Bronvin Džejms i novi lik osmišljen specijalno zbog filma, gospođica Kodl, koju tumači nominovana za nagradu Toni, Kila Setl.\n\nU režiji proslavljenog sineaste Džona M. Čua, ZLICA je prvo od dva impresivna poglavlja koja slave kulturu. Zlica drugi deo u svetske bioskope stiže u novembru 2025. godine.\nProducenti filma su Mark Plat, čiji filmovi, TV serije i scenska izvođenja ukupno broje 46 nominacija za Oskara, 58 nominacija za nagradu Emi i 36 nominacija za nagradu Toni, kao i višestruki dobitnik Tonija, Dejvid Stoun, koji je zajedno sa Platom producirao pozorišni blokbaster, mjuzikl Zlica. Izvršni producenti su Dejvid Niksej, Stefan Švarc i Džered Lebof.\n\nZasnovano na bestseleru Gregorija Magvajera, delo je, za potrebe velikog platna, adaptirala pozorišna scenariskinja Vini Holcman i legendarni osvajač Gremija i Oskara, kompozitor i tekstopisac Stefan Švarc. Brodvejski mjuzikl producirali su Univerzal Stejdž Prodakšns, Mark Plat, Araka Grup, Džon B. Plat i Dejvid Stoun.",
              "shortDescription": "Priča o vešticama iz Oza, Elfabi, neshvaćenoj zbog neobično zelene boje kože, i Glindi, sa nepokolebljivom željom za popularnošću, koje sklapaju snažno prijateljstvo.",
              "poster": "https://s3proxygw.cineplexx.at/cms-live/asset/_default_upload_bucket/Wicked%20za%20Cineplexx%20rs%20446_1.jpg",
              "startDate": "2024-12-05",
              "shortUrl": "zlica",
              "runTime": 160,
              "createdAt": "2025-03-03T21:50:53.000Z",
              "updatedAt": null,
              "director": {
                "directorId": 23,
                "name": "Jon M. Chu",
                "createdAt": "2025-03-03T21:50:50.000Z"
              },
              "movieActors": [
                {
                  "movieActorId": 165,
                  "movieId": 24,
                  "actorId": 164,
                  "actor": {
                    "actorId": 164,
                    "name": "Peter Dinklage",
                    "createdAt": "2025-03-03T21:50:50.000Z"
                  }
                },
                {
                  "movieActorId": 166,
                  "movieId": 24,
                  "actorId": 165,
                  "actor": {
                    "actorId": 165,
                    "name": "Jeff Goldblum",
                    "createdAt": "2025-03-03T21:50:50.000Z"
                  }
                },
                {
                  "movieActorId": 167,
                  "movieId": 24,
                  "actorId": 166,
                  "actor": {
                    "actorId": 166,
                    "name": "Jonathan  Bailey",
                    "createdAt": "2025-03-03T21:50:50.000Z"
                  }
                },
                {
                  "movieActorId": 168,
                  "movieId": 24,
                  "actorId": 167,
                  "actor": {
                    "actorId": 167,
                    "name": "Cynthia Erivo",
                    "createdAt": "2025-03-03T21:50:51.000Z"
                  }
                },
                {
                  "movieActorId": 169,
                  "movieId": 24,
                  "actorId": 168,
                  "actor": {
                    "actorId": 168,
                    "name": "Michelle Yeoh",
                    "createdAt": "2025-03-03T21:50:51.000Z"
                  }
                },
                {
                  "movieActorId": 170,
                  "movieId": 24,
                  "actorId": 169,
                  "actor": {
                    "actorId": 169,
                    "name": "Ariana Grande",
                    "createdAt": "2025-03-03T21:50:51.000Z"
                  }
                },
                {
                  "movieActorId": 171,
                  "movieId": 24,
                  "actorId": 170,
                  "actor": {
                    "actorId": 170,
                    "name": "Bowen Yang",
                    "createdAt": "2025-03-03T21:50:51.000Z"
                  }
                },
                {
                  "movieActorId": 172,
                  "movieId": 24,
                  "actorId": 171,
                  "actor": {
                    "actorId": 171,
                    "name": "Keala Settle",
                    "createdAt": "2025-03-03T21:50:51.000Z"
                  }
                },
                {
                  "movieActorId": 173,
                  "movieId": 24,
                  "actorId": 172,
                  "actor": {
                    "actorId": 172,
                    "name": "Marissa Bode",
                    "createdAt": "2025-03-03T21:50:52.000Z"
                  }
                },
                {
                  "movieActorId": 174,
                  "movieId": 24,
                  "actorId": 173,
                  "actor": {
                    "actorId": 173,
                    "name": "Bronwyn James",
                    "createdAt": "2025-03-03T21:50:52.000Z"
                  }
                },
                {
                  "movieActorId": 175,
                  "movieId": 24,
                  "actorId": 174,
                  "actor": {
                    "actorId": 174,
                    "name": "Ethan Slater",
                    "createdAt": "2025-03-03T21:50:52.000Z"
                  }
                }
              ],
              "movieGenres": [
                {
                  "movieGenreId": 56,
                  "movieId": 24,
                  "genreId": 5,
                  "genre": {
                    "genreId": 5,
                    "name": "Fantazija",
                    "createdAt": "2025-03-03T21:49:36.000Z"
                  }
                },
                {
                  "movieGenreId": 57,
                  "movieId": 24,
                  "genreId": 16,
                  "genre": {
                    "genreId": 16,
                    "name": "Romantični/ljubavni",
                    "createdAt": "2025-03-03T21:50:52.000Z"
                  }
                },
                {
                  "movieGenreId": 58,
                  "movieId": 24,
                  "genreId": 17,
                  "genre": {
                    "genreId": 17,
                    "name": "Mjuzikl",
                    "createdAt": "2025-03-03T21:50:53.000Z"
                  }
                }
              ]
            },
            {
              "movieId": 25,
              "internalId": "HO00015125",
              "corporateId": "A000016348",
              "directorId": 24,
              "title": "Miki 17",
              "originalTitle": "Mickey 17",
              "description": "Slučajni heroj, Miki Barns, našao se u neobičnoj situaciji kada je poslodavac, koji zahteva ultimativnu predanost poslu... Od njega zatražio da umre, više puta, kako bi živeo. Film prati zaposlenog Mikija, čiji je posao odlazak na opasne misije i kad jedna njegova varijanta umre, gotovo odmah je dostupan njegov replikant koji ima većinu sećanja svog prethodnika. Mikija zovu ‘potrošni’, odnosno, svaka misija koja je preopasna za ljude, je misija za njega. \n\nDo problema dolazi kada jedna varijanta ipak preživi (Miki 17) i sretne se s novim primerkom (Miki 18).",
              "shortDescription": "Od Oskarom nagrađenog scenariste i reditelja filma „Parazit”, Bong Jun Hoa, dolazi novo revolucionarno filmsko iskustvo, s Robertom Patinsonom u glavnoj ulozi!",
              "poster": "https://s3proxygw.cineplexx.at/cms-live/asset/_default_upload_bucket/RS_MKY17_INSTA_VERT_MAIN_1638x2048_INTL_546px446.jpg",
              "startDate": "2025-03-06",
              "shortUrl": "miki-17",
              "runTime": 139,
              "createdAt": "2025-03-05T08:44:52.000Z",
              "updatedAt": null,
              "director": {
                "directorId": 24,
                "name": "Bong Joon-ho",
                "createdAt": "2025-03-05T08:44:52.000Z"
              },
              "movieActors": [
                {
                  "movieActorId": 176,
                  "movieId": 25,
                  "actorId": 175,
                  "actor": {
                    "actorId": 175,
                    "name": "Mark Ruffalo",
                    "createdAt": "2025-03-05T08:44:52.000Z"
                  }
                },
                {
                  "movieActorId": 177,
                  "movieId": 25,
                  "actorId": 176,
                  "actor": {
                    "actorId": 176,
                    "name": "Naomi Ackie",
                    "createdAt": "2025-03-05T08:44:52.000Z"
                  }
                },
                {
                  "movieActorId": 178,
                  "movieId": 25,
                  "actorId": 177,
                  "actor": {
                    "actorId": 177,
                    "name": "Robert  Pattinson",
                    "createdAt": "2025-03-05T08:44:52.000Z"
                  }
                },
                {
                  "movieActorId": 179,
                  "movieId": 25,
                  "actorId": 178,
                  "actor": {
                    "actorId": 178,
                    "name": "Steven Yeun",
                    "createdAt": "2025-03-05T08:44:52.000Z"
                  }
                },
                {
                  "movieActorId": 180,
                  "movieId": 25,
                  "actorId": 179,
                  "actor": {
                    "actorId": 179,
                    "name": "Toni Colette",
                    "createdAt": "2025-03-05T08:44:52.000Z"
                  }
                }
              ],
              "movieGenres": [
                {
                  "movieGenreId": 59,
                  "movieId": 25,
                  "genreId": 4,
                  "genre": {
                    "genreId": 4,
                    "name": "Komedija",
                    "createdAt": "2025-03-03T21:49:29.000Z"
                  }
                },
                {
                  "movieGenreId": 60,
                  "movieId": 25,
                  "genreId": 1,
                  "genre": {
                    "genreId": 1,
                    "name": "Drama",
                    "createdAt": "2025-03-03T21:48:48.000Z"
                  }
                },
                {
                  "movieGenreId": 61,
                  "movieId": 25,
                  "genreId": 5,
                  "genre": {
                    "genreId": 5,
                    "name": "Fantazija",
                    "createdAt": "2025-03-03T21:49:36.000Z"
                  }
                },
                {
                  "movieGenreId": 62,
                  "movieId": 25,
                  "genreId": 9,
                  "genre": {
                    "genreId": 9,
                    "name": "Naučna fantastika",
                    "createdAt": "2025-03-03T21:49:46.000Z"
                  }
                },
                {
                  "movieGenreId": 63,
                  "movieId": 25,
                  "genreId": 7,
                  "genre": {
                    "genreId": 7,
                    "name": "Avantura",
                    "createdAt": "2025-03-03T21:49:39.000Z"
                  }
                }
              ]
            }
            
          ],
        },
      };
    }
  }
