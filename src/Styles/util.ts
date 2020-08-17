interface Font {
  fontsize?: number;
  fontweight?: number;
  fontfamily?: 'Roboto' | 'Segoe UI' | 'Raleway';
  letterspacing?: number;
}

export function Font({
  fontsize = 16,
  fontweight = 400,
  fontfamily = 'Roboto',
  letterspacing = 1,
}: Font) {
  return `
            font-size: ${fontsize}px;
            font-family: ${fontfamily};
            font-weight: ${fontweight};
            letter-spacing: ${letterspacing}px;
        `;
}
