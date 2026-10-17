export type { Translations } from './types';
export { en as t } from './en';

export function avatarSrc(style: string, seed: string) {
  return `https://api.dicebear.com/9.x/${style}/png?seed=${seed}&size=28&backgroundColor=0a0d10,722f37,181f26,5c1a2e,4a0523`;
}
