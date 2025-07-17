import { decode } from "blurhash";
import { PNG } from "pngjs";

export function blurhashToDataUrl(hash: string, w = 32, h = 32) {
	const pixels = decode(hash, w, h); // Uint8ClampedArray RGBA
	const png = new PNG({ width: w, height: h });
	png.data = Buffer.from(pixels);
	const buffer = PNG.sync.write(png);
	return `data:image/png;base64,${buffer.toString("base64")}`;
}
