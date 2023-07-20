// ASCII control characters (character code 0-31)
const CONTROL_CHARACTERS = 31;
// ASCII printable characters (character code 32-127)
const PRINTABLE_CHARACTERS = 32;
// The extended ASCII codes (character code 128-255)
const EXTENDED_CHARACTERS = 255;
// The modulo operation returns the remainder or signed remainder of a division
const MODULO = EXTENDED_CHARACTERS - PRINTABLE_CHARACTERS;
// ASCII space character
const ASCII_SPACE = 32;

export const MAX_ROTATION = MODULO - 1;
// export const MAX_ROTATION = 25;
export const MAX_TEXT = 600;

export function encription(text: string, rotation: number): string {
  return text.charCodeAt(0) === ASCII_SPACE
    ? text
    : String.fromCharCode((text.charCodeAt(0) + rotation) % MODULO);
}

export function decryption(text: string, rotation: number): string {
  return text.charCodeAt(0) === ASCII_SPACE
    ? text
    : String.fromCharCode((text.charCodeAt(0) - rotation) % MODULO);
}
