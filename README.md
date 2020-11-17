# ProjetoAngular

Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 10.2.0.

O objetivo deste projeto é desenvolver as habilidades com o Angular no desenvolvimento Front-End e experimentar algumas funcionalidades da biblioteca de componentes Angular Material.

Este projeto foi inspirado na Aplicação da Netflix.

## Design global

Foi utilizado o design do [Bootstrap](https://getbootstrap.com/) de forma muito superficial.

Inclusão do estilo do bootstrap em **style.css**:

```css
@import '~bootstrap/dist/css/bootstrap.min.css';
```

## Componentes do projeto

Foram utilizados alguns componentes do [Angular Material](https://material.angular.io/) e outros de desenvolvimento próprio.

### **NavBarComponent**

Componente criado para ficar na tela principal e de forma imutável durante toda a navegação do usuário:

```html
<app-nav-bar></app-nav-bar>
<div class="container mt-4">
    <router-outlet></router-outlet>
</div>
```
Abaixo do componente **NavBarComponent** tem uma div onde ocorrerá todas as transições dos componentes por meio de rotas **<router-outlet></router-outlet>**.
A rota primária será redirecionada para o componente **MovieComponent**:

```ts
{
    path: '', redirectTo: 'movies', pathMatch: 'full'
},
{
    path: 'movies', component: MovieComponent
}
```

### **MovieComponent**

Criado utilizando o componente **Grid-List** do Angular Material. Foi utilizado para fazer a disposição inicial dos cartazes dos filmes, em um formato reduzido, em toda a tela. A tela foi dividida em três colunas e duas linhas. Para um desenvolvimento futuro essa diposição poderá ser evoluida para um carrossel, possibilitando incluir mais de um na mesma página e separados por gêneros de filmes (conforme a Netflix).

```html
<mat-grid-list cols="3">
    <mat-grid-tile *ngFor=" let movie of filteredMovies">
        <img [src]="movie.imageUrl" width="400" height="400" [routerLink]="['/movies', movie.id]">
    </mat-grid-tile>
</mat-grid-list>
```

As informações dos filmes são, inicialmente, armazenados no próprio contexto de definição da classe de serviços de filmes, responsável por gerenciar as requisições dos componentes.
Neste componente foi utlizado o **property binding** `[src]="movie.imageUrl"`  para selecionar cada url das imagens e apresentá-las na tela. Também foi definida uma **rota com parâmetro** `[routerLink]="['/movies', movie.id]"` para traçar o destino quando for efetuado um clique na imagem. Esta rota vai direcionar o usuário para o componente **ForderComponent**.

```ts
{
    path: 'movies/:id', component: FolderComponent
}
```

### **FolderComponent**

Neste componente são apresentados um segundo cartaz e a sinopse do filme que foi selecionado pelo usuário. Estas informações são passadas para o componente através da **injeção de dependência** para que este componente possa ter acesso ao dados da rota ativa.

```ts
constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService) { }

movie: Movie;

ngOnInit(): void {
    this.movie = this.movieService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id'));
}
```
A apresentação no template do componente é feita por **interpolação**:

```html
<h3 class="titulo">{{ movie.titulo }}</h3>
<p class="descricao">{{ movie.sinopse }}</p>
```

Neste componente o usuário tem duas opções de acesso: 
1)  Botão **ASSISTIR AGORA**: irá direcioná-lo para o componente **ConstructionComponent** que vai apresentar uma imagem de página em construção;

```html
 <button [routerLink]="['/construction']" class="botao">
    <a class="fas fa-play"></a>
    ASSISTIR AGORA
</button>
```

2) Botão **MAIS INFORMAÇÕES**: irá direcioná-lo para o componente **CardComponent**;

```html
<button [routerLink]="['/movies/info', movie.id]" class="botao">
    <a class="fas fa-info-circle"></a>
    MAIS INFORMAÇÕES
</button>
```
Utilizando a **rota**:

```ts
{
    path: 'movies/info/:id', component: CardComponent
}
```

### **CardComponent**

Criado utilizando o componente **Card** do Angular Material. Este componente serve para apresentar mais opções para o usuário em relação ao filme escolhido. Neste componente também é utilizado a **injeção de dependência** para obter as informações do filme selecionado:

```ts
movie: Movie;

constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService) { }

ngOnInit(): void {
    this.movie = this.movieService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id'));   
}
```

Este componente, em uma próxima evolução, exibirá todas as informações contidas na classe de filmes (elenco, gênero, relevância, etc). Dentro deste componente foi utilizado o componente **IconComponent** mostrando ícones nos botões. A função dos botões é mostrada ao usuário por meio da propriedade **matTooltip** do módulo **MatTooltipModule** do Angular Material:

```ts
import { MatTooltipModule } from '@angular/material/tooltip';
```

### **IconComponent**

Criado utilizando o componente **Icon** do Angular Material que serve para apresentar diversos ícones apartir da propriedade **name** passado para o componente:

```ts
@Input()
name: string;
```
e exibido utilizando a **interpolação**:

```html
<mat-icon aria-hidden="false">{{ name }}</mat-icon>
```

## Conclusão

Um projeto inicial em Angular, onde foi possível desenvolver vários conceitos de desenvolvimento Front_End como **Injeção de Dependência, Data Binding, Rotas, Modularização,** entre outros e familiarizar com módulos já prontos, como o **Angular Material** que ampliam e muito o poder do desenvolvedor.