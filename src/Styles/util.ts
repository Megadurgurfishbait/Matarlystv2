interface Font {
  fontsize?: number;
  fontweight?: number;
  fontfamily?: 'Roboto' | 'Segoe UI' | 'Raleway' | 'Roboto Mono';
  letterspacing?: number;
}

export function Font({
  fontsize = 16,
  fontweight = 400,
  fontfamily = `Roboto`,
  letterspacing = 1,
}: Font): string {
  return `
            font-size: ${fontsize}px;
            font-family: ${fontfamily};
            font-weight: ${fontweight};
            letter-spacing: ${letterspacing}px;
        `;
}
