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
goog.provide('Blockly.JavaScript.tf');
goog.require('Blockly.JavaScript');


Blockly.JavaScript['tf_number'] = function(block) {
    var arg0 = parseFloat(block.getFieldValue("NUM"));
    var code = "tf.scalar(" + arg0 +")";
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['tf_tensor'] = function(block) {
    var arg0 = Blockly.JavaScript.valueToCode(block, "NUM", Blockly.JavaScript.ORDER_FUNCTION_CALL);
    var code = "tf.tensor(" + arg0 +")";
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['tf_get_scalar'] = function(block) {
    var zero = "tf.scalar(0)";
    arg0 = Blockly.JavaScript.valueToCode(block, 'NUM', Blockly.JavaScript.ORDER_ATOMIC) || zero;
    var code = arg0+".dataSync()";
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['tf_arithmetic'] = function(block) {
    // Basic arithmetic operators, and power.
    var OPERATORS = {
      'ADD': ['add', Blockly.JavaScript.ORDER_ADDITION],
      'MINUS': ['sub', Blockly.JavaScript.ORDER_SUBTRACTION],
      'MULTIPLY': ['mul', Blockly.JavaScript.ORDER_MULTIPLICATION],
      'DIVIDE': ['div', Blockly.JavaScript.ORDER_DIVISION],
      'MIN':['minimum', Blockly.JavaScript.ORDER_ATOMIC],
      'MAX':['maximum', Blockly.JavaScript.ORDER_ATOMIC],
      'POW':['pow', Blockly.JavaScript.ORDER_ATOMIC]
    };
    var tuple = OPERATORS[block.getFieldValue('OP')];
    var operator = tuple[0];
    var order = tuple[1];
    var argument0 = Blockly.JavaScript.valueToCode(block, 'A', order) || 0;
    var argument1 = Blockly.JavaScript.valueToCode(block, 'B', order) || 0;
    var code;
    code = argument0+'.' + operator +'('+ argument1 + ')';
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['tf_print'] = function(block) {
    var value_tensor = Blockly.JavaScript.valueToCode(block, 'tensor', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'console.webLog(' + value_tensor +'.toString().split("values:")[1]);\n';
    return code;
  };