import { Nokia1100 } from './Nokia1100';

export class NokiaN7 extends Nokia1100 {
  camPx: string;

  captureVideo() {
    console.log('capture video');
  }
}
