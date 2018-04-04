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
 * @fileoverview Deep learning blocks for Milo (github.com/4and4/MiloServer).
 *
 *
 * @author Arjun Rao, Ayush Bihani
 */

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
    // Block for numeric value.
  {
    "type": "tf_number",
    "message0": "%1",
    "args0": [{
      "type": "field_number",
      "name": "NUM",
      "value": 0
    }],
    "output": "tfnumber",
    "colour": "%{BKY_ML_HUE}",
    "helpUrl": "https://deeplearnjs.org/docs/api/classes/scalar.html",
    "tooltip": "A Deeplearn.js scalar",
    "extensions": ["parent_tooltip_when_inline"]
  },
  {
    "type": "tf_array1d",
    "message0": "Matrix from %1",
    "args0": [{
      "type": "input_value",
      "name": "NUM",
      "check": "Array"
    }],
    "inputsInline": true,
    "output": "tfnumber",
    "colour": "%{BKY_ML_HUE}",
    "helpUrl": "https://deeplearnjs.org/docs/api/classes/array1d.html",
    "tooltip": "A Deeplearn.js Array1D",
    "extensions": ["parent_tooltip_when_inline"]
  },
  {
    "type": "dl_predict",
    "message0": "Predict label for %1",
    "args0": [{
      "type": "input_value",
      "name": "NUM",
      "check": "Array"
    }],
    "inputsInline": true,
    "output": "tfnumber",
    "colour": "%{BKY_ML_HUE}",
    "helpUrl": "https://deeplearnjs.org/docs/api/classes/array1d.html",
    "tooltip": "A Deeplearn.js Array1D",
    "extensions": ["parent_tooltip_when_inline"]
  },
  {
    "type": "tf_get_scalar",
    "message0": "Text from Vector %1",
    "args0": [{
      "type": "input_value",
      "name": "NUM",
      "check": "DLnumber"
    }],
    "output": "Number",
    "colour": "%{BKY_HISTOGRAM_HUE}",
    "helpUrl": "https://deeplearnjs.org/docs/api/classes/ndarray.html#get",
    "tooltip": "Get raw value ",
    "extensions": ["parent_tooltip_when_inline"]
  },

    // Block for basic arithmetic operator.
  {
    "type": "tf_arithmetic",
    "message0": "A %1 %2 %3 B %4",
    "args0": [
      {
        "type": "input_value",
        "name": "A",
        "check": "tfnumber",
        "align": "RIGHT"
      },
      {
        "type": "field_dropdown",
        "name": "OP",
        "options": [
          [
            "+",
            "ADD"
          ],
          [
            "-",
            "MINUS"
          ],
          [
            "×",
            "MULTIPLY"
          ],
          [
            "÷",
            "DIVIDE"
          ],
          [
            "max",
            "MAX"
          ],
          [
            "min",
            "MIN"
          ],
          [
            "pow",
            "POW"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "B",
        "check": "tfnumber",
        "align": "RIGHT"
      }
    ],
    "inputsInline": false,
    "output": "tfnumber",
    "colour": "%{BKY_ML_HUE}",
    "helpUrl": "https://deeplearnjs.org/docs/api/classes/ndarraymath.html",
    "extensions": ["math_op_tooltip"]
  },
  {
    "type": "print",
    "message0": "Print value of  %1",
    "args0": [
      {
        "type": "input_value",
        "name": "tensor",
        "check": [
          "tfnumber",
          "tensor"
        ]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
  "type": "tf_basic_math",
  "message0": "Perform %1 on %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "math",
      "options": [
        [
          "absolute",
          "abs"
        ],
        [
          "acos",
          "acos"
        ],
        [
          "asin",
          "asin"
        ],
        [
          "tan",
          "atan"
        ],
        [
          "ceil",
          "ceil"
        ],
        [
          "floor",
          "floor"
        ],
        [
          "log",
          "log"
        ],
        [
          "sigmoid",
          "sigmoid"
        ],
        [
          "square",
          "square"
        ],
        [
          "sqrt",
          "sqrt"
        ],
        [
          "tanh",
          "tanh"
        ],
        [
          "relu",
          "relu"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "tensor",
      "check": "tfnumber"
    }
  ],
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

]);



Blockly.Blocks['dl_constant'] = {
  init: function() {
    this.appendDummyInput()
            .appendField("")
            .appendField(new Blockly.FieldNumber(0), "NUM");
    this.setColour(Blockly.Msg.ML_HUE);
    this.setOutput(true, null);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};


