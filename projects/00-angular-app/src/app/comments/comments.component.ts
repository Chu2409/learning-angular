import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  template: `
  <h3>Comentario de lo que sea</h3>

  <img src="https://img2.rtve.es/i/?w=1200&i=https://img.rtve.es/imagenes/this-is-fine-meme-forma-parte-webcomic-2013/1614352806474.png" alt="">

  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quis aspernatur dignissimos facilis accusamus deserunt deleniti quibusdam natus error unde explicabo soluta repellendus, saepe magni adipisci ipsum impedit dolorum corrupti.
  </p>
  `,
  styles: `
    img {
      width: 100%;
      height: auto;

    }
  `
})
export class CommentsComponent {

}
