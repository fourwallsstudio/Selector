export const previewPlayer = src => {

    const howlPreview = new Howl({
      src: [src],
      onplay: () => {
        let length = howlPreview._duration

        howlPreview.seek(Math.round(length * .2));
        howlPreview.fade(0, 1, 2000);

        setTimeout(() => {
          howlPreview.fade(1, 0, 1000);
        }, 4000)

        setTimeout(() => {
          howlPreview.seek(Math.round(length * .4));
          howlPreview.fade(0, 1, 1000);
        }, 5000)

        setTimeout(() => {
          howlPreview.fade(1, 0, 1000);
        }, 9000)

        setTimeout(() => {
          howlPreview.seek(Math.round(length * .6));
          howlPreview.fade(0, 1, 1000);
        }, 10000)

        setTimeout(() => {
          howlPreview.fade(1, 0, 1000);
        }, 14000)

        setTimeout(() => {
          howlPreview.seek(Math.round(length * .8));
          howlPreview.fade(0, 1, 1000);
        }, 15000)

        setTimeout(() => {
          howlPreview.fade(1, 0, 1000);
        }, 19000)

        setTimeout(() => {
          howlPreview.stop();
        }, 20000)

      }
    })

    howlPreview.play();
    return howlPreview;
};
