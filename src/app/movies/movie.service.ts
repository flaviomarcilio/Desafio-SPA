import { Injectable } from '@angular/core';
import { Movie } from './movie';

@Injectable({
    providedIn: 'root'
})

export class MovieService {
   
    retrieveAll(): Movie[] {
        return MOVIES;
    }

    retrieveById(id: number): Movie {
        return MOVIES.find((movieInterator: Movie) => movieInterator.id === id);
    } 
}

var MOVIES: Movie[] = [
    {
        id: 1,
        titulo: 'The Old Guard',
        imageUrl: '/assets/images/OldGuard.jpg',
        folderUrl: '/assets/images/folders/OldGuard.jpg',
        sinopse: 'Quatro guerreiros com o dom da imortalidade protegem a humanidade há séculos. Mas seus misteriosos poderes viram alvo de ataque quando outra imortal entra em cena.',
        elenco: ['Charlize Theron', 'KiKi Layne', 'Matthias Schoenaerts'],
        generos: ['Ação', 'Fantasia'],
        relevancia: 0.73,
        ano: 2020
    },
    {
        id: 2,
        titulo: 'Coringa',
        imageUrl: '/assets/images/Coringa.jpg',
        folderUrl: '/assets/images/folders/Coringa.jpg',
        sinopse: 'Arthur Fleck trabalha como palhaço para uma agência de talentos e, toda semana, precisa comparecer a uma agente social, devido aos seus conhecidos problemas mentais. Após ser demitido, Fleck reage mal à gozação de três homens em pleno metrô e os mata. Os assassinatos iniciam um movimento popular contra a elite de Gotham City, da qual Thomas Wayne é seu maior representante.',
        elenco: ['Joaquin Phoenix', 'Robert De Niro', 'Zazie Beetz'],
        generos: ['Crime', 'Drama'],
        relevancia: 0.82,
        ano: 2019
    },
    {
        id: 3,
        titulo: 'Sonic: O Filme',
        imageUrl: '/assets/images/Sonic.jpg',
        folderUrl: '/assets/images/folders/Sonic.jpg',
        sinopse: 'Sonic, o porco-espinho azul mais famoso do mundo, se junta com os seus amigos para derrotar o terrível Doutor Eggman, um cientista louco que planeja dominar o mundo, e o Doutor Robotnik, responsável por aprisionar animais inocentes em robôs.',
        elenco: ['Ben Schwartz', 'James Marsden', 'Jim Carrey', 'Tika Sumpter'],
        generos: ['Ação', 'Comédia'],
        relevancia: 0.75,
        ano: 2020
    },
    {
        id: 4,
        titulo: 'Mulan',
        imageUrl: '/assets/images/Mulan.jpg',
        folderUrl: '/assets/images/folders/Mulan.jpg',
        sinopse: 'Hua Mulan é a espirituosa e determinada filha mais velha de um honrado guerreiro. Quando o Imperador da China emite um decreto que um homem de cada família deve servir no exército imperial, Mulan decide tomar o lugar de seu pai, que está doente. Assumindo a identidade de Hua Jun, ela se disfarça de homem para combater os invasores que estão atacando sua nação, provando-se uma grande guerreira.',
        elenco: ['Liu Yifei', 'Jet Li', 'Tzi Ma', 'Donnie Yen'],
        generos: ['Ação', 'Aventura'],
        relevancia: 0.72,
        ano: 2020
    },
    {
        id: 5,
        titulo: 'Enola Holmes',
        imageUrl: '/assets/images/Enola.jpg',
        folderUrl: '/assets/images/folders/Enola.jpg',
        sinopse: 'Enola Holmes só tem 16 anos, mas vai fazer de tudo para encontrar a mãe desaparecida, inclusive despistar o irmão Sherlock e ajudar um jovem lorde fugitivo.',
        elenco: ['Millie Bobby Brown', 'Henry Cavill', 'Sam Claflin', 'Helena Bonham Carter'],
        generos: ['Crime', 'Drama'],
        relevancia: 0.75,
        ano: 2020
    },
    {
        id: 6,
        titulo: 'Batman: Morte em Família',
        imageUrl: '/assets/images/Batman.jpg',
        folderUrl: '/assets/images/folders/Batman.jpg',
        sinopse: 'Baseado na HQ “Batman: Morte em Família”, o longa conta a história da relação do Batman com seu pupilo Jason Todd, o segundo Robin. Após a relação entre os dois ficar abalada por conta do comportamento extremo de Jason em suas rondas, o Coringa o mata, levando o Batman ao limite.',
        elenco: ['Bruce Greenwood', 'Vincent Martella', 'John DiMaggio', 'Zehra Fazal'],
        generos: ['Animação', 'Ação'],
        relevancia: 0.81,
        ano: 2020
    }
]