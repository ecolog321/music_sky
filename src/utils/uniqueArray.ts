export const createUniqueArray = (array: any[], uniq: string) => {
  return Array.from(new Set(array.map((element) => String(element[uniq]))));
};

