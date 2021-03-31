import {Component} from '@angular/core';

import {faPinterestP, faFacebookF, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faHeart, faCommentAlt, faEye} from '@fortawesome/free-regular-svg-icons';
import {faLongArrowAltUp} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  faFacebookF = faFacebookF;
  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faPinterestP = faPinterestP;
  faHeart = faHeart;
  faCommentAlt = faCommentAlt;
  faEye = faEye;
  faLongArrowAltUp = faLongArrowAltUp;
}
