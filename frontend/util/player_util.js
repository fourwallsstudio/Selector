export const howlerPlayer = show => {
  const source = show.audio_url;

  const howlPlay = new Howl({

    src: source,
    html5: true,
    preload: true
  });

  return { show_id: show.id, show: howlPlay };
}
