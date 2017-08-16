export const scaleImg = (max, obj) => {
  const scale = max / Math.min(obj.image_height, obj.image_width);
  const width = obj.image_width === null ? '100%' : obj.image_width * scale;
  const height = obj.image_height === null ? 'auto' : obj.image_height * scale;

  return { width, height }
}
