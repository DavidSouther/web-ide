export const hdl = `// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/01/Not16.hdl
/**
 * 16-bit Not gate:
 * out[i] = ((in[i] == 0), 1, 0) for i = 0..15 
 */
CHIP Not16 {
    IN in[16];
    OUT out[16];

    PARTS:
    //// Replace this comment with your code.
}`;
export const tst = `output-list in%B1.16.1 out%B1.16.1;
set in %B0000000000000000, eval, output;
set in %B1111111111111111, eval, output;
set in %B1010101010101010, eval, output;
set in %B0011110011000011, eval, output;
set in %B0001001000110100, eval, output;`;
export const cmp = `|        in        |       out        |
| 0000000000000000 | 1111111111111111 |
| 1111111111111111 | 0000000000000000 |
| 1010101010101010 | 0101010101010101 |
| 0011110011000011 | 1100001100111100 |
| 0001001000110100 | 1110110111001011 |`;
