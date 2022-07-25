export const formatter = new Intl.NumberFormat('ru-RU', { maximumFractionDigits: 0 });
export const getBigImagePath = (imagePath: string) => imagePath.replace('.jpg', '@2x.jpg');
export const capitalizeFirstLetter = (string: string) => string.charAt(0).toUpperCase() + string.slice(1);
