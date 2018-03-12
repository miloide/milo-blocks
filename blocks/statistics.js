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
 * @fileoverview Plot blocks for Milo (github.com/4and4/MiloServer).
 *
 *
 * @author Arjun Rao, Ayush Bihani
 */

goog.require('Blockly.Blocks');
goog.require('Blockly');


Blockly.Blocks['stats_construct_pmf'] = {
  init: function() {
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
