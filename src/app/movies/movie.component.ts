import { Component, OnInit } from '@angular/core';
import { Movie } from './movie';

@Component ({
    selector: 'app-movie',
    templateUrl: './movie.component.html'
})

export class MovieComponent implements OnInit {

    movies: Movie[] = [];

    ngOnInit(): void {
        this.movies = [
            {
                id: 1,
                titulo: 'The Old Guard',
                imageUrl: '/assets/images/OldGuard.jpg',
                sinopse: 'Quatro guerreiros com o dom da imortalidade protegem a humanidade há séculos. Mas seus misteriosos poderes viram alvo de ataque quando outra imortal entra em cena.',
                elenco: ['Charlize Theron', 'KiKi Layne', 'Matthias Schoenaerts'],
                generos: ['Action', 'Fantasy'],
                relevancia: 73,
                ano: 2020
            },
            {
                id: 2,
                titulo: 'Coringa',
                imageUrl: '/assets/images/Coringa.jpg',
                sinopse: 'Arthur Fleck trabalha como palhaço para uma agência de talentos e, toda semana, precisa comparecer a uma agente social, devido aos seus conhecidos problemas mentais. Após ser demitido, Fleck reage mal à gozação de três homens em pleno metrô e os mata. Os assassinatos iniciam um movimento popular contra a elite de Gotham City, da qual Thomas Wayne é seu maior representante.',
                elenco: ['Joaquin Phoenix', 'Robert De Niro', 'Zazie Beetz'],
                generos: ['Crime', 'Thriller', 'Drama'],
                relevancia: 82,
                ano: 2019
            },
            {
                id: 3,
                titulo: 'Sonic: O Filme',
                imageUrl: '/assets/images/Sonic.jpg',
                sinopse: 'Sonic, o porco-espinho azul mais famoso do mundo, se junta com os seus amigos para derrotar o terrível Doutor Eggman, um cientista louco que planeja dominar o mundo, e o Doutor Robotnik, responsável por aprisionar animais inocentes em robôs.',
                elenco: ['Ben Schwartz', 'James Marsden', 'Jim Carrey', 'Tika Sumpter'],
                generos: ['Action', 'Comedy'],
                relevancia: 75,
                ano: 2020
            },
            {
                id: 4,
                titulo: 'Mulan',
                imageUrl: '/assets/images/Mulan.jpg',
                sinopse: 'Hua Mulan é a espirituosa e determinada filha mais velha de um honrado guerreiro. Quando o Imperador da China emite um decreto que um homem de cada família deve servir no exército imperial, Mulan decide tomar o lugar de seu pai, que está doente. Assumindo a identidade de Hua Jun, ela se disfarça de homem para combater os invasores que estão atacando sua nação, provando-se uma grande guerreira.',
                elenco: ['Liu Yifei', 'Jet Li', 'Tzi Ma', 'Donnie Yen'],
                generos: ['Action', 'Adventure'],
                relevancia: 72,
                ano: 2020
            },
            {
                id: 5,
                titulo: 'Enola Holmes',
                imageUrl: '/assets/images/Enola.jpg',
                sinopse: 'Enola Holmes só tem 16 anos, mas vai fazer de tudo para encontrar a mãe desaparecida, inclusive despistar o irmão Sherlock e ajudar um jovem lorde fugitivo.',
                elenco: ['Millie Bobby Brown', 'Henry Cavill', 'Sam Claflin', 'Helena Bonham Carter'],
                generos: ['Crime', 'Drama'],
                relevancia: 75,
                ano: 2020
            }
        ]
    }
}