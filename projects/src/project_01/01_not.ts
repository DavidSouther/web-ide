export const cmp = `|  in   |  out  |
|   0   |   1   |
|   1   |   0   |`;
export const hdl = `// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/01/Not.hdl
 /**
 * Not gate:
 * out = ((in == 0), 1, 0)
 */
CHIP Not {
    IN in;
    OUT out;

    PARTS:
    //// Replace this comment with your code.
}`;
export const tst = `output-list in%B3.1.3 out%B3.1.3;

set in 0, eval, output;
set in 1, eval, output;`;
