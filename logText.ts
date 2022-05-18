import gradient from 'gradient-string';
import figlet from 'figlet';

function logText(text: string) {
  figlet(text, {}, (err, data) => {
    if (err) {
      console.log('Something went wrong...');
      return;
    }
    console.log(gradient.fruit.multiline(data));
  });
}

export default logText;
