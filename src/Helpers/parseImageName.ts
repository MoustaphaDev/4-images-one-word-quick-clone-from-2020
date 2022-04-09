function parseImagename(imgName: string) {
  return imgName!.split(".")[0]!.split("/")!.at(-1)!.split("")!;
}
export default parseImagename;
