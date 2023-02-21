import Highway from '@dogstudio/highway';
import gsap from 'gsap';
import { append, create, rect, select } from '../utils/helper';

let loadedImg;
export class Projecttransition extends Highway.Transition {
  in({ from, done }) {
    window.scrollTo(0, 0);
    from.remove();

    // append(container, loadedImg);

    const introImg = select('[data-intro] img');
    const introVideo = select('[data-intro] video');

    document.body.removeAttribute('style');

    gsap.fromTo(
      introImg || introVideo,
      {
        autoAlpha: 0,
      },
      {
        duration: 0.3,
        autoAlpha: 1,
        ease: 'power4.inOut',
        onComplete: done,
      }
    );
  }

  out({ trigger, done }) {
    const preview = select('[data-preview-project]', trigger);
    const img = select('[data-preview-project] img', trigger);
    const video = select('[data-preview-project] video', trigger);
    const more = select('[data-project-more]', trigger);

    loadedImg = new Image();
    loadedImg.src = `${img.src}?w=600&fit=max&auto=format`;
    gsap.set(loadedImg, { position: 'absolute', inset: 0, top: 0 });

    const { top } = rect(preview);

    gsap.set('body', { overflow: 'hidden' });

    gsap.to([img || video, more], {
      autoAlpha: 0,
      duration: 0.25,
      ease: 'power4.inOut',
    });

    gsap.to(preview, {
      // width: size().width + 10,
      // height: size().height + 100,
      marginLeft: -20,
      y: (top + 10) * -1,
      duration: 0.5,
      ease: 'power4.inOut',
      delay: 0.15,
      onComplete: done,
    });
  }
}
