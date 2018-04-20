
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

'use strict';

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.defineBlocksWithJsonArray([
  {
    "type": "tf_dense_layer",
    "lastDummyAlign0": "RIGHT",
    "message0": "Dense Layer %1 Number of units %2 Activation Function %3",
    "args0": [
      {
        "type": "input_dummy",
        "align": "CENTRE"
      },
      {
        "type": "input_value",
        "name": "NAME",
        "check": "Number",
        "align": "RIGHT"
      },
      {
        "type": "field_dropdown",
        "name": "activation",
        "options": [
          [
            "softmax",
            "softmax"
          ],
          [
            "sigmoid",
            "sigmoid"
          ],
          [
            "relu",
            "relu"
          ]
        ]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "inputsInline": false,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "tf_model_compile",
    "lastDummyAlign0": "RIGHT",
    "message0": "Compile Model %1 Compile %2 Learning rate %3 %4 %5 Loss function %6",
    "args0": [
      {
        "type": "input_dummy",
        "align": "CENTRE"
      },
      {
        "type": "input_value",
        "name": "model",
        "align": "RIGHT"
      },
      {
        "type": "input_value",
        "name": "rate",
        "check": "Number",
        "align": "RIGHT"
      },
      {
        "type": "field_dropdown",
        "name": "optimizer",
        "options": [
          [
            "adam",
            "adam"
          ],
          [
            "sgd",
            "sgd"
          ],
          [
            "adagrad",
            "adagrad"
          ],
          [
            "adamax",
            "adamax"
          ]
        ]
      },
      {
        "type": "input_dummy",
        "align": "RIGHT"
      },
      {
        "type": "field_dropdown",
        "name": "loss",
        "options": [
          [
            "meanSquaredError",
            "meanSquaredError"
          ],
          [
            "categoricalCrossentropy",
            "categoricalCrossentropy"
          ]
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
    "type": "tf_model",
    "message0": "Create Tensorflow Model %1 X (Features) %2 Add layers %3",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "data",
        "check": ["tensor","Array","Number"],
        "align": "RIGHT"
      },
      {
        "type": "input_statement",
        "name": "model"
      }
    ],
    "output": "tfmodel",
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "tf_train_model",
    "message0": "Train model %1 Model %2 Y %3",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "model",
        "align": "RIGHT"
      },
      {
        "type": "input_value",
        "name": "y",
        "check": ["tensor","Array","Number"],
        "align": "RIGHT"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "tf_model_predict",
    "message0": "Predict with %1 Model %2 Input %3",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "model",
        "check": "tf_model",
        "align": "RIGHT"
      },
      {
        "type": "input_value",
        "check": ["Number","Array"],
        "name": "tensor",
        "align": "RIGHT"
      }
    ],
    "output": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  }
]);
