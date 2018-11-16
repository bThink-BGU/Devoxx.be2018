# Rethinking Software Systems - a Gentle Introduction to Behavioral Programming
## Code Appendix to a [BP intro talk](https://dvbe18.confinabox.com/talk/ECS-4884/Rethinking_Software_Systems:_A_friendly_introduction_to_Behavioral_Programming) hosted by [Devoxx.be 2018](https://devoxx.be)

[Talk Video](https://youtu.be/PW8VdWA0UcA)

Behavioral Programming is a programming/modeling paradigm, under which computer systems, which are often required to demonstrate complex behaviors, are composed of multiple simple threads of behavior.

Behavioral Programming was developed by [David Harel](http://www.wisdom.weizmann.ac.il/~harel/), [Assaf Marron](http://www.wisdom.weizmann.ac.il/~amarron/), and [Gera Weiss](https://www.cs.bgu.ac.il/~geraw/) circa 2010. It is based on Scenario Based Programming, which was developed by [Werner Damm](https://uol.de/informatik/ses/personen/werner-damm/), [David Harel](http://www.wisdom.weizmann.ac.il/~harel/), and [Rami Marelly](http://portal.idc.ac.il/faculty/en/Pages/profile.aspx?username=rmarelly) (1999, 2001, 2003).

To use these files, you'll need Java, and the BPjs über jar [available here](https://github.com/bThink-BGU/BPjs/releases).

To run:

    java -jar BPjs-0.9.3.uber.jar {filename.js}

To verify:

    java -jar BPjs-0.9.3.uber.jar --verify {filename.js}


To use several files at once, simply list them in the order you wish them evaluated. Use `-` to read from stdin.

### What's in Here:

* `hello-world.js`: The file live-coded at the talk. Contains the four b-threads required to generate a proper "Hello Devoxx World" message.
* `block-orders.js`: A set of b-threads that enforce, and test the enforcement of, the requirement:
    > "when we run out of a products p1 and p2, do not allow new orders until the stock is renewed"
* `limit-consumption.js`: A set of b-threads that enforce, and test the enforcement of, the requirement:
    > "Do not use more than `$LIMIT` resources at a time"
* `page-cleaner.js`: A set of b-threads that enforce, and test the enforcement of, the requirement:
    > "Every three pages, clean the ink jets"

The visual maze swing application can be found [here](https://github.com/bThink-BGU/VisualRunningExamples).

### Behavioral Programming Resources

* [www.b-prog.org](http://www.b-prog.org): Main BP site, including other BP frameworks (C++, Java, Erlang, Blockly)
* [github.com/bthink-BGU](https://github.com/bthink-BGU): BPjs, projects presented in this talk
* [bpjs.readthedocs.io](https://bpjs.readthedocs.io): BPjs tutorial and reference
* [groups.google.com/forum/#!forum/bpjs](https://groups.google.com/forum/#!forum/bpjs): BP Google group
* [scenariotools.org](http://scenariotools.org) Textual description language of Live Sequence Charts, [Joel Greenyer](http://jgreen.de)

Also, there are many academic Papers (e.g. algorithms, event selections, visualizations). Search for "Behavioral Programming", "Live Sequence Charts (LSCs)", "Scenario Based Programming", or "Scenario Tools".


