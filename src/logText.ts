import { styleText } from 'node:util';
import figlet from 'figlet';

export function fancyLog(text: string) {
  figlet(text, {}, (err, data) => {
    if (err || !data) {
      console.log('Something went wrong...');
      return;
    }
    console.log(styleText('whiteBright', data));
  });
}
