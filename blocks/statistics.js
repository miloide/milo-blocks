/**
 * @license
 * Milo IDE
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Statistics blocks for Milo (github.com/4and4/MiloServer).
 *
 *
 * @author Arjun Rao, Ayush Bihani
 */

'use strict';

goog.require('Blockly.Blocks');
goog.require('Blockly');


Blockly.Blocks['stats_construct_pmf'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Probability Mass Function");
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("Make")
        .appendField(new Blockly.FieldDropdown([[" Hist Map From List","makeHistFromList"], [" Pmf Map From List","makePmfFromList"],[" Pmf Map from Frequencies","makePmfFromHist"]]), "NAME");
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks['stats_pmf_getters'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("Get")
        .appendField(new Blockly.FieldDropdown([["Values","items"], ["Keys","values"], ["list","getList"], ["dictionary","getDict"]]), "NAME")
        .appendField("From Map");
    this.setOutput(true,null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['stats_pmf_operations'] = {
  init: function() {
    this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("Get")
            .appendField(new Blockly.FieldDropdown([["mean","mean"], ["variance","variance"], ["exponentiation","exp"], ["normalize","normalize"]]), "NAME")
            .appendField("From Pmf");
    this.setOutput(true,null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks['normal_distribution'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Normal Distribution");
    this.appendValueInput("NAME1")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Mean");
    this.appendValueInput("NAME2")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Variance");
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks['normal_distribution_getters'] = {
  init: function() {
    this.appendValueInput("NAME1")
        .setCheck("gaussian")
        .appendField("Get ")
        .appendField(new Blockly.FieldDropdown([["pdf","pdf"], ["cdf","cdf"], ["ppf","ppf"]]), "NAME2")
        .appendField("From Normal Distribution");
    this.appendValueInput("NAME3")
        .setCheck(["Array", "Number"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("X");
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip("X can either be a number or a list of numbers");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['stats_construct_cdf'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Cumulative Distribution Function");
    this.appendValueInput("SRC")
        .setCheck(null)
        .appendField("Make")
        .appendField(new Blockly.FieldDropdown([["CDF from Pmf ","makeCdfFromPmf"], ["CDF from Hist","MakeCdfFromHist"], ["CDF  from List","MakeCdfFromList"]]), "SRCTYPE");
    this.setOutput(true, "stats_cdf");
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['stats_cdf_get'] = {
  init: function() {
    this.appendValueInput("CDF")
        .setCheck("stats_cdf")
        .appendField("From Cdf");
    this.appendValueInput("VALUE")
        .setCheck("Number")
        .appendField("get")
        .appendField(new Blockly.FieldDropdown([["percentile","percentile"], ["value","inverse"], ["probability","probability"]]), "OPCODE")
        .appendField("for");
    this.setColour(230);
    this.setOutput(true, "Number");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['stats_cdf_insert'] = {
  init: function() {
    this.appendValueInput("VALUE")
        .setCheck("Number")
        .appendField("Insert value");
    this.appendValueInput("PROB")
        .setCheck("Number")
        .appendField("with probability");
    this.appendValueInput("CDF")
        .setCheck("stats_cdf")
        .appendField("to Cdf");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['exponential_distribution'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Exponential Distribution");
    this.appendValueInput("lambda")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Lambda");
    this.setOutput(true, "exp_distribution");
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.defineBlocksWithJsonArray([
  {
    "type": "exponential_distribution_getters",
    "message0": "Get %1 from Exponential Distribution %2 X %3",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "getters",
        "options": [
          [
            "cdf",
            "cdf"
          ],
          [
            "probability",
            "p"
          ],
          [
            "log probaiblity",
            "logp"
          ]
        ]
      },
      {
        "type": "input_value",
        "name": "distribution",
        "check": "exp_distribution"
      },
      {
        "type": "input_value",
        "name": "x",
        "check": [
          "Number",
          "Array"
        ],
        "align": "RIGHT"
      }
    ],
    "output": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  }
]);
