import { NokiaN7 } from './NokiaN7';

function NokiaCLient() {
  let obj = new NokiaN7();
  obj.price = 23000;
  obj.camPx = '32px';

  console.log(obj);
  obj.doConverse();
  obj.captureVideo();
}
NokiaCLient();
