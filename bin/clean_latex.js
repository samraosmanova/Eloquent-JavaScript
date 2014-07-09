var input = "";
process.stdin.on("data", function(chunk) {
  input += chunk;
});
process.stdin.on("end", function() {
  process.stdout.write(input.replace(/(\n\n\\end{Code})|(\n{3,})|(_why,)/g, function(all, codeSpace, manyBlanks, why) {
    if (codeSpace)
      return codeSpace.slice(1);
    if (manyBlanks)
      return "\n\n";
    if (why)
      return "\_why,";
  }));
});
process.stdin.resume();
