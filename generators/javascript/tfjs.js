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
goog.provide('Blockly.JavaScript.dl');
goog.require('Blockly.JavaScript');


Blockly.JavaScript.dl_constant = function(a) {
    return [parseFloat(a.getFieldValue("NUM")),Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript.dl_createoptimizer = function(block){
    var optimizer = block.getFieldValue('optimizer');
    var rate = parseFloat(block.getFieldValue('rate'));
    var numBatches = parseInt(block.getFieldValue('numBatches'));
    var batchSize = parseInt(block.getFieldValue('batchSize'));
    var code =  '\n const rate = '+ rate +';' +'\n const optimizer = '+ 'new dl.'+optimizer+'(rate)' + ';'  + '\n' + '\n const numBatches = '+ numBatches+';' +'\n'+ '\n const batchSize = ' + batchSize+';' + '\n' ;
    return code;
};

Blockly.JavaScript['dl_predict'] = function(block) {
    var number_testx = Blockly.JavaScript.valueToCode(block, "NUM", Blockly.JavaScript.ORDER_FUNCTION_CALL);
    var code = 'session.eval(outputTensor,[{tensor: inputTensor, data: dl.Array1D.new('+number_testx+')}])';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['tf_number'] = function(block) {
    var arg0 = parseFloat(block.getFieldValue("NUM"));
    var code = "tf.scalar(" + arg0 +")";
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['tf_array1d'] = function(block) {
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

Blockly.JavaScript['print'] = function(block) {
    var value_tensor = Blockly.JavaScript.valueToCode(block, 'tensor', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'console.webLog(' + value_tensor +'.toString().split("values:")[1].trim() \n';
    return code;
  };
Blockly.JavaScript['tf_basic_math'] = function(block) {
    var dropdown_math = block.getFieldValue('math');
    var value_tensor = Blockly.JavaScript.valueToCode(block, 'tensor', Blockly.JavaScript.ORDER_ATOMIC);
    var code = value_tensor+'.'+dropdown_math + '() \n';
    return [code, Blockly.JavaScript.ORDER_NONE];
};