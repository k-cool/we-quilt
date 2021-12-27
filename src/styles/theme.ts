import { CSSProp, css } from 'styled-components';

const sizes: { [key: string]: number } = {
  mobile: 320,
  tablet: 768,
  desktop: 1024,
};

type BackQuoteArgs = string[];

// interface Media {
//   mobile: (...args: BackQuoteArgs) => CSSProp | undefined;
//   tablet: (...args: BackQuoteArgs) => CSSProp | undefined;
//   desktop: (...args: BackQuoteArgs) => CSSProp | undefined;
// }

// const media: Media = {
//   mobile: (...args: BackQuoteArgs) => undefined,
//   tablet: (...args: BackQuoteArgs) => undefined,
//   desktop: (...args: BackQuoteArgs) => undefined,
// };

// Object.keys(sizes).reduce((acc: Media, label: string) => {
//   switch (label) {
//     case 'desktop':
//       acc.desktop = (...args: BackQuoteArgs) =>
//         css`
//           @media only screen and (min-width: ${sizes.desktop}px) {
//             ${args}
//           }
//         `;
//       break;
//     case 'tablet':
//       acc.tablet = (...args: BackQuoteArgs) =>
//         css`
//           @media only screen and (max-width: ${sizes.desktop}px) and (min-width: ${sizes.tablet}px) {
//             ${args}
//           }
//         `;
//       break;
//     case 'mobile':
//       acc.mobile = (...args: BackQuoteArgs) =>
//         css`
//           @media only screen and (max-width: ${sizes.tablet}px) {
//             ${args}
//           }
//         `;
//       break;
//     default:
//       break;
//   }
//   return acc;
// }, media);

const media = {
  mobile: (literals: TemplateStringsArray, ...args: BackQuoteArgs): CSSProp =>
    css`
      @media only screen and (max-width: ${sizes.mobile}px) {
        ${css(literals, ...args)}
      }
    `,
  tablet: (literals: TemplateStringsArray, ...args: BackQuoteArgs): CSSProp =>
    css`
      @media only screen and (max-width: ${sizes.tablet}px) {
        ${css(literals, ...args)}
      }
    `,
  desktop: (literals: TemplateStringsArray, ...args: BackQuoteArgs): CSSProp =>
    css`
      @media only screen and (max-width: ${sizes.desktop}px) {
        ${css(literals, ...args)}
      }
    `,
} as Record<keyof typeof sizes, (l: TemplateStringsArray, ...p: BackQuoteArgs) => CSSProp>;

const theme = {
  media,
};

export type Theme = typeof theme;
export default theme;
