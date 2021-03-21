import { Howl } from 'howler';

export const sound = () => {
  let sounds = new Howl({
    src: ['./files/sounds/audio_ring.mp3'],
  });
  sounds.play();
};
