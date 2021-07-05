import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      background: string;
      primary: string;
      text_primary: string;
      text_secondary: string;
      shape: string;
    };

    fonts: {
      title: string;
      subtitle: string;
      default: string;
      secondary: string;
      paragraph: string;
      aux: string;
    };
  }
}
