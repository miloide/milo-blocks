
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
    "message0": "Full Connected Layer %1 Use Bias %2 %3 Number of nodes %4 Activation Function %5",
    "args0": [
      {
        "type": "input_dummy",
        "align": "CENTRE"
      },
      {
        "type": "field_checkbox",
        "name": "bias",
        "checked": true
      },
      {
        "type":"input_dummy",
        "align":"RIGHT"
      },
      {
        "type": "input_value",
        "name": "units",
        "check": "Number",
        "align": "RIGHT"
      },
      {
        "type": "field_dropdown",
        "name": "activation",
        "options": [
          [
            "none",
            ""
          ],
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
          ],
          [
            "elu",
            "elu"
          ],
          [
            "tanh",
            "tanh"
          ],
          [
            "linear",
            "linear"
          ],
          [
            "hardsigmoid",
            "hardsigmoid"
          ]
        ]
      }
    ],
    "inputsInline": false,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 180,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "tf_neural_network",
    "message0": "Create Neual Network %1 Number of features %2 %3 Add layers %4 Options %5",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_number",
        "name": "features",
        "value": 0
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "model",
        "align": "RIGHT"
      },
      {
        "type": "input_statement",
        "name": "NAME",
        "align": "RIGHT"
      }
    ],
    "output": null,
    "colour": 160,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "tf_neural_network_train",
    "message0": "Train Neural Network %1 Model %2 Number of iterations %3 X %4 Y %5",
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
        "name": "epochs",
        "align": "RIGHT"
      },
      {
        "type": "input_value",
        "name": "x",
        "check": "Array",
        "align": "RIGHT"
      },
      {
        "type": "input_value",
        "name": "y",
        "check": "Array",
        "align": "RIGHT"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 160,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "tf_neural_network_predict",
    "message0": "Predict with %1 Model %2 Input %3",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "model",
        "check": "tf_neural_network",
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
    "colour": 160,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "tf_neural_network_optimizer",
    "message0": "Select optimizer  %1 %2 With learning rate %3",
    "args0": [
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
            "rmsprop",
            "rmsprop"
          ],
          [
            "adagrad",
            "adagrad"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "rate",
        "check": "Number",
        "align": "RIGHT"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 180,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "tf_neural_network_loss",
    "message0": "Set loss function to  %1",
    "args0": [
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
    "colour": 180,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "tf_neural_network_metrics",
    "message0": "Set training metrics to  %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "metrics",
        "options": [
          [
            "accuracy",
            "accuracy"
          ]
        ]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 180,
    "tooltip": "",
    "helpUrl": ""
  }
]);
