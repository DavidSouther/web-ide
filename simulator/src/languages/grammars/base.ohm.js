const base = `
Base {
  Root = Value*

  At = at
  Bang = bang
  Bar = bar
  CloseAngle = closeAngle
  CloseBrace = closeBrace
  CloseParen = closeParen
  CloseSquare = closeSquare
  Comma = comma
  Dollar = dollar
  Dot = dot
  DoubleQuote = doubleQuote
  Equal = equal
  OpenAngle = openAngle
  OpenBrace = openBrace
  OpenParen = openParen
  OpenSquare = openSquare
  Percent = percent
  Semi = semi
  Underscore = underscore

  at = "@"
  bang = "!"
  bar = "|"
  closeAngle = ">"
  closeBrace = "}"
  closeParen = ")"
  closeSquare = "]"
  comma = ","
  dollar = "$"
  dot = "."
  doubleQuote = "\\""
  equal = "="
  minus = "-"
  newline = "\\r"? "\\n"
  openAngle = "<"
  openBrace = "{"
  openParen = "("
  openSquare = "["
  percent = "%"
  semi = ";"
  underscore = "_"

  Value = identifier | number | boolean

  boolean = true | false
  True = true
  False = false
  true = "true"
  false = "false"

  Name = identifier
  identifier = (letter|underscore) (alnum|underscore|dot|dollar)*

  Number = number
  number = hexNumber | decNumber | binNumber
  binNumber = ("%B") ("0"|"1")+
  hexNumber = ("%X") hexDigit+
  decNumber = ("%D")? (wholeDec | realDec)
  wholeDec = minus? digit+
  realDec = minus? digit* "." digit+

  String = DoubleQuote (~doubleQuote any)* doubleQuote
  
  spaces := (lineComment | comment | space)*
  commentStart = "/*"
  commentEnd = "*/"
  comment = commentStart (~commentEnd any)* commentEnd
  lineCommentStart = "//"
  lineComment = lineCommentStart (~"\\n" any)* "\\n"

  List<elem, sep> = NonemptyListOf<elem, sep> sep?
  EmptyList<elem, sep> = EmptyList<elem, sep> sep?
}`;
export default base;
