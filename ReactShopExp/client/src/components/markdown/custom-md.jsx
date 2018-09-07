// Custom markdown parser to create output from simple-markdown closer to GFM.
// Special thanks to Aria Buckles (https://github.com/ariabuckles) for this solution.
// Result from PR: https://github.com/WRidder/react-spa/pull/6
"use strict";
var SimpleMarkdown = require("simple-markdown");
var React = require("react");
var aug = require("aug");

var blockRegex = SimpleMarkdown.blockRegex;
var defaultRules = SimpleMarkdown.defaultRules;

var rules = aug({}, defaultRules, {
    // Close headings and lheadings with a single newline, instead
    // of requiring a blank line after them.
    //
    // For heading, this changes:
    //    /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n *)+\n/
    // to /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n *)*\n/
    // For lheading, this changes:
    //    /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/
    // to /^([^\n]+)\n *(=|-){3,} *(?:\n *)*\n/
    // (Specifically, note the `+` to `*` change at the end of each)
    heading: aug({}, defaultRules.heading, {
        match: blockRegex(/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n *)*\n/)
    }),
    lheading: aug({}, defaultRules.lheading, {
        match: blockRegex(/^([^\n]+)\n *(=|-){3,} *(?:\n *)*\n/)
    }),

    // Make paragraphs output raw <p> tags, instead of
    // <div class="paragraph"> tags:
    paragraph: aug({}, defaultRules.paragraph, {
        output: function(node, outputter) {
          return React.createElement(
            "p",
            null,
            outputter(node.content)
          );
        }
    })
});

var rawBuiltParser = SimpleMarkdown.parserFor(rules);
var parse = function(source) {
  var blockSource = source + "\n\n";
  return rawBuiltParser(blockSource, {inline: false});
};
var output = SimpleMarkdown.outputFor(SimpleMarkdown.ruleOutput(rules));

module.exports = {
    parse: parse,
    output: output
};
