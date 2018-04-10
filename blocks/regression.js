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

Blockly.defineBlocksWithJsonArray([{
  "type": "regression",
  "message0": "Perform %1 %2 Number of Iterations : %3 Learning Rate : %4 Lambda %5",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "regression_type",
      "options": [
        [
          "Linear Regression",
          "LinearRegression"
        ],
        [
          "Logistic Regression",
          "LogisticRegression"
        ],
        [
          "Multi Class Logistic ",
          "MultiClassLogistic"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "iterations",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "rate",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "lambda",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "output": "regression",
  "colour": 15,
  "tooltip": "",
  "helpUrl": "",
  "mutator":"Check_Logistic",
  "extension":"Check_Logistic_Extension"
},
{
  "type": "regression_train",
  "message0": "Train regressor classifier with  %1 Regression  %2 X %3 Y %4 Visualize %5",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "regression_variable",
      "check": "regresion",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "X",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "Y",
      "align": "RIGHT"
    },
    {
      "type": "field_checkbox",
      "name": "visualize",
      "align": "RIGHT",
      "checked": false
    }
  ],
  "inputsInline": false,
  "output": "model",
  "colour": 15,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "visualize_regressions",
  "message0": "Visualize %1",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME",
      "check": "model"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 15,
  "tooltip": "",
  "helpUrl": ""
}]);

Blockly.Blocks['regression_test'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Test Regression with");
    this.appendValueInput("regression_variable")
        .setCheck("regression")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Regression");
    this.appendValueInput("test")
        .setCheck("Array")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Predict on ");
    this.setOutput(true, null);
    this.setColour(15);
    this.setTooltip(" \"Tests a regresion model on the data\"");
    this.setHelpUrl("");
  }
};

Blockly.Constants.Check_Logistic_Extension = function() {
  this.getField('regression_type').setValidator(function(option) {
    var LogisticInput = (option == 'LogisticRegression');
    this.sourceBlock_.updateShape_(LogisticInput);
  });
};

/**
 * Mixin for mutator functions in the 'check_logistic mutator'
 * extension.
 * @mixin
 * @augments Blockly.Block
 * @package
 */
Blockly.Constants.Check_Logistic = {
  /**
   * Create XML to represent whether the 'Logistic' is chosen
   * @return {Element} XML storage element.
   * @this Blockly.Block
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    var LogisticInput = (this.getFieldValue('regression_type') == 'LogisticRegression');
    container.setAttribute('logistic_input', LogisticInput);
    return container;
  },
  /**
   * Parse XML to restore the 'divisorInput'.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
  domToMutation: function(xmlElement) {
    var LogisticInput = (xmlElement.getAttribute('logistic_input') == 'true');
    this.updateShape_(LogisticInput);
  },
  /**
   * Modify this block to have (or not have) an input for 'threshold'.
   * @param {boolean} LogisticInput True if this block has a divisor input.
   * @private
   * @this Blockly.Block
   */
  updateShape_: function(LogisticInput) {
    // Add or remove a Value Input.
    var inputExists = this.getInput('threshold');
    if (LogisticInput) {
      if (!inputExists) {
        this.appendValueInput('threshold')
            .setCheck('Number')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Threshold");
      }
    } else if (inputExists) {
      this.removeInput('threshold');
    }
  }
};

Blockly.Extensions.registerMutator('Check_Logistic',
  Blockly.Constants.Check_Logistic,
  Blockly.Constants.Check_Logistic_Extension
);

Blockly.Blocks['visualize_knn'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Visualize KNN");
    this.appendValueInput("knn")
        .appendField("Knn Model")
        .setCheck("knn");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
    
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['k_nearest_neighbor'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("K Nearest Neigbors");
    this.appendValueInput("features")
        .setCheck(["Array", "Number"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("X(Features)");
    this.appendValueInput("labels")
        .setCheck("Array")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Labels");
    this.appendValueInput("k")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("Number of Neighbors to consider");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Distance metric")
        .appendField(new Blockly.FieldDropdown([["euclidean","euclideanDistance"], ["manhattan","manhattanDistance"]]), "distance");
    this.setOutput(true, "knn");
    this.setInputsInline(false);
    this.setColour(15);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['k_nearest_neighbor_predict'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("Predict using KNN");
    this.appendValueInput("knn")
        .appendField("Knn")
        .setCheck("knn")
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("test")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Test");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Visualize")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "visualize");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(15);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};