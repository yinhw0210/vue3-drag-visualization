const white = ['rotation']
const isGif = (type: string) => {
  if (white.includes(type)) {
    return '.gif'
  } else {
    return '.png'
  }
}
//动态图片工具
export function importImg(type: string,code:number): string {
  return new URL(`../assets/echarts/${type}_${code}${isGif(type)}`, import.meta.url).href
}
//动态图片边框
export function borderImg(id: number): string {
  return new URL(`../assets/border/border_${id}${id > 8 ? '.gif' : '.png'}`, import.meta.url).href
}
export function base64ToBlob (urlData, type = 'image/png') {
  const arr = urlData.split(',');
  const mime = arr[0].match(/:(.*?);/)[1] || type;
  const bytes = window.atob(arr[1]);
  const ab = new ArrayBuffer(bytes.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < bytes.length; i++) {
    ia[i] = bytes.charCodeAt(i);
  }
  return new Blob([ab], {
    type: mime
  });
}