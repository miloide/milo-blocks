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
 * @fileoverview Image blocks for Milo (github.com/4and4/MiloServer).
 *
 *
 * @author Ayush Bihani, Arjun Rao
 */

goog.require('Blockly.Blocks');
goog.require('Blockly');


Blockly.Blocks['linear_regression'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Linear Regression");
    this.appendValueInput("alpha")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Learning Rate : ");
    this.appendValueInput("iterations")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Iterations :");
    this.appendValueInput("lambda")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(" lambda : ");
    this.setOutput(true, "regression");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['linear_regression_train'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Train Linear Regression with");
    this.appendValueInput("regression_variable")
        .setCheck("regression")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Linear regression");
    this.appendValueInput("train")
        .setCheck("Array")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Train on ");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip(" \"Fits a linear regresion model on the data\"");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['linear_regression_test'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Test Linear Regression with");
    this.appendValueInput("regression_variable")
        .setCheck("regression")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Linear regression");
    this.appendValueInput("test")
        .setCheck("Array")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Predict on ");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip(" \"Fits a linear regresion model on the data\"");
 this.setHelpUrl("");
  }
};