export const howlerPlayer = show => {
  const source = show.audio_url;

  const howlPlay = new Howl({

    src: source

  });
  console.log(howlPlay._state);
  return { show_id: show.id, show: howlPlay };
}
