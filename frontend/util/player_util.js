export const howlerPlayer = show => {
  const source = show.audio_url;

  const howlPlay = new Howl({

    src: source
    
  });

  return { show_id: show.id, show: howlPlay };
}
