export const previewPlayer = src => {

    const howlPreview = new Howl({
      src: [src]
    })

    let id1 = howlPreview.play();
    let id2 = howlPreview;
    let id3 = howlPreview;
    let id4 = howlPreview;

    howlPreview.seek(30, id1);
    howlPreview.fade(0, 1, 2000, id1);

    setTimeout(() => {
      howlPreview.fade(1, 0, 1000, id1);
    }, 4000)

    setTimeout(() => {
      id2 = howlPreview.play();
      howlPreview.seek(60, id2);
      howlPreview.fade(0, 1, 2000, id2);
    }, 5000)

    setTimeout(() => {
      howlPreview.fade(1, 0, 1000, id2);
    }, 10000)

    setTimeout(() => {
      id3 = howlPreview.play();
      howlPreview.seek(120, id3);
      howlPreview.fade(0, 1, 2000, id3);
    }, 10000)

    setTimeout(() => {
      howlPreview.fade(1, 0, 1000, id3);
    }, 15000)

    setTimeout(() => {
      id4 = howlPreview.play();
      howlPreview.seek(150, id4);
      howlPreview.fade(0, 1, 2000, id4);
    }, 15000)

    setTimeout(() => {
      howlPreview.fade(1, 0, 1000, id4);
    }, 20000)

    setTimeout(() => {
      howlPreview.stop();
    }, 20000)

    return howlPreview;
};
